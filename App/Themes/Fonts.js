import Colors from './Colors'

const type = {
  base: 'NanumBarunGothic',
  bold: 'NanumSquareB'
}

const size = {
  h1: 38,
  h2: 34,
  h3: 30,
  h4: 26,
  h5: 20,
  h6: 19,
  input: 18,
  regular: 14,
  medium: 13,
  small: 12,
  little: 11,
  tiny: 8.5
}

const style = {
  h1: {
    fontFamily: type.base,
    fontSize: size.h1,
    color: Colors.text
  },
  h2: {
    fontWeight: 'bold',
    fontSize: size.h2,
    color: Colors.text
  },
  h3: {
    fontFamily: type.bold,
    fontSize: size.h3,
    color: Colors.text
  },
  h4: {
    fontFamily: type.base,
    fontSize: size.h4,
    color: Colors.text
  },
  h5: {
    fontFamily: type.base,
    fontSize: size.h5,
    color: Colors.text
  },
  h6: {
    fontFamily: type.emphasis,
    fontSize: size.h6,
    color: Colors.text
  },
  title: {
    fontFamily: type.bold,
    fontSize: size.regular,
    color: Colors.text
  },
  normal: {
    fontFamily: type.base,
    fontSize: size.medium,
    color: Colors.text
  },
  small: {
    fontFamily: type.base,
    fontSize: size.small,
    color: Colors.textSmall
  },
  little: {
    fontFamily: type.base,
    fontSize: size.little,
    color: Colors.textLittle
  },
  time: {
    fontFamily: type.base,
    fontSize: size.little,
    color: Colors.time
  },
  description: {
    fontFamily: type.base,
    fontSize: size.medium,
    color: Colors.text
  }
}

export default {
  type,
  size,
  style
}
