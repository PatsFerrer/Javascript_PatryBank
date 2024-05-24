export default function ehMaiorDeIdade(campo) {
  const dataNascimento = new Date(campo.value);

  if (!validarIdade(dataNascimento)) {
    campo.setCustomValidity('O usuário não é maior de idade')
  }
}

function validarIdade(data) {
  const dataAtual = new Date();
  const idadeMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

  return dataAtual >= idadeMais18;
}