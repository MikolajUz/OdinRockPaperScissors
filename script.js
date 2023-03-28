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
function winnerCheck(plr,comp)
{
    if (plr==comp){
        return ' human and computer(tie)';
    }
    else {if(plr>comp){
        return 'human';
    }
        else{
            return 'computer';
        }
    }
}


function game(){
    let plrscore=0;
    let compscore=0;
    
    for (let i=0;i<5;i++){
        let roundscore=gameRound('Rock',);
        console.log(roundscore);
        if (roundscore.slice(0,7)==='You won') plrscore++;
        if (roundscore.slice(0,8)==='You lose') compscore++;
    }
    winner=winnerCheck(plrscore,compscore);
    plrscore=plrscore.toString();
    compscore=compscore.toString();
    
    let score='Human scored '+plrscore+' and computer scored '+compscore+' .The winner is '+winner ;
        return score;
        
    
}

console.log(game());
    




