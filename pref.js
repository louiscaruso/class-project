var preference = prompt('Are you with the imperial or stormcloak?')
var message;

if (preference === 'imperial'){
    message = 'the legion welcomes all the swords we can get!';
  } else if (preference === 'stormcloak'){
    message = 'Leave me alone traitor!';
  } else {
    message = 'I did not want to know anyway.';
  }
  document.write('<h3>' + message + '</h3>')
