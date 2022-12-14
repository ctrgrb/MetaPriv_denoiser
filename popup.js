document.addEventListener('DOMContentLoaded', function() {
    chrome.storage.local.get(['key'], 
        function(result) {
            const value = result.key;
            const stuff = value.split('||');
            document.getElementById("urls").innerHTML = stuff[0];
            document.getElementById("keywords").innerHTML = stuff[1];
        }
    );
    document.getElementById("start").addEventListener('click', doFunction);
    document.getElementById("clear").addEventListener('click', 
        function() {
            document.getElementById("urls").innerHTML = "";
            document.getElementById("keywords").innerHTML = "";
        }
    );
});

function doFunction(){
    const infoDisplay = document.getElementById('urls').value + "||" + document.getElementById('keywords').value; 
    chrome.storage.local.set({key: infoDisplay});
}