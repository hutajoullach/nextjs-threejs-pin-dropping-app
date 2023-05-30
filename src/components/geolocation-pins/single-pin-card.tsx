import Image from "next/image";

import { api } from "~/utils/api";
import type { RouterOutputs } from "~/utils/api";
import theme from "../../styles/styles";
import { emojis, svgicons } from "../../constants";

import { toast } from "react-hot-toast";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

type GeolocationPinWithUser =
  RouterOutputs["geolocationPins"]["getAll"][number];
const SinglePinCard = ({
  pinWithUser,
}: {
  pinWithUser: GeolocationPinWithUser;
}) => {
  const { geolocationPin: pin, user } = pinWithUser;

  return (
    <div
      className={`${theme.bg.cardBackground} flex w-full rounded-lg px-3 py-3 md:max-w-2xl`}
    >
      <div className="flex w-full flex-col gap-4 px-6 py-6">
        <div className="flex w-full flex-col items-center gap-5">
          <div className="flex w-full rounded-xl">
            <Image
              onClick={() => {
                toast.error("Profile page not available yet!");
              }}
              src={user.profileImageUrl}
              width={45}
              height={45}
              className="cursor-pointer rounded-full object-cover hover:opacity-80"
              alt=""
            />
            <div className="flex w-full justify-end px-3 py-3 text-sm font-semibold text-neutral-600">
              <div
                onClick={() => {
                  toast.error("Profile page not available yet!");
                }}
                className="cursor-pointer hover:opacity-80"
              >
                @{user.username}
              </div>
            </div>
          </div>

          <span className="text-md flex justify-center font-semibold text-neutral-600">
            dropped icon
          </span>
          <div className="flex w-full rounded-full bg-white px-6 py-2 text-xs text-neutral-500 md:max-w-xs">
            {pin.icontype === "emoji" &&
              emojis.map(({ label, emoji }) => {
                if (label === pin.emoji)
                  return (
                    <span
                      key={pin.id}
                      className="flex w-full justify-center text-lg"
                    >
                      {emoji}
                    </span>
                  );
              })}

            {pin.icontype === "svg" &&
              svgicons.map(({ label, svg: Svg }) => {
                if (label === pin.svgicon)
                  return (
                    <span
                      key={pin.id}
                      className={`flex w-full justify-center py-1 text-xl`}
                    >
                      <Svg color={pin.svgiconcolor} />
                    </span>
                  );
              })}
          </div>

          <div
            className={`${theme.font.color.primary} w-full rounded-lg bg-slate-700 px-3 py-4 text-sm`}
          >
            <p>{pin.message}</p>
          </div>
        </div>
        <div className="-mb-1 flex flex-col rounded-lg text-sm text-neutral-600">
          <span className="font-light">dropped @</span>
          {pin.city && pin.country && (
            <span className="font-semibold">
              {pin.city}, {pin.country}
            </span>
          )}
          <span className="flex-end flex font-light">
            {dayjs(pin.createdAt).fromNow()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SinglePinCard;
