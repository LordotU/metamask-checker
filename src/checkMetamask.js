/** @module @metamask-checker/core */

import getSelectedAccount, { SelectedAccountError } from './getSelectedAccount'
import getSelectedNetwork, { SelectedNetworkError } from './getSelectedNetwork'


/**
 * Represents an error when metamask inpage provider cannot be found
 *
 * @class MetamaskNotFoundError
 *
 * @extends {Error}
 */
export class MetamaskNotFoundError extends Error {
  /**
   * Creates an instance of MetamaskNotFoundError
   *
   * @memberof MetamaskNotFoundError
   *
   * @param {String} message
   */
  constructor (message) {
    super(message)
  }
}


/**
 * Performs checking
 *
 * @param {Object} inpageProvider
 * @param {Number} [network=null]
 * @param {String} [account=null]
 *
 * @throws {MetamaskNotFoundError|SelectedNetworkError|SelectedAccountError|Error}
*/
export default async (inpageProvider, network = null, account = null) => {

  if (typeof inpageProvider !== 'object' || inpageProvider === null || ! inpageProvider.isMetaMask) {

    throw new MetamaskNotFoundError(`Can't find ethereum provider object!`)

  }

  const selectedNetwork = await getSelectedNetwork(inpageProvider)
  const selectedAccount = await getSelectedAccount(inpageProvider)

  if (
    ! [undefined, null, false].includes(network) &&
    selectedNetwork !== network
  ) {

      throw new SelectedNetworkError(`Metamask's selected network is not the same as given (${network})!`)

  } else if (
    ! [undefined, null, false].includes(account) &&
    selectedAccount !== account
  ) {

      throw new SelectedAccountError(`Metamask's selected account is not the same as given (${account})!`)

  }

  return {
    selectedNetwork,
    selectedAccount,
  }
}
