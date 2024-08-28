import Avatar from "../avatar";

export default function ProfileInfo() {
  return (
    <div className="flex flex-col items-start w-full">
      <Avatar />
      <h1 className="text-gray-800 font-bold text-2xl dark:text-gray-200">Pedro Leal</h1>
      <span className="text-gray-600 dark:text-gray-400">Software Engineer</span>
    </div>
  );
}
