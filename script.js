function requestNotificationPermission() {
    Notification.requestPermission().then(function(permission) {
        if (permission === 'granted') {
            subscribeToPushNotifications();
        }
    });
}

function subscribeToPushNotifications() {
    navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) {
        serviceWorkerRegistration.pushManager.subscribe({ userVisibleOnly: true }).then(function(subscription) {
            // Send subscription information to your server
        }).catch(function(error) {
            console.error('Failed to subscribe to push notifications:', error);
        });
    });
}
