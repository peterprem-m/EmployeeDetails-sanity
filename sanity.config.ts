import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import { media } from 'sanity-plugin-media'

export default defineConfig([
  {
    name: 'staging',
    title: 'NewAssmnt2-Stag',

    projectId: 'teg9wg0j',
    dataset: 'staging',
    basePath: '/staging',
    plugins: [deskTool(), visionTool(), media()],
    default: true,
    schema: {
      types: schemaTypes,
    },
  },
  {
    name: 'production',
    title: 'NewAssmnt2-Prod',

    projectId: 'teg9wg0j',
    dataset: 'production',
    basePath: '/production',
    plugins: [deskTool(), visionTool(), media()],

    schema: {
      types: schemaTypes,
    },
  },
  
])
