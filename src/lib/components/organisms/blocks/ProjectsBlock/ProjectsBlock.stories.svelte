<script module>
    import { defineMeta } from '@storybook/addon-svelte-csf';
    import ProjectsBlock from '$lib/components/organisms/blocks/ProjectsBlock/ProjectsBlock.svelte';
    
    const { Story } = defineMeta({
        title: 'Organisms/Blocks/ProjectsBlock',
        component: ProjectsBlock,
        tags: ['autodocs'],
        argTypes: {
            title: {
                control: 'text'
            },
            buttonText: {
                control: 'text'
            },
            buttonLink: {
                control: 'text'
            },
            buttonPosition: {
                options: ['flex-start', 'center', 'flex-end'],
                control: { type: 'radio' }
            },
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
    name="Projects Block"
    args={{
        title: 'Projecten',
        buttonText: 'Bekijk alle projecten',
        buttonLink: '/projecten',
        buttonPosition: 'flex-end',
        projects: [
            {
                id: 1,
                title: 'Project 1',
                description: 'Dit is een voorbeeld project beschrijving',
                highlighted: true,
                cover_image: '37fa41bd-9711-4007-a590-d8b3a0364a16'
            },
            {
                id: 2,
                title: 'Project 2',
                description: 'Dit is een tweede voorbeeld project',
                highlighted: true,
                cover_image: '37fa41bd-9711-4007-a590-d8b3a0364a16'
            },
            {
                id: 3,
                title: 'Project 3',
                description: 'Dit is een derde voorbeeld project',
                highlighted: true,
                cover_image: '37fa41bd-9711-4007-a590-d8b3a0364a16'
            }
        ]
    }}
/>