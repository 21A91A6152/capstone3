import React from 'react';
import AppView from './AppView';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './menu';
import Products2 from './Products2';
import TodoList from './TodoList';
import Profile from './Profile';
import Products1 from './products1';

 
function App () {
  return ( 
    <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/calculator" element={<AppView />}/> 
          <Route path="/products" element={<Products2 />}/>
          <Route path="/todolist" element={<TodoList />}/>
          <Route path="/products1" element={<Products1 />}/>
          <Route path="/Profile" element={<Profile />}/>


        </Routes>
      </BrowserRouter>
 );
}
 
export default App;