class CustomError extends Error {
  constructor({ message, data }) {
    super(message);
    this.data = data;
  }
}
try {
  // console.log(name);
  const name = 'Vítor Ribeiro';
  const myError = new CustomError({
    message: 'Custom message on custom error',
    data: {
      type: 'Server error',
    },
  });
  throw myError;
} catch (err) {
  console.log('Erro:', err);
} finally {
  console.log('Keep going...');
}
