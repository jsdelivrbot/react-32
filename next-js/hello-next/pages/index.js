import Layout from "../components/MyLayout.js";

export default () => (
  <Layout>
    <p>Hello Next.js</p>
  </Layout>
);


/*
Other method to create a Layout Component:
#1:
import withLayout from '../lib/layout'

const Page = () => (
  <p>This is the about page</p>
)

export default withLayout(Page)

#2:
const Page = () => (
  <p>This is the about page</p>
)

export default () => (<Layout page={Page}/>)

#3:
const content = (<p>This is the about page</p>)

export default () => (<Layout content={content}/>)
*/