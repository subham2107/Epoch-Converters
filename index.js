const readLineSync = require('readline-sync');

const user_response = parseInt(readLineSync.question('Welcome to Epoch Converters. Which conversion would you like to use?\n1. Epoch to HumanDate\n2. HumanDate to Epoch\n'));

console.log(`You selected ${user_response}`);
logic(user_response);

function toHumanDate(epoch)
{

const epochdate= new Date(epoch);//1611041456000
const date = epochdate.getDate();
const month = epochdate.getMonth()+1;
const year = epochdate.getFullYear();
const hours = epochdate.getHours();
const minutes = epochdate.getMinutes();
const seconds = epochdate.getSeconds(); 

const fullDate={
  year,month,date,hours,minutes,seconds
};
return fullDate;
}

function toEpoch(humandate)
{
  const myDate = new Date(humandate); 
  //1 19 2021 07:30:56 → 1611041456000
  const myEpoch = myDate.getTime();
  return myEpoch;
}

function logic(user_response)
{
if(user_response===1)
{
  const epoch = parseInt(readLineSync.question('Please enter the Epoch to be converted to HumanDate\n'));
  console.log(toHumanDate(epoch));
}

else if(user_response===2)
{
  console.log('Please enter the HumanDate (year,month,day,hour,minute,second one by one) to be converted to Epoch\n');

  const year = readLineSync.question('Please enter the year\n');

  const month = readLineSync.question('Please enter the month\n');

  const date = readLineSync.question('Please enter the date\n');

  const hour = readLineSync.question('Please enter the hour\n');

  const minute = readLineSync.question('Please enter the minute\n');

  const second = readLineSync.question('Please enter the second\n');

  const humandate=month+' '+date+' '+year+' '+hour+':'+minute+':'+second;
  console.log(toEpoch(humandate));
}
else
{
  console.log('Invalid option');
}
}
