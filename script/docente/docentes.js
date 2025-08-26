async function docentito() {
  try {
    const url = 'https://68ac8b3a7a0bbe92cbbac5f8.mockapi.io/docente';
    docentito.url = url;
    const res = await fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    });
    let data = await res.json();
    return data;
  } catch (e) { console.error(e); }
}

async function nuevoDocente() {
  const entrada = document.querySelector('.entrada');
  if (!entrada) return;
  const cursos = (entrada.value || '').trim();
  if (cursos === '') return;
  if (!docentito.url) await docentito();
  await fetch(docentito.url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ cursos: cursos })
  });
  window.location.href = './gestionAD.html';
}

async function mostrarDocentes() {
  const header = document.querySelector('.Cursos');
  if (!header) return;

  const data = await docentito();
  document.querySelectorAll('.Sub_cursos').forEach(n => n.remove());

  if (!data || data.length === 0) {
    const row = document.createElement('div');
    row.className = 'Sub_cursos';
    row.innerHTML = '<span style="grid-column:1/-1;opacity:.7;padding:1rem;">No hay docentes para mostrar.</span>';
    header.insertAdjacentElement('afterend', row);
    return;
  }

  let ref = header;
  for (let i = 0; i < data.length; i++) {
    const d = data[i];
    const row = document.createElement('div');
    row.className = 'Sub_cursos';
    row.innerHTML =
      '<span>—</span>' +
      '<span>' + (d.cursos || '—') + '</span>' +
      '<span>—</span>' +
      '<span>—</span>' +
      '<span><div class="Estado">Activo</div></span>' +
      '<span><a href="./EditarAD.html?id=' + d.id + '"><img src="../../img/lapiz.png" alt=""></a></span>';
    ref.insertAdjacentElement('afterend', row);
    ref = row;
  }
}

document.addEventListener('DOMContentLoaded', mostrarDocentes);