var readline = require('readline').createInterface ({
    input: process.stdin,
    output: process.stdout,
});

readline.question('Enter your city ', function (city){
    if (city==="colombo"){
        console.log("Low risk area");
    }
    else if (city==="galle"){
        console.log("Low risk area");
    }
    else if (city==="gampaha"){
        console.log("Hight risk area");
    }
    else {
        console.log("Incorrect city");
    }
    console.log("Stay safe");
    readline.close();
});