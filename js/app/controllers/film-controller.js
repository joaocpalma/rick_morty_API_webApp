define(['views/film-view', 'services/film-service'], function(
    characterView,
    characterService
) {
    var externals = {};
    var internals = {};

    externals.start = function() {
        internals.bindEventHandlers();
        characterView.render();
    };

    internals.bindEventHandlers = function() {
        characterView.bind('button', internals.buttonHandler);
    };

/*     internals.buttonHandler = function() {
        var filmIndex = Math.floor(Math.random() * 6);
        characterService.getFilm(filmIndex, function(film) {
            characterView.render(film);
        });
    }; */
    
    internals.buttonHandler = function(){
        
        characterService.getCharacters(function(characters) {
           console.log(characters)
           characterView.render(characters);
        });
    }

    return externals;
});
