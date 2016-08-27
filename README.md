# Angular.io y Angular-es
[![Build Status][travis-badge]][travis-badge-url]

Angular.io es el sitio para la **documentación** de Angular 2.
Angular-es es la traducción oficial de Angular.io

Este sitio incluye también enlaces a otros recursos útiles de angular incluyendo
Angular 2, Angular 1, Angular Material y AngularFire.

## Problemas

Por favor crea **issues en Guithub _sólo_ referentes a la Guía del Desarrollador, a las Recetas y/o de ejemplos de código** en el
repositorio [Angular.io](https://github.com/angular/angular.io/issues) de github.

**Problemas con la API de Angular, correcciones del cheatsheet, peticiones de funcionalidad, informes de defectos, y preguntas técnicas** referentes a Angular en si,
pertenecen al repositorio de [**código fuente de angular**](https://github.com/angular/angular/issues) de github.
No podemos manejar esos tipos de temas aquí y le pedimos que vuelva a publicarlos en el repositorio de angular.

Por último, para problemas con la localización al Español de esta documentación, por favor abra un issue en el repositorio de [angular-es](https://github.com/angular/angular-es)

## Cómo puedes ayudar

Crear issues en Github es útil, pero ¡**pull requests** que mejoren la documentación son aun mejores!

Aprende como [contribuir a Angular.io](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md).

## Configuración para desarrollo
Este sitio depende en gran medida de node y npm.

1. Asegúrese de estar usando la versión más reciente de node y npm;
si no, instala [nvm](https://github.com/creationix/nvm) para conseguir node en tu máquina.

2. Instale *globalmente* estos paquetes npm: `npm install -g harp gulp`

3. Clone este repositorio y el [repositorio de código fuente de angular](https://github.com/angular/angular), y el [repositorio de código fuente de dart-lang/angular 2](https://github.com/dart-lang/angular2) en el mismo directorio.
El repositorio de angular tiene que llamarse **angular** y el de dart **angular-dart**.

4. cd dentro del directorio raiz `angular.io/`

5. Instale los paquetes locales del sitio ejecutando el comando `npm install`
> Si está ejecutando node v.5+, probablemente deba reconstruir `node-sass` en un paso a parte: `npm rebuild node-sass`

6. Vea [abajo](#desarrollo-de-código-muestra) para la preparación del desarrollo de código de muestra.

## Desarrollo de Contenido
Todo el contenido de documentación está escrito en Jade, el cual tiene [su propia sintaxis](http://jade-lang.com/reference/).
Hay que tener en cuenta las estrictas exigencias de formato de texto impuestas por Jade.
Recomendamos encarecidamente ejecutar uno de los comandos `serve-and-sync` de gulp [descritos debajo](#serve-and-sync),
mientras se edita contenido para poder ver el efecto de los cambios *mientras se teclea*. 

La documentación se basa en estilos y mixins específicos.
Aprenda acerca de ellos en la [guía de estilo de documentación](https://angular.io/docs/ts/latest/styleguide.html).

Los archivos jade de documentación están en directorios específicos por lenguaje en la ruta `public/docs/`.
Por ejemplo, todos los documentos de TypeScript están en `public/docs/ts/latest`, ej.
- `public/docs/ts/latest/quickstart.jade`
- `public/docs/ts/latest/guide/architecture.jade`
- `public/docs/ts/latest/cookbook/component-communication.jade`
- `public/docs/ts/latest/tutorial/toh-pt5.jade`

### Servidor local sincronizado y recarga del navegador
1. cd dentro del directorio raiz `angular.io/`
1. ejecute `gulp serve-and-sync`
1. el navegador se lanzará en localhost:3000 y se mantendrá actualizado automáticamente.

<a id="serve-and-sync"></a>
Si va a trabajar en una parte especifica de la documentación, tal como la guía de desarrollo, se puede utilizar una de las tareas más especificas de gulp para sincronizar solo esos archivos del sistema:

* `gulp serve-and-sync` : sincronice todos los archivos Jade/Sass locales, los ejempos y recursos de la API y los archivos de la guía de desarrollo
* `gulp serve-and-sync-api` : sincronice solo los archivos de ejemplo y de código fuente de la API
* `gulp serve-and-sync-devguide` : sincronice solo los archivos de la guía de desarrollo
* `gulp build-and-serve` : sincronice solo los archivos Jade/Sass locales

## Desarrollo Del Código De Ejemplo

Toda la documentación está apoyada por código de ejemplo y plunkers.
Dicho código reside en el directorio `public/docs/_examples`, bajo los directorios del capítulo especifico y luego divididos por lenguaje.

Los ejemplos del Inicio Rápido en Typescript están en `public/docs/_examples/quickstart/ts`.

Todos los ejemplos están en una estructura consistente de directorios usando los mismos estilos y los mismos paquetes npm, incluyendo la última versión de Angular 2.
Esta consistencia es posible en parte, gracias a las herramientas impulsadas por gulp.
Para lanzar los ejemplos localmente y confirmar que trabajan apropiadamente,
ejecute los siguientes pasos extra para preparar el entorno:

1. cd a `public/docs/_examples`

1. instale los paquetes canónicos para todos los ejemplos ejecutando `npm install`

1. cd de vuelta a la raiz `angular.io`: `cd ../../..`

1. ejecute `gulp add-example-boilerplate` (elevar a administrador en Windows)
para copiar los archivos en los directorios de los ejemplos y crear symlinks ahí para node_modules y typings.

Ahora entra en cualquier ejemplo particular de un languaje (ej., `public/docs/_examples/quickstart/ts`) y pruebe:
- `npm start`  para compilar y servir en el navegador de forma sincronizada
- `npm run tsc` para solo compilar
- `npm run lite` para servir en el navegador de forma sincronizada

Mire los scripts en `package.json` para otras opciones.
También, puede abrir cualquier `plunkr.no-link.html` para ver la ejecución del código en plunker
(tal vez se debe ejecutar `gulp build-plunkers` primero para crear/actualizar).

Se debe verificar que los ejemplos estén libres de errores de estilo.
- `gulp lint`

### Ejemplos de pruebas end-to-end

Todos los ejemplos deben de ser cubiertos hasta cierto grado por pruebas de end-to-end:
- `gulp run-e2e-tests` para ejecutar todas las pruebas de TypeScript y JavaScript
- `gulp run-e2e-tests --lang=dart` para ejecutar todas las pruebas de Dart
- `gulp run-e2e-tests --lang=all` para ejecutar las pruebas de TypeScript, JavaScript y Dart
- `gulp run-e2e-tests --filter=quickstart` para filtrar la ejecucion de ejemplos por nombre
- `gulp run-e2e-tests --fast` para ignorar npm install, actualizacion de webdriver y la copia del boilerplate

Cualquier combinación de opciones es posible.

### Reinicio del proyecto
Este proyecto genera muchos archivos, si deseas reiniciarlo a su estado original, puedes ejecutar:

- `git clean -xdf`

También, hay un script disponible para los usuarios de Linux, OSX y Windows Gitbash que configurará el proyecto usando los pasos mostrados en esta sección:

- `./scripts/install.sh`

### Trabajar con la versión build de Angular en vez de la última versión publicada
Se pueden cambiar los paquetes de `@angular` en `~/public/docs/_examples/node_modules` por los paquetes del build con
```
gulp install-example-angular --build
```
Restaurar a los paquetes de la VERSIÓN ACTUAL con
```
gulp install-example-angular
```
>Estos comandos fallarán si algo está bloqueando algunos de los paquetes ... como algún IDE hace a menudo.
>
>El síntoma es típicamente un error al tratar de `rm -rf node_modules/@angular`.
>
>_Solución_: Para desbloquear un paquete. En VS Code, recargar la ventana (`cmd-P` luego ingresar `>relow`).

NOTA: La versión build corresponde con la versión en master de Angular 2


## Technología Usada
- Angular 1.x: La versión lista para producción de Angular
- Angular Material: Una implementación del Material Design en Angular.js
- Gulp: Librería basada en node que sirve para automatizar tareas comunes de desarrollo
- Harp: El servidor web estático con preprocesamiento incorporado
- Sass: Una extensión de CSS.
- Normalize: Una alternativa moderna lista para HTML5 y normalizar el CSS
- Grids: Una sistema de cuadrícula de CSS altamente personalizable construido con Sass
- Prettify: Un módulo de JS y CSS para resaltar sintaxis de fragmentos de código fuente
- Icomoon: Fuentes de iconos personalizados


## Licencia
Desarrollado por Google ©2010-2016. Código autorizado bajo una [Licencia MIT-style](https://github.com/angular.io/blob/master/LICENSE). Documentación licenciada bajo [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/).

[travis-badge]: https://travis-ci.org/angular/angular.io.svg?branch=master
[travis-badge-url]: https://travis-ci.org/angular/angular.io
