function sleep(ms) {
    return new Promise(
        resolve => setTimeout(resolve,ms)
    )
}

async function main() {
    while (true) {
        try {
            for (let i = 0; i < 12; i++) {
                for (const c of document.querySelector(".question-column").children[1].children) {
                    c.children[0].click();
                }
            }
        }
        catch {
            console.log("Not wordmatch")
        }
        finally {
            await sleep(10)
        }
        try {
            for (let i = 0; i < document.querySelector(".answer-list").childElementCount; i++) {
	            for (let j = 0; j < document.querySelector(".question-list").childElementCount; j++) {
		            document.querySelector(".question-list").children[j].children[0].click()
	            }
            }
        }
        catch {
            console.log("Not word categorization")
        }
        finally {
            await sleep(10)
        }
	try {
            for (let i = 0; i < document.querySelector(".answer-wrapper").childElementCount; i++) {
		document.querySelector(".answer-wrapper").children[i].children[0].click()
	    }
	}
	catch {
	    console.log("Not word choice (2 words)")
	}
	finally {
	    await sleep(10)
	}
        try {
            for (let i = 0; i < document.getElementsByClassName("mediablock").length; i++) {
                if (document.getElementsByClassName("mediablock")[i].parentElement.parentElement.className == "popover-content") {
                    for (let j = 0; document.getElementsByClassName("form-control").length; j++) {
                        if (document.getElementsByClassName("form-control")[j].value == "") {
                            document.getElementsByClassName("form-control")[j].value = document.getElementsByClassName("mediablock")[i].innerText.split(",")[0].split(" / ")[0];
                            break
                        }
                    }
                }
            }
        }
        catch {
            console.log("All fields are filled in");
            await sleep(10)
        }
    }
}

main()
