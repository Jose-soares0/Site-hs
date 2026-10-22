const SPREADSHEET_ID = '16PFRUmpGl81bDD0TjjRwNsdR_0zQhZ1CtFRFxxWCIxE';
const SHEET_NAME = 'Leads';

function doPost(event) {
  try {
    const body = JSON.parse(event.postData.contents);
    const configuredSecret = PropertiesService.getScriptProperties().getProperty('HS_SEG_WEBHOOK_SECRET');
    if (!configuredSecret || body.secret !== configuredSecret) {
      return jsonResponse({ ok: false, error: 'Unauthorized' });
    }

    const required = ['name', 'contact', 'service', 'need'];
    if (required.some((key) => !String(body[key] || '').trim())) {
      return jsonResponse({ ok: false, error: 'Missing fields' });
    }

    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);
    if (!sheet) throw new Error('Lead sheet not found');

    const clean = (value, limit = 1200) => {
      const text = String(value || '').trim().slice(0, limit);
      return /^[=+@-]/.test(text) ? `'${text}` : text;
    };

    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      sheet.appendRow([
        new Date(),
        clean(body.name, 100),
        clean(body.contact_type, 30),
        clean(body.contact, 100),
        clean(body.service, 100),
        clean(body.need),
        clean(body.utm_source, 120),
        clean(body.utm_medium, 120),
        clean(body.utm_campaign, 120),
        'Novo',
      ]);
    } finally {
      lock.releaseLock();
    }

    return jsonResponse({ ok: true });
  } catch (error) {
    console.error(error);
    return jsonResponse({ ok: false, error: 'Could not save lead' });
  }
}

function jsonResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
