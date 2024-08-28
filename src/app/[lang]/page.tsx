import { getDictionary } from "../../../get-dictionary";
import { Locale } from "../../../i18n-config";
import PreferencesMenu from "./components/preferences-menu";
import ProfileInfo from "./components/profile-info";
import SocialLinks from "./components/social-links";
import Greetings from "./components/greetings";
import Projects from "./sections/projects";
import Techs from "./sections/techs";

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang);

  return (
    <main className="w-full m-auto px-4 flex flex-col items-center justify-center gap-12 sm:max-w-3xl">
      <section className="flex flex-col items-center justify-center m-auto w-full my-40">
        <div className="w-full flex items-start justify-between">
          <ProfileInfo />
          <PreferencesMenu />
        </div>

        <Greetings dictionary={dictionary["greetings"]} />

        <SocialLinks />
      </section>
      <Projects dictionary={dictionary["projects"]} />
      <Techs dictionary={dictionary["techs"]} />
    </main>
  );
}
