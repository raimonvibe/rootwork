/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/trauma-and-work",
        destination: "/experience-and-work",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
