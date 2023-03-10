function pageload(){
    const content = document.getElementById('content');


    const name = document.createElement('h1');
    name.setAttribute("id","resname");
    name.innerHTML = "The Real Indie Taste";


    const about_div = document.createElement('div');
    about_div.setAttribute("id","about_div");
    
    const about_head = document.createElement('h2');
    const about_description = document.createElement("p");
    about_head.setAttribute("id","about_head");
    about_description.setAttribute("id","about_description");
    about_head.innerHTML = "Who we are";
    about_description.innerHTML = "The best and most loved indie restaurant in India, we have outlets all over the India. Most loved menu items in Essex farms. Worth trying the same. Essex is known for its hygiene and delicious food items. One can try a variety of food and can also make their special occasions more memorable with Essex."
    about_div.append(about_head);
    about_div.append(about_description);
    
    let image = document.createElement("img");
    image.setAttribute("id", "image");
    image.setAttribute("src", "images/logo.jpg");


    content.append(name);
    content.append(about_div);
    content.append(image);
}
export {pageload};