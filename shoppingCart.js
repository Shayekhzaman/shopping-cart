
      // i phone minus btn
      const iPhoneMinusBtn=document.getElementById("iPhoneMinusBtn");
      iPhoneMinusBtn.addEventListener("click",function(){
         plusBtn("iPhoneQuantity",-1)
         totalPrice("currentPhnPrice",-1219);
      })
       // iPhone plus btn
       const iPhonePlusBtn=document.getElementById("iPhonePlusBtn");
      iPhonePlusBtn.addEventListener("click",function(){
        plusBtn("iPhoneQuantity",1);
        totalPrice("currentPhnPrice",1219);
      })

      // case minus btn
      const caseMinusBtn=document.getElementById("caseMinusBtn");
      caseMinusBtn.addEventListener("click",function(){
         plusBtn("caseQuantity",-1);
         totalPrice("currentCasePrice",-59);
      })
       //case plus btn
       const casePlusBtn=document.getElementById("casePlusBtn");
      casePlusBtn.addEventListener("click",function(){
         plusBtn("caseQuantity",1);
          totalPrice("currentCasePrice",59);
        
      })
    //  quantity function
      function plusBtn(id,num){
         const itemQuantity=document.getElementById(id).value;
         const itemQuantityNumber=parseFloat(itemQuantity);
            const total=itemQuantityNumber+num;
            document.getElementById(id).value=total;      
      }
    //   total price function
      function totalPrice(id,num){
         const currentItemPrice=document.getElementById(id).innerText;
        const currentItemPriceNumber=parseFloat(currentItemPrice);
        const totalPrice=currentItemPriceNumber+num;
       document.getElementById(id).innerText=totalPrice;
       
      }


      // subtotal work
      const checkoutBtn=document.getElementById("checkoutBtn");
      checkoutBtn.addEventListener("click",function(){
      const sum1=subtotal("iPhoneQuantity",1219);
      const sum2= subtotal("caseQuantity",59);
      const sum3=sum1+sum2;
      const tax=(sum3/100)*5;
        document.getElementById("subtotal").innerText=sum1+sum2;
        document.getElementById("tax").innerText=tax.toFixed(2  ``);
        document.getElementById("total").innerText=sum1+sum2+tax;
      })
      function subtotal(id,num){
        const Quantity=document.getElementById(id).value;
        const QuantityNumber=parseFloat(Quantity);
        const sum=QuantityNumber*num;
        return sum;
       
      }
     


      // cancel button work
      const cancelPhnBtn=document.getElementById("cancelPhnBtn");
      cancelPhnBtn.addEventListener("click",function(){
      removeItem("currentPhnPrice",0);
      removeItemQuantity("iPhoneQuantity");
       
      })
      const cancelCaseBtn=document.getElementById("cancelCaseBtn");
      cancelCaseBtn.addEventListener("click",function(){
         removeItem("currentCasePrice",0);
         removeItemQuantity("caseQuantity");
      })

      function removeItem(id,num){
         const phnPrice= document.getElementById(id).innerText;
       document.getElementById(id).innerText=num;
      }
      function removeItemQuantity(id){
         const itemQuantity=document.getElementById(id).value;
       document.getElementById(id).value=0;
      }