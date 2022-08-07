import React, {useState, useEffect} from "react";

//git loader
import loader from '../gif/Gear-0.3s-200px.gif'
//API
import { coinData } from "../services/api";

const Coins = () => {

    const[coins, setCoins] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            const data = await coinData();
            setCoins(data);
        }
        fetchAPI();
    }, [])

    return (
        <div style={{textAlign: "center"}}>
            <input type="text" placeholder="نام ارز را وارد کنید"/> 
            <div>
                {
                    !coins.length ?<div>
                        <img src={loader} alt="loader"/>
                        <h1>Loading ...</h1>
                    </div> :
                    coins.map(coin => <p key={coin.symbol}>{coin.name}_{coin.symbol}</p>)
                }
            </div>

        </div>
    );
}

export default Coins;