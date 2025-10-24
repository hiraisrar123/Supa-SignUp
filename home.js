/* import { supabase } from "./config.js";

const username = document.getElementById('username');

async function userFetch() {
  try {
    const { data, error } = await supabase.auth.getUser();

    if (error) throw error;

    if (data?.user) {
      username.textContent = data.user.user_metadata.name || "User";
    } else {
      alert("No user found, please login again.");
      window.location.href = "login.html";
    }

  } catch (err) {
    console.error("User Fetch Error:", err.message);
  }
}

userFetch();
 */