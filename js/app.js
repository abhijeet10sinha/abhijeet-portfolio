


//Download Resume
const downloadBtn = document.getElementById('download-cv-btn');
downloadBtn.addEventListener('click', function(){
    window.location.href = 'resume/resume.docx';
})

const downloadBtn2 = document.getElementById('download-cv-btn2');
downloadBtn2.addEventListener('click', function(){
    window.location.href = 'resume/resume.docx';
})
// Get the form element
const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  e.preventDefault(); 

  const name = document.querySelector('input[type="text"]').value;
  const email = document.querySelector('input[type="email"]').value;
  const subject = document.querySelector('input[type="text"][placeholder="Subject"]').value;
  const message = document.querySelector('textarea').value;

  
  const userData = {
    Name: name,
    Email: email,
    Subject: subject,
    Message: message
  };

  
  localStorage.setItem('userData', JSON.stringify(userData));

  
  form.reset();

  alert('Your message has been sent!');
});
