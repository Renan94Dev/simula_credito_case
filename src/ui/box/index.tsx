import { cn } from "@/shared/utils/utils";
import { Slot } from "@radix-ui/react-slot";
import type { ComponentProps } from "react";

type BoxProps = ComponentProps<"div"> & {
	asChild?: boolean;
};

export const Box = ({ className, asChild, ...props }: BoxProps) => {
	const Component = asChild ? Slot : "div";

	return (
		<Component
			{...props}
			className={cn("w-full p-6 bg-foreground shadow-md", className)}
		/>
	);
};
