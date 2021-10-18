
<h1 align="center">{My-Unsplash}</h1>

<div align="center">
   Solution for a challenge from  <a href="http://devchallenges.io" target="_blank">Devchallenges.io</a>.
</div>

<div align="center">
  <h3>
    <a href="https://my-unsplash-seven.vercel.app/}" target="_blank">
      Demo
    </a>
    <span> | </span>
    <a href="https://{https://github.com/iamxxx/my-unsplash}" target="_blank">
      Solution
    </a>
    <span> | </span>
    <a href="https://devchallenges.io/challenges/rYyhwJAxMfES5jNQ9YsP">
      Challenge
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Overview](#overview)
  - [Built With](#built-with)
- [Features](#features)
- [How to use](#how-to-use)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- OVERVIEW -->

## Overview

![screenshot](https://screenbud.com/s/adcODh7UDbe)

Introduce your projects by taking a screenshot or a gif. Try to tell visitors a story about your project by answering:


The demo to this project is hosted on vercel and can be reached [here]("https://my-unsplash-seven.vercel.app/")

The aim of this project is to replicate the masonry layout of unsplash and allow users to add and delete images. This project was built using next.js and the backend is powered by next.js server. To add an image to this app, users need to enter the URL to the image and a label describing the image. The url and label is then stored in a mongoDB database and the page is reloaded to show the newly added image at the top of the list.

This app also allows users to delete images from the list but i added a password that needs to be provided before deletion is authorized.

The intriguing part for me was creating the masonry layout and making it responsive. i researched the unsplash website and got an idea about it. I created 3 grid columns which changes depending on the browsers viewport. 1 for viewports less than 480px, 2 for viewports less than 980px and greater than 480px and 3 when it is greater than 980px.

### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

- [React](https://reactjs.org/)
- [mongodDB](https://mongodb.com/)
- [Scss](https://sass-lang.com/)

## Features

<!-- List the features of your application or follow the template. Don't share the figma file here :) -->

This application/site was created as a submission to a [DevChallenges](https://devchallenges.io/challenges) challenge. The [challenge](https://devchallenges.io/challenges/rYyhwJAxMfES5jNQ9YsP) was to build an application to complete the given user stories.

## How To Use

<!-- Example: -->

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/iamxxx777/my-unsplash

# Install dependencies
$ npm install

# Run the app
$ npm start
```

## Acknowledgements

<!-- This section should list any articles or add-ons/plugins that helps you to complete the project. This is optional but it will help you in the future. For example: -->

- [Steps to replicate a design with only HTML and CSS](https://devchallenges-blogs.web.app/how-to-replicate-design/)
- [Node.js](https://nodejs.org/)
- [Marked - a markdown parser](https://github.com/chjj/marked)

## Contact

- GitHub [@iamxxx777](https://github.com/iamxxx777)
- Twitter [@dayo_hope](https://twitter.com/dayo_hope)
