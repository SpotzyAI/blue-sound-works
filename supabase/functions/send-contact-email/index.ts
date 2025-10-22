import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  businessName?: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();
    console.log("Received contact form submission:", { email: formData.email, name: `${formData.firstName} ${formData.lastName}` });

    // Generate reference number
    const referenceNumber = `SPOT-${Date.now().toString().slice(-8)}`;

    // Send email to sales team
    const salesEmail = await resend.emails.send({
      from: "SPOTZY Contact Form <onboarding@resend.dev>",
      to: ["sales@spotzyai.com"],
      subject: `New Contact Form Submission from ${formData.firstName} ${formData.lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Reference Number:</strong> ${referenceNumber}</p>
        <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Business Name:</strong> ${formData.businessName || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message}</p>
      `,
    });

    console.log("Sales email sent:", salesEmail);

    // Send confirmation email to customer
    const confirmationEmail = await resend.emails.send({
      from: "SPOTZY <onboarding@resend.dev>",
      to: [formData.email],
      subject: "Thank you for contacting SPOTZY",
      html: `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SPOTZY - Request Confirmation</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f5f7fa; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        
        <!-- Header -->
        <div style="background-color: #2c3e50; color: white; padding: 30px 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 32px; font-weight: 300; letter-spacing: 3px;">SPOTZY</h1>
            <p style="margin: 8px 0 0 0; font-size: 13px; color: #bdc3c7; letter-spacing: 1px;">AI TECHNOLOGY SOLUTIONS</p>
        </div>

        <!-- Main Content -->
        <div style="padding: 40px 30px;">
            
            <!-- Success Icon -->
            <div style="text-align: center; margin-bottom: 30px;">
                <div style="background-color: #27ae60; width: 50px; height: 50px; border-radius: 50%; margin: 0 auto 15px; text-align: center; line-height: 50px;">
                    <span style="color: white; font-size: 24px; font-weight: bold;">✓</span>
                </div>
                <h2 style="color: #2c3e50; font-size: 24px; margin: 0; font-weight: 400;">Request Confirmation</h2>
            </div>

            <!-- Message -->
            <div style="color: #555; font-size: 16px; line-height: 1.6; text-align: center;">
                <p style="margin: 0 0 25px 0;">Dear <strong>${formData.firstName} ${formData.lastName}</strong>,</p>
                
                <p style="margin: 0 0 25px 0;">Thank you for contacting SpotzyAI Team. We have received your message and will get back to you shortly.</p>
                
                <div style="background-color: #f8f9fa; padding: 25px; border-radius: 8px; margin: 30px 0; border-left: 4px solid #3498db;">
                    <p style="margin: 0; font-weight: 600; color: #2c3e50; margin-bottom: 10px;">Next steps:</p>
                    <p style="margin: 0; color: #666; font-size: 15px;">Our team will review your request and contact you within 24 hours to discuss your needs.</p>
                </div>
                
                <p style="margin: 25px 0; font-size: 15px;">For any urgent questions, you can contact us at <a href="mailto:partners@spotzyai.com" style="color: #3498db; text-decoration: none; font-weight: 500;">partners@spotzyai.com</a></p>
            </div>

            <!-- Reference -->
            <div style="background-color: #ecf0f1; padding: 20px; border-radius: 8px; text-align: center; margin: 30px 0;">
                <p style="margin: 0 0 5px 0; font-size: 13px; color: #7f8c8d; text-transform: uppercase; letter-spacing: 1px;">Reference Number</p>
                <p style="margin: 0; font-size: 16px; font-weight: 600; color: #2c3e50; letter-spacing: 1px; font-family: monospace;">${referenceNumber}</p>
            </div>

        </div>

        <!-- Footer -->
        <div style="background-color: #34495e; color: #bdc3c7; padding: 25px; text-align: center;">
            <p style="margin: 0 0 8px 0; font-size: 14px; font-weight: 500;">SPOTZY AI</p>
            <p style="margin: 0 0 15px 0; font-size: 12px;">Transforming businesses through intelligent automation</p>
            <div style="margin-top: 15px;">
                <a href="https://spotzyai.com" style="color: #3498db; text-decoration: none; margin: 0 15px; font-size: 13px;">Website</a>
                <a href="mailto:partners@spotzyai.com" style="color: #3498db; text-decoration: none; margin: 0 15px; font-size: 13px;">Contact</a>
            </div>
        </div>
        
    </div>
</body>
</html>
      `,
    });

    console.log("Confirmation email sent:", confirmationEmail);

    return new Response(
      JSON.stringify({ 
        success: true, 
        referenceNumber,
        message: "Emails sent successfully" 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
