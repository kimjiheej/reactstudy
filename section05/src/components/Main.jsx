
// JSX 주의 사항 
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
// 한줄의 코드가 특정한 값으로 평가될 수 있는 식을 말한다. 
// if 문 , for 문 등등을 사용하게 되면 한줄로서 값으로 평가 될 수가 없기 때문이다. 
// 2. 숫자. 문자열. 배열 값만 렌더링 된다 
// 3. 모든 태그는 닫혀있어야 한다. 

import "./Main.css"; // 그냥 css 는 경로만 불러와도 된단다. ! 

const Main = () => {
    const user = {
        name : "이정환", 
        isLogin : false,
    };

    if(user.isLogin) {
        return <div className="logout">로그아웃</div>
    } else 
    {
        return <div>로그인</div>; 
    }

//     return (
//      <>
//      {user.isLogin ? <div>로그아웃</div> : <div>로그인</div> }
//      </>
//     );
//   };
  
};
  export default Main;


