 
 
import {expect,assert} from './modules-test'; 
import {Ajax} from '../src/index';




interface Teste
{
    args:any;
    origin:string;
    url:string;
}

 

const urlTest : string = 'https://httpbin.org/get';
const ajax:Ajax<Teste> = new Ajax<Teste>(); 

describe('Ajax', function() {

  it('get common use', function(done) {  
		ajax.get(urlTest).then(function(response:Teste) { 
			 assert.equal(urlTest,response.url);
			 done();
		}, function(error) {
			 assert.fail(JSON.stringify(error));
			done();
		}); 		
	});

});
  