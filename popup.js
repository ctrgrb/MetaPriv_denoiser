document.addEventListener('DOMContentLoaded', function() {
    chrome.storage.local.get(['key'], 
        function(result) {
            document.getElementById("urls").innerHTML = result.key;
        }
    );
    document.getElementById("start").addEventListener('click', doFunction);
    document.getElementById("clear").addEventListener('click', 
        function() {
            document.getElementById("urls").innerHTML = "";
        }
    );
});

function doFunction(){
    const infoDisplay = document.getElementById('urls').value; 
    chrome.storage.local.set({key: infoDisplay});
}