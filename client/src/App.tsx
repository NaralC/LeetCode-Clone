import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { useCallback } from "react";
import { okaidia } from "@uiw/codemirror-theme-okaidia";

const App: React.FC = () => {
  const code = "const a = 0;";

  const onChange = useCallback((value: any, viewUpdate: any) => {
    console.log("value:", value);
  }, []);

  return (
    <div className="bg-grey-200 w-screen h-screen flex flex-col justify-center">
      <CodeMirror
        value={code}
        height="300px"
        // extensions={[javascript({ jsx: true, typescript: true })]}
        extensions={[python()]}
        onChange={onChange}
        theme={okaidia}
      />
    </div>
  );
};

export default App;
