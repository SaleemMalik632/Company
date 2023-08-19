const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const admin = require('firebase-admin');
const ServiceAccount = require('../infopro-41bcc-firebase-adminsdk-sijfn-4ffda768f9.json');
const App = express();


admin.initializeApp({
    credential:admin.credential.cert(ServiceAccount)
})

App.use(cors());
App.use(express.json())
App.use(bodyParser.json());

const Database = admin.firestore();


App.get('/Message' , (Req, res)=>{
    res.json({ message: "Hello from server!" });
});

App.post('/SaveData' , (Req,res)=>{
    const data = Req.body;
    console.log(data);
    res.status(200).json({ message: 'Data saved successfully' });
}) 


App.listen(8000 , ()=>{
    console.log('http://localhost:8000')
})