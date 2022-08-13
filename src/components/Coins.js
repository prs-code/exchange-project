import React, { useState, useEffect } from "react";
//gif loader
import loader from "../gif/Gear-0.3s-200px.gif";
//API
import { coinData } from "../services/api";
//component
import CoinComponent from "./CoinComponent";


const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");// for search box data

  useEffect(() => {
    const fetchAPI = async () => {// set data to state
      const data = await coinData();
      setCoins(data);
    };
    fetchAPI();
  }, []);

  const changeHandler = event => {
    setSearch(event.target.value);
  }

  //for show searched coin
  const searchedCoin = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));//to lower case for easy access result when user typing

  return (
    <div style={{ textAlign: "center" }}>
        <input style={{textAlign: "center"}} type="text" placeholder="نام ارز را وارد کنید" value={search} onChange={changeHandler} />
        <div>
        {!coins.length ? (
          <div>
            <img src={loader} alt="loader" />
            <h1>... Loading</h1>
          </div>
        ) : (
          searchedCoin.map((coin) => ( 
            <CoinComponent 
              key={coin.id}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              price={coin.current_price}
              marketCap={coin.market_cap}
              change24h={coin.price_change_percentage_24h}
            /> )))}
      </div>
    </div>
  );
};

export default Coins;
