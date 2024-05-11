const UserData = require('./UserPatch.js');
module.exports = [
	// MessageData
	{
		id: '1000000000000000000',
		type: 0,
		channel_id: '1000000000000000000', // If you want to use it, must set ChannelId to 1000000000000000000
		author: UserData['1056491867375673424'], // Custom User Data here
		attachments: [],
		content: null,
		embeds: [
			{
				type: 'rich',
				description: `Thanks for using my client! <:Kanna_Heart:882480441075040257>`,
				color: 16750296,
				timestamp: '2022-12-31T17:00:00+00:00',
				author: {
					name: 'Foreword',
					icon_url: 'https://files.sky.h4ck.me/files/qx67YL.png',
				},
				thumbnail: {
					url: 'https://files.sky.h4ck.me/files/qx67YL.png',
					width: 128,
					height: 128,
				},
				footer: {
					text: 'skycode',
				},
			},
		], // Custom Embed Data here
		mentions: [],
		mention_roles: [],
		pinned: false,
		mention_everyone: false,
		tts: false,
		timestamp: new Date().toISOString(),
		edited_timestamp: null,
		flags: 16,
		components: [
			{
				type: 1,
				components: [
					{
						type: 2,
						style: 5,
						label: 'Github',
						emoji: {
							name: 'github',
							id: '889092230063734795',
						},
						url: 'https://github.com/skyy-development',
					},
					{
						type: 2,
						style: 5,
						label: 'Search something',
						emoji: {
							name: 'taive',
							id: '863716659159891998',
						},
						url: 'https://google.com',
					},
					{
						type: 2,
						style: 5,
						label: 'Free Nitro',
						emoji: {
							name: 'BugHunter_lvl1',
							id: '873790531887579187',
						},
						url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
					},
				],
			},
		], // Custom Msg Components Data here
	},
];