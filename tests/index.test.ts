 
 
import {expect,assert} from './modules-test'; 
import {Ajax} from '../src/index';




interface Teste
{
    args:any;
    origin:string;
    url:string;
}


let sum=(a:number,b:number)=>a+b;


describe('testes genericos', function() {
  it('sum', function() {
    let result = sum(5, 2);
    assert.equal(7,result);
  }); 
});

const urlTest : string = 'https://httpbin.org/get';
const ajax:Ajax<Teste> = new Ajax<Teste>(); 

describe('Ajax', function() {
	 
    

  it('get common use', function(done) { 

	  	this.timeout(10000);
		ajax.get(urlTest).then(function(response:Teste) {
			 
			 assert.equal("https://httpbin.org/get",response.url);
			 done();
		}, function(error) {
			 assert.fail(JSON.stringify(error));
			done();
		}); 
		

		
	});

});
 
/*
 const ajax:Ajax<Teste> = new Ajax<Teste>();
        ajax.get(urlTest).then(function(response:Teste) {
          console.log('Vanilla Javascript REST success!' );
          console.log(response);
        }, function(error) {
          console.error('Vanilla Javascript REST failed!', error);

        });
        */

