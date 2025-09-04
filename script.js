    
const toggleButton = document.getElementById('toggle-theme');
   const body = document.body;
   toggleButton.addEventListener('click', function() {
       body.classList.toggle('dark-mode');
   });
   
   const form = document.getElementById('contact-form');
   form.addEventListener('submit', function(event) {
       event.preventDefault();
       const name = document.getElementById('name').value;
       const email = document.getElementById('email').value;
       const message = document.getElementById('message').value;
       if (name && email && message) {
           alert('Thank you, ' + name + '! Your message has been sent.');
           form.reset();
       } else {
           alert('Please fill out all fields.');
       }
   });
   const cards = document.querySelectorAll('.project-card');
   cards.forEach(card => {
       const button = document.createElement('button');
       button.textContent = 'Show More';
       card.appendChild(button);
       button.addEventListener('click', () => {
           alert('More details about this project!');
       });
   });
  
  javascript
   const backToTop = document.getElementById('back-to-top');
   window.addEventListener('scroll', () => {
       if (window.scrollY > 300) {
           backToTop.style.display = 'block';
       } else {
           backToTop.style.display = 'none';
       }
   });
   backToTop.addEventListener('click', () => {
       window.scrollTo({ top: 0, behavior: 'smooth' });
   });

