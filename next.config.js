const { redirect } = require('next/dist/server/api-utils');

module.exports = {
	images: {
		domains: ['s3.ap-northeast-2.amazonaws.com'],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
	},
};
