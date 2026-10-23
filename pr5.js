const colors=['red','blue','yellow','green','black'];
const hakos = [];
for(let i=0; i<5; i++){
const hako=document.createElement('div');
hako.style.width='100px';
hako.style.height='100px';
hako.style.margin='10px';
hako.style.transform='translateX(200px)';
hako.style.position = 'absolute';
  hako.style.top = (i * 110 + 10) + 'px';
const randomIndex = Math.floor(Math.random() * colors.length);
  hako.style.backgroundColor = colors[randomIndex];

document.body.append(hako);
hakos.push(hako);
}

let x = 0; 

function animate() {
  x += 2; 

  hakos.forEach(hako => {
    hako.style.left = x + 'px';
  });

  if (x < window.innerWidth - 100) {
    requestAnimationFrame(animate);
  }
}
animate();