# Sincronização de leads com Google Sheets

O formulário é armazenado primeiro no Netlify Forms. Quando o Netlify verifica
um envio, `netlify/functions/sync-leads.mjs` envia os dados ao Apps Script, que
adiciona uma linha à aba `Leads` da planilha da HS SEG.

1. Na planilha `HS SEG | Leads do site`, abra **Extensões > Apps Script** e
   substitua `Code.gs` pelo conteúdo deste diretório.
2. Em **Configurações do projeto > Propriedades do script**, crie a propriedade
   `HS_SEG_WEBHOOK_SECRET` com um valor aleatório forte. Não a coloque no código.
3. Publique como **Aplicativo da Web**, executado por você e acessível a qualquer
   pessoa. A função rejeita requisições que não tragam o segredo.
4. No Netlify, configure as variáveis de ambiente para o escopo **Functions**:
   `HS_SEG_SHEETS_WEBHOOK_URL` (URL `/exec` da implantação) e
   `HS_SEG_SHEETS_WEBHOOK_SECRET` (o mesmo valor da propriedade do script).
5. Implante novamente o site e faça um envio real. Confira tanto **Forms** no
   Netlify quanto uma nova linha na planilha. O WhatsApp ainda precisa da
   confirmação de envio pelo visitante.

Não compartilhe publicamente a URL do aplicativo da Web nem o segredo. Se a
sincronização falhar, o lead continua no Netlify Forms e pode ser exportado
como CSV para recuperação.
