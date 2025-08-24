async function iniciar() {
    try {
        const res = await fetch('https://68aa2325909a5835049bb9f8.mockapi.io/USUARIO', {
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

async function entrar(){
    const emailInput = document.getElementById('login_email').value.trim();
    const passInput = document.getElementById('login_password').value.trim();

    const data = await iniciar();
    data.forEach(i  => {
        if (i.Usuario === emailInput && i.contraseya === passInput){
            usuariarito = i
        }
    });
    if (usuariarito){
        localStorage.setItem('usuarito', JSON.stringify(usuariarito));
        if(usuariarito.tipo === 'Estudiante'){
            window.location.href = './pages/estudiante/panelE.html';
        }else if (usuariarito.tipo === 'Docente'){
            window.location.href = './pages/docente/panelD.html';
        }else if (usuariarito.tipo === 'Administrador'){
            window.location.href = './pages/administrador/panelA.html';
        }
    }else{
        alert("Usuario o contraseña incorrecta")
    }
}
