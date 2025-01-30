const token = crypto.randomUUID();
const trustedUrl = 'https://707e3565.45dea72c27a70fa75e4d6281.workers.dev';
const encodedUrl = btoa(`${trustedUrl}?token=${token}`);
const obfuscatedUrl = `${trustedUrl}?data=${encodedUrl}`;
console.log('Obfuscated URL:', obfuscatedUrl);
