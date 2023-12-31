# React Hooks Movie Management Application

## Introduction

React movies application provides a simple list of movies.

This task uses **React Hooks** and **React Testing Library (`@testing-library/react`)**.

## Problem Statement

Your task is to complete a simple movie management application by adding 4 main features:
- Listing all the movies
- Creating a new movie by filling a form
- Deleting an existing movie
- Rating a movie using stars 1-5

Make sure that:
- all the tests pass
- you stick to the names of the props of the original components (don't refactor them), so that the automatic tests don't break

### Application

- Each *movie* contains `id`, `title`, `duration` (in minutes), `year` (when published), `director`, `starring` (movie actors), `description`, `imageUrl` and `ratings` fields. See typescript types in the `types.ts` file
- The application is mocking HTTP requests:
  - `api/movies.ts` file includes function which retrieves the movies data from an API. The application loads the data only once, stores it locally - and from this moment, it updates the local state
  - the mock API response is included in the `data/movies.json` file
  - the `data/testdata.ts` file provide movies for the tests
- `movies/ratings.ts` file includes functions related to the Movie model (average rate)
- `movies/useMoviesReducer.tsx` file includes a stub of a react hook which implements state management, used by the `MovieProvider`
- `shared/components` folder contains helper "view" components, e.g. for star rating and form inputs

### Requirements

- Implement `MovieCard` component that will display data and actions of a single movie it gets through a prop
  - `imageUrl`, `title`, `duration`, `year`, `director`, `starring` and `description`
    - since `director` and `starring` are arrays, join them using a comma, e.g. for `["actor-A", "actor-B", "actor-C"]`, the output should be: `actor-A, actor-B, actor-C`
  - Add delete option for a movie, which should call a handler and dispatch an appropriate action
  - Display stars that are clickable through `StarRating` component
  - Display an average rating
- In `movies/useMoviesReducer.tsx` file, the `useMoviesReducer` custom hook (built on top of `useReducer` and used in `MovieProvider` to pass down its state via context) should allow to dispatch following actions:
  - `fetch` - provide initial data with `api/movies`
  - `add` - add a new valid movie, thanks to filling a form
  - `delete` - delete a certain movie by clicking a button
  - `rate` - rate a movie (which aggregates all the rates)
- Finish `MovieList` component which displays a list of movies as `MovieCard`s
  - `Card` at the end should contain an `AddMovieButton` initially, or display `AddMovieForm` once clicked
  - Each of the actions inside `AddMovieForm` (adding a movie or canceling the form) should lead back to the `AddMovieButton`
- Finish `AddMovieButton` component to display `Add movie` label and to call appropriate handler (that switches to form)
- Implement `AddMovieForm` component that should show 7 text input fields: `url` (of the movie image), `title`, `duration`, `year`, `director`, `starring` and `description`. When all the fields are filled and the form is submitted, a new movie should be added and displayed

### Evaluation

- Your solution will be evaluated against a suite of integration tests which rely on various components. Make sure all these tests pass.
- Some tests use test IDs (`data-testid`), others rely on button labels, etc. You don't need to change anything there, but make sure your implementation matches test requirements. **Do not modify the tests**.
- Integration tests use a *Page Object pattern*. It provides a clean, functionality-oriented API which hides the details of the underlying DOM structure.

## Setup

Follow these steps if you are using zip/git mode (i.e. not available inside Devskiller in-browser IDE):

1. `npm install` – install dependencies
2. `npm test` – run all tests (this will be used to evaluate your solutions)
3. `npm run test:watch` – run all tests in _watch mode_ (alternative to `npm test` which you might find more convenient to use locally)
4. `npm start` – (optional) serve the application locally at [http://localhost:3000/](http://localhost:3000/) (it won't be used to evaluate your solutions)
5. `nvm install` - (optional) set up the expected _major_ version of Node.js locally ([`nvm`](https://github.com/nvm-sh/nvm) required; Node.js version defined in `.nvmrc` file)

This application was generated using [Create React App](https://github.com/facebook/create-react-app). It has all the standard setups.

**Good Luck!**
