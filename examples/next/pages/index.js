import Head from 'next/head'
import {Paragraph, PhoneField, Heading, Box, Form, Button, Anchor} from '@vela/ui'

const Home = () => (
  <Box pad="medium" align="center">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
      <link href="https://fonts.googleapis.com/css?family=Barlow&display=swap" rel="stylesheet"></link>
    </Head>
    <Box gap pad="medium" elevation={2}>
      <Heading>Sign-In</Heading>
      <Form initialValues={{text: 'text'}}>
        <PhoneField name='text' label='Email' />
        <Button label='Submit' solid variant="primary" />
      </Form>
      <Anchor label="Forgot password?" textAlign="center" />
    </Box>
  </Box>
)

export default Home
