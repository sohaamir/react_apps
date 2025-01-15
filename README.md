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
   
My high score is ~~19~~ 21.

Credit to [Pixel Jeff](https://www.behance.net/pixeljeff) for the amazing wallpaper!
