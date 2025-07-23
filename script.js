
const sections = {
  bookshelf: { title: "Skills & Certifications", content: "Instructional Design, LMS Admin, Coaching…" },
  cap: { title: "Education", content: "MA in Education, University of ABC, 2015" },
  laptop: { title: "Experience", content: "Senior L&D Specialist at ABC Corp, 2020–Present…" },
  bag: { title: "Projects Portfolio", content: "Led 10+ training projects. Designed eLearning…" },
  drawer: { title: "Hobbies", content: "Photography, cycling, and game design" },
  picture: { title: "Personal Interests", content: "Avid reader & lover of abstract art" }
};

document.querySelectorAll('.clickable').forEach(el => {
  el.addEventListener('click', () => {
    const id = el.id;
    document.getElementById('popupTitle').innerText = sections[id].title;
    document.getElementById('popupContent').innerText = sections[id].content;
    document.getElementById('popup').classList.add('show');
  });
});

function closePopup() {
  document.getElementById('popup').classList.remove('show');
}
