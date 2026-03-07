import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Community } from "@/components/sections/community";
import { CommunityPartners } from "@/components/sections/community-partners";
import { Countdown } from "@/components/sections/countdown";
import { FAQ } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { Mentors } from "@/components/sections/mentors";
import { Speakers } from "@/components/sections/speakers";
import { Sponsors } from "@/components/sections/sponsors";
import { Tracks } from "@/components/sections/tracks";

export default function HomePage() {
	return (
		<>
			<Navbar />
			<main>
				<Hero />
				<Countdown />
				<Speakers />
				<Tracks />
				<Mentors />
				<Sponsors />
				<CommunityPartners />
				<FAQ />
				<Community />
			</main>
			<Footer />
		</>
	);
}
