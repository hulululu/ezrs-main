import fs from 'fs';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsDir = path.join(__dirname, 'src', 'assets');

const images = [
    { name: 'industry_port.jpg', url: 'https://images.unsplash.com/photo-1524522173746-f628baad3644' }, // Alternative Port
    { name: 'blog_ice.jpg', url: 'https://images.unsplash.com/photo-1505322022379-7c3353ee6291' }   // Alternative Ice
];

const downloadImage = (url, filepath) => {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            if (res.statusCode === 302 || res.statusCode === 301) {
                downloadImage(res.headers.location, filepath).then(resolve).catch(reject);
                return;
            }
            if (res.statusCode === 200) {
                const fileStream = fs.createWriteStream(filepath);
                res.pipe(fileStream);
                fileStream.on('finish', () => {
                    fileStream.close();
                    console.log(`Downloaded: ${path.basename(filepath)}`);
                    resolve();
                });
            } else {
                reject(`Failed to download ${url}: Status Code ${res.statusCode}`);
            }
        }).on('error', (err) => {
            reject(`Error downloading ${url}: ${err.message}`);
        });
    });
};

async function downloadAll() {
    console.log('Final retry...');
    for (const img of images) {
        try {
            await downloadImage(img.url, path.join(assetsDir, img.name));
        } catch (error) {
            console.error(error);
        }
    }
    console.log('Final retry finished.');
}

downloadAll();
