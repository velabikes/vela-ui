import Head from 'next/head'
import styles from '../styles/Home.module.css'

import {
  Box,
  Form,
  Button,
  Anchor,
  Heading,
  EmailField,
  TextField,
  useTheme
} from '@vela/ui'

export default function Home() {
    const {colors} = useTheme('light')

  return (
    <div className={styles.container}>
      <Head>
        <title>Nextjs 11 Example</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Barlow&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Box align="center" justify="center" flex >
        <Box gap='large' pad="large" elevation={2} minWidth='350px'>
          <Heading>Login</Heading>
          <Form initialValues={{ email: '', password: '' }}>
            <EmailField name="email" label="E-mail" />
            <TextField name="password" label="Password" type="password" />
            <Button label="Login" background={colors.primary} onPress={() => console.info('Button onPress func')}/>
          </Form>
          <Anchor onPress={() => console.info('Anchor onPress func')} label="Forgot password?" textAlign="center" />
        </Box>
      </Box>

    </div>
  )
}
