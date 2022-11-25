const url='http://api.tvmaze.com/search/shows?q=:query';

function changeBackground(color){
    document.body.style.backgroundColor = color;
    let check = document.getElementsByClassName("text");
    if(color=='#000000'){
        for(let ele of check){
            ele.style.color = "white";
        }
    }
    else{
        for(let ele of check){
            ele.style.color = "black";
        }
    }
}

let fetchBtn=document.getElementById('fetchBtn');
fetchBtn.addEventListener('click',function(){
    const xhrO=new XMLHttpRequest();
    let inputB=document.getElementById('input');
    if(inputB.value=='')
    {
        alert("Enter something");
    }
    else{
        xhrO.open('GET',url);
    xhrO.onload=function(){
        // console.log(this.responseText.show);
        let obj=JSON.parse(this.responseText);
        console.log(obj);
        str="";
        for (key in obj)
        {
            str=str+`<image src="${obj[key].show.image.medium}">`
        }
        let addimg=document.getElementById('addImg');
        addimg.innerHTML=str;
        console.log(obj[key].show.image.medium);
    }

    xhrO.send();
    }
    
})