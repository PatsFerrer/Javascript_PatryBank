import ehUmCpf from "./valida-cpf.js";
const camposDoForm = document.querySelectorAll('[required]');

camposDoForm.forEach((campo) => {
  campo.addEventListener('blur', () => verificarCampo(campo));
})

function verificarCampo(campo) {
  if (campo.name === 'cpf' && campo.value.length >= 11) {
    ehUmCpf(campo);
  }
}