import { DataTypes } from "sequelize";
import db from "../config/database.js";

const Note = db.define("note",{
  title:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  pinned: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  bookmarked: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  }
}, {
  timestamps: false 
});

export default Note;