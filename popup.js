document.addEventListener('DOMContentLoaded', function() {
    var screenFlashIntervalInput = document.getElementsByClassName('screen-flash-interval-number')[0];
    var mouseCursorDropdown = document.getElementsByClassName('mouse-cursor-dropdown')[0];
    var playErrorIntervalInput = document.getElementsByClassName('play-error-interval-number')[0];

    chrome.storage.sync.get([
        "christmasToggle"
    ], function(items){
        document.getElementsById('christmas-toggle')[0].checked = items.christmasToggle;
    });

    $('.switch .holiday-switch').click(function(event) {
        var inputClicked = event.target;
        var key = null;
        var value = event.target.checked;    

        if(inputClicked.matches(".christmas-pics")){
            key = "christmasToggle";
        }
        
        if(key){
            chrome.storage.sync.set({
                [key]: value
            });
        }
    });
}, false);