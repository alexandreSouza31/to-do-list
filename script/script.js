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
    const lis = document.getElementsByTagName("li");

    function addTask(task) {
        const li = document.createElement("li");
        li.className = "todo-item";
        const p = document.createElement("p");
        p.className = "task-name";
        p.textContent = task;
        li.appendChild(p);
        ul.appendChild(li);

        li.addEventListener("click", function (e) {
            console.log(this)
        })
    }

    todo_container_form.addEventListener("submit", (e) => {
        e.preventDefault();
        addTask(item_input.value);
        
        item_input.value = "";
        item_input.focus();
    });

    [...lis].forEach(element => {
        element.addEventListener("click", function(e) {
            console.log(this)
        })
    });

})()