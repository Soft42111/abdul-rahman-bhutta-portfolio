-- Create table for contact form submissions
CREATE TABLE IF NOT EXISTS public.contact_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert contact messages (since it's a public contact form)
CREATE POLICY "Allow public contact form submissions" 
ON public.contact_messages 
FOR INSERT 
TO anon 
WITH CHECK (true);

-- Create policy to allow authenticated users to view all messages (for admin access)
CREATE POLICY "Allow authenticated users to view contact messages" 
ON public.contact_messages 
FOR SELECT 
TO authenticated 
USING (true);