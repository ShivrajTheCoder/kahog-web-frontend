import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import secureLocalStorage from 'react-secure-storage';
import { useNavigate } from 'react-router';
import { getDataWithExpiry, setDataWithExpiry } from './localstore';
import { adminLogin } from '../redux/reducers/adminReducer';

export function checkAdminLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const admin = useSelector((state) => state.admin); // Assuming you have an admin reducer

  useEffect(() => {
    const localAdminStr = getDataWithExpiry("admin");
    // console.log(localAdminStr);
    if (!admin?.token && !admin?.userId && localAdminStr) {
      const localAdminData = localAdminStr;
      const { userId, token,isAdmin } = localAdminData.value;
      dispatch(adminLogin({ userId, token,isAdmin }));
    } else if (!admin?.token && !admin?.userId && !localAdminStr) {
      // console.log("i ran naviagte")
      navigate("/"); 
    }
    else{
      console.log("nothing")
    }
  }, [admin, dispatch, navigate]); 
}
