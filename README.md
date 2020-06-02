# Simple Lite JS Loader
> A lite JS loader css based for webpages and applications

![Screenshot](https://github.com/LizzardMedeiros/lite-loaderjs/blob/master/examples/ex.png?raw=true)

## Features
  - Start and stop method
  - Customize wheel color

## Use
  Import script in your webpage or application

    ```
      import startLoader from 'index.js';
    ...

    ```

  Initialize the component after all DOM loaded
  
    ```
    window.onload = function () {
      const loader = startLoader();
      loader.init();
      ...

    ```

  Set wheel color preference

    ```
    loader.setColor('#55F233', 'red');
    ...

    ```

  Call start() or stop() methods to use the component

    ```
    loader.start();
    setTimeout(() => loader.stop(), 5000);

    ```

Feel free to share!!!
