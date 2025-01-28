export default () => {
	return (
		<html lang="en">
			<head>
				<meta charset="UTF-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<link rel="stylesheet" href="/styles.css" />
				<title>Gusty</title>
			</head>
			<body
				bg="#f3f4f6"
				text="#1f2937"
				font-family="sans-serif"
				display="flex"
				align-items="center"
				justify-content="center"
			>
				<div w="100%" align-text="center" px="1rem" max-w="48rem">
					<header mb="2rem">
						<h1
							font-size="3.75rem"
							font-weight="800"
							text="#7EBDC2"
						>
							Gusty
						</h1>
						<p font-size="1.25rem" text="#6b7280" mt="1rem">
							A fun, dynamic alternative to Tailwind CSS.
						</p>
					</header>
					<main>
						<p
							text="#374151"
							font-size="1.125rem"
							line-height="1.625rem"
							mb="1.5rem"
						>
							Gusty is similar to Tailwind CSS or UnoCSS, but
							instead uses dynamic attributes are declared once
							and can be used in any number of variations without
							requiring more generated CSS.
						</p>
						<a
							href="https://github.com/uncenter/gusty"
							display="inline-flex"
							px="1.5rem"
							py="0.75rem"
							text="#ffffff"
							bg="#4EA1A6"
							border-radius="1rem"
						>
							<svg
								role="img"
								size="1em"
								mr="0.5rem"
								fill="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<title>GitHub</title>
								<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
							</svg>
							View on GitHub
						</a>
					</main>
				</div>
				<div class="warning">
					<p>
						Your browser does not support advanced{" "}
						<code>attr()</code>. Try Chrome 133 (beta) or later.
					</p>
					<a href="https://github.com/uncenter/gusty">
						View project on Github.
					</a>
				</div>
			</body>
		</html>
	);
};
