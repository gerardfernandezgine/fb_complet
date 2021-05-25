var mainApp = {};

(function(){
   var firebase = app_fireBase;
   var uid = null;
   firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
         // L'usuari està autenticat (is signed in).
         uid = user.uid;
      } else {
         // L'usuari NO està autenticat (redirigim a login.html).
         uid = null;
         window.location.replace("login.html");
      }
   });

   function logOut(){
      firebase.auth().signOut();
   }
     
   function messageHandler(err){
      if(!!err){
         console.log(err);
      } else {
         console.log("Success!");
      }
   }

   function fnCreate(){
      var path = 'users/' + uid;
      var data = {
         name: "Joan",
         age: 49,
         message: "Hola món!"
      }
      app_fireBase.databaseApi.create(path, data, messageHandler);
   }

   function fnRead(){
      var path = 'users/' + uid;

      app_fireBase.databaseApi.read(path, successFn, messageHandler);

      function successFn(snapShot){
         if (!!snapShot && !!snapShot.val()){
            console.log(snapShot.val());
         } else {
            console.log("No data found!");
         }

      }
   }

   function fnUpdate(){
      var path = 'users/' + uid;

      
      var data = {
         message: "Hola des de la web d'En Joan!"
      }
      app_fireBase.databaseApi.update(path, data, messageHandler);
   }

   function fnDelete(){
      var path = 'users/' + uid;
      app_fireBase.databaseApi.delete(path, messageHandler);
   }

      mainApp.Create = fnCreate;
      mainApp.Read = fnRead;
      mainApp.Update = fnUpdate;
      mainApp.Delete = fnDelete;

      mainApp.logOut = logOut;
   })()