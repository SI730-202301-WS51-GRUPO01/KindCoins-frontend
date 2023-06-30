export default {
    data() {
      return {
        name: '',
        age: 0,
        email: ''
      };
    },
    methods: {
      save() {
        // Aquí puedes implementar la lógica para guardar el modelo en tu backend o realizar otras operaciones.
        console.log('Modelo guardado:', this.name, this.age, this.email);
      }
    }
};