# Introduction

## What is?
Node.js is a runtime for built on top of Chrome's V8. The V8 is the engine that runs any project we're about to build in many cases. On a side note, V8 is the one that Google Chrome use. While other browser, like Firefox, Safari, or even Edge, has their own implementation of runtime. 

NodeJS allows you to develop apps in JavaScript outside of the browser. It's single threaded (and not single threaded. We will possibly explain this rather contradictary side note later. Stay tune~).

## How to install?
The easiest way would be directing you to [the official node](https://nodejs.org/en/). It just `take a coffee while waiting for downloads` thing. Of course, if you are on Unix-like environment, like Fedora, Ubuntu, etc, you can definitely refer to this page [here](https://nodejs.org/en/download/package-manager/) if you want to install Node via package manager like apt or rpm(RHEL). If you're on Mac, we do recommend you to install via the official nodeJS page mentioned earlier that detect what your system is running to.

## Let's run it~
The next thing we want to do is probably, like how we get to know on any other programming language or framework. 

But some things to note before we dive into it. If you ever work with JS before in front-end development, you'll notice that we can do pretty much, GUI-actions that involved `html tags`, or even `alert`. The reason for this is that, the engine that run (interpret the JS we develop) it on the browser, basically knows this (in short). But on the other hand, Node doesn't (understand) and `can't run` `html tags`, or even `alert` that involved in GUI rendering (this of course excluding any FE framework for that matters).

Like python, once we install it, you can just type `node` in your terminal, and it will show you REPL like how you type `python3` on your terminal and you can directly code into it. This is almost the same things opening console in your browser and directly code js in there. Pretty neat!

For this example, a holy `console.log("hello world")` should be sufficient for this kind of example. You can directly try it via `node` REPL in your terminal, or you can instead `node <path to your file.js>` to run it, just like how we do it in python. Again, neat~