---
layout: default
title: Group B - November 22 - Discord Bot Plan
date: 2021-11-21 00.00.00 -0400
categories: group-b
current_page: lessons
code_editor: false
---
# Group B - November 15 - Discord Bot Plan

Welcome to the third meeting of group B! In this meeting, we'll be discussing the plan for the upcoming Discord bot series.

## Today's Plan
- <h5><a href="#idea">Idea</a></h5>
- <h5><a href="#languages-and-frameworks">Languages and Frameworks</a></h5>
- <h5><a href="#baseline-features">Baseline features</a></h5>
- <h5><a href="#future-features">Future Features</a></h5>
- <h5><a href="#go-programming-language">Go Programming Language</a></h5>

## Idea

Over the next few weeks, we'll be creating a Discord bot in the programming language Go that will allow users to run code in Discord! It will take the code of the program and the input provided to the code, and will show the output of the program to the user.

## Languages and Frameworks

##### Languages
- Go
  - An object-oriented, compiled programming language that was developed by Google

##### Frameworks
- [DiscordGo](https://github.com/bwmarrin/discordgo)
  - Go bindings for Discord
  - Allows Discord bots to be created in Go
- [Piston Code Execution Engine](https://github.com/milindmadhukar/go-piston)
  - Piston allows untrusted programs to be run in isolation
  - We'll be using a Go wrapper to Piston
- [GORM](https://github.com/go-gorm/gorm)
  - An ORM for Go
  - An ORM (object-relational mapping), is a concept where you convert data between incompatible data types using obejcts
    - An example of incompatible data types is SQL queries and Go objects


## Future Features

Now that we've gone over the must-haves, let's discuss some nice-to-have features for our bot. 

##### Docker

<img src="/assets/img/group-b/lesson-6/docker.webp" alt="" class="post-img float-right">

First, what if we want to allow anyone to deploy this bot to their own computer or a server? Then they'd have to install Go and all of the frameworks we used. There also might be inconsistencies with the versions of the frameworks and languages used, and some versions may be incompatible with the user's operating system. There's numerous things that could go wrong if someone wanted to self-host this Discord bot, which is where Docker comes in. 

Docker is a containerization solution that allows you package your software in a way such that the users' operating systems and versions of frameworks are irrelevant. It uses virtualization and installs software in containers, then running those containers would run the software. A future feature that we could add is packaging the bot using Docker, to allow anyone to self-host the bot in a matter of a few commands.

##### User Accounts

Another feature that we could add to the bot would be a user accounts system. There are two approaches to how this could work. The first approach is: users would sign up with an email address and a password. Then. they would verify their account and log in. The second approach is, all data is associated to a certain Discord user, so there's no need for authentication, email address verification, sign ups, and log ins. With the second method, we are basically outsourcing our user authentication system to Discord.

Users, when logged in, could store handy scripts that they could run with a simple command. Users could also view their script run history to see every time they've run a piece of code all in one place.

##### Distributed Code Execution Network

<img src="/assets/img/group-b/lesson-6/distributed.png" alt="" class="post-img float-right">

Finally, a feature that we could consider adding in the future is a distributed code execution network. There are two reasons why adding a distributed code execution network could be worthwhile.

First, say our bot grows in popularity, and the code runner goes down very often. This would mean that there would be a complete halt on code running. If a distributed code execution system was added, if one of the servers that ran code went down, the other ones could be used.

Second, once again, say our bot grows in popularity, and we have users from all over the world using different Discord server locations. If we had code execution servers in different locations, we could route user code execution requests to the closest code execution server. This would allow for faster response times and mean that in case one of the servers went down, the next closest server could be used to route a user's request.
 
## Go Programming Language

Go is an open-source, compiled, object-oriented programming language developed by Google. [GitHub repository](https://github.com/golang/go){:target="_blank"}.

Since we'll be developing the Discord bot in Go, we wanted to go over a few good resources go learn Go.

##### Resources
- [Official website](https://golang.org/){:target="_blank"}
- [Codecademy Go course](https://www.codecademy.com/learn/learn-go){:target="_blank"}
- [Learn Go in y minutes](https://learnxinyminutes.com/docs/go/){:target="_blank"}
