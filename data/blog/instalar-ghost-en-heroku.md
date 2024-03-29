---
title: Instalar Ghost en Heroku
summary: Ghost es una plataforma para creación de Blogs de código abierto escrita en JavaScript y se distribuye con una licencia MIT. Desde su lanzamiento en el 2013 ha tomado bastante popularidad por su simpleza y rendimiento.
date: 2020-01-06
tags: ['tutoriales', 'javascript', 'heroku']
---

Hace tiempo me preguntaron como esta construido este blog por lo cual escribiré una seria de recursos para ayudarte a crear un blog con las mismas tecnologías que utilizo.

Arepa.dev utiliza [Ghost](https://ghost.org/) para crear y manejar el contenido que escribo y utilizo [Gatsby](https://www.gatsbyjs.org/) para crear un sitio estático, personalizar el frontend y obtener todo el poder de Gatsby.
![](https://s3.amazonaws.com/arepadev/2020/01/admin-api-gatsby-diagram.png)
En esta entrega nos centraremos en instalar **Ghost en Heroku** y dejar funcionando la primer parte del blog a la cual le llamaremos "**El Backend**".

### Instalar Ghost en Heroku

Ghost es una plataforma para creación de Blogs de código abierto escrita en JavaScript y se distribuye con una licencia MIT. Desde su lanzamiento en el 2013 ha tomado bastante popularidad por su simpleza y rendimiento.

Para esta sección es necesario tener presente los siguientes elementos para crear un blog con ghost.

1. [Cuenta en Heroku](https://signup.heroku.com/)
2. [Cuenta en Amazon Web Services](https://aws.amazon.com/es/free/)

Una vez creada tu cuenta en Amazon Web Services debes de obtener los siguientes elementos:

1. [AWS Access Key](https://docs.aws.amazon.com/es_es/general/latest/gr/managing-aws-access-keys.html)
2. [AWS Secret Key](https://docs.aws.amazon.com/es_es/general/latest/gr/managing-aws-access-keys.html)
3. [Crear un Bucket en S3](https://docs.aws.amazon.com/es_es/AmazonS3/latest/user-guide/create-bucket.html)

Ahora que tienes todos los requisitos necesarios podemos proceder a instalar **Ghost en Heroku**  para este paso he creado un repositorio donde esta toda la configuración necesaria para instalar Ghost en su última versión en Heroku.

Lo único que tienes que hacer es utilizar el siguiente botón de deploy en Heroku y seguir las instrucciones necesarias.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://dashboard.heroku.com/new?button-url=https%3A%2F%2Fgithub.com%2Fgndx%2Fghost-on-heroku&template=https%3A%2F%2Fgithub.com%2Fgndx%2Fghost-on-heroku)

Ahora deberas elegir un nombre de usuario para la App que crearas en Heroku la cual será la url que obtendrás para tu blog.
![](https://s3.amazonaws.com/arepadev/2020/01/heroku-app.png)
Esta configuración utilizara una base de datos en MySql y el servicio de mailgun para el manejo de correo electrónico dentro de tu proyecto.
![](https://s3.amazonaws.com/arepadev/2020/01/heroku-aws.png)
Una vez que hemos llenado todos los datos necesarios procedemos a darle click en "Deploy App" para crear nuestra aplicación.

Cuando termine el proceso podrás visualizar en la URL elegida la bienvenida de Ghost. Ahora es necesario ir al https:///ghost/ para configurar tu usuario y empezar a crear contenido.
![](https://s3.amazonaws.com/arepadev/2020/01/register-ghost.png)
Ahora tienes un nuevo blog con Heroku.
![](https://s3.amazonaws.com/arepadev/2020/01/ghost-heroku-blog.png)
Ahora que tienes tu blog funcionando con Ghost, es momento de personalizarlo y crear tu primer blogpost.
