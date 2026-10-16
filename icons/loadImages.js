var NumberOfImages = 4

var a = 1;
while(a - 1 < NumberOfImages){ 
var newImg = document.createElement("img");
newImg.src = "icon_" + a + ".png";
document.getElementById("icons").appendChild(newImg);
a = a + 1;
}
