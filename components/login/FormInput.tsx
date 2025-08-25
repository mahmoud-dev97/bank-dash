import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LucideIcon } from "lucide-react";

type Props = {
  id: string;
  label: string;
  value: string;
  placeholder: string;
  onChange: (val: string) => void;
  error?: string;
  icon?: LucideIcon;
};

export default function FormInput({
  id,
  label,
  value,
  placeholder,
  onChange,
  error,
  icon: Icon,
}: Props) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-sm text-gray-600">
        {label}
      </Label>
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        )}
        <Input
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="pl-10 h-12 border-0 border-b border-gray-300 rounded-none bg-transparent focus:border-gray-500 focus:ring-0"
        />
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}
