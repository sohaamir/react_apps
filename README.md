# Creating a React app snake game and hosting it on GitHub Pages

[![Lets' Play!](https://img.shields.io/badge/Let's-Play!-red?style=flat&logo=react)](https://sohaamir.github.io/neon_snake/)

This is a repository for a simple snake game created in [React](https://react.dev/) hosted online using [GitHub Pages](https://pages.github.com/).

<div align="center">
  <img src="https://github.com/sohaamir/neon_snake/blob/gh-pages/game.gif" width="70%">
</div>
<br>

Detailed instructions on:

- setting up the React app folder
- creating your app using `node` and `npm`
- initializing the repository using `git`
- and deploying the app to GitHub Pages

can be found [here:](https://github.com/gitname/react-gh-pages)

This README contains instructions on making changes to the game, and then re-deploying the app to GitHub Pages.

## Instructions on making and deploying changes to the game 

1. Remove node_modules from `gh-pages`, then add, commit and push these changes.

   ```bash
   rm -rf node_modules
   git add . 
   git commit -m "Removed node modules"
   git push
   ```

2. Switch to `main` and install/start `npm`.

   ```bash
   git checkout main
   npm install
   npm start
   ```
   
3. Make relevant changes to the app.

4. Deploy these changes to `gh-pages`.

   ```bash
   npm run deploy -- -m "Deploy React app to GitHub Pages"
   ```
   
## The game (How it works)

The snake game is rather simple, and isn't too dissimilar from a regular snake game. The only major difference (apart from the slick neon theme) is the speed increase when the player gets a point. 

```javascript
useEffect(() => {
  if (isGameStarted) {
    const interval = setInterval(() => {
      if (!gameOver) {
        updateSnake();
        setTimer(timer + 0.1);
      }
    }, 100 / (1 + score * 0.1)); // Speed calculation
    return () => clearInterval(interval);
  }
}, [snake, food, direction, gameOver, isGameStarted, score, timer]);
```

This increase is relative to the score. For example, the percentage increase from 0-5 points is calcuated as:

Score 0 to 1:
<br>
<p align="center">
  $Percentage Increase=\left(\frac{\left(100-91\right)}{100}\right)\times 100=\left(\frac{9}{100}\right)\times 100=9%$
</p>

Score 1 to 2: 
<br>
<p align="center">
  $Percentage Increase=\left(\frac{\left(91-83.33\right)}{91}\right)\times 100=\left(\frac{7.67}{91}\right)\times 100\approx 8.43%$
</p>

Score 2 to 3: 
<br>
<p align="center">
  $Percentage Increase=\left(\frac{\left(83.33-76.92\right)}{83.33}\right)\times 100=\left(\frac{6.41}{83.33}\right)\times 100\approx 7.69%$
</p>

Score 3 to 4: 
<br>
<p align="center">
  $Percentage Increase=\left(\frac{\left(76.92-71.43\right)}{76.92}\right)\times 100=\left(\frac{5.49}{76.92}\right)\times 100\approx 7.14%$
</p>

Score 4 to 5: 
<br>
<p align="center">
  $Percentage Increase=\left(\frac{\left(71.43-66.67\right)}{71.43}\right)\times 100=\left(\frac{4.76}{71.43}\right)\times 100\approx 6.67%$
</p>

This purposely makes the game exponentially more difficult! 

My high score is ~~19~~ 21.

Credit to [Pixel Jeff](https://www.behance.net/pixeljeff) for the amazing wallpaper!
