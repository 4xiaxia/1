"use server"

/**
 * This is a Server Action. Its code runs only on the server and is not sent to the client.
 * It can be called directly from Client Components or Server Components.
 */
export async function logUserActivity(activity: string, details?: Record<string, any>) {
  // Simulate a delay for a server operation (e.g., database write, external API call)
  await new Promise((resolve) => setTimeout(resolve, 500))

  // This console.log will appear in your server logs (e.g., Vercel deployment logs),
  // NOT in the client's browser console.
  console.log(`[SERVER LOG] User Activity: ${activity}`)
  if (details) {
    console.log(`[SERVER LOG] Details:`, details)
  }

  // You can return data to the client if needed, but the function's logic remains server-side.
  return { success: true, message: `Activity "${activity}" logged on server.` }
}
