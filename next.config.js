/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: "/live",
        destination: "https://zoom.us",
        permanent: false,
      },
    ];
  },
};
