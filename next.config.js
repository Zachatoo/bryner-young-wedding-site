/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: "/live",
        destination: process.env.NEXT_ZOOM_LINK,
        permanent: false,
      },
    ];
  },
};
