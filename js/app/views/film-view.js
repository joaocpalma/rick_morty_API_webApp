define(function() {

fetch("https://rickandmortyapi.com/api/character/")
.then((response)=> response.json())
.then((data) => drawCharacters(data.results));

    var internals = {
        handlers: {},
        elements: {}
    };

    var externals = {};

    const titlecard = document.querySelectorAll('.card-title')

    function drawCharacters(characters) {
        var characterDiv = document.querySelector("#app")
        
        characters.forEach(character => {
            console.log(character)
            var id = character.id
            characterDiv.innerHTML =
            characterDiv.innerHTML +
            `<div class="card mb-2 mr-2" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${character.image}" class="img-fluid rounded-start" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                  <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLongTitle">Character Details</h5>
                          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                        <p>
    <a class="btn btn-primary" data-bs-toggle="collapse" href="#locationExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    Location
  </a>
</p>
<div class="collapse" id="locationExample">
  <div class="card card-body">
    ${character.location.name}
  </div>
</div>
<p>
    <a class="btn btn-primary" data-bs-toggle="collapse" href="#originExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    Origin
  </a>
</p>
<div class="collapse" id="originExample">
  <div class="card card-body">
    ${character.origin.name}
  </div>
</div>
                        <p class="card-text"><small class="text-body-secondary">${character.type}</small></p>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
              <div class="col-md-8">
                <div class="card-body i">
                  <h5 class="card-title">${character.name}</h5>
                  <p class="card-text">Status: ${character.status}</p>
                  <p class="card-text">Specie: ${character.species}</p>
                  <p class="card-text"><small class="text-body-secondary">${character.type}</small></p>
                </div>
              </div>
            </div>
          </div>
            `
        });    
}

    function characterInfo(characters){

        var characterDiv = document.querySelector("#myModal")
        return (
            '<div>' +
            '<p><strong>Name: </strong>' +
            characters.name +
            '</p>' +
            '<p><strong>Status: </strong>' +
            characters.status +
            '</p>' +
            '<p><strong>Specie: </strong>' +
            characters.species +
            '</p>' +
            '<p><strong>Type: </strong>' +
            characters.type +
            '</p>' +
            '</div>'
        );
    }



    internals.renderCharacter = function(characters) {
        if (internals.elements.characterCard) {
            internals.elements.characterCard.empty();
        }

        internals.elements.characterCard = $(internals.createCharacterCard(characters));
        internals.elements.app.append(internals.elements.characterCard);
    };

    internals.renderButton = function() {
        if (internals.elements.button) {
            return;
        }

        internals.elements.button = $(internals.createButton());
        internals.elements.button.click(internals.handlers['button']);
        internals.elements.app.append(internals.elements.button);
    };

    externals.bind = function(event, handler) {
        internals.handlers[event] = handler;
    };

    externals.render = function(characters) {
        internals.elements.app = $('#app');
        internals.renderButton();

        if (characters) {
            internals.renderCharacter(characters);
        }
    };

    return externals;
});
