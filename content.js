var holidayRange = 0;

var width = document.width;
var imgObj = null;
// function init(){
//     imgObj = document.getElementById('penguin-gif');
//     imgObj.style.left = '0px';
// }   

// function moveRight(){
//     imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
//     setTimeout(function(){
//         console.log("Hello World");
//     }, 100);
// }


runFiestafy();

function runFiestafy(){
    chrome.storage.sync.get(["holidayRange"], function(items){
        holidayRange = Number(items.holidayRange)
    });
    
    chrome.storage.sync.get(["christmasToggle"], function(items){
        if(items.christmasToggle == true || items.christmasToggle == "true"){
            runChristmas();
        }
    });
}

function runChristmas(){
    
    var newDiv = document.createElement("DIV"); 
    newDiv.setAttribute("id", "christmas-images-container");
    document.body.appendChild(newDiv);

    if (holidayRange >= 1) {
        christmasTreeImagePath = chrome.extension.getURL('/christmasImgs/christmas-tree.png')
        document.getElementById("christmas-images-container").innerHTML += 
            "<img src=\"" + christmasTreeImagePath + "\" id=\"christmas-tree-image\">"

        elfCatImagePath = chrome.extension.getURL('/christmasImgs/elf-cat.gif')
        document.getElementById("christmas-images-container").innerHTML += 
            "<img src=\"" + elfCatImagePath + "\" id=\"elf-cat-gif\">"

        santaImagePath = chrome.extension.getURL('/christmasImgs/santa.png')
        document.getElementById("christmas-images-container").innerHTML += 
            "<img src=\"" + santaImagePath + "\" id=\"santa-img\">"
    }

    if (holidayRange >= 2) {
        hangingLightsImagePath = chrome.extension.getURL('/christmasImgs/hanging-lights.png')
        document.getElementById("christmas-images-container").innerHTML += 
            "<div id=\"hanging-lights-img\"></div>"
        document.getElementById("hanging-lights-img").style.backgroundImage = "url(" + hangingLightsImagePath + ")"

        leftHollyImagePath = chrome.extension.getURL('/christmasImgs/holly.png')
        document.getElementById("christmas-images-container").innerHTML += 
            "<img src=\"" + leftHollyImagePath + "\" id=\"left-holly-img\">"

        rightHollyImagePath = chrome.extension.getURL('/christmasImgs/holly.png')
        document.getElementById("christmas-images-container").innerHTML += 
            "<img src=\"" + rightHollyImagePath + "\" id=\"right-holly-img\">"
    }

    if (holidayRange >= 3) {
        redPresentImagePath = chrome.extension.getURL('/christmasImgs/red-present.png')
        document.getElementById("christmas-images-container").innerHTML += 
            "<img src=\"" + redPresentImagePath + "\" id=\"red-present-img\">"
        document.getElementById("christmas-images-container").innerHTML += 
            "<img src=\"" + redPresentImagePath + "\" id=\"red-present-img-2\">"
        
        gingerbreadCatImagePath = chrome.extension.getURL('/christmasImgs/gingerbread-cat.gif')
        document.getElementById("christmas-images-container").innerHTML += 
            "<img src=\"" + gingerbreadCatImagePath + "\" id=\"gingerbread-cat-gif\">"

        snowmanImagePath = chrome.extension.getURL('/christmasImgs/snowman.png')
        document.getElementById("christmas-images-container").innerHTML += 
            "<img src=\"" + snowmanImagePath + "\" id=\"snowman-img\">"

        penguinImagePath = chrome.extension.getURL('/christmasImgs/penguin.gif')
        document.getElementById("christmas-images-container").innerHTML += 
            "<img src=\"" + penguinImagePath + "\" id=\"penguin-gif\">"
    }

    if (holidayRange >= 4) {
        lightSnowImagePath = chrome.extension.getURL('/christmasImgs/light-snow.gif')
        document.getElementById("christmas-images-container").innerHTML += 
            "<div id=\"light-snow-gif\"></div>"
        document.getElementById("light-snow-gif").style.backgroundImage = "url(" + lightSnowImagePath + ")"
    }

    if (holidayRange >= 5) {
        heavySnowImagePath = chrome.extension.getURL('/christmasImgs/heavy-snow.gif')
        document.getElementById("christmas-images-container").innerHTML += 
            "<div id=\"heavy-snow-gif\"></div>"
        document.getElementById("heavy-snow-gif").style.backgroundImage = "url(" + heavySnowImagePath + ")"

        document.getElementById("christmas-images-container").innerHTML += 
            "<div id=\"heavy-snow-gif-2\"></div>"
        document.getElementById("heavy-snow-gif-2").style.backgroundImage = "url(" + heavySnowImagePath + ")"

        santaSleighImagePath = chrome.extension.getURL('/christmasImgs/santa-sleigh.png')
        document.getElementById("christmas-images-container").innerHTML += 
            "<img src=\"" + santaSleighImagePath + "\" id=\"santa-sleigh-img\">"
    }    
}
