/*Prompt the user to provide a password.

If the password is correct then add the class green to the text and remove the class transparent in order to show it.*/

let passwd = prompt("Enter Password : ", "your password here");
const myWord = "Souad";

myfunction = () => {
    if(passwd === myWord) {
        let p = document.querySelector('p');
        p.removeEventListener('change', "transparent"); 
        p.addEventListener('change', "green");
    }
}
