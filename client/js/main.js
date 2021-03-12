
wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true        // trigger animations on mobile devices (true is default)
  }
);
wow.init();
getNewFact();


function getNewFact() {
  axios('https://lit-hamlet-47243.herokuapp.com/whalesharkfacts/random')

  .then(function (response) {

    const whale = response.data;
    document.getElementById('fact').innerHTML = whale[0].fact;
    document.getElementById('source').innerHTML = whale[0].source;

  })
  .catch(function (error){ //error handler
    
    console.log("Error: " + error); //prints out the error to the console
});
}



