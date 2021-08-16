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
  // const [data, setData] = React.useState([]);
  const [dataList, setDataList] = React.useState([]);
  const [show, setShow] = React.useState(false);

  console.log(dataList, 'list');

  return (
    <div style={{ margin: '0 auto' }}>
      <button onClick={() => setShow(!show)}>Mostrar</button>
      <>
        {show && (
          <BarcodeScannerComponent
            width={375}
            height={300}
            torch
            // stopStream={result.text}
            onUpdate={(err, result) => {
              if (result) {
                setData(result.text);
                setDataList([...dataList, result.text]);
                setShow(false);
              }
            }}
          />
        )}
        <ul>
          {dataList.map(dataItem => (
            <li>{dataItem}</li>
          ))}
        </ul>
      </>
    </div>
  );
}
