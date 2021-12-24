/**
 * Set the registration data of the gender selection box on the user information edit form.
 */
function setDefaultSelect() {
  const targetOptions = document.getElementById('sex_select').children;
  const userSex = document.getElementById('sex_select').children[0].value;
  for(i=1;i<targetOptions.length;i++){
    if(targetOptions[i].value === userSex) {
      targetOptions[i].selected = true;
    }
  }
}

window.onload = () => {
  const targetForm = document.getElementById('sex_select');
  if(targetForm) setDefaultSelect();
};
