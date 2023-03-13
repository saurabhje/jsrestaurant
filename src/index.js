console.log("Hello World");
import { pageload } from "../subfiles/home";
import { Contact } from "../subfiles/about_us";
import { menu } from "../subfiles/menu";

const content = document.getElementById('content');

const btn_div = document.createElement('div');
const home_btn = document.createElement('button');
const menu_btn = document.createElement('button');
const contact_btn = document.createElement('button');
btn_div.setAttribute('id','btn_div');

home_btn.setAttribute("id","btn1");
home_btn.innerText = "Home";

menu_btn.setAttribute("id","btn2");
menu_btn.innerText = "Menu";

contact_btn.setAttribute("id","btn3");
contact_btn.innerText = "Contact Us";

btn_div.append(home_btn);
btn_div.append(menu_btn);
btn_div.append(contact_btn);

content.append(btn_div);

pageload();

home_btn.addEventListener("click", ()=>{
    content.innerText ="";
    content.append(btn_div);
    pageload();
});

menu_btn.addEventListener("click",()=>{
    content.innerText ="";
    content.append(btn_div);
    menu();
});

contact_btn.addEventListener("click",()=>{
    content.innerText = "";
    content.append(btn_div);
    Contact();
});

