export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5e9640819d7c3a99c936874d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-6ai1e8q2',
                  apiId: 'e43ea4cc-471c-4351-a23e-c0e69192eb1a'
                },
                {
                  buildHookId: '5e964081cb50657b1ef27711',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-y75a4ngo',
                  apiId: '8435faf7-26a6-4a96-931a-3c102c816b70'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/benalloway/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-y75a4ngo.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
