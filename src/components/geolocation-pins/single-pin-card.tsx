import Image from "next/image";

import theme from "../../styles/styles";
import { emojis, svgicons } from "../../constants";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const SinglePinCard = () => {
  return (
    <div
      className={`${theme.bg.cardBackground} flex cursor-pointer rounded-lg px-3 py-3 hover:opacity-80`}
    >
      <div className="flex w-full flex-col gap-2">
        <div className="flex w-full rounded-xl">
          {/* <Image
            src={user.profileImageUrl}
            width={45}
            height={45}
            className="rounded-full object-cover"
            alt=""
          /> */}
          <div className="flex w-full justify-end px-3 py-3 text-xs font-semibold text-neutral-600">
            {/* @{user.username} */}
          </div>
        </div>

        <span className="flex justify-center text-xs font-semibold text-neutral-600">
          dropped icon
        </span>
        <div className="flex rounded-full bg-white px-6 py-2 text-xs text-neutral-500">
          {/* {pin.icontype === "emoji" &&
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
            })} */}

          {/* {pin.icontype === "svg" &&
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
            })} */}
        </div>

        <div className="-mb-1 flex flex-col justify-between rounded-lg px-6 text-xs text-neutral-600">
          <span className="font-light">dropped @</span>
          {/* {pin.city && pin.country && (
            <span className="font-semibold">
              {pin.city}, {pin.country}
            </span>
          )} */}
          <span className="flex-end flex font-light">
            {/* {dayjs(pin.createdAt).fromNow()} */}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SinglePinCard;
