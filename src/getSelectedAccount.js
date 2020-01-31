/** @module @metamask-checker/core */


/**
 * Represents an error when then given account does not match with selected
 *
 * @class SelectedAccountError
 *
 * @extends {Error}
 */
export class SelectedAccountError extends Error {
  /**
   * Creates an instance of SelectedAccountError
   *
   * @memberof SelectedAccountError
   *
   * @param {String} message
   */
  constructor (message) {
    super(message)
  }
}


const selectedAccountsError = new SelectedAccountError(`Can't get accounts, cause Metamask connection problem!`)


/**
 * Tries to get selected account
 *
 * @param {Object} inpageProvider
 *
 * @returns {Promise<String>} inpage provider selected account
 *
 * @throws {SelectedAccountError|Error}
*/
export default async inpageProvider => {
  try {
    let accounts = (await inpageProvider.send('eth_accounts')).result

    if (accounts.length === 0) {
      accounts = (await inpageProvider.send('eth_requestAccounts')).result

      if (accounts.length === 0) {
        throw selectedAccountsError
      }
    }

    return accounts[0]
  } catch (error) {
    if (! (error instanceof SelectedAccountError)) {
      console.error(error)
    }

    throw selectedAccountsError
  }
}
