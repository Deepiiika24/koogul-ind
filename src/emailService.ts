import emailjs from '@emailjs/browser';

const sendEmail = async (form: HTMLFormElement) => {
    try {
        const formData = new FormData(form);

        // Ensure user_email is included
        formData.append("reply_to", formData.get("user_email") as string);
        formData.append("user_email", formData.get("user_email") as string);

        const result = await emailjs.sendForm(
            'service_b6vs85n', // Replace with your EmailJS Service ID
            'template_724f4op', // Replace with your EmailJS Template ID
            form,
            'UhQRuAMF-7wCGFRYW' // Replace with your EmailJS Public Key
        );

        console.log('Email sent successfully:', result.text);
        alert('Your enquiry has been sent successfully.');
    } catch (error) {
        console.error('Error sending email:', error);
        alert('Failed to send your enquiry. Please try again.');
    }
};

export default sendEmail;
