export const getSizeIndex = sizeName => {
  switch (sizeName) {
    case 'xxxsmall':
    case 'xxxs':
      return 0
    case 'xxsmall':
    case 'xxs':
      return 1
    case 'xs':
    case 'xsmall':
      return 2
    case 's':
    case 'small':
      return 3
    case 'medium':
    case 'm':
      return 4
    case 'lg':
    case 'large':
      return 5
    case 'xlg':
    case 'xlarge':
      return 6
    case 'xxlg':
    case 'xxlarge':
      return 7
    case 'xxxlg':
    case 'xxxlarge':
      return 8
    default:
      throw new Error(`Unknown size '${sizeName}'.`)
  }
}
