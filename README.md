# Projects template 

This template follows https://adrianhall.github.io/javascript/react/2020/03/29/parcel-typescript-react/

- Added [React](https://reactjs.org/) library for building components
- Added [Typescript](https://www.typescriptlang.org/) for type-checked scripting
- Added [SCSS](https://sass-lang.com/) for styling
- Added [Parcel](https://parceljs.org/) for asset bundling, don't need to power of [webpack](https://webpack.js.org/) for simple projects
- Added [ESLint](https://eslint.org/) for linting (I have the VSCode Prettier plugin so haven't added here though I should)
- Added [Storybook](https://storybook.js.org/) with addon (addon-actions) for demos
- Added [jest](https://jestjs.io/) test runner+assertion library and [react-testing-library](https://testing-library.com/docs/react-testing-library/intro) rendering engine for testing
- TODO add [bem](http://getbem.com/) for css naming

<br/>

**Why build template from ground up and not just use `create-react-app`?**
- We can’t alter the tsconfig.json except in some non-important ways.
- It uses webpack underneath, and cannot change.
- It uses jest and testing-library. Difficult to change.

<br/>

**Linting rules** <br/>
This linting config has been inspired mainly by the rules used at AirNZ. Still a WIP as more complex projects are built with this template. <br/>
Feel free to modify with your needs. Just change the "rules" in `eslintrc.js` or change the base rules it "extends" in the same file.

<br/>

## Deployment

This project should be generic enough to setup on any web host. So far tested with:


### GitHub Pages
To build all dist assests in gh-pages branch, keeping master with source code only:

1. 
```
git checkout --orphan gh-pages
git rm -rf .
git commit --allow-empty -m "Init empty branch"
git push origin gh-pages
git checkout master
git worktree add dist gh-pages
```

2. On GitHub go into Settings -> GitHub Pages -> Select 'gh-pages' as the source.

3. Run `yarn build` and `yarn deploy` to publish the app.

<br/>


## Resources / Notes

- https://medium.com/linagora-engineering/deploying-your-js-app-to-github-pages-the-easy-way-or-not-1ef8c48424b7
- https://stackoverflow.com/questions/39707402/why-does-git-worktree-add-create-a-branch-and-can-i-delete-it

- A test runner allows you to run the tests and report on the results.
- An assertion library allows you to decide if the test is successful or not.
- A rendering engine renders your components into a DOM so you can test them.
