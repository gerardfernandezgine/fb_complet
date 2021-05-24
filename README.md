# Repo fb_complet

###  1. Creem la següent carpeta:
```\fb_complet```

###  2. Creem els següents 5 fitxers:

```
login.html
main.html
login.js
main.js
fireBase.js
```

###  3. Amb el **Visual Studio Code** Obrim el fitxer ```login.html```

###  4. Amb l'**snipet** ```html:5``` creem el següent codi:

![image](https://user-images.githubusercontent.com/63462877/119330567-9ff1de00-bc86-11eb-949e-6e150c8d3f65.png)

```html
<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
   </head>
   <body>
   
   </body>
</html>
```

###  5. I modifiquem el **títol** del text **```Document```** per defecte al nou text **```Login```**.

```html
      <title>Document</title>
```
per
```html
      <title>Login</title>
```

###  6. Amb l'**snipet** ```script src```

![image](https://user-images.githubusercontent.com/63462877/119330841-f9f2a380-bc86-11eb-8325-843900b06f89.png)

###  7. afegim l'enllaç al fitxer ```login.js``` just abans de l'etiqueta de tancament del **```body```**.

```html
      <script src="./login.js"></script>
```

###  8. I també afegim l'enllaç al fitxer ```fireBase.js``` abans de l'script ```login```.
```html
      <script src="./fireBase.js"></script>
```

###  9. Fem exactament el mateix, pero amb el ```main.html```, i en comptes d'afegir el ```login.js``` afegim el ```main.js```.

### 10. Un cop tenim això anem a la consola de ```FireBase``` i ens connectem amb el nostre compte.

### 11. Afegim un nou projecte

**Nom**: **```fbComplet```**

**Desactivem**: *```Enable Google Analytics for this project```*

Arribats a aques punt, ja tenim el projecte **```fbComplet```** creat.

### 11. Ara toca afegir una nova app web.

**Nom**: **```fbCompletApp```**


En oferirà un "snniped"

```html
/*
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.6.2/firebase.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAl3O6LubPM-3KhpjmsVuftDhAHOWnp90Q",
    authDomain: "fbcomplet.firebaseapp.com",
    projectId: "fbcomplet",
    storageBucket: "fbcomplet.appspot.com",
    messagingSenderId: "601585253896",
    appId: "1:601585253896:web:d0ddd459de74633629dbbd"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>
*/
```

El copiem i l'enganxem al fitxer login.html dins del head area.

"Tallem" la part de l'script de la configuració i la "enganxem" al fitxer "fireBase.js".

quedant de la següent manera:
  var app_fireBase = {};
  (function(){
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyAl3O6LubPM-3KhpjmsVuftDhAHOWnp90Q",
      authDomain: "fbcomplet.firebaseapp.com",
      projectId: "fbcomplet",
      storageBucket: "fbcomplet.appspot.com",
      messagingSenderId: "601585253896",
      appId: "1:601585253896:web:d0ddd459de74633629dbbd"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  app_fireBase = firebase;
  })();
  
I a continuació cal que afegim la llibreria a tots els fitxers html a la secció head.
<script src="https://www.gstatic.com/firebasejs/8.6.2/firebase.js"></script>


Authentication

Des de la consola, anem ara a configurar l'authenticació utilitznat el servei Authentication.
Anem al Web
i al menu "Sign in with a pre-built UI", desplaceu-vos fins gairebé al final,
al text "Specify the FirebaseUI configuration (providers supported and UI customizations as well as success callbacks, etc)."


I copieu tot el text que ens inicialitzarà el login de UserUI:

/*
var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
    uiShown: function() {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById('loader').style.display = 'none';
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  signInSuccessUrl: '<url-to-redirect-to-on-success>',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.PhoneAuthProvider.PROVIDER_ID
  ],
  // Terms of service url.
  tosUrl: '<your-tos-url>',
  // Privacy policy url.
  privacyPolicyUrl: '<your-privacy-policy-url>'
};
*/

i engauxeu-lo al fitxer login.js.

Moveu-lo dins d'una arrow funtion, quedant de la següent manera:
  (function(){  // 1a línea a afegir
  var uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        // User successfully signed in.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        return true;
      },
      uiShown: function() {
        // The widget is rendered.
        // Hide the loader.
        document.getElementById('loader').style.display = 'none';
      }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: '<url-to-redirect-to-on-success>',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.PhoneAuthProvider.PROVIDER_ID
    ],
    // Terms of service url.
    tosUrl: '<your-tos-url>',
    // Privacy policy url.
    privacyPolicyUrl: '<your-privacy-policy-url>'
  };
  })()  // darrera línea a afegir
  
  Per configurar-lo per la  nostra app cal modificar la lçinia
  amb el text ```signInSuccessUrl: '<url-to-redirect-to-on-success>',```
  quedant de la següent manera:
  
  ```signInSuccessUrl: main.html,```
  
  També ho farem a la línia ```tosUrl: '<your-tos-url>',```
  a on també afegirem la mateixa url.
  ```tosUrl: 'main.html',```

  També ho farem a la línia ```privacyPolicyUrl: '<your-privacy-policy-url>'```
  a on també afegirem la mateixa url.
  ```privacyPolicyUrl: 'main.html',```
  
  Resum:
  <url-to-redirect-to-on-success> => main.html
  <your-tos-url>                  => main.html
  <your-privacy-policy-url>       => main.html
  
  
  També afegirem el codi que esta sota el següent text "Finally, render the FirebaseUI Auth interface:"
  
  
  // The start method will wait until the DOM is loaded.
  ui.start('#firebaseui-auth-container', uiConfig);
  
  Al login.html dins del body afegim el codi que hi ha a continuació
  del text "Define the HTML element where the FirebaseUI sign-in widget will be rendered."
  
  ```html
    <!-- The surrounding HTML is left untouched by FirebaseUI.
    Your app may use that space for branding, controls and other customizations.-->
    <h1>Welcome to My Awesome App</h1>
    <div id="firebaseui-auth-container"></div>
    <div id="loader">Loading...</div>
    ```
  I per últim, per poder inicialitzar el ui afegirem el codi que esta sota el
  següent text "To kick off the FirebaseUI sign in flow, initialize the FirebaseUI instance by passing the underlying Auth instance."
  dins del fitxer login.js, i just abans de la línia "var uiConfig = {".
  
  ...
  // Initialize the FirebaseUI Widget using Firebase.
  var ui = new firebaseui.auth.AuthUI(firebase.auth());
  var uiConfig = {
  ...
  
  Ara ja només queda incloure la llibreria de ui.
  
  2. Include FirebaseUI via one of the following options:
    a. CDN
      Include the following script and CSS file in the <head> tag of your page, below the initialization snippet from the Firebase Console:
  
  <script src="https://www.gstatic.com/firebasejs/ui/4.8.0/firebase-ui-auth.js"></script>
<link type="text/css" rel="stylesheet" href="https://www.gstatic.com/firebasejs/ui/4.8.0/firebase-ui-auth.css" />

  I l'afegim al fitxer login.html just a continuació del fitxer firebase.js.
  NOTA: assegureu-vos que tots els fitxers tenen la mateixa versió.
  Si el nostre fitxer firebase.js té la versió 8.6.2, llavors cal canviar la versió a aquesta.
  
  
  Per que només ens mostri l'authentication que volem cal que comentem la resta d'opcions.
  Abans
  ```
     signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.PhoneAuthProvider.PROVIDER_ID
     ],
  ```
  Després:
  ```   
     signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      //  firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      //  firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      //  firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      //  firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      //  firebase.auth.PhoneAuthProvider.PROVIDER_ID
     ],  
  ```
  
  Si obrim la pàgina web login.html i creem un nou usuari amb l'adreça
  i la contrasenya, aquest es donarà d'alta a al nostre firebase i ens mostrarà la
  pàgina main.html un cop estigui validad correctament.
  
  Ara el que intentarem és evitar que un usuari no authenticat pugui accedir al nostre main.html.
  
  Per fer-ho, anirem a la documentació de Firebase.
  Des de l'apartat d'autentication anem a l'enllaç Go to Docs que apareix adalt a la dreta.
  Anem a l'opció References, i un cop aqui, busquem al menu de l'esquerra l'opció de JavaScript - version 8.
  I de les opcions que es depleguen escollim firebase.auth i un cop desplegat firebase.auth escollim Auth.
  A la dreta es mostren tots els Auth mètodes, ens interesa el mètode onAuthStateChanged.
  El cliquem i ens mostra la documentació i un exemple.

  ``` js
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
    }
  });
  ```
  I anem al main.js i el que volem es que un usuari "anonim", és a dir sense validar, de manera que afegint
  el següent codi, farem que si l'usuari no està authenticat el redirigirem cap a la pàgina de login.html,
  per forçar-lo a que es validi.

main.js
  ``` js
var mainApp = {};

(function(){
     var firebase = app_fireBase;
     var uid = null;
     
     firebase.auth().onAuthStateChanged(function(user) {
        if (user) {    // L'usuari està autenticat (is signed in).
           uid = user.uid;
        } else {       // L'usuari NO està autenticat (redirigim a login.html).
           uid = null;
           window.location.replace("login.html");
        }
     });

     function logOut(){
        firebase.auth().signOut();
     }
      mainApp.logOut = logOut;
   })()
  ```  
  I ho farà cridant la funció que acabem de crear al fitxer main.js.
  
  <button onclick="mainApp.logOut();">Desconnecta't (LogOut)</button>
  Ara afegirem un botó de desconnexió al main.html per que es pugui desconnectar (logOut).
  
  D'aquesta manera, un cop l'usuari des de la pàgina de login.html es validi correctament
  arribarà a la pàgina main.html. Pero si un usuari vol accedir directament a la pàgina main.html
  sense passar per la pàgina login.html, aquesta, en veure que no está validar, el redirigirà
  de manera autonàtica a la pàgina login.html.
  

[How to set up Authentication using Firebase (Web)](https://www.youtube.com/watch?v=CvkCjfHts9A)

# 2a PART

![image](https://user-images.githubusercontent.com/63462877/119343465-c750a700-bc96-11eb-862a-a5b9c2b6d396.png)

![image](https://user-images.githubusercontent.com/63462877/119344689-3e3a6f80-bc98-11eb-9810-5cf23749bc07.png)


