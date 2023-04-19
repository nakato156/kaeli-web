window.onload = init
let ejecucionCelda, resultadoCelda;

function init(){
    celdasNB = document.getElementById('contenEditor')
    const editor = configEditor('editor')
    ejecucionCelda = document.querySelector('.resultado')
    resultadoCelda = document.getElementById('resultado')
}

function configEditor(idEditor){
    const editor = ace.edit(idEditor);
    editor.setOptions({
        theme: 'ace/theme/monokai',
        mode: 'ace/mode/kaeli',
        maxLines: 30,
        mergeUndoDeltas: true,
        showGutter: true,
        tabSize: 4,
        tooltipFollowsMouse: true,
        useSoftTabs: true,
        vScrollBarAlwaysVisible: false,
        wrapBehavioursEnabled: true
    });
    editor.commands.removeCommand("gotoline")
    editor.setValue('#Kaeli\n')
    editor.gotoLine(2)
    editor.commands.addCommand({
        name:'executeCelda',
        bindKey: { win: 'Ctrl-enter', mac:'Command-enter'},
        exec: function(editor){
            ejecutarCelda(editor)
        }
    })
    return editor
}

function ejecutarCelda(editor){
    const codigo = editor.getValue()
    fetch('/ejecutar',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({codigo})
    })
    .then(res => res.json())
    .then(res => showResult(res.res))
    .catch(err => console.log(err))
}

function showResult(resultado){
    ejecucionCelda.classList.remove('hidden')
    resultadoCelda.innerHTML = resultado
}
    
