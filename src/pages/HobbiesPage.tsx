import { HobbiesCallToAction } from "../components/hobbies/HobbiesCallToAction";
import { HobbiesHero } from "../components/hobbies/HobbiesHero";
import { HobbyVideoSection } from "../components/hobbies/HobbyVideoSection";
import { MusicCreationLinks } from "../components/hobbies/MusicCreationLinks";
import { OtherHobbies } from "../components/hobbies/OtherHobbies";
import { PianoSection } from "../components/hobbies/PianoSection";

export function HobbiesPage() {
  return (
    <>
      <HobbiesHero />
      <PianoSection />
      <HobbyVideoSection />
      <MusicCreationLinks />
      <OtherHobbies />
      <HobbiesCallToAction />
    </>
  );
}
