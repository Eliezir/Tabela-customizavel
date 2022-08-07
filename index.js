

/* Recebe um X e Y para criar a tabela */
var tab_l = prompt("insira  um número de linhas");
var tabela_linhas = parseInt(tab_l);
var tab_c = prompt("insira  um número de colunas");
var tabela_colunas = parseInt(tab_c);

/* variáveis */
/* var tabela_linhas = 8;
var tabela_colunas = 7; */
const body = document.body;
const table = document.createElement('table');
var linhas = [];
var colunas_linha = []
var x = 0;

var selectedRow = 0;
var selectedCol = 0;

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
document.body.appendChild(table);


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

document.getElementById("up").addEventListener("click", function(){
    colunas_linha[selectedRow][selectedCol].classList.remove("hover");
    selectedRow --
    if (selectedRow < 0){selectedRow=tabela_linhas-1};
    colunas_linha[selectedRow][selectedCol].classList.add("hover");
    document.getElementById("L").innerHTML="L"+(selectedRow+1);
});
document.getElementById("down").addEventListener("click", function(){
    colunas_linha[selectedRow][selectedCol].classList.remove("hover");
    selectedRow++;
    if (selectedRow > tabela_linhas-1){selectedRow=0};
    colunas_linha[selectedRow][selectedCol].classList.add("hover");
    document.getElementById("L").innerHTML="L"+(selectedRow+1);
});
document.getElementById("left").addEventListener("click", function(){
    colunas_linha[selectedRow][selectedCol].classList.remove("hover");
    selectedCol --;
    if (selectedCol < 0 ){selectedCol=tabela_colunas-1};
    colunas_linha[selectedRow][selectedCol].classList.add("hover");
    document.getElementById("C").innerHTML="C"+(selectedCol+1);
});
document.getElementById("right").addEventListener("click", function(){
    colunas_linha[selectedRow][selectedCol].classList.remove("hover");
    selectedCol ++;
    if (selectedCol > tabela_colunas-1){selectedCol=0}
    colunas_linha[selectedRow][selectedCol].classList.add("hover");
    document.getElementById("C").innerHTML="C"+(selectedCol+1);
});

/* event listeners edit texto delete texto */

document.getElementById("edit").addEventListener("click", function(){
    var texto = document.getElementById("textoTd").value;
    write(selectedRow,selectedCol,texto)
})

document.getElementById("delete").addEventListener("click", function(){
    erase(selectedRow,selectedCol)
})

document.getElementById("paint").addEventListener("click", function(){
    var cor = document.getElementById("colorTd").value;
    paint(selectedRow,selectedCol,cor);
})



