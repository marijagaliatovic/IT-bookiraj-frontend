/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:[
            "images.ctfassets.net",
        ],
    },
    env: {
        CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
        CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
        EXPRESS_API_URL: "https://backend-66n9.onrender.com"
      },
};

module.exports = nextConfig
