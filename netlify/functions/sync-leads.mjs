export default {
  async formSubmitted(event) {
    const data = event.data ?? {};
    if (!data.name || !data.contact || !data.service || !data.need) return;

    const url = Netlify.env.get("HS_SEG_SHEETS_WEBHOOK_URL");
    const secret = Netlify.env.get("HS_SEG_SHEETS_WEBHOOK_SECRET");
    if (!url || !secret) {
      console.error("Google Sheets integration is not configured.");
      return;
    }

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret,
        name: data.name,
        contact_type: data.contact_type ?? "WhatsApp",
        contact: data.contact,
        service: data.service,
        need: data.need,
        utm_source: data.utm_source ?? "",
        utm_medium: data.utm_medium ?? "",
        utm_campaign: data.utm_campaign ?? "",
      }),
    });

    if (!response.ok) throw new Error(`Google Sheets webhook returned ${response.status}`);
    const result = await response.json();
    if (!result.ok) throw new Error("Google Sheets webhook did not confirm the lead.");
  },
};
