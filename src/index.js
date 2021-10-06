import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)

serviceWorkerRegistration.register({
  onSuccess: () => {},
  onUpdate: (registration) => {
    alert('ورژن جدید برنامه آماده است')
    if (registration && registration.waiting) {
      registration.waiting.postMessage({ type: 'SKIP_WAITING' })
    }
    caches.keys().then(function (names) {
      for (let name of names) caches.delete(name)
    })

    window.location.reload()
  },
})
