import React, { useState, useEffect } from "react";
import BotCard from "./BotCard";



function BotCollection() {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    
    fetch('http://localhost:8002/bots')
      .then(response => response.json())
      .then(data => {
        
        setBots(data);
      })
      .catch(error => {
        
        console.error('Error fetching bot profiles:', error);
      });
  }, []); 

  const deleteBot = async (botId) => {
    try {
      const response = await fetch(`http://localhost:8002/bots/${botId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setBots(bots.filter(bot => bot.id !== botId));
      } else {
        console.error('Failed to delete bot');
      }
    } catch (error) {
      console.error('Error deleting bot:', error);
    }
  };



  const displayBots = bots.map((bot) => (
    <BotCard 
      key={bot.id}
      bot={bot}
      onDeleteBot={deleteBot} 
      
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
