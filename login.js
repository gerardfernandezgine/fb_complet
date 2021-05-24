(function(){  // 1a línea a afegir
   // S'inicialitza el widget FirebaseUI mitjançant Firebase.
   var ui = new firebaseui.auth.AuthUI(app_fireBase.auth());
   var uiConfig = {
     callbacks: {
       signInSuccessWithAuthResult: function(authResult, redirectUrl) {
         // L'usuari ha iniciat la sessió correctament.
         // En funció del retorn determinem si continuem la redirecció
         // automàtica o si ho deixem gestionar pel desenvolupador.
         return true;
       },
       uiShown: function() {
         // L'UI es dibuixa
         // I s'amaga el "loader".
         document.getElementById('loader').style.display = 'none';
       }
     },
     // S'utilitzarà una finestra emergent per al flux d’inici de
     //  sessió dels proveïdors de PDI en lloc de la redirecció predeterminada.
     signInFlow: 'popup',
     signInSuccessUrl: 'main.html',
     signInOptions: [
       // Deixeu les línies tal com estan per als proveïdors que voleu oferir als vostres usuaris.
      //  firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      //  firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      //  firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      //  firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
      // firebase.auth.PhoneAuthProvider.PROVIDER_ID
     ],
     // URL de les condicions del servei. (tos Term Of Service)
     tosUrl: 'main.html',
     // URL de la política de privadesa. (Privacy policy url).
     privacyPolicyUrl: 'main.html'
   };

   // El mètode ui.start s'esperarà fins que es carregui el DOM.
   ui.start('#firebaseui-auth-container', uiConfig);

})()  // darrera línea a afegir