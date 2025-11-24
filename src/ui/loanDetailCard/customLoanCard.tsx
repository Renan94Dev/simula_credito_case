import { ArrowRight, ClipboardPenLine } from "lucide-react";
import { Box } from "../box";

export const CustomLoanCard = () => {
	return (
		<Box
			key={Math.random() * 100}
			className="flex-1 border border-gray-200 rounded-md space-y-2 group cursor-pointer"
		>
			<div className="grid grid-rows-[0.5fr_0.9fr] gap-2">
				<span className="text-xl font-medium flex items-center gap-2">
					<ClipboardPenLine size={26} />
					Simulação personalizada
				</span>
			</div>

			<div className="flex items-center gap-1 self-end text-primary group-hover:underline">
				<span>Personalizar</span>
				<span>
					<ArrowRight size={18} />
				</span>
			</div>
		</Box>
	);
};
