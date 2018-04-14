
# gifs-viewer
Gif viewer using GIPHY API, shows trending gifs, allows to add to favorite ones and is able to do searches.

## Dependencies
-   react: Required by specs, library for building user interfaces.
-   styled-components: Library to add styles using css and sass features to the componentes.
-   giphy-js-sdk-core: Wrapper around the GIPHY API.
-   jest: Unit test processor.
-   esdoc: Documentation generator. Measures documentation coverage.

## Components
### AppContainer
#### Events
-   onLoad: fetches the favorite gifs ids from local storage.

#### State
-   favoriteGifs: { array of strings }

### GifGallery
#### Events
-   onLoading: Show a loading icon when the status is loading.
-   onLoad: Shows a maximum amount of GIFs when the status is loaded.
    

#### Actions
-   When the component is mounted, execute an action passed to the component in the properties to get GIFs.

#### State
-   status: { string } loading / loaded
-   gifs: { array of gif objects }

#### Properties
-   onMount: { function } action

### TrendingGifGallery
#### Events
-   onComponentMount, execute fetchTrendingGifs
-   onLoading, shows a loading icon.
-   onLoaded, shows 10 trending GIFs.
    

#### Actions
-   fetchTrendingGifs: Execute an action passed by props.

#### State
-   status: { string } loading / loaded
-   trendingGifts: { array of gif objects }
    

#### Properties
-   onMount: { function } action

### FavoriteGifGallery
#### Events
-   onComponentMount, execute fetchFavoriteGifs
-   onLoading, shows a loading icon.
-   onLoaded, shows all user favorite GIFs.

#### Actions
-   fetchFavoriteGifs: get favorite GIF, call to the API to get the all favorite GIFs.

#### State
-   status: { string } loading / loaded
-   favoriteGifts: { array of gif objects }

#### SearchContainer
##### State
-   gifts: [ { GIFs } ]
-   searchText: “string”

#### SearchArea
##### Behaviour
-   When a the value of the search input changes the state of the page is changed with the last GIFs results.

##### Actions
-   5 seconds after the value of the input change, call to the API to get the top 20 matching endpoints.

##### State
-   value: “string”

#### SearchResults
##### Behaviour
-   Shows the GIFs that matches with the searched text

##### Actions
-   When the component is mounted, call to the API to get the top 20 matching GIFs.

##### State
-   status: “loading”
-   status: “loaded”
-   trendingGifts: [ { GIFs } ]

#### GiftItem
##### Behaviour
-   When is a favorite GIF must show an icon with a filled heart.
-   When the user clicks on the heart filled the GIF is deleted from the favourite GIF list.
-   When is not a favorit GIF must show an icon with an empty heart.
-   When the user clicks on the empty heart the GIF is added to the favourite GIF list.
-   When is not a favorit GIF must show no heart icon.
    
## Actions
The API connection is done with the oficial SDK from Giphy: [https://github.com/Giphy/giphy-js-sdk-core](https://github.com/Giphy/giphy-js-sdk-core)

### fetchTrendingGifs
Receive a react state object, call the endpoint and set the new state.

-   API endpoint: GET /v1/gifs/trend
-   ingapi_key: { string } App Key
-   limit: { integer } 10
-   API endpoint documentation: https://developers.giphy.com/docs/#operation--gifs-trending-get
    

### fetchFavoriteGifs
Receive a react state object and a string with concatenated GIF ids separated by comma, call the endpoint and set the new state.

-   API endpoint: GET /v1/gifs
-   api_key: { string } App Key
-   ids: { string } Concatenated GIF ids separated by comma
-   API endpoint documentation: https://developers.giphy.com/docs/#operation--gifs-get
    
### fetchSearchedGifs
Receive a react state object and a string with the requested search, call the endpoint and set the new state.

-   API endpoint: GET /v1/gifs/search
-   api_key: { string } App Key
-   q: { string } Search query term or phrase.
-   limit: { integer (int32) } 20, the maximum number of records to return.
-   API endpoint documentation: https://developers.giphy.com/docs/#operation--gifs-search-get
