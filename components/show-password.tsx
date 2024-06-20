import { EyeIcon, EyeOffIcon } from "lucide-react";

type Props = {
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
  disabled?: boolean;
};

export const ShowPassword = ({
  setShowPassword,
  showPassword,
  disabled,
}: Props) => {
  const handleTogglePassword = () => setShowPassword((prev) => !prev);

  return (
    <button
      disabled={disabled}
      onClick={handleTogglePassword}
      type="button"
      className="absolute inset-y-0 right-0 h-full w-10 border-l bg-background flex items-center justify-center text-muted-foreground hover:text-primary transition disabled:cursor-not-allowed disabled:opacity-50 rounded-r-md border disabled:bg-background/50 hover:bg-muted/50 disabled:hover:text-muted-foreground"
    >
      {showPassword ? (
        <EyeIcon className="size-4 shrink-0" />
      ) : (
        <EyeOffIcon className="size-4 shrink-0" />
      )}
    </button>
  );
};
