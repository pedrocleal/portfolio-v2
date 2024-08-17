import Avatar from "../avatar";

export default function ProfileInfo() {
  return (
    <div className="flex flex-col items-center">
      <Avatar />
      <h1 className="text-gray-800 font-bold text-2xl">Pedro Leal</h1>
      <span>Software Engineer</span>
    </div>
  )
}