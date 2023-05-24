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
    <div className="mb-1 rounded-sm bg-slate-700 px-1 pt-1 transition hover:opacity-80">
      <GiAirplaneDeparture
        onClick={() => onClick(direction)}
        color="white"
        size={34}
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
    <div className="rounded-sm bg-slate-700 px-1 pt-1 transition hover:opacity-80">
      <GiAirplaneArrival
        onClick={() => onClick(direction)}
        color="white"
        size={34}
      />
    </div>
  );
};
