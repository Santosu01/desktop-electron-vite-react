import "./assets/css/reset.css";
import "./assets/css/App.css";
import { Button } from "@components/atoms/Button";

function App() {
  return (
    <div className="flex gap-4">
      <Button>Default</Button>
      <Button variant="filled">Filled</Button>
      <Button variant="tonal">Tonal</Button>
      <Button variant="elevated">Elevated</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="text">Text</Button>
    </div>
  );
}

export default App;
