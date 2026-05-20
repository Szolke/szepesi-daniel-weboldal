$(document).ready(function () {

    /* =============================================
       NAVIGÁCIÓ – SCROLL EFFECT
       ============================================= */
    $(window).on('scroll', function () {
        const scrollTop = $(window).scrollTop();

        // Navbar árnyék scroll után
        if (scrollTop > 50) {
            $('#navbar').addClass('scrolled');
        } else {
            $('#navbar').removeClass('scrolled');
        }

        // Aktív nav link kiemelése
        highlightActiveSection();

        // Fade-in animációk
        triggerFadeIn();
    });

    /* =============================================
       MOBIL MENÜ TOGGLE
       ============================================= */
    $('#navToggle').on('click', function () {
        $(this).toggleClass('active');
        $('#navLinks').toggleClass('open');
    });

    // Menü bezárása link kattintásra
    $('#navLinks a').on('click', function () {
        $('#navToggle').removeClass('active');
        $('#navLinks').removeClass('open');
    });

    /* =============================================
       SMOOTH SCROLL
       ============================================= */
    $('a[href^="#"]').on('click', function (e) {
        const target = $(this).attr('href');
        if (target === '#') return;

        const $target = $(target);
        if ($target.length) {
            e.preventDefault();
            const navHeight = $('#navbar').outerHeight();
            const offsetTop = $target.offset().top - navHeight;

            $('html, body').animate({
                scrollTop: offsetTop
            }, 600, 'swing');
        }
    });

    /* =============================================
       AKTÍV SZEKCIÓ KIEMELÉS
       ============================================= */
    function highlightActiveSection() {
        const scrollTop = $(window).scrollTop();
        const navHeight = $('#navbar').outerHeight();

        $('section[id]').each(function () {
            const sectionTop = $(this).offset().top - navHeight - 80;
            const sectionBottom = sectionTop + $(this).outerHeight();

            if (scrollTop >= sectionTop && scrollTop < sectionBottom) {
                const id = $(this).attr('id');
                $('#navLinks a').removeClass('active');
                $('#navLinks a[href="#' + id + '"]').addClass('active');
            }
        });
    }

    /* =============================================
       FADE-IN ANIMÁCIÓK SCROLL-RA
       ============================================= */
    function triggerFadeIn() {
        const windowHeight = $(window).height();
        const scrollTop = $(window).scrollTop();

        $('.fade-in:not(.visible)').each(function () {
            const elemTop = $(this).offset().top;
            const triggerPoint = scrollTop + windowHeight - 80;

            if (elemTop < triggerPoint) {
                $(this).addClass('visible');
            }
        });
    }

    // Első betöltéskor is futtasd
    triggerFadeIn();

    /* =============================================
       KAPCSOLATI FORM – SUBMIT
       ============================================= */
    $('#contactForm').on('submit', function (e) {
        e.preventDefault();

        const $btn = $(this).find('button[type="submit"]');
        const $success = $('#formSuccess');

        // Gomb letiltása küldés közben
        $btn.prop('disabled', true).text('Küldés...');

        // Szimuláció (valós backendhez fetch/ajax kell)
        setTimeout(function () {
            $btn.hide();
            $success.fadeIn(400);

            // Form mezők törlése
            $('#contactForm input, #contactForm textarea, #contactForm select').val('');
        }, 900);
    });

    /* =============================================
       HERO SCROLL HINT ELREJTÉSE
       ============================================= */
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 100) {
            $('.hero-scroll-hint').fadeOut(300);
        } else {
            $('.hero-scroll-hint').fadeIn(300);
        }
    });

    /* =============================================
       PILLAR CARDS – HOVER EFFEKT
       ============================================= */
    $('.pillar-card').on('mouseenter', function () {
        $(this).find('.pillar-number').css('color', 'var(--color-gold-light)');
    }).on('mouseleave', function () {
        $(this).find('.pillar-number').css('color', 'var(--color-green-pale)');
    });

    /* =============================================
       OVERVIEW CARDS – KATTINTÁS SCROLL
       ============================================= */
    $('.overview-card').on('click', function () {
        const href = $(this).attr('href');
        if (href && href.startsWith('#')) {
            const $target = $(href);
            if ($target.length) {
                const navHeight = $('#navbar').outerHeight();
                $('html, body').animate({
                    scrollTop: $target.offset().top - navHeight
                }, 600);
            }
        }
    });

    /* =============================================
       GARDEN STEPS – STAGGER ANIMÁCIÓ
       ============================================= */
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                $(entry.target).addClass('visible');
            }
        });
    }, {
        threshold: 0.15
    });

    document.querySelectorAll('.fade-in').forEach(function (el) {
        observer.observe(el);
    });

});
