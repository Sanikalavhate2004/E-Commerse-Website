const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar){
    bar.addEventListener('click', ()=>{
        nav.classList.add('active');
    })
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

// const product = [
//   {
//     id:0,
//     image: 'images/western1.jpg',
//     title: 'Jumpsuit',
//     price: $80
//   },
//   {
//     id:1,
//     image: 'images/western2.jpg',
//     title: 'Jumpsuit',
//     price: $80
//   },
//   {
//     id:2,
//     image: 'images/western3.jpg',
//     title: 'Jumpsuit',
//     price: $80
//   },
//   {
//     id:3,
//     image: 'images/western4.jpg',
//     title: 'Jumpsuit',
//     price: $80
//   },
//   {
//     id:4,
//     image: 'images/western5.jpg',
//     title: 'Jumpsuit',
//     price: $80
//   },
//   {
//     id:5,
//     image: 'images/western6.jpg',
//     title: 'Jumpsuit',
//     price: $80
//   }
// ]; 
// const categories = [...new Set(product.map((item)=>
//   {return item}))]
//   let i=0;
// document.getElementById('root').innerHTML = categories.map((item)=>
// {
//   var {image, title, price} = item;
//   return(
//     `<div class='box'>
//     <div class='img-box'>`
//   )
// })

