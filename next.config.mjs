/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    HASURA_ADMIN_SECRET: process.env.HASURA_ADMIN_SECRET,
  },
};

export default nextConfig;
