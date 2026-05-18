const regEx = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$");
const string = "kenneth77@mail.cc";
console.log(regEx.test(string));