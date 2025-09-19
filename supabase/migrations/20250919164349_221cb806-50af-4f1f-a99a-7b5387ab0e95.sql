-- Fix security vulnerability: Add SELECT policy to contact_messages table
-- This prevents unauthorized access to sensitive customer contact data

CREATE POLICY "Only authenticated admins can view contact messages"
ON public.contact_messages
FOR SELECT
USING (
  -- Only allow access to users with admin role
  -- For now, restrict to specific admin user IDs until proper role system is implemented
  auth.uid() IN (
    -- Add specific admin user IDs here when authentication is set up
    -- This is a temporary measure until proper role-based access is implemented
    '00000000-0000-0000-0000-000000000000'::uuid
  )
);