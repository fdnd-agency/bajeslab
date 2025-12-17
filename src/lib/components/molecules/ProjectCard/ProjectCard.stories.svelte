<script module>
    import { defineMeta } from '@storybook/addon-svelte-csf';
    import ProjectCard from '$lib/components/molecules/ProjectCard/ProjectCard.svelte';
    
    const { Story } = defineMeta({
      title: 'Molecules/ProjectCard', 
      component: ProjectCard,
      tags: ['autodocs'],
      argTypes: {
        project: {
          control: 'object',
          description: 'Project object met alle data'
        }
      }
    });
</script>
  
  <Story 
    name="Project Kaart Standaard"
    args={{
      project: {
        title: 'Prototype Buurtplatform',
        description: 'Dit dashboard helpt gezinnen realtime inzicht te krijgen in energieverbruik. Het biedt gedetailleerde analyses, historische data, en persoonlijke aanbevelingen om energie te besparen. Gebruikers kunnen hun verbruik vergelijken met andere huishoudens en doelen stellen voor duurzamer leven.',
        cover_image: '37fa41bd-9711-4007-a590-d8b3a0364a16',
        slug: 'prototype-buurtplatform'
      }
    }}
    parameters={{
      design: {
        type: 'figma',
        url: 'https://www.figma.com/design/doguH52moO2cyA3pT0B6sd/Living-Lab-Bajeskwartier-2025-2026?node-id=667-1423&t=Nz4dERkOL8FZvH0K-1'
      }
    }}
  />
  
  <Story
    name="Zonder Afbeelding"
    args={{
      project: {
        title: 'Project Zonder Cover',
        description: 'Test hoe de kaart eruitziet zonder afbeelding.',
        cover_image: '',
        slug: 'zonder-cover'
      }
    }}
  />