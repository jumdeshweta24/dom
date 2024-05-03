function validate_form()
{
    var siteNameInput = document.getElementById("site_name");
    var siteUrlInput = document.getElementById("site_url");
    let req1=document.getElementById("site_n")
    let req2=document.getElementById("site_u")
    let bookmarksSection = document.querySelector(".bookmarks");

    req1.textContent="";
    req2.textContent="";
    if(siteNameInput.value.trim()==="" && siteUrlInput.value.trim()===""){
        req1.textContent="Required*";
        req1.style.color="red"
        req2.textContent="Required*";
        req2.style.color="red"
    }
    else if(siteNameInput.value.trim()===""){
        req1.textContent="Required*";
        req1.style.color="red"
    }
    else if(siteUrlInput.value.trim()===""){
        req2.textContent="Required*";
        req2.style.color="red"
    }
    else{
        bookmarksSection.style.backgroundColor = "rgb(245, 237, 237)";
        bookmarksSection.style.border = "solid 1px gainsboro";
        req1.textContent = "";
        req2.textContent = ""; 
        let para=document.getElementById('para')
        para.textContent=siteNameInput.value;

        let link1=document.getElementById('link1')
        link1.textContent=siteUrlInput.value;
        link1.href=siteUrlInput.value
    }
    
}
    
   