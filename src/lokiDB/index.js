import Loki from 'lokijs';

var db = new Loki('sandbox');

var favorites = db.addCollection('favorites');

favorites.insert({Title: 'Harry Potter', imdbID: 'sdasdas'});
favorites.insert({Title: 'Mad Men', imdbID: 'sdadsdfdas'});

export default favorites;
