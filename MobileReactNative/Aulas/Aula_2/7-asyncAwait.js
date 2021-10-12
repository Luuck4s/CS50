/**
 * Exemplo de uso do Async Await
 */

async function pegarDados() {
  const url = "";

  try {
    const response = await api.get(url);

    console.log(response.data);
  } catch (error) {}
}
