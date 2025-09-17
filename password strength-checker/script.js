// Generate rain drops
function createRain() {
  const rainContainer = document.querySelector('.rain');
  if (!rainContainer) {
    console.error('Rain container not found');
    return;
  }
  
  const numberOfDrops = 150;
  
  // Clear existing drops first
  const existingDrops = rainContainer.querySelectorAll('.drop');
  existingDrops.forEach(drop => drop.remove());
  
  for (let i = 0; i < numberOfDrops; i++) {
    const drop = document.createElement('div');
    drop.className = 'drop';
    drop.style.left = Math.random() * 100 + '%';
    drop.style.animationDelay = Math.random() * 2 + 's';
    drop.style.animationDuration = (Math.random() * 1 + 1.5) + 's';
    drop.style.opacity = (Math.random() * 0.3 + 0.1);
    rainContainer.appendChild(drop);
  }
  
  console.log(`Created ${numberOfDrops} rain drops`);
}

// Password strength checker function
function checkPasswordStrength(password) {
  const output = document.getElementById('output');
  let score = 0;
  let feedback = [];

  // Check password criteria
  if (password.length >= 8) {
    score++;
  } else {
    feedback.push('at least 8 characters');
  }

  if (/[a-z]/.test(password)) {
    score++;
  } else {
    feedback.push('lowercase letters');
  }

  if (/[A-Z]/.test(password)) {
    score++;
  } else {
    feedback.push('uppercase letters');
  }

  if (/[0-9]/.test(password)) {
    score++;
  } else {
    feedback.push('numbers');
  }

  if (/[^a-zA-Z0-9]/.test(password)) {
    score++;
  } else {
    feedback.push('special characters');
  }

  // Remove existing classes
  output.classList.remove('weak', 'medium', 'strong');

  // Handle empty password
  if (password.length === 0) {
    output.textContent = 'Enter password to check strength';
    return;
  }

  // Determine strength and provide feedback
  if (score < 3) {
    output.textContent = `Weak - Add: ${feedback.join(', ')}`;
    output.classList.add('weak');
  } else if (score < 5) {
    output.textContent = `Medium - Add: ${feedback.join(', ')}`;
    output.classList.add('medium');
  } else {
    output.textContent = 'Strong Password!';
    output.classList.add('strong');
  }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, initializing...');
  
  // Create rain animation with a slight delay
  setTimeout(() => {
    createRain();
  }, 500);
  
  // Setup password input listener
  const passwordInput = document.getElementById('password');
  if (passwordInput) {
    passwordInput.addEventListener('input', function() {
      checkPasswordStrength(this.value);
    });
    console.log('Password input listener added');
  } else {
    console.error('Password input not found');
  }
});

// Optional: Add some additional interactive features
document.addEventListener('keydown', function(e) {
  // Press 'R' to regenerate rain
  if (e.key.toLowerCase() === 'r') {
    console.log('Regenerating rain...');
    createRain();
  }
});

// Force rain creation on window load as backup
window.addEventListener('load', function() {
  console.log('Window loaded, checking rain...');
  const drops = document.querySelectorAll('.drop');
  if (drops.length === 0) {
    console.log('No rain drops found, creating...');
    createRain();
  }
});

// Show/hide password toggle (optional enhancement)
function togglePasswordVisibility() {
  const passwordInput = document.getElementById('password');
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
}