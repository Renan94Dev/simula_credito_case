import { ArrowRight } from "lucide-react";
import Image from "next/image";

type LoanDetailCardProps = {
	name: string;
	image: string;
	value: number;
	aa: number;
	am: number;
};

export const LoanDetailCard = ({
	name,
	image,
	value,
	aa,
	am,
}: LoanDetailCardProps) => {
	return (
		<div className="flex-1 border border-gray-200 rounded-md p-4 space-y-2 shadow-md cursor-pointer group">
			<div className="flex items-center justify-between">
				<div className="flex flex-col gap-2">
					<span className="text-xl font-medium">Banco {name}</span>

					<span className="text-base text-gray-600">
						Valor liberado: R$ {new Intl.NumberFormat("pt-BR").format(value)}
					</span>

					<span className="flex gap-2 text-gray-500">
						<small>a.m: {am}%</small>
						<small>|</small>
						<small>a.a: {aa}%</small>
					</span>
				</div>

				<Image width={80} height={80} alt={name} src={image} />
			</div>

			<div className="flex items-center gap-1 text-primary group-hover:underline">
				<span>Ver detalhes</span>
				<span>
					<ArrowRight size={18} />
				</span>
			</div>
		</div>
	);
};
