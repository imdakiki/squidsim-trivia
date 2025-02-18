const Discord = require("discord.js");
const fs = require("fs");
module.exports = (client) => {
  /**
   * @INFO
   * This will be all of our CLIENT VARIABLES for the commands as well as a cooldown system for each cmd!
   */
  client.commands = new Discord.Collection(); //an collection (like a digital map(database)) for all your commands
  client.aliases = new Discord.Collection(); //an collection for all your command-aliases
  client.categories = fs.readdirSync("./commands/"); //load the categories asynchronusly
  client.cooldowns = new Discord.Collection(); //an collection for cooldown commands of each user

  return;
};
