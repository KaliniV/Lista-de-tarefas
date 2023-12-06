const localStoragekey = "lista-de-tarefas"

function validacaoexistente() {
    let values = JSON.parse(localStorage.getItem(localStoragekey) || '[]')
    let inputvalor = document.getElementById('input-new-task').value
    let exists = values.find(x => x.name == inputvalor);
    return !exists ? false : true
}


function novaTarefa() {
    let input = document.getElementById('input-new-task')
    input.style.border = ''
    if (!input.value) {
        input.style.border = '1px solid red'
        alert("Digite algo para inserir em sua lista!")
    }
    else if (validacaoexistente()) {
        alert('Já existe uma tarefa com essa descrição!')
    }
    else {
        //incrementando array 
        let values = JSON.parse(localStorage.getItem(localStoragekey) || '[]')
        values.push({
            name: input.value
        })
        localStorage.setItem(localStoragekey, JSON.stringify(values))
        showValues()
    }

    input.value = ''
}
//mostrar valores 
function showValues() {
    let values = JSON.parse(localStorage.getItem(localStoragekey) || '[]')
    let list = document.getElementById('lista')
    list.innerHTML = ''
    for (let i = 0; i < values.length; i++) {
        list.innerHTML += `<li>${values[i]['name']}<button id ='btn-ok' onclick = 'removeItem("${values[i]['name']}")'>✔</button></li>`

    }
}
function removeItem(data) {
    let values = JSON.parse(localStorage.getItem(localStoragekey) || '[]')
    let index = values.findIndex(x => x.name == data);
    values.splice(index, 1)
    localStorage.setItem(localStoragekey, JSON.stringify(values))
    showValues()
}

showValues()