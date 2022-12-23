<script>
    import { goto } from '$app/navigation';
    import { CONSTANTS } from '$lib/CONSTANTS';
    import { school } from '$lib/store/school';
    import { user as localUser } from '$lib/store/user';
    import '$lib/styles.css';
    import { supabase } from '$lib/supabase';
  import { Radio } from 'flowbite-svelte';
      
      const default_image = "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
      
    //   export let data;
  
      let admission = "";
      let password = "";
      let student_or_teacher = "student";
  
  
  
      async function loginFunction(params) {
          let email = `${admission.toLocaleLowerCase()}@${student_or_teacher}.${$school.unique_name}.ac.ke`
          
          // let { data: identities, error } = await supabase
          //     .from('identities')
          //     .select("*")
  
          //     // Filters
          //     .eq('identity', admission)
          //     .eq('school_id', CONSTANTS.school)
          //     .limit(1)
          //     .single()
          // console.log(identities)
          if(admission.includes('@')){
              let { data: user, error:loginError } = await supabase.auth.signInWithPassword({
                  email:admission,
                  password
              })
              // console.log(user,loginError)
              if(user.session){
                  // if (identities.student==true) {
                  //     localStorage.setItem("student",identities.identity)
                  // }
                  console.log(user)
                  localUser.set(user.user)
                  goto("/",{replaceState:true})
              }
          }else{
              let { data: user, error:loginError } = await supabase.auth.signInWithPassword({
                  email,
                  password
              })
              // console.log(user,loginError)
              if(user.session){
                  // if (identities.student==true) {
                  //     localStorage.setItem("student",identities.identity)
                  // }
                  localUser.set(user.user)
                  console.log(user)
                  goto("/",{replaceState:true})
              }
          }
  
      }
  </script>
  
  <svelte:head>
      <title>{$school ? $school.name : null} Login Page</title>
      <meta name="description" content="School Login Page" />
  </svelte:head>
  

  
  <div class="bg-gray-50 dark:bg-gray-900">
    <p>LOGIN as: {student_or_teacher}</p>
    <div class="grid grid-cols-2 gap-6">
      <div class="rounded border border-gray-200 dark:border-gray-700">
        <Radio name="bordered" bind:group={student_or_teacher} value="teacher" class="w-full p-4">Teacher</Radio>
      </div>
      <div class="rounded border border-gray-200 dark:border-gray-700">
        <Radio name="bordered" bind:group={student_or_teacher} value="student" class="w-full p-4">Student</Radio>
      </div>
    </div>
    
    <div class="items-center">
    <!-- <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"> -->
        <a href="/" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img class="w-8 h-8 mr-2" src={$school ? $school.logo : default_image} alt="logo">
            {$school ? $school.logo_name : "School"} primary school    
        </a>
        <div class="w-full1 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Sign in to your account
                </h1>
                <form class="space-y-4 md:space-y-6" on:submit|preventDefault={loginFunction}>
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Admission/ID</label>
                        <input 
                        type="text" 
                        name="email" 
                        id="email" 
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="ID07" 
                        required=""
                        bind:value={admission}
                        />
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="••••••••" 
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        required=""
                        bind:value={password}
                        />
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                              <input 
                              id="remember" 
                              aria-describedby="remember" 
                              type="checkbox" 
                              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" 
                              required="">
                            </div>
                            <div class="ml-3 text-sm">
                              <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                            </div>
                        </div>
                        <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                    </div>
                    <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                        Don’t have an account yet? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                    </p>
                </form>
            </div>
        </div>
    </div>
  </div>


  
  
  