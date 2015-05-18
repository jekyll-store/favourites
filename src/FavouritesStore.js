// Includes
var Reflux = require('reflux');
var I = require('seamless-immutable');
var JSE = require('jekyll-store-engine');
var listenAndMix = JSE.Mixins.listenAndMix;
var keptInStorage = JSE.Mixins.keptInStorage;
var m = JSE.Utils.mapping;

var FavouritesStore = Reflux.createStore({
  // Public
  listenables: [JSE.Actions],
  mixins: [
    listenAndMix(JSE.Stores.Products),
    keptInStorage('favourites', {})
  ],

  onFavourite: function(args) {
    if(args.name in t.favourites) { return; }
    t.favourites = t.favourites.merge(m(args.name, t.products[args.name]));
    t.update();
  },

  onRemoveFromFavourites: function(args) {
    t.favourites = t.favourites.without(args.name);
    t.update();
  }
});

var t = module.exports = FavouritesStore;
