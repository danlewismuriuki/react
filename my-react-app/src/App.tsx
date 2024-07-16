import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisisblity] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisisblity(false)}>My Alert</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisisblity(true)}>
        My Button
      </Button>
    </div>
  );
}
export default App;
