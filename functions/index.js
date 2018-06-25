const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


exports.addMessage = functions.https.onRequest((req, res) => {
    const Nombre = req.query.var1;
    const Correo = req.query.var2;
    const Password = req.query.var3;
    const Edad = req.query.var4;
    const IdCiudad = req.query.var5;

    return admin.firestore().collection('Perfiles').add({Nombre: Nombre, Correo: Coreeo, Password: Password, Edad: Edad, IdCiudad: IdCiudad}).then((writeResult) => {
        return res.json({result: `Message with ID: ${writeResult.id} agregado.`});
    });
});
