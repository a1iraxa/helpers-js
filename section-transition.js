if (typeof jQuery === "undefined") {
    throw new Error("jQuery plugins need to be before this file");
}
  
/* Global jQuery, $ */
"use strict";
  
(function($, window, document){
    
    document.addEventListener('DOMContentLoaded', () => {

        const _body = $(document.body);
        const _header = $( '.header' );
        
        _body.addClass('dynamic--dark');

        function addScrolledClass(){

            $(window).scroll( function() {

                let scroll = $(window).scrollTop();
    
                if ( scroll > 0) {
    
                    if ( _body.hasClass("is-scrolled")) {
                        return;
                    }
    
                    _body.addClass('is-scrolled');
                    _header.addClass('is-scrolled');
    
                }else{
    
                    _body.removeClass('is-scrolled');
                    _header.removeClass('is-scrolled');
    
                }
            });
        }
        addScrolledClass();

        function sectionTransition(){

            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                
                    const intersecting = entry.isIntersecting

                    if( intersecting ){
                        document.querySelector('body').classList.add('dynamic--dark');
                        document.querySelector('body').classList.remove('dynamic--light');
                    }else{
                        document.querySelector('body').classList.remove('dynamic--dark');
                        document.querySelector('body').classList.add('dynamic--light');
                    }
            })

            },{ threshold: .10 });

            // observer.observe(document.getElementById("our-works"))
            // observer.observe(document.getElementById("our-team"))
            // observer.observe(document.getElementById("technology"))
            // observer.observe(document.getElementById("contact-us"))

            const _sections = document.querySelectorAll('.bg-black');
            _sections.forEach(section => {
                observer.observe(section);
            });
        }
        sectionTransition();
        
    });

})(jQuery, window, document);

<style>

/* Smooth scroll behavior */
:root {
  scroll-behavior: smooth;
}

body.dynamic--dark {
  --dynamic-theme-background: #000000;
  --dynamic-theme-color: #f9f9f9
}

body.dynamic--light {
  --dynamic-theme-background: #f9f9f9;
  --dynamic-theme-color: #000000
}

.ui-theme--dynamic {
  background: var(--dynamic-theme-background) !important;
  color: var(--dynamic-theme-color) !important;
  transition: background .6s ease-out 0s, color .6s ease-out 0s
}

</style>