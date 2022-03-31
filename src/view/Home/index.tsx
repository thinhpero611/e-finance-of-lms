import React, { useState, useEffect } from 'react';
import {  Content } from 'antd/lib/layout/layout';

// styles
import { Button, Typography} from 'antd'
import { useDispatch } from 'react-redux';
import { auth } from '../../core/firebase';

const { Title } = Typography

const Home = () => {
  const [ data, setData ] = useState([])
  const [ userEmail, setUserEmail ] = useState(null)
  // const dispatch = useDispatch()
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUserEmail(user?.email)
    }) 
    return unsubscribe
  }, [])

  return (
    <Content className="home-component">
      <Button type='link' onClick={() => auth.signOut()}>Logout</Button>
      {userEmail}
  </Content>
  )
};

export default Home;
