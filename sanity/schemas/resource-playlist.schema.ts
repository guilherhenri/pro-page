const schema = {
  name: 'resourcePlaylist',
  title: 'Resource Playlist',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(), // eslint-disable-line
    },
    {
      name: 'resources',
      title: 'Resources',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'resource' }] }],
    },
  ],
}

export default schema
