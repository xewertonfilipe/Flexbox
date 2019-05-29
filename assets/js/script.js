(function(doc) {
    'use strict'
    
    const $menu_mobile = doc.querySelector('[data-js="menu_mobile"]');
    const $menu_nav_mobile = doc.querySelector('[data-js="menu_nav_mobile"]');
    const $ul_menu = doc.querySelector('[data-js="toggleActive"]');
    let storesLastClickInA;

    $menu_mobile.addEventListener('click', function() {
        addClass($menu_nav_mobile, 'active_menu_mobile');
    }, false);
    
    $ul_menu.addEventListener('click', function() {
        activeA();
    }, false);

    const addClass = (elementAction, CSSclass) => elementAction.classList.toggle(CSSclass);

    const activeA = () => {
        const $target = event.target;
        if($target.tagName == "A") {
            removeClass(storesLastClickInA);
            storesLastClickInA = $target;
            $target.classList.add('active');
        }
    } 
    const removeClass = (clickInA) => {
        if(storesLastClickInA) {
            storesLastClickInA.classList.toggle('active');
        }
    }


    
    // $menu_mobile.addEventListener( 'click', addClass, false);

    // function addClass() {
    //     $menu_nav_mobile.classList.toggle('active_menu_mobile');
    // }
}(document));