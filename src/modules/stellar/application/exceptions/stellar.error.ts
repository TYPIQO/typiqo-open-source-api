export enum ERROR_CODES {
  CONFIG_ISSUER_ACCOUNT_ERROR = 'CONFIG_ISSUER_ACCOUNT_ERROR',
  CREATE_CORE_ACCOUNTS_ERROR = 'CREATE_CORE_ACCOUNTS_ERROR',
  CREATE_ASSETS_ERROR = 'CREATE_ASSET_ERROR',
  CONFIRM_ORDER_ERROR = 'CONFIRM_ORDER_ERROR',
  CONSOLIDATE_ORDER_ERROR = 'CONSOLIDATE_ORDER_ERROR',
  DELIVER_ORDER_ERROR = 'DELIVER_ORDER_ERROR',
  GENERIC_ERROR = 'GENERIC_ERROR',
}

export const ERROR_MESSAGES: { [key in ERROR_CODES]: string } = {
  [ERROR_CODES.CONFIG_ISSUER_ACCOUNT_ERROR]:
    'An error occurred while configuring issuer account',
  [ERROR_CODES.CREATE_CORE_ACCOUNTS_ERROR]:
    'An error occurred while creating core accounts',
  [ERROR_CODES.CREATE_ASSETS_ERROR]: 'An error occurred while creating assets',
  [ERROR_CODES.CONFIRM_ORDER_ERROR]:
    'An error occurred while confirming order transaction',
  [ERROR_CODES.CONSOLIDATE_ORDER_ERROR]:
    'An error occurred while consolidating order transaction',
  [ERROR_CODES.DELIVER_ORDER_ERROR]:
    'An error occurred while delivering order transaction',
  [ERROR_CODES.GENERIC_ERROR]: 'An error occurred in the Stellar service',
};

export class StellarError extends Error {
  constructor(errorCode: ERROR_CODES) {
    super(ERROR_MESSAGES[errorCode]);
    this.name = errorCode;
  }
}
