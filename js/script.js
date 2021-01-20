
// var form = document.getElementsByClassName("create_theme")[0];
// function handleForm(event){ event.preventDefault(); }
// form.addEventListener('submit', handleForm);


changeTheme = (name) => {

    var id = "content-info-" + name;
    var content = document.getElementById(id).innerHTML;
    var arr = content.split(",");
    
    document.documentElement.style.setProperty('--primary-bg-color',arr[1]);
    document.documentElement.style.setProperty('--primary-font-color',arr[2]);

    document.documentElement.style.setProperty('--btn-bg-color',arr[3]);
    document.documentElement.style.setProperty('--btn-font-color',arr[4]);

}

createTheme = () => {

    var inputs = document.querySelector(".create_theme").querySelectorAll("input");
    var themes = "";
    var c = 0;
    inputs.forEach(input => {
        c = c + 1;
        if(input.value.trim() != ""){
            themes = themes + input.value.trim() + (c < 5 ? ",":"");
            input.value = "";
        }else{
            console.log("error");
            throw new Error;
        }
        
    })

    var theme_name = themes.split(",")[0];

    //creating card content
    var p = document.createElement("p");
    p.setAttribute("id","content-info-" + theme_name.toLowerCase());
    p.setAttribute("style","display: none;");
    p.innerText = themes;
    var button = document.createElement("button");
    button.setAttribute("id","btn");
    // button.setAttribute("type","button");
    button.setAttribute("class","btn");
    button.setAttribute("onclick","changeTheme('" + theme_name.toLowerCase() + "')");
    button.innerText = theme_name;

    header = document.createElement("p");
    header.innerText = theme_name + " Theme";
    

    // adding to card content div
    var card_content = document.createElement("div");
    card_content.setAttribute("class","card-body");
    card_content.appendChild(header);
    card_content.appendChild(p);
    card_content.appendChild(button);

    // card creation
    var card = document.createElement("div");
    card.setAttribute("id", "theme-div-boarder");
    card.setAttribute("class", "card");
    card.appendChild(card_content);
    var divcard = document.querySelectorAll(".container")[0].appendChild(card);

    document.querySelector(".close").click();    
    // divcard.setAttribute("class", "card");

}