 

let book= {  
    isbn:"101",                                                             //new Object() 

    title :   'The Accursed God',        //this.title='The Accursed God' 
    
    author :  'Vivek Dutta Mishra',  //this.author='Vivek Dutta Mishra' 
    
    price :  336,

    rating :4.5
    
    }; 
    let book2= {  
        isbn:"102",                                                             //new Object() 
    
        title :   'Pride and Prejudice',        //this.title='The Accursed God' 
        
        author :  'Jane Austen',  //this.author='Vivek Dutta Mishra' 
        
        price :  336,
    
        rating :4.2
        
        }; 

        let book3= {  
            isbn:"103",                                                             //new Object() 
        
            title :   'Great Expectations',        //this.title='The Accursed God' 
            
            author :  'Charles Dicken',  //this.author='Vivek Dutta Mishra' 
            
            price :  336,
        
            rating :4.0
            
            }; 
   // console.log("book name "+b1.title);

    for(let property in book){ 
        console.log( property,  book[property] );  //displays all property and value 
        } 


        
    
        function BookManager(isbn,title,author,price,rating){
            this.isbn=isbn;
            this.title=title;
            this.author=author;
            this.price=price;
            this.rating=rating;
        }
        const b1=new BookManager("101","The Accursed God","Vivek Dutta Mishra",336,4.5);
       // console.log(b1);
        const b2=new BookManager("102","Pride and Predjudice","Jane Austin",306,4.2);
        const b3=new BookManager("103","Great Expectations","Charles Dicken",200,3);
       // console.log(b2)
       console.log("displaying the list")
        var myList = new Array();
        myList.push(b1);
        myList.push(b2);
        myList.push(b3);
        for (var i = 0; i < myList .length; i ++ ){
            console.log(myList[i]);
         }
         for (var i = 0; i < myList .length; i ++ ){
           if(myList[i].isbn=="103"){
               console.log("isbn should be 103 "+myList[i].title)
           }
         }

        for(var i=0;i<myList.length;i++){
            if(myList[i].price>300){
                console.log("price should be greater than 300 "+myList[i].title);
            }
        }

        for(var i=0;i<myList.length;i++){
            if(myList[i].rating==4.5){
                console.log("Rating should be 4.5 "+myList[i].title);
            }
        }

            for(var i=0;i<myList.length;i++){
                if(myList[i].author=="Charles Dicken"){
                    console.log("Author name is Charles Dicken "+myList[i].title);
                }
        }