import Avatar from "@/app/components/avatar";

export default function ProfileInfo() {
  return (
    <div className="flex flex-col items-center">
      <Avatar />
      <h1 className="text-gray-800 font-bold text-2xl">Pedro Leal</h1>
      <span className="text-gray-600">Software Engineer</span>
    </div>
  )
}