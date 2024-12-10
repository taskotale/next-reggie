import fs from 'fs';
import path from 'path';
import ShowsPage from './showsList';

export default function TilesDisplayPage() {
  const images = getImages(); 

  return (
    <ShowsPage images={images} />
  );
}

function getImages() {
  const folderPath = path.join(process.cwd(), 'public', 'shows');
  const filenames = fs.readdirSync(folderPath);
  return filenames.map((file) => `/shows/${file}`);
}
