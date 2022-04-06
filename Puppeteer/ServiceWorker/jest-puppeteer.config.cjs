module.exports = {
    browserContext: 'incognito',
    launch: {
        args: ['--enable-features=NetworkService', '--no-sandbox', '--disable-dev-shm-usage', '--disable-setuid-sandbox',
        '--ignore-certificate-errors',
        '--disable-web-security'],
        headless: true,
        dumpio: true,
        ignoreHTTPSErrors: true
    }
};