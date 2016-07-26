# Angular-es
Traducción oficial del website de Angular.io a Español

# Angular.io
[![Build Status][travis-badge]][travis-badge-url]

Angular.io es el sitio para la **documentación** de Angular 2.

Este sitio incluye también enlaces a otros recursos útiles de angular incluyendo
Angular 2, Angular 1, Angular Material y AngularFire.

## Problemas

Por favor crea **issues de Guithub _sólo_ referentes a la Guía del Desarrollador, a las Recetas y/o de ejemplos de código** al
repositorio [Angular.io](https://github.com/angular/angular.io/issues) de github. Este repositorio es para los errores generales de la doc.

**Problemas con la API de Angular, correcciones del cheatsheet, peticiones de funcionalidad, informes de defectos, y preguntas técnicas** referentes a Angular en si,
pertenecen al repositorio de [**código fuente de angular**](https://github.com/angular/angular/issues) de github.
No podemos manejar esos tipos de temas aquí y le pedimos que vuelva a publicarlos en el repositorio de angular.

## Cómo puedes ayudar

Crear issues de Github acerca de problemas es útil pero **pull requests** que mejoren la documentación son aun mejores!

Aprende como [contribuir a Angular.io](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md).

## Configuración para desarrollo
Este sitio depende en gran medida de node y npm.

1. Asegúrese de estar usando la versión más reciente de node y npm;
si no, instala [nvm](https://github.com/creationix/nvm) para conseguir node en tu máquina.

2. Instalar *globalmente* estos paquetes npm: `npm install -g harp gulp`

3. Clone este repositorio y el [repositorio de código fuente de angular](https://github.com/angular/angular) en el mismo directorio.

4. cd dentro del directorio raiz `angular.io/`

5. Instalar los paquetes locales de *all-docs* ejecutando el comando `npm install`
> Si se ejecuta node v.5+, probablemente se debe reconstruir `node-sass` en un paso a parte: `npm rebuild node-sass`

6. Ver [abajo](#desarrollo-de-código-muestra) para la preparación del desarrollo de código de muestra.

## Desarrollo de Contenido
Toda el contenido de documentación está escrito en Jade, el cual tiene [su propia sintaxis](http://jade-lang.com/reference/).
Hay que estar al tanto de las estrictas exigencias impuestas por este lenguaje de espacio en blanco significativo.
Recomendamos fuertemente ejecutar uno de los comandos `serve-and-sync` de gulp [descritos abajo](#serve-and-sync),
mientras se edita contenido para poder ver el efecto de los cambios *mientras se teclea*. 

La documentación se basa en estilos y mixins específicos.
Aprender acerca de ellos en la [guía de estilo de documentación](https://angular.io/docs/ts/latest/styleguide.html).

Los archivos jade de documentación están en directorios específicos por lenguaje
The jade documentation files are language-specific directories bajo la ruta `public/docs/`.
Por ejemplo, todos los documentos de TypeScript están en `public/docs/ts/latest`, ej.
- `public/docs/ts/latest/quickstart.jade`
- `public/docs/ts/latest/guide/architecture.jade`
- `public/docs/ts/latest/cookbook/component-communication.jade`
- `public/docs/ts/latest/tutorial/toh-pt5.jade`

### Servidor local con observadores y recarga de navegador
1. cd dentro del directorio raiz `angular.io/`
1. ejecutar `gulp serve-and-sync`
1. el navegador se lanzará en localhost:3000 y se mantendrá refrescado automáticamente.

<a id="serve-and-sync"></a>
Si se trabajará en una parte especifica de los documentos, tal como la guía de desarrollo, se puede utilizar una de las tareas más especificas de gulp para ver solo esas partes de los archivos del sistema:

* `gulp serve-and-sync` : ver todos los archivos Jade/Sass locales, los ejempos y recursos de la API y los archivos de la guía de desarrollo
* `gulp serve-and-sync-api` : ver solo los archivos de ejemplo y de código fuente de la API
* `gulp serve-and-sync-devguide` : ver solo los archivos de la guía de desarrollo
* `gulp build-and-serve` : ver solo los archivos Jade/Sass locales

## Desarrollo De Código Muestra

Toda la documentación está soportada por código de ejemplo y plunkers.
Dicho código reside en el directorio `public/docs/_examples`, bajo los directorios de capítulo específico, aún más divididos por lenguaje.

Por ejemplo, los ejemplos de muestra del Inicio Rápido de TypeScript están en `public/docs/_examples/quickstart/ts`.

Todos los ejemplos de muestra están en una estructura consistente de directorios usando los mismos estilos y los mismos paquetes npm, incluyendo la última liberación de Angular 2.
Esta consistencia es posible en parte, gracias a las erramientas impulsadas por gulp.
Para correr los ejemplos localmente y confirmar que trabajan apropiadamente,
tmar los siguientes pasos extra para preparar el ambiente:

1. cd a `public/docs/_examples`

1. instalar los paquetes canónicos para todos los ejemplos ejecutando `npm install`

1. cd de regreso a la raiz `angular.io`: `cd ../../..`

1. ejecutar `gulp add-example-boilerplate` (elevar a administrador en Windows)
para copiar archivos canónicos a los directorios de ejemplos y crear symlinks ahí para node_modules y typings.


Ahora cd en cualquier directorio de ejemplos particular a un languaje (ej., `public/docs/_examples/quickstart/ts`) y probar:
- `npm start`  para compilar-observar y servir-y-observar en el navegador simultaneamente
- `npm run tsc` para solo compilar
- `npm run lite` para servir-y-observar en el navegador

Mirar los scripts en `package.json` para otras opciones.
También, se puede abrir cualquier `plunkr.no-link.html` para ver la ejecución de código en plunker
(tal vez se debe ejecutar `gulp build-plunkers` primerro para crear/actualizar).

Se debe verificar que los ejemplos estén libres de errores lint.
- `gulp lint`

### Ejemplos de pruebas end-to-end

Todos los ejemplos deben de ser cubiertos hasta cierto grado por pruebas de end-to-end:
- `gulp run-e2e-tests` para ejecutar toodas las pruebas de TypeScript y JavaScript
- `gulp run-e2e-tests --lang=dart` para ejecutar todas las pruebas de Dart
- `gulp run-e2e-tests --lang=all` para ejecutar las pruebas deTypeScript, JavaScript y Dart
- `gulp run-e2e-tests --filter=quickstart` para filtrar la ejecucion de ejemplos por nombre
- `gulp run-e2e-tests --fast` para ignorar npm install, actualizacion de webdriver y la copia del boilerplate

Cualquier combinación de opciones es posible.

### Reinicio del proyecto
Este proyecto genera muchos archivos sin seguimiento, si deseas reiniciarlo a un estado mínimo, puedes ejecutar:

- `git clean -xdf`

También, hay un script disponible para los usuarios del Gitbash de Linux, OSX y Windows que configurará el proyecto usando los pasos mostrados en esta sección:

- `./scripts/install.sh`

### Ejecutar con el build actual en lugar de los paquetes de la liberación
Se pueden campbiarl los paquetes de `@angular` en `~/public/docs/_examples/node_modules` por los paquetes del build con
```
gulp install-example-angular --build
```
Restaurar a los paquetes de la LIBERACIÓN con
```
gulp install-example-angular
```
>Estos comandos fallaran si algo está bloqueando algunos de los paquetes ... como IDE lo hace a menudo.
>
>El síntoma es típicamente un error al tratar de `rm -rf node_modules/@angular`.
>
>_Solución_: Para desbloquear un quete. En VS Code, recargar la ventana (`cmd-P` luego ingresar `>relow`).


## Technología Usada
- Angular 1.x: La versión lista para producción de Angular
- Angular Material: Una implementación del Diseño Material en Angular.js
- Gulp: node-based Automatizar tareas comunes de desarrollo
- Harp: El servidor web estático con preprocesamiento incorporado
- Sass: Un lenguaje de extensión CSS de grado profesional
- Normalize: Una alternativa moderna lista para HTML5 para restablecer CSS
- Grids: Una sistema de cuadrícula de CSS altamente personalizable construido con Sass
- Prettify: Un módulo de JS y CSS para resaltar sintaxis de fragmentos de código fuente
- Icomoon: Fuentes de iconos personalizado incorporado


## Licencia
Desarrollado por Google ©2010-2016. Código autorizado bajo una [Licencia MIT-style](https://github.com/angular.io/blob/master/LICENSE). Documentation licensed under [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/).

[travis-badge]: https://travis-ci.org/angular/angular.io.svg?branch=master
[travis-badge-url]: https://travis-ci.org/angular/angular.io

