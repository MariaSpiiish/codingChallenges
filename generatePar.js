// const generateParenthesis = function(n) {
    
//         const results = [];
        
//         function _generateResults(left, right, str) {
           
//             if (left > right) return;
            
//             if (left === 0 && right === 0) results.push(str);
            
//             if (left > 0) {
//                 console.log('open', str)
//                 _generateResults(left -1, right, str + '(');
//             }
            
//             if (right > 0) {
//                 console.log('close', str)
//                 _generateResults(left, right - 1, str + ')');
//             }

//         }
        
    
//         _generateResults(n,n,'')
    
    
//         return results
    
// };

const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

const line = [];

rl.on('line', function(input) {
	line.push(input);
});

rl.on('close', function(n) {
    
        const results = [];
        const [num] = line;
       
        function _generateResults(left, right, str) {
           
            if (left > right) return;
            
            if (left === 0 && right === 0) results.push(str);
            
            if (left > 0) {
                
                _generateResults(left -1, right, str + '(');
            }
            
            if (right > 0) {
                
                _generateResults(left, right - 1, str + ')');
            }

        }
        
    
        _generateResults(num,num,'')
    
    
        console.log(results);
        process.exit()
    
});