export const sendContactForm = async (data) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      return await response.json();
    } catch (error) {
      console.error("Error sending contact form: ", error);
      return { success: false, message: "Error sending contact form" };
    }
  };
  