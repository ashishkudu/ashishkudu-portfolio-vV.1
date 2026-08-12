import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;

function getSupabase() {
  if (!supabaseUrl || !supabaseSecretKey) {
    throw new Error("Supabase environment variables are missing.");
  }

  return createClient(supabaseUrl, supabaseSecretKey);
}

export async function storeAshConversation(input: {
  sessionId: string;
  userMessage: string;
  assistantResponse: string;
  userAgent: string | null;
  referrer: string | null;
}) {
  const supabase = getSupabase();

  const { error } = await supabase
    .from("ash_conversations")
    .insert({
      session_id: input.sessionId,
      user_message: input.userMessage,
      assistant_response: input.assistantResponse,
      user_agent: input.userAgent,
      referrer: input.referrer,
    });

  if (error) {
    console.error("Supabase storage error:", error);
    return false;
  }

  return true;
}

export async function deleteAshConversation(sessionId: string) {
  const supabase = getSupabase();

  const { error } = await supabase
    .from("ash_conversations")
    .delete()
    .eq("session_id", sessionId);

  if (error) {
    console.error("Supabase delete error:", error);
    return false;
  }

  return true;
}
