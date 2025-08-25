async function cursito() {
    try {
        const res = await fetch('https://689a16c7fed141b96ba1d279.mockapi.io/cursos_adm', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        let data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

async function nuevoCurso() {
    event.preventDefault()
    const entradita = document.getElementById('entrada').value.trim();
    const duracion = document.getElementById('Duracion').value.trim();

    console.log(entradita);
    console.log(duracion)
    if (task.trim() === '') return;
    await fetch('https://689a16c7fed141b96ba1d279.mockapi.io/cursos_adm', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            
        })
    });
    entradita.value ='';
    duracion.value = '';
    const data = await fetchData();
    displayCapsula(data);
}
