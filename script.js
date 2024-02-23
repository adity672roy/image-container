const imageData = [
  { image: "1.jpeg", name: "Jennie", profession: "Teacher" },
  { image: "2.jpeg", name: "John", profession: "Engineer" },
  { image: "3.jpeg", name: "Emily", profession: "Designer" },
  { image: "4.jpeg", name: "Michael", profession: "Doctor" },
  { image: "5.jpeg", name: "Sophia", profession: "Developer" },

  { image: "6.jpeg", name: "David", profession: "Artist" },
  { image: "7.jpeg", name: "Emma", profession: "Architect" },
  { image: "8.jpeg", name: "Ryan", profession: "Photographer" },
  { image: "9.jpeg", name: "Olivia", profession: "Writer" },
  { image: "10.jpeg", name: "Matthew", profession: "Scientist" },

  { image: "11.jpeg", name: "Ava", profession: "Musician" },
  { image: "12.jpeg", name: "Liam", profession: "Pilot" },
  { image: "13.jpeg", name: "Isabella", profession: "Chef" },
  { image: "14.jpeg", name: "Ethan", profession: "Athlete" },
  { image: "15.jpeg", name: "Amelia", profession: "Lawyer" },
  // Add more data objects here
  { image: "16.jpeg", name: "Lucas", profession: "Dancer" },
  { image: "17.jpeg", name: "Mia", profession: "Entrepreneur" },
  { image: "18.jpeg", name: "Jackson", profession: "Actor" },
  { image: "19.jpeg", name: "Avery", profession: "Politician" },
  { image: "20.jpeg", name: "Logan", profession: "Astronaut" },

  { image: "21.jpeg", name: "Chloe", profession: "Psychologist" },
  { image: "22.jpeg", name: "Elijah", profession: "Singer" },
  { image: "23.jpeg", name: "Grace", profession: "Police Officer" },
  { image: "24.jpeg", name: "Carter", profession: "Software Engineer" },
  { image: "25.jpeg", name: "Sofia", profession: "Fashion Designer" },
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
    name.textContent = ` ${item.name}`;

    const profession = document.createElement("p");
    profession.textContent = `${item.profession}`;

    container.appendChild(image);
    container.appendChild(name);
    container.appendChild(profession);

    gallery.appendChild(container);
  });
}

document.addEventListener("DOMContentLoaded", loadImages);
