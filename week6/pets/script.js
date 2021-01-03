const addPet = (isim, image, description) => {
    const petCardHTML = `<div class="card" style="width: 18rem;">
                    <img src=${image} class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${isim}</h5>
                    </div>
                </div>`;
    document.querySelector("#petsHolder").innerHTML += petCardHTML;
};

function updatePets(){
    document.querySelector("#petsHolder").innerHTML = "";
    if(window.localStorage.getItem("pets")){
        const petsArr = JSON.parse(window.localStorage.getItem("pets"));
        petsArr.forEach((pet) => {addPet(pet.isim, pet.image, pet.description)});
    }
}

document.querySelector("#petForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const isim        = document.querySelector("#petName").value;
    const image       = document.querySelector("#petImage").value;
    const description = document.querySelector("#petDesc").value;
    const currentPets = window.localStorage.getItem("pets");
    if(currentPets){
        const newPets = JSON.parse(currentPets).concat([{isim, image, description}]);
        window.localStorage.setItem("pets", JSON.stringify(newPets));
    }else{
        window.localStorage.setItem("pets", JSON.stringify([{isim, image, description}]));
    }
    updatePets();
});

updatePets();