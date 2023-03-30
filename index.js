let all_boxes = Array.from(document.getElementsByClassName("box"))
let win;
let cp = "X";//Current Player
player1 = "X"
player2 = "O"
let counter=0;

player1_turn = true
player2_turn = false


function checkwin(){
    winning_combinations = [
        [1,2,3],
        [4,5,6],
        [7,8,9],
        [1,4,7],
        [2,5,8],
        [3,6,9],
        [1,5,9],
        [7,5,3],
    ];

    for(array of  winning_combinations){
        
        if(document.getElementById(`tic-tac-box-${array[0]}`).innerHTML==document.getElementById(`tic-tac-box-${array[1]}`).innerHTML && (document.getElementById(`tic-tac-box-${array[1]}`).innerHTML==document.getElementById(`tic-tac-box-${array[2]}`).innerHTML)&& (document.getElementById(`tic-tac-box-${array[1]}`).innerHTML!="")){
            if(cp=="X"){
                win = "O"
            }
            else{
                win = "X"
            }
            alert(`The Winner Is : ${win}`)
        }
        else if(counter==9){
            alert(`DRAW !`)
        }
    }

    

        
}



function handle_input(element){
    element.addEventListener("click",(event)=>{
        switch (element.value){
            case ("X"||"O"):
                null
            default:
                if(player1_turn){
                    element.innerText = player1
                    player1_turn = false
                    player2_turn = true
                    cp = player2
                    counter++
                }

                else{
                    element.innerText = player2
                    player1_turn = true
                    player2_turn = false
                    cp = player1
                    counter++
                }
        }
    })
}

all_boxes.forEach((element,index,array)=>{
    handle_input(element);
})



//settinsg Status
setInterval(()=>{
    document.getElementsByTagName('footer')[0].innerHTML = `<p>Current Player : ${cp} </p>`
},1)

setInterval(checkwin,500)