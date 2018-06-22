interface List {
  id: number
  useid: number
}

let test1: List = {
  id: 12,
  useid: 12
}
let testobj: { field: List } = {
  name: '1',
  field: {
    id: 12
  }
}
