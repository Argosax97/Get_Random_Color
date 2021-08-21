let colorbtn = document.querySelector('.getRandom');
let colorCode = document.querySelector('.colorCode');




colorbtn.addEventListener('click', function (e) {

    e.preventDefault();
    let red = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);
    document.body.style.background = "rgb(" + red + "," + green + "," + blue + ")";
    colorCode.style.color = "rgb(" + green + "," + blue + "," + red + ")";
    colorCode.innerHTML = ("rgb(" + red + "," + green + "," + blue + ")");


});