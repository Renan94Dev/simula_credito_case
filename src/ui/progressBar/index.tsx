import type { ComponentProps } from "react";

type Props = ComponentProps<"div"> & {
	progress: number;
};

const ProgressBar = ({ progress }: Props) => {
	return (
		<div className="w-full h-1 bg-background rounded-xs" role="progressbar">
			<div className="h-full bg-primary" style={{ width: `${progress}%` }} />
		</div>
	);
};

export { ProgressBar };
