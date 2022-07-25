import useAppContext from '../../../state/useAppContext';
import StaticTable from '../../../components/templates/StaticTable';
import NoDataMessage from '../../../components/molecules/NoDataMessage';

function ResponseCookies() {
  const {
    response: { cookies },
  } = useAppContext();

  if (cookies) {
    return <StaticTable tableKey="response-cookies" data={cookies} />;
  } else {
    return (
      <NoDataMessage
        icon="cookie"
        subtitle="No cookies yet"
        text="Find all your cookies and their associated domains here."
      />
    );
  }
}

export default ResponseCookies;
