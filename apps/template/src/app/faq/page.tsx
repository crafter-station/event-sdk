import { event } from "@/lib/event";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FAQ } from "@/components/sections/faq";

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
