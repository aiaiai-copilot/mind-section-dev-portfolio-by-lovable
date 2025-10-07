import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ContactEmailRequest {
  name: string;
  email: string;
  company?: string;
  projectType: string;
  budget: string;
  message: string;
  timeline?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, company, projectType, budget, message, timeline }: ContactEmailRequest = await req.json();

    console.log('Sending contact email from:', email);

    // Initialize SMTP client
    const client = new SMTPClient({
      connection: {
        hostname: Deno.env.get('SMTP_HOST') as string,
        port: Number(Deno.env.get('SMTP_PORT')),
        tls: false,
        auth: {
          username: Deno.env.get('SMTP_USER') as string,
          password: Deno.env.get('SMTP_PASSWORD') as string,
        },
      },
    });

    // Prepare email content
    const emailContent = `
Новое сообщение с формы контактов:

Имя: ${name}
Email: ${email}
${company ? `Компания: ${company}` : ''}
Тип проекта: ${projectType}
Бюджет: ${budget}
${timeline ? `Сроки: ${timeline}` : ''}

Сообщение:
${message}
    `;

    // Send email
    await client.send({
      from: Deno.env.get('SMTP_USER') as string,
      to: "alexanderlapygin@gmail.com",
      subject: `Новая заявка от ${name}`,
      content: emailContent,
    });

    await client.close();

    console.log('Email sent successfully');

    return new Response(
      JSON.stringify({ success: true, message: 'Email sent successfully' }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      }
    );
  }
};

serve(handler);
