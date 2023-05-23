import { api } from "~/utils/api";
import type { RouterOutputs } from "~/utils/api";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

type GeolocationPinWithUser =
  RouterOutputs["geolocationPins"]["getAll"][number];

const GeolocationPinCard = ({
  geolocationPin: pin,
  user,
}: GeolocationPinWithUser) => {
  return <div>geolocation-pin-card</div>;
};

export default GeolocationPinCard;
