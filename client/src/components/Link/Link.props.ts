import { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface LinkProps
	extends DetailedHTMLProps<
	AnchorHTMLAttributes<HTMLAnchorElement>,
	HTMLAnchorElement
	> {
	children: ReactNode;
	size?: "little" | "middle" | "big";
	weight?: "light" | "regular" | "bold";
	align?: "center" | "left" | "right";
	underline?: "auto" | "hover" | "none";
	button?: "button";
	href: string;
}