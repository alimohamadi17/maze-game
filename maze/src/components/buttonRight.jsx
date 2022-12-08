import { useDispatch } from "react-redux"
import { fetchCurrentRoom, fetchMovePlayer } from "../redux/playerSlice";
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import './style.css'

const ButtonRight = ({ MoveRight }) => {

    const dispatch = useDispatch();




    const moveEast = (value) => {
        dispatch(fetchMovePlayer(value))
            .then(() => dispatch(fetchCurrentRoom()))
        MoveRight()
    }

    return (
        <>
            <div>
                <button className="btn-right" onClick={() => moveEast("East")} ><BsFillArrowRightCircleFill className="icon" /></button>
            </div>
        </>
    );
}

export default ButtonRight;