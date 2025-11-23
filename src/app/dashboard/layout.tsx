import { Header } from "@/ui/header";
import { SideBar } from "@/ui/sideBar";

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="grid grid-rows-[auto_1fr] min-h-screen">
			<Header />

			<div className="grid  grid-cols-[auto_1fr] min-h-full">
				<SideBar />

				{children}
			</div>
		</div>
	);
}
