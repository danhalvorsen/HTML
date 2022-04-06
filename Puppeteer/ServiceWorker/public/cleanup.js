if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(function (registrations) {
      for (const registration of registrations) {
        // unregister service worker
        if(registration)
        {
            console.log('serviceWorker unregistered');
            registration.unregister();
        }
      }
    });
  }