import type { FC } from "hono/jsx";
import { Hono } from "hono";

import { attrbreeze } from "@attrbreeze/attrbreeze";

const app = new Hono();

const styles = attrbreeze();
app.get("/styles.css", (c) => c.text(styles));

const Layout: FC = (props) => {
	return (
		<html>
			<head>
				<link rel="stylesheet" href="/styles.css" />
				<title>attrbreeze</title>
			</head>
			<body>{props.children}</body>
		</html>
	);
};

const Page: FC = () => {
	return (
		<Layout>
			<h1 text="red">Hello Hono!</h1>
		</Layout>
	);
};

app.get("/", (c) => {
	return c.html(<Page />);
});

Deno.serve(app.fetch);
