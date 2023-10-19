function validation(values) {
  let error = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  if (values.email === "") {
    error.email = "O email não deve estar vazio";
  } else if (!emailPattern.test(values.email)) {
    error.email = "Formato de email inválido";
  } else {
    error.email = "";
  }

  if (values.password === "") {
    error.password = "A senha não deve estar vazia";
  } else if (!passwordPattern.test(values.password)) {
    error.password = "A senha deve conter pelo menos 8 caracteres, incluindo números, letras maiúsculas e minúsculas"
  } else {
    error.password = "";
  }

  return error;
}