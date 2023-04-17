// home page
; (function () {
    "use strict"

    const item_input = document.querySelector(".item_input");
    const todo_container_form = document.querySelector(".todo_container_form");
    const ul = document.querySelector(".list");
    const lis = ul.getElementsByTagName("li");

    let arrTasks = getSavedData();

    function getSavedData() {
        let tasks_data = localStorage.getItem("tasks")
        tasks_data = JSON.parse(tasks_data);
    
        //preciso tratar caso não tenha array, e se por acaso o usuário
        //limpar o localStorage aparecerá um erro de length. Pra isso
        //além de verificar se há tasks_data.length ,verifico se há tbm tasks_data:
        return tasks_data && tasks_data.length ? tasks_data : [
            {
                name: "tarefa exemplo",
                createTime: Date.now(),
                completed: false
            }
        ]
    }

    function setNewData() {
        localStorage.setItem("tasks", JSON.stringify(arrTasks))
    }

    setNewData()
    const container = document.querySelector(".container");

    //criação do container modal de editar e seus botões

    const backContainerEdit = document.createElement("div");
    backContainerEdit.className = "backContainerEdit";
    container.appendChild(backContainerEdit);
    const containerEdit = document.createElement("div");
    containerEdit.className = "containerEdit";
    backContainerEdit.appendChild(containerEdit);

    const inputEdit = document.createElement("input");
    inputEdit.setAttribute("type", "text");
    inputEdit.className = "inputEdit";
    containerEdit.appendChild(inputEdit);

    const containerEditBtn = document.createElement("button");
    containerEditBtn.className = "containerEditBtn";
    containerEditBtn.textContent = "Edit";
    containerEditBtn.setAttribute("data-action", "containerEditBtn");
    containerEdit.appendChild(containerEditBtn);

    const containerCancelBtn = document.createElement("button");
    containerCancelBtn.className = "containerCancelBtn";
    containerCancelBtn.textContent = "Cancel";
    containerCancelBtn.setAttribute("data-action", "containerCancelBtn");
    containerEdit.appendChild(containerCancelBtn);
    // fim criação do container modal de editar e seus botões


    function generateLiTask(obj) {//cria a li dinamicamente

        const li = document.createElement("li");
        const p = document.createElement("p");
        const check_btn = document.createElement("button");

        const edit_btn = document.createElement("i");
        const delete_btn = document.createElement("i");

        li.className = "todo-item";
        check_btn.className = "button-check";
        check_btn.innerHTML = `<i class="fas fa-check ${obj.completed ? "" : "displayNone"}" data-action="check_btn"></i>`;
        check_btn.setAttribute("data-action", "check_btn");//atributo no check
        li.appendChild(check_btn);

        p.className = "task-name";
        p.textContent = obj.name;
        li.appendChild(p);

        edit_btn.className = "fas fa-edit";
        edit_btn.setAttribute("data-action", "edit_btn");
        li.appendChild(edit_btn);

        delete_btn.className = "fas fa-trash-alt";
        delete_btn.setAttribute("data-action", "delete_btn");
        li.appendChild(delete_btn);

        backContainerEdit.appendChild(containerEdit);
        return li;
    }

    function renderTasks() { //agr vou add os itens do li gerados pela função generateLiTask,
        //e como ela espera um obj como parâmetro aqui passo o tasks:

        ul.innerHTML = "";
        arrTasks.forEach(taskObj => {
            ul.appendChild(generateLiTask(taskObj));
        });
    }

    function addTask(task) {
        arrTasks.push({
            name: task,//task é a string que passei por param nessa função
            createTime: Date.now(),
            completed: false
        })
        setNewData();
    }

    function clickedUl(e) {

        const dataAction = e.target.getAttribute("data-action");

        if (!dataAction) return;

        let currentLi = e.target;
        while (currentLi.nodeName !== "LI") {
            currentLi = currentLi.parentElement;
        }

        const currentLiIndex = [...lis].indexOf(currentLi);//pra pegar o índice atual do clicado
        let inputModal = document.querySelector(".inputEdit");

        const actions = {

            edit_btn: function () {
                inputModal.value = arrTasks[currentLiIndex].name;
                backContainerEdit.style.display = "block";
            },

            delete_btn: () => {

                //a partir do index atual do currentLiIndex vou escluir 1 elemento:
                arrTasks.splice(currentLiIndex, 1);//remove 1
                alert(`O item foi excluído com sucesso!`);
                renderTasks();//atualiza e mostra sem o deletado
                setNewData();
            },
            containerEditBtn: () => {
                const currentLiIndex = [...lis].indexOf(currentLi);
                backContainerEdit.style.display = "none";
                
                arrTasks[currentLiIndex].name = inputModal.value;
                renderTasks();
                setNewData();

            },

            containerCancelBtn: () => {
                backContainerEdit.style.display = "none";
            },

            check_btn: () => {
                arrTasks[currentLiIndex].completed = !arrTasks[currentLiIndex].completed;
                setNewData();
                renderTasks()
            }
        }
        if (actions[dataAction]) {
            const editModal = document.querySelector(".containerEditBtn");
            editModal.addEventListener("click", () => {
                actions["containerEditBtn"]();
            });

            const cancelModal = document.querySelector(".containerCancelBtn");
            cancelModal.addEventListener("click", () => {
                actions["containerCancelBtn"]();
            });

            actions[dataAction]();
        }
    }


    if (ul) {
        ul.addEventListener("click", clickedUl);

    }
    const btn_add = document.querySelector(".btn_add")
    btn_add.addEventListener("click", (e) => {
        e.preventDefault();
        addTask(item_input.value);
        //após a arrTasks ser att preciso renderizar novamente pra mostrar a lista atualizada:
        renderTasks();
        item_input.value = "";
        item_input.focus();
    });

    renderTasks();

})()