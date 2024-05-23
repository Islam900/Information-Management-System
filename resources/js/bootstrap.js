
import Echo from "laravel-echo"

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: '2f932b16a41e2526159c',
    cluster: 'ap2',
    encrypted: true
})
