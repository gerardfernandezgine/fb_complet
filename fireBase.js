var app_fireBase = {};

(function(){
   // Your web app's Firebase configuration
   var firebaseConfig = {
       apiKey: "AIzaSyAl3O6LubPM-3KhpjmsVuftDhAHOWnp90Q",
       authDomain: "fbcomplet.firebaseapp.com",
       databaseURL: "https://fbcomplet-default-rtdb.europe-west1.firebasedatabase.app",
       projectId: "fbcomplet",
       storageBucket: "fbcomplet.appspot.com",
       messagingSenderId: "601585253896",
       appId: "1:601585253896:web:d0ddd459de74633629dbbd"
   };

   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   app_fireBase = firebase;

   function fnCreate(path, body, callBack){
      if(!path || !body) return;
      app_fireBase.database().ref(path).set(body,callBack);
   }

   function fnRead(path, successFunction, errorFunction){
      if(!path  || !successFunction || !errorFunction) return;
      app_fireBase.database().ref(path).once('value').then(successFunction, errorFunction);
   }

   function fnUpdate(path, body, callBack){
      if(!path || !body) return;
      app_fireBase.database().ref(path).update(body,callBack);
   }

   function fnDelete(path, callBack){
      if(!path) return;
      app_fireBase.database().ref(path).remove(callBack);
   }

   app_fireBase.databaseApi = {
      create: fnCreate,
      read: fnRead,
      update: fnUpdate,
      delete: fnDelete,
   }
})()