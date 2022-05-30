export const parseFullName = (name: string) => {
  const parsedName = {
    firstName: '',
    lastName: '',
    initials: '',
  }

  if (!name) return parsedName

  const splittedName = name.split(' ')
  const { length } = splittedName

  switch (true) {
    case length === 1 || length === 2:
      parsedName.firstName = splittedName[0]
      parsedName.lastName = splittedName[1] || ''
      break
    case length >= 3:
      parsedName.firstName = `${splittedName[0]} ${splittedName[1]}`
      parsedName.lastName = splittedName.slice(2).join(' ')
      break
    default:
      break
  }

  return {
    firstName: parsedName.firstName.trim(),
    lastName: parsedName.lastName.trim(),
    initials: `${parsedName.firstName.charAt(0)}${parsedName.lastName.charAt(
      0
    )}`,
  }
}

export const isFullName = (name: string): boolean => {
  if (!name) return false

  const { firstName, lastName } = parseFullName(name)

  return !!(firstName && lastName)
}
