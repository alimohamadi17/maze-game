import { useDispatch, useSelector } from "react-redux"
import { fetchCurrentRoom, fetchMovePlayer } from "../redux/playerSlice";
import { BsFillArrowDownCircleFill } from 'react-icons/bs'
import './style.css'


const ButtonDown = ({ MoveDown, disabled }) => {



    const dispatch = useDispatch();


    const moveNorth = (value) => {

        dispatch(fetchMovePlayer(value))

            .then(() => dispatch(fetchCurrentRoom()))

        MoveDown()

    }


    return (
        <>
            <div>
                <button className="btn-down" onClick={() => moveNorth('North')}>< BsFillArrowDownCircleFill className="icon" /></button>
            </div>
        </>
    );
}

export default ButtonDown;