//Juan Ruiz Valencia
//My IIFE:

window.onload = (function () {
    let dterm = document.getElementById('DefTerm');
    let ddefinition = document.getElementById('DefDefinition');
    let btnDef = document.getElementById('btnAddDef');
    let defList = document.getElementById('DefList');
    
    let dictDef = {};

    btnDef.onclick = () => {
        addTerms();
    };

    btnDef.onmouseenter = () => {
        if(dterm.value == "" ){
            alert('Term Cannot be Empty!');
        }
        if(ddefinition.value == ""){
            alert('Definition Cannot be Empty!')
        }
    };

    dterm.onkeypress = (e) => {
        handleKeyPress(e);
    };

    ddefinition.onkeypress = (e) =>{
        handleKeyPress(e);
    };

    function handleKeyPress(e){
        if(e.keyCode == 13){
            addTerms();
            clearInput();
        }
    }   

    function clearInput(){
        dterm.value = "";
        ddefinition.value = ""
    }

    function addTerms(){
        if(dterm.value == "" ){
            alert('Term Cannot be Empty!');
        }
        if(ddefinition.value == ""){
            alert('Definition Cannot be Empty!')
        }
        else if(dterm.value != "" && ddefinition.value != ""){
            dictDef[dterm.value] = ddefinition.value
            let dter = document.createElement('dt');
            dter.innerText = dterm.value
            let ddef = document.createElement('dd');
            ddef.innerText = ddefinition.value
            defList.appendChild(dter);
            defList.appendChild(ddef)
        }
    }

 });