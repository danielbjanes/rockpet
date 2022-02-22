# Rock Pet Online

## SWEN - 356 - Trends in Software Development Process

### Team Members:
- Daniel Bjanes
- Miguel Rosario
- Xinyi Liu
- Sean Coyne
- Jack Li

### Rock Pet Online
Rock pet online is a gatewway to getting a new friend
in cyberspace! Spin, move, feed, walk and change the weight or color
of your rock in our application which utilizes Three JS.

Three JS is a cross-browser JS library used to display animated 3d graphics
using WebGL. The repository for Three JS can be found [here](https://github.com/mrdoob/three.js/).

### Functions implemented / Work Done (2/22/22)
1. Researching Three JS
2. Having an item display on screen
3. Having a `rock` display on the screen
4. Addition of a `customizable` background
5. Addition of a CI/CD pipeline through GitHub actions and pages
6. Having a way to change the `weight` of the rock
7. Spotlight and ambient lighting
8. Animating (rotating) the rock
9. Ability to rename your rock

### Running locally
You must be in the `src` directory before running the command
`npm run dev`

If you receive the error:
```bash
error when starting dev server:
Error: The following dependencies are imported but could not be resolved:

npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! src@0.0.0 dev: `vite`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the src@0.0.0 dev script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
...
```
Run: `npm install` and then `npm run dev` 

### How to deploy to GitHub Pages
1. Create a dist directory
2. Drag your index.html, css file, js files and images used for textures to the dist folder
3. Edit `package.json` and add `"deploy": "gh-pages -d dist"` under scripts.
4. Run `npm install gh=pages`
5. Run `npm run deploy`

You may have to edit the pathways for all of the files in the generated files in the dist directory. Since everything is statically rendered on GitHub Pages this will be required if you do not see any textures.

### Technologies Used
1. Three JS
2. Vite
3. npm

### Guides used / Followed / Referenced
1. Deploying Three JS applications to GitHub pages https://hackernoon.com/publishing-a-threejs-project-on-github-pages-1d1a33dn
2. Various functionalities from Three JS (Orbit controls, Lighting, Object creation) https://threejs.org/docs/ 
3. GUI for accessing functionality https://www.npmjs.com/package/lil-gui