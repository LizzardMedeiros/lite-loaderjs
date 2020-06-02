# Simple Lite JS Loader
> A lite JS loader css based for webpages and applications

![Screenshot](https://i.imgur.com/Lp4CklM.png)

## Features
  - Start and stop method
<<<<<<< HEAD
  - Customize colors, thickness and size
=======
  - Customize wheel color
>>>>>>> a979dd2f6b6c766a628d77a366beacda4d01a6d6
  - Responsive

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

<<<<<<< HEAD
  Set wheel preferences
=======
  Set wheel color preference
>>>>>>> a979dd2f6b6c766a628d77a366beacda4d01a6d6

    ```
    // Color [base, detail, background]
    loader.setColor('#55F233', 'red', '#842020E9');

    // Wheel Size
    loader.setSize('80px');

    // Thickness
    loader.setThickness('8px');
    ...

    ```

  Call start() or stop() methods to use the component

    ```
    loader.start();
    setTimeout(() => loader.stop(), 5000);

    ```

Feel free to share!!!
