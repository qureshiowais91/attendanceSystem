import QRScanner from '../../../../components/qr_scanner/QRScanner';
import { useState } from 'react';
import { staffAttendance } from '../../../../API/APIs';
import { useSelector } from 'react-redux';

export const StaffAttandaceScanner = () => {
  const [scannedData, setScannedData] = useState('');
  const token = useSelector((state) => state.auth.jwt);

  // Define the onScan callback function
  const handleScan = (schoolID) => {
    setScannedData(schoolID);
    (async () => {
      const payload = {
        token,
        schoolId: schoolID || "" ,
        approximateLocation: 'will add later',
      };
      await staffAttendance(payload);
      // navigate("/teacher/profile");
    })();
  };

  return (
    <div>
      <h1>QR Code Scanner</h1>
      <QRScanner onScan={handleScan} />
      {scannedData && <p>Scanned QR Code: {scannedData}</p>}
    </div>
  );
};
