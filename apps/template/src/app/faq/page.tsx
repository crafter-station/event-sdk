import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { FAQ } from "@/components/sections/faq";
import { event } from "@/lib/event";

export const metadata = {
	title: `FAQ | ${event.name}`,
};

export default function FAQPage() {
	return (
		<>
			<Navbar />
			<main className="pt-20 pb-20">
				<FAQ />
			</main>
			<Footer />
		</>
	);
}
