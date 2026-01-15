<script module>
    import { defineMeta } from '@storybook/addon-svelte-csf';
    import TeamBlock from '$lib/components/organisms/blocks/TeamBlock/TeamBlock.svelte';
    
    const { Story } = defineMeta({
      title: 'Organisms/blocks/TeamBlock',
      component: TeamBlock,
      tags: ['autodocs'],
      argTypes: {
        title: {
          control: 'text'
        },
        people: {
          control: 'object'
        }
      },
      parameters: {
        design: {
          type: 'figma',
          url: 'https://www.figma.com/design/doguH52moO2cyA3pT0B6sd/Living-Lab-Bajeskwartier-2025-2026?node-id=667-1423&t=Nz4dERkOL8FZvH0K-1'
        }
      },
    });
  </script>
  
  <Story 
    name="Team Block"
    args={{
      title: 'Ons team',
      people: [
        {
          name: "Lea den Broeder",
          position: "Lector Gezondheid en Omgeving",
          image: "d355c368-1382-4806-b98c-69e371868978",
          partners: [
            {
              hull_partners_id: {
                title: "Hogeschool van Amsterdam",
                logo: "46abeb96-c92d-45ff-aeef-91e4da6b7418",
                link: ""
              }
            }
          ]
        },
        {
          name: "Suus ten Voorde",
          position: "Lab-regisseur",
          image: "92e8964f-2577-4df6-aa84-c9c8627561f7",
          partners: [
            {
              hull_partners_id: {
                title: "Hogeschool van Amsterdam",
                logo: "46abeb96-c92d-45ff-aeef-91e4da6b7418",
                link: ""
              }
            }
          ]
        }
      ]
    }}
  />

<Story 
    name="Team Block zonder afbeeldingen"
    args={{
      title: 'Ons team',
      people: [
        {
          name: "Lea den Broeder",
          position: "Lector Gezondheid en Omgeving",
          image: "",
          partners: [
            {
              hull_partners_id: {
                title: "Hogeschool van Amsterdam",
                logo: "46abeb96-c92d-45ff-aeef-91e4da6b7418",
                link: ""
              }
            }
          ]
        },
        {
          name: "Suus ten Voorde",
          position: "Lab-regisseur",
          image: "",
          partners: [
            {
              hull_partners_id: {
                title: "Hogeschool van Amsterdam",
                logo: "46abeb96-c92d-45ff-aeef-91e4da6b7418",
                link: ""
              }
            }
          ]
        }
      ]
    }}
  />
