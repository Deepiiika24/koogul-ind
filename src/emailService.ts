import emailjs from '@emailjs/browser';

const sendEmail = async (form: HTMLFormElement) => {
    try {
        const formData = new FormData(form);

        // Ensure user_email is included
        formData.append("reply_to", formData.get("user_email") as string);
        formData.append("user_email", formData.get("user_email") as string);

        const result = await emailjs.sendForm(
            'service_7s5d5i8', // Replace with your EmailJS Service ID
            'template_ptiscag', // Replace with your EmailJS Template ID
            form,
            'MDefw_dKaSKYzSMI4' // Replace with your EmailJS Public Key
        );

        console.log('Email sent successfully:', result.text);
        alert('Your enquiry has been sent successfully.');
    } catch (error) {
        console.error('Error sending email:', error);
        alert('Failed to send your enquiry. Please try again.');
    }
};

export default sendEmail;
