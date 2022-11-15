//document.getElementById('clickMe').addListener('click', doFunction());
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("clickMe").addEventListener('click', doFunction);

});

function doFunction(){
  const infoDisplay = document.getElementById('urls').value; 
  //console.log(infoDisplay);

  chrome.storage.local.set({key: infoDisplay}, function() {
    console.log('Value is set to ' + infoDisplay);
  });

  /*
  chrome.runtime.sendMessage({data: infoDisplay}, function(response){
    console.log("popup");
    console.log(response);
    console.log("popupdone");
  });*/
}