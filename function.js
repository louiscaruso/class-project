
  var username = prompt('What is your name traveler?');
  document.write('<h3>Welcome' + username + '</h3>');  

var preference = prompt('Are you with the imperials or stormcloaks?')
var message;

if (preference === 'imperials'){
    message = 'The legion welcomes all the swords we can get!';
  } else if (preference === 'stormcloaks'){
    message = 'Leave!';
  } else {
    message = 'I did not want to know anyway.';
  }
  document.write('<h3>' + message + '</h3>')
  var today = new Date();
var hourNow = today.getHours();
var greeting;
if (hourNow > 18) {
    greeting = 'Good Evening!';
} else if (hourNow > 12) {
    greeting = 'Good Afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good Morning!';
} else {
    greeting = 'Welcome traveler!';
}
document.write('<h3>' + greeting + '</h3>');


function getCount(){
  var count = prompt('How many copies of Skyrim do you want?');

  while (isNaN(count) || count === ''){
    count = prompt('Please enter in a number. We want to get you the correct number.');
  }
  return count;

}

function getProduct(){
  var response = prompt('Would you like to buy our product, yes or no')
  var item;
  while (response !== 'yes' && response !== 'no'){
    response = prompt('Please enter a repy to us.')
  }
  if(response === 'yes'){
    item = '<img scr="legionbanner.jpeg">';
  }
  return item;
}

function showOrder(){
  var result = ''
  var itemType = getProduct();
  var total = getCount();

  for (var i = 0; i < total; i++){
    result = result + '<p>' + itemType + '</p>';
  }

  return document.write(result);
}
