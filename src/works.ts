interface INFO {
  name: string
  date: string
  draft?: boolean
}

type WORK = { no: string } & INFO

export const info: INFO[] = [
  {
    name: 'Plum',
    date: '08/13',
  },
  {
    name: 'Rust',
    date: '08/13',
  },
  {
    name: 'seesaw',
    date: '08/14',
  },
]

export const works: WORK[] = info.map((info, idx) => {
  return {
    ...info,
    no: `${idx + 1}`.padStart(3, '0'),
  }
})
