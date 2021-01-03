window.isEditing = false;
window.editPet = (id) => {
    const $cardEl = document.querySelector(`#pet${id}`);
    document.querySelector("#petName").value = $cardEl.querySelector("h5").textContent;
    document.querySelector("#petImage").value = $cardEl.querySelector("img").src;
    window.isEditing = id;
};

const addPet = (pet) => {
    const petCardHTML = `<div class="card" style="width: 18rem;" id="pet${pet.id}" onclick="editPet(${pet.id})">
                    <img src=${pet.image} class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${pet.name}</h5>
                    </div>
                </div>`;
    document.querySelector("#petsHolder").innerHTML += petCardHTML;
};

document.querySelector("#petForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const name        = document.querySelector("#petName").value;
    const image       = document.querySelector("#petImage").value;
    const description = document.querySelector("#petDesc").value;
    const data = JSON.stringify({name, image, description});
    document.querySelector("#petSubmitButton").textContent = "Ekleniyor";
    document.querySelector("#petSubmitButton").style.backgroundColor = "gray";
    if(window.isEditing){
        fetch(`https://5ff193d0db1158001748b15e.mockapi.io/pets/${window.isEditing}`, {
            method: "PUT",
            body: data,
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then((response) => response.json()).then((pet) => {
            document.querySelector("#petSubmitButton").textContent = "Submit";
            document.querySelector("#petSubmitButton").style.backgroundColor = "blue";
            document.querySelector("#petName").value = "";
            document.querySelector("#petImage").value = "";
            document.querySelector("#petDesc").value = "";
            const $cardEl = document.querySelector(`#pet${window.isEditing}`);
            $cardEl.querySelector("h5").textContent = name;
            $cardEl.querySelector("img").src = image;
            window.isEditing = false;

            //addPet(pet);
        }).catch((err) => {
            document.querySelector("#petSubmitButton").textContent = "Submit";
            document.querySelector("#petSubmitButton").style.backgroundColor = "blue";
            document.querySelector("#petName").value = "";
            document.querySelector("#petImage").value = "";
            document.querySelector("#petDesc").value = "";
            window.isEditing = false;
        });
    }else{
        fetch("https://5ff193d0db1158001748b15e.mockapi.io/pets", {
            method: "POST",
            body: data,
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then((response) => response.json()).then((pet) => {
            document.querySelector("#petSubmitButton").textContent = "Submit";
            document.querySelector("#petSubmitButton").style.backgroundColor = "blue";
            document.querySelector("#petName").value = "";
            document.querySelector("#petImage").value = "";
            document.querySelector("#petDesc").value = "";
            addPet(pet);
        }).catch((err) => {
            document.querySelector("#petSubmitButton").textContent = "Submit";
            document.querySelector("#petSubmitButton").style.backgroundColor = "blue";
            document.querySelector("#petName").value = "";
            document.querySelector("#petImage").value = "";
            document.querySelector("#petDesc").value = "";
        });
    }
});

fetch("https://5ff193d0db1158001748b15e.mockapi.io/pets").then((response) => response.json()).then((pets) => {
    pets.forEach((pet) => {
        addPet(pet)
    })
});