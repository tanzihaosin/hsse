import Typograf from 'typograf'

const instance = new Typograf({ locale: ['ru', 'en-US'] })

export const typograf = (text: string): string => instance.execute(text)
