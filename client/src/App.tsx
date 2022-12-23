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
    console.log(code);
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
      <button onClick={handleSubmit} className='focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'>Submit</button>
    </div>
  );
};

export default App;
