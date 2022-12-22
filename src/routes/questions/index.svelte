<script>
  import { Heading, List} from 'flowbite-svelte';
  import ListQuestions from '$lib/components/ListQuestions.svelte';

    

const questions = [
  {
    question: "What is the capital city of Kenya?",
    answers: ["Kampala", "Nairobi", "Lagos", "None of these"],
    correct_answer: 1
  },
  {
    question: "What is the capital city of Uganda?",
    answers: ["Kampala", "Nairobi", "Lagos", "None of these"],
    correct_answer: 0
  },
  {
    question: "What is the capital city of Nigeria?",
    answers: ["Kampala", "Nairobi", "Lagos", "None of these"],
    correct_answer: 2
  },
  {
    question: "What is the capital city of Tanzania?",
    answers: ["Dar es Salaam", "Nairobi", "Lagos", "None of these"],
    correct_answer: 0
  },
  {
    question: "What is the capital city of South Africa?",
    answers: ["Pretoria", "Cape Town", "Johannesburg", "None of these"],
    correct_answer: 2
  },
  {
    question: "What is the capital city of Ghana?",
    answers: ["Accra", "Kumasi", "Lagos", "None of these"],
    correct_answer: 0
  },
  {
    question: "What is the capital city of Ethiopia?",
    answers: ["Addis Ababa", "Djibouti", "Asmara", "None of these"],
    correct_answer: 0
  },
  {
    question: "What is the capital city of Somalia?",
    answers: ["Mogadishu", "Hargeisa", "Garowe", "None of these"],
    correct_answer: 0
  },
  {
    question: "What is the capital city of Cameroon?",
    answers: ["Yaoundé", "Douala", "Bamenda", "None of these"],
    correct_answer: 0
  },
  {
    question: "What is the capital city of Burkina Faso?",
    answers: ["Ouagadougou", "Bobo-Dioulasso", "Koudougou", "None of these"],
    correct_answer: 0
  }
];



  </script>
  
  <Heading tag="h2"  customSize="text-lg font-semibold" class="mb-2 text-lg font-semibold text-gray-900 dark:text-white"
    >This Are Revisions Questions</Heading>
  <List tag="ul" class="space-y-1" list="none">
    {#each questions as question,key}
         <!-- content here -->
         <ListQuestions {question}/>
    {/each}
  </List>