import QRScanner from '../../../../components/qr_scanner/QRScanner';
import { useState } from 'react';
export const StaffAttandaceScanner = () => {
  const [scannedData, setScannedData] = useState('');

  // Define the onScan callback function
  const handleScan = (data) => {
    setScannedData(data);
  };

  return (
    <div>
      <h1>QR Code Scanner</h1>
      <QRScanner onScan={handleScan} />
      {scannedData && <p>Scanned QR Code: {scannedData}</p>}
    </div>
  );
};
