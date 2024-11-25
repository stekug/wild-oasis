import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://byxmzygnyzipqnnpwfqu.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5eG16eWdueXppcHFubnB3ZnF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIyMDQ3MDMsImV4cCI6MjA0Nzc4MDcwM30.Yq_XqdBTzrw_K4n6WRoSG_kYo21z7s2czy8YDISn03k';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
