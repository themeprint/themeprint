export enum SwatchColor {
  red = 'red',
  orange = 'orange',
  yellow = 'yellow',
  green = 'green',
  teal = 'teal',
  cyan = 'cyan',
  blue = 'blue',
  indigo = 'indigo',
  purple = 'purple',
  magenta = 'magenta',
  pink = 'pink',
  gray = 'gray',
}

export interface SwatchDetails {
  name: string
  variants: SwatchVariant[]
}

export interface SwatchVariant {
  id: string
  colors: string[]
}

export const swatches = new Map<string, SwatchDetails>([
  [
    SwatchColor.red,
    {
      name: 'Red',
      variants: [
        {
          id: 'standard',
          colors: [
            '#FFEEEE',
            '#FACDCD',
            '#E66A6A',
            '#D64545',
            '#BA2525',
            '#A61B1B',
            '#911111',
            '#780A0A',
            '#610404',
          ],
        },
        {
          id: 'vivid',
          colors: [
            '#FFE3E3',
            '#FFBDBD',
            '#F86A6A',
            '#EF4E4E',
            '#E12D39',
            '#CF1124',
            '#AB091E',
            '#8A041A',
            '#610316',
          ],
        },
      ],
    },
  ],
  [
    SwatchColor.orange,
    {
      name: 'Orange',
      variants: [
        {
          id: 'standard',
          colors: [
            '#FFEFE6',
            '#FFD3BA',
            '#EF8E58',
            '#E67635',
            '#C65D21',
            '#AB4E19',
            '#8C3D10',
            '#77340D',
            '#572508',
          ],
        },
        {
          id: 'vivid',
          colors: [
            '#FFE8D9',
            '#FFD0B5',
            '#FF9466',
            '#F9703E',
            '#F35627',
            '#DE3A11',
            '#C52707',
            '#AD1D07',
            '#841003',
          ],
        },
      ],
    },
  ],
  [
    SwatchColor.yellow,
    {
      name: 'Yellow',
      variants: [
        {
          id: 'standard',
          colors: [
            '#FFFAEB',
            '#FCEFC7',
            '#F9DA8B',
            '#F7D070',
            '#E9B949',
            '#C99A2E',
            '#A27C1A',
            '#7C5E10',
            '#513C06',
          ],
        },
        {
          id: 'vivid',
          colors: [
            '#FFFBEA',
            '#FFF3C4',
            '#FADB5F',
            '#F7C948',
            '#F0B429',
            '#DE911D',
            '#CB6E17',
            '#B44D12',
            '#8D2B0B',
          ],
        },
      ],
    },
  ],
  [
    SwatchColor.green,
    {
      name: 'Green',
      variants: [
        {
          id: 'standard',
          colors: [
            '#E3F9E5',
            '#C1EAC5',
            '#7BC47F',
            '#57AE5B',
            '#3F9142',
            '#2F8132',
            '#207227',
            '#0E5814',
            '#05400A',
          ],
        },
        {
          id: 'vivid',
          colors: [
            '#E3F9E5',
            '#C1F2C7',
            '#51CA58',
            '#31B237',
            '#18981D',
            '#0F8613',
            '#0E7817',
            '#07600E',
            '#014807',
          ],
        },
        {
          id: 'lime',
          colors: [
            '#F2FDE0',
            '#E2F7C2',
            '#ABDB5E',
            '#94C843',
            '#7BB026',
            '#63921A',
            '#507712',
            '#42600C',
            '#2B4005',
          ],
        },
        {
          id: 'lime-vivid',
          colors: [
            '#F8FFED',
            '#E6FFBF',
            '#AFF75C',
            '#8DED2D',
            '#6CD410',
            '#5CB70B',
            '#399709',
            '#2E7B06',
            '#1E5303',
          ],
        },
      ],
    },
  ],
  [
    SwatchColor.teal,
    {
      name: 'Teal',
      variants: [
        {
          id: 'standard',
          colors: [
            '#EFFCF6',
            '#C6F7E2',
            '#65D6AD',
            '#3EBD93',
            '#27AB83',
            '#199473',
            '#147D64',
            '#0C6B58',
            '#014D40',
          ],
        },
        {
          id: 'vivid',
          colors: [
            '#F0FCF9',
            '#C6F7E9',
            '#5FE3C0',
            '#2DCCA7',
            '#17B897',
            '#079A82',
            '#048271',
            '#016457',
            '#004440',
          ],
        },
      ],
    },
  ],
  [
    SwatchColor.cyan,
    {
      name: 'Cyan',
      variants: [
        {
          id: 'standard',
          colors: [
            '#E0FCFF',
            '#BEF8FD',
            '#54D1DB',
            '#38BEC9',
            '#2CB1BC',
            '#14919B',
            '#0E7C86',
            '#0A6C74',
            '#044E54',
          ],
        },
        {
          id: 'vivid',
          colors: [
            '#E1FCF8',
            '#C1FEF6',
            '#62F4EB',
            '#3AE7E1',
            '#1CD4D4',
            '#0FB5BA',
            '#099AA4',
            '#07818F',
            '#05606E',
          ],
        },
      ],
    },
  ],
  [
    SwatchColor.blue,
    {
      name: 'Blue',
      variants: [
        {
          id: 'standard',
          colors: [
            '#DCEEFB',
            '#B6E0FE',
            '#62B0E8',
            '#4098D7',
            '#2680C2',
            '#186FAF',
            '#0F609B',
            '#0A558C',
            '#003E6B',
          ],
        },
        {
          id: 'vivid',
          colors: [
            '#E6F6FF',
            '#BAE3FF',
            '#47A3F3',
            '#2186EB',
            '#0967D2',
            '#0552B5',
            '#03449E',
            '#01337D',
            '#002159',
          ],
        },
        {
          id: 'light',
          colors: [
            '#EBF8FF',
            '#D1EEFC',
            '#7CC1E4',
            '#55AAD4',
            '#3994C1',
            '#2D83AE',
            '#1D6F98',
            '#166086',
            '#0B4F71',
          ],
        },
        {
          id: 'light-vivid',
          colors: [
            '#E3F8FF',
            '#B3ECFF',
            '#5ED0FA',
            '#40C3F7',
            '#2BB0ED',
            '#1992D4',
            '#127FBF',
            '#0B69A3',
            '#035388',
          ],
        },
      ],
    },
  ],
  [
    SwatchColor.indigo,
    {
      name: 'Indigo',
      variants: [
        {
          id: 'standard',
          colors: [
            '#E0E8F9',
            '#BED0F7',
            '#7B93DB',
            '#647ACB',
            '#4C63B6',
            '#4055A8',
            '#35469C',
            '#2D3A8C',
            '#19216C',
          ],
        },
        {
          id: 'vivid',
          colors: [
            '#D9E8FF',
            '#B0D0FF',
            '#5E8AEE',
            '#3A66DB',
            '#2251CC',
            '#1D3DBF',
            '#132DAD',
            '#0B1D96',
            '#061178',
          ],
        },
      ],
    },
  ],
  [
    SwatchColor.purple,
    {
      name: 'Purple',
      variants: [
        {
          id: 'standard',
          colors: [
            '#EAE2F8',
            '#CFBCF2',
            '#8662C7',
            '#724BB7',
            '#653CAD',
            '#51279B',
            '#421987',
            '#34126F',
            '#240754',
          ],
        },
        {
          id: 'vivid',
          colors: [
            '#F2EBFE',
            '#DAC4FF',
            '#A368FC',
            '#9446ED',
            '#8719E0',
            '#7A0ECC',
            '#690CB0',
            '#580A94',
            '#44056E',
          ],
        },
      ],
    },
  ],
  [
    SwatchColor.magenta,
    {
      name: 'Magenta',
      variants: [
        {
          id: 'standard',
          colors: [
            '#F5E1F7',
            '#ECBDF2',
            '#BB61C7',
            '#AD4BB8',
            '#A23DAD',
            '#90279C',
            '#7C1A87',
            '#671270',
            '#4E0754',
          ],
        },
        {
          id: 'vivid',
          colors: [
            '#FDEBFF',
            '#F8C4FE',
            '#F368FC',
            '#ED47ED',
            '#E019D0',
            '#CB10B8',
            '#B30BA3',
            '#960888',
            '#6E0560',
          ],
        },
      ],
    },
  ],
  [
    SwatchColor.pink,
    {
      name: 'Pink',
      variants: [
        {
          id: 'standard',
          colors: [
            '#FFE0F0',
            '#FAB8D9',
            '#E668A7',
            '#DA4A91',
            '#C42D78',
            '#AD2167',
            '#9B1B5A',
            '#781244',
            '#5C0B33',
          ],
        },
        {
          id: 'vivid',
          colors: [
            '#FFE3EC',
            '#FFB8D2',
            '#F364A2',
            '#E8368F',
            '#DA127D',
            '#BC0A6F',
            '#A30664',
            '#870557',
            '#620042',
          ],
        },
      ],
    },
  ],
  [
    SwatchColor.gray,
    {
      name: 'Gray',
      variants: [
        {
          id: 'standard',
          colors: [
            '#F7F7F7',
            '#E1E1E1',
            '#B1B1B1',
            '#9E9E9E',
            '#7E7E7E',
            '#626262',
            '#515151',
            '#3B3B3B',
            '#222222',
          ],
        },
        {
          id: 'blue',
          colors: [
            '#F0F4F8',
            '#D9E2EC',
            '#9FB3C8',
            '#829AB1',
            '#627D98',
            '#486581',
            '#334E68',
            '#243B53',
            '#102A43',
          ],
        },
        {
          id: 'cool',
          colors: [
            '#F5F7FA',
            '#E4E7EB',
            '#9AA5B1',
            '#7B8794',
            '#616E7C',
            '#52606D',
            '#3E4C59',
            '#323F4B',
            '#1F2933',
          ],
        },
        {
          id: 'warm',
          colors: [
            '#FAF9F7',
            '#E8E6E1',
            '#B8B2A7',
            '#A39E93',
            '#857F72',
            '#625D52',
            '#504A40',
            '#423D33',
            '#27241D',
          ],
        },
      ],
    },
  ],
])
