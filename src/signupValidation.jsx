function validation(values) {
  let error = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  if (values.name === "") {
    error.name = "O nome não deve estar vazio";
  } else {
    error.name = "";
  }

  if (values.email === "") {
    error.email = "O email não deve estar vazio";
  } else if (!email_pattern.test(values.email)) {
    error.email = "Formato de email inválido";
  } else {
    error.email = "";
  }

  if (values.password === "") {
    error.password = "A senha não deve estar vazia";
  } else if (!password_pattern.test(values.password)) {
    error.password = "A senha deve conter pelo menos 8 caracteres, incluindo números, letras maiúsculas e minúsculas";
  } else {
    error.password = "";
  }

  return error;
}