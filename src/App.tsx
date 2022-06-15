import { useState } from "react";
import useAppContext from "./state/useAppContext";
import { RequestType } from "./types";
import EndpointForm from "./components/organisms/EndpointForm";
import Request from "./modules/Request";
import Response from "./modules/Response";
import MainLayout from "./components/templates/MainLayout";
import TabAreas from "./components/templates/TabAreas";

function App() {
  const [selectedIndex, setSelectedIndex] = useState<number>();
  const { sendRequest, setRequestElement, isLoading } = useAppContext();

  const onSendRequest = ({ method, url }: RequestType) => {
    console.log("METHOD", method);
    setRequestElement("method", method);
    setRequestElement("url", url);
    sendRequest();

    setSelectedIndex(1); // auto-select Response tab when hitting send
  };

  return (
    <MainLayout>
      <EndpointForm onSendRequest={onSendRequest} isLoading={isLoading} />
      <TabAreas
        isPrimary={true}
        tabs={["Details", "Response"]}
        areas={[<Request />, <Response />]}
        selectedIndex={selectedIndex}
      />
    </MainLayout>
  );
}

export default App;
