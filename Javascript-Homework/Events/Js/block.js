const resizable = document.getElementById('resizable');
    const resizer = document.getElementById('resizer');

    resizer.addEventListener('mousedown', initResize);

    function initResize(e) {
        window.addEventListener('mousemove', resize);
        window.addEventListener('mouseup', stopResize);
    }

    function resize(e) {
        resizable.style.width = e.clientX - resizable.offsetLeft + 'px';
        resizable.style.height = e.clientY - resizable.offsetTop + 'px';
    }

    function stopResize() {
        window.removeEventListener('mousemove', resize);
        window.removeEventListener('mouseup', stopResize);
    }