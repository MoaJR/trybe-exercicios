let holder = document.querySelector('.container')


document.addEventListener('click', (x) => {
    console.log(x.pageX, x.pageY);
    let div = document.createElement('div');
    div.className = 'mainHolder';
    div.style.position = 'absolute';
    div.style.top = `${x.pageY}px`;
    div.style.left = `${x.pageX}px`;
    div.style.transform = `translate(-50%, -50%)`;


    holder.appendChild(div);
});

