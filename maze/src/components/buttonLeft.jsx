import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux"
import { fetchCurrentRoom, fetchMovePlayer } from "../redux/playerSlice";
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import './style.css'


const ButtonLeft = ({ MoveLeft }) => {

    const dispatch = useDispatch();

    const moveWest = (value) => {

        dispatch(fetchMovePlayer(value))

            .then(() => dispatch(fetchCurrentRoom()))

        MoveLeft()


    }



    return (
        <>
            <div>
                <button className="btn-left" onClick={() => moveWest("West")}><BsFillArrowLeftCircleFill className="icon" /></button>
            </div>
        </>
    );
}

export default ButtonLeft;