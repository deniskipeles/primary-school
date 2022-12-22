<script>
    import { Card, Button } from "flowbite-svelte";
    import PdfReader from "./PdfReader.svelte";

    export let note;

  


  </script>
  <Card>
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{note.title}</h5>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
      {note.summary}
    </p>
    
    <PdfReader document={note.document}/>
  </Card>