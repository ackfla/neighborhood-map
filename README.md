# Neighborhood Map

Neighborhood Map is an interactive map of Tewkesbury created for Udacity's Front End Nanodegree Programme, bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Table of Contents

* [Running the App](#instructions)
* [Instructions](#instructions)
* [Licensing](#licensing)

## Running the App

To start using the app, from with the project root directory, run `npm start`.

### Offline Use

By default, the [Create React App](https://github.com/facebookincubator/create-react-app) production build is a fully functional, offline-first App, utilising a Service Worker to cache content.

- To switch to production mode, run `npm run build` then `serve -s build`
- In your browser, navigate to the provided URL

## Instructions

- On first opening the app, a map of Tewkesbury with 10 places of interest is loaded.
- The user can select the place markers to view more information about that location.
- Alternatively the user can open the list view menu located to the left of the screen.
- Here they can view the full list of locations and filter by location name.

## Licensing

This Neighborhood Map Project uses the following third-party resources:

Font Awesome icons, Copyright Dave Gandy  
License: SIL Open Font License, version 4.6.1.  
Source: [http://fontawesome.io](http://fontawesome.io/)

### APIs
- [Google Maps](https://developers.google.com/maps/documentation/javascript/tutorial) - for map rendering
- [FourSquare](https://developer.foursquare.com/docs/api/getting-started) - for all location data

### Dependencies
- [google-maps-react](https://www.npmjs.com/package/google-maps-react) - for lazy loading Google Maps API
