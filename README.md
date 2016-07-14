# Angular-es
Traducción oficial del website de Angular.io a Español

# Angular.io
[![Build Status][travis-badge]][travis-badge-url]

Angular.es es el sitio para la **documentación** de Angular 2. 

Este sitio además incluye enlaces a otros recursos útiles incluyendo
Angular 2, Angular 1, Angular Material y AngularFire.

## Problemas

Porfavor presente **solo problemas en la Guia del Desarrollador, Cookbook y ejemplos de código** en este 
[Angular.es](https://github.com/angular/angular-es/issues) repositorio de github.

**Problemas en el API de Angular, correciones del documento, pedidos de carácteristicas, reportes de defectos y preguntas técnicas** sobre Angular en si
pertenecen al repositorio de github del [**código fuente de angular**](https://github.com/angular/angular/issues).
No podemos manejar esos temas aquí y le pediremos que vuelva a publicarlos en el repositorio de angular.

## Como puedes ayudar?

Presentar problemas es útil pero hacer **pull requests** que mejoren los documentos es mejor!

Aprende como [contribuir a Angular-es](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md).

## Configuración de desarrollo
Este sitio se basa en gran medida de node y npm.

1. Asegurate que estes usando el último node y npm; 
si no instala [nvm](https://github.com/creationix/nvm) para que consigas node en tu máquina.

1. Instala estos paquetes de npm *globalmente*: `npm install -g harp gulp`

1. Clona este repositorio y el [repositorio del código fuente de angular](https://github.com/angular/angular) en el mismo directorio padre.
Los 2 directorios de repositorios clonados deben ser hermanos.

1. cd dentro del directorio raiz `angular-es/`

1. Instala los paquetes locales de *all-docs* por ejecutar `npm install`
> Si esta ejecutandose una v.5+ de node, probablemente debas reconstruir  `node-sass` en un paso separado: `npm rebuild node-sass`

1. Ve [abajo](#code-sample-development) para la preparación del desarrollo de códigos ejemplo.

## Content Development
All documentation content is written in Jade which has [its own syntax](http://jade-lang.com/reference/).
Be aware of the strict demands imposed by this significant-whitespace language.
We strongly recommend running one of the gulp `serve-and-sync` commands [described below](#serve-and-sync)
while editing content so you can see the effect of your changes *as you type*.

The documentation relies on specific styles and mixins. 
Learn about those in the [documentation styleguide](https://angular.io/docs/ts/latest/styleguide.html).

The jade documentation files are language-specific directories under either `public/docs/`.
For example, all of the TypeScript docs are in `public/docs/ts/latest`, e.g.
- `public/docs/ts/latest/quickstart.jade`
- `public/docs/ts/latest/guide/architecture.jade`
- `public/docs/ts/latest/cookbook/component-communication.jade`
- `public/docs/ts/latest/tutorial/toh-pt5.jade`

### Local server with watches and browser reload
 1. cd into root directory `angular.io/`
 1. run `gulp serve-and-sync`
 1. browser will launch on localhost:3000 and stay refreshed automatically.

<a id="serve-and-sync"></a>
If you are only going to work on a specific part of the docs, such as the dev guide, then you can use one of the more specific gulp tasks to only watch those parts of the file system:

* `gulp serve-and-sync` : watch all the local Jade/Sass files, the API source and examples, and the dev guide files
* `gulp serve-and-sync-api` : watch only the API source and example files
* `gulp serve-and-sync-devguide` : watch only the dev guide files
* `gulp build-and-serve` : watch only the local Jade/Sass files

## Code Sample Development

All documentation is supported by sample code and plunkers. 
Such code resides in the `public/docs/_examples` directory, under chapter-specific directories, further divided by language track.

For example, the TypeScript QuickStart sample is in `public/docs/_examples/quickstart/ts`.

All samples are in a consistent directory structure using the same styles and the same npm packages, including the latest release of Angular 2.
This consistency is possible in part thanks to gulp-driven tooling. 
To run the samples locally and confirm that they work properly, 
take the following extra steps to prepare the environment:

1. cd to `public/docs/_examples`

1. install the canonical node packages for all samples by running `npm install`

1. cd back up to `angular.io` root: `cd ../../..`

1. run `gulp add-example-boilerplate` (elevate to admin on Windows) 
to copy canonical files to the sample directories and create symlinks there for node_modules and typings. 

Now cd into any particular sample's language directory (e.g., `public/docs/_examples/quickstart/ts`) and try:
- `npm start`  to simultaneously compile-with-watch and serve-in-browser-with-watch
- `npm run tsc` to compile only
- `npm run lite` to serve-and-watch in browser

Look at the scripts in `package.json` for other options.
Also, open any `plunkr.no-link.html` to see the code execute in plunker
(you may have to run `gulp build-plunkers` first to create/update).

You must check that your example is free of lint errors.
- `gulp lint`

### Sample end-to-end tests

All samples should be covered to some degree by end-to-end tests:
- `gulp run-e2e-tests` to run all TypeScript and JavaScript tests
- `gulp run-e2e-tests --lang=dart` to run all Dart tests
- `gulp run-e2e-tests --lang=all` to run TypeScript, JavaScript, and Dart tests
- `gulp run-e2e-tests --filter=quickstart` to filter the examples to run, by name
- `gulp run-e2e-tests --fast` to ignore npm install, webdriver update and boilerplate copy

Any combination of options is possible.

### Resetting the project
This project generates a lot of untracked files, if you wish to reset it to a mint state, you can run:

- `git clean -xdf`

Also, there is a script available for Linux and OSX users that will setup the project using the steps shown in this section:

- `./scripts/install.sh`


## Tecnología usada
- Angular 1.x: La versión de producción lista de Angular
- Angular Material: Una implementación de Material Design en Angular.js
- Gulp: herramienta basada en node
- Harp: El servidor web estático con preprocesamiento incorporado.
- Sass: Un lenguaje de extensión de grado profesional de CSS
- Normalize: Una alternativa moderna y preparada para HTML5 para reestablecer CSS
- Grids: Un framework de cuadrículas (grid) de CSS altamente personalizable hecho con Sass
- Prettify: Un módulo de JS y CSS para el apoyo de sintaxis de porciones de código fuennte.
- Icomoon: Fuentes de icono personalizados incorporados


## Licencia
Impulsado por Google ©2010-2016. Código bajo licencia de [MIT-style License](https://github.com/angular.io/blob/master/LICENSE). Documentación licenciada bajo [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/).

[travis-badge]: https://travis-ci.org/angular/angular.io.svg?branch=master
[travis-badge-url]: https://travis-ci.org/angular/angular.io
