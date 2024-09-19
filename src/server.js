import app from "./app.js";

const port = process.env.PORT || 3000;

app.listen(port, "0.0.0.0", () =>
	console.log("Server está rodando na porta 3001..."),
);
