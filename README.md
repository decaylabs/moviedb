# Personal Movie Database

### Getting Started

This project uses webpack to build the application and host it locally on port 3000.
create-react-app was used to setup the dev environment and prototype quickly without having to manually
configure the necessary boilerplate.

1. [Install Node.js] (https://nodejs.org/en/download/)
2. Clone the repository

    `$ git clone https://github.com/grahamjx/moviedb`

3. Navigate to the project folder and run npm install

  ```bash
  $> cd /path/to/your-project-folder
  $> npm install
  ```

5. Run the start script from project directory. This will transpile and bundle the assets using webpack
   and Babel-loader and then serve the app locally.

    `$ nmp start`

6. Open a browser and visit localhost:3000

7. You can also check it out at http://grahamjx.github.io/moviedb

###React

The app is made up mostly of containers that communicate with the redux state store. Some of the containers could be broken down and made into functional components with the props being passed from a parent container. This is something that could be implemented when doing a refactor and cleaning up this initial implementation and design a bit.

* components/
  1. **header.js** - A simple functional component that displays the title at the top.

* containers/
  1. **App.js** - Parent container that renders each corresponding component / container.

  2. **search_bar.js** - Renders a form that supplies the search term to an api call. The result from the api call update the redux-state movies.search property containing an array of ~10 objects.

  3. **movie_list.js** - Renders the list of search results. On update, the component refreshes the movies.movie state, setting the first item so that the movie_viewer displays the top result. The corresponding action also caches the api calls for all the items in the list to make user interaction smoother. Incorporates a responsive Scrollbars area for a clean organization of results.

  4. **favorites_list.js** - Before mounting, all the saved favorites are loaded from the lokijs database. The resulting array is then mapped over and rendered to favorites list. On click, it will update the  property in the redux-state favorites.favorite.

  5. **movie_viewer.js** - Parent container for displaying the detailed information about a particular movie.
  On mount, checks the lokijs database for the first document. If nothing is in the DB, renders a simple div.

  6. **movie_details.js** - Renders the movie details based on what is in the movies.movie redux-state property. On mount or an update, it checks to see if the current movie is already in the database. This allows the component to conditionally render the button for adding / removing items from the favorites collection in the lokijs db.


###Redux

Redux is used to track app level state.

* constants/
    1. **ActionTypes.js** - Contains all the types used by each action.

* actions/
    1. **index.js** - Contains all actions that are passed to the reducers.

        2. **searchMovies** - Uses the search_bar term to call the omdbapi via axios. The request is a promise that resolves to an array containing ~10 simple movie objects.

        3. **getMovie** - Called by an onClick event from movie_list. Api call to get the detailed json from omdbapi. These results are already cached to disk on search, so the user doesn't have to wait for the omdbapi on click. This could be handled better in a future revision.

        4. **getFavorites** - Called when favorites-list is mounted. The request is a promise with a small setTimeout before resolving. This is done because the async nature of the application. Loki will resolve immediately even when the database or collection doesn't exsist.

        5. **getFavorite** - Is used by an onClick event from favorites-list. This action has already passed the movie from the favorites-list so it doesn't need to query the database.

        6. **getInit** - Called when mounting the movie_viewer. The request contains the first item in the collection if it exist so the movie_viewer can display the first item in favorites on app start.

        7. **addFavorite** - Adds the corresponding movie to the favorites collection.

        8. **removeFavorite** - Finds and removes the corresponding movie from the favorites collection.

        9. **checkFavorite** - Used by movie-details for conditional render of the add / remove button in the container.

        10. **diskCacheResults** - Called on search-list update so that interaction appears more responsive and a user doesn't have to wait for the api result to return when they click. Caches the detailed jsons to disk and passes the first detailed movie for state update.   

* reducers/
  1. **index.js** - Simple combineReducer
  2. **favorites.js** - Add, remove, check and get-all actions coming from the db.
  3. **movies.js** - Search and get movies from the api.

###Lokijs

Lokijs is a in-memory JavaScript Datastore with persistence. It is highly performant and uses mongo style querying for a familar endpoint. It is used in this application for persisting favorites across sessions. It was a unique challenge and something worth experimenting with in future applications.

* lokiDB/

    1. **index.js** - Creates a new lokijs database and autoloads the corresponding 'favorites' collection if it exists. Currently, it saves documents in the collection every 5 seconds using the provided local storage adapter. Incorporating a save action on window close rather than using a setInterval, as well as utilizing lokijs's indexedDB adapter for additional storage space beyond the current 5mb limit of local storage, is something being targeted in another iteration of the app.


###Api

Data for this is app is provided by the Open Movie Database API. Requests don't require a key and do contain a large set of movies and tv shows. Unfortunately, the endpoint can be rather slow causing the app to occasionally "lag" on more obscure searches.

###Improvements

* Better handling / replacement of the omdbapi endpoint. On slow responses, the application should let the user know what is happening. Right now, is works smoothly on common requests ex. "star wars" but less so on requests that take considerably longer to return the result. Right now, I utilize disk cache to have the results ready on click which can result in api calls on items that the user never intends to click on.

* Re-design structure including breaking some of the containers into subsets of functional components that serve a more Parent container.

* Integrate Lokijs indexedDB adapter to enable larger storage capacity as well as saving on app close rather than at a setInterval.

* Filtering of favorites list either through map / filter function on the favorites.all or from a query of the loki db.

* Integrate a modal that calls the youtube api and returns a trailer via iframe when clicking on the poster in the movie-details component.

* Redux action improvements via redux-thunk and a cleaner approach to state changes.

* Replace boostrap via public index.html with react-bootstrap for build-level integration.

* Expand search parameters ex. List of episodes.

* Testing framework ex. Jasmine, Karma
