import inquirer from 'inquirer';

let Balance = 10000;
let Mypin = 12345;

let pinans = await inquirer.prompt(
     {

    message: "Enter 5 digit pin",
    name: "Pin",
    type: "number"
}
);
if(pinans.Pin===Mypin) {
console.log("Correct Passcode !");

let Choices = await inquirer.prompt (
   [
    {
        message: "Selcet an option",
        name:  "operations",
        type: "list",
        choices: [ "withdraw" , "Check Balance"]
    }
   ]
);

if (Choices.operations === "withdraw") {
    let answer = await inquirer.prompt(
        [
            {
                name: "amount",
                message: "Choose Withdrawal Type: ",
                type: "list",
                choices: [ 'Enter your amount',"Choose from cashlist"]

            }
        ]
    );

if (answer.amount === 'Choose from cashlist'){
    let fastCash = await inquirer.prompt (
        [
            {
               name: "FastCash",
               message: "Select an Amount",
               type: "list",
               choices: ['1000' , '5000' , '9000']
                
            }
        ]
    );
    Balance -= fastCash.FastCash
    if(Balance < fastCash.FastCash){
        console.log('Insufficient balance !');
        
    }
    else if(fastCash.FastCash === Balance)
    console.log('Your remaining balance is: '+ Balance);
    
} 
else if (answer.amount === 'Choose from cashlist'){
    let fastCash = await inquirer.prompt (
        [
            {
               name: "FastCash",
               message: "Select an Amount",
               type: "list",
               choices: ['1000' , '5000' , '9000']
                
            }
        ]
    );
    Balance -= fastCash.FastCash
    if(Balance < fastCash.FastCash){
        console.log('Insufficient balance !');
        
    }
    else if(fastCash.FastCash === Balance)
    console.log('Your remaining balance is: '+ Balance);
    
}
}


else {
    console.log("Incorrect Passcode!");
    
}
}
