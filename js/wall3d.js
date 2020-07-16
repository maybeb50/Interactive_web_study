(function() {
    const houseElem = document.querySelector('.house');
    const barElem = document.querySelector('.progress__bar');
    let maxScrollValue;
    
    function resizeHandler() {
        maxScrollValue = document.body.offsetHeight - window.innerHeight;
    }

    window.addEventListener('scroll', function () {
        // document.body.offsetHeight : 문서의 전체 높이 
        // pageYoffset : 현재 스크롤의 위치값
        // window.innerHegiht : 윈도우 화면 높이
        const scrollPer = pageYOffset / maxScrollValue;
        const zMove = scrollPer * 980 - 490;
        houseElem.style.transform = 'translateZ('+ zMove +'vw )';

        barElem.style.width = scrollPer * 100 +'%';
    });

    window.addEventListener('resize', resizeHandler);
    resizeHandler();
})();