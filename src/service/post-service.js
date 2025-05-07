// Serviço para obter posts
export const getPosts = async () => {
    try {
      const response = await fetch('https://fiap-frontend-engineering-bff.onrender.com/ask');
      if (!response.ok) {
        throw new Error(`Erro ao buscar posts: ${response.status}`);
      }
      const posts = await response.json();
      return posts;
    } catch (error) {
      console.error('Erro ao obter os posts:', error);
      return [];
    }
  };
  