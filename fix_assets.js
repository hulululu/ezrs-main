import fs from 'fs';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsDir = path.join(__dirname, 'src', 'assets');

// Configuration: List of assets that MUST exist.
// If download fails, we generate a fallback placeholder.
const requiredAssets = [
    { name: 'hero_earth.jpg', url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072', fallbackColor: '#001f3f' },
    { name: 'industry_agri.jpg', url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1932', fallbackColor: '#2ecc71' },
    { name: 'industry_city.jpg', url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2070', fallbackColor: '#f1c40f' },
    { name: 'industry_port.jpg', url: 'https://images.unsplash.com/photo-1516216628259-9474d32d7a47?q=80&w=1974', fallbackColor: '#3498db' },
    { name: 'blog_tech.jpg', url: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=1287', fallbackColor: '#9b59b6' },
    { name: 'blog_ice.jpg', url: 'https://images.unsplash.com/photo-1520962889616-a590f2252c57?q=80&w=1974', fallbackColor: '#ecf0f1' },
    { name: 'blog_city.jpg', url: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070', fallbackColor: '#95a5a6' },
    { name: 'satellite_map.jpg', url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2670', fallbackColor: '#000000' }
];

// Helper to create a solid color JPG (minimal valid JPEG header)
// This is a "hack" to create a valid image file without external dependencies
const createPlaceholder = (filepath) => {
    // 1x1 pixel JPEG byte sequence (approximate)
    // Actually, simpler to write a textual SVG and rename? No, bundler expects JPG.
    // Let's copy a known good file if available, or write a dummy text file if checking existence? 
    // No, standard bundlers choke on invalid images.
    // Plan B: Copy 'nano_banana.svg' to the target filepath but keep extension? No.
    // Plan C: Download a reliable placeholder from placehold.co

    const fallbackUrl = `https://placehold.co/600x400/1a1a1a/ffffff/png?text=${path.basename(filepath)}`;
    console.log(`Generating fallback for ${path.basename(filepath)}...`);

    return new Promise((resolve, reject) => {
        https.get(fallbackUrl, (res) => {
            if (res.statusCode === 200) {
                const fileStream = fs.createWriteStream(filepath);
                res.pipe(fileStream);
                fileStream.on('finish', () => {
                    fileStream.close();
                    console.log(`Created fallback: ${path.basename(filepath)}`);
                    resolve();
                });
            } else {
                reject('Failed to create fallback');
            }
        });
    });
};

const downloadImage = (url, filepath) => {
    return new Promise((resolve, reject) => {
        const req = https.get(url, (res) => {
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                downloadImage(res.headers.location, filepath).then(resolve).catch(reject);
                return;
            }
            if (res.statusCode === 200) {
                const fileStream = fs.createWriteStream(filepath);
                res.pipe(fileStream);
                fileStream.on('finish', () => {
                    fileStream.close();
                    // Check size
                    const stats = fs.statSync(filepath);
                    if (stats.size < 1000) {
                        reject('File too small (likely error page)');
                    } else {
                        console.log(`Downloaded: ${path.basename(filepath)}`);
                        resolve();
                    }
                });
            } else {
                reject(`Status Code ${res.statusCode}`);
            }
        });

        req.on('error', (err) => reject(err.message));
        req.setTimeout(10000, () => {
            req.destroy();
            reject('Timeout');
        });
    });
};

async function ensureAssets() {
    console.log('Ensuring all assets exist...');

    for (const asset of requiredAssets) {
        const filepath = path.join(assetsDir, asset.name);

        if (fs.existsSync(filepath) && fs.statSync(filepath).size > 0) {
            console.log(`[OK] ${asset.name} exists.`);
            continue;
        }

        console.log(`[MISSING] ${asset.name} - Downloading...`);
        try {
            await downloadImage(asset.url, filepath);
        } catch (err) {
            console.error(`[ERROR] Failed to download ${asset.name}: ${err}`);
            console.log(`[FALLBACK] Creating placeholder for ${asset.name}`);
            try {
                await createPlaceholder(filepath);
            } catch (fbErr) {
                console.error(`[FATAL] Could not create fallback: ${fbErr}`);
            }
        }
    }
    console.log('Asset check complete.');
}

ensureAssets();
