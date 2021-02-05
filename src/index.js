module.exports = function toReadable (number) {

  if (!number || number == 0) return 'zero';

  let result = '', dig = 0;

  const digits = ['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen','twenty'];
  
  if ( number >= 100 ) { 
      dig = (number/100)|0;
      result = `${ digits[dig] } hundred`; 
      number -= dig * 100; 
      }

  if ( number > 19  ) {

	 const tens = ['','ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];

      dig = (number/10)|0;
			number -= dig * 10;
      result = `${result} ${tens[dig]} ${digits[number]}`;      
      } 
			else result = `${result} ${digits[number]}`; 

  return result.trim();
} 
