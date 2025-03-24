import express from "express";
import { 
  getNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
  togglePin,
  toggleBookmark,
  toggleArchive,      
} from "../controllers/noteController.js";


const router = express.Router();

router.get("/", getNotes);
router.get("/:id", getNoteById);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);
router.patch("/:id/pin", togglePin);
router.patch("/:id/bookmark", toggleBookmark);
router.patch("/:id/archive", toggleArchive);

export default router;