import LinkedinLink from "./components/linkedin-link";
import ProfileInfo from "./components/profile-info";

export default function Home() {
  return (
    <main className="h-screen flex flex-col
    items-center justify-center">
      <ProfileInfo />

      <div className="m-4 p-4 border-gray-300 border bg-gray-100 rounded-lg">
        <span className="text-md font-normal text-gray-600"> New portfolio version coming soon... 🔥</span>
      </div>

      <div className="mt-1">
        <LinkedinLink />
      </div>
    </main>
  );
}
