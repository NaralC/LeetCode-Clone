import CodeMirror from "@uiw/react-codemirror";
import { useCallback, useState } from "react";
import { ViewUpdate } from "@codemirror/view";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { okaidia } from "@uiw/codemirror-theme-okaidia";

const App: React.FC = () => {
  const [code, setCode] = useState<string>(`arr = [1, 2, 3, 4]`);

  const onChange = useCallback((value: string, viewUpdate: ViewUpdate) => {
    setCode(value);
  }, []);

  const handleSubmit = (): void => {
    return;
  }

  return (
    <div className="bg-gray-500 w-screen h-screen flex flex-col justify-center p-10 text-left gap-3">
      <div className="text-white font-semibold text-2xl">
        Create a function that checks if a string is a palindrome in Python
      </div>
      <CodeMirror
        value={code}
        height="300px"
        // extensions={[javascript({ jsx: true, typescript: true })]}
        extensions={[python()]}
        onChange={onChange}
        theme={okaidia}
      />
      <button onClick={handleSubmit} className='border-2 bg-green-600 p-2 text-white font-medium'>Submit</button>
    </div>
  );
};

export default App;
