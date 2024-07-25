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

            case 'deserts':
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





