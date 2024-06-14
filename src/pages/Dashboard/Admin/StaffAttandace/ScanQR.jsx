import QRGenerator from '../../../../components/qr_genrator/QRGenerator';
import { useSelector } from 'react-redux';

export const ScanQR = () => {
  const id = useSelector((state) => {
    return state.auth.id;
  });



  return (
    <div>
      <QRGenerator id={id}></QRGenerator>
    </div>
  );
};
