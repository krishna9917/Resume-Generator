
const addqualification=()=>
{
    let field=document.createElement("input");
    field.setAttribute("type",'text');
    field.classList.add("mt-1");
    field.classList.add("form-control");
    field.style.width="400px";
    field.classList.add("qualificationfield");
    field.setAttribute("placeholder","Education with year and percentage(%)");
    let span=document.getElementById("Qualification-group");
    let qualificationbutton=document.getElementById("divqualificationbutton");
    span.insertBefore(field,qualificationbutton); 
}
const addskill=()=>
{
    let field=document.createElement("input");
    field.setAttribute("type",'text');
    field.classList.add("mt-1");
    field.classList.add("form-control");
    field.classList.add("skillfield");
    field.style.width="400px";
    field.setAttribute("placeholder","eg.language,technical and others skills etc.");
    let span=document.getElementById("Skill-group");
    let addskillbutton=document.getElementById("addskillbutton");
    span.insertBefore(field,addskillbutton); 
}
const addexperience=()=>{
    let field=document.createElement("textarea");
    field.classList.add("mt-1");
    field.classList.add("experiencefield");
    field.classList.add("form-control");
    field.setAttribute("rows",'4');
    field.style.width="400px";
    field.style.marginLeft="10px";
    field.setAttribute("placeholder","Mention Designation, work place with address and working years etc.");
    let span=document.getElementById("textspan");
    span.appendChild(field);
    
}
const addcertificate=()=>{
    let field=document.createElement("input");
    field.setAttribute("type",'text');
    field.classList.add("mt-1");
    field.classList.add("certificatefield");
    field.classList.add("form-control");
    field.style.width="400px";
    field.setAttribute("placeholder","Mention the name of certificates.");
    let span=document.getElementById("certification-group");
    let addcertificationbutton=document.getElementById("addcertificationbutton");
    span.insertBefore(field,addcertificationbutton); 
}
const addinternship=()=>{
  let field=document.createElement("input");
  field.setAttribute("type",'text');
  field.classList.add("mt-1");
  field.classList.add("internshipfield");
  field.classList.add("form-control");
  field.style.width="400px";
  field.setAttribute("placeholder","Mention here Internship name, place and year.");
  let span=document.getElementById("internship-group");
  let addinternshipbutton=document.getElementById("addinternshipbutton");
  span.insertBefore(field,addinternshipbutton); 
}

const addproject=()=>{
    let field=document.createElement("input");
    field.setAttribute("type",'text');
    field.classList.add("mt-1");
    field.classList.add("projectfield");
    field.classList.add("form-control");
    field.style.width="400px";
    field.setAttribute("placeholder","Enter here project name with technology.");
    let span=document.getElementById("Project-group");
    let aaddprojectbutton=document.getElementById("addprojectbutton");
    span.insertBefore(field,addprojectbutton); 
}

//printCV Method
const printCV=()=>{
  document.getElementById("printbutton").style.display="none";
  window.print();
  document.getElementById("printbutton").style.display="inherit";
}

