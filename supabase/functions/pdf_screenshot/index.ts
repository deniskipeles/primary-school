
import { serve } from 'https://deno.land/std@0.131.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import puppeteer from "https://deno.land/x/puppeteer@16.2.0/mod.ts";
// import * as puppeteer from "https://deno.land/x/puppeteer@v6.4.0/puppeteer.ts"


const browser = await puppeteer.launch();
const page = await browser.newPage();
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, content-type, x-client-info, apikey',
}

// console.log(`Function "select-from-table-with-auth-rls" up and running!`)

serve(async (req: Request) => {
  // This is needed if you're planning to invoke your function from a browser.
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    
    // Create a Supabase client with the Auth context of the logged in user.
    const getServiceSupabase = () => createClient(
      // Supabase API URL - env var exported by default.
      Deno.env.get('SUPABASE_URL') ?? '',
      // Supabase API ANON KEY - env var exported by default.
      // Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
      // Create client with Auth context of the user that called the function.
      // This way your row-level-security (RLS) policies are applied.
      // { global: { headers: { Authorization: req.headers.get('Authorization')! } } }
    ) 
    const supabaseClient = getServiceSupabase()
    // Now we can get the session or user object
    // const {
    //   data: { user },
    // } = await supabaseClient.auth.getUser()

    // And we can run queries in the context of our authenticated user
    const body = await req.json()
    // console.log(body);
    // const { data, error } = await supabaseClient.auth.admin.createUser({
    //   email: body.email,
    //   email_confirm: true,
    //   password: body.password,
    //   user_metadata: body.more
    // })
    const document_id = body.document_id
    const document_url = body.document_url
    const pdfImage = await generatePdfScreenshot(document_url);

    const name = `${Date.now()}-pdf.jpg`
    const { data:fileData, error:fileError } = await supabaseClient
      .storage
      .from('files')
      .upload(name, pdfImage, {
        cacheControl: '3600',
        upsert: false
      })
    
    const { publicURL, error:urlError } = supabaseClient
      .storage
      .from('files')
      .getPublicUrl(name)



    const screenshotUrl = [publicURL]
    const { data, error } = await supabaseClient
    .from('notes')
    .update({ screenshots: screenshotUrl })
    .eq('id', document_id)



    if (error) throw error

    return new Response(JSON.stringify({ data }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    })
  }
})





async function generatePdfScreenshot(url) {
  // Launch a headless browser instance
  const browser = await puppeteer.launch();

  // Create a new page
  const page = await browser.newPage();

  // Set the viewport to a large size to ensure that the entire page is captured in the screenshot
  // await page.setViewport({ width: 2560, height: 1440 });

  // Navigate to the specified URL
  // await page.goto(url);
  await page.goto(pdfUrl, { waitUntil: "networkidle0" });

  // Wait for the page to load
  // await page.waitForSelector('body');

  // Generate a PDF screenshot of the first and second pages
  const imageBuffer = await page.screenshot({
    type: "jpeg",
    encoding: "binary",
  });

  // Close the browser
  await browser.close();

  return imageBuffer;
}




