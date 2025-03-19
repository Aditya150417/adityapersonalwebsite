// Add active class to nav links based on scroll position
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    function updateActiveNavLink() {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= (sectionTop - 150)) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }
    
    // Update active nav link on scroll
    window.addEventListener('scroll', updateActiveNavLink);
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const headerHeight = document.querySelector('header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Hobby icons bounce effect
    const hobbyIcons = document.querySelectorAll('.hobby-icon');
    hobbyIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            icon.classList.add('bounce-effect');
            setTimeout(() => {
                icon.classList.remove('bounce-effect');
            }, 300);
        });
    });

    // Portfolio items click effect
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        item.addEventListener('click', function() {
            // Tambahkan efek klik
            item.classList.add('clicked');

            // Hapus efek setelah 300ms agar kembali normal
            setTimeout(() => {
                item.classList.remove('clicked');
            }, 300);
        });
    });

    // Contact form submit handler
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        const submitButton = contactForm.querySelector('.btn-primary');
        
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Mencegah submit default
            
            // Tambahkan efek loading
            submitButton.classList.add('btn-loading');
            submitButton.innerText = "Mengirim...";
            
            setTimeout(() => {
                // Hapus efek loading
                submitButton.classList.remove('btn-loading');
                submitButton.innerText = "Terkirim!";
                submitButton.classList.add('btn-success');
                
                // Reset form setelah sukses
                contactForm.reset();
                
                // Kembalikan teks tombol setelah beberapa detik
                setTimeout(() => {
                    submitButton.innerText = "Kirim Pesan";
                    submitButton.classList.remove('btn-success');
                }, 2000);
            }, 2000);
        });
    }
