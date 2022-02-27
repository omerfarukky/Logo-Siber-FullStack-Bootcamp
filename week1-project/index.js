const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const xhr = new XMLHttpRequest();

const url = "https://jsonplaceholder.typicode.com/users";

xhr.open("GET", url, true);

xhr.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    const users = JSON.parse(xhr.responseText);
    console.log(users);
  }
};
xhr.send();
