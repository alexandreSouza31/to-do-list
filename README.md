
# to-do-list

This project is a to do list with login and password verification, along with registration.

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

![todo-login](https://user-images.githubusercontent.com/112407769/232369161-4e4e7984-ec5c-4753-b13f-745a74feb563.png)
![todo-web](https://user-images.githubusercontent.com/112407769/232369166-c6d3dc71-0992-4632-8df0-3036dbe5383f.png)
![todo-mobile](https://user-images.githubusercontent.com/112407769/232369170-c32f05ca-4673-406b-a626-1d979cb6fc10.png)



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

//function that delays redirection to another page:
setTimeout(() => {
    window.location.href = "/login.html";
}, 1000)


//function to save data to localstorage:

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

//function to modify data in localstorage:
    function setNewData() {
        localStorage.setItem("tasks", JSON.stringify(arrTasks))
    }

```

### Continued development

```
Mobile first, localStorage, clean code, refactoring.
```
### Useful resources

```
Google fonts
https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"/
```

### How to run the code? 
```
Click the green button to download the code files to your PC and run the index.html file.

Or open it in deploy to test the features: https://to-do-list-ten-bay.vercel.app/

:)


```
## Author
- LinkdIn - Alexandre Mariano(https://www.linkedin.com/in/alexandresouza31/)

