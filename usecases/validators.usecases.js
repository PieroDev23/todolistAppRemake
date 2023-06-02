export async function validateEmptyField(value) {
  return !value ? "Input its required!" : true;
}
