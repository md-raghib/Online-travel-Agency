var train;
var api='https://api.railwayapi.com/v2/route/train/';
var trainNumber;
var apikey='mmn6ph5itn';



function setup(){

	trainNumber = select('#trainnumber');
	var button = select('#submit');
	button.mousePressed(askTrainStatus);
	
}

function askTrainStatus(){

	var url = api + trainNumber.value() + '/apikey/' + apikey ;
	loadJSON(url, gotData);
}
function gotData(data){
	train = data;
}