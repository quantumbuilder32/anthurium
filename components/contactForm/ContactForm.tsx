"use client"
import React, { useState, FormEvent } from 'react'
import styles from "./styles.module.css"
import { toast } from 'react-hot-toast'
import { sendEmail } from '@/serverFunctions/SendEmail'
import { userForm, userFormSchema } from '@/components/EmailTemplate'

export default function ContactForm() {

    const initialForm: userForm = {
        name: "",
        email: "",
        company: "",
        message: ""
    }

    const [formObj, formObjSet] = useState({ ...initialForm })
    const [formError, formErrorSet] = useState<{ [key: string]: string | null }>({})

    const checkIfValid = (seenFormObj: userForm, option: string) => {

        if (option === "name") {
            if (userFormSchema.pick({ name: true }).safeParse(seenFormObj).success) {
                if (formError[option] !== null) {
                    formErrorSet(prevObj => {
                        prevObj[option] = null
                        return { ...prevObj }
                    })
                }

            } else {

                if (formError[option] === null) {
                    formErrorSet(prevObj => {
                        prevObj[option] = "Name has to be present"
                        return { ...prevObj }
                    })
                }
            }
        }

        if (option === "email") {
            if (userFormSchema.pick({ email: true }).safeParse(seenFormObj).success) {
                //success

                if (formError[option] !== null) {
                    formErrorSet(prevObj => {
                        prevObj[option] = null
                        return { ...prevObj }
                    })
                }
            } else {

                if (formError[option] === null) {
                    formErrorSet(prevObj => {
                        prevObj[option] = "Email has to be present"
                        return { ...prevObj }
                    })
                }
            }
        }

        if (option === "company") {
            if (userFormSchema.pick({ company: true }).safeParse(seenFormObj).success) {
                //success

                if (formError[option] !== null) {
                    formErrorSet(prevObj => {
                        prevObj[option] = null
                        return { ...prevObj }
                    })
                }
            } else {
                //nah
                if (formError[option] === null) {
                    formErrorSet(prevObj => {
                        prevObj[option] = "Subject has to be present"
                        return { ...prevObj }
                    })
                }
            }
        }

        if (option === "message") {
            if (userFormSchema.pick({ message: true }).safeParse(seenFormObj).success) {
                //success

                if (formError[option] !== null) {
                    formErrorSet(prevObj => {
                        prevObj[option] = null
                        return { ...prevObj }
                    })
                }
            } else {
                //nah

                if (formError[option] === null) {
                    formErrorSet(prevObj => {
                        prevObj[option] = "Message has to be present"
                        return { ...prevObj }
                    })
                }
            }
        }

    }

    const handleSubmit = async () => {
        try {
            if (!userFormSchema.safeParse(formObj).success) return toast.error("Form not valid")
            await sendEmail(formObj)

            toast.success("Sent!")
            formObjSet({ ...initialForm })
        } catch (error) {
            toast.error("Couldn't send")
            console.log(`$seomething else happened`, error);
        }
    }

    return (
        <form action={handleSubmit} className={styles.formDiv} style={{ display: "grid", alignContent: "flex-start" }}>
            <div style={{ textAlign: "center", display: "grid", gap: "1rem", marginBottom: "2rem" }}>
                <h1>Request Free Consultation</h1>

                <p>Get in touch and discover how we can help. We will be in touch with you as soon as possible.</p>
            </div>
            <div className={styles.formColCont} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", gap: "1rem" }}>
                <div>
                    <div>
                        <input id='sentName' type='text' value={formObj.name} onChange={(e) => {
                            formObjSet(prevObj => {
                                prevObj.name = e.target.value

                                return { ...prevObj }
                            })
                        }} name='name' placeholder='Your Name'
                            onBlur={() => {
                                checkIfValid(formObj, "name")
                            }} />

                        <p>{formError["name"]}</p>
                    </div>

                    <div>
                        <input id="sentEmail" type='email' value={formObj.email} onChange={(e) => {
                            formObjSet(prevObj => {
                                prevObj.email = e.target.value
                                checkIfValid(prevObj, "email")

                                return { ...prevObj }
                            })
                        }} name='email' placeholder='Your Email'
                            onBlur={() => {
                                checkIfValid(formObj, "email")
                            }} />
                        <p>{formError["email"]}</p>
                    </div>

                    <div>
                        <input id="sentCompany" type='text' value={formObj.company ?? ""} onChange={(e) => {
                            formObjSet(prevObj => {
                                prevObj.company = e.target.value
                                checkIfValid(prevObj, "company")

                                return { ...prevObj }
                            })
                        }} name='company' placeholder='Your Company Name'
                            onBlur={() => {
                                checkIfValid(formObj, "company")
                            }} />

                        <p> {formError["company"]}</p>
                    </div>
                </div>

                <div>
                    <div>
                        <textarea id="sentMessage" name='message' placeholder='Your Message' value={formObj.message} onChange={(e) => {
                            formObjSet(prevObj => {
                                prevObj.message = e.target.value
                                checkIfValid(prevObj, "message")

                                return { ...prevObj }
                            })
                        }} onBlur={() => {
                            checkIfValid(formObj, "message")
                        }} />

                        <p>{formError["message"]}</p>
                    </div>
                </div>
            </div>

            <button disabled={!userFormSchema.safeParse(formObj).success} type='submit' style={{ justifySelf: "flex-end", opacity: !userFormSchema.safeParse(formObj).success ? ".6" : "", backgroundColor: "var(--primaryColor)", padding: '1rem 2rem', borderRadius: ".2rem", marginTop: '1rem' }}>Send Message</button>
        </form>
    )
}
