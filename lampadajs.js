
var lampadaONN=document.getElementById('lampadaONN')
var lampadaOFF=document.getElementById('lampadaOFF')
var bnton= document.getElementById('ONN')
var bntoff=document.getElementById('OFF')
var sala=document.getElementById('sala')

sala.style.backgroundColor="black"
bntoff.style.display="none"
lampadaONN.style.display="none"

function ligar(){
    bnton.style.display="none"
    bntoff.style.display=""
    sala.style.backgroundColor="aliceblue"
    lampadaOFF.style.display="none"
    lampadaONN.style.display=""
    
}

function desligar(){
    bntoff.style.display="none"
    bnton.style.display=""
    sala.style.backgroundColor="black"
    lampadaONN.style.display="none"
    lampadaOFF.style.display=""
}





