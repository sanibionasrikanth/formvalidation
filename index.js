const uname=document.querySelector('#username');
const uerror=document.querySelector('.usernameerror');
const email=document.querySelector('#email');
const merror=document.querySelector('.mailerror');
const p1=document.querySelector('#password1');
const p1error=document.querySelector('.pass1error');
const p2=document.querySelector('#password2');
const p2error=document.querySelector('.pass2error');
const form=document.querySelector('#form');

	form.addEventListener('submit',(event)=>{
		event.preventDefault();
		const isValid=checkvalid();
        if(isValid)
		{
			resetvalues();
		}
	});
	form.addEventListener('keypress',(event)=>
		{  if(event.key==='Enter')
		{
			checkvalid();
		}
          uname.classList.remove('error','success');
	      uerror.classList.remove('error', 'success');
		  uerror.textContent=" ";

		  merror.classList.remove('error','success');
	      email.classList.remove('error', 'success');
		  merror.textContent=" ";

		  p1error.classList.remove('error','success');
	      p1.classList.remove('error', 'success');
		  p1error.textContent=" ";

		  p2error.classList.remove('error','success');
	      p2.classList.remove('error', 'success');
		  p2error.textContent=" ";
		});
 


function checkvalid()
{   let valid=true;
    if(uname.value=="")
	{
		uerror.textContent="please enter your name";
		uname.classList.add('error');
		uerror.classList.add('error');
		valid=false;

	}
	else if(uname.value.length < 8)
	{
		uerror.textContent="please enter more than 8 character";
		uname.classList.add('error');
		uerror.classList.add('error');
		valid=false;
	}
	else
	{   uerror.textContent='valid';
		uerror.classList.add('success');
		uname.classList.add('success');
		
	}
   const regx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

   if(!regx.test(email.value))
   {
	merror.textContent="please enter valid email";
	merror.classList.add('error');
	email.classList.add('error');
	valid=false;
   }
   else{
	    merror.textContent='valid';
		merror.classList.add('success');
		email.classList.add('success');
   }
   const password= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
;
   
   if(!password.test(p1.value))
   {
	p1error.textContent="please enter valid password";
	p1error.classList.add('error');
	p1.classList.add('error');
	valid=false;
   }
   else{
    p1error.textContent="valid";
	p1error.classList.add('success');
	p1.classList.add('success');
	
   }
    
   if(p2.value==="")
	 {  
		p2.classList.add('error');
		p2error.classList.add('error');
	    p2error.textContent="please enter password again";
		valid=false;
	 }

  else if(p1.value !== p2.value)
   {
	p2.classList.add('error');
	p2error.textContent="not matching";
	valid=false;
   }
  else if(!password.test(p2.value))
   {
	p2error.textContent="please enter valid password";
	p2error.classList.add('error');
	p2.classList.add('error');
	valid=false;
   }
   
   else{
     p2.classList.add('success');
	 p2error.value="valid";
   }
   
  

   return valid;
   
}

function resetvalues()
{   
	
	uerror.textContent="";
	uname.value="";
	uname.classList.remove('error','success');
	uerror.classList.remove('error','success');
	
	
	merror.textContent="";
	email.value="";
	email.classList.remove('error','success');
	merror.classList.remove('error','success');
	
	p1error.textContent="";
	p1.value="";
	p1.classList.remove('error','success');
	p1error.classList.remove('error','success');
	
	p2error.textContent="";
	p2.value="";
	p2.classList.remove('error','success');
	p2error.classList.remove('error','success');
	

}





/*


 /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
	// console.log("form submitted");
	// console.log("parent", uname.parentElement);
	// console.log("next sib", uname.nextElementSibling);
	// console.log("prev sib", uname.previousElementSibling);
	// console.log("children", form.children);
*/
