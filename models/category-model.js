const  supabase= require("../config/supabase");

async function getCategories(full_name, email, password ,token,role ) {

    const { data: user, error } = await supabase.from('users').insert({full_name, email, password,token ,role});
    //console.log(user);
    if (error) {
      throw new Error(error.message);
    }
    return user;
}

async function getCategyById(full_name, email, password ,token,role ) {

    const { data: user, error } = await supabase.from('users').insert({full_name, email, password,token ,role});
    //console.log(user);
    if (error) {
      throw new Error(error.message);
    }
    return user;
}


async function createCategory(full_name, email, password ,token,role ) {

    const { data: user, error } = await supabase.from('users').insert({full_name, email, password,token ,role});
    //console.log(user);
    if (error) {
      throw new Error(error.message);
    }
    return user;
}


async function updateCategory(full_name, email, password ,token,role ) {

    const { data: user, error } = await supabase.from('users').insert({full_name, email, password,token ,role});
    //console.log(user);
    if (error) {
      throw new Error(error.message);
    }
    return user;
}


async function deleteCategory(full_name, email, password ,token,role ) {

    const { data: user, error } = await supabase.from('users').insert({full_name, email, password,token ,role});
    //console.log(user);
    if (error) {
      throw new Error(error.message);
    }
    return user;
}

  

  module.exports = {
    getCategories,
    getCategyById,
    createCategory,
    updateCategory,
    deleteCategory
  };