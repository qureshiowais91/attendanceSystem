import QRScanner from '../../../../components/qr_scanner/QRScanner';
import { useState } from 'react';
import { staffAttendance } from '../../../../API/APIs';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const StaffAttandaceScanner = () => {
  const [scannedData, setScannedData] = useState('');
  const token = useSelector((state) => state.auth.jwt);
  const navigate = useNavigate();

  // Define the onScan callback function
  const handleScan = (data) => {
    setScannedData(data);
    (async () => {
      const payload = {
        token,
        schoolId: data,
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
