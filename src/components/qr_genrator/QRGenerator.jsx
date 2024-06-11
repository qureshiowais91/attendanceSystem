import QRCode from 'react-qr-code';

const QRGenerator = () => {
    
    



  return (
    // Can be anything instead of `maxWidth` that limits the width.
    <div
      style={{ height: 'auto', margin: '0 auto', maxWidth: 64, width: '100%' }}
    >
      <QRCode
        size={256}
        style={{ height: 'auto', maxWidth: '255', width: '255' }}
        value={"6666d90445a48c7e5416b7d2"}
        viewBox={`0 0 256 256`}
      />
    </div>
  );
};

export default QRGenerator;
