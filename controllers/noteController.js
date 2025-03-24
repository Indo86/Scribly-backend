import Note from "../models/note.js";

export const getNotes = async (req, res) => {
  try {
    const notes = await Note.findAll();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getNoteById = async (req, res) => {
  try {
    const note = await Note.findByPk(req.params.id);
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.json(note);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createNote = async (req, res) => {
  try {
    const note = await Note.create({
      title: req.body.title,
      text: req.body.text,
      pinned: req.body.pinned || false,
      bookmarked: req.body.bookmarked || false,
      archived: req.body.archived || false,
      createdAt: req.body.createdAt || new Date().toISOString(),
    });
    res.status(201).json(note);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateNote = async (req, res) => {
  try {
    const note = await Note.findByPk(req.params.id);
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    await note.update(req.body);
    res.json(note);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const note = await Note.findByPk(req.params.id);
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    await note.destroy();
    res.json({ message: "Note deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const togglePin = async (req, res) => {
  try {
    const note = await Note.findByPk(req.params.id);
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    await note.update({ pinned: !note.pinned });
    res.json(note);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const toggleBookmark = async (req, res) => {
  try {
    const note = await Note.findByPk(req.params.id);
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    await note.update({ bookmarked: !note.bookmarked });
    res.json(note);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Toggle archive status
export const toggleArchive = async (req, res) => {
  try {
    const note = await Note.findByPk(req.params.id);
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    await note.update({ archived: !note.archived });
    res.json(note);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};