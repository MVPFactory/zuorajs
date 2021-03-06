var got = require('got');
var _ = require('lodash');

module.exports = function (zuoraClient) {
  function getAccount(accountId) {
    return zuoraClient.authenticate().then(headers => {
      var url = zuoraClient.serverUrl + '/object/account/' + accountId;
      var query = {
        headers,
        json: true
      };
      return got.get(url, query).then(res => res.body);
    });
  }

  function deleteAccount(accountId) {
    return zuoraClient.authenticate().then(headers => {
      var url = zuoraClient.serverUrl + '/object/account/' + accountId;
      var query = {
        headers,
        json: true
      };
      return got.delete(url, query).then(res => res.body);
    });
  }

  function createAccount(accountData) {
    return zuoraClient.authenticate().then(headers => {
      var url = zuoraClient.serverUrl + '/object/account';
      var query = {
        headers,
        body: accountData,
        json: true
      };
      return got.post(url, query).then(res => res.body);
    });
  }

  function updateAccount(accountId, updatedContent) {
    return zuoraClient.authenticate().then(headers => {
      var url = zuoraClient.serverUrl + '/object/account/' + accountId;
      var query = {
        headers,
        body: updatedContent,
        json: true
      };
      return got.put(url, query).then(res => res.body);
    });
  }

  function getAccountFromAccountNumber(accountNumber) {
    return zuoraClient.action
      .query("select Id from Account where AccountNumber='" + accountNumber + "'")
      .then(queryResult => {
        if (queryResult[0]) {
          var accountId = queryResult[0].Id;
          return getAccount(accountId);
        } else {
          return null;
        }
      });
  }

  return {
    getFromAccountNumber: accountNumber => getAccountFromAccountNumber(accountNumber),
    activate: accountId => updateAccount(accountId, { Status: 'Active' }),
    get: accountId => getAccount(accountId),
    create: (accountData) => createAccount(accountData),
    update: (accountId, updatedContent) => updateAccount(accountId, updatedContent),
    delete: accountId => deleteAccount(accountId)
  };
};
