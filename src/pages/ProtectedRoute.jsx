import { Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
    // const navigate = useNavigate();
    // const [userData, setUserData] = useState(true);  

    // useEffect(() => {
    //     if (!userData) {
    //         navigate('/register');
    //     }
    // }, [userData, navigate]);  
     console.log("protected routing is running");
     
    return <Outlet />    
    // return userData ? <Outlet /> : null;   
}

export default ProtectedRoute;
