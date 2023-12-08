import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage( enlistedBots, releaseBot) {
  //start here with your code for step one

  return (
    <div>
      <YourBotArmy enlistedBots={enlistedBots} onReleaseBot={releaseBot} />
      <BotCollection />
    </div>
  )
}

export default BotsPage;
