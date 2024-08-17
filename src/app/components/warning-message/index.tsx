import { Alert, AlertDescription, AlertTitle } from "@/shad-components/alert"


export default function WarningMessage() {
  return (
    <Alert className="flex items-start gap-4 w-full max-w-sm my-4">
      <strong className="text-lg">👋🏾</strong>
      <div>
        <AlertTitle className="text-lg">
          Yoo!
        </AlertTitle>
        <AlertDescription className="text-gray-600">
          This is a side project in progress. I'm working on it in my free time and have a lot of ideas to implement. Stay tuned!
        </AlertDescription>
      </div>
    </Alert>
  );
}