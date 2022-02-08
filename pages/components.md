# Basic Components

## Globals
As it says. The globals is any variable or object that you can access, globally. We won't talk in details, but you probably got the point. You can also refer to this [page](https://nodejs.org/api/globals.html) for any available globals object or variable that we can use in development. 

## Modules
What is modules? Module is like a bunch of code that can be re-use on any of other code. In an explicit example, you might see something like `from awesome_package import awesome_method` or `import fabs_package`. Those are the examples of using modules. Modules can be a single file, or even a structured directory with complex inner modules in it. One example that we can try is by using a module that "built-in" in Node, like crypto. Crypto is the module you're looking for, for doing any action like hashing, hash compare, encode, decode, etc. 

## File Systems
Until now, there aren't many easy, or should we say, humanly way to deal with file system. But now, with node, there is this package `fs` that came pre-installed with Node. You can visit this [page here](https://nodejs.org/api/fs.html) for the full documentations of `fs` module.