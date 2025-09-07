// src/pages/api/contact.ts
import { createClient } from "@supabase/supabase-js"

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  try {
    const { name, email, subject, message, token } = req.body

    if (!name || !email || !subject || !message || !token) {
      return res.status(400).json({ error: "Missing required fields" })
    }

    // 1. Verify reCAPTCHA
    const captchaVerify = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    })

    const captchaData = await captchaVerify.json()
    if (!captchaData.success) {
      return res.status(400).json({ error: "Captcha verification failed" })
    }

    // 2. Supabase client
    const supabase = createClient(
      process.env.VITE_SUPABASE_URL!,
      process.env.VITE_SUPABASE_SERVICE_ROLE_KEY!
    )

    // 3. Insert into DB
    const { error } = await supabase.from("contact_messages").insert([
      { name, email, subject, message }
    ])

    if (error) {
      console.error("Supabase insert error:", error)
      return res.status(500).json({ error: "Database insert failed" })
    }

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error("API error:", err)
    return res.status(500).json({ error: "Something went wrong" })
  }
}

