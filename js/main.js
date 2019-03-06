(() => {
    
    const icons = ['iconOne', 'iconTwo', 'iconThree', 'iconFour'];
    
    let iconsBox = document.querySelector('#iconsCon'),
        treeBox = document.querySelector('#treeCon'),
        iconSelectors = document.querySelectorAll('#iconButtons img'),
        dropBoxes = document.querySelectorAll('.dropBox');
    
    function createIcons(pictureIndex) {
        
        icons.forEach((icon, index) => {
            let newIcons = `<img draggable id="${icon + pictureIndex}" class="iconsImages" data-iconref="${pictureIndex}" src="images/${icon + pictureIndex}.svg" alt="icon thumbnail">`
            
            iconsBox.innerHTML += newIcons;
            iconsBox.dataset.iconref = `${pictureIndex}`
        });
        
        initDrag();
        
    }
    
    function initDrag() {
		iconsBox.querySelectorAll('img').forEach(img => {
			img.addEventListener("dragstart", function(e) {
				// e.preventDefault();
				console.log('draggin...')

				e.dataTransfer.setData("text/plain", this.id);
			});
		});
	}
    
    dropBoxes.forEach(box => {
        
        box.addEventListener("dragover", function(e) {
            e.preventDefault();
            console.log('dragging over me');
        });
        
        box.addEventListener("drop", function(e) {
            e.preventDefault();
            console.log('you dropped it on me');
            
            let icon = e.dataTransfer.getData("text/plain");
            
            if (box.childNodes.length < 1) {
                e.target.appendChild(document.querySelector(`#${icon}`));
            } else {
                return false;
            }
        });
        
        box.addEventListener("click", function(e) {
            console.log('clicked me');
            
            let image = e.target;
            box.removeChild(image);
            
            if (image.dataset.iconref == iconsBox.dataset.iconref) {
                iconsBox.appendChild(image);
            }
        });
        
    });
    
    
    function resetIcons() {
        iconsBox.innerHTML = "";
        createIcons(this.dataset.iconref);
    }
    
    iconSelectors.forEach(iconImage => iconImage.addEventListener('click', resetIcons));
    
    createIcons(0);
    
    
    
    
    
})();
