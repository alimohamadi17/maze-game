import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchPlayer } from "../redux/playerSlice";
import Buttons from "./buttons";
import './style.css'
import { GridLoader } from 'react-spinners'
import Timer from "./timer/timer";



const FetchPlayer = () => {

    const { currentRoom } = useSelector((state) => ({ ...state.play }))
    const dispatch = useDispatch()

    const [position, setPosition] = useState({
        x: 300,
        y: 100
    })


    useEffect(() => {
        dispatch(fetchPlayer())
    }, [])


    return (
        <>
            {currentRoom.currentRoom ?

                (<div className="Main">
                    <div className="game-board-container">

                        <div className="game-board" >
                            <div className="squar" style={{ left: `${position.x}px`, top: `${position.y}px` }}></div>
                        </div>

                        <div className="time">
                            <h1><Timer /></h1>
                        </div>

                    </div>
                    <div className="btn">
                        <Buttons setPosition={setPosition} position={position} />
                    </div>
                </div>
                ) : (
                    <div className="loader">
                        <GridLoader color="white" />
                    </div>)

            }
        </>
    );
}

export default FetchPlayer;