<script>
    import { Button, Modal } from 'flowbite-svelte'
    import Pdf from 'svelte-pdf';
    let defaultModal = false;
    export let document;
  </script>
  
  <Button on:click={() => defaultModal = true} autoclose>Read More</Button>
  <Modal title="Terms of Service" bind:open={defaultModal}>
    <!-- <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
    </p> -->
    <Pdf url={document}  />
    <svelte:fragment slot='footer'>
      <Button on:click={() => alert('Handle "success"')}>Download</Button>
    </svelte:fragment>
  </Modal>