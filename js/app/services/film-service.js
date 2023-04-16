define(function() {
    var internals = {}; // internal state
    var externals = {}; // external api

    externals.getCharacters = function(cb) {
        $.ajax({
            url: 'https://rickandmortyapi.com/api/character/',
            type: 'GET',
            dataType: 'json',
            success: cb
        });
    }

    return externals;
});
