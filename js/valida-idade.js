export default function ehMaiorDeIdade(campo) {
  const dataNascimento = new Date(campo.value);
  validarIdade(dataNascimento)

  console.log(validarIdade(dataNascimento));
}

function validarIdade(data) {
  const dataAtual = new Date();
  const idadeMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

  return dataAtual >= idadeMais18;
}