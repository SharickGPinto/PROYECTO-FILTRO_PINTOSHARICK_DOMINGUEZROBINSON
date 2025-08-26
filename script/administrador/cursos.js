async function cursito() {
    try {
        const url = 'https://689a16c7fed141b96ba1d279.mockapi.io/cursos_adm';
        cursito.url = url;
        const res = await fetch(url, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });
        let data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

async function nuevoCurso() {
    const nombreEl = document.querySelector('.entrada');
    const catEl    = document.querySelector('.entrada-select');
    const durEl    = document.querySelector('.Duracion');

    if (!nombreEl || !durEl) return;

    const entradita = nombreEl.value.trim();
    const categoria = catEl ? catEl.value.trim() : '—';
    const duracion  = durEl.value.trim();

    if (entradita === '' || duracion === '') return;

    if (!cursito.url) { await cursito(); }

    await fetch(cursito.url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            nombre: entradita,
            categoria: categoria,
            docente: '—',
            duracion: duracion,
            estado: 'Activo',
            inscritos: 0,
            progreso: 0
        })
    });

    window.location.href = './gestionCA.html';
}

async function mostrarCursos() {
    const header = document.querySelector('.Cursos');
    if (!header) return;

    const data = await cursito();

    const filas = document.querySelectorAll('.Sub_cursos');
    for (let i = 0; i < filas.length; i++) filas[i].remove();

    if (!data || data.length === 0) {
        const row = document.createElement('div');
        row.className = 'Sub_cursos';
        row.innerHTML = '<span style="grid-column:1/-1;opacity:.7;padding:1rem;">No hay cursos para mostrar.</span>';
        header.insertAdjacentElement('afterend', row);
        return;
    }

    let ref = header;
    for (let i = 0; i < data.length; i++) {
        const c = data[i];
        const row = document.createElement('div');
        row.className = 'Sub_cursos';
        row.innerHTML =
            '<div class="Tipo_Curso">' +
              '<img src="../../img/pc.png" alt="">' +
              '<p>' + (c.categoria || '—') + '</p>' +
            '</div>' +
            '<span>' + (c.nombre || '—') + '</span>' +
            '<span>' + (c.docente || '—') + '</span>' +
            '<span>' + (c.duracion || '—') + '</span>' +
            '<span><div class="' + ((c.estado || 'Activo').toLowerCase() === 'activo' ? 'Estado' : 'Estado1') + '">' + (c.estado || 'Activo') + '</div></span>' +
            '<span>' + (c.inscritos == null ? 0 : c.inscritos) + '</span>' +
            '<svg class="porcentaje"><circle class="' + ((+c.progreso || 0) >= 50 ? 'circulo' : 'circulo1') + '" r="1.5vw" cx="2vw" cy="2vw" pathlength="100"></circle></svg>' +
            '<span class="Cantidad">' + ((+c.progreso || 0)) + '%</span>' +
            '<div class="Acciones"><span><a href="./EditarCA.html"><img src="../../img/lapiz.png" alt=""></a></span></div>';
        ref.insertAdjacentElement('afterend', row);
        ref = row;
    }
}

document.addEventListener('DOMContentLoaded', mostrarCursos);
