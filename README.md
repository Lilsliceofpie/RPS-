# Rock Paper Scissors
Rock Paper Scissors is an interactive webpage-game based off the popular real-life game of the same name, usually played between two people, in which each player simultaneously forms one of three shapes with an outstretched hand. The site is targeted towards people who want to kill some time playing rock, paper, scissors against the computer.

## Rules
Each of the three choices beats one of the other two, and loses to the other. Rock beats scissors, scissors beats paper, paper beats rock.

![](assets/screenshots/Screenshot%20(42).png)

## Features

- __The Rock Paper Scissors Logo and Heading__

  - Featured at the top of the page, the Rock Paper Scissors logo and heading is easy to see for the user. Upon viewing the page, the user will be able to see the name of the game.

- __The Game Area__
  - This section shows two question mark placeholders, one for the players choice and one for the computers.
  - once users make their choice the question mark is replaced by a larger version of the icon buttons.
  - the result of each match (Victory, Defeat, or Draw) is displayed in the centre of the screen.

- __The Control Area__

  - This section will allow the user to play the game. The user will be able to easily see icons for Rock, Paper, and Scissors, along with a call to action to "Choose your fighter!".
  - The user will be able to select their choice by clicking on the different icons. 
  - Hovering over each icon will give users feedback by increasing in size and changing the mouse cursor to a pointer to indicate a clickable object.

- __The Score Area__

  - This section will allow the user to see exactly how many matches they have won, and how many times the computer has beaten them. 

- __The Footer/Rule Area__

  - The foot of the page displays the rules of the game to the user.

## Testing
- I tested that the site works in different browsers: chrome, Internet explorer, DuckDuckGo.
- I confimed that the site is responsive and functions on all standard screen sizes using Dev. tools.
- I confirmed that all sections of the site are readable and easy to understand.
- I confirmed that the functions to automate the computers choice and tally the score work as intended.

## Bugs
- Initially the placeholder question marks were displaying below their containing divs, setting their margin to 0 in CSS fixed the issue.

## Validator testing
- HTML: No errors were returned when passed through the official W3C validator.
- CSS: No errors were returned when passed through the official (jigsaw) validator.
- Javascript: No errors were returned when passed through the JSHint JavaScript Validator
- Accessibility: Confirmed that colours and fonts chosen are easy to read and accessible by running it through lighthouse in Dev. tools.

![](assets/screenshots/Screenshot%20(35).png)
![](assets/screenshots/Screenshot%20(36).png)
![](assets/screenshots/Screenshot%20(37).png)
![](assets/screenshots/Screenshot%20(38).png)

## Deployment
- The site was deployed to GitHub pages. The live link can be found here
__-https://lilsliceofpie.github.io/RPS-/__
## Credits
- Some of the code to add event listeners, and for the function "computersTurn" in the index.js file was taken from a youtube video by the channel "Bro Code". Here is a link to the video 
__-https://youtu.be/n1_vHArDBRA__