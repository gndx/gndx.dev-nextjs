---
title: Entendiendo "map()" en Javascript
summary: Cuando tenemos que trabajar con Arreglos en JavaScript, hay varias opciones disponibles con los cuales podemos iterar, transformar o manipular nuestros arreglos.
date: 2019-05-27
tags: ['javascript', 'tutoriales', 'recursos']
---

Cuando tenemos que trabajar con **Arreglos en JavaScript**, hay varias opciones disponibles con los cuales podemos iterar, transformar o manipular nuestros arreglos. En esta ocasión vamos a hablar de cómo funciona "**Array.prototype.map()**" este método que podemos usar en los arreglos en JavaScript.

El sitio de MDN de Mozilla nos explica su funcionalidad de la siguiente forma:

> El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

**¿Pero qué significa esto puesto en la practica?** El método map() nos permite devolver un nuevo arreglo de datos partiendo de un arreglo, dicho así, no mutamos los datos del arreglo original, ahora tenemos un nuevo arreglo con los valores resultantes.

**Pongamos un problema y solucionemos con el método map(). **
Tenemos una lista de productos que comprara un usuario y queremos obtener solamente los nombres de los productos a comprar.

Para entender un poco más el ejemplo vamos a resolverlo sin el método map(), para ello utilizaremos el método for().

```js
    const products = [
        { id: "1", name: "shirt", category: "clothing" },
        { id: "2", name: "Sports Tennis", category: "accessories" },
        { id: "3", name: "Casual shoes", category: "footwear" },
        { id: "4", name: "skirt", category: "clothing" },
        { id: "5", name: "tie", category: "clothing" }
    ]

    let nameOfProducts = [];

    for (let i = 0; i < products.length; i++) {
        nameOfProducts.push(products[i].name);
    }

    console.log(nameOfProducts); // ["shirt","Sports Tennis","Casual shoes","skirt","tie"]
```

**Ahora resolvamos el problema con el método map()**
map() recibe como parámetro una función la cual recibe 3 parámetros, el elemento actual, indice del elemento actual y el arreglo original.

```js
    arreglo.map(function(elementoActual, indice, arregloOriginal) {  ... código });

    const products = [
        { id: "1", name: "shirt", category: "clothing" },
        { id: "2", name: "Sports Tennis", category: "accessories" },
        { id: "3", name: "Casual shoes", category: "footwear" },
        { id: "4", name: "skirt", category: "clothing" },
        { id: "5", name: "tie", category: "clothing" }
    ]
    let nameOfProducts = products.map((product, index, array) => {
        // Cómo solo queremos los nombres, retornamos "name".
        return product.name;
    })

    console.log(nameOfProducts2); // ["shirt", "Sports Tennis", "Casual shoes", "skirt", "tie"]
```

En Conclusión:

Cómo podemos apreciar hemos reducido nuestro código, ahora es más legible, fácil de entender y simplificado.  La funcionalidad de .map() se puede ampliar con otros métodos y utilizarse poderosamente, te dejo la [documentación de MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map) por si quieres ver mas ejemplos prácticos.

Te invito a ponerte algunos retos y resolverlos utilizando el método map(). Si tienes dudas, deja tus comentarios o preguntas. ¡siempre serán apreciados!
