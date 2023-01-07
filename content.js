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
        arrowHeartImagePath = getExtensionURL('valentines/arrow-heart.png')
        document.getElementById("valentines-images-container").innerHTML += 
            "<img src=\"" + arrowHeartImagePath + "\" id=\"arrow-heart-image\">"

        heartBalloonImagePath = getExtensionURL('valentines/heart-balloons.png')
        document.getElementById("valentines-images-container").innerHTML += 
            "<img src=\"" + heartBalloonImagePath + "\" id=\"heart-balloon-image\">"
    }

    if (holidayRange >= 2) {
        heartBannerImagePath = getExtensionURL('valentines/heart-banner.png')
        document.getElementById("valentines-images-container").innerHTML += 
            "<div id=\"heart-banner-image\"></div>"
        document.getElementById("heart-banner-image").style.backgroundImage = "url(" + heartBannerImagePath + ")"
    }

    if (holidayRange >= 5){
        arrowImagePath = getExtensionURL('valentines/arrow.png')
        document.getElementById("valentines-images-container").innerHTML += 
            "<img src=\"" + arrowImagePath + "\" id=\"arrow-image\">"
    
        

        

        heartGardenImagePath = getExtensionURL('valentines/heart-garden.png')
        document.getElementById("valentines-images-container").innerHTML += 
            "<img src=\"" + heartGardenImagePath + "\" id=\"heart-garden-image\">"

        heartGunImagePath = getExtensionURL('valentines/heart-gun.png')
        document.getElementById("valentines-images-container").innerHTML += 
            "<img src=\"" + heartGunImagePath + "\" id=\"heart-gun-image\">"

        heartHotAirImagePath = getExtensionURL('valentines/heart-hot-air.png')
        document.getElementById("valentines-images-container").innerHTML += 
            "<img src=\"" + heartHotAirImagePath + "\" id=\"heart-hot-air-image\">"

        heartLetterImagePath = getExtensionURL('valentines/heart-letter.png')
        document.getElementById("valentines-images-container").innerHTML += 
            "<img src=\"" + heartLetterImagePath + "\" id=\"heart-letter-image\">"

        milkShakeImagePath = getExtensionURL('valentines/milk-shake.png')
        document.getElementById("valentines-images-container").innerHTML += 
            "<img src=\"" + milkShakeImagePath + "\" id=\"milk-shake-image\">"

        valentinesDayImagePath = getExtensionURL('valentines/valentines-day.gif')
        document.getElementById("valentines-images-container").innerHTML += 
            "<img src=\"" + valentinesDayImagePath + "\" id=\"valentines-day-image\">"
    }
}

function runIndependenceDay(){
    
    var newDiv = document.createElement("DIV"); 
    newDiv.setAttribute("id", "independence-images-container");
    document.body.appendChild(newDiv);

    if (holidayRange >= 1) {
        fireworkImagePath = getExtensionURL('independence-day/firework.png')
        document.getElementById("independence-images-container").innerHTML += 
            "<img src=\"" + fireworkImagePath + "\" id=\"firework-image\">"
    }

    firework2ImagePath = getExtensionURL('independence-day/firework-2.png')
    document.getElementById("independence-images-container").innerHTML += 
        "<img src=\"" + fireworkImagePath + "\" id=\"firework-2-image\">"

    goldBannerImagePath = getExtensionURL('independence-day/gold-banner.png')
    document.getElementById("independence-images-container").innerHTML += 
        "<img src=\"" + goldBannerImagePath + "\" id=\"gold-banner-image\">"

    kiteImagePath = getExtensionURL('independence-day/kite.png')
    document.getElementById("independence-images-container").innerHTML += 
        "<img src=\"" + kiteImagePath + "\" id=\"kite-image\">"

    sparkePlumeImagePath = getExtensionURL('independence-day/sparkle-plume.png')
    document.getElementById("independence-images-container").innerHTML += 
        "<img src=\"" + sparkePlumeImagePath + "\" id=\"sparkle-plume-image\">"

    sparklerImagePath = getExtensionURL('independence-day/sparkler.gif')
    document.getElementById("independence-images-container").innerHTML += 
        "<img src=\"" + sparklerImagePath + "\" id=\"sparkler-image\">"

    spiralImagePath = getExtensionURL('independence-day/spiral.png')
    document.getElementById("independence-images-container").innerHTML += 
        "<img src=\"" + spiralImagePath + "\" id=\"spiral-image\">"

    usaBannerImagePath = getExtensionURL('independence-day/usa-banner.png')
    document.getElementById("independence-images-container").innerHTML += 
        "<img src=\"" + usaBannerImagePath + "\" id=\"usa-banner-image\">"

    wavingFlagImagePath = getExtensionURL('independence-day/waving-flag.png')
    document.getElementById("independence-images-container").innerHTML += 
        "<img src=\"" + wavingFlagImagePath + "\" id=\"waving-flag-image\">"
}