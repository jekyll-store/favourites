var assert = require('chai').assert;
var sinon = require('sinon');
var I = require('immutable');
var FavouritesStore = require('../src/FavouritesStore');

describe('FavouritesStore', function() {
  FavouritesStore.products = I.fromJS({
    'wallet': { name: 'wallet' },
    'glove': { name: 'glove' },
    'tie': { name: 'tie' },
    'coat': { name: 'coat' }
  });

  FavouritesStore.favourites = I.fromJS([{ name: 'wallet' }, { name: 'coat' }]);

  sinon.spy(FavouritesStore, 'update');
  afterEach(function() { FavouritesStore.update.reset(); });

  it('adds to favourites', function() {
    var expected = [{ name: 'wallet' }, { name: 'coat' }, { name: 'tie' }];
    FavouritesStore.onFavourite({ name: 'tie' });
    assert(FavouritesStore.update.called);
    assert(FavouritesStore.favourites.equals(I.fromJS(expected)))
  });

  it('leaves alone if already in favourites', function() {
    FavouritesStore.onFavourite({ name: 'wallet' });
    assert(FavouritesStore.update.notCalled);
  });

  it('removes from favourites', function() {
    var expected = [{ name: 'wallet' }, { name: 'tie' }];
    FavouritesStore.onRemoveFromFavourites({ name: 'coat' });
    assert(FavouritesStore.update.called);
    assert(FavouritesStore.favourites.equals(I.fromJS(expected)))
  });
});
