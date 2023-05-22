import { IconType } from "react-icons";

type IconInputProps = {
  onClick: (value: string) => void;
  selected?: boolean;
  label: string;
  emoji?: string;
  svgIcon?: IconType;
  svgColor?: string;
};

const IconInput = ({
  onClick,
  selected,
  label,
  emoji,
  svgIcon: SvgIcon,
  svgColor,
}: IconInputProps) => {
  return (
    <div
      onClick={() => onClick(label)}
      className={`flex cursor-pointer flex-col gap-3 rounded-full border-2 px-7 py-2 transition hover:border-black
      ${selected ? "border-black" : "border-neutral-200"}
      `}
    >
      {emoji && <span>{emoji}</span>}

      {SvgIcon && <SvgIcon size={20} color={svgColor} />}
    </div>
  );
};

export default IconInput;
