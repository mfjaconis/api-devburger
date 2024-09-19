const { underscoredIf } = require("sequelize/lib/utils");

module.exports = {
	dialect: "postgres",
	url: "postgresql://postgres:wwhQloEoSnXSbTozwoCixikYANRmLQyv@autorack.proxy.rlwy.net:27304/railway",
	define: {
		timestamps: true,
		underscored: true,
		underscoredAll: true,
	},
};
