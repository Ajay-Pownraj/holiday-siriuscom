#

-[live Demo](https://ajaypownraj-holiday.netlify.app/)

# How To Use

- Clone this repository (or fork, then clone your fork :) )
- Run `npm i`
- Check it out using `npm start`

# How to Deploy

- Once you are done with your setup and have successfully completed all steps above, you need to put your website online!
- I highly recommend using [Github Pages](https://create-react-app.dev/docs/deployment/#github-pages) to achieve this the EASIEST WAY.
- To deploy your website, you have two options. First you need to create a github repository with the name `<your-github-username>.github.io`. Please don't give it any other name.
- Now, you need to generate a production build and deploy the website.

**Option 1:**

- Run `npm run build` to generate the production build folder.
- Enter the build folder, `git init` and push the generated code to the `master` branch of your new repository. That's it. Done.
  You may need to `git init` and force push at every new build.

**Option 2 (will not work with [user pages](https://docs.github.com/en/github/working-with-github-pages/about-github-pages)):**

- Run `npm run deploy` to build and create a branch called `gh-pages`. It will push the `build` files to that branch.
- The last step in deploying is to enable `Github Pages` in settings of the repository and select `gh-pages` branch.

Now, your website is successfully deployed and you can visit it at `<your-github-username>.github.io`.

# Technologies used 🛠️

- [React](https://reactjs.org/)
- [axios](https://www.npmjs.com/package/axios)
- [react-countdown](https://www.npmjs.com/package/react-countdown)
- [react-router-dom](https://www.npmjs.com/package/react-router-dom)
- [react-router-hash-link](https://www.npmjs.com/package/react-router-hash-link)
- [react-spinners](https://www.npmjs.com/package/react-spinners)
