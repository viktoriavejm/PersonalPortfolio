function loadProjects(id) {
    let stringValue = "";
    stringValue += `
    <div onclick="showProject(2)" class="projects_main_galleryBox">
        <img class="project_main_img" src="../../fotos/projekte/spotlas/atlas.png" alt="">
        <h4>Spotlas</h4>
        <p>A project we are currently working on...</p>
    </div>

    <div onclick="showProject(3)" class="projects_main_galleryBox">
        <img class="project_main_img" src="../../fotos/projekte/projekt_Kilometers/kilometers.png" alt="">
        <h4>Kilometers</h4>
        <p>2. Class - WebApp Task</p>
    </div>

    <div onclick="showProject(4)" class="projects_main_galleryBox">
        <img class="project_main_img" src="../../fotos/projekte/photomemory/logoB.png" alt="">
        <h4>PhotoMemory</h4>
        <p>2. Class - Semester Project</p>
    </div>

    <div onclick="showProject(5)" class="projects_main_galleryBox">
        <img class="project_main_img" src="../../fotos/projekte/tiktactoe/tik.png" alt="">
        <h4>TikTakToe</h4>
        <p>2. Class - Task</p>
    </div>`;
}