// Available where this module is required
module.exports = {
  db: {
    userName: 'danielanoir',
    password: 'br0wnp4p3R',
    server: 'noir.database.windows.net',
    // Azure's options
    options: {encrypt: true, database: 'noir'}
  }
  // available: "Available outside"
};

// Not available outside of this file
// var unavailable = 'Unavailable outside'
