const { SlashCommandBuilder } = require('@discordjs/builders');
const axios = require('axios');

module.exports = {
  data: new SlashCommandBuilder()
  .setName('yomama')
  .setDescription('Sends a yomama joke!'),
  async execute(interaction){
    const yomama = await axios.get('https://api.yomomma.info/');

    await interaction.reply(yomama.data['joke']);
    
  },
};