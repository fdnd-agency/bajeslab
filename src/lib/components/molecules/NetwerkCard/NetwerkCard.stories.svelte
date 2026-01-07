<script module>
    import { defineMeta } from '@storybook/addon-svelte-csf';
    import NetwerkCard from '$lib/components/molecules/NetwerkCard/NetwerkCard.svelte';
  
    const { Story } = defineMeta({
      title: 'Molecules/NetwerkCard',
      component: NetwerkCard,
      tags: ['autodocs'],
      argTypes: {
        person: {
          control: 'object',
          description: 'De persoon voor de netwerkkaart, met één partner'
        }
      }
    });
  </script>
  
  <Story
    name="Netwerk Kaart Standaard"
    args={{
      person: {
        name: 'Suus van der Linden',
        position: 'Project Manager',
        link: 'suus@example.com',
        image: 'd355c368-1382-4806-b98c-69e371868978',
        partners: [
          {
            hull_partners_id: {
              id: 'abc123',
              title: 'Hogeschool van Amsterdam',
              logo: 'a9a889e7-624f-4ee9-aaf6-03357fb73e2d' 
            }
          }
        ]
      }
    }}
  />
  