//generate Cv
const generateCV=()=>
{
  //check mandatory field is filled or not
  let NAMEFIELD=document.getElementById("name").value;
  let DOBFIELD=document.getElementById("DOB").value;
  let GMAILFIELD=document.getElementById("gmail").value;
  let CONTACTFIELD=document.getElementById("contact").value;
  let ADDRESSFIELD=document.getElementById("address").value;
  let PROFILEFIELD=document.getElementById("profile").value;
  if(NAMEFIELD==""||DOBFIELD==""||GMAILFIELD==""|| PROFILEFIELD==""||CONTACTFIELD==""||ADDRESSFIELD=="")
  {
    responsiveVoice.speak("Please Fill the Mandatory TextFields");
    alert("Please Fill Mandatory Fields");
  }
  else
  { 
    responsiveVoice.speak("Your CV is Successfully Generated");
    document.getElementById("Container").style.display="none";
    document.getElementById("templet").style.display="inherit";

    //change read by file reader and set in Image field
    let img=document.getElementById("profileimage").files[0];
    let Image=new FileReader();
    Image.readAsDataURL(img);
    Image.onloadend=function(){
      document.getElementById("profileimagetemp").setAttribute("src",Image.result);
    }
    
// changes in Templet
//change name 
  document.getElementById("NAME").innerHTML=NAMEFIELD;
  document.getElementById("Name1").innerHTML=NAMEFIELD;

//change Dob 
  document.getElementById("dobt").innerHTML=DOBFIELD; 
//change gender 
 let gender=document.getElementsByName("gender"); 
 for(let e of gender)
 {
   if(e.checked)
   document.getElementById("gendert").innerHTML=e.value; 
 }
// change contactno 
  document.getElementById("contactt").innerHTML=CONTACTFIELD;
//  change address
   document.getElementById("addresst").innerHTML=ADDRESSFIELD;



  //social handles make dynamically
   //change Gmail id
document.getElementById("gmailt").innerHTML=GMAILFIELD;
//change facebook id
let facebookfield=document.getElementById("facebook").value;
if(facebookfield!="")
{
  document.getElementById("facebooktemp").style.display="inherit";
  document.getElementById("facebookt").innerHTML=facebookfield;
}
else
{
  document.getElementById("facebooktemp").style.display="none";
}
//change instagram id
let instafield=document.getElementById("instagram").value;
if(instafield!="")
{
  document.getElementById("instagramtemp").style.display="inherit";
  document.getElementById("instagramt").innerHTML=instafield;
}
else
{
  document.getElementById("instagramtemp").style.display="none";
}
//change linkdin id
let linkdinfield=document.getElementById("linkdin").value;
if(linkdinfield!="")
{
  document.getElementById("linkdintemp").style.display="inherit";
  document.getElementById("linkdint").innerHTML=linkdinfield;
}
else
{
  document.getElementById("linkdintemp").style.display="none";
}
//profile card change
document.getElementById("profiletemp").innerHTML= PROFILEFIELD;

//qualication card details change
let qualificationfield=document.getElementsByClassName("qualificationfield");
let education="";
for(let element of qualificationfield)
{ 
   if(element.value=="")
  {
  document.getElementById("certificatedetail").style.display="none";
  }
  else
  {
    document.getElementById("certificatedetail").style.display="inherit";
    education=education + `<li>${element.value}</li>`;
  }
}
  document.getElementById("qualificationlist").innerHTML=education;

//change skill card details 
let skillfield=document.getElementsByClassName("skillfield");
let skill="";
for(let element of skillfield)
{
  if(element.value=="")
  {
    document.getElementById("Skillsdetail").style.display="none";
  }
  else
  {
    document.getElementById("Skillsdetail").style.display="inherit";
    skill=skill + `<li>${element.value}</li>`;
  }
}
  document.getElementById("skilllist").innerHTML=skill;


//change work Experience card details
let experiencefield=document.getElementsByClassName("experiencefield");
let experience="";
for(let element of experiencefield)
{
  experience=experience + `<li>${element.value}</li>`;
}
  document.getElementById("experiencelist").innerHTML=experience;

//change certifications card deatils change
 let certificatefield=document.getElementsByClassName("certificatefield");
  let certificate="";
  for(let element of certificatefield)
  { 
    if(element.value=="")
    {
      document.getElementById("certificatedetail").style.display="none";
    }
    else
    {
      document.getElementById("certificatedetail").style.display="inherit";
    certificate=certificate + `<li>${element.value}</li>`;
    }
  }
    document.getElementById("certificatelist").innerHTML=certificate;
  
//change Internship card deatils change
let internshipfield=document.getElementsByClassName("internshipfield");
let internship="";
for(let element of internshipfield)
{ 
  if(element.value=="")
  {
    document.getElementById("internshipdetail").style.display="none";
  }
  else
  {
    document.getElementById("internshipdetail").style.display="inherit";
    internship=internship + `<li>${element.value}</li>`;
  }
}
  document.getElementById("internshiplist").innerHTML=internship;




  //change project card deatils change
let projectfield=document.getElementsByClassName("projectfield");
let project="";
for(let element of projectfield)
{ 
  if(element.value=="")
  {
    document.getElementById("projectdetail").style.display="none";
  }
  else
  {
    document.getElementById("projectdetail").style.display="inherit";
    project=project + `<li>${element.value}</li>`;
  }
}
  document.getElementById("projectlist").innerHTML=project;
  
  }
}
