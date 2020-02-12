import React, {useState} from 'react'
import {View, ScrollView} from 'react-native'
import {
  Paragraph,
  Subheading,
  Footnote,
  Spacer,
  Text,
  Button,
  TextInput,
  Label,
  SelectInput,
  TextField,
  Card,
  Box,
  Image,
  Control, 
  Theme,
  Icons,
  Navbar,
  Heading,
} from '@vela/ui'
import {Value} from 'react-powerplug'
const {Back} = Icons

const StyleguideScreen = () => {
  const [theme, setTheme] = useState('default')
  return (
    <Theme value={theme} style={{flex: 1}}>
      <Box style={{flex: 1}}>
        <Navbar title="Vela Styleguide" leftIcon={Back}>
          <ScrollView contentContainerStyle={pageStyle}>
            <Spacer />
            <Heading size="s">Icons</Heading>
            <Spacer />
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap'
              }}>
              {Object.keys(Icons).map(key => {
                const Icon = Icons[key]
                return <Icon key={key} style={{margin: 16}} />
              })}
            </View>

            <Spacer size="xl" />

            <Heading size="s">Image</Heading>
            <Spacer />
            <Image
              style={{height: 240}}
              source={{
                uri:
                  'https://img.estadao.com.br/resources/jpg/1/6/1524592466261.jpg'
              }}
              round
              loading
            />
            <Spacer />
            <Image
              style={{height: 240}}
              source={{
                uri:
                  'https://instagram.fcgh3-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/60184841_661977530898595_5305388905955443863_n.jpg?_nc_ht=instagram.fcgh3-1.fna.fbcdn.net&_nc_cat=107&oh=34697dd825706cc8b1d1b88b3dc080d0&oe=5E7FC356'
              }}
              round
            />

            <Spacer size="xl" />

            <Heading size="s">Typography</Heading>
            <Spacer />
            <Heading size="xl">Heading</Heading>
            <Heading size="l">Heading</Heading>
            <Heading>Heading</Heading>
            <Heading size="s">Heading</Heading>
            <Heading size="xs">Heading</Heading>
            <Subheading size="l">Subheading</Subheading>
            <Subheading>Subheading</Subheading>
            <Subheading size="s">Subheading</Subheading>
            <Text size="l">Text</Text>
            <Text>Text</Text>
            <Footnote>Footnote</Footnote>
            <Label>Label</Label>

            <Spacer size="xl" />

            <Heading size="s">Inputs</Heading>
            <Spacer />
            <TextInput placeholder="Placeholder" />
            <Spacer size="s" />
            <TextInput placeholder="Placeholder" error />
            <Spacer size="s" />
            <SelectInput placeholder="Placeholder" />

            <Spacer />

            <TextField label="Label" placeholder="Placeholder" />
            <TextField
              label="Label"
              placeholder="Placeholder"
              error="Error message"
            />
            <TextField
              label="Label"
              placeholder="Placeholder"
              error="Error message"
            />

            <Spacer size="xl" />

            <Heading size="s">Control</Heading>
            <Spacer />
            <Control
              options={[
                {label: 'System', value: 'default'},
                {label: 'Light', value: 'light'},
                {label: 'Dark', value: 'dark'}
              ]}
              selected={theme}
              onSelect={setTheme}
            />
            <Spacer size="s" />
            <Value initial={1}>
              {({value, set}) => (
                <Control
                  options={[
                    {icon: Icons.Wrench, value: 1},
                    {icon: Icons.Pin, value: 2},
                    {icon: Icons.Location, value: 3}
                  ]}
                  selected={value}
                  onSelect={set}
                />
              )}
            </Value>
            <Spacer size="s" />
            <Value initial={false}>
              {({value, set}) => (
                <Control
                  options={[
                    {icon: Icons.Logo, value: true}
                  ]}
                  selected={value}
                  onSelect={() => set(!value)}
                />
              )}
            </Value>
            <Spacer size="xl" />

            <Heading size="s">Buttons</Heading>
            <Spacer />
            <Button label="Button" />
            <Button label="Icon" icon={Icons.Phone} />
            <Button label="Primary" variant="primary" />
            <Button label="Secondary" variant="secondary" />
            <Button label="Disabled" disabled />
            <Button label="Negative" variant="negative" />
            <Button label="Solid Button" solid />
            <Spacer size="s" />
            <Button label="Solid Icon" solid icon={Icons.Phone} />
            <Spacer size="s" />
            <Button label="Solid Primary" solid variant="primary" />
            <Spacer size="s" />
            <Button label="Solid Secondary" solid variant="secondary" />
            <Spacer size="s" />
            <Button label="Solid Disabled" solid disabled />
            <Spacer size="s" />
            <Button label="Solid Negative" solid variant="negative" />
            <Spacer size="s" />
            <Button variant="cta" round solid icon={Icons.Add}/>

            <Spacer size="xl" />

            <Heading size="s">Card</Heading>
            <Spacer />
            <Card>
              <Heading size="s">Card</Heading>
              <Spacer size="s" />
              <Text>
                A card is a flexible and extensible content container. It
                contains content and actions about a single subject.
              </Text>
            </Card>

            <Spacer />

            <Card
              onPress={() => alert('onPress Event')}
              image={{
                uri:
                  'https://img.estadao.com.br/resources/jpg/1/6/1524592466261.jpg'
              }}>
              <Heading size="s">Card</Heading>
              <Subheading size="s">Subheading</Subheading>
            </Card>

            <Spacer />

            <Card>
              <Paragraph>
                A card is a flexible and extensible content container. It
                contains content and actions about a single subject.
              </Paragraph>
              <Button label="Action" solid />
              <Button label="Skip" />
            </Card>

            <Spacer />

            <Card>
              <Heading>Form</Heading>
              <Spacer size="s" />
              <TextField label="Label" placeholder="Placeholder" />
              <TextField label="Label" placeholder="Placeholder" />
              <Button label="Submit" variant="primary" solid />
            </Card>

            <Spacer size="xl" />

            <Heading>Bicleta Elétrica - Uma tecnologia sustentável</Heading>
            <Subheading>
              Conheça o impacto social do uso da bicicleta em centros urbanos
            </Subheading>
            <Spacer />
            <Paragraph size="l">
              A Vela surgiu com o propósito de oferecer uma solução eficiente
              para o transporte urbano. Atualmente, transformamos o meio de
              locomoção diário de 1800 pessoas através da bicicleta elétrica.
              Quais os motivos que influenciam na escolha de pedalar?
            </Paragraph>
            <Paragraph>
              A partir do estudo “Impacto Social do Uso da Bicicleta em São
              Paulo”, desenvolvido pelo CEBRAP e Itaú, conseguimos mensurar os
              benefícios do ciclismo em três áreas: meio ambiente, saúde e
              economia.
            </Paragraph>
            <Paragraph>
              Ainda de acordo com o estudo, quem vai de bike diminui o estresse,
              o desconforto e aumenta o prazer em 20%, durante o deslocamento,
              quando comparado com outras modalidades. Logo, ciclistas tendem a
              ter uma experiência mais positiva nos espaços públicos.
            </Paragraph>
            <Spacer size="xl" />
          </ScrollView>
        </Navbar>
      </Box>
    </Theme>
  )
}

const pageStyle = {
  paddingLeft: 24,
  paddingRight: 24
}

export default StyleguideScreen
