import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import FeaturedJobs from "@/components/FeaturedJobs";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Stats />
      <FeaturedJobs />
    </main>
  );
}
