import type { ComponentProps } from "react";

type Props = ComponentProps<"div"> & {
	progress: number;
};

const ProgressBar = ({ progress }: Props) => {
	return (
		<div className="w-full h-1 bg-background rounded-xs">
			<div
				className="h-full bg-primary transition-all duration-100"
				style={{ width: `${progress}%` }}
			/>
		</div>
	);
};

export { ProgressBar };
