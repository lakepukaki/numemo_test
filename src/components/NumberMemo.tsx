import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";
import { Input as InputAndOutput, NumemoInput } from "components/Input";
import { Keyboard } from "components/Keyboard";

const NUMEMO_INPUTS: NumemoInput[] = [
  {
    id: "bf6249a6-184f-483a-a3f6-ad77a5efb17a",
    content: "1*3",
    createdAt: "2022/01/10 13:45:33",
    isEditing: false,
  },
  {
    id: "c7d6b5bc-8a4c-4203-8a4f-f0950fdfe304",
    content: "3+3",
    createdAt: "2022/01/10 13:45:33",
    isEditing: false,
  },
  {
    id: "55965ab3-63ff-4f8d-8cc2-5a6699e60e27",
    content: "100+400-100",
    createdAt: "2022/01/10 13:45:33",
    isEditing: true,
  },
  {
    id: "9f3f9a41-3e3d-4e65-b6dc-e66e302950dc",
    content: "1*3",
    createdAt: "2022/01/10 13:45:33",
    isEditing: false,
  },
];

function NumberMemo() {
  const [editInputId, setEditInputId] = useState(1);
  const [numemoInputs, setNumemoInputs] =
    useState<NumemoInput[]>(NUMEMO_INPUTS);

  // const targetSetInput = useCallback(() => {
  //   setInput;
  // }, []);

  return (
    <>
      {numemoInputs.map((inputItem) => {
        return (
          <InputAndOutput
            numemoInput={inputItem}
            setNumemoInputs={setNumemoInputs}
            key={inputItem.id}
          />
        );
      })}
      <Keyboard setData={setNumemoInputs} />
    </>
  );
}

export default NumberMemo;
