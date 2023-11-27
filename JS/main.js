let burger = document.getElementById("Burger");
let nav = document.getElementById('Nav');
let navs = document.getElementsByTagName('a');
let body = document.getElementsByTagName('body')[0];

burger.onclick = (()=>{
    burger.classList.toggle('Active');
    nav.classList.toggle('Active');
    body.classList.toggle('NoScroll')
})

for(let i=0;i<navs.length;i++)
{
    navs[i].onclick = (()=>{
        burger.classList.remove('Active');
        nav.classList.remove('Active');
        body.classList.remove('NoScroll')
    })
}

