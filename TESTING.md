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
