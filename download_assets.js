import fs from 'fs';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsDir = path.join(__dirname, 'src', 'assets');

if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
}

const images = [
    { name: 'hero_earth.jpg', url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072' },
    { name: 'industry_agri.jpg', url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1932' },
    { name: 'industry_city.jpg', url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2070' },
    { name: 'industry_port.jpg', url: 'https://images.unsplash.com/photo-1494412574643-35d324698420?q=80&w=1974' },
    { name: 'blog_tech.jpg', url: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=1287' },
    { name: 'blog_ice.jpg', url: 'https://images.unsplash.com/photo-1520962889616-a590f2252c57?q=80&w=1974' },
    { name: 'blog_city.jpg', url: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070' },
    { name: 'satellite_map.jpg', url: 'https://images.unsplash.com/photo-1518281361980-b26bfd552bd6?q=80&w=2670' }
];

const downloadImage = (url, filepath) => {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
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
    console.log('Starting downloads...');
    for (const img of images) {
        try {
            await downloadImage(img.url, path.join(assetsDir, img.name));
        } catch (error) {
            console.error(error);
        }
    }
    console.log('All downloads finished.');
}

downloadAll();
