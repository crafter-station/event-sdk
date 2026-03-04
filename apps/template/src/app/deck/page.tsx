import { event } from "@/lib/event";
import { DeckContent } from "./deck-content";

export const metadata = {
  title: `Sponsor ${event.name}`,
  description: `Become a sponsor of ${event.name}`,
};

export default function DeckPage() {
  return <DeckContent />;
}
