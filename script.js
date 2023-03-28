function getComputerChoice(){

     switch (Math.floor(Math.random() * 3)){ //random number from 0 to 2  
        case 0:
        return 'Rock';
            break;
            case 1:
            return 'Paper';
            break;
                case 2:
                return 'Scissors';
                break;
                }
}

function gameRound(plrSel,compSel){

    compSel=getComputerChoice();
    plrSel=plrSel.toUpperCase();
    compSel=compSel.toUpperCase();

    if (plrSel===compSel){
        return 'Tie';
    }
        else
        if((plrSel==="ROCK" && compSel==="SCISSORS") || (plrSel==="SCISSORS" && compSel==="PAPER") || (plrSel==="PAPER" && compSel==="ROCK"))
            return 'You won '+plrSel+ ' beats '+compSel;
        
        else
            if((plrSel==="ROCK" && compSel==="PAPER") || (plrSel==="SCISSORS" && compSel==="ROCK") || (plrSel==="PAPER" && compSel==="SCISSORS"))
            return 'You lose '+compSel+ ' beats '+plrSel;
            
    }
    

console.log(gameRound('PapEr',));

    




