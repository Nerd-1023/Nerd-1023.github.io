
var themeID = 1;


themeID = Number.parseInt(localStorage.getItem("theme"))
if (themeID.toString() === "NaN") themeID = 1

var rgb;
var rgbHue = 0;
var themes = [
    {id : 0, hue : 200, sat : 0.2, name : "RGB", url : "",  type : rgbTheme},
    {id : 1,  hue : 200, sat : 0.1, name : "Default", url : "", type : genericTheme},
    {id : 2,  hue : 100, sat : 0.4, name : "Forest", url : "forest_theme_halfblur.jpg", type : imageTheme},
    {id : 3,  hue : 10,  sat : 0.5, name : "Magma", url : "magma_theme_halfblur.jpg", type : imageTheme},
]

var page = document.getElementById("page")
var body = document.documentElement;


document.getElementById("theme_text").innerText = themes[themeID].name;
updateTheme()
document.getElementById("theme_<").addEventListener("click",()=>{
    themeID -=1;
    if (themeID < 0) themeID = themes.length-1;
    updateTheme()
})
document.getElementById("theme_>").addEventListener("click",()=>{
    themeID +=1;
    if (themeID > themes.length-1) themeID = 0;
    updateTheme()
})
function imageTheme () {
    page.style.setProperty("background-image","url('../theme/"+themes[themeID].url+"')")
}
function genericTheme () {
    page.style.setProperty("background-color","var(--conO)")
}
function rgbTheme() {
    page.style.setProperty("background-color","var(--conO)")
    rgbHue = themes[1].hue;
    rgb = setInterval(() => {
        rgbHue -=10;
        if (rgbHue > 360) rgbHue = 0;
        if (rgbHue < 0) rgbHue = 360;
        body.style.setProperty("--priH",rgbHue.toString())
    },100)
    body.style.setProperty("--priS", "20%")
}
function updateTheme () {
    clearInterval(rgb);
    themes[themeID].type();
    document.getElementById("theme_text").innerText = themes[themeID].name;
    localStorage.setItem("theme",themeID.toString());
    body.style.setProperty("--priS", themes[themeID].sat*100 +"%")
    body.style.setProperty("--priH", themes[themeID].hue.toString())
}
