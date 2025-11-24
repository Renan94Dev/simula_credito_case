"use client";

import { CircleQuestionMark, House, Landmark, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Box } from "../box";

export const SideBar = () => {
	const pathname = usePathname();

	return (
		<Box asChild>
			<aside className="min-w-64">
				<div className="grid grid-rows-[1fr_auto] h-full overflow-hidden">
					<div className="overflow-y-auto space-y-2">
						{SideBarContent.map((item) => (
							<Link
								className="flex items-center gap-2 p-2 rounded-md text-zinc-400 font-medium transition-colors duration-100 hover:bg-primary/40 hover:text-primary data-[active=true]:text-primary"
								href={item.active ? item.href : "#"}
								key={item.label}
								data-active={pathname === item.href}
							>
								{item.svg}
								{item.label}
							</Link>
						))}
					</div>

					<div className="space-y-2">
						{SideBarFooterContent.map((item) => (
							<Link
								className="flex items-center gap-2 p-2 rounded-md text-zinc-400 font-medium transition-colors duration-100 hover:bg-primary/40 hover:text-primary data-[active=true]:text-primary"
								href={item.active ? item.href : "#"}
								key={item.label}
								data-active={pathname === item.href}
							>
								{item.svg}
								{item.label}
							</Link>
						))}
					</div>
				</div>
			</aside>
		</Box>
	);
};

const SideBarContent = [
	{
		label: "Home",
		href: "/dashboard",
		svg: <House />,
		active: true,
	},
	{
		label: "Bancos",
		href: "/dashboard/bancos",
		svg: <Landmark />,
		active: false,
	},
];

const SideBarFooterContent = [
	{
		label: "Ajuda",
		href: "/dashboard/ajuda",
		svg: <CircleQuestionMark />,
		active: false,
	},
	{
		label: "Sair",
		href: "/",
		svg: <LogOut />,
		active: true,
	},
] as const;
