import { XCircleIcon } from "lucide-react";

type Props = {
  error?: string | null;
};

export const FormErrorMessage = ({ error }: Props) => {
  if (!error) return null;

  return (
    <div className="w-full py-2 px-3 bg-destructive/10 dark:bg-destructive/25 flex items-center gap-x-2 rounded-md">
      <XCircleIcon className="size-4 text-destructive dark:text-red-600" />
      <p className="text-sm text-destructive dark:text-red-600">{error}</p>
    </div>
  );
};
