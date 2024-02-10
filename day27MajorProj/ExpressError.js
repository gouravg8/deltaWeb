class ExpressError extends Error {
  constructor(status = 500, message = "Galti ho gyi") {
    super();
    this.status = status;
    this.message = message;
  }
}

export default ExpressError;
