# Testing

> [!NOTE]  
> Return back to the [README.md](README.md) file.

## Code Validation

### HTML

I have used the recommended [HTML W3C Validator](https://validator.w3.org) to validate all of my HTML files.

| Directory | File            | Screenshot                                                        | Notes     |
| --------- | --------------- | ----------------------------------------------------------------- | --------- |
|           | end.html        | ![screenshot](documentation/validation/end-validation.png)        | No errors |
|           | game.html       | ![screenshot](documentation/validation/game-validation.png)       | No errors |
|           | highscores.html | ![screenshot](documentation/validation/highscores-validation.png) | No errors |
|           | index.html      | ![screenshot](documentation/validation/index-validation.png)      | No errors |

### CSS

I have used the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate all of my CSS files.

| Directory | File      | Screenshot                                                 | Notes     |
| --------- | --------- | ---------------------------------------------------------- | --------- |
| assets    | style.css | ![screenshot](documentation/validation/css-validation.png) | No errors |

### JavaScript

I have used the recommended [JShint Validator](https://jshint.com) to validate all of my JS files.

| Directory | File          | Screenshot                                                     | Notes |
| --------- | ------------- | -------------------------------------------------------------- | ----- |
| assets    | category.js   | ![screenshot](documentation/validation/path-to-screenshot.png) |       |
| assets    | end.js        | ![screenshot](documentation/validation/path-to-screenshot.png) |       |
| assets    | highscores.js | ![screenshot](documentation/validation/path-to-screenshot.png) |       |
| assets    | questions.js  | ![screenshot](documentation/validation/path-to-screenshot.png) |       |
| assets    | script.js     | ![screenshot](documentation/validation/path-to-screenshot.png) |       |

## Browser Compatibility

I've tested my deployed project on multiple browsers to check for compatibility issues.

| Browser | Home                                                   | About                                                  | Contact                                               | etc                                                          | Notes             |
| ------- | ------------------------------------------------------ | ------------------------------------------------------ | ----------------------------------------------------- | ------------------------------------------------------------ | ----------------- |
| Chrome  | ![screenshot](documentation/browsers/chrome-home.png)  | ![screenshot](documentation/browsers/chrome-game.png)  | ![screenshot](documentation/browsers/chrome-end.png)  | ![screenshot](documentation/browsers/chrome-highscores.png)  | Works as expected |
| Firefox | ![screenshot](documentation/browsers/mozilla-home.png) | ![screenshot](documentation/browsers/mozilla-game.png) | ![screenshot](documentation/browsers/mozilla-end.png) | ![screenshot](documentation/browsers/mozilla-highscores.png) | Works as expected |
| Edge    | ![screenshot](documentation/browsers/edge-home.png)    | ![screenshot](documentation/browsers/edge-game.png)    | ![screenshot](documentation/browsers/edge-end.png)    | ![screenshot](documentation/browsers/edge-highscores.png)    | Works as expected |
| Opera   | ![screenshot](documentation/browsers/opera-home.png)   | ![screenshot](documentation/browsers/opera-game.png)   | ![screenshot](documentation/browsers/opera-end.png)   | ![screenshot](documentation/browsers/opera-highscores.png)   | Works as expected |

## Responsiveness

I've tested my deployed project on multiple devices to check for responsiveness issues.

| Device            | Home                                                          | About                                                         | Contact                                                      | etc                                                                | Notes             |
| ----------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------------ | ----------------- |
| Mobile (DevTools) | ![screenshot](documentation/responsiveness/mobile-home.png)   | ![screenshot](documentation/responsiveness/mobile-game.png)   | ![screenshot](documentation/responsiveness/mobile-end.png)   | ![screenshot](documentation/responsiveness/mobile-highscore.png)   | Works as expected |
| Tablet (DevTools) | ![screenshot](documentation/responsiveness/tablet-home.png)   | ![screenshot](documentation/responsiveness/tablet-game.png)   | ![screenshot](documentation/responsiveness/tablet-end.png)   | ![screenshot](documentation/responsiveness/tablet-highscore.png)   | Works as expected |
| Desktop           | ![screenshot](documentation/responsiveness/dekstop-home.png)  | ![screenshot](documentation/responsiveness/dekstop-game.png)  | ![screenshot](documentation/responsiveness/dekstop-end.png)  | ![screenshot](documentation/responsiveness/dekstop-highscore.png)  | Works as expected |
| iPhone 13         | ![screenshot](documentation/responsiveness/iphone13-home.png) | ![screenshot](documentation/responsiveness/iphone13-game.png) | ![screenshot](documentation/responsiveness/iphone13-end.png) | ![screenshot](documentation/responsiveness/iphone13-highscore.png) | Minor issue       |

## Lighthouse Audit

I've tested my deployed project using the Lighthouse Audit tool to check for any major issues.

| Page            | Mobile                                                        | Desktop                                                        | Notes               |
| --------------- | ------------------------------------------------------------- | -------------------------------------------------------------- | ------------------- |
| Home page       | ![screenshot](documentation/lighthouse/mobile-home.png)       | ![screenshot](documentation/lighthouse/dekstop-home.png)       | Some minor warnings |
| Game page       | ![screenshot](documentation/lighthouse/mobile-game.png)       | ![screenshot](documentation/lighthouse/dekstop-game.png)       | Works good          |
| End page        | ![screenshot](documentation/lighthouse/mobile-end.png)        | ![screenshot](documentation/lighthouse/dekstop-end.png)        | Works good          |
| Highscores page | ![screenshot](documentation/lighthouse/mobile-highscores.png) | ![screenshot](documentation/lighthouse/dekstop-highscores.png) | Works good          |

## Defensive Programming

Defensive programming was manually tested with the below user acceptance testing:

| Page | Expectation | Test | Result | Fix | Screenshot |
| ---- | ----------- | ---- | ------ | --- | ---------- |

| Home | | | | | |
| | Start game button is expected to start the game when the user click on it | Tested the feature by clicking the button. | The feature behaved as expected, and it did start the game | Test concluded and passed | ![screenshot](documentation/features-testing/feature1.png) |
| | Select category is expected to allow the user to select category when the user click on it | Tested the feature by clicking on it. | The feature behaved as expected, and it did change category. | Test concluded and passed | ![screenshot](documentation/features-testing/feature2.png) |
| | High scores button is expected to redirect the user to the high scores page. | Tested the feature by doing clicking on it. | The feature behaved as expected, and it did redirect me to the high scores page. | Test concluded and passed | ![screenshot](documentation/features-testing/feature00.png) |
| Game | | | | | |
| | Clicking on the right answer is expected to change the color to green when clicked | Tested the feature by choosing the right answer| The feature behaved as expected, and it did turn green | Test concluded and passed | ![screenshot](documentation/features-testing/feature3.png) |
| | Clicking on the wrong answer is expected to change the color to red when clicked | Tested the feature by choosing the wrong answer | The feature behaved as expected, and it did turn red | Test concluded and passed| ![screenshot](documentation/features-testing/feature4.png) |
| | Clicking on the restart button is expected to restart the game when clicked | Tested the feature by clicking on it| The feature behaved as expected, and it did restart the game | Test concluded and passed | ![screenshot](documentation/features-testing/feature5.png) |
| | Clicking on the home button is expected to redirect the user to the home page | Tested the feature by choosing clicking on it | The feature behaved as expected, and it redirected me to the home page | Test concluded and passed | ![screenshot](documentation/features-testing/feature6.png) |
| | Score should increment by 10 on every guessed question| Tested the feature by choosing the right answer on every question | The feature behaved as expected, and it did increment my score by 10 for each question that I have guessed | Test concluded and passed | ![screenshot](documentation/features-testing/feature8.png) |
| | 10 second Timer | Tested the feature by waiting for the whole 10 seconds to pass to check if it would redirect me to the next question| The feature behaved as expected, and it did redirect me | Test concluded and passed | ![screenshot](documentation/features-testing/feature7.png) |
| End | | | | | |
| | Showing the right end score | Tested the feature by playing the game | The feature behaved as expected, and it show my accurate score | Test concluded and passed | ![screenshot](documentation/features-testing/feature9.png) |
| | Message depending on the end score | Tested the feature by getting different score | The feature behaved as expected, and it change the message depending on score | Test concluded and passed| ![screenshot](documentation/features-testing/feature10.png) |
| | Enter username to save your score | Tested the feature by entering my name | The feature behaved as expected, and it save my score | Test concluded and passed | ![screenshot](documentation/features-testing/feature11.png) |
| | Not letting the user to click on the save button if there is no name entered | Tested the feature by leaving the username empty| The feature behaved as expected, and it didnt let me to click save | Test concluded and passed | ![screenshot](documentation/features-testing/feature16.png) |
| |Restart button is expected to restart the game when clicked | Tested the feature by clicking on it | The feature behaved as expected, and it did reset the game | Test concluded and passed | ![screenshot](documentation/features-testing/feature12.png) |
| | Go home button is expected to redirect the user to the home page | Tested the feature by licking on it| The feature behaved as expected, and it did redirect me to the home page| Test concluded and passed | ![screenshot](documentation/features-testing/feature13.png) |
| High scores | | | | | |
| | High score chart showing top 5 high scores | Tested the feature by playing the game and getting different scores and saving them | The feature behaved as expected, and it show my accurate score and position on the chart | Test concluded and passed | ![screenshot](documentation/features-testing/feature14.png) |
| | Go home button redirecting to the home page | Tested the feature by clicking on it| The feature behaved as expected, and it did redirect me to the home page.| Test concluded and passed | ![screenshot](documentation/features-testing/feature15.png) |
