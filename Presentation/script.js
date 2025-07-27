let xhr = new XMLHttpRequest()
console.log(xhr)

xhr.open("GET","https://api.github.com/users")
xhr.send()

xhr.onload = function(){
    console.log(JSON.parse(xhr.response))
    let data = JSON.parse(xhr.response);
    data.forEach(element => {
        console.log(element.login)
    });
}