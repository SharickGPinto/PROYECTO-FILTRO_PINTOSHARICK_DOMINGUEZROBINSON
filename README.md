# Proyecto Filtro — LMS (Learning Management System)

Plataforma web para la gestión del aprendizaje con perfiles de **Administrador**, **Docente** y **Estudiante**. Permite crear/administrar cursos, gestionar usuarios, subir contenidos y consultar progreso académico. La UI toma como referencia visual el panel: https://astounding-clafoutis-196412.netlify.app/

---

## Módulos del LMS (requerimientos)

1. **📊 Dashboard Principal**
   - Estadísticas (cursos activos, usuarios, progreso).
   - Accesos rápidos (crear curso, gestionar usuarios, revisar tareas).
   - Tarjetas y gráficos dinámicos.

2. **📚 Gestión de Cursos**
   - Crear/editar cursos con categoría, descripción, duración, etiquetas y visibilidad.
   - Asignar docente a cada curso.
   - Tabla con filtros por estado, fecha y tipo.

3. **👨‍🏫 Gestión de Docentes**
   - Registrar/editar docentes.
   - Asignar cursos a su cargo.
   - Panel individual con carga académica y estudiantes.

4. **👩‍🎓 Gestión de Estudiantes**
   - Inscripción y administración.
   - Seguimiento por curso: completadas, pendientes, cerradas, retrasadas.

5. **📂 Lecciones y Contenidos**
   - Estructura por módulos/lecciones.
   - Subida de videos, documentos, imágenes y enlaces.
   - Visibilidad (publicado/borrador) y orden.

6. **✅ Tareas y Evaluaciones**
   - Tareas con fecha límite, rúbricas y calificación.
   - Evaluaciones (test, abiertas o mixtas).
   - Vista por entregas, revisión y feedback.

7. **⚙️ Configuración del Sistema**
   - Personalización (colores, logos, info institucional).
   - Parámetros de cursos, notificaciones y seguridad.
   - (Opcional) Integración **JSON-Server**; peticiones con **Fetch API**.

8. **🛡️ Módulo Administrador**
   - Interfaces para gestionar cursos, estudiantes, docentes y contenidos.

---

## Tecnologías
- **HTML5**, **CSS3** / **Bootstrap**
- **JavaScript** (Fetch API)
- **MockAPI** (o **JSON-Server** opcional)
- **Git**
- **[Figma][(ttps://www.figma.com/design/gnG5UiR0jEKoYFQcdv6ta2/Proyecto-js?node-id=1-2&p=f&t=Z0mhSeerEPdeqBa5-0)** (prototipado)

---

## Estructura del proyecto
```
PROYECTO-FILTRO/
├─ index.html
├─ pages/
│ ├─ administrador/
│ │ ├─ panelA.html
│ │ ├─ gestionCA.html
│ │ ├─ AñadirCA.html
│ │ ├─ EditarCA.html
│ │ ├─ gestionAD.html
│ │ ├─ gestionEA.html
│ │ ├─ progresoA.html
│ │ └─ perfilA.html
│ ├─ docente/
│ │ ├─ panelD.html
│ │ ├─ gestionAD.html
│ │ ├─ subirCD.html
│ │ └─ EditarAD.html
│ └─ estudiante/
│ ├─ panelE.html
│ ├─ gestionCE.html
│ ├─ leccionesE.html
│ └─ progresoE.html
├─ script/
│ ├─ administrador/
│ │ └─ cursos.js
│ ├─ docente/
│ │ └─ docentes.js
│ └─ estudiante/
│ └─ (scripts estudiante)
├─ styles/
│ └─ (*.css)
├─ img/
│ └─ (iconos e imágenes)
└─ README.md
```

---

## Requisitos y entregables
- **Repositorio** (privado).
- **Archivo `db`** con la información (si usas JSON-Server).
- **Documentación**: este `README.md`.
- **Persistencia**: `localStorage` por defecto; opcional **JSON-Server** o Mock API si el trainer lo requiere.
- **Uso de Fetch API** para todas las peticiones.
- **No incluye (fase inicial)**: integraciones externas (CRM/videollamadas), apps móviles nativas, multilenguaje.

---

## Cómo ejecutar
1. Clonar el repo.
2. Abrir `index.html` (o usar *Live Server*).
3. Verificar endpoints MockAPI en los archivos JS.
4. Flujos:
   - **Login** (`USUARIO`) → redirige según el rol.
   - **Admin**: crear curso en `AñadirCA.html` → lista en `gestionCA.html`.
   - **Docente**: subir contenido/asignación en `subirCD.html`, editar en `EditarAD.html`.
   - **Estudiante**: ver cursos, lecciones y progreso desde su panel.

---

## Convenciones de código
- JS sencillo con `async/await` + `fetch`.
- Nombres alineados al HTML existente (clases como `.entrada`, `.entrada-select`, `.Duracion`).
- Botones con `<button><a onclick="..."></a></button>` para mantener el estilo visual del proyecto.
- Sin helpers innecesarios ni duplicar URLs en el mismo módulo.

---

## Autores
- **Domínguez Robinson**
- **Pinto Sharick**













```