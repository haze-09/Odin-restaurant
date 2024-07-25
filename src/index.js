import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadAbout from "./about.js";



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
            loadMenu();
        })
        about.addEventListener('click',()=>{
            console.log('pizza');           

            clear(content);
            loadAbout();
        })


        
    }

    return{start};

})();

loader.start();


