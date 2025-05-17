  <template>
    <div id="contact-form-app" class="form-contact ">
      <form @submit.prevent="submitForm">
        <input
          type="text"
          v-model="name"
          class="form-control footer-input margin-b-20"
          placeholder=" Ваше имя *"
          required
        >
        <input
          type="email"
          v-model="email"
          class="form-control footer-input margin-b-20"
          placeholder=" Email *"
          required
        >
        <input
          type="text"
          v-model="phone"
          class="form-control footer-input margin-b-20"
          placeholder=" Телефон *"
          required
        >
        <textarea
          v-model="message"
          class="form-control footer-input margin-b-30"
          rows="6"
          placeholder=" Ваше сообщение *"
          required
        ></textarea>
        <button type="submit" class="btn-theme btn-theme-sm btn-base-bg text-uppercase">
          Отправить
        </button>
      </form>

      <!-- Вывод сообщений об отправке -->
      <div v-if="submissionSuccess" class="success-message">
        Спасибо! Ваше сообщение отправлено.
      </div>
      <div v-if="submissionError" class="error-message">
        Произошла ошибка, попробуйте позже.
      </div>
    </div>
  </template>

  <script>
  import axios from 'axios'; // не забудьте установить axios (npm install axios)

  export default {
    name: 'ContactForm',
    data() {
      return {
        name: '',
        email: '',
        phone: '',
        message: '',
        submissionSuccess: false,
        submissionError: false
      };
    },
    methods: {
      submitForm() {
        const formData = {
          name: this.name,
          email: this.email,
          phone: this.phone,
          message: this.message
        };

        console.log("Отправляем данные формы:", formData);

        // Отправляем данные на сервер Django через endpoint '/send-email/'
        axios
          .post('/send-email/', formData)
          .then(() => {
            this.submissionSuccess = true;
            this.submissionError = false;
            // очищаем поля формы
            this.name = '';
            this.email = '';
            this.phone = '';
            this.message = '';
          })
          .catch(error => {
            this.submissionSuccess = false;
            this.submissionError = true;
            console.error('Ошибка при отправке данных:', error);
          });
      }
    }
  };
  </script>

  <style scoped>



/* Цвет текста плейсхолдера */
.form-contact input::placeholder,
.form-contact textarea::placeholder {
  color: #000000; /* Или другой нужный вам цвет */
}

  /* Кнопка отправки */
  .btn-theme {
    background-color: #00bed7;  /* Фирменный синий */
    border: none;
    color: #fff;
    padding: 10px 20px;
    text-transform: uppercase;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-family: 'Roboto', sans-serif !important; /* новый шрифт */
  }
  .btn-theme:hover {
    background-color: #0098b6;
  }
  /* Дополнительная кнопка "Связаться с нами" */
  .btn-contact {
    margin-top: 20px;
    padding: 12px 25px;
    font-size: 16px;
  }

  /* Отступ для правой колонки контактов */
  .contact-wrapper {
    padding-left: 100px; /* отступ для выравнивания */
  }
  </style>

