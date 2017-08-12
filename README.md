## Website Performance Optimization portfolio project

You can visit the Website online at [here](https://lynnlululu.github.io/frontend-nanodegree-mobile-portfolio/dist/index.html).

The some of the code have been compressed, so the final distribution file is all in the 'dist' file, while the source code is all in the 'src' file.

So you can see the final result online or distribution the 'dist' file by yourself. And check the resource code in the 'src' file.

### What I was done to optimize the Websit

#### About the **index.html**

For the Block Rendering CSS
I inlined the initial **print.css** in the **index.html**, used '@media quary' for the **print.css**, and load the Google Font asynchronously by using the js code form [here](https://www.lockedowndesign.com/load-google-fonts-asynchronously-for-page-speed/)

To reduce the bytes of the web
I downloaded all the images used in the index and compressed them.
And compressed the index.html and perfmatters.js.

#### About the **views/pizza.html**

I compressed the head pic in the page a little bit.
and changed some of the functions in the **js/main.js** file.

I rewrited the 'changePizzaSizes(size)' funtion in the same way as in the class to let the pizza resize time less than 5ms;

and rewrited the 'updatePositions() ' function a little bit to improve the FPS when scolling.

Finnally I changed some of the '.querySelector()' into 'getElementById()', and some of the '.querySelectorAll' into 'getElementByClassName' to increase the  FPS when more quickly.

### The problem I came through

The grunt task seems not working. I've used some of the online tools to compressed some of my files. 

But the gruntfile I write I don't know why it doesn't work when I put more than one task in it. 