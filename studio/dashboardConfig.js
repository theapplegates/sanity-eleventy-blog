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
                  buildHookId: '60b5c037f776af0ecb445517',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-qtdo25h4',
                  apiId: 'f00fb3f2-c318-4677-b4b4-30b3f27ab352'
                },
                {
                  buildHookId: '60b5c037c4a6b5bf20f3ab07',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-1ihjh156',
                  apiId: 'a39e7070-ddce-45a6-8467-1cd0ba6dcade'
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
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-1ihjh156.netlify.app', category: 'apps'}
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
