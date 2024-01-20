const mobileNav = () => {
    const headerBtn = document.querySelector('.header__bars');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-nav__link');
    const mobileMediaQuerry = window.matchMedia("(max-width: 768px)");

    //State of Mobile Nav
    let isMobNavOpen = false;

    headerBtn.addEventListener('click', () => {
        isMobNavOpen = !isMobNavOpen;
        if(isMobNavOpen){
            mobileNav.style.display = 'flex';
            document.body.style.overflowY = 'hidden';
        } else {
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        }
    });

    mobileLinks.forEach( link => {
        link.addEventListener('click', () => {
            isMobNavOpen = false;
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        })
    });

    function closeNavIfOversize(mobileMediaQuerry) {
        if (!mobileMediaQuerry.matches && isMobNavOpen){ 
            isMobNavOpen = false;
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        } 
      }

      closeNavIfOversize(mobileMediaQuerry);
      
      mobileMediaQuerry.addEventListener("change", function() {
        closeNavIfOversize(mobileMediaQuerry);
      });

};

export default mobileNav;