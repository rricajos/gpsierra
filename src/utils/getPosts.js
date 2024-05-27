
import path from 'path';

export function getPosts() {
  const postsDirectory = path.join(process.cwd(), 'public', 'posts');
  const filenames = fs.readdirSync(postsDirectory);
  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    
    // Puedes procesar el contenido del archivo aquí si es necesario
    return {
      filename,
      content: fileContents
    };
  });

  return posts;
}