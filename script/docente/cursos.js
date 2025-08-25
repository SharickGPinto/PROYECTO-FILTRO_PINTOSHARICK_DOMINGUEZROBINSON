async function cursitos() {
    try {
        const res = await fetch('https://68ac8b3a7a0bbe92cbbac5f8.mockapi.io/docente', {
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