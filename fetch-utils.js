const SUPABASE_URL = 'https://mqobihndyyrolncqbjdt.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xb2JpaG5keXlyb2xuY3FiamR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ4OTk1NTEsImV4cCI6MTk4MDQ3NTU1MX0.U80cn3V5amC_rF1mOjqIN8_L5lQOHpf724B-B0kQAc8';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/* Auth related functions */

export function getUser() {
    return client.auth.user();
}

export async function signUpUser(email, password) {
    return await client.auth.signUp({
        email,
        password,
    });
}

export async function signInUser(email, password) {
    return await client.auth.signIn({
        email,
        password,
    });
}

export async function signOutUser() {
    return await client.auth.signOut();
}

/* Data functions */

export async function getPosts() {
    return await client.from('posts').select('*');
}
