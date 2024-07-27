import {useState} from 'react'; 

function useInput() { // custom 훅으로 판단하게 된다 

    const[input,setInput] = useState(""); 

    const onChange = (e) => {
        setInput(e.target.value); 
    }

    return [input,onChange]; 
}

export default useInput;