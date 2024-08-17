import PreferencesMenu from "./components/preferences-menu";
import ProfileInfo from "./components/profile-info";
import SocialLinks from "./components/social-links";
import WarningMessage from "./components/warning-message";

export default function Home() {
  return (
    <main className="h-screen flex flex-col
    items-center justify-center px-4 max-w-sm m-auto">
      <ProfileInfo />
      <PreferencesMenu />
      <WarningMessage />
      <SocialLinks />
    </main>
  );
}
