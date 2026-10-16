const a=1;
const b=2;
console.log(a+b);

const c='私は';
const d='人間です';
console.log(c+d);

function ab(a,b){
    console.log(a+b);
}
ab(1,2);

function cd(c,d){
    console.log(c+d);
}
cd('私は','人間です');

let person={
    name:'田中',
    age:'21',
    height:'176'
}
person.name
person.age
person.height

function showperson(p){
    console.log(p.name);
    console.log(p.age);
    console.log(p.height);
    let str=`${p.name}で${p.age}です。身長は${p.height}です。`;
    console.log(str);
}
showperson(person);

let photo={
    File:aaa.jpg,
    text:'aaaの説明',
}
console.log(photo.File);
console.log(photo.text);

const img1=document.createElement('img')
