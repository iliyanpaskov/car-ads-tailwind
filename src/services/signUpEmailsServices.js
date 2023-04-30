const headers = {
    "X-Parse-Application-Id": `${process.env.REACT_APP_APPLICATION_ID}`,
    "X-Parse-REST-API-Key": `${process.env.REACT_APP_API_KEY}`,
    "Content-Type": "application/json",
}

export async function getEmails() {
    try {
        const res = await fetch(`${process.env.REACT_APP_EMAILS_URL}`, {
            method: 'GET',
            headers,
        });
        const data = await res.json();
        if (!data.error) {
            return Object.values(data);
        } else {
            throw data.error;
        }
    } catch (error) {
        //TODO errors
    }
}

export async function sendEmail(firstName, lastName, email) {

    try {
        const res = await fetch(`${process.env.REACT_APP_EMAILS_URL}`, {
            method: 'POST',
            headers,
            body: JSON.stringify({
                firstName,
                lastName,
                email,
            })
        });
        const result = res.json();
        if (result.error) {
            throw result.error;
        }
        
    } catch (error) {
        //TODO error
    }
}