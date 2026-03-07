"use client";
import type { ReactNode } from "react";
import { motion, type Variants } from "motion/react";

export type PresetType = "fade" | "slide" | "blur-slide" | "scale";

export type AnimatedGroupProps = {
	children: ReactNode;
	className?: string;
	preset?: PresetType;
	triggerOnView?: boolean;
};

const containerVariants: Variants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const presets: Record<PresetType, Variants> = {
	fade: {
		hidden: { opacity: 0 },
		visible: { opacity: 1 },
	},
	slide: {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	},
	"blur-slide": {
		hidden: { opacity: 0, filter: "blur(4px)", y: 20 },
		visible: { opacity: 1, filter: "blur(0px)", y: 0 },
	},
	scale: {
		hidden: { opacity: 0, scale: 0.8 },
		visible: { opacity: 1, scale: 1 },
	},
};

export function AnimatedGroup({
	children,
	className,
	preset = "fade",
	triggerOnView = false,
}: AnimatedGroupProps) {
	const itemVariants = presets[preset];

	const animationProps = triggerOnView
		? { initial: "hidden" as const, whileInView: "visible" as const, viewport: { once: true, amount: 0.3 } }
		: { initial: "hidden" as const, animate: "visible" as const };

	return (
		<motion.div {...animationProps} variants={containerVariants} className={className}>
			{Array.isArray(children)
				? (children as ReactNode[]).map((child, index) => (
						<motion.div key={index} variants={itemVariants}>{child}</motion.div>
					))
				: <motion.div variants={itemVariants}>{children}</motion.div>}
		</motion.div>
	);
}
