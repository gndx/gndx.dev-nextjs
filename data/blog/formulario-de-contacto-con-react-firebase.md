---
title: Formulario de contacto con React + Firebase
summary: Vamos a crear un formulario de contacto hecho con ReactJS y almacenaremos las solicitudes de contacto en Firebase Database.
date: 2017-12-08
tags: ['firebase', 'reactJS', 'recursos', 'javascritpt']
---

Vamos a crear un formulario de contacto hecho con ReactJS y almacenaremos las solicitudes de contacto en Firebase Database.

**¿Que es Firebase Realtime Database?**

Es un servicio que almacena y sincroniza los datos con nuestra base de datos NoSQL alojada en la nube. Los datos se sincronizan con todos los clientes en tiempo real y se mantienen disponibles cuando tu app está sin conexión.

Una de las grandes cualidades de [Firebase RealTime Database](https://firebase.google.com/products/database/?hl=es-419) es que trabaja sin conexión, el SDK de Firebase RealTime Database almacena en disco los datos y cuando se restablece la conexión el cliente recibe los datos faltantes y sincroniza con el estado actual del servidor. (Característica que me encanta).

Nuestro proyecto ejemplo está construido con "[create-React-app](https://github.com/facebookincubator/create-react-app)", así que vamos a omitir toda la configuración inicial y nos enfocaremos en trabajar en el archivo "App.js" donde crearemos el formulario.

**Configurar Firebase dentro de nuestro proyecto en React**

Para usar *Firebase RealTime Database* en nuestra aplicacion React debemos importar la libreria de "*Firebase*" la cual instalaremos dentro de nuestro proyecto desde el npm con el siguiente comando:

    npm install --save firebase
    

Vamos a nuestra "*[Consola de Firebase](https://console.firebase.google.com)*" elegimos o creamos un proyecto y en la opcion de "Agregar Firebase a tu app web" copiamos la configuracion que incluye el apiKey, authDomain, projectId, databaseURL, storageBucket necesarios para conectarnos con el servicio.

Creamos un archivo dentro de "src/" y lo llamaremos "Firebase.js" donde añadiremos nuestra configuración de la siguiente manera:

Creando nuestro formulario de contacto dentro de nuestro archivo App.js

Te dejo el repositorio con el proyecto: [react-form-firebase](https://github.com/gndx/react-form-firebase)

Demo del formulario: [https://gndx-projects.firebaseapp.com/](https://gndx-projects.firebaseapp.com/)
