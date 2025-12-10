//  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//             anchor.addEventListener('click', function (e) {
//                 e.preventDefault();
//                 const target = document.querySelector(this.getAttribute('href'));
//                 if (target) {
//                     target.scrollIntoView({
//                         behavior: 'smooth',
//                         block: 'start'
//                     });
//                 }
//             });
//         });

//         // Scroll animations
//         const observerOptions = {
//             threshold: 0.1,
//             rootMargin: '0px 0px -100px 0px'
//         };

//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     entry.target.style.opacity = '1';
//                     entry.target.style.transform = 'translateY(0)';
//                 }
//             });
//         }, observerOptions);

//         document.querySelectorAll('.skill-card, .project-card').forEach(el => {
//             el.style.opacity = '0';
//             el.style.transform = 'translateY(30px)';
//             el.style.transition = 'all 0.6s ease';
//             observer.observe(el);
//         });

//         // Mobile menu toggle
//         const mobileMenu = document.querySelector('.mobile-menu');
//         const navLinks = document.querySelector('.nav-links');

//         mobileMenu.addEventListener('click', () => {
//             navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
//             if (navLinks.style.display === 'flex') {
//                 navLinks.style.position = 'absolute';
//                 navLinks.style.top = '80px';
//                 navLinks.style.left = '0';
//                 navLinks.style.width = '100%';
//                 navLinks.style.flexDirection = 'column';
//                 navLinks.style.background = '#0a1628';
//                 navLinks.style.padding = '20px';
//             }
//         });





// Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.skill-card, .project-card').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s ease';
            observer.observe(el);
        });

        // Mobile menu toggle
        const mobileMenu = document.querySelector('.mobile-menu');
        const navLinks = document.querySelector('.nav-links');

        mobileMenu.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            if (navLinks.style.display === 'flex') {
                navLinks.style.position = 'absolute';
                navLinks.style.top = '80px';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.flexDirection = 'column';
                navLinks.style.background = '#0a1628';
                navLinks.style.padding = '20px';
            }
        });