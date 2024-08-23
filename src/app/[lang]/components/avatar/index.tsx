import Image from "next/image";
import avatar from "@/assets/avatar.jpeg";

export default function Avatar() {
  return (
    <Image
      src={avatar}
      alt="Pedro Leal"
      className="rounded-full w-24 h-24 object-cover mb-2 shadow-sm border border-gray-200"
    />
  );
}
