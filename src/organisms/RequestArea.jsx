import TabAreas from '../templates/TabAreas';
import ParamsTable from './ParamsTable';

function RequestArea() {
  return (
    <TabAreas
      tabs={['Params', 'Body', 'Headers']}
      areas={[<ParamsTable />, 'Body', 'Headers']}
    />
  );
}

export default RequestArea;
