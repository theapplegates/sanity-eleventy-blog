export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e65704e969aedbb94469020',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-wwq5taqk',
                  apiId: '070c7abb-9532-47e4-ab75-60edd7915673'
                },
                {
                  buildHookId: '5e65704e000403db7f0236a4',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-nhw2knpm',
                  apiId: '9ddb88fe-4257-4619-82fe-4a3ca3bfd72b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/theapplegates/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-nhw2knpm.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
