const axios = require("axios");
const opsKey = "69506b43429a530aad8ad9db12c5d43e";
// const stateInput = dropdown component $(#DropDown).val();
const stateBase = "http://www.opensecrets.org/api/?method=getLegislators&output=json&apikey=" + opsKey + "&id=" + stateInput;


module.exports = {
    findSenators: function(req, res) {
      const query = req.params.query;
      axios
        .get(stateBase + query)
        .then(response => {
            console.log(response);
        });
    }
  };