const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manger';

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log(error);
    }
    const db = client.db(databaseName);



//  *************** INSERT ONE TO MONGODB ***********************//    

    // db.collection('users').insertOne({
    //   name: 'Sanju',
    //   age: 25,
    // },);



//  *************** INSERT MANY TO MONGODB ***********************//

    // db.collection('users').insertMany([{
    //   name: 'Pankaj',
    //   age: 25,
    // },
    // {
    //   name: 'Naveen',
    //   age: 30,
    // },{
    //   name: 'Rahul',
    //   age: 28,
    // }]);




//  *************** UpdateOne TO MONGODB ***********************//

// db.collection('users').updateOne({
//       _id: new ObjectID("5f36c83c18f7781e1fc9f1ad")
//     },{
//       $set:{ 
//         name: 'Rohan'
//       }
//     }).then((response)=>{
//       console.log(response)
//     }).catch((err)=>{  
//       console.log(err)
//     })



//  *************** UpdateMany TO MONGODB ***********************//

    // db.collection('users').updateMany({
    //   _id: new ObjectID("5f36c83c18f7781e1fc9f1ad")
    // },{
    //   $set:{
    //     name:'Sai',
    //     age:50
    //   }
    // }).then((response)=>{
    //   console.log(response)
    // }).catch((err)=>{
    //   console.log(err)
    // })



 //  *************** DeleteMany TO MONGODB ***********************//
   
    // db.collection('users').deleteMany({
    //   age:25
    // }).then(res =>{
    //   console.log(res)
    // }).catch(err =>{
    //   console.log(err)
    // })



//  *************** DeleteMany TO MONGODB ***********************//

    // db.collection('users').deleteOne({
    //   age:27
    // }).then(res =>{
    //   console.log(res)
    // }).catch(err =>{
    //   console.log(err)
    // })
  }
);
