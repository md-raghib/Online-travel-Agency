
var uri;
var object;
var value;
var number = 1;
var cont;

function myfunc(){
			var api='https://api.railwayapi.com/v2/route/train/';
			var apikey='mmn6ph5itn';
			var train =document.getElementById("trainnumber").value;
			uri = api + train + '/apikey/' + apikey ;
			loadDoc();
		}
function loadDoc() {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
       if (this.readyState == 4 && this.status == 200) {
           object = this.responseText;
           var test = JSON.parse(object);
      
           for(var i =0 ; i < test.route.length; i++){
              value = document.createElement("TABLE");
              cont = document.createTextNode(test.route[i].station.name);
              value.appendChild(cont);
              document.body.appendChild(value);
              number++;
            }
        }
      };
      xhttp.open("GET", uri, true);
      xhttp.send();
}
