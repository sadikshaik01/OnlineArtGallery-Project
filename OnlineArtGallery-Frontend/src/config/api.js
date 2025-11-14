const API_CONFIG = {
    BASE_URL: 'https://onlineartgallery-project.onrender.com',
    ENDPOINTS: {
        AUTH: {
            LOGIN: '/api/auth/login',
            SIGNUP: '/api/auth/signup'
        },
        ARTWORK: {
            BASE: '/api/artworks',
            LIST: '/api/artworks/list',
            CREATE: '/api/artworks/create',
            UPDATE: '/api/artworks/update',
            DELETE: '/api/artworks/delete'
        }
    }
};

export const getApiUrl = (endpoint) => `${API_CONFIG.BASE_URL}${endpoint}`;
export default API_CONFIG;
