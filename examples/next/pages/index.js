import {
  LiveSpline,
  PhoneField,
  Heading,
  Box,
  Form,
  Button,
  Anchor,
  Text,
  Switch,
} from "@vela/ui";
import { useState, useEffect } from "react";

const Home = () => {
  const [current, setCurrent] = useState(0)
  useEffect(() => {
    setInterval(() => {
      setCurrent(Math.round(Math.random()*100))
    }, 100)
  }, [])

  return (
    <Box align="center" justify="center" flex>
      <Box gap pad="large" elevation={2}>
        <Heading>Sign-In</Heading>
        <Form initialValues={{ text: "text" }}>
          <PhoneField name="text" label="Email" />
          <PhoneField name="text" label="Password" />
          <Switch name="keep" label="Keep signed in" toggleSwitch={() => alert('test')} />
          <Button label="Submit" solid variant="primary" />
        </Form>
        <Anchor label="Forgot password?" textAlign="center" />
      </Box>
  <Text>{current}</Text>
      <LiveSpline resolution={100} current={current} interval={100} />
    </Box>
  );
};

export default Home;
