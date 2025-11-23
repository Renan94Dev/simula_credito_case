import { FooterContent } from "@/ui/footer";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Dashboard() {
	return (
		<main className="p-4 space-y-2">
			<div>
				<h1 className="text-2xl font-medium text-primary">
					Nova simulação de crédito
				</h1>

				<span className="text-gray-400 *:cursor-pointer">
					<small>Dashboard &gt; </small>
					<small className="text-primary">Simulação de crédito</small>
				</span>
			</div>

			<div className="grid grid-rows-[0.93fr_auto] gap-2 h-full">
				<div className=" bg-white rounded-md w-full h-full shadow-md p-4">
					<div className="flex gap-4">
						{BankCard.map((bank) => (
							<div
								key={Math.random() * 100}
								className="flex-1 border border-gray-200 rounded-md p-4 space-y-2 shadow-md cursor-pointer group"
							>
								<div className="flex items-center justify-between">
									<div className="flex flex-col gap-2">
										<span className="text-xl font-medium">
											Banco {bank.name}
										</span>

										<span className="text-base text-gray-600">
											Valor liberado: R${" "}
											{new Intl.NumberFormat("pt-BR").format(bank.value)}
										</span>

										<span className="flex gap-2 text-gray-500">
											<small>a.m: {bank.am}%</small>
											<small>|</small>
											<small>a.a: {bank.aa}%</small>
										</span>
									</div>

									<Image
										width={80}
										height={80}
										alt={bank.name}
										src={bank.image}
									/>
								</div>

								<div className="flex items-center gap-1 text-primary group-hover:underline">
									<span>Ver detalhes</span>
									<span>
										<ArrowRight size={18} />
									</span>
								</div>
							</div>
						))}
					</div>
				</div>

				<FooterContent />
			</div>
		</main>
	);
}

const BankCard = [
	{
		name: "Inter",
		image: "/banks_logos/inter.png",
		value: 14000,
		aa: 12,
		am: 1.4,
	},
	{
		name: "Santander",
		image: "/banks_logos/santander.png",
		value: 16500,
		aa: 14,
		am: 1.56,
	},
	{
		name: "Itaú",
		image: "/banks_logos/itau.png",
		value: 17500,
		aa: 14.6,
		am: 1.84,
	},
];
