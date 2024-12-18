import { Plus } from "lucide-react";
import { ButtonTypes } from "../types/ButtonTypes";

interface ActionButtonProps {
  label: string;
  onClick: (() => void) | ((e: React.FormEvent) => void);
  type: ButtonTypes;
  isNavbarButton?: boolean;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  label,
  onClick,
  type,
  isNavbarButton,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${
        isNavbarButton && "flex items-center gap-2"
      } px-4 py-2 text-sm font-medium rounded-md transition-colors"${
        type === ButtonTypes.Primary
          ? " text-white bg-blue-600 hover:bg-blue-700"
          : " text-gray-700 bg-gray-100 hover:bg-gray-200"
      }`}
    >
      {isNavbarButton && <Plus className="w-5 h-5" />}
      {label}
    </button>
  );
};

export default ActionButton;
