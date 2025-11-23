"use client";

import { Box } from "@/ui/box";
import { Button } from "@/ui/primitives/button";
import { ProgressBar } from "@/ui/progressBar";
import { Activity, Suspense } from "react";
import { useRegisterViewModel } from "./register.viewModel";

export const RegisterView = () => {
	const {
		stepIndex,
		currentForm: CurrentForm,
		onNext,
		onPrev,
		progress,
	} = useRegisterViewModel();

	return (
		<Box className="space-y-4">
			<ProgressBar key={"progressBar"} progress={progress} />

			<h2>Vamos começar</h2>

			<Suspense fallback={<p>Carregando etapa...</p>}>
				{CurrentForm.render()}
			</Suspense>

			<div className="flex items-center gap-4">
				<Activity mode={stepIndex > 0 ? "visible" : "hidden"}>
					<Button
						type="button"
						variant="outline"
						className="mt-4"
						onClick={onPrev}
					>
						Voltar
					</Button>
				</Activity>

				<Button
					type="button"
					variant="default"
					className="mt-4"
					onClick={onNext}
				>
					Avançar
				</Button>
			</div>
		</Box>
	);
};
