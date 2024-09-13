const submitBtn = document.getElementById("submitBtn") as HTMLButtonElement;
const form = document.getElementById("resume-form") as HTMLFormElement;

submitBtn.addEventListener("click", () => {
  // Get all the input fields
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;
  const skills = (document.getElementById("skills") as HTMLInputElement).value;
  const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
  const address = (document.getElementById("address") as HTMLInputElement).value;

  // Check if all fields are filled
  if (name && email && phone && skills && experience && address) {
    alert("Submitted!");
  } else {
    alert("Please fill all the fields before submitting.");
  }
});
