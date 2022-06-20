# __Merlin's Beard!__

## Code Institute Milestone Project 2

<a href = "https://lunarwriter.github.io/IFE-MS-2/" rel="nofollow"> View the live project here</a>

This is the website for Merlin's Beard! A fun interactive memory game for those who are fervent Harry Potter enthousiasts and are familiar with the wand movements.
Each time a player starts the game, the timer starts and their moves are counted. The player can restart the game to improve their scores! The memory game board will automatically shuffle cards for the players when a new game starts.

<br>

<h2 align="center">
<img src="docs/screenshots/homescreen.png" alt="homepage" style="max-width:100%;">
</h2>

<br>

## User Experience (UX)

* ### User Stories

    * __Player Goals__

        1. As a Player, I want to be able to understand immediately what kind of game I will play.
        2. As a Player, I want to know how many moves and how long I played before finishing the game.
        3. As a Player, I want to be able to play the game again.

* ### Design

    * __Colour Scheme__

        * The main colours used are hues of brown, orange and beige.

    * __Typography__

        * The main font used for this game is Playfair Display. This font has a distinctive and somewhat aged air which is very suited for the theme of the game.

<br>

## Features

__Existing Features__

* __Home Screen__

    * The user is immediately faced with a homescreen consisting of a title, the memory cards and the timer and move counter. The game starts once the player starts clicking on the cards.


<br>

 __Possible Future Features__

* The game can be improved by adding some more memory cards, making the game a little more difficult for the user by adding more moves and more time for playing.
* A feature for checking if the user really wants to restart the game can be added as well. The timer can be paused temporarily until the user has submitted their answer. The game can either be restarted or continued where the user left off.

<br>

## Wireframes

* [Home Page](https://github.com/lunarwriter/IFE-MS-2/blob/master/docs/wireframes/home-wireframe.png "homepage wireframe")
* [Mobile Wireframe](https://github.com/lunarwriter/IFE-MS-2/blob/master/docs/wireframes/mobile-wireframe.png "mobile wireframe")

<br>

##  Technologies Used

### Languages Used

* [HTML5](http://en.wikipedia.org/wiki/html5 "HTML5")
* [CSS3](http://en.wikipedia.org/wiki/css3 "CSS3")
* [JavaScript](https://en.wikipedia.org/wiki/JavaScript "JavaScript")

<br>

### Frameworks, Libraries and Programs Used
1. [Bootstrap 4.3:](https://getbootstrap.com/docs/4.3/getting-started-introduction/ "Bootstrap4.3")
    * Bootstrap was used to assist with responsiveness and styling of the website.
2. [Google Fonts:](http://fonts.google.com/ "GoogleFonts")
    * Google Fonts were used to import the "Playfair Display" font into the style.css file. The font is used for all text in the game.
3. [Font Awesome:](http://fontawesome.com/ "Fontawesome")
    * Font Awesome was used to implement the repeat button on the top right corner for the game.
4. [jQuery:](http://jquery.com/ "jQuery")
    * jQuery came with Bootstrap to make sure the memory game was responsive to the moves counter and timer.
5. [Git:](http://git-scm.com/ "Git")
    * Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
6. [GitHub:](http://github.com/ "GitHub")
    * GitHub is used to store the projects code after being pushed from Git.
7. [Mockplus:](https://www.mockplus.com/ "Mockplus")
    * Mockplus was used to create the wireframes for the website.

<br>

## Known Bugs

* In the game when a user starts the game, the timer does not start for the first click. It will start on the second click.
* When a user finished the game, if the user clicks on the cards, the moves counter will keep counting until the user has clicked on the restart button.

<br>

## Fixed Bugs

* When opening the link for the game, the background for the body would not load and the user would have a white background. This is fixed now and the user will see a background with brown and yellow hues.

<br>

## Deployment

__Running the website from GitPod__

1.	Log in to GitHub and locate the GitHub [Repository](https://github.com/lunarwriter/IFE-MS-2/ "github pages repository")
2.	On the right of the Repository name, click on the green “GitPod” button.
3.	Log in to GitPod and open the workspace with the same name as the repository.
4.	In the second column from the left, select the file to open the project.
5.	In the terminal (below the console), type: `python3 -m http.server`
6.	A popup will appear for action on port 8000. Click on the blue button for “Make Public”.
7.	Click on the second blue button “Open Browser” to open a preview of the website.

<br>

__GitHub Pages__

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the GitHub [Repository](https://github.com/lunarwriter/IFE-MS-2/ "github pages repository")
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu. 
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [link](https://lunarwriter.github.io/IFE-MS-2 "live project") in the "GitHub Pages" section.


## Credits

__Code__

* Code structure taken from [this link](https://www.youtube.com/watch?v=ZniVgo8U7ek  "YouTube") for the basic structure of the memory game.

* Code structure for the timer and the move counter taken from [this link](https://stackoverflow.com/questions/69936780/how-to-stop-the-time-automatically-when-all-cards-are-flipped-in-memory-game-usi "StackOverflow")


* [Bootstrap 4.3:](https://getbootstrap.com/docs/4.3/getting-started/introduction/ "Bootstrap4.3") Bootstrap was used to make the site responsive using the Grid, Form, Navbar and Cards components, as well as making the button elements interactive.
* [GitHub](https://github.com/etjossem/country-codes-html/blob/master/_country_codes.html "Bootstrap4.3")
This page was used to create the dropdown menu for the country codes in the Contact Page form.
This way, users can select their countries and insert their respective phone numbers.

<br>

__Content__

* The text for the user reviews was taken from [Eatsleepwander](https://eatsleepwander.com/gym-review-example/ "user review text credits")
* The text and class names for the Classes page was taken from [Fitness365](https://fitness365.nl/locaties/amsterdam/groepslessen/ "classes page credits") translated from Dutch
* ReadMe structure and general content taken from [this sample](https://github.com/Code-Institute-Solutions/SampleREADME#user-experience-ux "readme1 credits") and [this sample](https://github.com/Code-Institute-Solutions/readme-template "readme2 credits")

<br>

__Media__

* The hero image and the user review images were taken from [Pexels](https://pexels.com/ "pexels credits")
* The images for the classes were taken from [Unsplash](https://unsplash.com/s/photos/ "unsplash credits")


<br>



* Backface image on the memory cards taken from [Pexels](https://www.pexels.com/photo/light-nature-bird-night-7978823/ "backface image credits")

* Front face images on the memory cards taken from [Pinterest](https://nl.pinterest.com/pin/824792119237101317/ "front face image credits")

* ReadMe structure and general content taken from [this sample](https://github.com/Code-Institute-Solutions/SampleREADME#user-experience-ux "readme1 credits") and [this sample](https://github.com/Code-Institute-Solutions/readme-template "readme2 credits")

