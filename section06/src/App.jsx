import { useState, useEffect, useRef } from 'react';
import Viewer from "./components/Viewer"; 
import Controller from "./components/Controller"; 
import './App.css';
import Even from "./components/Even"; 

function App() {
  const [count, setCount] = useState(0); 
  const [input, setInput] = useState(""); 

  const isMount = useRef(false); 



  // 둘중 하나만 바뀌어도 실행이 된다 
  // 1. 마운트 : 탄생 
  useEffect(()=> {

    console.log("mount"); 
   }, []);

  // 2. 업데이트 : 변화, 리렌더링
  // update 될때마다 실행이 된다 
  // component 를 rerendering 시킬 때마다 호출된다. 
  useEffect(()=> {
    if(!isMount.current) {
       isMount.current = true;
       return;
    }
    console.log("update"); 
  }); 


  // 3. 언마운트 : 죽음 

  // 최초로 실행할 때를 의미한다 

  const onClickButton = (value) => {
    setCount(count + value); 
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
        />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  ); 
}

export default App;

