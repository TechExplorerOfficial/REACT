
// Seleção do formulário e dos elementos
const form = document.querySelector('#devForm');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const seniority = document.querySelector('#seniority');
const technologies = document.querySelectorAll('input[name="technologies"]');
const experience = document.querySelector('#experience');
const errorMessage = document.querySelector('#errorMessage');

// Função para validar email
function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// Função para validar seleção de tecnologias
function validateTechnologies() {
  return Array.from(technologies).some(tech => tech.checked);
}

// Manipulador de submissão do formulário
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Impede o envio padrão
  let errors = [];

  // Validação de nome e sobrenome
  if (firstName.value.trim() === '') {
    errors.push('O nome é obrigatório.');
  }

  if (lastName.value.trim() === '') {
    errors.push('O sobrenome é obrigatório.');
  }

  // Validação de email
  if (!validateEmail(email.value)) {
    errors.push('O email é inválido.');
  }

  // Validação de senioridade
  if (seniority.value === '') {
    errors.push('A senioridade deve ser selecionada.');
  }

  // Validação de tecnologias
  if (!validateTechnologies()) {
    errors.push('Selecione pelo menos uma tecnologia.');
  }

  // Validação de experiência
  if (experience.value.trim() === '' || isNaN(experience.value) || Number(experience.value) < 0) {
    errors.push('Informe uma experiência válida em anos.');
  }

  // Exibição de erros ou submissão bem-sucedida
  if (errors.length > 0) {
    errorMessage.innerHTML = errors.join('<br>');
    errorMessage.style.color = 'red';
  } else {
    errorMessage.innerHTML = 'Formulário enviado com sucesso!';
    errorMessage.style.color = 'green';
    form.reset(); // Reseta o formulário após submissão bem-sucedida
  }
});