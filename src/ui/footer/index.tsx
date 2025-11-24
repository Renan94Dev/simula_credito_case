export const FooterContent = () => {
	return (
		<footer className="text-xs text-center text-gray-600 pt-2">
			Simula crédito &copy; {new Date().getFullYear()} | Desenvolvido por{" "}
			<a
				href="https://renan-portfolio-omega.vercel.app"
				target="_blank"
				rel="noopener noreferrer"
				className="text-primary underline"
			>
				Renan Odilon
			</a>
		</footer>
	);
};
