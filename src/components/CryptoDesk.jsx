import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { SiTether } from "react-icons/si";

function CryptoDesk(){

const [prices,setPrices] = useState({});
const [previousPrices,setPreviousPrices] = useState({});

const [currency,setCurrency] = useState("usd");

const [amount,setAmount] = useState("");
const [coin,setCoin] = useState("bitcoin");

const [result,setResult] = useState(0);
const [calculated,setCalculated] = useState(false);

const PROFIT = 0.05;
const FEE = 0.01;

const coinSymbol={
bitcoin:"BTC",
ethereum:"ETH",
tether:"USDT"
};

const coinIcons={
bitcoin:<FaBitcoin className="coinIcon btc"/>,
ethereum:<FaEthereum className="coinIcon eth"/>,
tether:<SiTether className="coinIcon usdt"/>
};

const fetchPrices = async ()=>{

const res = await axios.get(
"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether&vs_currencies=usd,ngn&include_24hr_change=true"
);

setPreviousPrices(prices);
setPrices(res.data);

};

useEffect(()=>{

fetchPrices();

const interval=setInterval(fetchPrices,30000);

return ()=>clearInterval(interval);

},[]);

/* price movement */

const movement = (coinName)=>{

if(!previousPrices[coinName]) return "";

const oldPrice = previousPrices[coinName]?.usd;
const newPrice = prices[coinName]?.usd;

if(newPrice > oldPrice) return "↑";
if(newPrice < oldPrice) return "↓";

return "";

};

/* calculate trade */

const calculate = ()=>{

if(!amount) return;

let priceUSD = prices[coin]?.usd || 0;

let tradeUSD = amount * priceUSD;

/* minimum trade $10 */

if(tradeUSD < 9){

alert("Minimum trade is $10");

return;

}

let priceNGN = prices[coin]?.ngn || 0;

let market = amount * priceNGN;

let afterProfit = market * (1-PROFIT);

let fee = afterProfit * FEE;

let finalAmount = afterProfit - fee;

setResult(finalAmount);

setCalculated(true);

};

/* instant trade */

const tradeNow = ()=>{

const message = `
Crypto Trade Request

Coin: ${coinSymbol[coin]}
Amount: ${amount}

Customer Receives: ₦${result.toLocaleString()}
`;

const encoded = encodeURIComponent(message);

window.open(`https://wa.me/2349129596420?text=${encoded}`);

};

return(

<div className="cryptoDesk">

<h1>Crypto Trading Desk</h1>

{/* currency switch */}

<div className="currencySwitch">

<button
className={currency==="usd"?"active":""}
onClick={()=>setCurrency("usd")}
>
USD
</button>

<button
className={currency==="ngn"?"active":""}
onClick={()=>setCurrency("ngn")}
>
NGN
</button>

</div>

{/* coin board */}

<div className="priceBoard">

<div onClick={()=>setCoin("bitcoin")}>

{coinIcons.bitcoin}

<h3>BTC</h3>

<p>

{currency==="usd"
? `$${prices.bitcoin?.usd?.toLocaleString() || "..."}`
: `₦${prices.bitcoin?.ngn?.toLocaleString() || "..."}`
}

<span className="move">
{movement("bitcoin")}
</span>

</p>

<span className={`change ${prices.bitcoin?.usd_24h_change>0?"green":"red"}`}>
{prices.bitcoin?.usd_24h_change?.toFixed(2)}%
</span>

</div>

<div onClick={()=>setCoin("ethereum")}>

{coinIcons.ethereum}

<h3>ETH</h3>

<p>

{currency==="usd"
? `$${prices.ethereum?.usd?.toLocaleString() || "..."}`
: `₦${prices.ethereum?.ngn?.toLocaleString() || "..."}`
}

<span className="move">
{movement("ethereum")}
</span>

</p>

<span className={`change ${prices.ethereum?.usd_24h_change>0?"green":"red"}`}>
{prices.ethereum?.usd_24h_change?.toFixed(2)}%
</span>

</div>

<div onClick={()=>setCoin("tether")}>

{coinIcons.tether}

<h3>USDT</h3>

<p>

{currency==="usd"
? `$${prices.tether?.usd?.toLocaleString() || "..."}`
: `₦${prices.tether?.ngn?.toLocaleString() || "..."}`
}

<span className="move">
{movement("tether")}
</span>

</p>

<span className={`change ${prices.tether?.usd_24h_change>0?"green":"red"}`}>
{prices.tether?.usd_24h_change?.toFixed(2)}%
</span>

</div>

</div>

<input
type="number"
placeholder={`Enter ${coinSymbol[coin]} amount`}
value={amount}
onChange={(e)=>setAmount(e.target.value)}
/>

<button className="calcBtn" onClick={calculate}>
Calculate
</button>

<div className="orderCard">

<h3>Order Summary</h3>

<p>Asset: {coinSymbol[coin]}</p>

<p>Amount: {amount} {coinSymbol[coin]}</p>

<p>


</p>

<div className="receiveRow">

<h2 className="receive">

RECEIVE AMOUNT = ₦{result.toLocaleString()}

</h2>

{calculated && (

<button className="tradeBtn" onClick={tradeNow}>
🔥 Instant Trade
</button>

)}

</div>

</div>

</div>

);

}

export default CryptoDesk;