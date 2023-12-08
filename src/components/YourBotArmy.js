import React, { useState } from "react";
import BotCard from "./BotCard";

function YourBotArmy() {
  const [enlistedBots] = useState([]);

  const displayEnlistedBots = enlistedBots.map((bot) => (
    <BotCard 
      key={bot.id}
      bot={bot}
    />
  ));

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          Your Bot Army
        </div>
        <div className="row">
          {/* Display enlisted bots */}
          {displayEnlistedBots}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;

