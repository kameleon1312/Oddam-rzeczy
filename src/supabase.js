import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tiancwqinpnzquqwxwip.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRpYW5jd3FpbnBuenF1cXd4d2lwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU2NjE5MTMsImV4cCI6MjAyMTIzNzkxM30.ca_0scowxQLhy8gVSHkv-C772KWFr14YtU7ChtxW-Gc';

const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };