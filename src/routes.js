import { Router } from "express";
import multer from "multer";
import multerConfig from "./config/multer";

import CategoryController from "./app/controllers/CategoryController";
import OrderController from "./app/controllers/OrderController";
import ProductController from "./app/controllers/ProductController";
import SessionsController from "./app/controllers/SessionsController";
import UserController from "./app/controllers/UserController";
import authMiddleware from "./app/middlewares/auth";

const routes = new Router();

routes.get("/", (req, res) => {
	return res.json({ message: "Hello to my first API" });
});

const upload = multer(multerConfig);

routes.post("/users", UserController.store);
routes.post("/sessions", SessionsController.store);

routes.use(authMiddleware);
routes.post("/products", upload.single("file"), ProductController.store);
routes.get("/products", ProductController.index);
routes.put("/products/:id", upload.single("file"), ProductController.update);

routes.post("/categories", upload.single("file"), CategoryController.store);
routes.get("/categories", CategoryController.index);
routes.put("/categories/:id", upload.single("file"), CategoryController.update);

routes.post("/orders", OrderController.store);
routes.get("/orders", OrderController.index);
routes.put("/orders/:id", OrderController.update);

export default routes;
