# @formify-tech/blog-builder

An API to access [formify](https://formify.tech/) blog data for your website.

## Installation:

To install the Formify blog builder, run one of the following commands:

- npm: `npm install @formify-tech/blog-builder`
- yarn: `yarn add @formify-tech/blog-builder`

Once the dependancy is installed you will need to import the getBlog function:

`import { getBlog } from @formify-tech/blog-builder`

The **getBlog** function returns an instance of the **FormifyBlogAPI**.

This instance contains the following methods:

### getPosts():

this method is used to return all published posts to the client. The response contains the following properties:

`title`: The title of the post
`slug`: A url friendly identifier for the post
`description`: A short description used to identify the purpose of the post
`displayImageUrl`: An image url

### getPost(slug):

Required parameters: **slug**

this method is used to return all a single published posts to the client. The response contains the following properties:

`title`: The title of the post
`slug`: A url friendly identifier for the post
`description`: A short description used to identify the purpose of the post
`displayImageUrl`: An image url
