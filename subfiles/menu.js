function menu(){
    const content = document.getElementById('content');

    const menu = document.createElement('h1');
    menu.setAttribute("id","menu");
    menu.innerHTML = "Menu";
    content.append(menu);


    const beverages = document.createElement("div");
    const header = document.createElement("h1");
    header.innerText ="Beverages";
    beverages.append(header);

    const bev1 = document.createElement('div');
    bev1.setAttribute("id","bev");
    const bevname1 = document.createElement("h2");
    bevname1.innerHTML = "Honey Tea";
    const about1 = document.createElement("p");
    about1.innerText = "A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!";
    const img1 = document.createElement("img");
    img1.setAttribute("src","images/honeytea.jpg");
    img1.setAttribute("id","img");
    bev1.append(bevname1);
    bev1.append(about1);
    bev1.append(img1);

    const bev2 = document.createElement('div');
    bev2.setAttribute("id","bev");
    const bevname2 = document.createElement("h2");
    bevname2.innerHTML = "Berry Tea";
    const about2 = document.createElement("p");
    about2.innerText = "A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.";
    const img2 = document.createElement("img");
    img2.setAttribute("src","images/berrytea.jpg");
    img2.setAttribute("id","img");
    bev2.append(bevname2);
    bev2.append(about2);
    bev2.append(img2);

    beverages.append(bev1);
    beverages.append(bev2);

    const main_items = document.createElement('div');
    const header1 = document.createElement('h1');
    header1.innerText = "Main Items";
    main_items.append(header1);

    const item1 = document.createElement('div');
    item1.setAttribute("id","item")
    const name1 = document.createElement('h2');
    name1.innerText = "French Toast";
    const des1 = document.createElement('p');
    des1.innerText = "Two slices of the best french toast you will ever eat, served with our locally sourced maple syrup.";
    const pic1 = document.createElement("img");
    pic1.setAttribute("id","img");
    pic1.setAttribute("src","images/frenchtoast.jpg");
    item1.append(name1);
    item1.append(pic1);
    item1.append(des1);

    const item2 = document.createElement('div');
    item2.setAttribute("id","item")
    const name2 = document.createElement('h2');
    name2.innerText = "Veg Sandwich";
    const des2 = document.createElement('p');
    des2.innerText = "Do you like vegetables? Then this is the sandwich for you! Stuffed full of a variety of fresh produce, it will fill you up.";
    const pic2 = document.createElement("img");
    pic2.setAttribute("id","img");
    pic2.setAttribute("src","images/sandwich.jpg");
    item2.append(name2);
    item2.append(pic2);
    item2.append(des2);

    const item3 = document.createElement('div');
    item3.setAttribute("id","item")
    const name3 = document.createElement('h2');
    name3.innerText = "Bagel and Lox";
    const des3 = document.createElement('p');
    des3.innerText = "Our house specialty, you can't go wrong with a hearty bagel topped with sustainably harvested salmon.";
    const pic3 = document.createElement("img");
    pic3.setAttribute("id","img");
    pic3.setAttribute("src","images/bagel.jpg");
    item3.append(name3);
    item3.append(pic3);
    item3.append(des3);

    main_items.append(item1);
    main_items.append(item2);
    main_items.append(item3);

    content.append(beverages);
    content.append(main_items);
}
export {menu};