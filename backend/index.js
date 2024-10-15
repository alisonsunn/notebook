import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import "dotenv/config";
import {PrismaClient} from "@prisma/client";

const app = express();
app.use(cors());
app.use(bodyParser.json()); 

const port = process.env.PORT || 3000;

const prisma = new PrismaClient();

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
})

// post notes API
app.post("/post-note", async (req,res) => {
  const {title, content} = req.body;
  try {
    const newNote = await prisma.note.create({
      data: {
        title,
        content
      }
    })
    res.status(201).json({ message: "Note saved successfully!", newNote});
  } catch (error) {
    res.status(500).send(error.message);
  }
})

// delete notes API
app.post("/delete-note", async (req,res) => {
  const {id} = req.query;
  try {
    const deletedNote = await prisma.note.delete({
      where: { id : id}
    })
    res.status(201).json({ message: "Note deleted successfully!", deletedNote});
  } catch (error) {
    res.status(500).send(error.message);
  }
})

// get notes API
app.get("/get-notes", async (req, res) => {
  try {
    const notes = await prisma.note.findMany();
    res.status(201).json({ message: "get all the notes successfully!", notes})
  } catch (error) {
    res.status(500).send(error.message);
  }
})

// edit notes API
app.post("/edit-note", async (req, res) => {
  const { id, title, content} = req.body;
  try {
    const updatedNote = await prisma.note.update({
      where: {id:id},
      data: { title: title, content: content }
    })

    return res.status(201).json({ message: "Note updated!", updatedNote});

  } catch (error) {
    return res.status(500).json( { message: error});
  }
})

