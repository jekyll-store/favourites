var Reflux = require('reflux');
var JSE = require('jekyll-store-engine');

JSE.Actions.favourite = Reflux.createAction();
JSE.Actions.removeFromFavourites = Reflux.createAction();
JSE.Stores.Favourites = require('./FavouritesStore');
