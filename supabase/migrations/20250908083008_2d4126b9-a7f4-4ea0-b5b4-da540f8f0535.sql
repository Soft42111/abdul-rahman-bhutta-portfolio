-- Fix critical security vulnerability: Remove overly permissive SELECT policy
-- that allows any authenticated user to read all contact messages

-- Drop the existing policy that allows all authenticated users to view contact messages
DROP POLICY IF EXISTS "Allow authenticated users to view contact messages" ON public.contact_messages;

-- Since there's no admin system implemented, we'll remove SELECT access entirely
-- Contact form submissions only need INSERT access, which is already properly secured
-- If admin access is needed later, a proper admin role system should be implemented first

-- Keep the existing INSERT policy for public contact form submissions (this is secure)
-- Policy "Allow public contact form submissions" remains unchanged