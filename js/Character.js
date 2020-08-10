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
    // 바로 이전 스크롤 위치 
    this.lastScrollTop = 0;
    this.xPos = info.xPos;
    this.speed = info.speed;
    this.direction;
    this.runningState = false;
    this.rafId;
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
            };

            self.scrollState = setTimeout(function() {
                self.scrollState = false;
                self.characterElem.classList.remove('running');
            }, 500);

            if(self.lastScrollTop > pageYOffset) {
                // 이전 스크롤 위치가 현재 위치값보다 크다면: 스크롤 올림 
                self.characterElem.setAttribute('data-direction', 'backward');
            } else {
                // 현재 스크롤 위치가 이전 스크롤값보다 크다면: 스크롤 내림 
                self.characterElem.setAttribute('data-direction', 'forward');
            }

            self.lastScrollTop = pageYOffset;
        });

        window.addEventListener('keydown', function (event) {
            if(self.runningState) return;

            if(event.keyCode === 37) {
                self.direction = 'left';
                self.characterElem.setAttribute('data-direction', 'left');
                self.characterElem.classList.add('running');
                self.run(self);
                self.runningState = true;
            } else if(event.keyCode === 39) {
                self.direction = 'right';
                self.characterElem.setAttribute('data-direction', 'right');
                self.characterElem.classList.add('running');
                self.run(self);
                self.runningState = true;
            }
        });

        window.addEventListener('keyup', function (event) {
            self.characterElem.classList.remove('running');
            cancelAnimationFrame(self.rafId);
            self.runningState = false;
        });

    },
    run: function (self) {
        console.log(self.xPos);

        if(self.direction === 'left') {
            self.xPos -= self.speed;
        } else if(self.direction === 'right') {
            self.xPos += self.speed;
        }

        if(self.xPos < 2) {
            self.xPos = 2;
        }
        
        if(self.xPos > 88) {
            self.xPos = 88;
        }

        this.characterElem.style.left = self.xPos + '%';

        self.rafId = requestAnimationFrame(function() {
            self.run(self);
        });
    }
};