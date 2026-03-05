document.addEventListener('DOMContentLoaded', function () {

    const btn = document.createElement('button');
    btn.id = 'btn-top';
    btn.textContent = 'Volver arriba';
    document.body.appendChild(btn);

    window.addEventListener('scroll', function () {
        btn.style.display = window.scrollY > 400 ? 'block' : 'none';
    });

    btn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});