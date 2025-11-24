import { cn } from "@/shared/utils/utils";

export const Skeleton = ({
	className,
	...props
}: React.ComponentProps<"div">) => {
	return (
		<div
			data-slot="skeleton"
			className={cn("bg-neutral-300 animate-pulse rounded-md", className)}
			{...props}
		/>
	);
};
