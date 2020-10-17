//Dependencies 
const fs = require("fs"); 
const { v4: uuidv4 } = require('uuid');
const notePath = "./db/db.json";
function noteContent () {
    return JSON.parse(fs.readFileSync(notePath, "utf-8"));
}

module.exports = function(app) {

    //GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
    app.get("/api/notes", (req, res) => {

        res.json(noteContent());
    });
  
  
    //POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.
    app.post("/api/notes", (req, res) => {
        
        //new note //req.body?
        const userNotes = noteContent();
        
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
        newData = {
        id: uuidv4(),
        title: req.body.title,
        text: req.body.text
        };

        //adds new note
        userNotes.push(newData);

        //return to client - convert JSON stringify
        fs.writeFileSync(notePath, JSON.stringify(userNotes, null, "\t"));

        //return to user
        res.json(newData);
    });
  
    //DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.
    app.delete("/api/notes/:id", (req, res) => {

        let id = (req.params.id);

        console.log("working");

        let newNote = noteContent().filter(note => note.id !=id);
        // 1234 === 1234 true
        // 1234 === "1234" false
        // 1234 == "1234" true
        fs.writeFileSync(notePath, JSON.stringify(newNote));

        res.json(newNote);
    
    });
}