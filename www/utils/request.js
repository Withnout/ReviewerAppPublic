const serverURL = "https://tame-leggings-fawn.cyclic.app/";

async function postRequest(route = "", body = {}) {
    try {
        const response = await fetch(route, {
            method: "POST",
            headers: {

            },
            body: JSON.stringify(body),
        });
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }
}


