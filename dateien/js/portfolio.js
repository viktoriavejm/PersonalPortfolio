
const beschreibungen = [
    "Leaf on a tree",
    "Berry on a branch",
    "White Daisies",
    "White Daisies",
    "Red Leaves on branches",
    "Branch of a fir",
    "Branch of a fir",
    "A blue little flower",
    "Green grass",
    "Green grass",
    "Black little berries",
    "Black little berries",
    "Red currants"
  ];

  const projectDescriptions = [
    "A classic TicTacToe game",
    "A mobile-friendly web app for tracking car mileage",
    "PhotoMemory: Like photos, read descriptions, and change profile pictures",
    "A dice game featuring Minecraft characters",
    "A Tonic-themed website showcasing candies",
    "A 2D collection game to catch a disco ball as many times as possible",
    "A web app to create your own custom perfume blend by selecting scents and notes"
  ];
  

function loadProjects(id) {

    document.getElementById('project_back').style.display = 'grid';

    document.getElementById('project_info_content').style.display = 'grid';
    
    let stringValue = ""
    let backValue = `<p id="back" onclick="projectsBack()">Back</p>`
    //stringValue += `<p id="back" onclick="projectsBack()">Back</p>`
    switch(id){
        case 1:
            for (let i = 0; i < beschreibungen.length; i++) {
               stringValue += `

                <div class="projects_main_galleryBox_project1">
                    <img class="project_main_img_photos" src="../../fotos/projekte/fotografie/foto${i}.jpg" alt="foto${i}">
                    <p class="foto_beschreibing">${beschreibungen[i]}</p>
                </div>`
            }

            console.log(stringValue)
            document.getElementById('project_back').innerHTML = backValue;
            document.getElementById('project_info_content').innerHTML = stringValue;
            document.getElementById("projects_main").style.display = 'none';
            document.getElementById("projects_main_headline").style.display = 'none';

        case 2:

        for (let i = 1; i < projectDescriptions.length; i++) {
            stringValue += `

             <div class="projects_main_galleryBox_project1">
                 <img class="project_main_img_photos" src="../../fotos/projekte/webseiten/pr${i}.png" alt="projekt${i}">
                 <p class="foto_beschreibing">${projectDescriptions[i]}</p>
             </div>`
         }

         console.log(stringValue)
         document.getElementById('project_back').innerHTML = backValue;
         document.getElementById('project_info_content').innerHTML = stringValue;
         document.getElementById("projects_main").style.display = 'none';
         document.getElementById("projects_main_headline").style.display = 'none';

        case 3:

        case 4:
    }
}

function projectsBack() {
    document.getElementById('project_back').style.display = 'none';
    document.getElementById('project_info_content').style.display = 'none';
    document.getElementById("projects_main").style.display = 'grid';
    document.getElementById("projects_main_headline").style.display = 'grid';
}