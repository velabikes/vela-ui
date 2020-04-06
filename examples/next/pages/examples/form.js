import React from 'react'
import {
  Box,
  Form,
  Text,
  TextField,
  Button,
  Anchor
} from '@vela/ui'

const FormExample = ({ navigation }) => {
  const initialValues = {um: '', dois: ''}
  return (
    <Box
      justify='center'
      align='center'
    >
      <Text>
        Oi
      </Text>
      <Form initialValues={initialValues}>
        <Box
          direction='column'
          pad= 'xlarge'
          background='brand'
        >
          <TextField name='um' label='oium' placeholder='teste' />
          <TextField name='dois' label='oidois' />
          <Button
            label='Confirmar'
            onPress={() => alert('press')}
          />
        </Box>
      </Form>
      <Text>
        Mais Informações:
        <Anchor label='GitHub/Mastereloading' onPress={() => alert('GoToLink')} />
      </Text>
    </Box>
  )
}

export default FormExample
