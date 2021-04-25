let processos = [];

function wating_time(processos){
  let list1 = [];
  for (i=0; i<processos.lenght; i++){
    list1.push[0];
  }
  let tempo_servico = list1;

  let list2 = [];
  for (i=0; i < processos.lenght; i++){
    list2.push[0];
  }
  let wt = list2;

  for (let i=1; i < processos.lenght; i++){
    tempo_servico[i] = parseInt(tempo_servico[i-1] + processos[i-1][2]);
    
    wt[i] = parseInt(tempo_servico[i] - processos[i][1]);
    
    if (wt[i] < 0){
      wt[i] = 0;
    }
  }
  return wt;
}

function turn_around_time(processos){
  let listTat = [];
  for (i=0; i < processos.lenght; i++){
    listTat.push[0];
  }
  let tat = listTat;

  let wt = wating_time(processos);
  for (let i=0; i < processos.lenght; i++){
    tat[i] = parseInt(processos[i][2] + wt[i]);
  }

  return tat;
}

function average_tat(processos){
  let tat = turn_around_time(processos);
  let sum = tat.reduce((a,b) => a+b, 0);
  return (sum/processos.lenght);
}

function average_wt(processos){
  let wt = wating_time(processos);
  let sum = wt.reduce((a,b) => a+b, 0);

  return (sum/processos.lenght);
}


let qnt_processos = parseInt(prompt("Quantidade de processos"));

for (let i=0; i < qnt_processos; i++){
  let at = parseInt(prompt("Arrival Time: "));
  let bt = parseInt(prompt("Burst Time: "));
  processos.push([at, bt]);
}

let wt = wating_time(processos);
let tat = turn_around_time(processos);
let avg_wt = average_wt(processos);
let avg_tat = average_tat(processos);

console.log("| Process |\t| Burst Time |\t\t| Arrival Time |\t| Waiting Time |\t| Turn-Around Time |\t| Completion Time |\n\n")

for (let proc=0; proc < processos.lenght; proc++){
  console.log(proc, "\t\t", processos[proc][1], "\t\t", processos[proc][0], "\t\t", wt[proc], "\t\t", tat[proc], "\t\t", parseInt(tat[proc] + processos[proc][0]));
}

console.log("Average Wating Time: ", avg_wt);
console.log("Average Turn-Around Time: ", avg_tat);
