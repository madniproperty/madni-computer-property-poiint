/* =========================================================
   Madni Computer & Property Point - Main Script
   ========================================================= */

/* ---------- Mobile Menu Toggle ---------- */
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });

    // Close the menu automatically after tapping a link
    navLinks.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            navLinks.classList.remove('active');
        });
    });
}

/* ---------- Contact Form -> WhatsApp ---------- */
const whatsappForm = document.getElementById('whatsappForm');

if (whatsappForm) {
    whatsappForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('userName').value;
        const email = document.getElementById('userEmail').value;
        const message = document.getElementById('userMessage').value;

        const whatsappNumber = "923249885019";

        const text =
            "New Message from Website\n" +
            "Name: " + name + "\n" +
            "Email: " + email + "\n" +
            "Message: " + message;

        const whatsappURL = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(text);

        window.open(whatsappURL, "_blank");

        whatsappForm.reset();
    });
}

/* ---------- Back to Top Button ---------- */
const topBtn = document.getElementById('topBtn');

if (topBtn) {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 400) {
            topBtn.style.display = 'block';
        } else {
            topBtn.style.display = 'none';
        }
    });

    topBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}