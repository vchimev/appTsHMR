/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

import * as application from 'application';


if(module["hot"]) {
    module["hot"].accept(["../node_modules/nativescript-dev-webpack/load-application-css-regular.js"], () => {
        console.log("--->>> app.css accepted");

    })

}

application.run({ moduleName: 'app-root' });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
