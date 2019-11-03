const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dummy:dummy@cluster0-ldrzf.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true , useUnifiedTopology: true});
client.connect(err => {
  console.log(client.isConnected());
  //client.db('vibe').collection('collection').insert({test : true, description: "this is a test."});
  client.close();
});
