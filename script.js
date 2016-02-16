// Your JS goes here
var body = document.getElementsByTagName('body')[0];


for (var i = 0; i < 81; i++) {
var div1 = document.createElement('div');
div1.style.width = '11.1%';
div1.style.cssFloat = 'left';
div1.style.paddingBottom = '11.1%';
div1.style.backgroundColor = 'black';
body.appendChild(div1);

var div2 = document.createElement('div');
div2.style.width = '11.1%';
div2.style.cssFloat = 'left';
div2.style.paddingBottom = '11.1%';
div2.style.backgroundColor = 'red';
body.appendChild(div2);
}
