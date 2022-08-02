function tournamentWinner(competitions, results) {
    let team=[];
      let points=[];
      let pos=0;
      let winner='';
      for(let i=0;i<competitions.length;i++){
          if(results[i]==1){
              winner=competitions[i][0];
          }else{
              winner=competitions[i][1];
          }
          pos=team.indexOf(winner);
  
          if (pos==-1){
              team.push(winner);
              points.push(3);
          }else{
              points[pos]+=3;
          }
  
      }
    return team[points.indexOf(Math.max(...points))];
  
  }
  
  // Do not edit the line below.
  exports.tournamentWinner = tournamentWinner;
  