import { useEffect, useState } from "react";
import ButtonDown from "./buttonDown";
import ButtonLeft from "./buttonLeft";
import ButtonRight from "./buttonRight";
import ButtonUp from "./buttonUp";
import './style.css'
import { useSelector } from "react-redux";



const Buttons = ({ setPosition, position }) => {

    const location = ['South', 'East', 'West', 'North']

    const [path, setPath] = useState(location);
    const data = useSelector((state) => ({ ...state.play }))


    //for Paths from server when fetch data and get item, need to find forbidden path
    useEffect(() => {
        if (data.paths.paths) {
            const fetchpath = data.paths.paths
            const newPath = fetchpath.map(item => item.direction)
            setPath(newPath)
        }

    }, [data.paths.paths])



    //moving and change element position with click on button 
    const MoveRight = () => {
        setPosition({
            ...position,
            x: position.x + 10,
        })
    }
    const MoveLeft = () => {
        setPosition({
            ...position,
            x: position.x - 10,
        })
    }

    const MoveUp = () => {
        setPosition({
            ...position,
            y: position.y - 10
        })
    }
    const MoveDown = () => {
        setPosition({
            ...position,
            y: position.y + 10
        })
    }






    return (
        <>
            {/* use IIFE function for map to show different button with condition */}
            <div>
                {path.map((item, i) => (

                    <div className="container" key={i}> {item ? (() => {

                        switch (item) {
                            case "West":
                                return <ButtonLeft MoveLeft={MoveLeft} />
                            case "East":
                                return <ButtonRight MoveRight={MoveRight} />
                            case "South":
                                return <ButtonUp MoveUp={MoveUp} />
                            case "North":
                                return <ButtonDown MoveDown={MoveDown} />
                        }
                    })() : <h1>Somthing Went Wrong : {data.error}</h1>}</div>
                ))}

            </div>

        </>
    );
}

export default Buttons;