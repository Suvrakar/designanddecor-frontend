const express = require("express")
var bodyParser = require('body-parser');



const app = express()
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
const connecToDb = require("./connection");
let db;

const control = require("./controller")
const nodeMailer = require("./server")

const port = process.env.PORT || 3000;;

cors = require('cors');




app.use(cors())
app.use(express.json());


//Just to see server is working
app.get("/", (req, res) => {
    res.send("Hello frommmmmmmmmm Exxxxpresssssss")
})

//Get all the data to database
app.get('/list', async (req, res) => {
    let result = await control.getallData(db);
    res.send(result)
});


//Post the data to database
app.post('/list', async (req, res) => {
    await control.insertData(db,req.body);

    console.log(req.body);

    var mailOptions = {
        from: 'info@thedesignanddecor.com',
        to: 'kar.suvra@gmail.com',
        subject: 'Mail from a client',
        text: `"Cilent's Name is:" ${req.body.name}, Phone Number: ${req.body.phone}, Email Id: ${req.body.email}, Client's Message is: ${req.body.message}`,
        html : `<h3> Cilent's Name is:</h3>  ${req.body.name}, <br>  <h3>Phone Number: </h3> ${req.body.phone}, <br> <h3> Email Id: </h3> ${req.body.email}, <br> <h3>Client's Message is: </h3> ${req.body.message}`,
      };
    // nodeMailer(mailOptions);
    res.send(req.body)
});


//Delete All the data from database
app.delete('/list', async (req, res) => {
    let result = await control.DeleteAll(db);

    res.send(result)
});


//put All the data from database
app.put('/list', async (req, res) => {
    let result = await control.upDate(db);
    
    res.send(result)
    
});





//Listening
app.listen(port, async (err) => {
    db = await connecToDb();
    console.log("Listening to the server");
})


