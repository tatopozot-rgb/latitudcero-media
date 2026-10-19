// Devuelve solo el código del país del visitante (por ejemplo {"c":"EC"}) para elegir la región de precios.
// No guarda nada ni devuelve la IP ni la ciudad.
export default (request, context) => {
  const c = (context.geo && context.geo.country && context.geo.country.code) || "";
  return new Response(JSON.stringify({ c }), {
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "private, no-store", "x-content-type-options": "nosniff" },
  });
};
export const config = { path: "/geo" };
