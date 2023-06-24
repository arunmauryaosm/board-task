import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Sign from './components/Sign';
import { login, logout, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { auth } from './firebase';


function App() {


  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        dispatch(login({
          uid : userAuth.uid,
          email : userAuth.email,
        }));
      } else{
        //logged out
        dispatch(logout(
        ))
      }
    });

    return unsubscribe;
  }, [dispatch]); 

  return (
    <div>
      <BrowserRouter>
      <Routes>
        {!user ? (
        <Route exact path='/' element={<Sign/>} />
        )
         :
         (<Route exact path='/dashboard' element={<Dashboard/>} />
        )}
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
