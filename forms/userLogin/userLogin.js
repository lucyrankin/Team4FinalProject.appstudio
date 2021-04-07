hmbNavUserLogin.onclick = function(s) {
  if (typeof(s) == "object") {
    return
  } else {
    switch (s) {
      case "Welcome":
        ChangeForm(appWelcome)
        break
      case "Select":
        ChangeForm(customerSelect)
        break
      case "Insert":
        ChangeForm(customerInsert)
        break
      case "Create":
        ChangeForm(createAccount)
        break
      case "Login":
        ChangeForm(userLogin)
        break
    }
  }
}


let userFound = false
let passFound = false


userLogin.onshow = function() {
  lblLoginError.value = ''
}

btnUserLoginClear.onclick = function() {
  lblLoginError.value = ''
  inptUserName.value = ''
  inptPassword.value = ''
}

btnUserLoginSubmit.onclick = function() {
    let inputUsername = inptUserName.value
    let inputPassword = inptPassword.value
    let query = "SELECT * FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + database + "&query=" + query)

    if (req.status == 200) {
      results = JSON.parse(req.responseText)
      if (results.length == 0)
        lblLoginError.value = 'There are no customers in the database.'
      else {
        for (i = 0; i < results.length; i++)
          if (inputUsername == results[i]) {
            userFound = true
            console.log('partially')
            break
            for (i = 0; i < results.length; i++)
              if (inputPassword == results[i]) {
                passFound = true
                console.log('correct')
                break
              }
          }

      }
    }
}
    /*
    btnSearch.onclick=function(){        
        query = "SELECT * FROM customer"
        req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + database + "&query=" + query)

        if (req.status == 200) { //transit trip worked. 
            results = JSON.parse(req.responseText)
            if (results.length == 0)    
               lblCustomers.textContent = "There are no customers in the database."
            else {        
               let message = ""
               for (i = 0; i < results.length; i++)
                   message = message + results[i][1] + "\n"
               txtCustomerResults.value = message
            } // end else

        } else   // the transit didn't work - bad wifi? server turned off?
            lblCustomers.textContent = "Error code: " + req.status
    }
    */

    /*
    btnAddCustomer.onclick = function() {
      let name = inptNewName.value
      let address = inptNewAddress.value
      let city = inptNewCity.value
      let state = inptNewState.value
      let zipcode = inptNewZip.value
      let query = "INSERT INTO customers (`name`, `street`, `city`, `state`, `zipcode`) VALUES ('" + name + "', '" + address + "', '" + city + "', '" + state + "', '" + zipcode + "')"
      req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
      if (req.status == 200) {
        if (req.responseText == 500)
          lblConfirmAdd.textContent = "You have successfully added the a new customer."
        else
          lblConfirmAdd.textContent = "There was a problem with adding the customer to the database."
      } else
        lblConfirmAdd.textContent = "Error: " + req.status
    }
    */
