var NumberOfImages = 12

for (let a = 1; a < NumberOfImages + 1; a++){
    let imgCont = document.createElement("div");
    let imgLbl = document.createElement("span");
    let newImg = document.createElement("img");
    newImg.src = "icon_" + a + ".png";
    newImg.className = "icon";
    imgLbl.innerText = "Icon #"+a;
    imgLbl.className = "icon_label"

    imgCont.appendChild(newImg)
    imgCont.appendChild(imgLbl)
    imgCont.className = "icon_container"
    imgCont.addEventListener("mouseover", function () {
         imgLbl.style.setProperty("opacity","1")
    });
    imgCont.addEventListener("mouseleave",function () {
        imgLbl.style.setProperty("opacity","0")
    })
    document.getElementById("icons").appendChild(imgCont);
}
