import mongoose from "mongoose";
import Sequelize from "sequelize";

import Category from "../app/models/Category.js";
import User from "../app/models/User.js";
import Product from "./../app/models/Product.js";

const models = [User, Product, Category];

class Database {
	constructor() {
		this.init();
		this.mongo();
	}

	init() {
		this.connection = new Sequelize(
			"postgresql://postgres:wwhQloEoSnXSbTozwoCixikYANRmLQyv@autorack.proxy.rlwy.net:27304/railway",
		);
		models
			.map((model) => model.init(this.connection))
			.map((model) => model.associate?.(this.connection.models));
	}

	mongo() {
		this.mongoConnection = mongoose.connect(
			"mongodb://mongo:vtYLuJkpcVXOITUICzqaqvyvbRtJUnqe@junction.proxy.rlwy.net:13059",
		);
	}
}

export default new Database();
