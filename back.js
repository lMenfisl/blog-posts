/*var a = 10;

var b = 15;


var r = a > b;
//объекты
var names = ['Vasa', 25, 'asdr@gmail.com'];


//масив
var user = {
    name: 'Pitya',
    age: 25,
    email: 'asdr@gmail.com',
}

console.log(user['name']);
//console.log(user.age);console.log(user['name']);одно и тоже
console.log(names);



/*ar a = +prompt('enter first number');
var o = prompt('enter +-/*');
var b = +prompt('enter second number');

var res = null;

if (o === "+") {
    res = a + b;
}
else if (o === "-") {
    res = a - b;
}
else if (o === "*") {
    res = a * b;
}
else if (o === "/") {
    res = a / b;
} else {
    alert('enter only *+/-');
}

if (res !== null) {
    alert('result: ' + res)
}*/

/* пропустит 'pitya'
var names = ['vasa', 'pitya', 'olia', 'anya'];
var sort=[];

for(var value of names){
    if(value === 'pitya'){
        continue;
    }
    sort.push(value);

}

console.log(sort)



при переходе на 'pitya' не продолжает пересчет
var names = ['vasa', 'pitya', 'olia', 'anya'];
var sort=[];

for(var value of names){
    if(value === 'pitya'){
        break;
    }
    sort.push(value);

}

console.log(sort)


добавляет значения в массив
var names = ['vasa', 'pitya', 'olia', 'anya'];


names.push('ann','pit');
console.log(names)


добавлени эдемента
var names = ['vasa', 'pitya', 'olia', 'anya'];


//names.push('ann', 'pit');

names.unshift('ann', 'pit');//добаляет в начале элемент


console.log(names)





/names.push('ann', 'pit');
//names.unshift('ann', 'pit');
//names.shift();
//names.pop();

//names.splice(1,2);

var newNames=names.slice(2,3);

console.log(newNames);



тернарный оператор
var b = 5;
var a = null;

if (b === 5) {
    a = b + 1;
} else {
    a = 10;
}

или

var a = b === 5 ? b+1 : 10;




var b = +prompt('Input value >0<100');
console.log(typeof b);
var res = b === 100 || b === 200;

if (res) {
    alert('good');
} else {
    alert('bad')
};
var names =['Vasa', 'Pitya', 'Anya','Olia'];

var list = document.getElementById('list-names');

var html='';

for(var name of names){
    html += '<li>' +name+ '</li>';
}

list.innerHTML = html;

console.log(html);



var a = 5;

function Parent(a) {
    var a = 8;
    function child(){
        var a = 10;
    }
};

Parent();
 

console.log(a)
*/