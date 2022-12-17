runFiestafy();

function runFiestafy(){
    chrome.storage.sync.get(["christmasToggle"], function(items){
        if(items.christmasToggle == true || items.christmasToggle == "true"){
            runChristmas();
        }
    });
}

function runChristmas(){
    console.log("christmas!")
}