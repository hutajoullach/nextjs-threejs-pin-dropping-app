import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";

type ScrollButtonTopProps = {
  onClick: (value: string) => void;
  direction: string;
};

export const ScrollButtonTop = ({
  onClick,
  direction,
}: ScrollButtonTopProps) => {
  return (
    <div className="">
      <GiAirplaneArrival
        onClick={() => onClick(direction)}
        color="gray"
        size={28}
      />
    </div>
  );
};

type ScrollButtonBottomProps = {
  onClick: (value: string) => void;
  direction: string;
};

export const ScrollButtonBottom = ({
  onClick,
  direction,
}: ScrollButtonBottomProps) => {
  return (
    <div className="">
      <GiAirplaneDeparture
        onClick={() => onClick(direction)}
        color="gray"
        size={28}
      />
    </div>
  );
};
