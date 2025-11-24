import { createPromiseWithRandomTimeout } from "@/shared/utils/promises.utils";
import { Box } from "@/ui/box";
import { FooterContent } from "@/ui/footer";
import { CustomLoanCard } from "@/ui/loanDetailCard/customLoanCard";
import { LoanDetailCard } from "@/ui/loanDetailCard/newLoanCard";
import { WithdrawCard } from "@/ui/loanDetailCard/withdrawCard";
import { Skeleton } from "@/ui/skeleton";
import { Slash } from "lucide-react";
import { Suspense } from "react";

export default function Dashboard() {
	return (
		<Box asChild>
			<main className="bg-transparent space-y-2">
				<div>
					<h1 className="text-2xl font-medium text-primary">
						Nova simulação de crédito
					</h1>

					<div className="flex items-center gap-1 text-gray-400 *:cursor-pointer">
						<small>Dashboard </small>
						<Slash size={14} className="text-primary" />
						<small className="text-primary">Simulação de crédito</small>
					</div>
				</div>

				<div className="grid grid-rows-[0.93fr_auto] gap-2 h-full">
					<Box className="flex flex-col gap-4 h-full rounded-md">
						<div className="grid grid-cols-3 gap-4">
							{BankCard.map((bank) => (
								<Suspense
									key={Math.random() * 100}
									fallback={<Skeleton className="h-[198px]" />}
								>
									<LoanDetailCard
										data={bank}
										promise={createPromiseWithRandomTimeout()}
									/>
								</Suspense>
							))}
						</div>

						<div className="grid grid-cols-3 gap-4">
							<Suspense
								key={Math.random() * 100}
								fallback={<Skeleton className="h-[144px]" />}
							>
								<CustomLoanCard
									promise={createPromiseWithRandomTimeout(1000)}
								/>
							</Suspense>

							{CardLoans.map((loan) => (
								<Suspense
									key={Math.random() * 100}
									fallback={<Skeleton className="h-[144px]" />}
								>
									<WithdrawCard
										data={loan}
										promise={createPromiseWithRandomTimeout()}
									/>
								</Suspense>
							))}
						</div>
					</Box>

					<FooterContent />
				</div>
			</main>
		</Box>
	);
}

export const BankCard = [
	{
		name: "Inter",
		image: "/banks_logos/inter.png",
		value: 14000,
		installments: {
			value: 480.22,
			quantity: 84,
		},
		aa: 12,
		am: 1.4,
	},
	{
		name: "Santander",
		image: "/banks_logos/santander.png",
		value: 16500,
		installments: {
			value: 518.17,
			quantity: 96,
		},
		aa: 14,
		am: 1.56,
	},
	{
		name: "Itaú",
		image: "/banks_logos/itau.png",
		value: 17500,
		installments: {
			value: 819.37,
			quantity: 48,
		},
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
