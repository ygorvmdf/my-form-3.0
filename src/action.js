const INFO_DATA = 'INFO_DATA';
const WARNING_ALERT = 'WARNING_ALERT';

const sendInfo = (info) => ({
  type: INFO_DATA,
  info,
})

const warningAlert = () => {
  alert('Preencha com cuidado esta informação.');
  return {
    type: WARNING_ALERT,
    showAlert: false,
  }
}

export { sendInfo, warningAlert };
