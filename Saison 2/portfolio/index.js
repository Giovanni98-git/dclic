// Validation du formulaire
const form = document.getElementById('contactForm');
const nomInput = document.getElementById('nom');
const emailInput = document.getElementById('email');
const sujetInput = document.getElementById('sujet');
const messageInput = document.getElementById('message');

// Fonction de validation d'email
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Afficher/cacher les messages d'erreur
function showError(inputId, errorId, show) {
    const errorElement = document.getElementById(errorId);
    const inputElement = document.getElementById(inputId);
    
    if (show) {
        errorElement.style.display = 'block';
        inputElement.style.borderColor = '#dc3545';
    } else {
        errorElement.style.display = 'none';
        inputElement.style.borderColor = '#e9ecef';
    }
}

// Validation en temps réel
nomInput.addEventListener('blur', function() {
    showError('nom', 'nomError', this.value.trim() === '');
});

emailInput.addEventListener('blur', function() {
    showError('email', 'emailError', !validateEmail(this.value));
});

sujetInput.addEventListener('change', function() {
    showError('sujet', 'sujetError', this.value === '');
});

messageInput.addEventListener('blur', function() {
    showError('message', 'messageError', this.value.trim() === '');
});

// Soumission du formulaire
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    let isValid = true;
    
    // Validation du nom
    if (nomInput.value.trim() === '') {
        showError('nom', 'nomError', true);
        isValid = false;
    } else {
        showError('nom', 'nomError', false);
    }
    
    // Validation de l'email
    if (!validateEmail(emailInput.value)) {
        showError('email', 'emailError', true);
        isValid = false;
    } else {
        showError('email', 'emailError', false);
    }
    
    // Validation du sujet
    if (sujetInput.value === '') {
        showError('sujet', 'sujetError', true);
        isValid = false;
    } else {
        showError('sujet', 'sujetError', false);
    }
    
    // Validation du message
    if (messageInput.value.trim() === '') {
        showError('message', 'messageError', true);
        isValid = false;
    } else {
        showError('message', 'messageError', false);
    }
    
    if (isValid) {
        // Afficher le message de succès
        document.getElementById('successMessage').style.display = 'block';
        
        // Réinitialiser le formulaire
        form.reset();
        
        // Cacher le message après 5 secondes
        setTimeout(() => {
            document.getElementById('successMessage').style.display = 'none';
        }, 5000);
    }
});

// Animation au scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});