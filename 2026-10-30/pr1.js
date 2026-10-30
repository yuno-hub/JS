const news=["鶏","加工","チキン"];
const ul=document.getElementById('mylist');
for(let i=0;i<news.length;i++){
const li=document.createElement('li');
li.textContent=news[i];
ul.appendChild(li);
}