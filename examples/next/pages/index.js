import {Paragraph, PhoneField, Heading, Box, Form, Button, Anchor} from '@vela/ui'

const Home = () => (
  <Box pad="medium" align="center" justify='center' flex={true}>
    <Box gap pad="large" elevation={2}>
      <Heading>Sign-In</Heading>
      <Form initialValues={{text: 'text'}}>
        <PhoneField name='text' label='Email' />
        <PhoneField name='text' label='Password' />
        <Button label='Submit' solid variant="primary" />
      </Form>
      <Anchor label="Forgot password?" textAlign="center" />
    </Box>
  </Box>
)

export default Home
