let randomNumber1 = Math.ceil(Math.random()*6);
let randomNumber2 = Math.ceil(Math.random()*6);
let cub1 = document.querySelector(".img1");
let cub2 = document.querySelector(".img2");
cub1.setAttribute("src", `images/dice${randomNumber1}.png`);
cub2.setAttribute("src", `images/dice${randomNumber2}.png`);
if (randomNumber1 > randomNumber2) {
    document.getElementsByTagName("h1")[0].innerHTML = "Amine Win";
}
else if (randomNumber2 > randomNumber1) {
        document.getElementsByTagName("h1")[0].innerHTML = "Khadidja Win";
    }
    else{
        document.getElementsByTagName("h1")[0].innerHTML = "DRAAAW !!";

    }

