function validation(values) {
  let errors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  if (!values.email) {
    errors.email = "O email não deve estar vazio";
  } else if (!emailPattern.test(values.email)) {
    errors.email = "Formato de email inválido";
  }

  if (!values.password) {
    errors.password = "A senha não deve estar vazia";
  } else if (!passwordPattern.test(values.password)) {
    errors.password = "A senha deve conter pelo menos 8 caracteres, incluindo números, letras maiúsculas e minúsculas";
  }

  return errors;
}

export default validation;
