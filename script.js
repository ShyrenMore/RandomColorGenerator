combination_arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

var button = document.querySelector('.button');
var background_color = document.querySelector('body');
var hexcode = document.getElementById('hexcode');

background_color.style.backgroundColor = "rgba(70, 70, 70)";
button.addEventListener('click',work);

function work(){
    let col = '#';

    for (let i = 0; i < 6; i++)
    {
        let random = Math.floor(Math.random() * 16);    // int( num b/w 0 and 1 *10))
        col += combination_arr[random];
    }

    background_color.style.backgroundColor = col; 
    hexcode.innerHTML = col;
}