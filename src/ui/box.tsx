import type { ComponentProps } from "react";
import { cn } from "../lib/utils";

type Props = ComponentProps<"div">;

const Box = ({ children, className }: Props) => {
	return (
		<div
			className={cn(
				"w-full max-w-[380px] p-6 bg-foreground shadow-md rounded",
				className,
			)}
		>
			{children}
		</div>
	);
};

export { Box };
