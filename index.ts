 

 export class Ajax<T>{ 

	public get(url:string):Promise<T>
	{
		return new Promise<T>(function(resolve, reject) {
    
	    var xhr = new XMLHttpRequest();
	    xhr.open('GET', url);

	    xhr.onload = function() { 
	      if (xhr.status == 200) { 
	        resolve(JSON.parse(xhr.response) as T);
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
 
