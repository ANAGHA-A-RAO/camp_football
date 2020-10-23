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
    var result=document.getElementById("result");
    result.style.visibility="";
    console.log(result);
    button.textContent= `${turn===1?team1.name:team2.name} Strike`;
    if(team1.runs.length==6 && team2.runs.length==6){
    button.remove();
    result.textContent=team1.score===team2.score? `It's is Draw`: `${team1.score > team2.score? team1.name:team2.name} WINS`;
    }
    else{
    turn=team1.runs.length === 6?2:team2.runs.length===6?1:turn;
    }
    }

updateScore=()=>{
    document.getElementById('team1-score').textContent = team1.score;
    document.getElementById('team2-score').textContent = team2.score;
    updateRuns();
}
updateNames=()=>{

    document.getElementById('team-1').textContent = team1.name;
    document.getElementById('team-2').textContent = team2.name;
}
var handelStrikeButtonClick=()=> {
    console.log("button clicked");
    var runs = score[Math.floor(Math.random()*score.length)];
    console.log('runs');
    runs=runs == 5? 'w':runs;
    console.log(runs);
    if (turn === 1) {
        team1.runs.push(runs);
        team1.score = calculatescore(team1.runs);
        console.log(team1.score);
    }
    else {
        team2.runs.push(runs);
        team2.score = calculatescore(team2.runs);
        console.log(team2.score);
    }
    updateButtonText();
    updateScore();
}
var calculatescore=(runs)=>{
    return runs.map(run =>{
        return run =='w'?0:run;
    }).reduce((total,runs)=>total+runs);
}
updateRuns=()=>{
    var teamOneRunsElement=document.getElementById("score-t1").children;
    var teamTwoRunsElement=document.getElementById("score-t2").children;
    team1.runs.forEach((run,index)=>{
        teamOneRunsElement[index].textContent=run;
    })
    team2.runs.forEach((run,index)=>{
        teamTwoRunsElement[index].textContent=run;
    })
}