function sleep(ms) {
    return new Promise(
        resolve => setTimeout(resolve,ms)
    )
}

async function main() {
    while (true) {
        try {
            for (let i = 0; i < document.getElementsByClassName("mediablock").length; i++) {
                if (document.getElementsByClassName("mediablock")[i].parentElement.parentElement.className == "popover-content") {
                    for (let j = 0; document.getElementsByClassName("form-control").length; j++) {
                        if (document.getElementsByClassName("form-control")[j].value == "") {
                            document.getElementsByClassName("form-control")[j].value = document.getElementsByClassName("mediablock")[i].innerText.split(",")[0];
                            break
                        }
                    }
                }
            }
            for (var x=0; x<3; x++) {
                document.getElementById("multiple-choice-alt-q0a" + String(x)).click()
            } await sleep(10)
        }
        catch {
            console.log("All fields are filled in");
            await sleep(10)
        }
    }
}

main()
