import loki from 'lokijs';

var idbAdapter = new loki.LokiLocalStorageAdapter();
var db = new loki('movieDB',
    {
      autoload: true,
      autoloadCallback : loadHandler,
      autosave: true,
      autosaveInterval: 10000, // 10 seconds
      adapter: idbAdapter
    });

function loadHandler() {
    // if database did not exist it will be empty so I will intitialize here
  var favorites = db.getCollection('favorites');
  if (favorites === null) {
    favorites = db.addCollection('favorites');
  }
}

// db.deleteDatabase();

export default db;
