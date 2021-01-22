const readLineSync = require('readline-sync');

const userResponse = parseInt(readLineSync.question('Welcome to Epoch Converters. Which conversion would you like to use?\n1. Epoch to HumanDate\n2. HumanDate to Epoch\n'));

console.log(`You selected ${userResponse}`);

function toHumanDate(epoch)
{
   const epochDate= new Date(epoch);//1611041456000
   const date = epochDate.getDate();
   const month = epochDate.getMonth()+1;
   const year = epochDate.getFullYear();
   const hours = epochDate.getHours();
   const minutes = epochDate.getMinutes();
   const seconds = epochDate.getSeconds(); 

   const fullDate={year,month,date,hours,minutes,seconds};

   return fullDate;
}

function toEpoch(humanDate)
{
   const myDate = new Date(humanDate); 
   const myEpoch = myDate.getTime();
   return myEpoch;//1 19 2021 07:30:56 → 1611041456000
}

switch(userResponse)
{
   case 1:
   const epoch = parseInt(readLineSync.question('Please enter the Epoch to be converted to HumanDate\n'));
   console.log(toHumanDate(epoch));
   break;

   case 2:
   console.log('Please enter the HumanDate (year,month,day,hour,minute,second one by one) to be converted to Epoch\n');

   const year = readLineSync.question('Please enter the year\n');

   const month = readLineSync.question('Please enter the month\n');

   const date = readLineSync.question('Please enter the date\n');

   const hour = readLineSync.question('Please enter the hour\n');

   const minute = readLineSync.question('Please enter the minute\n');

   const second = readLineSync.question('Please enter the second\n');

   const humanDate = `${month} ${date} ${year} ${hour}:${minute}:${second}`;

   console.log(toEpoch(humanDate));
   break;

   default:
   console.log('Invalid option');
   break;
}

