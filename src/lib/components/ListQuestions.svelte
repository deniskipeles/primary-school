<script>
    import { Heading, List, Li } from 'flowbite-svelte';

    export let question;

    const getABCD =(val)=>{
        if(val==0){
            return "A)"
        }
        if(val==1){
            return "B)"
        }
        if(val==2){
            return "C)"
        }
        if(val==3){
            return "D)"
        }
        return null
    }
  

  </script>
  
  <Heading tag="h2"  customSize="text-lg font-semibold" class="mb-2 text-lg font-semibold text-gray-900 dark:text-white"
    >{question.question}:</Heading>
  <List tag="ul" class="space-y-1" list="none">
    {#each question.answers as answer,key}
         <!-- content here -->
         {#if (key == question.correct_answer)}
             <!-- content here -->
             <Li icon>
               <svg
                 class="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                 fill="currentColor"
                 viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg"
                 ><path
                   fill-rule="evenodd"
                   d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                   clip-rule="evenodd" /></svg>
                   <strong>{getABCD(key)}</strong>{answer}
             </Li>
         {:else}
             <!-- else content here -->
             <Li icon>
                <svg
                  class="w-4 h-4 mr-1.5 text-gray-400 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  ><path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clip-rule="evenodd" /></svg>
                <strong>{getABCD(key)}</strong>{answer}
              </Li>
         {/if}
    {/each}

 </List>