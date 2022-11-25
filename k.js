
th = document.querySelectorAll('[name="theme"]');
th.forEach((theme) => {
  theme.addEventListener("click", () => localStorage.setItem("theme", theme.id));
});

function app() {
  st = localStorage.getItem("theme");
  th.forEach((theme) => {
    if (theme.id === st) {
      theme.checked = true;
    }
  });
}
document.onload = app();

document.getElementById('sh').addEventListener("click",display);

function display(){
    var v=document.getElementById('search').value;
    request(v);
}
var data;
function request(s){
    const url="https://api.tvmaze.com/search/shows?q=";
    const xhr=new XMLHttpRequest;
    xhr.onload=function(){
        var c=document.getElementById('m');
        data=JSON.parse(this.response);
        data.forEach((d)=>{
            console.log(d.show.image.original);
            var im=d.show.image.original;
            var div=document.createElement('div');
        div.className='mov';
        div.innerHTML=`<img src="${im}" alt="">`;
        c.appendChild(div);
        })
    }
    xhr.onerror=function(){
        console.log('error');
    }
    xhr.open("GET",url+s);
    xhr.send();
    
}
