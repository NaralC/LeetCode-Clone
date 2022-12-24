import CodeMirror from "@uiw/react-codemirror";
import { useCallback, useState } from "react";
import { ViewUpdate } from "@codemirror/view";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { okaidia } from "@uiw/codemirror-theme-okaidia";
import axios from "axios";

const App: React.FC = () => {
  const [code, setCode] = useState<string>(
    `def isPalindrome(string):
  # Your code here
  return`
  );

  const onChange = useCallback((value: string, viewUpdate: ViewUpdate) => {
    setCode(value);
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    let submission =
      `import sys\n` +
      code +
      `\nif __name__ == '__main__':
    string = sys.argv[1]
    result = bool(sys.argv[-1])
    print(isPalindrome(string) == result)`;

    axios
      .post("http://127.0.0.1:80/python", { code: submission })
      .then((res) => {
        // console.log(res.data);
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  return (
    <div className="bg-gray-500 w-screen h-screen flex flex-col justify-center p-10 text-left gap-3">
      <div className="text-white font-semibold text-2xl">
        Write a function that returns if a string is a palindrome
      </div>
      <CodeMirror
        value={code}
        height="300px"
        // extensions={[javascript({ jsx: true, typescript: true })]}
        extensions={[python()]}
        onChange={onChange}
        theme={okaidia}
      />
      <button
        onClick={handleSubmit}
        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Submit
      </button>
    </div>
  );
};

export default App;
