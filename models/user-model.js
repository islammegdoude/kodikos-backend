const  supabase= require("../config/supabase");

async function getUser(token){
    const { data: user, error } = await supabase.from('users').select('*').eq('token',token).single();
    
    if (error) {
        throw new Error(error.message);
    }
    return user;
}

async function register(full_name, email, password ,token,role ) {

    const { data: user, error } = await supabase.from('users').insert({full_name, email, password,token ,role});
    //console.log(user);
    if (error) {
      throw new Error(error.message);
    }
    return user;
}

async function login(email, password ) {
  
    const { data: user, error } = await supabase.from('users').select('token').eq('email',email).eq('password',password).single();
    console.log(user);
    if (error) {
      throw new Error(error.message);
    }
    return user;
}
  

  module.exports = {
    register,
    login,
    getUser,
  };
  