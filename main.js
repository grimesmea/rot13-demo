function rotate13Decode(secretMessage) {
  this.secretMessage = secretMessage;
  var secretMessageArray = secretMessage.split('');
  var decodedMessageArray = [];

  for(var i = 0; i < secretMessageArray.length; i++) {
    var letterCode = secretMessageArray[i].charCodeAt();
    var targetLetterCode = letterCode - 13;

    console.log(letterCode);

    if(letterCode < 65 ||
       (letterCode > 90 && letterCode < 97) ||
       letterCode > 122) {
      targetLetterCode = letterCode;
    } else if(targetLetterCode < 65 ||
              (letterCode >= 97 && targetLetterCode < 97)) {
      targetLetterCode += 26;
    }

    decodedMessageArray.push(targetLetterCode);
  }

  return String.fromCharCode.apply(null, decodedMessageArray);
}

rotate13Decode('Fraq hf gur pbqr lbh hfrq gb qrpbqr guvf zrffntr');
