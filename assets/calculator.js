function criaCalculadora() {
  return {
    display: document.querySelector(".display"),

    inicia() {
      this.clickBotoes();
    },

    clickBotoes() {
      document.addEventListener("click", (e) => {
        const el = e.target;

        if (el.classList.contains("btn-num")) {
          this.btnForDisplay(el.innerText);
        }
      });
    },

    btnForDisplay(valor) {
      this.display.value += valor;
    },
  };
}
const calculator = criaCalculadora();
calculator.inicia();
