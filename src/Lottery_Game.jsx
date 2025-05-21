import { useState } from 'react';
import './Lottery_Game.css';
import {random} from './random';
import sum from './sum';

function Lottery_Game() {
    const [arr, setArr] = useState(random(3));
    let isWinning=sum(arr)===15;

 function buy(){
setArr(random(3));
    }


    return (
        <div>
            <h3>LOTTERY GAME</h3>
            <button className='button' onClick={buy}>Purchase</button>
            <div className='ticket'>
                <span>{arr[0]}</span>
                <span>{arr[1]}</span>
                <span>{arr[2]}</span>
            </div>
            <h3>{isWinning && "congratualtion , you won the lottery ! "}</h3>
        </div>
    );
}

export default Lottery_Game;
