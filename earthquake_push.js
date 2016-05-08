
var pushbots = require('pushbots');
//var Firebase = require("firebase");

//Notification about food


// // Get users
//  var ref = new Firebase("https://brilliant-fire-4695.firebaseio.com/users");
//  var d = new Date();
//  var threeDaysAgo = d.getTime() - 259200000;

// // Attach an asynchronous callback to read the data at our posts reference
//  ref.orderByChild("lastFed").once("value", function(snapshot) { //

//    snapshot.forEach(function(childSnapshot) {
    
//        var thisUser = childSnapshot.val();
       
//        if(parseInt(thisUser["lastEarthquake"], 10) < parseInt(threeDaysAgo, 10)/1000 && parseInt(thisUser["lastEarthquake"], 15)% == 1){
 
//        		sendPushToWithMessage(thisUser["pushToken"], "EARTHQUAKE! Log in immediately to save your pet.", "earthquake");
//        }
//    });
// }, function (errorObject) {
//   console.log("The read failed: " + errorObject.code);
// });



 //function sendPushToWithMessage(token, message, msgType) {

	var Pushbots = new pushbots.api({
	    id:'56e86de537d9b058018b4569',
	    secret:'e09e2e4bdd59dba5626a8aab5f33e552'
	});
	
	Pushbots.setMessage("EARTHQUAKE! Log in immediately to save your pet"); //message); // ', "0"'' would specify just iOS
	Pushbots.customFields({"msgType": "earthquake"}); //msgType});

	var token = "9bb471c1d09044aa3e3603596bf2f310edd506a4cdbe6dcfe62d594c939391cc"; //me

	Pushbots.pushOne(token, function(response){
	    console.log(response);
	});
//}
