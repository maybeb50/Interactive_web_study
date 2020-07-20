function Character(info) {
    this.characterElem = document.createElement('div');
    this.characterElem.classList.add('character');
    this.characterElem.innerHTML = ''
    + '<div class="character-face__con character-head">'
        + '<div class="character-face face-front character-head__face"></div>'
        + '<div class="character-face face-back character-head__face"></div>'
    + '</div>'
    +'<div class="character-face__con character-torso">'
        +'<div class="character-face face-front character-torso__face"></div>'
        +'<div class="character-face face-back character-torso__face"></div>'
    +'</div>'
    +'<div class="character-face__con character-arm character-arm__left">'
        +'<div class="character-face face-front character-arm__face"></div>'
        +'<div class="character-face face-back character-arm__face"></div>'
    +'</div>'
    +'<div class="character-face__con character-arm character-arm__right">'
        +'<div class="character-face face-front character-arm__face"></div>'
        +'<div class="character-face face-back character-arm__face"></div>'
    +'</div>'
    +'<div class="character-face__con character-leg character-leg__left">'
        +'<div class="character-face face-front character-leg__face"></div>'
        +'<div class="character-face face-back character-leg__face"></div>'
    +'</div>'
    +'<div class="character-face__con character-leg character-leg__right">'
        +'<div class="character-face face-front character-leg__face"></div>'
        +'<div class="character-face face-back character-leg__face"></div>'
    +'</div>';

    document.querySelector('.stage').appendChild(this.characterElem);

    this.characterElem.style.left = info.xPos + '%';
    // 스크롤 상태 확인
    this.scrollState = false;
    this.init();
};

Character.prototype = {
    constructor: Character, 
    init: function () {
        const self = this;
        window.addEventListener('scroll', function () {
            clearTimeout(self.scrollState);

            if(!self.scrollState) {
                self.characterElem.classList.add('running');
                console.log('실행');
            };

            self.scrollState = setTimeout(function() {
                self.scrollState = false;
                self.characterElem.classList.remove('running');
            }, 500);

        });
    }
};