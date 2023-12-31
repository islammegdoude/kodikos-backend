const  supabase= require("../config/supabase");

async function register(full_name, email, password ,token,role ) {

    const { data: user, error } = await supabase.from('users').insert({full_name, email, password,token ,role});
    //console.log(user);
    if (error) {
      throw new Error(error.message);
    }
    return user;
}

async function login(email, password ) {
  
    const { data: user, error } = await supabase.from('admin').select('token').eq('email',email).eq('password',password).single();
    console.log(user);
    if (error) {
      throw new Error(error.message);
    }
    return user;
}
  

  module.exports = {
    register,
    login
  };
  