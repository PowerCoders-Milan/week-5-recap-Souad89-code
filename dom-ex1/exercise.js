/*Create a function that, when the button is clicked, takes the text in the input box
 and creates a p tag with the input text inside.*/

addText=()=> {
  let para = document.createElement('p');
  let myText = document.getElementById('useTxt').value;
  let node = document.createTextNode(myText);
  para.appendChild(node); 
  document.body.appendChild(para); 
}
