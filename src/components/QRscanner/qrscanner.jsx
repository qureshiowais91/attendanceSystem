// To use Html5QrcodeScanner (more info below)
import { Html5QrcodeScanner } from 'html5-qrcode';
import { useEffect, useState } from 'react';
export const QRscanner = () => {
    const [scanner,setScanner] = useState();

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
    function onScanSuccess(result) {
        html5QrcodeScanner.clear();
        setScanner(result)
    }

    function onScanFailure(error) {
      // handle scan failure, usually better to ignore and keep scanning.
      // for example:
      console.warn(`Code scan error = ${error}`);
    }

    let html5QrcodeScanner = new Html5QrcodeScanner('reader', {
      fps: 10,
      qrbox: { width: 250, height: 250 },
    });
    html5QrcodeScanner.render(onScanSuccess, onScanFailure);
  }, []);

  return <div id='reader' width='600px'>
    {
        scanner ? <div>success: <a href={"http:/"+scanner} > {scanner} </a> </div> : ""
    }

  </div>;
};
