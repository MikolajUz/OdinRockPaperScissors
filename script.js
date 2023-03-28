function getComputerChoice(){
    
     switch (Math.floor(Math.random() * 3)){ //random number from 0 to 2  
        case 0:
        console.log('Rock');
            break;
            case 1:
            console.log('Paper');
                break;
                case 2:
                console.log('Scissors');
                break;
                }
}
console.log(getComputerChoice());
    




