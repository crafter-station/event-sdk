export interface CommunityPartnerDisplay {
	name: string;
	slug: string;
	logoUrl?: string;
	websiteUrl?: string;
}

export interface CommunityPartnersSectionProps {
	partners: CommunityPartnerDisplay[];
	className?: string;
}

export function CommunityPartnersSection({ partners, className }: CommunityPartnersSectionProps) {
	return (
		<section className={className} data-section="community-partners">
			<div>
				{partners.map((partner) => {
					const content = partner.logoUrl ? (
						<img src={partner.logoUrl} alt={partner.name} />
					) : (
						<span>{partner.name}</span>
					);

					return partner.websiteUrl ? (
						<a key={partner.slug} href={partner.websiteUrl} target="_blank" rel="noopener noreferrer">
							{content}
						</a>
					) : (
						<div key={partner.slug}>{content}</div>
					);
				})}
			</div>
		</section>
	);
}
