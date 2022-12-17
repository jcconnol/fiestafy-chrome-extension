document.addEventListener('DOMContentLoaded', function() {
    var screenFlashIntervalInput = document.getElementsByClassName('screen-flash-interval-number')[0];
    var mouseCursorDropdown = document.getElementsByClassName('mouse-cursor-dropdown')[0];
    var playErrorIntervalInput = document.getElementsByClassName('play-error-interval-number')[0];


    

    chrome.storage.sync.get([
        "christmasToggle",
        "holidayRange"
    ], function(items){
        document.getElementById('christmas-toggle').checked = items.christmasToggle;
        document.getElementById("holiday-level-slider").value = items.holidayRange
        document.getElementById("holiday-range").innerHTML = items.holidayRange
    });

    var slider = document.getElementById("holiday-level-slider");
    var output = document.getElementById("holiday-range");
    output.innerHTML = slider.value;
    slider.oninput = function() {
        chrome.storage.sync.set({
            ["holidayRange"]: this.value
        })
        
        output.innerHTML = this.value;
    }

    $('.switch .holiday-toggle').click(function(event) {
        var inputClicked = event.target;
        var key = null;
        var value = event.target.checked;    
        
        if(inputClicked.matches("#christmas-toggle")){
            key = "christmasToggle";
        }
        
        if(key){
            chrome.storage.sync.set({
                [key]: value
            });
        }
    });
}, false);