// Sample JSON data for projects
const projects = [
  {
    title: "To-Do List App",
    image: "Assets/to-do.png",
    description:
      "A simple to-do list app using Html, Css and Js. This is my frist major project made by myself. This is not completly ready yet!",
    viewLink: "https://diwashpandey1.github.io/to-do-list",
  },
];

// Function to dynamically insert cards into the HTML
function displayProjects() {
  const contentDiv = document.querySelector(".content");

  projects.forEach((project) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("div");
    title.classList.add("title");
    title.textContent = project.title;

    const img = document.createElement("img");
    img.src = project.image;
    img.alt = project.title;

    const description = document.createElement("div");
    description.classList.add("description");
    description.textContent = project.description;

    const button = document.createElement("button");
    button.classList.add("view");
    button.textContent = "View Project";

    button.setAttribute("target", "_blank");

    button.addEventListener("click", () => {
      window.open(project.viewLink, "_blank"); 
    });


    card.appendChild(title);
    card.appendChild(img);
    card.appendChild(description);
    card.appendChild(button);

    contentDiv.appendChild(card);
  });
}


window.onload = displayProjects;
