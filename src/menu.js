function menuItem(name,desc,price){
    return{name,desc,price};
}

function pizzaItem(name,desc,price8,price12){
    return{name,desc,price8,price12};
}


const menuArrays = (() =>{
    let pizza = [];
    let pasta = [];
    let beverages = [];
    let deserts = [];

    const builder= (food,name,desc,price1,price2)=>{
        switch (food) {
            case 'pizza':
                pizza.push(pizzaItem(name, desc, price1, price2));                
                break;
                
            case 'pasta':
                pasta.push(menuItem(name,desc,price1));
                break;

            case 'beverages':
                beverages.push(menuItem(name,desc,price1));
                break;

            case 'desserts':
                deserts.push(menuItem(name,desc,price1))
                break;
        
            default:
                break;
        }              
    };

    return{
        builder,

        get pizza(){
            return pizza;
        },

        get pasta(){
            return pasta;
        },

        get beverages(){
            return beverages;
        },

        get deserts(){
            return deserts;
        }
    };

})();

const menuMaker = (function(){
    const make = ()=>{
        menuArrays.builder('pizza', 'Margherita', 'A classic pizza topped with San Marzano tomatoes, fresh mozzarella, and basil.', 450, 550);
        menuArrays.builder('pizza', 'Pepperoni', 'Pizza with spicy pepperoni slices and mozzarella cheese.', 500, 600);
        menuArrays.builder('pizza', 'BBQ Chicken', 'Pizza topped with barbecue sauce, chicken, and onions.', 550, 650);
        menuArrays.builder('pizza', 'Veggie', 'Pizza loaded with bell peppers, onions, mushrooms, and olives.', 450, 550);
        menuArrays.builder('pizza', 'Hawaiian', 'Pizza with ham, pineapple, and mozzarella.', 500, 600);
        menuArrays.builder('pizza', 'Four Cheese', 'Pizza with mozzarella, cheddar, parmesan, and gorgonzola.', 600, 700);

        menuArrays.builder('pasta', 'Carbonara', 'Pasta with creamy sauce, pancetta, and Parmesan.', 350);
        menuArrays.builder('pasta', 'Bolognese', 'Rich meat sauce served over pasta.', 400);
        menuArrays.builder('pasta', 'Pesto', 'Pasta with a basil and pine nut pesto sauce.', 300);
        menuArrays.builder('pasta', 'Alfredo', 'Pasta in a creamy Alfredo sauce with chicken.', 450);
        menuArrays.builder('pasta', 'Arrabbiata', 'Spicy tomato sauce with garlic and red chili peppers.', 350);
        menuArrays.builder('pasta', 'Lasagna', 'Layered pasta with meat, cheese, and tomato sauce.', 500);

        menuArrays.builder('beverages', 'Coca-Cola', 'Refreshing soda.', 50);
        menuArrays.builder('beverages', 'Pepsi', 'Another popular soda.', 50);
        menuArrays.builder('beverages', 'Sprite', 'Lemon-lime flavored soda.', 50);
        menuArrays.builder('beverages', 'Fanta', 'Orange flavored soda.', 50);
        menuArrays.builder('beverages', 'Water', 'Pure bottled water.', 30);
        menuArrays.builder('beverages', 'Juice', 'Freshly squeezed orange juice.', 80);

        menuArrays.builder('desserts', 'Tiramisu', 'Classic Italian dessert with coffee and mascarpone.', 200);
        menuArrays.builder('desserts', 'Cheesecake', 'Rich and creamy cheesecake.', 250);
        menuArrays.builder('desserts', 'Brownies', 'Fudgy chocolate brownies.', 150);
        menuArrays.builder('desserts', 'Panna Cotta', 'Creamy vanilla panna cotta with berry sauce.', 180);
        menuArrays.builder('desserts', 'Gelato', 'Italian style ice cream in various flavors.', 220);
        menuArrays.builder('desserts', 'Macarons', 'Delicate French macarons in assorted flavors.', 180);

    };

    return{make};
    

})();

menuMaker.make();

export default function dombuilder(){
    
    const content = document.querySelector('#content');

    let title = document.createElement('p');
    title.id='title';
    title.textContent = 'Menu';
    
    content.appendChild(title);

    // span with buttons
    let span = document.createElement('span');

    let pizzaButton = document.createElement('button');
    pizzaButton.textContent = 'Pizza';
    span.appendChild(pizzaButton);

    let pastaButton = document.createElement('button');
    pastaButton.textContent = 'Pasta';
    span.appendChild(pastaButton);

    let beveragesButton = document.createElement('button');
    beveragesButton.textContent = 'Beverages';
    span.appendChild(beveragesButton);

    let dessertsButton = document.createElement('button');
    dessertsButton.textContent = 'Desserts';
    span.appendChild(dessertsButton);

    content.appendChild(span);


    // menu population
    let pizza = menuArrays.pizza;
    let pasta = menuArrays.pasta;
    let beverages = menuArrays.beverages;
    let desserts = menuArrays.deserts;

    let menu = document.createElement('div');
    menu.id='menu';
    content.appendChild(menu);

    function pizzaAdder(){
        pizza.forEach((item)=>{
            let name = document.createElement('p');
            let desc = document.createElement('p');
            let inch8 = document.createElement('p');
            let inch12 = document.createElement('p');
            let price8 = document.createElement('p');
            let price12 = document.createElement('p');
    
            let itemDiv = document.createElement('div');
            itemDiv.classList.add('item');
            
    
            name.textContent = item.name;
            desc.textContent = item.desc;
            inch8.textContent = '8"';
            inch12.textContent = '12"';
            price8.textContent = '₹' + item.price8;
            price12.textContent ='₹' + item.price12;
    
            itemDiv.appendChild(name);
            itemDiv.appendChild(desc);
            itemDiv.appendChild(inch8);
            itemDiv.appendChild(price8);
            itemDiv.appendChild(inch12);
            itemDiv.appendChild(price12);
    
            menu.appendChild(itemDiv);     
        })
    }

    function itemAdder(item){
        let name = document.createElement('p');
            let desc = document.createElement('p');
            let price = document.createElement('p');
            let rupees = document.createElement('p');
    
            let itemDiv = document.createElement('div');
            itemDiv.classList.add('item');
            
    
            name.textContent = item.name;
            desc.textContent = item.desc;
            price.textContent = 'Price';
            rupees.textContent = '₹' + item.price;
    
            itemDiv.appendChild(name);
            itemDiv.appendChild(desc);
            itemDiv.appendChild(price);
            itemDiv.appendChild(rupees);
    
            menu.appendChild(itemDiv);   
    }

    pizzaAdder();

    // event listeners

    pizzaButton.addEventListener('click',()=>{
        menu.innerHTML = "";
        pizzaAdder();
    })

    pastaButton.addEventListener('click',()=>{
        menu.innerHTML = "";
        pasta.forEach((item)=>{
            itemAdder(item);            
        })
    })

    beveragesButton.addEventListener('click',()=>{
        menu.innerHTML = "";
        beverages.forEach((item)=>{
            itemAdder(item);
        })
    })

    dessertsButton.addEventListener('click',()=>{
        menu.innerHTML = "";
        desserts.forEach((item)=>{
            itemAdder(item);
        })
    })   

};





