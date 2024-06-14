import QRCode from 'react-qr-code';

const QRGenerator = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ maxWidth: '256px', width: '100%' }}>
        <QRCode
          size={256}
          value={"6666d90445a48c7e5416b7d2"}
          viewBox={`0 0 256 256`}
        />
      </div>
    </div>
  );
};

export default QRGenerator;
