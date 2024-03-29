---
title: Crear servidor de desarrollo con Webpack (Hot Reload) en React
summary: Uno de los recursos más importantes a la hora de desarrollar en React es poder probar nuestro código en el navegador sin estar compilando cada cambio realizado.
date: 2019-12-29
tags: ['react', 'javascript', 'tutoriales']
---

Uno de los recursos más importantes a la hora de desarrollar en React es poder probar nuestro código en el navegador sin estar compilando cada cambio realizado. Para esto vamos a recurrir de preparar nuestro proyecto anterior: "[Hola mundo en React + Babel + Webpack](https://arepa.dev/hola-mundo-en-react-babel-webpack/)"

**¿Que aprenderemos?** Preparar nuestro proyecto para tener un servidor de desarrollo, Además, cada vez que guarde un archivo después de una modificación, el servidor de webpack actualizará automáticamente la ventana del navegador.

Vamos a actualizar nuestro proyecto, lo primero que debemos de realizar es instalar las dependencias de desarollo que requiere webpack para añadir esta característica a nuestro proyecto:

```bash
npm i webpack-dev-server --save-dev
```

Una vez instalada las dependencias necesarias, en nuestro archivo de **package.json** añadiremos el siguiente script debajo del que tenemos para compilar el proyecto:

```json
"start": "webpack-dev-server --open --mode development",
```

Guardamos y ejecutamos el comando el la terminal/consola:

```
npm run start
```

Webpack nos abrirá una ventana del navegador en el puerto 8080 de tu localhost donde podrás ver tu proyecto listo para probar, también en caso de haber un error la consola te ayudara mostrando un mensaje.

**En conclusión**

Aprendimos a preparar nuestros proyectos con un servidor de desarrollo para agilizar nuestro trabajo, optimizando el proceso de compilar cada que necesitemos guardar nuestro código.

Si quieres aprender mas sobre este paquete y sus multiples uso te recomiendo leer en detalle la documentación: [Webpack DevServer](https://webpack.js.org/configuration/dev-server/)"
