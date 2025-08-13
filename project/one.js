// 1.deposit some money
// 2. determine no of lines to bet
// 3.collect a bet amount
// 4.spin the slot machine
// 5.check if the user won
// 6. give the user their winning
// 7.play again

// function deposit() {
// return 1
// }
// deposit()
// const x=deposit()
const prompt=require("prompt-sync")();


const ROWS= 3;
const COLS=3;

const SYMBOLS_COUNT={
    "A":2,
    "B":4,
    "C":6,
    "D":8
}
const SYMBOL_VALUES={
     "A":5,
    "B":4,
    "C":3,
    "D":2
}

















const deposit=()=>{
    while(true){
  const depositAmount= prompt("Enter a deposit amount: ");
  const numberDepositAmount=parseFloat(depositAmount);

  if(isNaN(numberDepositAmount) || numberDepositAmount <=0){
    console.log("Invalid deposit amount,try again.")
  }else{
    return numberDepositAmount;
  }
}
};

const getNumberofLines=()=>{
     while(true){
     const lines= prompt("Enter the no of lines to bet on (1-3): ");
  const numberofLines=parseFloat(lines);

  if(isNaN(numberofLines) || numberofLines <=0 || numberofLines>3){
    console.log("Invalid no of lines ,try again.")
  }else{
    return numberofLines;
  }
}
};
const getBet=(balance,Lines)=>{
         while(true){
     const bet= prompt("Enter the  bet per line: ");
  const numberBet=parseFloat(bet);
    if(isNaN(numberBet) || numberBet <=0 || numberBet>balance/Lines){
    console.log("Invalid bet ,try again.")
  }else{
    return numberBet;
  }
}
};

const spin=()=>{
    const symbols=[];
    for([symbol,count]of Object.entries(SYMBOLS_COUNT)){
            for(let i=0;i<count;i++){
                symbols.push(symbol);
            }
    }
    const reels=[[],[],[]];

};

spin();

let balance=deposit();
 const numberofLines=getNumberofLines();
 const bet=getBet(balance,numberofLines);
 