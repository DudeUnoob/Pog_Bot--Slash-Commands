const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('echo')
		.setDescription('Replies with *echo*')
    .addStringOption((option) => 
        option
          .setName('message')
          .setDescription("message that you want to echo")
    
    ),
	async execute(interaction) {
		const messageToSend = interaction.options.getString('mesesage');
    interaction.followUp({ content: messageToSend });
	},
};