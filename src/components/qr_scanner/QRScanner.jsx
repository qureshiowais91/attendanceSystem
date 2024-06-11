/* eslint-disable react/prop-types */
import { useRef, useEffect, useState } from 'react';
import { Html5Qrcode } from 'html5-qrcode';

const QRScanner = ({ onScan }) => {
  const videoRef = useRef(null);
  const html5QrCodeRef = useRef(null);
  const [cameraDevices, setCameraDevices] = useState([]);
  const [selectedDeviceId, setSelectedDeviceId] = useState(null); // State to store the selected device ID

  useEffect(() => {
    const qrCodeScanner = new Html5Qrcode('qr-reader');

    // Function to handle device enumeration
    const enumerateDevices = async () => {
      try {
        const devices = await Html5Qrcode.getCameras();
        setCameraDevices(devices);
        if (devices.length > 0) {
          setSelectedDeviceId(devices[1].id); // Select the first device by default
          startScanner(qrCodeScanner, devices[1].id);
        }
      } catch (error) {
        console.error('Error enumerating devices:', error);
      }
    };

    // Function to start the scanner with the selected device
    const startScanner = (scanner, deviceId) => {
      scanner.start(
        deviceId,
        {
          fps: 2,
          qrbox: 250,
        },
        (qrCode) => {
          onScan(qrCode);
        },
        (errorMessage) => {
          console.error(errorMessage);
        }
      );
    };

    // Enumerate devices
    enumerateDevices();

    // Store the reference to dispose it later
    html5QrCodeRef.current = qrCodeScanner;

    // Cleanup function
    return () => {
      if (html5QrCodeRef.current) {
        html5QrCodeRef.current.stop();
      }
    };
  }, [onScan]);

  // Function to handle camera change
  const handleCameraChange = (deviceId) => {
    setSelectedDeviceId(deviceId); // Update the selected device ID
    if (html5QrCodeRef.current) {
      html5QrCodeRef.current.stop();
      startScanner(html5QrCodeRef.current, deviceId);
    }
  };

  return (
    <div id='qr-reader' style={{ width: '100%' }}>
       <select value={selectedDeviceId} onChange={(e) => handleCameraChange(e.target.value)}>
        <br/>
        {cameraDevices.map((device) => (
          <option key={device.deviceId} value={device.id}>
            {device.label || `Camera ${device.deviceId}`}
          </option>
        ))}
      </select>
      <video ref={videoRef} style={{ width: '100%' }} />
     
    </div>
  );
};

export default QRScanner;
