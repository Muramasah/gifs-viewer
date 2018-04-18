
# gifs-viewer
Gif viewer using GIPHY API, shows trending gifs, allows to add to favorite ones and is able to do searches.

## Installation
```sh
# Clone the repository
git clone https://github.com/Muramasah/gifs-viewer.git

# Move to a the project directory.
cd gifs-viewer/

# Install serve.
yarn add serve

# 
yarn serve -s build

#Insta

# Create a configuration file.
echo '{
  "source": "./src",
  "destination": "./docs",
  "plugins": [{"name": "esdoc-standard-plugin"}]
}' > .esdoc.json

# Run ESDoc.
./node_modules/.bin/esdoc

# View a documentation
open ./docs/index.html
```

## Dependencies
-   react: Required by specs, library for building user interfaces.
-   styled-components: Library to add styles using css and sass features to the componentes.
-   giphy-js-sdk-core: Wrapper around the GIPHY API.
-   jest: Unit test processor.