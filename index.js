

/* Recebe um X e Y para criar a tabela */
var tab_l = prompt("insira  um número de linhas");
var tabela_linhas = parseInt(tab_l);
var tab_c = prompt("insira  um número de colunas");
var tabela_colunas = parseInt(tab_c);

/* variáveis */
/* var tabela_linhas = 8;
var tabela_colunas = 7; */
const divMain = document.getElementById("main");
const table = document.createElement('table');
var linhas = [];
var colunas_linha = []
var x = 0;
var y = 0;
var selectedRow = 0;
var selectedCol = 0;

var direction = "Td";

/* Cria as tr, crias as tds, insere as tds nas tr, as linhas na table e a table no body */

for(var y = 0; y < tabela_linhas ; y++){
    var colunas = [];
    linhas[y] = document.createElement('tr')
for(var x = 0; x < tabela_colunas ; x++){
    colunas[x] = document.createElement('td')
    linhas[y].appendChild(colunas[x]);
};
table.appendChild(linhas[y]);
x = 0;
colunas_linha.push(colunas)}
divMain.appendChild(table);


/* funções para editar a tabela */

function write(l,c,text){
    colunas_linha[l][c].appendChild(document.createTextNode(text));
}
function erase(l,c){
    colunas_linha[l][c].innerHTML = "";
}

function paint(l,c,color){
    colunas_linha[l][c].style.backgroundColor=color;
}

function editRowOrColumn(func,direction){
    for(x; x < direction;x-=-1){
        func();   
    }
    x = 0;
}

/* event Listeners para mover a td selecionada */
function clearFocus(){
var celulaFoco = document.getElementsByClassName('hover')
for (var i = celulaFoco.length-1; i > -1; i--) {
    console.log(celulaFoco[i])
    celulaFoco[i].classList.remove('hover');}}


function changeFocus(dir,row,col){
    for(y; y < dir;y++){
        if(col == "All") colunas_linha[row][y].classList.toggle("hover");
        else if(row ==="All")colunas_linha[y][col].classList.toggle("hover");
        else colunas_linha[row][col].classList.toggle("hover");
    }
    y = 0;
}


function focusDirections(){
    if(direction == "Col"){
        changeFocus(tabela_linhas,"All",selectedCol);}
    else if(direction =="Tr"){
        changeFocus(tabela_colunas,selectedRow,"All");}
    else if(direction == "Td"){
        changeFocus(1,selectedRow,selectedCol);
    }
    }



document.getElementById("up").addEventListener("click", function(){
    /* colunas_linha[selectedRow][selectedCol].classList.remove("hover"); */
    focusDirections();
    selectedRow --
    if (selectedRow < 0){selectedRow=tabela_linhas-1};
    /* colunas_linha[selectedRow][selectedCol].classList.add("hover"); */
    focusDirections();
    document.getElementById("L").innerHTML="L"+(selectedRow+1);
});
document.getElementById("down").addEventListener("click", function(){
   /*  colunas_linha[selectedRow][selectedCol].classList.remove("hover"); */
   focusDirections();
    selectedRow++;
    if (selectedRow > tabela_linhas-1){selectedRow=0};
    /* colunas_linha[selectedRow][selectedCol].classList.add("hover"); */
    focusDirections();
    document.getElementById("L").innerHTML="L"+(selectedRow+1);
});
document.getElementById("left").addEventListener("click", function(){
    /* colunas_linha[selectedRow][selectedCol].classList.remove("hover"); */
    focusDirections();
    selectedCol --;
    if (selectedCol < 0 ){selectedCol=tabela_colunas-1};
    /* colunas_linha[selectedRow][selectedCol].classList.add("hover"); */
    focusDirections();
    document.getElementById("C").innerHTML="C"+(selectedCol+1);
});
document.getElementById("right").addEventListener("click", function(){
    /* colunas_linha[selectedRow][selectedCol].classList.remove("hover"); */
    focusDirections();
    selectedCol ++;
    if (selectedCol > tabela_colunas-1){selectedCol=0}
    /* colunas_linha[selectedRow][selectedCol].classList.add("hover"); */
    focusDirections();
    document.getElementById("C").innerHTML="C"+(selectedCol+1);
});

/* event listeners edit texto delete texto */

function edit(func,type){
    if(direction == "Col"){
    editRowOrColumn(function(){func(x,selectedCol,type)},tabela_linhas)}
    else if(direction =="Tr"){
        editRowOrColumn(function(){func(selectedRow,x,type)},tabela_colunas)}
    else if(direction == "Td"){
        editRowOrColumn(function(){func(selectedRow,selectedCol,type)},1)
    }
    }



document.getElementById("edit").addEventListener("click", function(){
    var texto = document.getElementById("textoTd").value;
    edit(write,texto);
})

document.getElementById("delete").addEventListener("click", function(){
    edit(erase,"delete")
})

document.getElementById("paint").addEventListener("click", function(){
    var cor = document.getElementById("colorTd").value;
    edit(paint,cor)
})

/* event listeners para direção da edição(celula/linha/coluna) */

var dir = document.querySelectorAll(".form-check-input");
function disabled(dir1,dir2){
    document.getElementById(dir1).classList.add("disabled");
    document.getElementById(dir2).classList.add("disabled");
}
function enabled(dir1,dir2){
    document.getElementById(dir1).classList.remove("disabled");
    document.getElementById(dir2).classList.remove("disabled");
}


dir.forEach(function(e){
    e.addEventListener("click", function(){
        direction = this.value;
/* desabilitando controles, ao selecionar coluna só poderá andar verticalmente ... */
    if(direction == "Col"){ 
        document.getElementById("L").classList.add("hidden");
        document.getElementById("C").classList.remove("hidden");
       disabled("up","down");
       enabled("left","right")}
    else if(direction == "Tr"){
        document.getElementById("C").classList.add("hidden");
        document.getElementById("L").classList.remove("hidden");
        enabled("up","down");
        disabled("left","right");}
    else if(direction == "Td"){  
        document.getElementById("L").classList.remove("hidden");
        document.getElementById("C").classList.remove("hidden");
        enabled("left","right");
        enabled("up","down");}
        clearFocus();
        focusDirections();
      });

    });

    const handleFocus = ({target}) => {
        if(target.type==="button"){
          target = inputs[1]}
        const span = target.parentElement.firstElementChild;
        span.classList.add('span-active');  
      }
      
      const handleFocusOut = ({target}) => {
        if(target.type==="button"){
          target = inputs[1]}
        else if(target.value ===''){
          const span = target.parentElement.firstElementChild;
          span.classList.remove('span-active');}
            
      }

const input_texto = document.getElementById("textoTd")
input_texto.addEventListener('focus',handleFocus);
input_texto.addEventListener('focusout',handleFocusOut);


;
var opt = {
  margin:       1,
  filename:     'table.pdf',
  image:        { type: 'jpeg', quality: 0.98 },
  html2canvas:  { scale: 2 },
  jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
};

document.getElementById("donwload").addEventListener("click",function(){
    html2pdf().set(opt).from(table).save()
})



/* editRowOrColumn(function(){paint(2,2,"blue")},tabela_colunas) */


/* editRowOrColumn(function(){write(x,selectedCol,"boa tarde")},tabela_linhas)
editRowOrColumn(function(){paint(selectedCol,x,"purple")},tabela_colunas) */

/* var texto = document.getElementById("textoTd").value;
edit(write,texto) */
