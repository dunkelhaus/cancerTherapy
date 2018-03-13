function httpGetAsync(theURL, callback){
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function(){
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
      callback(xmlHttp.responseText);
  }
  xmlHttp.open("GET", theURL, true); // true for asynchronous
  xmlHttp.send(null);
}
function httpGet(theURL) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theURL, false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
    };

function runRequest() {
    var theURL = "http://512e08c6.ngrok.io/admin/";
    var result = httpGet(theURL);
    console.log(result);
    return;
    };

function getV1Callback(responseText){
  //adjust network.ts (to be renamed from state.ts) object using arguments inside responseText


}

function getV1(){
  var theURL = "http://dlforcancertherapy.cf/";
  var result = httpGetAsync(theURL, getV1Callback);


}

runRequest();
