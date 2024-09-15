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

        if (el.classList.contains("btn-clear")) {
          this.clearDisplay();
        }

        if (el.classList.contains("btn-del")) {
          this.apagarUm();
        }

        if (el.classList.contains("btn-eq")) {
          this.calcularConta();
        }
      });
    },

    btnForDisplay(valor) {
      this.display.value += valor;
    },

    calcularConta() {
      try {
        // Avalia a expressão no display usando math.js
        this.display.value = math.evaluate(this.display.value);
      } catch (e) {
        // Se ocorrer um erro, exibe uma mensagem de erro
        this.display.value = "Erro";
      }
    },

    apagarUm() {
      this.display.value = this.display.value.slice(0, -1);
    },

    clearDisplay() {
      this.display.value = "";
    },
  };
}
const calculator = criaCalculadora();
calculator.inicia();
