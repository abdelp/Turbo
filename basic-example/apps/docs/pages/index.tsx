import { Button } from "ui";
import { add } from 'ui';

export default function Docs() {
  return (
    <div>
      <h1>Docs</h1>
      <p>1 + 2 = {add(1, 2)}</p>
      <Button />
    </div>
  );
}
