export default {
  async fetch(request, env, ctx) {
    return new Response("Cloudflare Worker is running!");
  }
}
