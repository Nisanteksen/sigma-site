// Her kartın açılan ekranını yönetmek için bir dizi oluşturun
const fullscreenElements = [];
for (let i = 1; i <= 8; i++) {
    fullscreenElements[i] = document.getElementById("fullscreen" + i);
}

// Her kartı dinamik olarak tanımlayın
for (let i = 1; i <= 8; i++) {
    document.getElementById("card" + i).addEventListener("click", function () {
        openFullscreen(i);
    });
}

function openFullscreen(cardNumber) {
    if (fullscreenElements[cardNumber]) {
        fullscreenElements[cardNumber].style.display = "flex";
    }
}

function closeFullscreen(cardNumber) {
    if (fullscreenElements[cardNumber]) {
        fullscreenElements[cardNumber].style.display = "none";
    }
}


