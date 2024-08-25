import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'cloud',
  },
  cloud: {
    project: 'myveloxycms/veloxy',
  },
  collections: {
    LegalDocuments: collection({
      label: "LegalDocuments",
      slugField: "title",
      path: "src/content/legaldocuments/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({
          name: {
            label: "Page Title",
          },
        }),
        seoData: fields.object({
          seoTitle: fields.text({ label: "SEO Title" }),
          seoDescription: fields.text({ label: "SEO Description" }),
        }),
        content: fields.markdoc({
          label: "Content",
        }),
      },
    }),
    blogs: collection({
      label: 'Blogs',
      slugField: 'title',
      path: 'src/content/blogs/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({label : 'Description', multiline: true}),
        thumbnail: fields.image({
          label:"Thumbnail",
          directory:"/public/images/thumbnail",
          publicPath:"/images/thumbnail/",
        }),
        content: fields.markdoc({
          label: 'Content',
          options: {
            image: {
              directory: '/public/images/blogs',
              publicPath: '/images/blogs/',
            },
          },
        }),
      },
    }),

  },
  singletons: {
    navbar: singleton({
      label: 'Navbar',
      path: 'src/content/navbar/',
      schema: {
        logo: fields.image({
          label: 'Logo',
          directory: '/public/images/',
          publicPath: '/images/',
        }),
        menu: fields.array(
          fields.object({
            text: fields.text({ label: 'Text' }),
            link: fields.text({ label: 'Link' }),
            icon: fields.image({label:'Icon', directory:"public/images/navbar/", publicPath:"/images/navbar/"}),
            submenu: fields.array(
              fields.object({
                text: fields.text({ label: 'Submenu Text' }),
                link: fields.text({ label: 'Submenu Link' }),
              }),
              {
                label: 'Submenu',
                itemLabel: (props) => props.fields.text.value,
              }
            ),
          }),
          {
            label: 'Menu',
            itemLabel: (props) => props.fields.text.value,
          }
        ),
        contactButton: fields.object({
          text: fields.text({ label: 'Text' }),
          link: fields.text({ label: 'Link' }),
        },{label: 'Contact Button'}),
      },
    }),
    footer: singleton({
      label: 'Footer',
      path: 'src/content/footer/',
      schema: {
        bgImage: fields.image({
          label:"BackgroundImage",
          directory:"public/images/footer/",
          publicPath:"/images/footer/",
        }),
        logo: fields.image({
          label: 'Image',
          directory: '/public/images/',
          publicPath: '/images/',
        }),


        QuickLinks: fields.array(
          fields.object({
            text: fields.text({ label: 'Text' }),
            link: fields.text({ label: 'Link' }),
          }),
          {
            label: 'QuickLinks',
            itemLabel: (props) => props.fields.text.value,
          }
        ),
        Info: fields.array(
          fields.object({
            text: fields.text({ label: 'Text' }),
            link: fields.text({ label: 'Link' }),
          }),
          {
            label: 'Info',
            itemLabel: (props) => props.fields.text.value,
          }
        ),
        PlatformPolicies: fields.array(
          fields.object({
            text: fields.text({ label: 'Text' }),
            link: fields.text({ label: 'Link' }),
          }),
          {
            label: 'Platform Policies',
            itemLabel: (props) => props.fields.text.value,
          }
        ),
        disclaimer: fields.text({label: 'disclaimer', multiline: true}),
        footerBottomLeft: fields.object({
        text: fields.text({label:'Cname'}),
        icon: fields.image({label: 'CountryIcon',directory:'/public/images/footer/',publicPath:'/images/footer/'
        }),
        }),
        contactDetails: fields.object({
          text: fields.text({label: 'Contact'}),
          icon: fields.image({label: 'contactIcon', directory:"/public/images/footer/", publicPath:'/images/footer/'}),
          number: fields.text({label: 'Number'}),
        }),
        EmailDetails: fields.object({
          text: fields.text({label: 'Email'}),
          icon: fields.image({label: 'EmailIcon', directory:"/public/images/footer/", publicPath:'/images/footer/'}),
          Email: fields.text({label: 'Email'}),
        }),
        footerBottomRight: fields.array(
          fields.object({
            text: fields.text({ label: 'Text' }),
            icons:fields.image({label: 'Icons', directory:'/public/images/footer', publicPath:'/images/footer/'}),
          }),
          {
            label: 'SocialmediaIcons',
            itemLabel: (props) => props.fields.text.value,
          }
        ),
      },
    }),
  },
});
