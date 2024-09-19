import multer from "multer";
import { dirname, extname, resolve } from "node:path";
import { fileURLToPath } from "url";
import { v4 as uuidv4 } from "uuid";

// Define __filename e __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
	storage: multer.diskStorage({
		destination: resolve(__dirname, "..", "..", "uploads"),
		filename: (request, file, callback) =>
			callback(null, uuidv4() + extname(file.originalname)),
	}),
};
