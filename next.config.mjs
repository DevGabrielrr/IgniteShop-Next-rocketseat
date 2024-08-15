/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        domains: [
            'files.stripe.com',
        ]
        
    },

    experimental: {
        newNextLinkBehavior: true,
        imagens: {
            allowFutureImage: true,
        },
    },

};

export default nextConfig;
