const fs = require('fs-extra');
const urls = [
    {
        from: '@fortawesome/fontawesome-free/scss',
        to: '@fortawesome/fontawesome-free/scss'
    },
    {
        from: '@fortawesome/fontawesome-free/webfonts',
        to: '@fortawesome/fontawesome-free/webfonts'
    }
];

async function copyFiles() {
    const third_party = './third_party/node_modules/';
    await fs.remove(third_party);

    for (const url of urls) {
        await fs.copy('./node_modules/' + url.from, third_party + url.to);
    }

    console.log('Finished!');
}

copyFiles();
