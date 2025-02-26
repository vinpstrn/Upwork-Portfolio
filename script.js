const tab = document.querySelector('.projects__tab');
const tabBtn = document.querySelectorAll('.projects__tab-btn');
const tabContent = document.querySelectorAll('.projects__content');


tab.addEventListener('click', (e) => {
  
  const clicked = e.target.closest('.projects__tab-btn');

  // Guard clause
  if(!clicked) return; 

  // Remove classes
  tabBtn.forEach(t => t.classList.remove('projects__tab-btn--active'));
  tabContent.forEach(t => t.classList.remove('projects__content--active'));

  // Active tab
  clicked.classList.add('projects__tab-btn--active');

  // Active tab content
  document.querySelector(`.projects__content--${clicked.dataset.btn}`).classList.add('projects__content--active');

  console.log(clicked);
})