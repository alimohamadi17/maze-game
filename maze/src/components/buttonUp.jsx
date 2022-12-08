import { useDispatch } from "react-redux"
import { fetchCurrentRoom, fetchMovePlayer } from "../redux/playerSlice";
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import './style.css'

const ButtonUp = ({ MoveUp }) => {

    const dispatch = useDispatch();


    const moveSouth = (value) => {

        dispatch(fetchMovePlayer(value))
            .then(() => dispatch(fetchCurrentRoom()))

        MoveUp()
    }


    return (
        <>
            <div>
                <button className="btn-up" onClick={() => moveSouth('South')} ><BsFillArrowUpCircleFill className="icon" /></button>
            </div>
        </>
    );
}

export default ButtonUp;