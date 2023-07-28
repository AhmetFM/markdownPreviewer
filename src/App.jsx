import { useState } from "react";
import "./App.css";
import { marked } from "marked";

function App() {
  const [input, setInput] = useState(`
  # H1
  ## H2
  [title](https://www.example.com)
  \`code\`
  \`\`\`
  {
    firstName: "Ahmet",
    lastName: "Meric"
  }
  \`\`\`
  - First item
  - Second item
  - Third item
  > blockquote
  ![alttext](https://images.pexels.com/photos/16164481/pexels-photo-16164481/free-photo-of-hayvan-evcil-hayvan-kedi-uyuyor.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load)
  **bold text**

  `);

  marked.setOptions({
    breaks: true,
    mangle: false,
    headerIds: false,
  });

  return (
    <div className="container">
      <div className="top">
        <div className="topTitle">
          <span className="editor ">Editor</span>
          <button>Fullscreen</button>
        </div>
        <textarea
          id="editor"
          name="editor"
          cols="70"
          rows="12"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></textarea>
      </div>
      <div className="preview">
        <div className="topTitle">
          <span className="editor">Previewer</span>
          <button>Fullscreen</button>
        </div>
        <div
          className="previewContent"
          id="preview"
          dangerouslySetInnerHTML={{ __html: marked(input) }}
        ></div>
      </div>
    </div>
  );
}

export default App;
