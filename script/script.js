// beginning  Register and Login pages

const link_login = document.querySelector(".link_login");
const section_register = document.querySelector(".section_register");
const link_register = document.querySelector(".link_register");
const section_login = document.querySelector(".section_login");

const name = document.querySelector(".name");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const confirm = document.querySelector(".confirm");
const email_login = document.querySelector(".email-login");
const password_login = document.querySelector(".password-login");

const btn_enter = document.querySelector(".btn_enter");
const btn_register = document.querySelector(".btn_register");

function validateRegisteredData() {

    if (name.value === "" && email.value === "" && password.value === "" && confirm.value === "") {
        alert("Os dados precisam ser preenchidos");
        return false;
    }
    if (name.value === "") {
        alert("O campo 'nome' precisa ser preenchido");
        return false;
    }
    if (email.value === "") {
        alert("O campo 'email' precisa ser preenchido");
        return false;
    }
    if (password.value === "") {
        alert("O campo 'senha' precisa ser preenchido");
        return false;
    }
    if (confirm.value === "") {
        alert("O campo 'confirme sua senha' precisa ser preenchido");
        return false;
    }
    if (password.value !== confirm.value) {
        alert("O campo 'senha' e 'confirme sua senha' não conferem");
        return false;
    }

    else {

        alert("usuário cadatrado com sucesso!!")
        //se já tiver uma lista, eu incremento, senão, cria uma lista vazia:
        let listUser = JSON.parse(localStorage.getItem("listUser") || "[]");
        listUser.push(
            {
                _nome: name.value,
                _email: email.value,
                _password: password.value,
            }
        )
        //já add no localStorage agora vou salvar:
        //agr é setItem(nome do meu campo,o que quero colocar)
        localStorage.setItem("listUser", JSON.stringify(listUser))
    }
}

function getData() {

}
function validateLoginData() {
    if (email_login.value === "" && password_login.value === "") {
        alert("Os dados precisam ser preenchidos");
        return false;
    }
    if (email_login.value === "") {
        alert("O campo 'email' precisa ser preenchido");
        return false;
    }
    if (password_login.value === "") {
        alert("O campo 'senha' precisa ser preenchido");
        return false;

    } else {


        let listUser = [];
        let userValid = {
            _name: "",
            _email: "",
            _password: "",
        }
        listUser = JSON.parse(localStorage.getItem("listUser"));
        console.log(listUser)
        listUser.forEach((item) => {

            if (email_login.value == item._email && password_login.value == item._password) {
                userValid = {
                    _name: item._name,
                    _email: item._email,
                    _password: item._password,
                }
            }
        });

        if (email_login.value == userValid._email && password_login.value == userValid._password) {
            alert("logou," + userValid._name + "!!");
        } else {
            alert("usuário ou senha incorretos")
            return false
        }

        return
    }
}


//como tenho várias páginas, preciso desse curto circuito pra que
// quando esteja em uma página que não contenha um botão de outr, por
//exemplo, não fique dando erro:
if (btn_register) {
    btn_register.addEventListener("click", (e) => {
        let valid = validateRegisteredData();
        e.preventDefault();
        if (valid === false) {
            return
        }
        //agr vou atrasar a ação de redirecionar pra que a mensagem apareça
        setTimeout(() => {
            window.location.href = "/index.html";
        }, 3000)//atraso de 3mil mile segundo 
    })
}




if (btn_enter) {
    btn_enter.addEventListener("click", (e) => {

        if (validateLoginData() === false) {
            return
        }
        setTimeout(() => {
            window.location.href = "/home.html";
        }, 3000)
    })
}
// end Register and Login pages
// home page


; (function () {
    "use strict"

    const item_input = document.querySelector(".item_input");
    const todo_container_form = document.querySelector(".todo_container_form");
    const ul = document.querySelector(".list");
    //const lis = document.getElementsByTagName("li");

    let arrTasks = [//a partir daqui vou criar as tarefas
        {
            name: "task 11",
            createTime: Date.now(),
            completed:false
        }
    ]

    function addEventLi(li) {
        li.addEventListener("click", function () {
            console.log(this)
        })
    }

    function generateLiTask(obj) {//cria a li dinamicamente
        const container = document.querySelector(".container");
        const li = document.createElement("li");
        const p = document.createElement("p");
        const check_btn = document.createElement("button");
        
        const edit_btn = document.createElement("i");
        const delete_btn = document.createElement("i");

        li.className = "todo-item";
        check_btn.className = "button-check";
        check_btn.innerHTML = '<i class="fas fa-check displayNone"></i>';
        check_btn.setAttribute("data-action", "check_btn");//atributo no check
        li.appendChild(check_btn);
        
        p.className = "task-name";
        p.textContent = obj.name;
        li.appendChild(p);
        
        edit_btn.className = "fas fa-edit";
        edit_btn.setAttribute("data-action", "edit_btn");
        li.appendChild(edit_btn);

        //container modal de editar e seus botões
        const backContainerEdit = document.createElement("div");
        backContainerEdit.className = "backContainerEdit";
        container.appendChild(backContainerEdit)

        const containerEdit = document.createElement("div");
        containerEdit.className = "containerEdit";

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
        backContainerEdit.appendChild(containerEdit);

        delete_btn.className = "fas fa-trash-alt";
        delete_btn.setAttribute("data-action", "delete_btn");
        li.appendChild(delete_btn);
        addEventLi(li);

        edit_btn.addEventListener("click", ()=>{
            backContainerEdit.style.display="block"
        })

        containerCancelBtn.addEventListener("click", ()=>{
            backContainerEdit.style.display="none"
        })

        return li;
    }

    

    function renderTasks() {
        ul.innerHTML = "";
        arrTasks.forEach(taskObj => {
            //agr vou add os itns do li gerados pela função generateLiTask,
            //e como ela espera um obj como parâmetro aqui passo o tasks:
            ul.appendChild(generateLiTask(taskObj));
        });
    }

    function addTask(task) {
        arrTasks.push({
            name: task,//task é a string que passei por param nessa função
            createTime: Date.now(),
            completed:false
        })
    }

    function clickedUl(e) {
        console.log(e.target)
        console.log(e.target.getAttribute("data-action"));
    }

    if (ul) {
        ul.addEventListener("click",clickedUl)
        
    

    todo_container_form.addEventListener("submit", (e) => {
        e.preventDefault();
        addTask(item_input.value);
        //após a arrTasks ser att preciso renderizar novamente pra mostrar a lista atualizada:
        renderTasks();
        item_input.value = "";
        item_input.focus();
    });

    renderTasks();
}
    }) ()
