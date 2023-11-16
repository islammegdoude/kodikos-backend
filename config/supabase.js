/*const supabase = require('@supabase/supabase-js')

const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey)*/
const { createClient } = require("@supabase/supabase-js");
const supabaseUrl = 'https://ldzmbrvilwwylmzdadzt.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxkem1icnZpbHd3eWxtemRhZHp0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMDE2OTk0NiwiZXhwIjoyMDE1NzQ1OTQ2fQ.SVYlJWS0Dfdf7MWc_ZmPL0QgYfejp88UFF9UK18LBU4'
// Initialise le client Supabase avec vos clés d'API
const supabase = createClient(supabaseUrl, supabaseKey);
// Vérifier si vous êtes connecté à Supabase

module.exports=supabase;