import useExampleItemStore, { ExampleItemStore } from "./exampleItemStore";
export default function Test() {
  const { count, inc, updateData } = useExampleItemStore(
    (state: ExampleItemStore) => ({
      count: state.count,
      inc: state.inc,
      updateData: state.updateData,
    })
  );
  return (
    <div>
      <span>{count}</span>
      <button onClick={inc}>one up</button>
      <button onClick={() => updateData([])}>one up</button>
    </div>
  );
}
