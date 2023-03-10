function Contact(){

const content = document.getElementById("content");

const header = document.createElement('h1');
header.innerText = "Contact Us";

const execs = document.createElement("div");

const exec1 = document.createElement('div');
const name1 = document.createElement('h2');
name1.innerText = "Kremlin Chad";
const img1 = document.createElement("img");
img1.setAttribute("src","images/chad1.jpg");
img1.setAttribute("id","eximg1");
const post1 = document.createElement("p");
const cnt1 = document.createElement("p");
const mail1 = document.createElement("p");
post1.innerText = "CEO";
cnt1.innerText = "6900-0999-288";
mail1.innerText = "Kremlin@russia.org";

exec1.append(name1);
exec1.append(img1);
exec1.append(post1);
exec1.append(cnt1);
exec1.append(mail1);

const exec2 = document.createElement('div');
const name2 = document.createElement('h2');
name2.innerText = "Janitor Xi";
const img2 = document.createElement("img");
img2.setAttribute("src","images/mid1.jpg");
img2.setAttribute("id","eximg2");
const post2 = document.createElement("p");
const cnt2 = document.createElement("p");
const mail2 = document.createElement("p");
post2.innerText = "Janitor";
cnt2.innerText = "1000-1000-1000";
mail2.innerText = "Midpressident@china.simpli.org";

exec2.append(name2);
exec2.append(img2);
exec2.append(post2);
exec2.append(cnt2);
exec2.append(mail2);


const exec3 = document.createElement('div');
const name3 = document.createElement('h2');
name3.innerText = "CM Chad";
const img3 = document.createElement("img");
img3.setAttribute("src","images/chad2.jpg");
img3.setAttribute("id","eximg3");
const post3 = document.createElement("p");
const cnt3 = document.createElement("p");
const mail3 = document.createElement("p");
post3.innerText = "CFO";
cnt3.innerText = "69000-0999-288";
mail3.innerText = "CMYOGi@ArayaVrat.org";

exec3.append(name3);
exec3.append(img3);
exec3.append(post3);
exec3.append(cnt3);
exec3.append(mail3);

execs.append(exec1);
execs.append(exec2);
execs.append(exec3);

content.append(header);
content.append(execs);
}
export {Contact};