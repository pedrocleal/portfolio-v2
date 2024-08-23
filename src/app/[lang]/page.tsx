import { getDictionary } from "../../../get-dictionary";
import { Locale } from "../../../i18n-config";
import LanguageProvider from "../context/language-provider";
import PreferencesMenu from "./components/preferences-menu";
import ProfileInfo from "./components/profile-info";
import SocialLinks from "./components/social-links";
import WarningMessage from "./components/warning-message";

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang);

  return (
    <main
      className="h-screen flex flex-col
    items-center justify-center px-4 max-w-sm m-auto"
    >
      <ProfileInfo dictionary={dictionary["profile-info"]} />
      <PreferencesMenu />
      <WarningMessage dictionary={dictionary["warning-message"]} />
      <SocialLinks />
    </main>
  );
}
