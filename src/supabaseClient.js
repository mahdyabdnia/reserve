import { createClient } from '@supabase/supabase-js';

// اطلاعات پروژه خود را از داشبورد Supabase دریافت کنید
const SUPABASE_URL = 'https://bvkmfqugexgcsxqezqel.supabase.co'; // آدرس پروژه خود
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ2a21mcXVnZXhnY3N4cWV6cWVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc2NDk0NDksImV4cCI6MjA1MzIyNTQ0OX0.TyKEi0ApejLYFEjvoPV-i80XfeWmSDLqGwXNkJM0row'; // کلید عمومی

// ایجاد کلاینت Supabase
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;