import { AlertCircle } from "lucide-react";

function ErrorMessage({
  message,
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-300 p-5">

      <AlertCircle />

      <p>{message}</p>

    </div>
  );
}

export default ErrorMessage;