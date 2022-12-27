async function myfun() {
  await fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      const userInfo = data;
      const userName = "name";
      const userVideo = "video";
      const backgroundImage = "background";
      const userSummary = "about";
      const userSkills = "skills";
      const skillTitle = "title";
      const skillImage = "image";
      const skillProjects = "projects";
      const projectsInfo = "myProjects";
      const projectsTitle = "proTitle";
      const proDiscription = "discription";
      

      const items = document.querySelectorAll("[data-type]");
      console.log(items);

      items.forEach((element) => {
        if (element.dataset.type == "user-name") {
          element.innerHTML = userInfo[userName];
        }
        if (element.dataset.type == "user-about") {
          element.innerHTML = userInfo[userSummary];
        }
        if (element.dataset.type == "user-video") {
          element.innerHTML = `<video  width="320" height="280" controls data-type="user-video">
         <source src="${userInfo[userVideo]}" type="video/mp4" />
         Your Video
       </video>`;
        }
        if (element.dataset.type == "user-background") {
          element.innerHTML = `<img class="background-img w-full h-80" src="${userInfo[backgroundImage]}" alt="" data-type="user-background" />`;
        }
      });

      for (let i = 0; i < userInfo[userSkills].length; i++) {
        const skills_object = userInfo[userSkills][i];
        const title = skills_object[skillTitle];
        const projects = skills_object[skillProjects];
        const images = skills_object[skillImage];

        skillButton(title, projects, images);
      }
    

      for (let a = 0; a < userInfo[projectsInfo].length; a++) {
        const proDetails = userInfo[projectsInfo][a];
        // console.log(proDetails);
        element = document.getElementById("doneTitle")
        const protitle = userInfo[projectsInfo][a][projectsTitle];
        const Dis = userInfo[projectsInfo][a][proDiscription]
        console.log(protitle, Dis);
        document.getElementById("doneTitle").innerHTML += `
        <div onclick="show(${"div"+a})" class="border border-black rounded rounded-2xl bg-cyan-900 p-2 mb-2">
        <div class="text-center font-bold text-white mb-2">
        ${protitle}
        </div>
        <p id="${"div"+a}"  class="magic bg-white p-2 rounded rounded-xl">${Dis}</p>
        </div>`
      }
    });
}
myfun();
