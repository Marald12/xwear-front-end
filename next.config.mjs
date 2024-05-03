/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['localhost']
    },
    async rewrites() {
        return [
            {
                source: '/uploads/:path*',
                destination: 'http://localhost:4080/uploads/:path*'
            }
        ]
    }
};

export default nextConfig;
