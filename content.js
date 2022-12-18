var holidayRange = 0;

var width = document.width;
var imgObj = null;
function init(){
    imgObj = document.getElementById('penguin-gif');
    imgObj.style.left = '0px';
}   

function moveRight(){
    imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
    setTimeout(function(){
        console.log("Hello World");
    }, 100);
}


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

    christmasTreeImagePath = chrome.extension.getURL('/christmasImgs/christmas-tree.png')
    document.getElementById("christmas-images-container").innerHTML += 
        "<img src=\"" + christmasTreeImagePath + "\" id=\"christmas-tree-image\">"

    // penguinImagePath = chrome.extension.getURL('/christmasImgs/penguin.gif')
    // document.getElementById("christmas-images-container").innerHTML += 
    //     "<img src=\"" + penguinImagePath + "\" id=\"penguin-gif\">"

    elfCatImagePath = chrome.extension.getURL('/christmasImgs/elf-cat.gif')
    document.getElementById("christmas-images-container").innerHTML += 
        "<img src=\"" + elfCatImagePath + "\" id=\"elf-cat-gif\">"

    hangingLightsImagePath = chrome.extension.getURL('/christmasImgs/hanging-lights.png')
    document.getElementById("christmas-images-container").innerHTML += 
        // "<img src=\"" + hangingLightsImagePath + "\" id=\"hanging-lights-img\">"
        "<div id=\"hanging-lights-img\"></div>"
    document.getElementById("hanging-lights-img").style["background-image"] = hangingLightsImagePath

    lightSnowImagePath = chrome.extension.getURL('/christmasImgs/light-snow.gif')
    document.getElementById("christmas-images-container").innerHTML += 
        "<div id=\"light-snow-gif\"></div>"
    document.getElementById("light-snow-gif").style.backgroundImage = "url(" + lightSnowImagePath + ")"

    leftHollyImagePath = chrome.extension.getURL('/christmasImgs/holly.png')
    document.getElementById("christmas-images-container").innerHTML += 
        "<img src=\"" + leftHollyImagePath + "\" id=\"left-holly-img\">"

    rightHollyImagePath = chrome.extension.getURL('/christmasImgs/holly.png')
    document.getElementById("christmas-images-container").innerHTML += 
        "<img src=\"" + rightHollyImagePath + "\" id=\"right-holly-img\">"

    santaImagePath = chrome.extension.getURL('/christmasImgs/santa.png')
    document.getElementById("christmas-images-container").innerHTML += 
        "<img src=\"" + santaImagePath + "\" id=\"santa-img\">"

    if (holidayRange > 1) {
        
        gingerbreadCatImagePath = chrome.extension.getURL('/christmasImgs/gingerbread-cat.gif')
        document.getElementById("christmas-images-container").innerHTML += 
            "<img src=\"" + gingerbreadCatImagePath + "\" id=\"gingerbread-cat-gif\">"

        heavySnowImagePath = chrome.extension.getURL('/christmasImgs/heavy-snow.gif')
        document.getElementById("christmas-images-container").innerHTML += 
            "<img src=\"" + heavySnowImagePath + "\" id=\"heavy-snow-gif\">"
        
        redPresentImagePath = chrome.extension.getURL('/christmasImgs/red-present.png')
        document.getElementById("christmas-images-container").innerHTML += 
            "<img src=\"" + redPresentImagePath + "\" id=\"red-present-img\">"

        santaSleighImagePath = chrome.extension.getURL('/christmasImgs/santa-sleigh.png')
        document.getElementById("christmas-images-container").innerHTML += 
            "<img src=\"" + santaSleighImagePath + "\" id=\"santa-sleigh-img\">"

        snowmanImagePath = chrome.extension.getURL('/christmasImgs/snowman.png')
        document.getElementById("christmas-images-container").innerHTML += 
            "<img src=\"" + snowmanImagePath + "\" id=\"snowman-img\">"
    }
}

// document.onload = function(){
//     for(var i = 0; i < 1000+50; i=i+10){
//         init()
//         moveRight()
//     }
// }