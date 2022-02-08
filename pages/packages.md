# Packages

## NPM
If there's something almost feels like a brand to Node, is probably NPM. NPM, as it named, Node Package Manager is basically what APT to Ubuntu in Node. Not the most apple to apple comparison, but you got the point. NPM is where every currated modules from developers that can be use, by `other developers` for their development process.

As you may know, NPM is usually included when we install Node for the first time. Note that it might be different if we ever install Node from source. But, in very general way, for common users, and if you followed the installation recommendation in the previous sections, you'll most likely will have npm installed.

As on how to check if it's actually installed, simply run `npm --version`. If it's installed, it will likely print out the version in your terminal, and will prompt an error if it hasn't

## NPM, but the commands
So we are ready to develop things and we're already google some packages we need to ease our development process. Like what we mentioned earlier, we can utilize NPM to install these needed packages. 

There are of course, happen to be a lot of command out there, waiting for us to utilize them in our project. You can also check those [here](https://docs.npmjs.com/cli/v6/commands). 

The most common command to install package is by using the command `npm install <package name>`. This is by far, the most common command we will use, every day if we ever about to develop our projects. 

The next most common command would be the opposite of install, the `npm uninstall <package name>`. Like what it stated, it will remove package from your project. 

And one of the most important one out there (probably, teehee) is the `npm test`. This is the holy command that will run your test script, either it is a vanilla test, or jest(we will later explain these in the next section, stay tuned~)