import { Sequelize } from "sequelize";

const db = new Sequelize("scribly_note", "root", "", {
  host: "localhost",
  dialect: "mysql"
})

export default db