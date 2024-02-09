self.addEventListener('push', function(event) {
    const options = {
        body: event.data.text(),
        icon: 'path_to_icon.png',
        badge: 'path_to_badge.png'
    };

    event.waitUntil(
        self.registration.showNotification('Push Notification', options)
    );
});
