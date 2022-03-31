import React, { memo, useEffect, useState } from 'react';
// styles
import './styles/styles.scss'
import "./shared/assets/css/bootstrap.min.css"
import "antd/dist/antd.css"
import "@ant-design/flowchart/dist/index.css"
import firebase from 'firebase/compat';
import "firebase/compat/auth"
// component
import AuthPage from './router/component/AuthPage';
import PrivatePage from './router/component/PrivatePage';
import { ConfigProvider } from 'antd';
import 'moment/locale/vi'
import locale from 'antd/lib/locale/vi_VN'
import { auth } from './core/firebase';


const App = () => {
  const [ error, setError ] = useState('')
  const [ isLogin, setIsLogin ] = useState(false)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log(user)
      if (user) setIsLogin(true)
      else setIsLogin(false)
    }) 
    return unsubscribe
  }, [])
  console.log(isLogin)
  return (
    <ConfigProvider locale={locale}>
      {isLogin ? (
          <PrivatePage />
      ) : (
          <AuthPage />
      )}
    </ConfigProvider>
  );
}

export default App;
