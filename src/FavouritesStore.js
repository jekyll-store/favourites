// Includes
var Reflux = require('reflux');
var I = require('immutable');
var JSE = require('jekyll-store-engine');
var listenAndMix = JSE.Mixins.listenAndMix;
var keptInStorage = JSE.Mixins.keptInStorage;

var FavouritesStore = Reflux.createStore({
  // Public
  listenables: [JSE.Actions],
  mixins: [
    listenAndMix(JSE.Stores.Products),
    keptInStorage('favourites', I.List)
  ],

  onFavourite: function(args) {
    if(t.notInFavourites(args.name)) {
      t.favourites = t.favourites.push(t.products.get(args.name));
      t.update();
    }
  },

  onRemoveFromFavourites: function(args) {
    t.favourites = t.favourites.filter(function(product) {
      return product.get('name') != args.name;
    });
    t.update();
  },

  // Private
  notInFavourites: function(name) {
    return t.favourites.every(function(product) {
      return product.get('name') != name;
    });
  }
});

var t = module.exports = FavouritesStore;
