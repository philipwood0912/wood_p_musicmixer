(() => {
    
    const icons = ['iconOne', 'iconTwo', 'iconThree', 'iconFour'];
    
    let iconsBox = document.querySelector('.iconsCon'),
        treeBox = document.querySelector('#treeCon'),
        iconSelectors = document.querySelectorAll('#iconButtons img');
    
    function createIcons(pictureIndex) {
        
        icons.forEach((icon, index) => {
            let newIcons = `<img id="icon${index}" class="iconsImages" src="images/${icon + pictureIndex}.svg" alt="icon thumbnail">`
            
            iconsCon.innerHTML += newIcons;
        });
        
    }
    
    function resetIcons() {
        iconsCon.innerHTML = "";
        createIcons(this.dataset.iconref);
    }
    
    iconSelectors.forEach(iconImage => iconImage.addEventListener('click', resetIcons));
    
    createIcons(0);
    
    
})();
