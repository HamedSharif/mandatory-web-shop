let soffa = [];

soffa[0] = new Product("Klippan", "1790 kr/st", "2-sits soffa", "image/klippan.jpg");
soffa[1] = new Product("Karlstad", "2495 kr/st", "3-sits soffa ", "image/karlstad.jpg");
soffa[2] = new Product("Kivik", "2995 kr/st", "3-sits soffa ", "image/kivik.jpg");
soffa[3] = new Product("Ektorp", "3495 kr/st", "3-sits soffa ", "image/ektorp.jpg");
soffa[4] = new Product("Vimle", "4595 kr/st", "3-sits soffa ", "image/vimle.jpg");

function soffor()

{   let home =  "  <button type=\"button\" class=\"btn\"><a href='index.html' >home</a></button>\n";
    document.write(home)

    let checkout =  "  <button type=\"button\" class=\"btn\"><a href='checkout.html'>checkout</a></button>\n";
    document.write(checkout)

    for(let i=0;i < soffa.length;i++)
    {
        let h3 = document.createElement("h3");
        let productName = document.createTextNode(soffa[i].productName);
        h3.appendChild(productName);
        document.body.appendChild(h3);



        let h5 = document.createElement("h5");
        let price = document.createTextNode(soffa[i].price);
        h5.appendChild(price);
        document.body.appendChild(h5);


        let p = document.createElement("p");
        let description = document.createTextNode(soffa[i].description);
        p.appendChild(description);
        document.body.appendChild(p);

        let img = document.createElement("img");
        img.setAttribute("src", soffa[i].imageUrl);

        document.body.appendChild(img);




        document.body.style.backgroundColor="#999"
        document.body.style.textAlign="center"
        h3.style.color = "green";
        h3.style.alignContent = "center";
        img.style.borderRadius = "50%"

    }
}


function Product(productName, price, description, imageUrl)
{
    this.productName = productName;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
}



