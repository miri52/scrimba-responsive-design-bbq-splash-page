const emailCollector = document.getElementById('Email-Collector');
const mainContent = document.getElementById('Main-Content')


function handleSubmit (e) {
    e.preventDefault();
    let ourFormData = new FormData(e.target)
    let userFirstName = ourFormData.get('firstName')
    let userEmail = ourFormData.get('emailAddress')
    let updatedContent = `
     <h2>Congratulations, ${userFirstName}!</h2>
        
        <p>
         You're on your way to becoming a BBQ Master!
        </p>
    
        <p class="fine-print">
          You'll get weekly BBQ tips sent to: ${userEmail} 
        </p>
    `
    mainContent.innerHTML = updatedContent;
}

emailCollector.addEventListener('submit', handleSubmit)