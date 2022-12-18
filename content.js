var holidayRange = 0;

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

    if (holidayRange > 1) {
        elfCatImagePath = chrome.extension.getURL('/christmasImgs/elf-cat.gif')
        document.getElementById("christmas-images-container").innerHTML += 
            "<img src=\"" + elfCatImagePath + "\" id=\"elf-cat-gif\">"
    
        gingerbreadCatImagePath = chrome.extension.getURL('/christmasImgs/gingerbread-cat.gif')
        document.getElementById("christmas-images-container").innerHTML += 
            "<img src=\"" + gingerbreadCatImagePath + "\" id=\"gingerbread-cat-gif\">"

        hangingLightsImagePath = chrome.extension.getURL('/christmasImgs/hanging-lights.png')
        document.getElementById("christmas-images-container").innerHTML += 
            "<img src=\"" + hangingLightsImagePath + "\" id=\"hanging-lights-img\">"

        heavySnowImagePath = chrome.extension.getURL('/christmasImgs/heavy-snow.gif')
        document.getElementById("christmas-images-container").innerHTML += 
            "<img src=\"" + heavySnowImagePath + "\" id=\"heavy-snow-gif\">"

        hollyImagePath = chrome.extension.getURL('/christmasImgs/holly.png')
        document.getElementById("christmas-images-container").innerHTML += 
            "<img src=\"" + hollyImagePath + "\" id=\"holly-img\">"

        lightSnowImagePath = chrome.extension.getURL('/christmasImgs/light-snow.gif')
        document.getElementById("christmas-images-container").innerHTML += 
            "<img src=\"" + heavySnowImagePath + "\" id=\"light-snow-gif\">"
    }
        penguinImagePath = chrome.extension.getURL('/christmasImgs/penguin.gif')
        document.getElementById("christmas-images-container").innerHTML += 
            "<img src=\"" + penguinImagePath + "\" id=\"penguin-gif\">"
    if (holidayRange > 1) {
        
        redPresentImagePath = chrome.extension.getURL('/christmasImgs/red-present.png')
        document.getElementById("christmas-images-container").innerHTML += 
            "<img src=\"" + redPresentImagePath + "\" id=\"red-present-img\">"

        santaSleighImagePath = chrome.extension.getURL('/christmasImgs/santa-sleigh.png')
        document.getElementById("christmas-images-container").innerHTML += 
            "<img src=\"" + santaSleighImagePath + "\" id=\"santa-sleigh-img\">"

        santaImagePath = chrome.extension.getURL('/christmasImgs/santa.png')
        document.getElementById("christmas-images-container").innerHTML += 
            "<img src=\"" + santaImagePath + "\" id=\"santa-img\">"

        snowmanImagePath = chrome.extension.getURL('/christmasImgs/snowman.png')
        document.getElementById("christmas-images-container").innerHTML += 
            "<img src=\"" + snowmanImagePath + "\" id=\"snowman-img\">"

        walkingPenguinImagePath = chrome.extension.getURL('/christmasImgs/walking-penguin.gif')
        document.getElementById("christmas-images-container").innerHTML += 
            "<img src=\"" + walkingPenguinImagePath + "\" id=\"walking-penguin-gif\">"
    }
}