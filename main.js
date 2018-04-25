  $(document).ready(function(){
       $('.modal').modal();
  });



function validate() {


}

function clearsimple() {
    document.getElementById("fnameSIMPLE").value = ""
    document.getElementById("lnameSIMPLE").value = ""
    document.getElementById("rateSIMPLE").value = ""
    document.getElementById("SIMPLErt").value = ""
    document.getElementById("amtSIMPLE").value = ""
}



function clearcomp() {
    document.getElementById("COMPrt").value = ""
    document.getElementById("rateCOMP").value = ""
    document.getElementById("amtCOMP").value = ""
    document.getElementById("lnameCOMP").value = ""
    document.getElementById("fnameCOMP").value = ""
    document.getElementById("xannual").value = ""
}

function compoundCalc() {
    var fnamecompCalc = document.getElementById("fnameCOMP").value;
    var lnamecompCalc = document.getElementById("lnameCOMP").value;
    var orgAMTSC = document.getElementById("amtCOMP").value;
    var intRateC = document.getElementById("rateCOMP").value;
    var timeINTC = document.getElementById("COMPrt").value;
    var xyears = document.getElementById("xannual").value;
    var compoundCalc1;
    var n;
    var z;

    if (fnamecompCalc != "" && lnamecompCalc != "" && orgAMTSC != "" && intRateC != "" && timeINTC != "" && xyears != "") {
        intRateC = intRateC/100;
        compoundCalc1 = intRateC / xyears;
        compoundCalc1++;
        n = xyears * timeINTC;
        compoundCalc1 = compoundCalc1 ** n;
        compoundCalc1 = compoundCalc1 * orgAMTSC;
        compoundCalc1 =  Math.round(compoundCalc1 * 100) / 100;
        z = compoundCalc1 - orgAMTSC;
        z = Math.round(z * 100) / 100;

        if (isNaN(compoundCalc1)) {
            M.toast({
                html: "Please fill out fields properly."
            })
        } else {
            document.getElementById("compmodalTxt").innerHTML = "Hi " + fnamecompCalc + " " + lnamecompCalc + ", the total after interest is: $" + compoundCalc1 + "." + " The interest only is: $" + z + "."
            clearcomp();
            $('.modal').modal('open');
        }

    }
}






function simpleCalc() {


    var fnamesimpleCalc = document.getElementById("fnameSIMPLE").value;
    var lnamesimpleCalc = document.getElementById("lnameSIMPLE").value;
    var orgAMTS = document.getElementById("amtSIMPLE").value;
    var intRate = document.getElementById("rateSIMPLE").value;
    var timeInterval = document.getElementById("SIMPLErt").value;
    var x = document.querySelector('input[name="1"]:checked').value;
    var simpintonly;

    console.log(x);
    var simpCalc;
    if (fnamesimpleCalc != "" && lnamesimpleCalc != "" && orgAMTS != "" && intRate != "" && timeInterval != "" && x != null) {
        if (x == "year") {

            intRate = intRate / 100;
            simpCalc = intRate * timeInterval;
            simpCalc++;
            simpCalc = simpCalc * orgAMTS;
            simpCalc = Math.round(simpCalc * 100) / 100;
            simpintonly = simpCalc - orgAMTS;
            simpintonly = Math.round(simpintonly * 100) / 100;
            if (isNaN(simpCalc)) {
                M.toast({
                    html: "Please fill out fields properly."
                })
            } else {
                document.getElementById("modalTxt").innerHTML = "Hi " + fnamesimpleCalc + " " + lnamesimpleCalc + ", the total after interest is: $" + simpCalc + "." + " The interest only is: $" + simpintonly + "."
                clearsimple();
                $('.modal').modal('open');

            }

        } else {

            timeInterval = timeInterval / 12;
            intRate = intRate / 100;
            simpCalc = intRate * timeInterval;
            simpCalc++;
            simpCalc = simpCalc * orgAMTS;
            simpCalc = Math.round(simpCalc * 100) / 100;
            simpintonly = simpCalc - orgAMTS;
            simpintonly = Math.round(simpintonly * 100) / 100;

            if (isNaN(simpCalc)) {
                M.toast({
                    html: "Please fill out fields properly."
                })
            } else {
                  document.getElementById("modalTxt").innerHTML = "Hi " + fnamesimpleCalc + " " + lnamesimpleCalc + ", the total after interest is: $" + simpCalc + "." + " The interest only is: $" + simpintonly + "."
                  clearsimple();
                  $('.modal').modal('open');

            }
        }


    } else {
        M.toast({
            html: "Please fill out all the fields."
        })
    }

}
