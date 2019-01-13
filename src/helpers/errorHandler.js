export class HttpApiCallError extends Error {
  constructor(message, code){
    super(message)
    // récupération du code et du message d'erreur délivré par fetch
    this.code = code;
    this.message = message;

    this.name = 'HttpApiCallError';
  }
}