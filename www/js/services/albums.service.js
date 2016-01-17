angular
  .module('kasoot')
  .factory("AlbumsService", AlbumsService);

function AlbumsService($log) {
  var service = this;

  service = {
    all: all
  }

  return service;

  function all() {
    var albums = [
      {
        id: 1,
        title: 'Bhajan',
        src: "http://lorempixel.com/200/200/cats"
      },
      {
        id: 2,
        title: 'Film',
        src: "http://lorempixel.com/200/200/animals"
      },
      {
        id: 3,
        title: 'Natak',
        src: "http://lorempixel.com/200/200/sports"
      },
      {
        id: 4,
        title: 'Pop',
        src: "http://lorempixel.com/200/200/people"
      },
      {
        id: 5,
        title: 'Ragini',
        src: "http://lorempixel.com/200/200/nature"
      },
      {
        id: 6,
        title: 'Kisse',
        src: "http://lorempixel.com/200/200/transport"
      }
    ];
    return albums;
  }
}