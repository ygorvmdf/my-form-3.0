const FORM_DATA = 'FORM_DATA';

const sendForm = (formData) => ({
  type: FORM_DATA,
  formData,
})

export default sendForm;