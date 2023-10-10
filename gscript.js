// created a div element and adding it to body element
const modal=document.createElement('div');
modal.id='modal';
document.body.append(modal);
const images=document.querySelectorAll('.img');
//console.log(images);
images.forEach(i=> {
    i.addEventListener('click',()=> {
        modal.classList.add('active');
        const img=document.createElement('img');
        img.src=i.src;
        img.id='img';
        while(modal.firstChild) {
            modal.removeChild(modal.firstChild);
        }
        modal.append(img);
    });
    modal.addEventListener('click',()=>{
        modal.classList.remove('active');
    });

});