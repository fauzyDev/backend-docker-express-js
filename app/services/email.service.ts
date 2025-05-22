// services/sendOtpEmail.ts
import { Resend } from "resend";
import { RESEND_SECRET } from "../config/env.ts";

const resend = new Resend(RESEND_SECRET)

export const sendOtpEmail = async (email: string, otpCode: string) => {
  const { data, error } = await resend.emails.send({
    from: 'Psifi Auth <no-reply@resend.dev>',
    to: [email],
    subject: 'Kode OTP Anda',
    html: `<p>Kode OTP kamu adalah <strong>${otpCode}</strong>. Berlaku selama 5 menit.</p>`,
  });

  if (error) {
    console.error('Gagal kirim OTP:', error);
    throw new Error('Gagal mengirim OTP');
  }

  return data;
};
