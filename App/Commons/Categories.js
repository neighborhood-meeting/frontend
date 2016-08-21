export const categories = [
  {
    type: 'HELLO',
    name: '인삿말',
    icon: 'smile-o'
  },
  {
    type: 'FREE',
    name: '자유글',
    icon: 'paper-plane-o'
  },
  {
    type: 'SHOPPING',
    name: '공구해요',
    icon: 'shopping-basket'
  },
  {
    type: 'LIGHTNING',
    name: '벙개',
    icon: 'bolt'
  },
  {
    type: 'HELP',
    name: '질문/도움',
    icon: 'question-circle-o'
  }
]

export const getCagetory = (type) => {
  for (let category of categories) {
    if (category.type === type) return category
  }
  return {}
}
