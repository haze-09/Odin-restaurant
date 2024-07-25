import blurImage from './images/webpack photu blur.png';

export default function loadAbout(){
    const content = document.querySelector('#content');

    let title = document.createElement('p');
    title.id='title';
    title.textContent = 'About';
    content.appendChild(title);

    let image = new Image();
    image.src = blurImage;
    content.appendChild(image);

    let about = document.createElement('p');
    about.textContent='Welcome to La Forchetta, where authentic Italian cuisine meets warm hospitality. Located in the heart of [City], our restaurant offers a delightful dining experience inspired by traditional recipes and fresh, high-quality ingredients. From homemade pastas and wood-fired pizzas to classic Italian desserts, every dish is crafted with passion and love. Join us for a taste of Italy and enjoy a memorable meal in our cozy, inviting atmosphere. Buon appetito!'
    about.id='about';
    content.appendChild(about);
    
};

