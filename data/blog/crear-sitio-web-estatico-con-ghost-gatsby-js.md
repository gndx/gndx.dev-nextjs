---
title: Crear sitio web estático con Ghost + Gatsby.js
summary: Crea tu blog con un frontend completamente personalizado, creado con Ghost y con todo el poder de Gatsby.js.
date: 2020-01-12
tags: ['javascript', 'tutoriales', 'gatsby']
---

Crea tu blog con un frontend completamente personalizado, creado con Ghost y con todo el poder de Gatsby.js.
![gatsby en heroku](https://s3.amazonaws.com/arepadev/2020/01/gatsby-heroku.png)
Implementando la API de contenido podemos aprovechar Ghost para gestionar el contenido, lo que permite a los desarrolladores crear y personalizar el frontend con tecnologías modernas como Gatsby.js.

Anteriormente en este blog aprendimos como instalar "[Ghost en Heroku](https://arepa.dev/instalar-ghost-en-heroku/)" lo que nos permite tener un blog funcionando con Ghost y nos permitirá usarlo como "El Backend" de nuestro blog.

Aprenderás:

1. ¿Que es Gatsby.js?
2. Instalar Gatsby.js
3. Crear Blog con Gastby.js
4. Configurar Ghost + Gastby.js
5. Servidor de desarrollo local
6. Personalizar blog
7. Desplegar con Netlify

### ¿Que es Gatsby?

**Gatsby** es un generador de sitios web estáticos, utiliza React e implementa en su núcleo JAMStack lo que nos permite crear sitios web rápidos y seguros, que son entregados mediantes archivos preparados previamente y se sirven directamente desde un CDN eliminando los requisitos de administrar o ejecutar servidores web complejos.

Gatsby.js utiliza la ultima tecnología implementando ReactJS, Webpack, GraphQl, CSS y Javascript moderno. Teniendo en cuenta esto, Gastby.js aprovecha al máximo los beneficios de React, Progresive Web Apps y PRPLPattern (Push, Render, Pre-cache, Lazy-Load).

Es por esto que Gatsby.js tiene muchas ventajas entre las que destacan, rapidez, facilidad, estabilidad, fácilmente para hospedarlos.

### Instalar Gatsby.js

Para instalar gatsby y poder crear sitios estáticos rápidamente debemos de instalarlo como una dependencia global.

    npm install -g gatsby-cli

Los paquetes globales se deben instalar con permisos de administrador.

### Crear Blog con Gastby.js

Utilizando _gatsby-cli_ vamos a instalar una nueva instancia del Gatsby preparado para trabajar con ghost.

Ejecuta el siguiente comando en tu espacio de trabajo, donde puedas identificar la carpeta ya que deberemos configurar nuestro blog con un editor de código.

    gatsby new BLOG_NAME https://github.com/TryGhost/gatsby-starter-ghost.git

Reemplaza BLOG_NAME por el nombre de tu blog o la carpeta del proyecto.

Cuando la instalación termine debes de instalar las dependencias del proyecto.

    npm install

### Configurar Ghost + Gastby.js

Es importante que para este punto debas tener ejecutándose un blog con Ghost.

#### Usar API de Ghost.

En al administrador de tu sitio creado en Ghost en el apartado de "Integrations" crearemos una nueva integración.
![](https://s3.amazonaws.com/arepadev/2020/01/integations-ghost-api.png)
Debemos de tener los datos de "ContentAPIKey" y "API URL" ya que serán necesarios para configurar nuestro sitio web.

#### Conectar API de Ghost a Gatsby.js

Debemos de abrir la carpeta del proyecto que recién instalamos para personalizar nuestro sitio web.

En la raíz del sitio encontraras el archivo "ghost.json" donde debemos agregaremos la API que generamos.

```json
{
  "development": {
    "apiUrl": "https://sitebuild.herokuapp.com",
    "contentApiKey": "J4325d9e8d2385ba3547119e1d06",
    "version": "v2"
  },
  "production": {
    "apiUrl": "https://sitebuild.herokuapp.com",
    "contentApiKey": "J4325d9e8d2385ba3547119e1d06",
    "version": "v2"
  }
}
```

Estamos trabajando con la versión 3.x de Ghost por lo cual debemos de agregar al json _version: "v2"_.

### Configurar sitio

Para configurar nombre del dominio, numero de post por página, Seo, entre otras configuraciones es necesario editar el archivo siteConfig.js.

```js
    module.exports = {
        siteUrl: `https://gatsby.ghost.org`,
        postsPerPage: 12,
        siteTitleMeta: `Ghost Gatsby Starter`,
        siteDescriptionMeta: `Ghost and Gatsby`,
        shareImageWidth: 1000,
        shareImageHeight: 523,
        shortTitle: `Ghost`,
        siteIcon: `favicon.png`,
        backgroundColor: `#e9e9e9`,
        themeColor: `#15171A`,
    }
```

### Servidor de desarrollo local

Una que añadimos la configuración necesaria podemos desplegar un servidor de desarrollo local donde podemos personalizar nuestro sitio web a nuestro antojo.

    npm run dev

Ahora ya tienes un sitio estático con los recursos de tu blog creado en Ghost.
![](https://s3.amazonaws.com/arepadev/2020/01/blog-ghost-gatsby.jpg)

### Personalizar blog

En este momento ya podemos personalizar el frontend de tu blog, Gatsby.js está construido en react y dentro de la carpeta "src/" podrás encontrar la estructura del sitio la cual podrás personalizar a tu gusto.

Te dejo el repositorio de este blog donde podrás revisar las personalizaciones que le he realizado.

[Arepa.dev en Github](https://github.com/gndx/arepa.dev).

#### Personalizar con Plugins.

Gatsby.js cuenta con una gran cantidad de plugins que sé incorporar en tu sitio web, algunos plugins que utiliza esta blog.

1. [gatsby-plugin-sentry](https://www.gatsbyjs.org/packages/gatsby-plugin-sentry/)
2. [gatsby-plugin-google-analytics](https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/)
3. [gatsby-remark-prismjs](https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/?=prims)

[Directorio de Plugins de Gatsby](https://www.gatsbyjs.org/plugins/).

### Desplegar en Netlify

Netlify es un servicio de hospedaje de sitios web estáticos, muy similar a GithubPages o Firebase Hosting. La principal ventaja de Netlify es su simpleza para desplegar los sitios, solo requiere conectarse con un repositorio en la nube para crear una integración continua y un despliegue continuó.

**NOTA:** Es necesario subir tu proyecto a un repositorio para poder crear la integración con Netlify.

1. [Crear una cuenta en Netlify](https://app.netlify.com/signup)
2. [Conectar un repositorio](https://app.netlify.com/start)
3. Configurar despliegue

Aprende más de Netlify en la [documentación oficial](https://docs.netlify.com/).

#### Crear webhook para conectar Ghost + Netlify

Para que cada cambio que hacemos en nuestro blog creado en Ghost debemos de crear una integración para ejecutar un nuevo despliegue de nuestro sitio en Netlify.

#### Obtener API de Netlify

En el dashboard de Netlify seleccionamos el sitio y vamos a la sección de "Deploys" > "Deploy Settings" y dentro de esta sección buscamos la sección "Build Hooks".

Añadimos una nueva configuración lo que nos entregara una URL la cual añadiremos en nuestro sitio con ghost.
![](https://s3.amazonaws.com/arepadev/2020/01/netlify-webhook-crear.png)
En el administrador de tu sitio Ghost en "Integrations" debemos crear una nueva integración.

En el apartado de "Webhooks" agregaremos una nueva integración con los siguientes datos:
![](https://s3.amazonaws.com/arepadev/2020/01/webhook-heroku-netlify.png)
¡Listos! Ya tenemos la integración completa, cada que creemos una página nueva, blogpost, tag, enlace etc. etc. automáticamente se ejecutara una nueva compilación en Netlify.

### Rendimiento

Analiza tu sitio con la herramienta de [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) para que puedas comprobar la optimización que cuenta tu nuevo sitio.
![](https://s3.amazonaws.com/arepadev/2020/01/performace-ghost-gatsby.png)

### Conclusiones

Aprendiste a crear un sitio web estático utilizando Gatsby.js usando ghost como un manejador del contenido y aprovechando todas las ventajas que nos provee gatsby.js creaste una cuenta en Netlify y configuraste los hooks necesarios para desplegar de forma continua tu sitio web.

Ahora que tienes tu sitio web estático con Gatsby.js, deja un comentario con la url de tu sitio web estático.
