/** @module @metamask-checker/core */


/**
 * Represents an error when then given network/chain id does not match with selected
 *
 * @class SelectedNetworkError
 *
 * @extends {Error}
 */
export class SelectedNetworkError extends Error {
  /**
   * Creates an instance of SelectedNetworkError
   *
   * @memberof SelectedNetworkError
   *
   * @param {String} message
   */
  constructor (message) {
    super(message)
  }
}


const selectedNetworkError = new SelectedNetworkError(`Can't get network, cause Metamask connection problem!`)


/**
 * Tries to get selected network
 *
 * @export
 *
 * @param {Object} inpageProvider
 *
 * @returns {Promise<Number>} inpage provider selected network/chain id
 *
 * @throws {SelectedNetworkError|Error}
*/
export default async ethereum => {
  try {
    const network = parseInt((await ethereum.send('eth_chainId')).result)

    if (! Number.isFinite(network)) {
      throw selectedNetworkError
    }

    return network
  } catch (error) {
    if (! (error instanceof SelectedNetworkError)) {
      console.error(error)
    }

    throw selectedNetworkError
  }
}
