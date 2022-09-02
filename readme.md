# README file for "My Pokemon Collection" Web Application

## My Pokemon Collection: Project Description

This project is a full-stack web application following RESTful routing developed using the MEN tech stack (MongoDB, Express, Node.js). This web application allows users to keep track of the Pokemon in their collection by searching and adding them to a repository. This project uses the PokeAPI (or Pokemon API) to provide the web application with a wealth of Pokemon data, including stats and sprite images. By calling on this pool of data, users can build up their Pokemon collection and rosters dynamically.

The motivators for this project was for me to gain familiarity with building full-stack web applications and using external APIs to get data. The user interface, particularly the page showing all collected Pokemon, was influenced by Pokemon Go and I attempted to recreate something like it. 

As for the subject matter, I have personally outgrown Pokemon for the most part, although it holds a special place in my heart as a franchise I enjoyed in my younger years, both as games and cartoon/anime. It should be noted that I have only completed playthroughs of the first 2 generations of games (Pokemon Red and Silver).


## Screenshots

![Login Page](https://i.imgur.com/M0GMRq8.png)

Upon loading the web application, the user will be required to login for the application to keep track of the user's data (Pokemon and Rosters information). This web app uses Google OAuth authentication.

![Trainer registration Page](https://i.imgur.com/b2lt5au.png)

First time users will be asked to enter some extra information, such as picking an avatar and a trainer name.

![Trainer Information Page](https://i.imgur.com/UEZXfIk.png)

Upon successful login, the user will be directed to a page showing some basic information about the user. The user may also change their trainer name here.

![Pokemon Information Page](https://i.imgur.com/AedXpHo.png)

Clicking "My Pokemon" on the navigation bar brings the user to a page that shows them all the pokemon they have collected. The user may also add pokemon by searching for the name or pokemon ID no. on the search bar at the top left.

![Adding a Pokemon](https://i.imgur.com/4gjG4EF.png)

The web application returns some data about the searched pokemon. The user may choose up to 4 moves for that particular pokemon. By clicking "Add Pokemon", the Pokemon will be added to the user's collection and the user will be brought back to their Pokemon collection page.

![Viewing Pokemon Details](https://i.imgur.com/E20ZSOp.png)

Details about particular Pokemon in the user's collection may be viewed by clicking on them in the Pokemon collection page. A page will render showing some information about that particular Pokemon. The user may also choose to rename their Pokemon or release it on this page.


## Technologies Used

### Tech Stack

* MEN-stack - MongoDB, Express, Node.js

> The project was developed in Javascript in the Node.js environment, using Express as middleware and MongoDB as the database.

### Web Hosting Tools

* MongoDB Atlas, Heroku

> The web application is hosted by Heroku, and online database is provided by MongoDB Atlas


## Getting Started

The web application is hosted at the link below:
https://my-pokemon-collection.herokuapp.com/

The link to the Github repository is listed here:
https://github.com/louischeung1990/Pokemon-Collector

Trello was used as a project planning and tracking tool. The link to the board used for this project can be found here:
https://trello.com/b/bW32CP3k/ga-project-2-pokemon-collection


## Next Steps

* User Interface

> Further work can be done to enhance the existing user interface. Fonts and input elements such as buttons are still plain in places. The choice of colours and use of graphics can be finetuned, with sufficient research into user experience.

* User Experience: Error Handling

> The existing code base can be improved in terms of error handling. Usually, failures are not catastrophic and the user will be redirected to the appropriate page. However, one issue stands out. In the event of the user submitting an invalid request to the Pokemon API, the web application will crash.

* User Experience: Responsive Design

> The app was made to be viewed on a desktop. Even so, there needs to be some responsive design built in, in particular the positions of the visual elements may shift unexpectedly with different screen sizes. In addition, the page showing the user's pokemon collection currently shows 6 pokemon per row, this number should be made variable to maximize the use of screen space.

* Feature: Adding Rosters

> One of the original intentions of this project was for the user to be able to construct rosters of up to 6 Pokemon with the Pokemon in the user's collection. Due to time constraints, the project was uploaded and submitted before this could be completed. This feature will be one of the highest priorities once more development time is available.

* Feature: Exploring the Full Depth of the Pokemon API

> The Pokemon API has a wealth of information about the Pokemon games and Pokemon. Further features can be built around the data that this API offers. For example, it is known within the competitive Pokemon battling scene that Pokemon stat growth can be influenced as the Pokemon levels up. Such information can be used to create even more detailed profiles of Pokemon, and data visualizations can be produced. 

* Feature: Tracking Performance of Rosters and PvP Results

> The competitive Pokemon battling audience may be interested in being to record the performance of their rosters in Player-vs-Player (PvP) battles, such as their win rates and performance against other users and rosters. 
