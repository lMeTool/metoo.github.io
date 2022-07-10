function getCard(data) {
    data.forEach(data => {
        let card = document.createElement("div")
        card.classList.add("card")
        card.innerHTML = `
<div class="card">
    <div class="img">
        <img src="${data.img}" alt="${data.name}">
    </div>
    <div class="info">
        <h3>${data.name}</h3>
        <div class="compound"><h4>Состав:</h4><p>${data.compound}</p></div>
        <div class="description"><h4>Описание:</h4><p>${data.description}</p></div>
    </div>
    <div class="footer">
        <div class="volume"><span>${data.weight}-</span></div>
        <div class="type"><span>${data.type}</span></div>
        <div class="price"><span>${data.price}р</span></div>
    </div>
</div>`
        document.querySelector('.menu').appendChild(card)
    })
}

function req() {
    fetch("http://localhost:3000/GrandMenu")
        .then(data => data.json())
        .then(data => {
            console.log(data)
            getCard(data)
        })
        .catch(data => console.error(data))
}

req()