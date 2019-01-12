export class HttpApiCallError extends Error {
  constructor(message, code){
    super(message)
    // récupération du code et du message d'erreur délivré par fetch
    this.code = code;
    this.message = message;

    // création d'une instance de l'objet erreur dans la pile d'erreur
    this.stack = (new Error(message)).stack;
    this.name = 'HttpApiCallError';
  }
}