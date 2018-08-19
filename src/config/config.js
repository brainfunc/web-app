//var ROOT_SERVER_URL = 'http://localhost:3000';
import {NEURON_CONTRACT_ABI} from "./abi/neuron";

export const ROOT_SERVER_URL = 'https://brainfunc-landing-page-server.herokuapp.com';
export const CONTRACTS = {
  NEURON: {
    "CREATOR": "0xe0e8ae3c99784bdaac966ae0a0f1e0ac87d43384",
    "ADDRESS": "0x66edb5913beacf63976bbf72493bbc517d899d48",
    "ABI": NEURON_CONTRACT_ABI
  }
}
