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

app.get("/", (req,res) => {
  res.json({data: 'hello'})
})


// post notes API
app.post("/post-notes", async (req,res) => {
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
app.post("/delete-notes", async (req,res) => {
  const {title} = req.query;
  try {
    const deletedNote = await prisma.note.delete({
      where: { title : title }
    })
    res.status(201).json({ message: "Note deleted successfully!", deletedNote});
  } catch (error) {
    res.status(500).send(error.message);
  }
})

