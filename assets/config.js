window.CONFIG = {
  API_URL: 'http://localhost:3000',
  /** Adresa pentru contact direct (mailto) — aceeași cu cea afișată pe pagina Contact. */
  CONTACT_EMAIL: 'alexandruaoglagioaie@gmail.com',
  /**
   * Username admin (același ca ADMIN_USERNAME în backend/.env).
   * Cont doar Google: setează ADMIN_SECRET în .env și introduce cheia la prompt.
   */
  ADMIN_USERNAME: 'admin',
};

window.gameConfig = {
  startConfig: {
    camin: {
      usor: { bani: 1800, fericire: 100 },
      mediu: { bani: 1600, fericire: 95 },
      greu: { bani: 1300, fericire: 90 },
    },
    chirie: {
      usor: { bani: 3500, fericire: 95 },
      mediu: { bani: 2800, fericire: 90 },
      greu: { bani: 2100, fericire: 85 },
    },
    garsoniera: {
      usor: { bani: 2700, fericire: 90 },
      mediu: { bani: 2500, fericire: 85 },
      greu: { bani: 2000, fericire: 80 },
    },
    navetist: {
      usor: { bani: 4000, fericire: 100 },
      mediu: { bani: 3300, fericire: 95 },
      greu: { bani: 2400, fericire: 90 },
    },
  },
};

