const imageData = [
  { image: "./images/1.jpeg", name: "Jennie", profession: "Teacher" },
  { image: "./images/2.jpeg", name: "John", profession: "Engineer" },
  { image: "./images/3.jpeg", name: "Emily", profession: "Designer" },
  { image: "./images/4.jpeg", name: "Michael", profession: "Doctor" },
  { image: "./images/5.jpeg", name: "Sophia", profession: "Developer" },

  { image: "./images/6.jpeg", name: "David", profession: "Artist" },
  { image: "./images/7.jpeg", name: "Emma", profession: "Architect" },
  { image: "./images/8.jpeg", name: "Ryan", profession: "Photographer" },
  { image: "./images/9.jpeg", name: "Olivia", profession: "Writer" },
  { image: "./images/10.jpeg", name: "Matthew", profession: "Scientist" },

  { image: "./images/11.jpeg", name: "Ava", profession: "Musician" },
  { image: "./images/12.jpeg", name: "Liam", profession: "Pilot" },
  { image: "./images/13.jpeg", name: "Isabella", profession: "Chef" },
  { image: "./images/14.jpeg", name: "Ethan", profession: "Athlete" },
  { image: "./images/15.jpeg", name: "Amelia", profession: "Lawyer" },
  // Add more data objects here
  { image: "./images/16.jpeg", name: "Lucas", profession: "Dancer" },
  { image: "./images/17.jpeg", name: "Mia", profession: "Entrepreneur" },
  { image: "./images/18.jpeg", name: "Jackson", profession: "Actor" },
  { image: "./images/19.jpeg", name: "Avery", profession: "Politician" },
  { image: "./images/20.jpeg", name: "Logan", profession: "Astronaut" },

  { image: "./images/21.jpeg", name: "Chloe", profession: "Psychologist" },
  { image: "./images/22.jpeg", name: "Elijah", profession: "Singer" },
  { image: "./images/23.jpeg", name: "Grace", profession: "Police Officer" },
  { image: "./images/24.jpeg", name: "Carter", profession: "Software Engineer" },
  { image: "./images/25.jpeg", name: "Sofia", profession: "Fashion Designer" },
];

function loadImages() {
  const gallery = document.getElementById("gallery");

  imageData.forEach((item, index) => {
    const container = document.createElement("div");
    container.classList.add("image-container");

    const image = document.createElement("img");
    image.classList.add("user-image");
    image.src = item.image;
    image.alt = `User Image ${index + 1}`;

    const name = document.createElement("p");
    name.classList.add("name");
    name.textContent = ` ${item.name}`;

    const profession = document.createElement("p");
    profession.classList.add("profession");
    profession.textContent = `${item.profession}`;

    container.appendChild(image);
    container.appendChild(name);
    container.appendChild(profession);

    gallery.appendChild(container);
  });
}

document.addEventListener("DOMContentLoaded", loadImages);
