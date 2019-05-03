import React, { Fragment, useState } from 'react';

const Geolocation = props => {
  const [latitude, setLatitude] = useState('N/A');
  const [longitude, setLongitude] = useState('N/A');
  const [watcher, setWatcher] = useState(null);

  const location = navigator.geolocation;

  if (location) {
    // geolocation available
    const update = position => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      navigator.geolocation.clearWatch(watcher);
    };

    const error = message => {
      console.error(message);
    };

    const options = {
      enableHighAccuracy: true,
      timeout: Infinity,
      maximumAge: 0
    };

    if (!watcher) {
      // update position every 5 seconds (default time intervall)
      setWatcher(navigator.geolocation.watchPosition(update, error, options));
    }
  } else {
    // geolocation not available
    throw new Error('Geolocation Service not available.');
  }

  return (
    <Fragment>
      { location ? (
        <Fragment>
          <p><label>Latitude:&nbsp;</label>{latitude}</p>
          <p><label>Longitude:&nbsp;</label>{longitude}</p>
        </Fragment>
      ) : (
        <div>Service not available</div>
      ) }
    </Fragment>
  );
}

export default Geolocation;
