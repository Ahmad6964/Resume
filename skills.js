async function skillButton(title, projects, images) {
  // console.log(images);
  // console.log(title);
  // console.log(projects);
  

  const response = await fetch("/Tamplates/skill.html");
  // console.log(response);
  const newButton = await response.text();
  // console.log(newButton);
  let html = newButton
    .replace("##name##", title)
    .replace("##more##", projects)
    .replace("##image##", images)
    // .replace("##more##",doneProject )
  // console.log(html);
  document.getElementById("new-div").innerHTML += html;   
  // console.log(html);    
}

async function moreInfo(projects) {
  console.log(projects);
  document.getElementById("more").innerHTML = "";
  // console.log(projects);
  const data = projects.split(",");
  console.log(data);
  for (let a = 0; a < data.length; a++) {
    const element = data[a];
    // console.log(element);

    document.getElementById("more").innerHTML += "";
    let newButton = document.createElement("button");
    newButton.classList.add(
      "border",
      "rounded-full",
      "bg-cyan-900",
      "text-white",
      "p-2",
      "font-semibold",
      "mb-10",
      
    );
    newButton.innerHTML = element;
    more.append(newButton);
  }
}
// // Done Projects 

// async function moreInfo(doneProject) {
//   // console.log(doneProject); 
//   document.getElementById("done").innerHTML = "";
//   // console.log(doneProject);
//   // const data = doneProject.split(",");
//   // console.log(data);
//   // for (let j = 0;  j< data.length; j++) {
//   //   const element = data[j];
//     // console.log(element);

//     document.getElementById("done").innerHTML += "";
//     let doneButton = document.createElement("button");
//     doneButton.classList.add(
//       "border",
//       "rounded-full",
//       "bg-cyan-900",
//       "text-white",
//       "p-2",
//       "font-semibold",
//       "mb-10"
//     );
//     doneButton.innerHTML = doneProject;
//     done.append(doneButton);
//   }



