import { event } from "@/lib/event";
import { Hero } from "@/components/sections/hero";
import { Sponsors } from "@/components/sections/sponsors";
import { Speakers } from "@/components/sections/speakers";
import { Schedule } from "@/components/sections/schedule";
import { Judges } from "@/components/sections/judges";
import { Tracks } from "@/components/sections/tracks";
import { Countdown } from "@/components/sections/countdown";
import { FAQ } from "@/components/sections/faq";
import { Community } from "@/components/sections/community";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Countdown />
        {event.features.sponsors && <Sponsors />}
        {event.features.speakers?.enabled && <Speakers />}
        {event.features.schedule?.enabled && <Schedule />}
        {event.features.hackathon?.enabled && <Tracks />}
        {event.features.judges?.enabled && <Judges />}
        {event.features.faq && <FAQ />}
        {event.features.community && <Community />}
      </main>
      <Footer />
    </>
  );
}
