import { FooterContent } from "@/ui/footer";
import { CustomLoanCard } from "@/ui/loanDetailCard/customLoanCard";
import { LoanDetailCard } from "@/ui/loanDetailCard/newLoanCard";
import { WithdrawCard } from "@/ui/loanDetailCard/withdrawCard";

export default function Dashboard() {
	return (
		<main className="p-4 space-y-2">
			<div>
				<h1 className="text-2xl font-medium text-primary">
					Nova simulação de crédito
				</h1>

				<span className="text-gray-400 *:cursor-pointer">
					<small>Dashboard </small>
					<small className="text-primary">&gt; Simulação de crédito</small>
				</span>
			</div>

			<div className="grid grid-rows-[0.93fr_auto] gap-2 h-full">
				<div className="flex flex-col gap-4 bg-white rounded-md w-full h-full shadow-md p-4">
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

					<div className="flex gap-4">
						<CustomLoanCard />

						{CardLoans.map((loan) => (
							<WithdrawCard
								key={Math.random() * 100}
								available={loan.available}
								name={loan.name}
								value={loan.value}
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

const CardLoans = [
	{
		name: "Saque cartão benefício",
		value: 3267,
		available: true,
	},
	{
		name: "Cartão consignado",
		value: 16500,
		available: false,
	},
];
