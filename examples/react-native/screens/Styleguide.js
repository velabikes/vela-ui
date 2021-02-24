import {View, ScrollView} from 'react-native'
import React, {useState} from 'react'
import {Value} from 'react-powerplug'
import {
  Paragraph,
  Subheading,
  Footnote,
  Gap,
  Text,
  Button,
  Label,
  Card,
  Box,
  Image,
  Control,
  Icons,
  Heading
} from '@vela/ui'

function Styleguide() {
  const [theme, setTheme] = useState('')
  return (
    <Box>
      <ScrollView>
        <Box pad="large">
          <Gap/>
          <Heading>Bicleta Elétrica - Uma tecnologia sustentável</Heading>
          <Subheading>
            Conheça o impacto social do uso da bicicleta em centros urbanos
          </Subheading>
          <Paragraph size="large">
            A Vela surgiu com o propósito de oferecer uma solução eficiente para
            o transporte urbano. Atualmente, transformamos o meio de locomoção
            diário de 1800 pessoas através da bicicleta elétrica. Quais os
            motivos que influenciam na escolha de pedalar?
          </Paragraph>
          <Paragraph>
            A partir do estudo “Impacto Social do Uso da Bicicleta em São
            Paulo”, desenvolvido pelo CEBRAP e Itaú, conseguimos mensurar os
            benefícios do ciclismo em três áreas: meio ambiente, saúde e
            economia.
          </Paragraph>
          <Paragraph>
            Ainda de acordo com o estudo, quem vai de bike diminui o estresse, o
            desconforto e aumenta o prazer em 20%, durante o deslocamento,
            quando comparado com outras modalidades. Logo, ciclistas tendem a
            ter uma experiência mais positiva nos espaços públicos.
          </Paragraph>
        </Box>
      </ScrollView>
    </Box>
  )
}

const pageStyle = {
  paddingLeft: 24,
  paddingRight: 24
}

export default Styleguide
