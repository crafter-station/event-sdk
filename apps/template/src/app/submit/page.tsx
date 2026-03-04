import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { event } from "@/lib/event";
import { SubmissionForm } from "./submission-form";

export const metadata = {
	title: `Submit | ${event.name}`,
	description: "Submit your hackathon project",
};

export default function SubmitPage() {
	const hackathon = event.features.hackathon;
	if (!hackathon?.enabled) return null;

	return (
		<>
			<Navbar />
			<main className="pt-20 px-6 pb-20">
				<div className="mx-auto max-w-2xl">
					<div className="text-center mb-12">
						<p className="font-mono text-xs text-[var(--accent)] tracking-widest uppercase mb-2">
							Submissions
						</p>
						<h1 className="font-[family-name:var(--font-display)] text-4xl font-bold">
							Submit Your <span className="text-[var(--accent)]">Project</span>
						</h1>
						{hackathon.submissionDeadline && (
							<p className="mt-4 text-sm text-[var(--muted)]">
								Deadline:{" "}
								{new Date(hackathon.submissionDeadline).toLocaleDateString("en-US", {
									month: "long",
									day: "numeric",
									year: "numeric",
									hour: "2-digit",
									minute: "2-digit",
								})}
							</p>
						)}
					</div>
					<SubmissionForm />
				</div>
			</main>
			<Footer />
		</>
	);
}
