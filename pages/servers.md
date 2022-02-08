# Server

## Server
Now this is probably the holy grail people are looking for. We want to say `ABSOLUTELY!!!!`, but no.

The whole summary will be about Introduction to NodeJS. So, please, lower your expectation, and get right into it. It won't be the most grandeur, but this will be the general idea, on how, and why NodeJS `CAN`.

## How to?
Node.js ships with the http module. This module is an abstraction around OS level networking tools. For Node.js, the http module would be considered "low level". For example on how to create (the hard way. You won't be use it anyway, but it's always good for us to know how we implemented it in the module that actually came with Node itself)[(1)](https://intro-to-nodejs-v2-site.vercel.app/lesson/10-servers).

But on this [example](./../playgrounds/example.js) [(2)][https://intro-to-nodejs-v2-site.vercel.app/lesson/10-servers], if we compare it to the one with http module, you can see, how much it's actually much more readable. Not only that, but it's also way more simple (even though our example here is pretty much an easy example) this way. Again, readability uplifted. 

You can see that we have 2 endpoints from this, `/hello`, that if we read it, it simply return a string, while the other endpoint `/parrot` is simply taking the request, and spit it out in the response. Pretty simple, yet so neat, compared on how we should do it if we use `http` module.