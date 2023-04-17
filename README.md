
# to-do-list

This project is a todo list with login and password verification, along with registration.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [How to run the code](#How-to-run-the-code)
  - [Author](#author)

## Overview

### Screenshot

![error_web](![image](https://user-images.githubusercontent.com/112407769/232366643-b2540dba-02e1-4fd3-bf44-8ac14a6b5c1b.png))
![search_web](![image](https://user-images.githubusercontent.com/112407769/232366756-348a4988-c1fa-44f7-9c8f-e0533d19f03e.png))
![search_mobile](![image](https://user-images.githubusercontent.com/112407769/232366865-273b4788-2a9d-42b9-9a6a-1560837df13a.png))



## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"/>
- javascript
- mobile first


### What I learned

```js


setTimeout(() => {
    window.location.href = "/login.html";
}, 1000)


function getSavedData() {
        let tasks_data = localStorage.getItem("tasks")
        tasks_data = JSON.parse(tasks_data);
  
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

```

### Continued development

```
Mobile first, clean code, refactoring.
```
### Useful resources

````
Google fonts
href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"/>

```

### How to run the code? 
````
Just download and run login.html :)
```


## Author
- LinkdIn - Alexandre Mariano(https://www.linkedin.com/in/alexandresouza31/)

