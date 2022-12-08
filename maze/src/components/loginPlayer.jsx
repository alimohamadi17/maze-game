
import { useDispatch, useSelector } from "react-redux"
import { fetchStartPlay } from "../redux/playerSlice";
import { useNavigate } from "react-router-dom"
import { useEffect } from "react";
import { GridLoader } from 'react-spinners'
import './style.css'


//at first  need token for authorize app and start game and for data need to fetch data and get token

const LoginPlayer = () => {

    let navigate = useNavigate();
    const { data } = useSelector((state) => ({ ...state.play }))
    const dispatch = useDispatch()




    const HandleLoginPlayer = () => {
        dispatch(fetchStartPlay())
        fetchToken()
        // Navigate to maze-game page
        navigate("/maze-game")
    };

    const fetchToken = () => {
        const token = data.token
        localStorage.setItem("token", token);
    }


    useEffect(() => {
        dispatch(fetchStartPlay())

    }, [])

    return (
        <>
            {!data.token ?

                (<div className="loader">
                    <GridLoader color="white" />

                </div>
                ) : (
                    <div className="btn-login-container">
                        <button className="btn-login" onClick={HandleLoginPlayer}>Start Game!</button>

                    </div>)
            }
        </>
    );
}

export default LoginPlayer;