function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      	tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      	tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
} document.getElementById("_server").click(); //starting screen

function printFunc() {
  	console.log("test");
}

//Send value of Button pressed
function copyValue(pressId) { 
  	api.send("btn-pressed", document.getElementById(pressId).innerHTML);
}

function openNav() {
    document.getElementById("tab-tempbox").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}
  
function closeNav() {
    document.getElementById("tab-tempbox").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}