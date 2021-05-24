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
     
   function fnCreate(){

   }

   function fnRead(){

   }

   function fnUpdate(){

   }

   function fnDelete(){

   }

      mainApp.Create = fnCreate;
      mainApp.Read = fnRead;
      mainApp.Update = fnUpdate;
      mainApp.Delete = fnDelete;

      mainApp.logOut = logOut;
   })()