(function() {
    const houseElem = document.querySelector('.house');
    const barElem = document.querySelector('.progress__bar');
    const stageElem = document.querySelector('.stage');
    const mousePos = {x: 0, y: 0};
    let maxScrollValue;
    
    function resizeHandler() {
        maxScrollValue = document.body.offsetHeight - window.innerHeight;
    }

    window.addEventListener('scroll', function () {
        const scrollPer = pageYOffset / maxScrollValue;
        const zMove = scrollPer * 980 - 490;
        houseElem.style.transform = 'translateZ('+ zMove +'vw )';

        // progress bar 
        barElem.style.width = scrollPer * 100 +'%';
    });

    window.addEventListener('mousemove', function (e) {
        mousePos.x = -1 + (e.clientX / window.innerWidth) * 2; 
        mousePos.y = 1 - (e.clientY / window.innerHeight) * 2; 

        stageElem.style.transform = 'rotateX('+ (mousePos.y * 8) +'deg) rotateY('+ (mousePos.x * 8) +'deg)';

        // console.log(mousePos.x * 5, mousePos.y* 5)
    });

    stageElem.addEventListener('click', function (e) {
        new Character({
            xPos: e.clientX / window.innerWidth * 100
        });
    });

    window.addEventListener('resize', resizeHandler);
    resizeHandler();

})();