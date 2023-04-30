import { useEffect, useState } from "react";
import { getEmails } from "../services/signUpEmailsServices";

const GetNotifications = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [allEmails, setAllEmails] = useState([]);

    const [isNotValidFName, setIsNotValidFName] = useState(true);
    const [isNotValidLName, setIsNotValidLName] = useState(true);
    const [isNotValidEmail, setIsNotValidEmail] = useState(true);
    const [isSignUpEmail, setIsSignUpEmail] = useState(true);

    useEffect(() => {
        const fetchEmails = async () => {
            const data = await getEmails();
            setAllEmails(data[0]);
        }
        fetchEmails();
    }, [])

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const validFirstNameHandler = () => {
        if (firstName.length < 1 || firstName.length > 40) {
            setIsNotValidFName(false);
        } else {
            setIsNotValidFName(true)
        }
    }

    const validLastNameHandler = () => {
        if (lastName.length < 1 || lastName.length > 40) {
            setIsNotValidLName(false);
        } else {
            setIsNotValidLName(true)
        }
    }

    const validEmailHandler = () => {
        if (email.length < 1 || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
            setIsNotValidEmail(false);
        } else {
            setIsNotValidEmail(true);
        }
    }

    const usedEmailHandler = () => {
        validEmailHandler();
        const emails = [];
        allEmails.forEach(x => emails.push(x.email))
        if (emails.includes(email)) {
            setIsSignUpEmail(false);
        } else {
            setIsSignUpEmail(true);
        }
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();


    }



    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 capitalize">Sign up for notifications</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={onSubmitHandler}>
                    <div>
                        <label htmlFor="fName" className="block text-sm font-medium leading-6 text-gray-900">First name</label>
                        <div className="mt-2">
                            <input id="fName" name="fName" type="text" value={firstName} onChange={handleFirstName} onBlur={validFirstNameHandler} autoComplete="current-fName" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                        <p className="text-red-600 font-medium text-center" hidden={isNotValidFName} >Needs to be filled!</p>
                    </div>

                    <div>
                        <label htmlFor="lName" className="block text-sm font-medium leading-6 text-gray-900">Last name</label>
                        <div className="mt-2">
                            <input id="lName" name="lName" type="text" value={lastName} onChange={handleLastName} onBlur={validLastNameHandler} autoComplete="current-lName" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                        <p className="text-red-600 font-medium text-center" hidden={isNotValidLName} >Needs to be filled!</p>

                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                        <div className="mt-2">
                            <input id="email" name="email" type="email" value={email} onChange={handleEmail} onBlur={usedEmailHandler} autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                        <p className="text-red-600 font-medium text-center" hidden={isNotValidEmail} >Invalid email!</p>
                        <p className="text-red-600 font-medium text-center" hidden={isSignUpEmail}>This email is already Sign up!</p>
                    </div>

                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md  bg-blue-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default GetNotifications;