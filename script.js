let plrscore=0;
let compscore=0;


function getComputerChoice(){

    let choice=['ROCK', 'PAPER', 'SCISSORS'];
    return choice[Math.floor(Math.random()*choice.length)]
}

function gameRound(plrSel,compSel){
        console.log(compSel);
    
    

    if (plrSel===compSel){
        return 'Tie';
    }
        else
        if((plrSel==="ROCK" && compSel==="SCISSORS") || (plrSel==="SCISSORS" && compSel==="PAPER") || (plrSel==="PAPER" && compSel==="ROCK"))
        {
            plrscore++;
            document.getElementById('score').innerHTML='You won '+plrSel+ ' beats '+compSel;
            document.getElementById('result').innerHTML='HUMAN='+plrscore+' COMPUTER='+compscore;
            
            

        }
            
        
        else
            if((plrSel==="ROCK" && compSel==="PAPER") || (plrSel==="SCISSORS" && compSel==="ROCK") || (plrSel==="PAPER" && compSel==="SCISSORS"))
        {
            compscore++;
            document.getElementById('score').innerHTML='You lose '+compSel+ ' beats '+plrSel;
            document.getElementById('result').innerHTML='HUMAN='+plrscore+' COMPUTER='+compscore;
        }
            
            
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

function gameOver(){
    if(plrscore>4 || compscore>4){
        document.getElementById('result').innerHTML='END SCORE! HUMAN='+plrscore+' COMPUTER='+compscore+' The Winner is '+winnerCheck(plrscore,compscore);
        disableButtons();
    }
}

function disableButtons(){
    buttons.forEach((button)=>{
        button.disabled=true;
        });
}

function game(){
    
    gameRound(this.id,getComputerChoice());
    gameOver();

}
function resetgame(){
    plrscore=0;
    compscore=0;
    document.getElementById('result').innerHTML='Score';
    document.getElementById('score').innerHTML='Round result';
    buttons.forEach((button)=>{
        button.disabled=false;
        });
}
    

  
             
            

const buttons=document.querySelectorAll('button');
    buttons.forEach((button)=>{
    button.addEventListener('click', game);
    });
const reset=document.querySelector('#reset');
reset.addEventListener('click',resetgame);
