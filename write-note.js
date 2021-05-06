var crsa=0;
var teco;
var stnu;
var crte;
var creload;
var notesec;
var deli;
var edit;
var editra;


    stnu=localStorage.getItem("write_note_total");

// console.log(stnu);


// start create all note 
creele();

function creele() {
    for (let note = 0; note < stnu; note++) {
        creload=document.createElement("div");
        creload.className="note";
        creload.id=note;
        document.getElementsByClassName("allnote")[0].appendChild(creload);
        document.getElementsByClassName("note")[note].innerHTML=localStorage.getItem("write_note_store_"+(note+1));
        document.getElementsByClassName("note")[note].addEventListener("mouseenter",notecli);
        document.getElementsByClassName("note")[note].addEventListener("mouseleave",noteout);
    }
}
// end create all note 

// stare select each note and all operation
function notecli() {
    notesec=Number(this.id); //identify each note
    
    // start create delit button 
    deli=document.createElement("button");
    deli.className="deli";
    deli.innerHTML="DELET";
    this.appendChild(deli);
    // end create of delit buttom 

    // start to add a click event on delit buttom 
    document.getElementsByClassName("deli")[0].addEventListener("click",deliting);
    function deliting() {
        // console.log("call");

        // start to transer of key value from next key to previous key 
        for (let note = notesec; note < stnu; note++) {
            let colle=localStorage.getItem("write_note_store_"+(note+2))
            localStorage.setItem("write_note_store_"+(note+1),colle)
        }
        // start to transer of key value from next key to previous key 

        localStorage.removeItem("write_note_store_"+stnu);

        // console.log(notesec);
        
        // start to remove all elements 
        for (let note = 0; note <stnu; note++) {          
            document.getElementsByClassName("note")[0].remove();
        }
        // start to remove all elements 


        localStorage.setItem("write_note_total",(stnu-1)); //refress total note number at key

    
        stnu=localStorage.getItem("write_note_total"); //total none number store in stnu variable

        creele(); //again create all notes
    }
    // end to add a click event on delit buttom 

    // start to add a click event on edit button 
    edit=document.createElement("button");
    edit.className="edit";
    edit.innerHTML="EDIT";
    this.appendChild(edit);

    document.getElementsByClassName("edit")[0].addEventListener("click",editting);
    function editting() {

        editra=localStorage.getItem("write_note_store_"+(notesec+1));
        document.getElementsByClassName("writtingpage")[0].style.display="block";
        document.getElementsByClassName("writtingpage")[0].value=editra;
        console.log(editra);

        document.getElementsByClassName("createnote")[0].style.backgroundColor="#4dff4d";
        document.getElementsByClassName("createnote")[0].innerHTML="SAVE YOUR NOTE";

        // start remove all note 
        for (let note = 0; note <stnu; note++) {          
            document.getElementsByClassName("note")[0].remove();
        }
        // end remove all note 

        crsa=2; //to change save operation
    }
    
    // end to add a click event on edit button 
}


// end select of each note and all operation

// start leave each note 
function noteout() {
    this.appendChild(deli).remove();
    this.appendChild(edit).remove();
}
// end leave of each note  

 


// start function of create and save button 

// start create note function 
function createsave() {
    if (crsa==0) {
        document.getElementsByClassName("createnote")[0].style.backgroundColor="#4dff4d";
        document.getElementsByClassName("createnote")[0].innerHTML="SAVE YOUR NOTE";
        document.getElementsByClassName("writtingpage")[0].style.display="block";

        document.getElementsByClassName("writtingpage")[0].value=""; //clear writting page

        crsa=1;

        // start remove all note 
        for (let note = 0; note <stnu; note++) {          
            document.getElementsByClassName("note")[0].remove();
        }
        // end remove all note 

    }
    // end create note function 

    // start save note function 
    else if (crsa==1) {
        document.getElementsByClassName("createnote")[0].style.backgroundColor="aquamarine";
        document.getElementsByClassName("createnote")[0].innerHTML="CREATE NEW NOTE";
        document.getElementsByClassName("writtingpage")[0].style.display="none";
        teco=document.getElementsByClassName("writtingpage")[0].value;

        // start to save at local storage 
        if (stnu==null) {
            stnu=0;
        }
        stnu=Number(stnu);
        stnu+=1;
        localStorage.setItem("write_note_store_"+stnu,teco);
        stnu=localStorage.setItem("write_note_total",stnu);
        // end to save at local storage 

        stnu=localStorage.getItem("write_note_total"); //save total note no at stnu variable
        
        creele(); //again create all note

        crsa=0;   
    }
    else if (crsa==2) {
        document.getElementsByClassName("createnote")[0].style.backgroundColor="aquamarine";
        document.getElementsByClassName("createnote")[0].innerHTML="CREATE NEW NOTE";
        document.getElementsByClassName("writtingpage")[0].style.display="none";
        teco=document.getElementsByClassName("writtingpage")[0].value;

        localStorage.setItem("write_note_store_"+(notesec+1),teco);

        stnu=localStorage.getItem("write_note_total"); //save total note no at stnu variable
        
        creele(); //again create all note

        crsa=0;   
    }
}
// end save note function 

// end function of create and save button 