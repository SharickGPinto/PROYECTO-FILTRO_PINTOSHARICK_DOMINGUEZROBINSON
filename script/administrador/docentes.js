async function docenticos() {
    try {
        const res = await fetch('https://68ac80727a0bbe92cbbaa61d.mockapi.io/administrador_docente', {
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