(function() {
    const houseElem = document.querySelector('.house');
    let maxScrollValue;
    
    function resizeHandler() {
        maxScrollValue = document.body.offsetHeight - window.innerHeight;
    }

    window.addEventListener('scroll', function() {
        // document.body.offsetHeight : 문서의 전체 높이 
        // pageYoffset : 현재 스크롤의 높이값
        // window.innerHegiht : 윈도우 화면 높이
        const zMove = pageYOffset / maxScrollValue * 980 - 490;

        console.log(maxScrollValue);
        houseElem.style.transform = 'translateZ('+ zMove +'vw )';
    });

    window.addEventListener('resize', resizeHandler);
    resizeHandler();
})();