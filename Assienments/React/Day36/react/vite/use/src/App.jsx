import { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [seconds, setSeconds] = useState(0);

  /* --------------------------------------------------
     1️⃣ Runs ONCE (component mount)
  -------------------------------------------------- */
  useEffect(() => {
    console.log("Mounted once");

    return () => {
      console.log("Component unmounted");
    };
  }, []);

  /* --------------------------------------------------
     2️⃣ Runs when `count` changes
  -------------------------------------------------- */
  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  /* --------------------------------------------------
     3️⃣ Timer with CLEANUP
  -------------------------------------------------- */
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("Timer cleaned up");
    };
  }, []);

  /* --------------------------------------------------
     4️⃣ Dependency mistake examples (COMMENTED)
  -------------------------------------------------- */

  // ❌ Missing dependency (count is used but not listed)
  /*
  useEffect(() => {
    console.log(count);
  }, []);
  */

  // ❌ Infinite loop
  /*
  useEffect(() => {
    setCount(count + 1);
  }, [count]);
  */

  /* --------------------------------------------------
     5️⃣ Effect execution order demo
  -------------------------------------------------- */
  useEffect(() => {
    console.log("Effect running for text:", text);

    return () => {
      console.log("Cleanup for text:", text);
    };
  }, [text]);

  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>useEffect Demo (One File)</h1>

      <h2>Count</h2>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <h2 style={{ marginTop: 30 }}>Text</h2>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something"
      />

      <h2 style={{ marginTop: 30 }}>Timer</h2>
      <p>Seconds: {seconds}</p>
    </div>
  );
}
