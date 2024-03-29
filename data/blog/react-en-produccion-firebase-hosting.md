---
title: React en producción con Firebase Hosting
summary: Firebase Hosting es un servicio de Google de almacenamiento de contenido a nivel de producción orientado a los desarrolladores para que puedan implementar aplicaciones Web con contenido estático de una forma rápida y simple.
date: 2017-10-10
tags: ['firebase', 'react', 'recursos']
---

**Firebase Hosting** es un servicio de Google de almacenamiento de contenido a nivel de producción orientado a los desarrolladores para que puedan implementar aplicaciones Web con contenido estático de una forma rápida y simple.

En este pequeño manual vamos a ir paso a paso para enviar a producción tu desarrollo creado en React. Para esto vamos a utilizar un proyecto que previamente he construido con React “[*gresume-react*](https://github.com/gndx/gresume-react)” una plantilla gratuita para crear un portafolio profesional con react.

**Configuración de proyecto en Firebase**

En este momento es donde necesitaremos tener una cuenta de Firebase ([firebase.google.com](http://firebase.google.com)) y habilitar un nuevo proyecto eligiendo un nombre para tu nueva aplicación.

![React Firebase](https://i1.wp.com/gndx.co/wp-content/uploads/2017/10/react-firebase-gndx-01.png?resize=700%2C482&amp;ssl=1)

Recuerda que Firebase creara una URL en base al nombre de tu aplicación y es donde tu aplicación se encontrara disponible.

**Construyendo nuestro proyecto**

Nuestro proyecto esta construido con “*create-react-app*” este paquete nos permite olvidarnos de las configuraciones de un proyecto inicial y enfocarnos en desarrollar con React.

Por lo tanto construir nuestro proyecto para enviar a producción solo es necesario ejecutar el siguiente comando: “*npm run build*” nos creara una carpeta dentro de nuestro proyecto llamada “*build/*” la cual contiene todo nuestro proyecto listo para desplegarse en un servidor de producción.

**Configurando Firebase Hosting**

Para subir nuestro proyecto a Firebase Hosting es necesario tener instalado **Firebase Command Line Interface (CLI)** lo instalamos con el siguiente comando en consola:

`npm install -g firebase-tools`

Una vez instalado es necesario iniciar sesión desde la consola para poder acceder a nuestros proyectos. Ejecutamos el siguiente comando:

`firebase login`

Este comando nos abrirá una ventana donde iniciaremos sesión con nuestra cuenta de Firebase la cual le dará los permisos necesarios para trabajar desde consola con nuestros proyectos.

![React Firebase](https://i0.wp.com/gndx.co/wp-content/uploads/2017/10/react-firebase-gndx-02.png?resize=691%2C839&amp;ssl=1)

Configurando Firebase dentro de nuestro proyecto, ejecutamos el siguiente comando:

`firebase init`

Vamos a seguir las instrucciones que nos muestra el cliente por medio de consola, para hacer uso solo de Firebase Hosting es necesario seleccionar la opción de “*Hosting: Configure and deploy Firebase Hosting sites*” o en su defecto las opciones que necesites para tu proyecto.

Elegimos nuestro proyecto que creamos previamente en Firebase.google.com seleccionándolo dentro de la lista de proyectos que disponemos

Seleccionar la carpeta donde se encuentra nuestro proyecto, en nuestro caso es la carpeta “build/” la cual contiene nuestro proyecto en react listo para producción.

Firebase nos preguntará si desea que nuestra aplicación se configure como una “single-page-app”. La opción por defecto es “no” en nuestro caso, podríamos realmente beneficiarnos de la configuración, así que teclearemos “y”.

Firebase nos advertirá que ya tenemos generado un archivo “index.html”, que no queremos ser sobrescritos. Escriba “n” y presione enter para mantener nuestro propio “index.html”, generado por nuestro proceso de compilación anterior.

Una vez que completamos la configuración inicial, es hora de hacer deploy.

![React Firebase](https://i0.wp.com/gndx.co/wp-content/uploads/2017/10/react-firebase-gndx-03.png?resize=700%2C402&amp;ssl=1)

**Deploy**

Corremos el siguiente comando:

`firebase deploy`

Este comando tomara todo lo que se encuentra en “build/” y lo hospedara en Firebase, y nos mostrara la URL que nos genera para visualizar nuestro proyecto en producción.

La URL que nos ha generado para este ejemplo es la siguiente: [https://barajas-mx.firebaseapp.com/](https://barajas-mx.firebaseapp.com/)

![React Firebase](https://i1.wp.com/gndx.co/wp-content/uploads/2017/10/react-firebase-gndx-04.png?resize=700%2C453&amp;ssl=1)

**Bonus

**

Configurar deploy

Podemos seguir trabajando en nuestro proyecto y si necesitamos hacer algún cambio a nuestro proyecto, solo corremos el comando “*npm run build*” para generar nuevamente todo nuestros archivos listos para producción y en seguida corremos “*firebase deploy*“.

Puedes agregar este comando a nuestros scripts dentro de “*package.json*” llamando a nuestro script deploy: “firebase deploy”.

Lo cual nos permitirá ejecutar el siguiente comando en consola:

`npm run build && npm run deploy`

**Configurar un dominio en Firebase Hosting**

Configurar un dominio es sumamente fácil en Firebase, si ya contamos con uno podemos ir al apartado de “Hosting” y elegir “Conectar un dominio” seguir las instrucciones las cuales validaran nuestro dominio con un registro TXT y una vez que ha sido validado procederemos a agregar los registros principales tipo “A” para nuestro dominio y en cuestión de minutos podremos ver en *[https://tudominio.com](https://tudominio.com)* tu proyecto funcionando.

En mi caso utilice mi dominio [https://barajas.mx](https://barajas.mx) donde se encuentra mi portafolio.

Voy a preparar otro manual de como integrar Firebase Database para desplegar la información del portafolio.

Próximamente…
