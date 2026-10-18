var NumberOfImages = 8
 
var a = 1;
while(a < NumberOfImages + 1){ 
var newImg = document.createElement("img");
newImg.src = "icon_" + a + ".png";
document.getElementById("icons").appendChild(newImg);
a = a + 1;
}
