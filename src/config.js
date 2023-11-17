module.exports = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    DATABASE_URL: process.env.NODE_ENV || 'postgresql://postgres@localhost/dnd-library2.0-server'
}