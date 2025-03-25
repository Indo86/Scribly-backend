import { Sequelize } from "sequelize";

const db = new Sequelize("scribly_note", "root", "", {
  host: "34.56.154.227",
  dialect: "mysql"
})

export default db