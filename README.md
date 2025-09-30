1. How did event.preventDefault() help in handling form submission?
event.preventDefault() stops the form from doing its default submission, like refreshing the page. This way, I can first check if all the inputs are valid using JavaScript, show any error messages, and only save the username or show a success message if everything is correct.
2. What is the difference between using HTML5 validation attributes and JavaScript-based validation? Why might you use both?
JavaScript validation is more flexible—you can add complex rules like password requirements or cross-field checks. HTML5 attributes like required, type="email", and minlength give basic, built-in validation automatically in the browser.
3. Explain how you used localStorage to persist and retrieve the username. What are the limitations of localStorage for storing sensitive data?
I saved the username to localStorage when the form was successfully submitted using localStorage.setItem("username", username.value). On page load, I retrieved it with localStorage.getItem("username") to pre-fill the username field, so the user doesn’t have to type it again.
Limitations: localStorage is plain text and not secure, so it’s not safe for sensitive info like passwords or credit card numbers. It’s also limited in size—about 5MB—and only accessible within the same domain.
4. Describe a challenge you faced in implementing the real-time validation and how you solved it.
The challenge was handling multiple password rules at once. Initially, error messages kept getting overwritten, so the user couldn’t see all the issues clearly. I solved this by checking the rules in a specific order and showing the first failing rule only, which keeps the messages clear and actionable
5. How did you ensure that custom error messages were user-friendly and displayed at the appropriate times?
I used <span> elements below each input to show messages instead of the browser’s default popups. I updated the messages in real-time on the input event, and cleared them immediately when the input became valid. The messages are simple and specific, like “Password must include an uppercase letter,” so users know exactly what to fix.
