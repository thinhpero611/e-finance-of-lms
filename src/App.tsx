import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './modules';
import { createTask, getList } from './modules/task/repository';
import { ITask } from './modules/task/entity';
import ListTask from './component/ListTask'
import 'antd/dist/antd.css'
import PublicPage from './router/PublicPage';

const initialState = {
  
  taskMission: "",
  title: ""
}

const  App = () => {
  const [ state, setState ] = useState(initialState)
  const dispatch = useDispatch()
  const tasks: ITask[] = useSelector((state: RootState) => state.task)

  useEffect(() => {
    dispatch(getList())
  }, [dispatch])


  return (
    <PublicPage />
  );
}

export default App;
