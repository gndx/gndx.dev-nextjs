---
title: Hola Mundo en Svelte + Webpack +  Babel
summary: Svelte es un nuevo framework de JavaScript con el cual podemos crear interfaces de usuario.
date: 2020-01-03
tags: ['svelte', 'javascript', 'tutoriales']
---

**Svelte** es un nuevo framework de **JavaScript** con el cual podemos crear interfaces de usuario. Svelte ha cambiado la forma en que trabajan los frameworks o librerías populares del momento, Svelte se ejecuta en tiempo de compilación convirtiendo sus componentes en código imperativo altamente eficiente.

Otro de los puntos a considerar de Svelte es que no utiliza un Virtual DOM, escribe el código que actualiza minuciosamente el DOM cuando es necesario actualizar el estado de la aplicación.

En este recurso aprenderemos a instalar, configurar y dejar un proyecto funcional para empezar con Svelte configurando paso a paso cada detalle que necesita.

Aprenderemos:

1. Configurar Proyecto
2. Instalar Svelte
3. Configurar Babel
4. Configurar Webpack
5. Crear Aplicación con Svelte
6. Compilar proyecto

Ahora ha llegado el momento de la diversión...

## Configurar proyecto

Lo primero que tenemos que crear e Inicializar el proyecto que vamos a utilizar.

```
mkdir svelte-base && cd svelte-base
```

Inicializar el repositorio git

```
git init
```

Inicializar proyecto con npm para las dependencias y configuraciones.

```
npm init -y
```

### instalar Svelte

Ya que tenemos el proyecto Inicializado con git y npm vamos a instalar Svelte y crear la estructura necesaria para trabajar con el proyecto.

#### Instalar Svelte

```
npm install svelte --save
```

Estructura del proyecto

- src/ : Carpeta donde vive el código del proyecto
- src/components/ : Carpeta donde almacenaremos los componentes
- public/index.html : Archivo HTML base para la construcción del proyecto
- src/index.js Documento principal de la aplicación

### Configurar Babel

Para trabajar con todas las bondades de Svelte y JavaScript moderno vamos a utilizar Babel para transpilar nuestro proyecto.

```
    npm install @babel/core @babel/preset-env @babel/polyfill babel-loader svelte-loader --save-dev
```

Más adelante explicare a detalle y su implementación en el proyecto cuando configuremos Webpack.

Crear archivo de configuración de Babel en la raíz del proyecto y le asignamos el nombre ".babelrc"

```js
     {
          "presets": [
            "@babel/preset-env"
         ],
     }
```

### Configurar Webpack

Webpack nos permite añadir la configuración necesaria para compilar el proyecto y todos los recursos necesarios.

```
npm install webpack webpack-cli html-webpack-plugin --save-dev
```

Creamos el archivo "webpack.config.js" donde vamos a añadir la configuración necesaria.

```js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/index.js', // Elegimos nuestro punto de entrada
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  }, // Añadimos nuestro punto de salida
  resolve: {
    extensions: ['*', '.mjs', '.js', '.svelte'],
  }, // Añadimos el soporte para las extensiones que utiliza svelte
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      }, // Creamos la regla para nuestros archivos JS
      {
        test: /\.svelte$/,
        exclude: /node_modules/,
        use: {
          loader: 'svelte-loader',
        },
      }, // Utilizamos svelte-loader para trabajar con los archivos .svelte
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
      filename: './index.html',
    }),
  ], // utilizamos este plugin para añadir el recurso compilado al documento HTML
}
```

### Crear Aplicación con Svelte

Con la configuración previa tenemos todos los recursos necesarios para crear un proyecto con Svelte.

En nuestro archivo "index.js" creamos la configuración necesaria.

```js
import App from './components/App.svelte' // importamos el componente App

// Creamos una app que extiende del App compoenente que creamos con la lógica de nuestra aplicación.
const app = new App({
  target: document.querySelector('main'), // punto de entrada
  props: {
    name: 'Svelte',
  }, // props de la aplicación
})

// Exportamos por defecto app.
```

Dentro de la carpeta "components" creamos el archivo App.svelte y añadimos los recursos necesarios para nuestra aplicación.

```js
    // Asignamos la logica de nuestra aplicación
    <script>
      export let name; // Hacemos referenccia al Prop Name
    </script>

    // Creamos los estilos de la aplicación.
    <style>
      :global(body) {
        background-color: #676778;
        color: white;
      }
      .main {
        display: flex;
        justify-content: center;
      }
    </style>

    // Llamamos el HTML de nuestro sitio.
    <div class="main">
      <h1>Hello {name}!</h1>
    </div>
```

Ya por último dentro de la carpeta "public/" vamos a crear el archivo "index.html" para crear el punto de entrada de nuestra aplicación.

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Svelte Base</title>
  </head>

  <body>
    <main></main>
  </body>
</html>
```

Ahora que tenemos los recursos necesarios para nuestro proyecto vamos a compilar nuestro proyecto para verlo funcionando en nuestro navegador.

En "package.json" en la sección de "scripts" creamos el script de "build" con la configuración necesaria para compilar el proyecto.

```js
    "scripts": {
         "build": "webpack --mode production",
     },
```

Ahora podemos ejecutar en la terminal nuestro script para compilar.

```
npm run build
```

Se ha creado una carpeta "dist/" en la cual encontraremos los archivos "index.html" y "bundle.js" con nuestra aplicación.
![](https://s3.amazonaws.com/arepadev/2020/01/svelte-build.png)
Ahora ejecutamos el archivo "index.html" en nuestro navegador y podemos visualizar la aplicación creada.
![](https://s3.amazonaws.com/arepadev/2020/01/svelte-production.png)

### Repositorio

En este repositorio de GitHub puedes encontrar el proyecto completo "[Svelte Base](https://github.com/gndx/svelte-base)".

### En Conclusión

Aprendiste a crear la estructura para un proyecto, configurar Webpack e implementar Babel para transpilar Svelte y crear los archivos necesarios para crear una simple aplicación con Svalte.

Ahora puedes compartir este proyecto configurando a detalle cada uno de los puntos necesarios para implementar un sitio con Svelte.

Quieres aprender más de Svelte, te invito al sitio oficial donde encontraras toda la información, documentación y ejemplos. Visita: [Svelte.dev](https://svelte.dev/)

He creado un grupo en Facebook: "[Svelte JS Español](https://www.facebook.com/groups/636500396887174/)" con la finalidad de compartir más recursos y unir a todos los desarrolladores de habla hispana.
