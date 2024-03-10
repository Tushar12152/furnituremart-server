const express = require('express');
const app=express()
const port=process.env.PORT||5002
const cors = require('cors');
require('dotenv').config()


// middleware

app.use(express.json())
app.use(cors())


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.tgzt8q2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection












    await client.db("admin").command({ ping: 1 });
    console.log(" Server is connected with database");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);









app.get('/',(req,res)=>{
    res.send('Furniture server is running now......')
})

app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})