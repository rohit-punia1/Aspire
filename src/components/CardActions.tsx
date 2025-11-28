import React from "react";
import FreezeIcon from "../icons/Freezecard.svg?react";
import LimitIcon from "../icons/Setspendlimit.svg?react";
import GPayIcon from "../icons/GPay.svg?react";
import ReplaceIcon from "../icons/Replacecard.svg?react";
import CancelIcon from "../icons/Deactivatecard.svg?react";

// Map icon names to components
const icons = {
  Freeze: FreezeIcon,
  Limit: LimitIcon,
  GPay: GPayIcon,
  Replace: ReplaceIcon,
  Cancel: CancelIcon,
};

export type IconName = keyof typeof icons;

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
}

const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  const SvgIcon = icons[name];
  return <SvgIcon {...props} />;
};

interface ActionItem {
  label: string;
  icon: IconName;
}

const actions: ActionItem[] = [
  { label: "Freeze card", icon: "Freeze" },
  { label: "Set spend limit", icon: "Limit" },
  { label: "Add to GPay", icon: "GPay" },
  { label: "Replace card", icon: "Replace" },
  { label: "Cancel card", icon: "Cancel" },
];

const CardActions: React.FC = () => {
  return (
    <div className="w-full bg-cardAction gap-[30px] rounded-2xl p-4   md:mt-4 items-center justify-between md:max-w-[414px] flex">
      {actions.map((item) => (
        <div
          key={item.label}
          className="flex flex-col items-center gap-[7px]"
        >
      
          <div className={`w-8 h-8 rounded-full ${item.icon==="GPay" ?"bg-white":"bg-[#1D4A9A]"} flex items-center justify-center`}>
            <Icon
              name={item.icon}
              className=" text-white"
            />
          </div>

     
          <p className="text-[11px] text-cardActionText text-center">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CardActions;
