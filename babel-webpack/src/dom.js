console.log('dom file');

const body = document.querySelector('body');

const styleBody = () => {
    body.style.backgroundImage = 'linear-gradient(80deg, #bbe32e, rgb(218, 219, 214))';
    body.style.color = '#000';
}

const addTitle = (text) => {
    const title = document.createElement('h2');
    title.textContent = text;
    body.appendChild(title);
}

export {styleBody, addTitle};
