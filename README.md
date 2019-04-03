# AngularCli14060

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.0.

This is a test case for bug <https://github.com/angular/angular-cli/issues/14060>

To reproduce:

1. Clone this repository
1. Run `npm install`
1. Install Angular CLI globally if needed
1. Run `ng build --configuration=bug` from the terminal and wait for it to build
1. Generate a new module using `ng g m -m --routing AppA`
1. Open `src/app/genapps-lazy/genapps-lazy.module.ts` in an editor
1. Un-comment the line for module `AppAModule` and save
1. Wait for the build to generate the chunk for app A
1. In `src/app/genapps-lazy/genapps-lazy.module.ts` comment `AppAModule` again and save
1. Delete `src/app/app-a/` from the file system (on linux or MacOSX: `rm -rf src/app/app-a/`)
1. Error should come up in the source:
    ```
    ERROR in ./src/app/app-a/app-a.module.ngfactory.js
    Module build failed (from ./node_modules/@ngtools/webpack/src/index.js):
    Error: ENOENT: no such file or directory, open '/Users/andrew/development/bugs/angularCli14060/src/app/app-a/app-a.module.ngfactory.js'
        at Object.openSync (fs.js:436:3)
        at Object.readFileSync (fs.js:341:35)
        at Storage.provideSync (/Users/andrew/development/bugs/angularCli14060/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:98:13)
        at CachedInputFileSystem.readFileSync (/Users/andrew/development/bugs/angularCli14060/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:259:32)
        at Observable.rxjs_1.Observable.obs [as _subscribe] (/Users/andrew/development/bugs/angularCli14060/node_modules/@ngtools/webpack/src/webpack-input-host.js:35:51)
        at Observable._trySubscribe (/Users/andrew/development/bugs/angularCli14060/node_modules/rxjs/internal/Observable.js:44:25)
        at Observable.subscribe (/Users/andrew/development/bugs/angularCli14060/node_modules/rxjs/internal/Observable.js:30:22)
        at SyncDelegateHost._doSyncCall (/Users/andrew/development/bugs/angularCli14060/node_modules/@angular-devkit/core/src/virtual-fs/host/sync.js:22:20)
        at SyncDelegateHost.read (/Users/andrew/development/bugs/angularCli14060/node_modules/@angular-devkit/core/src/virtual-fs/host/sync.js:49:21)
        at WebpackCompilerHost.readFileBuffer (/Users/andrew/development/bugs/angularCli14060/node_modules/@ngtools/webpack/src/compiler_host.js:125:44)
        at VirtualFileSystemDecorator.readFile (/Users/andrew/development/bugs/angularCli14060/node_modules/@ngtools/webpack/src/virtual_file_system_decorator.js:39:54)
        at processResource (/Users/andrew/development/bugs/angularCli14060/node_modules/loader-runner/lib/LoaderRunner.js:202:11)
        at iteratePitchingLoaders (/Users/andrew/development/bugs/angularCli14060/node_modules/loader-runner/lib/LoaderRunner.js:158:10)
        at iteratePitchingLoaders (/Users/andrew/development/bugs/angularCli14060/node_modules/loader-runner/lib/LoaderRunner.js:165:10)
        at /Users/andrew/development/bugs/angularCli14060/node_modules/loader-runner/lib/LoaderRunner.js:176:18
        at loadLoader (/Users/andrew/development/bugs/angularCli14060/node_modules/loader-runner/lib/loadLoader.js:47:3)
    ```
1. Create app B using `ng g m -m --routing AppB`
1. Open `src/app/genapps-lazy/genapps-lazy.module.ts` in an editor
1. Un-comment the line for module `AppBModule` and save. Same error, but also:
    ```
    ERROR in app/app-b/app-b.module.ts(10,5): Error during template compile of 'AppBModule'
      Could not resolve ./app-b-routing.module relative to [object Object]..
    ```
1. Restart the build, the errors go away

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
