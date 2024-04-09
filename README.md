# Creating a React app snake game and deploying it to GitHub Pages

<div align="center">
  <img src="https://github.com/sohaamir/neon_snake/blob/gh-pages/game.gif" width="70%">
</div>
<be>

Detailed instructions on how to set up the React app and it's deployment to GitHub Pages are found [here:](https://github.com/gitname/react-gh-pages)


## Instructions on making and deploying changes to the game 

1. Remove node_modules from gh-pages, add, commit and push 

   ```bash
   rm -rf node_modules
   git add . 
   git commit -m "Removed node modules"
   git push
   ```

2. Switch to main and install/start npm

   ```bash
   git checkout main
   npm install
   npm start
   ```

3. Make relevant changes to game 

4. Deploy to gh-pages

   ```bash
   npm run deploy -- -m "Deploy React app to GitHub Pages"
   ```

