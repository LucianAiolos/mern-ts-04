interface ITodo{
  // id: number
  // todo: string
  // isDone: boolean
  name: string
}

type ApiDataType = {
  message: string
  status: string
  data: ITodo[]
}

// type Todos = []