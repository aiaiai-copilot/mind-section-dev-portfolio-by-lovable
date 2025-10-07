import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get('RESEND_API_KEY') as string);

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
    const requestBody = await req.text();
    console.log('Raw request body:', requestBody);
    
    const { name, email, company, projectType, budget, message, timeline }: ContactEmailRequest = JSON.parse(requestBody);

    console.log('Sending contact email from:', email);

    // Prepare email content
    const emailContent = `
      <h2>Новое сообщение с формы контактов</h2>
      <p><strong>Имя:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${company ? `<p><strong>Компания:</strong> ${company}</p>` : ''}
      <p><strong>Тип проекта:</strong> ${projectType}</p>
      <p><strong>Бюджет:</strong> ${budget}</p>
      ${timeline ? `<p><strong>Сроки:</strong> ${timeline}</p>` : ''}
      <p><strong>Сообщение:</strong></p>
      <p>${message}</p>
    `;

    // Send email using Resend
    const emailResponse = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: ['alexanderlapygin@gmail.com'],
      subject: `Новая заявка от ${name}`,
      html: emailContent,
    });

    if (emailResponse.error) {
      throw emailResponse.error;
    }

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
