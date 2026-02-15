import fs from 'fs';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsDir = path.join(__dirname, 'src', 'assets');

// Simplified URLs (removed query params to avoid 404s on some endpoints)
const images = [
    { name: 'industry_port.jpg', url: 'https://images.unsplash.com/photo-1516216628259-9474d32d7a47' },
    { name: 'blog_tech.jpg', url: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b' },
    { name: 'blog_ice.jpg', url: 'https://images.unsplash.com/photo-1520962889616-a590f2252c57' },
    { name: 'blog_city.jpg', url: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b' },
    { name: 'satellite_map.jpg', url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa' } // Reusing the Earth image as map fallback if map specific one fails
];

const downloadImage = (url, filepath) => {
    // Add source param to Unsplash URL to be polite/tracked correctly if possible, or just raw
    // Unsplash requires source. Let's try to just hit the ID.
    // Actually, unsplash source API is better: https://source.unsplash.com/PHOTO_ID/1600x900
    // But source.unsplash.com is deprecated/removed.
    // Let's try the photo page URL's download link logic? No, just the photo ID direct link often redirects.
    // Let's try basic ID url again but cleaner.

    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            if (res.statusCode === 302 || res.statusCode === 301) {
                // Follow redirect
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
    console.log('Retrying downloads...');
    for (const img of images) {
        if (!fs.existsSync(path.join(assetsDir, img.name))) {
            try {
                await downloadImage(img.url, path.join(assetsDir, img.name));
            } catch (error) {
                console.error(error);
            }
        } else {
            console.log(`Skipping ${img.name}, already exists.`);
        }
    }
    console.log('Retry finished.');
}

downloadAll();
