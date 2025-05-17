<template>
  <div id="app">
    <!-- Подключаем компонент формы -->
    <ContactForm />
  </div>
</template>

<script>
import ContactForm from './components/ContactForm.vue'

export default {
  name: 'App',
  components: {
    ContactForm
  }
}
</script>

<style>
/* Добавьте свои глобальные стили, если требуется */
</style>



