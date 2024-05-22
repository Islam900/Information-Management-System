window.Echo.private(`messages.${userId}`)
    .listen('MessageSent', (e) => {
        console.log(e.message);
    });