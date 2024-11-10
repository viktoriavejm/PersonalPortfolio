

function loadProjects(id) {
    
    let stringValue = ""
    //stringValue += `<p id="back" onclick="projectsBack()">Back</p>`
    switch(id){
        case 1:
            for (let i = 1; i < bilder.length; i++) {
               stringValue += `

                <div class="projects_main_galleryBox_project1">
                    <img class="project_main_img_photos" src="../../fotos/projekte/fotografie/foto${i}.jpg" alt="foto${i}">
                    <p>${bilder[i].beschreibung}</p>
                </div>`
                
            }

            console.log(stringValue)

            document.getElementById('projects_info').innerHTML = stringValue;
            document.getElementById("projects_main").style.display = 'none';

        case 2:

        case 3:

        case 4:
    }
}

function projectsBack() {
    document.getElementById("projects_main").style.display = 'grid';
}