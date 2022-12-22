<script>
  import ListNotes from '$lib/components/ListNotes.svelte';
import { Heading, List} from 'flowbite-svelte';

    

  const notes = [
      {
      title: "The History of the Internet",
      document: "https://www.africau.edu/images/default/sample.pdf",
      summary: "An in-depth look at the development and evolution of the internet from the 1970s to present day.",
      by: "Jane Smith",
      date: "15/06/2020"
      },
      {
      title: "The Future of Artificial Intelligence",
      document: "https://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf",
      summary: "A discussion of the potential applications and implications of artificial intelligence in the coming decades.",
      by: "John Kim",
      date: "01/01/2021"
      },
      {
      title: "Climate Change: A Global Perspective",
      document: "https://www.example.com/climate-change.pdf",
      summary: "An overview of the scientific evidence for climate change, its impacts on the planet, and potential solutions.",
      by: "Katie Williams",
      date: "17/03/2019"
      },
      {
      title: "The Benefits of Meditation",
      document: "https://www.example.com/meditation-benefits.pdf",
      summary: "A review of the research on the mental and physical health benefits of meditation, and tips for getting started.",
      by: "David Lee",
      date: "20/08/2020"
      },
      {
      title: "The Art of Negotiation",
      document: "https://www.example.com/negotiation.pdf",
      summary: "Strategies and techniques for effectively negotiating in business and personal situations.",
      by: "Emily Nguyen",
      date: "10/02/2022"
      },
      {
      title: "Understanding Cryptocurrencies",
      document: "https://www.example.com/cryptocurrencies.pdf",
      summary: "A beginner's guide to the basics of cryptocurrency, including how it works and how to buy and sell it.",
      by: "Chris Anderson",
      date: "05/05/2021"
      },
      {
      title: "The Science of Sleep",
      document: "https://www.example.com/sleep.pdf",
      summary: "An exploration of the importance of sleep for physical and mental health, and tips for getting a good night's rest.",
      by: "Samantha Kim",
      date: "12/12/2019"
      },
      {
      title: "The Power of Positive Thinking",
      document: "https://www.example.com/positive-thinking.pdf",
      summary: "The benefits of a positive mindset and strategies for cultivating it in your daily life.",
      by: "Alexandra Johnson",
      date: "30/09/2021"
      },
      {
      title: "The Benefits of Exercise",
      document: "https://www.example.com/exercise.pdf",
      summary: "The science behind the numerous physical and mental health benefits of regular exercise.",
      by: "Michael Rodriguez",
      date: "07/07/2020"
      }
  ]


  </script>
  
  <Heading tag="h2"  customSize="text-lg font-semibold" class="mb-2 text-lg font-semibold text-gray-900 dark:text-white"
    >This Are Summariesed Notes</Heading>
  <List tag="ul" class="space-y-1" list="none">
    {#each notes as note,key}
         <!-- content here -->
         <ListNotes {note}/>
    {/each}
  </List>