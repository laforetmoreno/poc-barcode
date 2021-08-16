import React from 'react';

import dynamic from 'next/dynamic';

const BarcodeScannerComponent = dynamic(
  () => import('react-webcam-barcode-scanner'),
  {
    ssr: false,
  }
);

// import BarcodeScannerComponent from 'react-webcam-barcode-scanner';

export default function Home() {
  const [data, setData] = React.useState('Not Found');
  const [error, setError] = React.useState(null);

  const handleScan = data => {
    setData(data);
  };
  const onError = err => setError(err);

  return (
    <div style={{ margin: '0 auto' }}>
      <>
        <BarcodeScannerComponent
          width={375}
          height={300}
          onUpdate={(err, result) => {
            if (result) {
              console.log(result, 'result');
              setData(result.text);
            } else setData('Not Found');
          }}
        />
        <p>{data}</p>
      </>
    </div>
  );
}
