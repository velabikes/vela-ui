import Head from 'next/head'
import {Paragraph, Card, TextField, Heading, Box, Screen, Form, Button} from '@vela/ui'

const Home = () => (
  <Screen>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
      <link href="https://fonts.googleapis.com/css?family=Barlow&display=swap" rel="stylesheet"></link>
    </Head>
    <Box>
      <Card>
        <Heading>Heading</Heading>
        <Paragraph>asdf</Paragraph>
      </Card>
      <Form initialValues={{text: 'text'}}>
        <TextField name='text' />
        <Button label='Submit' />
      </Form>
    </Box>
  </Screen>
)

export default Home
