import React, { useState, useEffect } from "react";
import BotCard from "./BotCard";



function BotCollection() {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    // Fetch bot profiles from an API or link
    fetch('http://localhost:8002/bots')
      .then(response => response.json())
      .then(data => {
        // Once data is fetched, set the bots state
        setBots(data);
      })
      .catch(error => {
        // Handle any errors with fetching the data
        console.error('Error fetching bot profiles:', error);
      });
  }, []); // Empty dependency array to fetch data only once when component mounts


  const displayBots = bots.map((bot) => (
    <BotCard 
      key={bot.id}
      bot={bot}
    />
  ));
return (
    <div className="ui four column grid">
      <div className="row">
         {/*...and here..*/}
        <b>Collection of all bots</b>
        {displayBots}
      </div>
      
    </div>
  );
}

export default BotCollection; 
