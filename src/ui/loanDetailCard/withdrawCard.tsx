import { ArrowRight, CreditCard } from "lucide-react";
import { Box } from "../box";

type WithdrawCardProps = {
	data: {
		available: boolean;
		name: string;
		value: number;
	};
	promise: Promise<unknown>;
};

export const WithdrawCard = async ({
	data: { available, name, value },
	promise,
}: WithdrawCardProps) => {
	await promise;

	return (
		<Box
			key={Math.random() * 100}
			data-available={available}
			className="flex-1 border border-gray-200 rounded-md space-y-2 group data-[available=true]:cursor-pointer"
		>
			{available ? (
				<>
					<div className="flex flex-col gap-2">
						<span className="text-xl font-medium flex items-center gap-2">
							<CreditCard size={26} />
							{name}
						</span>

						<span className="text-base text-gray-600">
							Valor liberado:{" "}
							<span className="font-medium text-primary">
								R$ {new Intl.NumberFormat("pt-BR").format(value)}
							</span>
						</span>
					</div>

					<div className="flex items-center gap-1 text-primary group-hover:underline">
						<span>Ver detalhes</span>
						<span>
							<ArrowRight size={18} />
						</span>
					</div>
				</>
			) : (
				<div className="grid grid-rows-[1fr_2fr]">
					<div className="text-xl font-medium flex items-center gap-2">
						<CreditCard size={26} />
						{name}
					</div>

					<div className="text-base font-medium underline text-gray-600 self-center">
						Sem oportunidade
					</div>
				</div>
			)}
		</Box>
	);
};
