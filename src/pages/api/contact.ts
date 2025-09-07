import express from "express";
import fetch from "node-fetch";
import { createClient } from "@supabase/supabase-js";

const app = express();
app.use(express.json());

// Contact form endpoint
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message, token } = req.body;

    // 1. Verify reCAPTCHA v2
    const captchaVerify = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    });

    const captchaData = await captchaVerify.json();
    if (!captchaData.success) {
      return res.status(400).json({ error: "Captcha verification failed" });
    }

    // 2. Supabase client (server-side)
    const supabase = createClient(
      process.env.VITE_SUPABASE_URL,
      process.env.VITE_SUPABASE_SERVICE_ROLE_KEY
    );

    // 3. Insert into contact_messages table
    const { error } = await supabase.from("contact_messages").insert([
      {
        name,
        email,
        subject,
        message,
      },
    ]);

    if (error) {
      console.error("Supabase insert error:", error);
      return res.status(500).json({ error: "Database insert failed" });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("API error:", err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

// Start server (for local dev)
app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});
