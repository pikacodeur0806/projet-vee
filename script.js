// var requestURL = 'destinations.json';
// var request = new XMLHttpRequest();
// request.open('GET', requestURL);

// request.responseType = 'json';
// request.send();

// request.onload = function() {
//   var Destination = request.response;
//   populateHeader(Destination);
//   Destination(Destination);
// }



const myJson = document.querySelector('destinations.json');

fetch('flowers.jpg')
.then(function(response) {
  return response.blob();
})
.then(function(myBlob) {
  const objectURL = URL.createObjectURL(myBlob);
  myImage.src = objectURL;
});

fetch('destinations.json')
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
    .catch(err => console.error(err));




// for (var key of Object.keys(p)) {
//     console.log(key + " -> " + p[key])
// }

// fetch("destinations.json")
//   .then(response => response.json())
//   .then(json => console.log(json));
// Replace ./data.json with your JSON feed



// const loadJSON = (callback) => {
//     let xobj = new XMLHttpRequest();
//     xobj.overrideMimeType("application/json");
//     xobj.open('GET', 'destinations.json', true);
//     // Replace 'my_data' with the path to your file
//     xobj.onreadystatechange = () => {
//         if (xobj.readyState === 4 && xobj.status === 200) {
//             // Required use of an anonymous callback 
//             // as .open() will NOT return a value but simply returns undefined in asynchronous mode
//             callback(xobj.responseText);
//         }
//     };
//     xobj.send(null);
// }

// const init = () => {
//     loadJSON((response) => {
//         // Parse JSON string into object
//         let actual_JSON = JSON.parse(response);
//     });
// }

// console.log(loadJSON);


// "use strict";

// fetch("destinations.json")
// 	.then(function(resp){
// 		return resp.json();
// 	})
// 	.then(function(data){
// 		console.log(data);
// 	});



// fetch('destinations.json')
//   .then(
//     function(response) {
//       if (response.status !== 200) {
//         console.log('Looks like there was a problem. Status Code: ' +
//           response.status);
//         return;
//       }

//       // Examine the text in the response
//       response.json().then(function(data) {
//         console.log(data);
//       });
//     }
//   )
//   .catch(function(err) {
//     console.log('Fetch Error :-S', err);
//   });


// fetch('destinations.json').then(function(response){
// 	return response.json();
// }).then(function(obj){
// 	console.log(obj);
// }).catch(function (error){
// 	console.error('Something went wrong with ');
// 	console.error(error);
// });



// myObj = { "name":"John", "age":30, "car":null };
// x = myObj.name;
// function loadJSON(callback) {   

//     var xobj = new XMLHttpRequest();
//         xobj.overrideMimeType("application/json");
//     xobj.open('GET', 'destinations.json', true); // Replace 'my_data' with the path to your file
//     xobj.onreadystatechange = function () {
//           if (xobj.readyState == 4 && xobj.status == "200") {
//             // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
//             callback(xobj.responseText);
//           }
//     };
//     xobj.send(null);  
//  }
// fetch('destinations.json').then(function(response) {
//   if(response.ok) {
//     response.json().then(function(json) {
//       destinations = json;
//       initialize();
//     });
//   } else {
//     console.log('Network request for products.json failed with response ' + response.status + ': ' + response.statusText);
//   }
// });



const loadJSON = (callback) => {
    let xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'destinations.json', true);
    // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = () => {
        if (xobj.readyState === 4 && xobj.status === 200) {
            // Required use of an anonymous callback 
            // as .open() will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

// const init = () => {
loadJSON((response) => {
    // Parse JSON string into object
    let actual_JSON = JSON.parse(response);
    console.log(actual_JSON);
});
// }


// init()


var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.example.com/data.json", true);
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    // innerText does not let the attacker inject HTML elements.
    document.getElementById("resp").innerText = xhr.responseText;
  }
}
xhr.send();








