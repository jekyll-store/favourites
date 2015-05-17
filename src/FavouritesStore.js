// Includes
var Reflux = require('reflux');
var I = require('seamless-immutable');
var JSE = require('jekyll-store-engine');
var listenAndMix = JSE.Mixins.listenAndMix;
var keptInStorage = JSE.Mixins.keptInStorage;

var FavouritesStore = Reflux.createStore({
  // Public
  listenables: [JSE.Actions],
  mixins: [
    listenAndMix(JSE.Stores.Products),
    keptInStorage('favourites', [])
  ],

  onFavourite: function(args) {
    if(t.notInFavourites(args.name)) {
      t.favourites = t.favourites.concat(t.products[args.name]);
      t.update();
    }
  },

  onRemoveFromFavourites: function(args) {
    t.favourites = t.favourites.filter(function(product) {
      return product.name != args.name;
    });
    t.update();
  },

  // Private
  notInFavourites: function(name) {
    for(var i = 0; i < t.favourites.length; i++) {
      if(t.favourites[i].name == name) { return false; }
    }
    return true;
  }
});

var t = module.exports = FavouritesStore;
