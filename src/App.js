import{Fragment} from "react";
// css 적용
import './App.css';
import Section from "./Section";
// import WelcomeProps from "./WelcomeProps";
import MyComponent from "./MyComponent"
import Say from "./Say"

function App(){
  return (
    // <>  
    //   <WelcomeProps name="곰돌이사육사" addr="경기도 수원시" age={22}/>
    //   <WelcomeProps name="안유진" addr="서울시 강남구" age={21}/>
    //   <WelcomeProps name="장원영" addr="서울시 청담동" age={20}/>
    // </>
    // <>
    //   <Section title="Section 1" content="This is the content for Section 1." />
    //   <Section title="Section 2" content="This is the content for Section 2." />
    // </>
    // <>   
    //   <MyComponent name="곰돌이 사육사" age={30}>
    //     안녕하세요!
    //   </MyComponent>
    // </>
    <>
      <Say />
    </>
  );
}
export default App;

//주석처리 아닌것