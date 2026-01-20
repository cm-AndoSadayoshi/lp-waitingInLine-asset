document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // Demo button device-specific navigation
    const demoBtn = document.getElementById('demo-btn');
    if (demoBtn) {
        demoBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Check if user is on mobile device
            const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) 
                          || window.innerWidth <= 768;
            
            const pcUrl = 'https://prototype-waiting-in-line-function.vercel.app/demo/ticket';
            const mobileUrl = 'https://prototype-waiting-in-line-function.vercel.app/mini/ticket';
            
            const targetUrl = isMobile ? mobileUrl : pcUrl;
            window.open(targetUrl, '_blank', 'noopener,noreferrer');
        });
    }
});