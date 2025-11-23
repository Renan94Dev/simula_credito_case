import { FooterContent } from "@/ui/footer";
import { LoanDetailCard } from "@/ui/loanDetailCard";

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
							<LoanDetailCard
								key={Math.random() * 100}
								name={bank.name}
								image={bank.image}
								value={bank.value}
								aa={bank.aa}
								am={bank.am}
							/>
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
