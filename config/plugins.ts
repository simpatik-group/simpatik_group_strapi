export default ({env}) => ({
  upload: {
    config: {
      provider: "strapi4x4-ftp-provider",
      providerOptions: {
        host: env("FTP_HOST"),
        port: env("FTP_PORT",21),
        user: env("FTP_USER"),
        password: env("FTP_PASSWORD"),
        secure: env.bool("FTP_SECURE", false),
        path: env("FTP_BASE_PATH"),
        baseUrl: env("FTP_BASE_URL"),
      },
    },
  },
  documentation: {
    enabled: true,
    config: {
      servers: [
        { url: 'https://test2.simpatik.group/api', description: 'Development server' },
        { url: `http://${env('HOST')}/api`, description: 'Development server' },
        { url: `https://${env('HOST')}/api`, description: 'Development server' },
        { url: 'http://localhost:1337/api', description: 'Development server' },
        { url: 'http://test.simpatik.group:1337/api', description: 'Development server' },
      ],
    }
  },
});
