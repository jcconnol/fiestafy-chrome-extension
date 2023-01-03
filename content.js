var holidayRange = 0;

var width = document.width;
var imgObj = null;
var chromeExtensionURL = "";

function getExtensionURL(image_file_path) {
    console.log(chromeExtensionURL + image_file_path)
    return chromeExtensionURL + image_file_path;
}

runFiestafy();

function runFiestafy(){
    chrome.storage.sync.get([
        "chromeExtensionURL",
        "holidayRange",
        "christmasToggle",
        "valentinesToggle",
        "independenceDayToggle"
    ], function(items){
        chromeExtensionURL = items.chromeExtensionURL;
        holidayRange = Number(items.holidayRange);

        if(items.christmasToggle == true || items.christmasToggle == "true"){
            runChristmas();
        }

        if(items.valentinesToggle == true || items.valentinesToggle == "true"){
            runValentines();
        }

        if(items.independenceDayToggle == true || items.independenceDayToggle == "true"){
            runIndependenceDay();
        }

    });
}

function runChristmas(){
    
    var newDiv = document.createElement("DIV"); 
    newDiv.setAttribute("id", "christmas-images-container");
    document.body.appendChild(newDiv);

    if (holidayRange >= 1) {
        christmasTreeImagePath = getExtensionURL('christmas/christmas-tree.png')
        document.getElementById("christmas-images-container").innerHTML += 
            "<img src=\"" + christmasTreeImagePath + "\" id=\"christmas-tree-image\">"

        elfCatImagePath = getExtensionURL('christmas/elf-cat.gif')
        document.getElementById("christmas-images-container").innerHTML += 
            "<img src=\"" + elfCatImagePath + "\" id=\"elf-cat-gif\">"

        santaImagePath = getExtensionURL('christmas/santa.png')
        document.getElementById("christmas-images-container").innerHTML += 
            "<img src=\"" + santaImagePath + "\" id=\"santa-img\">"
    }

    if (holidayRange >= 2) {
        hangingLightsImagePath = getExtensionURL('christmas/hanging-lights.png')
        document.getElementById("christmas-images-container").innerHTML += 
            "<div id=\"hanging-lights-img\"></div>"
        document.getElementById("hanging-lights-img").style.backgroundImage = "url(" + hangingLightsImagePath + ")"

        leftHollyImagePath = getExtensionURL('christmas/holly.png')
        document.getElementById("christmas-images-container").innerHTML += 
            "<img src=\"" + leftHollyImagePath + "\" id=\"left-holly-img\">"

        rightHollyImagePath = getExtensionURL('christmas/holly.png')
        document.getElementById("christmas-images-container").innerHTML += 
            "<img src=\"" + rightHollyImagePath + "\" id=\"right-holly-img\">"
    }

    if (holidayRange >= 3) {
        redPresentImagePath = getExtensionURL('christmas/red-present.png')
        document.getElementById("christmas-images-container").innerHTML += 
            "<img src=\"" + redPresentImagePath + "\" id=\"red-present-img\">"
        document.getElementById("christmas-images-container").innerHTML += 
            "<img src=\"" + redPresentImagePath + "\" id=\"red-present-img-2\">"
        
        gingerbreadCatImagePath = getExtensionURL('christmas/gingerbread-cat.gif')
        document.getElementById("christmas-images-container").innerHTML += 
            "<img src=\"" + gingerbreadCatImagePath + "\" id=\"gingerbread-cat-gif\">"

        snowmanImagePath = getExtensionURL('christmas/snowman.png')
        document.getElementById("christmas-images-container").innerHTML += 
            "<img src=\"" + snowmanImagePath + "\" id=\"snowman-img\">"

        penguinImagePath = getExtensionURL('christmas/penguin.gif')
        document.getElementById("christmas-images-container").innerHTML += 
            "<img src=\"" + penguinImagePath + "\" id=\"penguin-gif\">"
    }

    if (holidayRange >= 4) {
        lightSnowImagePath = getExtensionURL('christmas/light-snow.gif')
        document.getElementById("christmas-images-container").innerHTML += 
            "<div id=\"light-snow-gif\"></div>"
        document.getElementById("light-snow-gif").style.backgroundImage = "url(" + lightSnowImagePath + ")"
    }

    if (holidayRange >= 5) {
        heavySnowImagePath = getExtensionURL('christmas/heavy-snow.gif')
        document.getElementById("christmas-images-container").innerHTML += 
            "<div id=\"heavy-snow-gif\"></div>"
        document.getElementById("heavy-snow-gif").style.backgroundImage = "url(" + heavySnowImagePath + ")"

        document.getElementById("christmas-images-container").innerHTML += 
            "<div id=\"heavy-snow-gif-2\"></div>"
        document.getElementById("heavy-snow-gif-2").style.backgroundImage = "url(" + heavySnowImagePath + ")"

        santaSleighImagePath = getExtensionURL('christmas/santa-sleigh.png')
        document.getElementById("christmas-images-container").innerHTML += 
            "<img src=\"" + santaSleighImagePath + "\" id=\"santa-sleigh-img\">"
    }    
}

function runValentines(){
    
    var newDiv = document.createElement("DIV"); 
    newDiv.setAttribute("id", "valentines-images-container");
    document.body.appendChild(newDiv);

    if (holidayRange >= 1) {
        christmasTreeImagePath = getExtensionURL('valentines/christmas-tree.png')
        document.getElementById("valentines-images-container").innerHTML += 
            "<img src=\"" + christmasTreeImagePath + "\" id=\"christmas-tree-image\">"
    }
}

function runIndependenceDay(){
    
    var newDiv = document.createElement("DIV"); 
    newDiv.setAttribute("id", "valentines-images-container");
    document.body.appendChild(newDiv);

    if (holidayRange >= 1) {
        christmasTreeImagePath = getExtensionURL('valentines/christmas-tree.png')
        document.getElementById("valentines-images-container").innerHTML += 
            "<img src=\"" + christmasTreeImagePath + "\" id=\"christmas-tree-image\">"
    }
}