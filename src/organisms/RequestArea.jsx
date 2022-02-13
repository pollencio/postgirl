import TabAreas from '../templates/TabAreas';

function RequestArea() {
  return (
    <TabAreas
      tabs={['Params', 'Body', 'Headers']}
      areas={['Params', 'Body', 'Headers']}
    />
  );
}

export default RequestArea;
