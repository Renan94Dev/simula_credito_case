export const FooterContent = () => {
	return (
		<footer className="text-xs text-center text-gray-600">
			Simula crédito &copy; {new Date().getFullYear()} | Desenvolvido por{" "}
			<a
				href="https://www.linkedin.com/in/renan-odilon/"
				className="text-primary underline"
			>
				Renan Odilon
			</a>
		</footer>
	);
};
