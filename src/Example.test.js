import { Example } from '../lib/index.js'

describe('Example', () => {

  const example = new Example()

  test('.hello => "hello {name}"', () => {
    expect(example.hello('world')).toEqual('hello world')
  })

  test('.helloES6 => "hello {name}"', () => {
    expect(example.helloES6('world')).toEqual('hello world')
  })

})