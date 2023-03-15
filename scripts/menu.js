class menuAnimation {
    constructor() {
        this.menuState = false;
        this.menuButton = document.querySelector('.menuButton');
        this.menuButtonLineCenter = document.querySelector('.menuButtonLineCenter');
        this.menuButtonLineTop = document.querySelector('.menuButtonLineTop');
        this.menuButtonLineBottom = document.querySelector('.menuButtonLineBottom');
        this.menuOverlay = document.querySelector('.menuOverlay');
        this.menuButton.addEventListener('mouseenter', this.menuButtonHover.bind(this));
        this.menuButton.addEventListener('mouseleave', this.menuButtonLostHover.bind(this));
        this.menuButton.addEventListener('click', this.menuButtonClick.bind(this));
    }
    menuButtonHover(){
        console.log("Hover");
        if(this.menuState == false){
            this.menuButtonLineCenter.classList.remove('menuButtonLineCenterUnHover');
            this.menuButtonLineCenter.classList.add('menuButtonLineCenterHover');
            this.menuButtonLineTop.classList.remove('menuButtonLineTopUnHover');
            this.menuButtonLineTop.classList.add('menuButtonLineTopHover');
            this.menuButtonLineBottom.classList.remove('menuButtonLineBottomUnHover');
            this.menuButtonLineBottom.classList.add('menuButtonLineBottomHover');

        }
    }
    menuButtonLostHover(){
        console.log("LostHover");
        if(this.menuState == false){
            this
            this.menuButtonLineCenter.classList.remove('menuButtonLineCenterHover','menuButtonLineCenterUnClick');
            this.menuButtonLineCenter.classList.add('menuButtonLineCenterUnHover');
            this.menuButtonLineTop.classList.remove('menuButtonLineTopHover','menuButtonLineTopUnClick');
            this.menuButtonLineTop.classList.add('menuButtonLineTopUnHover');
            this.menuButtonLineBottom.classList.remove('menuButtonLineBottomHover','menuButtonLineBottomUnClick');
            this.menuButtonLineBottom.classList.add('menuButtonLineBottomUnHover');

        }
    }
    menuButtonClick(){
        console.log("Click");
        this.menuState = !this.menuState;
        console.log(this.menuState)
        if(this.menuState == true){
            this.menuButtonLineCenter.classList.remove('menuButtonLineCenterHover','menuButtonLineCenterUnClick');
            this.menuButtonLineCenter.classList.add('menuButtonLineCenterClick');
            this.menuButtonLineTop.classList.remove('menuButtonLineTopHover','menuButtonLineTopUnClick');
            this.menuButtonLineTop.classList.add('menuButtonLineTopClick');
            this.menuButtonLineBottom.classList.remove('menuButtonLineBottomHover','menuButtonLineBottomUnClick');
            this.menuButtonLineBottom.classList.add('menuButtonLineBottomClick');
            this.menuOverlay.classList.remove('menuOverlayClosed');
            this.menuOverlay.classList.add('menuOverlayOpen');
        } else{
            this.menuButtonLineCenter.classList.add('menuButtonLineCenterUnClick');
            this.menuButtonLineCenter.classList.remove('menuButtonLineCenterClick');
            this.menuButtonLineTop.classList.add('menuButtonLineTopUnClick');
            this.menuButtonLineTop.classList.remove('menuButtonLineTopClick');
            this.menuButtonLineBottom.classList.add('menuButtonLineBottomUnClick');
            this.menuButtonLineBottom.classList.remove('menuButtonLineBottomClick');
            this.menuOverlay.classList.remove('menuOverlayOpen');
            this.menuOverlay.classList.add('menuOverlayClosed');
        }
    }
}
const menu = new menuAnimation();