function callback()
{console.log(`execute call back`)


}
function A(callback,time)
{
    setTimeout(callback,time)
    }

    A(callback,2000);

    for (var i = 1; i <= 5; i++) {
        setTimeout(function() {
          console.log(i);
        }, 1000);
      }
      