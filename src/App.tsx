import "./assets/css/reset.css";
import "./assets/css/App.css";
import { Button } from "@components/atoms/Button";

function App() {
  return (
    <div className="flex gap-4 justify-start">
      <Button>Default</Button>
      <Button variantRounded="small">Rounded sm</Button>
      <Button variantRounded="medium">Rounded md</Button>
      <Button variantRounded="large">Rounded lg</Button>
      <Button variantSize="medium">Medium</Button>
      <Button variantSize="large">Large</Button>
      <Button variant="filled">Filled</Button>
      <Button variant="tonal">Tonal</Button>
      <Button variant="elevated">Elevated</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="text">Text</Button>
    </div>
  );
}

export default App;
