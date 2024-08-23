import { getDictionary } from "../../../get-dictionary";
import { Locale } from "../../../i18n-config";
import PreferencesMenu from "./components/preferences-menu";
import ProfileInfo from "./components/profile-info";
import SocialLinks from "./components/social-links";
import Greetings from "./components/greetings";
import Projects from "./sections/projects";

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang);

  return (
    <main
      className="w-full m-auto px-4 flex flex-col items-center justify-center gap-12
      sm:max-w-3xl
    "
    >
      <section
        className="h-screen flex flex-col
      items-center justify-center max-w-sm m-auto
        w-full 
        sm:h-screen sm:mt-0
      "
      >
        <ProfileInfo dictionary={dictionary["profile-info"]} />

        <Greetings dictionary={dictionary["greetings"]} />

        <SocialLinks />
        <PreferencesMenu />
      </section>

      <Projects />
    </main>
  );
}
