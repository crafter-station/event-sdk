export interface MentorDisplay {
	name: string;
	slug: string;
	title?: string;
	company?: string;
	photoUrl?: string;
	mentoringArea?: string;
	availability?: string;
	linkedin?: string;
}

export interface MentorsSectionProps {
	mentors: MentorDisplay[];
	ctaUrl?: string;
	ctaLabel?: string;
	className?: string;
}

export function MentorsSection({ mentors, ctaUrl, ctaLabel, className }: MentorsSectionProps) {
	return (
		<section className={className} data-section="mentors">
			<div>
				{mentors.map((mentor) => (
					<div key={mentor.slug}>
						{mentor.photoUrl && <img src={mentor.photoUrl} alt={mentor.name} />}
						<h3>{mentor.name}</h3>
						{mentor.title && (
							<p>
								{mentor.title}
								{mentor.company ? ` @ ${mentor.company}` : ""}
							</p>
						)}
						{mentor.mentoringArea && <span>{mentor.mentoringArea}</span>}
						{mentor.availability && <p>{mentor.availability}</p>}
					</div>
				))}
			</div>
			{ctaUrl && (
				<a href={ctaUrl}>{ctaLabel ?? "Become a Mentor"}</a>
			)}
		</section>
	);
}
