<script module>
    import { defineMeta } from '@storybook/addon-svelte-csf';
    import ContactCard from '$lib/components/molecules/ContactCard/ContactCard.svelte';
  
    const { Story } = defineMeta({
      title: 'Molecules/ContactCard',
      component: ContactCard,
      tags: ['autodocs'],
      argTypes: {
        contact: {
          control: 'object',
          description: 'Contact object met alle data'
        }
      }
    });
    </script>
  
<Story
  name="Contact Kaart Standaard"
  args={{
    contact: {
      name: 'Suus van der Linden',
      position: 'Project Manager',
      link: 'suus@example.com',
      image: 'd355c368-1382-4806-b98c-69e371868978'
    }
  }}
/>

