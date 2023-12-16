const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(dir = true) {
    this.dir = dir;
  }
  crypto(msg, key, mode) {
    if((typeof msg !== 'string') || (typeof key !== 'string')) throw new Error('Incorrect arguments!');
    msg = msg.toUpperCase();
    key = key.toUpperCase();
    let res = '';
    let idx = 0;
    for(let i = 0; i < msg.length; i++) {
      if((msg[i] >= 'A') && (msg[i] <= 'Z')) {
        res += String.fromCharCode(
          mode ? ((msg.charCodeAt(i) - 65) + (key.charCodeAt(idx % key.length) - 65)) % 26 + 65 :
            (26 + (msg.charCodeAt(i) - 65) - (key.charCodeAt(idx % key.length) - 65)) % 26 + 65
        );
        idx++;
      } else {
        res += msg[i];
      }
    }
    return this.dir? res : res.split('').reverse().join('');
  }
  encrypt(msg, key) {
    return this.crypto(msg, key, true)
  }
  decrypt(msg, key) {
    return this.crypto(msg, key, false)
  }
}

module.exports = {
  VigenereCipheringMachine
};
