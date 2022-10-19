import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useRefreshToken from "../hooks/useRefreshToken";
import useAuth from "../hooks/useAuth";

const persistLogin = () => {
    const [isLoading, setIsLoading] = useState(true);
    const refresh = useRefreshToken();
    const { auth} = useAuth();

    useEffect(() => {
        const verifyRefreshToken = async () => {
            try{
                await refresh();
            }
            catch(error){console.error(error)}
            finally{setIsLoading(false)}
        }
        //                 && persist 
        !auth?.accessToken            ? verifyRefreshToken() : setIsLoading(false);
    }, []);

    return (
        <>
            {isLoading
                ? <p>loading</p>
                : <Outlet />
            }
        </>
    )
}

export default persistLogin;