const  supabase= require("../config/supabase");

async function applyJob(id_job_offer,token){
    const { data: users, err } = await supabase.from('users').select('id_user').eq('token',token).single();
    
    const id_user = users.id_user
    console.log(id_user);
    const { data: job, error } = await supabase.from('applying').insert({id_job_offer,id_user});
    
    if (error || err) {
        throw new Error(error.message);
    }
    return job;
}

async function getJobs(){
    const { data: user, error } = await supabase.from('job_offer').select('*');
    
    if (error) {
        throw new Error(error.message);
    }
    return user;
}

async function searchJob(searchQuery){
    const { data: user, error } = await supabase.from('job_offer').select('*').ilike('title_job_offer', `%${searchQuery}%`);
    
    if (error) {
        throw new Error(error.message);
    }
    return user;
}


module.exports = {
    getJobs,
    searchJob,
    applyJob
  };
  