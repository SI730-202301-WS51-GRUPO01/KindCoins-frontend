<template>
  <div class="payment-dialog" v-if="modelValue">
    <div class="payment-dialog-overlay" @click="closeDialog"></div>
    <div class="payment-dialog-content">
      <h2 class="payment-dialog-title">Seleccione un método de pago:</h2>
      <div class="payment-methods">
        <button
          class="payment-button visa"
          v-on:click="selectedPaymentMethod = 'visa'"
        >
          <input
            type="radio"
            id="visa"
            name="payment-method"
            value="visa"
            v-model="selectedPaymentMethod"
          />
          <label
            for="visa"
            v-bind:class="{ selected: selectedPaymentMethod === 'visa' }"
            >Visa</label
          >
        </button>

        <button
          class="payment-button yape"
          v-on:click="selectedPaymentMethod = 'yape'"
        >
          <input
            type="radio"
            id="yape"
            name="payment-method"
            value="yape"
            v-model="selectedPaymentMethod"
          />
          <label
            for="yape"
            v-bind:class="{ selected: selectedPaymentMethod === 'yape' }"
            >Yape</label
          >
        </button>

        <button
          class="payment-button plin"
          v-on:click="selectedPaymentMethod = 'plin'"
        >
          <input
            type="radio"
            id="plin"
            name="payment-method"
            value="plin"
            v-model="selectedPaymentMethod"
          />
          <label
            for="plin"
            v-bind:class="{ selected: selectedPaymentMethod === 'plin' }"
            >Plin</label
          >
        </button>
      </div>

      <div v-if="showPaymentMethod">
        <component :is="selectedPaymentMethod + '-payment-dialog'" />
      </div>

      <button
        class="donation-continue-button"
        v-if="!showPaymentMethod"
        v-on:click="continueToSelectedPaymentMethod"
      >
        Continuar
      </button>
    </div>
  </div>
</template>

<script>
import VisaPaymentDialog from "./VisaMethod.component.vue";
import YapePaymentDialog from "./YapeMethod.component.vue";
import PlinPaymentDialog from "./PlinMethod.component.vue";
export default {
  components: {
    VisaPaymentDialog,
    YapePaymentDialog,
    PlinPaymentDialog,
  },
  props: ["modelValue"],
  data() {
    return {
      selectedPaymentMethod: "",
      showPaymentMethod: false,
    };
  },
  methods: {
    closeDialog() {
      this.$emit("update:modelValue", false);
    },
    continueToSelectedPaymentMethod() {
      if (this.selectedPaymentMethod) {
        this.showPaymentMethod = true;
      }
    },
  },
};
</script>

<style>
.payment-methods {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}
.payment-button {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 5px;
  padding: 10px;
  margin-right: 1rem;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
}
.visa {
  background-color: #1a1e4d;
  color: #fff;
}
.yape {
  background-color: #ffc600;
  color: #000;
}
.plin {
  background-color: #0597a6;
  color: #fff;
}
.payment-text {
  margin-right: 0.5rem;
}
.payment-icon {
  font-size: 20px;
}
</style>
