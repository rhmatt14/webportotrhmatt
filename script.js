

document.addEventListener('DOMContentLoaded', function() {
    // Smooth Scrolling
    // Dapatkan semua tautan di navigasi dan tombol "Lihat Portofolio" di hero section
    const navLinks = document.querySelectorAll('#main-nav a');
    const heroButton = document.querySelector('.hero-section .button');

    // Gabungkan semua tautan yang perlu smooth scroll
    const allScrollLinks = [...navLinks, heroButton];

    allScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Mencegah perilaku default tautan (langsung melompat)

            const targetId = this.getAttribute('href'); // Dapatkan nilai href (misal: #about)
            const targetSection = document.querySelector(targetId); // Dapatkan elemen section yang sesuai

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - document.querySelector('header').offsetHeight, // Kurangi tinggi header
                    behavior: 'smooth' // Efek scroll yang mulus
                });

                // Opsional: Jika Anda memiliki navigasi mobile yang tertutup setelah klik
                // const navToggle = document.getElementById('nav-toggle'); // Jika ada tombol toggle
                // const navMenu = document.getElementById('main-nav'); // Jika ada menu
                // if (navToggle && navMenu) {
                //     navToggle.classList.remove('active');
                //     navMenu.classList.remove('active');
                // }
            }
        });
    });


    // Active Link Highlighting (Menyorot tautan navigasi yang aktif)
    const sections = document.querySelectorAll('section[id]'); // Dapatkan semua section yang punya ID
    const headerHeight = document.querySelector('header').offsetHeight; // Tinggi header untuk penyesuaian scroll

    function highlightActiveLink() {
        let currentActive = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 1; // Kurangi tinggi header dan sedikit margin
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentActive = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active'); // Hapus kelas 'active' dari semua tautan
            if (link.getAttribute('href').includes(currentActive)) {
                link.classList.add('active'); // Tambahkan kelas 'active' ke tautan yang sesuai
            }
        });
    }

    // Panggil fungsi saat halaman dimuat dan saat di-scroll
    window.addEventListener('scroll', highlightActiveLink);
    highlightActiveLink(); // Panggil sekali saat DOM dimuat untuk mengatur link aktif awal
});

document.addEventListener('DOMContentLoaded', function() {
    // ... Kode Smooth Scrolling dan Active Link Highlighting yang sudah ada ...

    // Back to Top Button
    const backToTopBtn = document.getElementById('backToTopBtn');

    window.addEventListener('scroll', function() {
        // Tampilkan atau sembunyikan tombol tergantung posisi scroll
        if (window.scrollY > 300) { // Muncul setelah scroll 300px
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Dynamic Skill Bars (Opsional)
    const skillSection = document.getElementById('skills');
    const skillProgressBars = document.querySelectorAll('.skill-progress');

    // Callback untuk Intersection Observer
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) { // Jika section keahlian terlihat
                skillProgressBars.forEach(bar => {
                    const progress = bar.getAttribute('data-progress');
                    bar.style.width = progress; // Atur lebar sesuai data-progress
                    bar.classList.add('fill-progress'); // Tambahkan kelas untuk memicu transisi (jika ada)
                });
                observer.unobserve(skillSection); // Hentikan observasi setelah dianimasikan
            }
        });
    };

    // Buat Intersection Observer
    const observer = new IntersectionObserver(observerCallback, {
        threshold: 0.5 // Memicu saat 50% dari section terlihat
    });

    // Amati section keahlian
    if (skillSection) {
        observer.observe(skillSection);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // ... (Kode Smooth Scrolling, Active Link Highlighting, dan Back to Top Button yang sudah ada) ...

    // Dynamic Contact Links (menggunakan ikon)
    const emailLink = document.getElementById('email-link');
    const linkedinLink = document.getElementById('linkedin-link');
    const githubLink = document.getElementById('github-link');
    const whatsappLink = document.getElementById('whatsapp-link'); // Dapatkan elemen WhatsApp
    const instagramLink = document.getElementById('instagram-link'); // Dapatkan elemen Instagram


    // Informasi kontak Anda
    const myEmail = 'rahmattulah267@gmail.com'; // Ganti dengan email Anda
    const myLinkedInURL = 'https://www.linkedin.com/in/rahmat-tullah-8a1996286'; // Ganti dengan URL LinkedIn Anda
    const myGitHubURL = 'https://github.com/rhmatt14'; // Ganti dengan URL GitHub Anda
    const myWhatsAppNumber = '6283122010967'; // Ganti dengan nomor WhatsApp Anda (dengan kode negara)
    const myInstagramUsername = 'https://www.instagram.com/rhmatt14_?igsh=ajB0bWExcmozcTg=';

    // Atur atribut href untuk setiap tautan
    if (emailLink) {
        emailLink.href = 'mailto:' + myEmail;
    }

    if (linkedinLink) {
        linkedinLink.href = myLinkedInURL;
        linkedinLink.target = '_blank'; // Buka di tab baru
        linkedinLink.rel = 'noopener noreferrer'; // Rekomendasi keamanan
    }

    if (githubLink) {
        githubLink.href = myGitHubURL;
        githubLink.target = '_blank'; // Buka di tab baru
        githubLink.rel = 'noopener noreferrer'; // Rekomendasi keamanan
    }

    if (whatsappLink) {
        // Untuk tautan WhatsApp, gunakan format yang benar.
        // `wa.me/nomor` adalah yang paling umum dan disarankan.
        // Nomor harus diawali kode negara tanpa tanda '+'.
        const formattedWaNumber = myWhatsAppNumber.replace(/\D/g, ''); // Hapus semua non-digit dari nomor
        whatsappLink.href = `https://wa.me/${formattedWaNumber}`;
        whatsappLink.target = '_blank';
        whatsappLink.rel = 'noopener noreferrer';
    }

    if (instagramLink) {
        instagramLink.href = `https://www.instagram.com/${myInstagramUsername}`;
        instagramLink.target = '_blank';
        instagramLink.rel = 'noopener noreferrer';
    }

});