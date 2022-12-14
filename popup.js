document.addEventListener('DOMContentLoaded', function() {
    chrome.storage.local.get(['key'], 
        function(result) {
            document.getElementById("input").innerHTML = result.key;
        }
    );
    document.getElementById("start").addEventListener('click', doFunction);
    document.getElementById("clear").addEventListener('click', 
        function() {
            document.getElementById("input").innerHTML = "";
        }
    );
});

function doFunction(){
    const infoDisplay = document.getElementById('input').value; 
    chrome.storage.local.set({key: infoDisplay});
}