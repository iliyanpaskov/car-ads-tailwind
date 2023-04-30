const url = `${process.env.REACT_APP_EMAILS_URL}`;
const headers = {
    "X-Parse-Application-Id": `${process.env.REACT_APP_APPLICATION_ID}`,
    "X-Parse-REST-API-Key": `${process.env.REACT_APP_API_KEY}`,
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
        console.log(error);
    }
}