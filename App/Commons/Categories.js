import { Images } from '../Themes'

export const categories = [
  {
    type: 'HELLO',
    name: '인삿말',
    icon: 'smile-o',
    image: Images.icon_hello
  },
  {
    type: 'FREE',
    name: '자유글',
    icon: 'paper-plane-o',
    image: Images.icon_free
  },
  {
    type: 'SHOPPING',
    name: '공구해요',
    icon: 'shopping-basket',
    image: Images.icon_buy
  },
  {
    type: 'LIGHTNING',
    name: '벙개',
    icon: 'bolt',
    image: Images.icon_light
  },
  {
    type: 'HELP',
    name: '질문/도움',
    icon: 'question-circle-o',
    image: Images.icon_qt
  }
]

export const getCagetory = (type) => {
  for (let category of categories) {
    if (category.type === type) return category
  }
  return {}
}
