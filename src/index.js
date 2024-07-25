import loadHome from "./home.js";
import dombuilder from "./menu.js";



loadHome();

const loader = (function(){
    let home = document.querySelector('#homeButton');
    let menu = document.querySelector('#menuButton');
    let about = document.querySelector('#aboutButton');
    let content = document.querySelector('#content');


    function clear(content){
        content.innerHTML = "";
    };

    const start = ()=>{
        home.addEventListener('click',()=>{
            clear(content);
            loadHome();
        })
        menu.addEventListener('click',()=>{
            console.log('pizza');

            clear(content);
            dombuilder();
            // loadHome();
        })
        about.addEventListener('click',()=>{
            console.log('pizza');

            clear(content);
            // loadHome();
        })


        
    }

    return{start};

})();

loader.start();


