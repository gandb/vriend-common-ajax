
 
import {XMLHttpRequest} from './modules';  
 
 export class Ajax<T>{ 

	public get(url:string):Promise<T>
	{
		return new Promise<T>(function(resolve, reject) {
    
	    var xhr = new XMLHttpRequest();
	    xhr.open('GET', url);

	    xhr.onload = function() { 
	      if (xhr.status == 200) { 

	      	let normalResponse:string = xhr.response;
	      	let onlyTestResponse:string = xhr.responseText;

	      	let response:string = (normalResponse)?normalResponse:onlyTestResponse;

			if(response)
			{
	        	resolve(JSON.parse(response) as T);
	        }
	        else
	        {
	        	reject(Error("XMLHttpRequest Error"));
	        }
	      } else { 
	        reject(Error(xhr.statusText));
	      }
	    }; 
	    xhr.onerror = function() {
	      reject(Error("Network Error"));
	    }; 
	    xhr.send();
	  });
	} 
}
 
