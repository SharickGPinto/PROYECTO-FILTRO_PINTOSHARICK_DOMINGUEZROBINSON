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