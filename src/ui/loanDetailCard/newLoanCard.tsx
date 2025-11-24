"use client";

import type { BankCard } from "@/app/dashboard/page";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { use } from "react";
import { Box } from "../box";

type LoanDetailCardProps = {
	data: (typeof BankCard)[0];
	promise: Promise<unknown>;
};

export const LoanDetailCard = ({
	data: { name, image, value, installments, aa, am },
	promise,
}: LoanDetailCardProps) => {
	use(promise);

	return (
		<Box className="flex-1 border border-gray-200 rounded-md space-y-2 cursor-pointer group">
			<div className="flex items-center justify-between">
				<div className="flex flex-col gap-2">
					<span className="text-xl font-medium">Banco {name}</span>

					<span className="text-base text-gray-600">
						Valor liberado:{" "}
						<span className="font-medium text-primary">
							R$ {new Intl.NumberFormat("pt-BR").format(value)}
						</span>
					</span>

					<span className="text-sm text-gray-600">
						Em: {installments.quantity}x de{" "}
						<span>
							R$ {new Intl.NumberFormat("pt-BR").format(installments.value)}
						</span>
					</span>

					<span className="flex gap-1 text-gray-500">
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
		</Box>
	);
};
