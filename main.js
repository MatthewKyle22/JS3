//Phone Number
var phoneNumber = prompt('Enter your phone number like this XXX-XXX-XXXX'); 

function validate (phoneNumber) {
  if (phoneNumber.charAt(3) === '-' && phoneNumber.charAt(7) === '-') {
      alert('Your phone number is ' + phoneNumber + '.');
  } else {
      prompt('This is not a valid phone number, please try again. \n' + 'Ex. XXX-XXX-XXXX ');
  }
}
validate(phoneNumber);

//BirthDay
var birthDate = prompt("What is your birth date? XX/XX/XX");

function valBD (birthDate) {
    if (birthDate.charAt(2) === '/' && birthDate.charAt(5) === '/') {
        alert('Your birth date is ' + birthDate + '.');
    } else {
        prompt('This is not a valid phone number, please try again. \n' + 'Ex. XX/XX/XX');
    }
}
valBD(birthDate);

//Postal Code
var zipCode = prompt("What is your postal code?");

function valZip (zipCode) {
    if (zipCode.length === 5 || zipCode.length === 10 && zipCode.charAt(5) === '-') {
        alert('Your postal code is ' + zipCode + '.');
    } else {
        prompt('Does not work tard, try again.. \n');
    }
}
valZip(zipCode);


//State
function checkstate (arg){
    var st = false;
    while(!st){
        var state = prompt("Please enter your state abbreviation. Must be two characters");
        st = isState(state.split(' ').join('').toUpperCase());
    }
    return state.toUpperCase();
}

function isState(x){
    var states = ["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"];
    if (states.indexOf(x) === -1){
        return false;
    } else {
        return true;
    }
    
}
checkstate();


//Married??
function marriedstatus (arg) {
    var st = false;
    while(!st){
        var married = prompt('Yes or No, are you married?');
    }
} 

function valMarried(x) {
    var status = ['YES', 'Yes', 'yes', 'NO', 'No', 'no'];
    if (status.indexOf(x) === -1) {
        return false;
    } else {
        return true;
    }
}

var marriedlogged = valMarried();