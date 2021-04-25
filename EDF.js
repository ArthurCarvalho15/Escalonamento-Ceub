let processos = [
  [0, 3, 7, 20],
  [1, 2, 4, 5],
  [2, 2, 8, 10]
];

let qnt = processos.length;

function hiper_periodo(processos, qnt){
  let temp = 0;
  for (let i=0; i < qnt; i++){
    if (processos[i][3] > temp){
      temp = processos[i][3];
    }
  }
  return temp;
}

function escolher_menor_deadline(processos, qnt, deadlines){
  let menor_deadline = 10000;
  let escolhido = -1;

  for (let i=0; i < qnt; i++){
    if (deadlines[i] < menor_deadline){
      menor_deadline = deadlines[i];
      escolhido = i;
    }
  }
  return escolhido;
}

function edf(processos, qnt){
  let relogio = 0;
  
  let list_dead = [];
  let list_per = [];
  let list_cont = [];
  for (let i=0; i < qnt; i++){
    list_dead.push[0];
    list_per.push[0];
    list_cont.push[0];
  }
  let deadlines = list_dead;
  for (let i=0; i < qnt; i++){
    deadlines[i] = processos[i][2];
  }
  
  let periodo = list_per;
  for (let i=0; i < qnt; i++){
    periodo[i] = processos[i][3];
  }
  
  console.log("Processos: ", processos);
  console.log("Deadlines: ", deadlines);
  console.log("Periodo: ", periodo, "\n");
  let contador = list_cont;

  while (relogio <= 20){
    let escolhido = escolher_menor_deadline(processos, qnt, deadlines);
    console.log("Processo Escolhido: ", escolhido);

    if (periodo[escolhido] >= relogio){
      relogio += processos[escolhido][1];

      console.log("Processo: P", escolhido, " executando...");
      console.log("Relogio: ", relogio);
      console.log("Burst Time do Processo P", escolhido, ": ", processos[escolhido][1]);

      console.log("Deadline ANTERIOR do Processo: ", deadlines[escolhido]);
      deadlines[escolhido] += processos[escolhido][3];
      console.log("Deadline do Processo P", escolhido, " Atualizada: ", deadlines[escolhido]);

      console.log("Periodo ANTERIOR do Processo: ", periodo[escolhido]);
      periodo[escolhido] += processos[escolhido][3];
      console.log("Periodo do Processo P", escolhido, " Atualizando: ", periodo[escolhido], "\n");
      contador[escolhido] += 1;
    }
  }

  for (let i=0; i < qnt; i++){
    console.log("O Processo P", i, " Executou ", contador[i], " vezes");
  }
  console.log("Contador: ", contador);
}

edf(processos, qnt);
