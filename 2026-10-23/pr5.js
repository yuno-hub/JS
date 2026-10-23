const colors=['red','blue','yellow','green','black'];
for(let i=0; i<5; i++){
const hako=document.createElement('div');
hako.style.width='100px';
hako.style.height='100px';
hako.style.margin='10px';
hako.style.transform='translateX(200px)';
const randomIndex = Math.floor(Math.random() * colors.length);
  hako.style.backgroundColor = colors[randomIndex];

document.body.append(hako);
}
