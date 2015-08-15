var MyInput = {
  inputMessage: null,

  init: function(input) {
    this.inputMessage = input;
  },
  rot13: function(message) {
    this.message = message;
    var messageArray = this.message.split('');
    var rotMessageArray = [];

    for(var i = 0; i < messageArray.length; i++) {
      var letterCode = messageArray[i].charCodeAt();
      var targetLetterCode = letterCode - 13;

      if(letterCode < 65 ||
         (letterCode > 90 && letterCode < 97) ||
         letterCode > 122) {
        targetLetterCode = letterCode;
      } else if(targetLetterCode < 65 ||
               (letterCode >= 97 && targetLetterCode < 97)) {
        targetLetterCode += 26;
      }

      rotMessageArray.push(targetLetterCode);
    }

    return String.fromCharCode.apply(null, rotMessageArray);
  }
};

var viewModel = function() {
  var self = this;

  self.outputMessage = ko.observable('');
  self.input = ko.pureComputed({
    read: function() {
      self.input;
    },
    write: function(value) {
      self.outputMessage(MyInput.rot13(value));
    },
    owner: self
  });

  MyInput.init(self.input());
};

$(function() {
  ko.applyBindings(new viewModel());
});
