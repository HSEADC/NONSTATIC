import './index.css'

var form = document.getElementById('my-form')

async function handleSubmit(event) {
  event.preventDefault()
  var status = document.getElementById('my-form-status')
  var button = document.getElementById('my-form-button')
  var collectEmails = document.querySelector('.collectEmails')
  var data = new FormData(event.target)
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: 'application/json'
    }
  })
    .then((response) => {
      status.style.display = 'block'
      if (response.ok) {
        status.innerHTML =
          'cпасибо <3 После запуска мы добавим вас в наш список рассылки'
        button.remove()
        collectEmails.remove()
        form.reset()
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, 'errors')) {
            status.innerHTML = data['errors']
              .map((error) => error['message'])
              .join(', ')
          } else {
            status.innerHTML = 'чет не сработало('
          }
        })
      }
    })
    .catch((error) => {
      status.innerHTML = 'чет не сработало('
    })
}
if (form) {
  form.addEventListener('submit', handleSubmit)
}
