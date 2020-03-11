import React from 'react'
import {Button, Icons, Box} from '@vela/ui'

const Dashboard = ({navigation}) => {
  return (
    <Box>
      <Button
        round
        icon={Icons.Menu}
        solid
        onPress={() => navigation.openDrawer()}
      />
    </Box>
  )
}

export default Dashboard
