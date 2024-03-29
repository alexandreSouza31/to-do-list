; (function () {
    "use strict"
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

    
    const eye = document.querySelector(".material-symbols-outlined");
    if (eye) {
        eye.addEventListener("click", () => {
        if (eye.textContent === "visibility") {
            eye.textContent = "visibility_off";
            password_login.setAttribute("type", "text");
            
        } else {
            eye.textContent = "visibility"
            password_login.setAttribute("type", "password");
        }
    })
    }
    

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
        if (password.value.length < 6) {
            alert("O campo 'senha' precisa ter no mínimo 6 caracteres");
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

    if (section_register || section_login) {
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
                console.log(listUser);
                if (!listUser) {
                    alert("Usuário não cadastrado!")
                    return false;
                }
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
                    alert("Entrando...");

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
                }, 1000)//atraso de 3mil mile segundo 
            })
        }


        if (btn_enter) {
            btn_enter.addEventListener("click", (e) => {

                if (validateLoginData() === false) {
                    return
                }
                setTimeout(() => {
                    window.location.href = "/home.html";
                }, 2000)
            })
        }
    }





})()
