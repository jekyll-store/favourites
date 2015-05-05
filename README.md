# Jekyll-Store/Favourites

[![Build Status](https://travis-ci.org/jekyll-store/favourites.svg?branch=master)](https://travis-ci.org/jekyll-store/favourites)

Favourite products/wish list plugin for [Jekyll-Store Engine](https://github.com/jekyll-store/engine).

## Actions

### favourite

Adds product to the favourites list.

Args:

* `name` - Name of the product.

Example:

```javascript
JekyllStoreEngine.Actions.favourite({ name: 'bag' });
```

### removeFromFavourites

Remove product from the favourites list.

Args:

* `name` - Name of the product.

Example:

```javascript
JekyllStoreEngine.Actions.removeFromFavourites({ name: 'bag' });
```

## FavouritesStore

The products that have been favourited.

Example output:

```javascript
{
  favourites: Immutable.List({
    Immutable.Map({ name: 'Jumper', price: Big(24.30) }),
    Immutable.Map({ name: 'Cardigan', price: Big(21.45) }),
    Immutable.Map({ name: 'Pullover', price: Big(13.90) })
  })
}
```

## Contributing

1. [Fork it](https://github.com/jekyll-store/favourites/fork)
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request
