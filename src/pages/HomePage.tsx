import { BuildFocus } from "../components/home/BuildFocus";
import { FeaturedProjects } from "../components/home/FeaturedProjects";
import { Hero } from "../components/home/Hero";
import { HomeCarousel } from "../components/home/HomeCarousel";
import { HomeCta } from "../components/home/HomeCta";
import { ProfileStats } from "../components/home/ProfileStats";

export function HomePage() {
  return (
    <>
      <Hero />
      <HomeCarousel />
      <FeaturedProjects />
      <ProfileStats />
      <BuildFocus />
      <HomeCta />
    </>
  );
}

