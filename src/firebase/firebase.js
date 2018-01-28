import * as firebase from 'firebase';
import moment from 'moment';

const config = {
    apiKey: "AIzaSyDasNNaxtLG63-uCYvtfYBHiYEaBd46bPs",
    authDomain: "expensify-8b37f.firebaseapp.com",
    databaseURL: "https://expensify-8b37f.firebaseio.com",
    projectId: "expensify-8b37f",
    storageBucket: "expensify-8b37f.appspot.com",
    messagingSenderId: "337759665194"
};

firebase.initializeApp(config); 

const database = firebase.database();

database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});


// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = []; 
//     snapshot.forEach((childSnapshot) => {
//                     expenses.push({
//                         id: childSnapshot.key,
//                         ...childSnapshot.val() 
//                     });
//                 });
//     console.log(expenses);
// });





// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
        
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val() 
//             });
//         });

//         console.log(expenses);
//     });
    





// database.ref('expenses').push({
//     description: 'Gum',
//     note: 'This is Gum',
//     amount: 195,
//     createdAt: 0
// });

// database.ref('notes/-L3rsguax54N71PMB7O3').update({
//     body: 'Buy Food'
// });

// database.ref('notes').push({
//     title: 'Third note',
//     body: 'This is my note'
// });


// database.ref().on('value', (snapshot) => {
//     const { name, job } = snapshot.val();
//     console.log(`${name} is a ${job.title} at ${job.company}`);
// }, (e) => {
//     console.log('Error', e);
// });

// database.ref('job').set({
//     company: 'Freedom',
//     title: 'Entrepreneur'
// });

// database.ref('job').set({
//     company: 'Amazon',
//     title: 'Software Developer'
// });

// database.ref('location')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val(); 
//         console.log(val);
//     }).catch((e) => {
//         console.log('Error fetching data', e);
//     });


// database.ref().set({
//     name: 'Byungmin Choi',
//     age: 26,
//     stressLevel: 6,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     isSingle: false,
//     location: {
//         city: 'seoul',
//         country: 'South Korea'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This is failed', e); 
// });


// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });

// database.ref('isSingle').remove().then(() => {
//     console.log('removed')
// }).catch((e) => {
//     console.log(e);
// });