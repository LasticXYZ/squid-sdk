import SquidClient from './SquidClient'

type Client = SquidClient

function getClient(): Client {
  return new SquidClient()
}

export default getClient
