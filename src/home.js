
export default function loadHome(){
    const content = document.querySelector('#content');

    let title = document.createElement('p');
    title.textContent = 'La Forchetta';
    content.appendChild(title);

    let image = new Image();
    image.src = "images/webpack photu green.png";
    content.appendChild(image);
};

