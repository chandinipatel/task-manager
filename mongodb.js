const {MongoClient, ObjectId} = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager';

const id = ObjectId();
console.log(id)
console.log(id.getTimestamp())
console.log(id.id.length)
console.log(id.toHexString().length)


MongoClient.connect(connectionURL, {useNewUrlParser: true},
    (error, client) => {
        if(error) {
            return console.log('unable to connect to database');
        }
        const db = client.db(databaseName)

        db.collection('users').find({name:'Nrupen'}).toArray((error, users) => {
            console.log(users);
        })

        db.collection('users').find({name: 'Nrupen'}).count((error,res) => {
            console.log(res);
        })

        //613095f79663c5131cf47e24

        db.collection('tasks').findOne({_id: new ObjectId('613095f79663c5131cf47e24')},(err, res) => {
            console.log(res);
        })

        db.collection('tasks').find({completed: false}).toArray((err,res) => {
            console.log(res);
        })

    //    const updatePromise =  db.collection('tasks').updateOne({_id: new ObjectId('613095f79663c5131cf47e24')}, {
    //         $set:{
    //         completed:true    
    //         }
    //     })

    //     updatePromise
    //     .then(res => console.log(res))
    //     .catch(err => console.log(err));

        db.collection('tasks').deleteOne({description: 'Node js'})
        .then(res => console.log(res))
        .catch(err => console.log(err))


    });

    
        //  db.collection('users').insertOne({
        //     _id : id,
        //     name: 'Nrupen',
        //     age: 31
        // }, (error, result) => {
        //     if(error){
        //         return console.log('unable to insert user')
        //     }
        //     console.log(result)
        // }) 
//         db.collection('users').insertMany([
//             {
//                 name: 'chandini',
//                 age: 29
//             },
//             {
//                 name:'patel',
//                 age: 29
//             }
// ], (err, res) => {
//     if(err) return console.log(err);
//     console.log(res.ops);
// }); 
 
        /* db.collection('tasks').insertMany([{

            description : 'Node js',
            completed : false
         }, {
            description : 'Microservices',
            completed : false
        }, {
            description: 'Javascript',
            completed: false
     }
     ], (err, res) => {
        if(err) {
            return console.log('Error');
        }
        console.log(res.ops);
    }
    ) */
   


   


