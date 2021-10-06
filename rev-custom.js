let tracks = document.querySelectorAll('.rev__images');

let dotsWrappers = document.querySelectorAll('.rev__dots');



window.onload = function() {
    addIDs();
    addDots();
    addActive();
    function addIDs() {
        for (var i=0; i< tracks.length; i) {
            tracks.forEach(track => {
                track.setAttribute('id', ''+ i++ +'');
            });
        }
        tracks.forEach(track => {
            let slides = track.querySelectorAll('.rev__img');
            for (var i=0; i< slides.length; i) {
                slides.forEach(slide => {
                    let parentId = slide.parentNode.getAttribute('id');
                    slide.setAttribute('id', '' + parentId + ''+ i++ +''); 
                });
            }
        });
    }
    function addDots() {
        let dotAreas = document.querySelectorAll('.rev__dots');
            dotAreas.forEach(dotArea => {
                for (var i = 0; i < dotArea.parentNode.querySelectorAll('.rev__img').length; i++) {
                    let parentId = dotArea.parentNode.getAttribute('id');
                    let s = '<span class="rev__dot" id="dot' + parentId + '' + i + '" />';
                        dotArea.innerHTML += s;
                }
            });
    }
    function addActive(params) {
        dotsWrappers.forEach(dotsWrapper => {
            dotsWrapper.firstChild.classList.add('active');
        });
        tracks.forEach(track => {
            track.firstElementChild.classList.add('active');
        });
    }

    tracks.forEach(track => {
        
        let slides = track.querySelectorAll('.rev__img');
        let dots = track.querySelectorAll('.rev__dot');
        dots.forEach(dot => {
            dot.addEventListener('click', switchActive);
            function switchActive(e) {
                
                const id = this.getAttribute('id').replace('dot', '');
                dots.forEach((child) => child.classList.remove('active'));  
                slides.forEach((child) => child.classList.remove('active'));
                this.classList.add('active');
                document.getElementById(id).classList.add('active');
            }
        });
    });
}



