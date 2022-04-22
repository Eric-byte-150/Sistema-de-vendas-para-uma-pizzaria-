'use strict'
// Criando as variáveis principais
let somaMussarela=0
let somaMista=0
let somaCalabresa=0
let vendaMussarela=0.00
let vendaMista=0.00
let vendaCalabresa=0.00

let btnVendas = document.getElementById('vendas')
let btnEstorno= document.getElementById('estorno')
let btnPlanilha = document.getElementById('export')
let btnAdicionar=document.getElementById('Adicionar')

//eventos
btnVendas.addEventListener('click',venda,false)
btnEstorno.addEventListener('click',estorno,false)
btnPlanilha.addEventListener('click',planilha,false)
btnAdicionar.addEventListener('click',Adicionar,false)


//Funções de venda e estorno
function venda(e) {
    if (document.getElementById('mussarela').checked) {
        somaMussarela=somaMussarela+1
        vendaMussarela=vendaMussarela+25.00
        document.getElementById('resultadoMussarela').innerHTML=somaMussarela
        document.getElementById('vendasMussarela').innerHTML=vendaMussarela.toFixed(2)
        

        
    }else if(document.getElementById('mistas').checked){
        somaMista=somaMista+1
        vendaMista=vendaMista+25.00
        document.getElementById('resultadoMista').innerHTML=somaMista
        document.getElementById('vendasMistas').innerHTML=vendaMista.toFixed(2)


    }
    else if(document.getElementById('calabresa').checked){
        somaCalabresa=somaCalabresa+1
        vendaCalabresa=vendaCalabresa+25.00
        document.getElementById('resultadoCalabresa').innerHTML=somaCalabresa
        document.getElementById('vendasCalabresa').innerHTML=vendaCalabresa.toFixed(2)


    }
    else if(document.getElementById('newpizza').checked){
        somaCalabresa=somaCalabresa+1
        vendaCalabresa=vendaCalabresa+25.00
        document.getElementById('novo').innerHTML=somaCalabresa
        document.getElementById('novo1').innerHTML=vendaCalabresa.toFixed(2)

       
    }
}
function estorno(e) {
    if (document.getElementById('mussarela').checked) {
        somaMussarela=somaMussarela-1
        vendaMussarela=vendaMussarela-25.00
        document.getElementById('resultadoMussarela').innerHTML=somaMussarela
        document.getElementById('vendasMussarela').innerHTML=vendaMussarela.toFixed(2)
        if (somaMussarela<0) {
            somaMussarela=0+1
            vendaMussarela=0.00+25.00
        }

        
    }else if(document.getElementById('mistas').checked){
        somaMista=somaMista-1
        vendaMista=vendaMista-25.00
        document.getElementById('resultadoMista').innerHTML=somaMista
        document.getElementById('vendasMistas').innerHTML=vendaMista.toFixed(2)
        if (somaMista<0) {
            somaMista=0+1
            vendaMista=0.00+25.00
        }


    }
    else if(document.getElementById('calabresa').checked){
        somaCalabresa=somaCalabresa-1
        vendaCalabresa=vendaCalabresa-25.00
        document.getElementById('resultadoCalabresa').innerHTML=somaCalabresa
        document.getElementById('vendasCalabresa').innerHTML=vendaCalabresa.toFixed(2)
        if (somaCalabresa<0) {
            somaCalabresa=0+1
            vendaCalabresa=0.00+25.00
        }


    }
    else if(document.getElementById('newpizza').checked){
        somaCalabresa=somaCalabresa-1
        vendaCalabresa=vendaCalabresa-25.00
        document.getElementById('novo').innerHTML=somaCalabresa
        document.getElementById('novo1').innerHTML=vendaCalabresa.toFixed(2)
        if (somaCalabresa<0) {
            somaCalabresa=0+1
            vendaCalabresa=0.00+25.00
        }

       
    }

}
//Função que converte a tabela em planilha
function planilha(e) {
    TableToExcel.convert(document.getElementById('table'))
    
}
//Função para adiconar uma nova pizzza
function Adicionar() {
    var ul=document.getElementById("ul")
    var li=document.createElement("li")
    var label=document.createElement("label")
    var input=document.createElement("input")
    input.setAttribute("type","radio")
    input.setAttribute("name","pizzas")
    input.setAttribute("id","newpizza")
    

    var texto=document.getElementById("por").value
    if (texto==="") {
        alert("Não pode adicionar um sabor vazio")
        window.location="file:///C:/Users/Admim/Desktop/Projeto%20pizaaria%20com%20exce/index.html"
       
    }
    label.textContent=texto
    //filhos:
ul.appendChild(li)
li.appendChild(input)
li.appendChild(label)
var table=document.getElementById("tableUse")
var tr=document.createElement("tr")
var td=document.createElement("td")
table.appendChild(tr)
td.textContent=texto
var p =document.createElement("td")
var td1=document.createElement("td")
tr.appendChild(td)
tr.appendChild(p)
tr.appendChild(td1)


p.setAttribute("id","novo")
td1.setAttribute("id","novo1")


}