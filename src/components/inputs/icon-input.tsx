import { IconType } from "react-icons";

type IconInputProps = {
  onClick: (value: string) => void;
  selected?: boolean;
  label: string;
  emoji?: string;
  svgicon?: IconType;
};

const IconInput = ({
  onClick,
  selected,
  label,
  emoji,
  svgicon: Svgicon,
}: IconInputProps) => {
  return (
    <div
      onClick={() => onClick(label)}
      className={`flex cursor-pointer flex-col gap-3 rounded-full border-2 px-7 py-2 transition hover:border-black
      ${selected ? "border-black" : "border-neutral-200"}
      `}
    >
      {emoji && <span>{emoji}</span>}

      {Svgicon && <Svgicon size={20} color="black" />}
    </div>
  );
};

export default IconInput;
