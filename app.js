let score=[0,1,2,3,4,5,6];
let turn;
var team1={
    name:"RCB",
    runs:[],
    score:0
};
var team2={
    name:"CSK",
    runs:[],
    score:0
};
console.log('team2');
window.onload=()=>{
    selectTurn();
    updateButtonText();
    updateScore();
    updateNames();
}
selectTurn=()=>{
turn=Math.round(Math.random())+1;
console.log(turn);
};

updateButtonText=()=>{
button=document.getElementById("strike");
console.log("button");
button.textContent= `${turn===1?team1.name:team2.name} strike`;
}
updateScore=()=>{
    document.getElementById('score-t1').textContent = team1.score;
    document.getElementById('score-t2').textContent = team2.score;
}
updateNames=()=>{

    document.getElementById('team-1').textContent = team1.name;
    document.getElementById('team-2').textContent = team2.name;
}