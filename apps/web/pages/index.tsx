import { Activity } from "@acme/types";

export default function Web() {
  const act: Activity = {
    name: "ligma"
  };

  return (
    <div>
      <h1>Web</h1>
      <pre>{JSON.stringify(act, null, 2)}</pre>
    </div>
  );
}
