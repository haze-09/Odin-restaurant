import greenImage from './images/webpack photu green.png';

export default function loadHome(){
    const content = document.querySelector('#content');

    let title = document.createElement('p');
    title.id='title';
    title.textContent = 'La Forchetta';
    content.appendChild(title);

    let image = new Image();
    image.src = greenImage;
    content.appendChild(image);
};

