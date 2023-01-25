// sempre que for feito um /api no angular automaticamente vai direcionar para http://localhost:8083/ com isso fica no mesmo dominido do back-end
const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'http://localhost:8083/',
    secure: false,
    logLevel: 'debug'
  }
];

module.exports = PROXY_CONFIG;
