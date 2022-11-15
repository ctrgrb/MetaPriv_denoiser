$(document).ready(function(){
  $('#clickMe').click(function(){
     doFunction();
  });
});
function doFunction(){
  const infoDisplay = document.getElementById('urls'); 

  chrome.runtime.sendMessage({data: infoDisplay}, function(response){
    console.log("popup");
    console.log(response);
    console.log("popupdone");
  });
}