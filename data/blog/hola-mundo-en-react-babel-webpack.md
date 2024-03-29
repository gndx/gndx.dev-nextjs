---
title: Hola mundo en React + Babel + Webpack
summary: En este recurso vamos a aprender a crear un proyecto desde cero configurando todos los elementos necesarios para la construcción de un “Hola Mundo” pasando por todos los elementos necesarios.
date: 2019-12-29
tags: ['react', 'javascript', 'tutoriales']
---

En este recurso vamos a aprender a crear un proyecto desde cero configurando todos los elementos necesarios para la construcción de un “Hola Mundo” pasando por todos los elementos necesarios.

Aprenderemos:

1. Configurar un proyecto
2. Instalar React
3. Crear un Hola Mundo en React
4. Instalar y configurar Babel
5. Instalar y configurar Webpack
6. Compilar nuestro proyecto

Comencemos con la diversión...

### Configurar proyecto

Lo primero que necesitamos es crear e inicializar nuestro proyecto desde la consola o terminal.

```
mkdir hello-world && cd hello-world
```

Inicializar proyecto en git (Siempre lo recomiendo sin importar si sera compartido).

```
git init
```

Inicializar proyecto con npm para instalar las dependencias necesarias.

```
npm init -y
```

### Instalar React

Una vez inicializado nuestro proyecto vamos a proceder a instalar **React** y crear la estructura necesaria para trabajar con react.

**Instalar React**

```
npm i react react-dom --save-dev
```

Estructura organizacional del proyecto:

- **src/** - Carpeta donde colocaremos todo el código del proyecto.
- **src/components/** - Carpeta donde almacenaremos los componentes.
- **index.html** - Archivo HTML donde insertaremos la construcción del proyecto.
- **index.js** - Documento principal de la aplicación.

Si quieres leer más acerca de como estructurar tus proyectos te recomiendo esta lectura: "[File Structure - React](https://reactjs.org/docs/faq-structure.html)".

### Hola Mundo en React

Ahora que tenemos instalado React y comprendemos como estructuraremos el proyecto, vamos a crear nuestras primeras lineas de código.

Creamos las carpetas necesarias para la estructura del proyecto:

```
mkdir src && mkdir src/components
```

Creamos el componente HelloWorld:

```
touch src/components/HelloWorld.jsx
```

Añadimos el siguiente código:

```js
import React from 'react' // Importamos React

// Creamos un componente presentacional que recibe la propiedad "text"
const HelloWorld = ({ text }) => <h1>{text}</h1>

export default HelloWorld
```

Ahora creamos la entrada principal donde vivirá la aplicación en React.

```
touch index.js
```

Añadimos el siguiente código:

```js
import React from 'react' // Importamos React
import ReactDOM from 'react-dom' // Importamos ReactDOM
import HelloWorld from './components/HelloWorld' // Importamos nuestro primer componente

// insertamos nuestro componente en nuestro documento HTML utilizando ReactDOM
ReactDOM.render(<HelloWorld text="Hola Mundo Cruel" />, document.getElementById('app'))
```

Creamos el documento HTML para la aplicación.

```
touch index.html
```

Añadimos el siguiente código:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <title>React Base</title>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
```

Hasta este momento ya tenemos el código base de una aplicación en React, pero debemos compilar el código y crear una rutina que nos permita optimizar el proceso.

### Instalar y configurar Babel

Babel es una herramienta que nos permite transformar nuestro código Javascript ES6 a JavaScript que cualquier navegador soporte. Lo que nos permite tener las nuevas funcionalidad de Javascript en la construcción de nuestros proyectos.

Instalar las dependencias necesarias:

```
npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
```

Creamos el documento "**.babelrc**" donde añadiremos la configuracion de Babel.

```
touch .babelrc
```

Añadimos la siguiente configuración:

```js
    {
      "presets": [
        "@babel/preset-env",   // Compila ES5 y ES6
        "@babel/preset-react"  // Compila JSX y sintaxis de React
      ]
    }
```

### Instalar y configurar Webpack

Webpack es una herramienta de compilación que nos permite añadir en un archivo todas las dependencias a los elementos que forman parte de tu proyecto de desarrollo: como el código de nuestra aplicación en React, HTML, CSS, imágenes entre otros recursos. Nos permite tener una tarea programada para optimizar la construcción y la ágil puesta en producción de nuestros proyectos.

Instalando Webpack

```
npm i webpack webpack-cli html-webpack-plugin html-loader --save-dev
```

Creamos webpack.config.js

```
touch webpack.config.js
```

Añadimos la configuración necesaria:

```js
const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js', // Elegimos nuestro punto de entrada
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  }, // Añadimos nuestro punto de salida
  resolve: {
    extensions: ['.js', '.jsx'], // Añadimos el soporte para la extencion de JSX
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/, // Ignora la carpeta de node_modules
        use: {
          loader: 'babel-loader', // Utiliza la configuracion de Babel
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    // utilizamos este plugin para añadir el compilado al documento HTML
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
}
```

### Compilar nuestro proyecto

Para que nuestro proyecto funcione y este listo para ser ejecutado en un navegador o enviarlo a producción tenemos que añadir la siguiente configuración a "package.json".

```js
    "scripts": {
      "build": "webpack --mode production"
    }
```

Ahora podemos utilizar el comando "build" para construir el proyecto.

```
npm run build
```

El cual nos construirá un proyecto en la carpeta "dist/" donde encontraremos un archivo index.html y bundle.js, ejecutamos el documento index.html en tu navegador de preferencia para ver nuestra aplicación funcionando.

### Buenas practicas

Ya para finalizar te recomiendo añadir el archivo .gitignore en la raíz de tu proyecto e ignorar /node_modules/ así como la carpeta /dist/ donde se almacena el proyecto compilado. Y por ultimo guardar los cambios en **Git**.

Te comparto el repositorio de Github: [React Base](https://github.com/gndx/react-base).

### En Conclusion

Aprendimos a crear un proyecto utilizando la configuración mínima para React, aprendimos sobre Babel y sus configuraciones así como utilizar WebPack para preparar nuestro proyecto.
