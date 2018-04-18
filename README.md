
# gifs-viewer
Gif viewer using GIPHY API, shows trending gifs, allows to add to favorite ones and is able to do searches.

## Installation
In the examples I use yarn, but you can use the npm equivalent commands whitch are no tested.

```sh
# Clone the repository
git clone https://github.com/Muramasah/gifs-viewer.git

# Move to a the project directory.
cd gifs-viewer/

# Install serve.
yarn add serve

# Start production server
# If you have an error try compiling your own build
# with the devlopment commands to build a new production version
yarn serve -s build

#DEVELOPMENT COMMANDS

#Install dependencies
yarn

#Generate production build
yarn build

#Run development server
yarn start

#Run test
yarn test

#Run code coverage
yarn coverage

```

## Main Dependencies
See package.json file to see all the dependencies used. This project was built over and ejected react-create-app template. 

-   react: Required by specs, library for building user interfaces.
-   styled-components: Library to add styles using css and sass features to the componentes.
-   giphy-js-sdk-core: Wrapper around the GIPHY API.
-   jest: Unit test processor.