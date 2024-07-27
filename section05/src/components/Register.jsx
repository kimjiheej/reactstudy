import { useState, useRef } from 'react';

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: ""
  });

  const countRef = useRef(0); // 수정이 발생할 때마다 바꾸기 
  const inputRef = useRef();
  

  const onChange = (e) => {

    countRef.current++; 
    console.log(countRef.current); 
    console.log(e.target.name, e.target.value);
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  }

  const onSubmit = () => {
    if(input.name === "") {
      inputRef.current.focus();
    }
  }

  return (
    <div>
   
      <div>
        <input
          ref={inputRef}
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder="이름"
        />
      </div>
      <div>
        <input
          name="birth"
          type="date"
          value={input.birth}
          onChange={onChange}
        />
      </div>
      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>
      <div>
        <textarea name="bio" onChange={onChange} value={input.bio} />
      </div>

      <button onClick={onSubmit}></button>
    </div>
  );
};

export default Register;