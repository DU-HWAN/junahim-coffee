import { useState } from 'react'
import './App.css'
import MyCard from "./components/MyCard";
import MyAccount from "./components/MyAccount";
import Myheader from "./components/Myheader";
import logoTossBlue from '../public/logo-toss-blue.png'
import logoKakao from '../public/logo-kakao.png'
import junahimCI from '../public/junahim_CI.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="flex flex-col justify-around">
        <span className="m-2"/>
        <MyAccount title="카카오뱅크" description="계좌번호 : 3333-23-1348000" image={logoKakao} actionText={`복사하기`} />
        <span className="m-2"/>
        <MyCard title="토스로 커피값을 송금하세요" description="토스아이디로 커피 값을 송금할 수 있어요" image={logoTossBlue} link="https://toss.me/주내힘커피팀" actionText={`송금하기`} />
      </div>
    </div>
  );
}

export default App
