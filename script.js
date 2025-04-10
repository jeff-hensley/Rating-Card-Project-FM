console.log("JS is running");
const ratingBtn1 = document.querySelector(".rating-btn-1");
const ratingBtn2 = document.querySelector(".rating-btn-2");
const ratingBtn3 = document.querySelector(".rating-btn-3");
const ratingBtn4 = document.querySelector(".rating-btn-4");
const ratingBtn5 = document.querySelector(".rating-btn-5");
const submitBtn = document.querySelector(".submit-btn");
const selectTxt = document.querySelector(".select-txt");
const mainContainer = document.querySelector(".main-container");
const thankYouContainer = document.querySelector(".thankyou-container");
const closeBtn = document.querySelector(".close-btn");

let ratingValue = "";

const userRating = () => {
    ratingBtn1.addEventListener("click", () => {
        ratingValue = "1";
        selectTxt.innerHTML = `You selected ${ratingValue} out of 5`;
    });
    ratingBtn2.addEventListener("click", () => {
        ratingValue = "2";
        selectTxt.innerHTML = `You selected ${ratingValue} out of 5`;
    });
    ratingBtn3.addEventListener("click", () => {
        ratingValue = "3";
        selectTxt.innerHTML = `You selected ${ratingValue} out of 5`;
    });
    ratingBtn4.addEventListener("click", () => {
        ratingValue = "4";
        selectTxt.innerHTML = `You selected ${ratingValue} out of 5`;
    });
    ratingBtn5.addEventListener("click", () => {
        ratingValue = "5";
        selectTxt.innerHTML = `You selected ${ratingValue} out of 5`;
    });
}

const submitRating = () => {
    submitBtn.addEventListener("click", () => {
        if (ratingValue === "") {
            alert("Please select a rating before submitting.");
        } else {
            mainContainer.style.display = "none";
            thankYouContainer.style.display = "flex";
        }
    });
}

const closeThankYouContainer = () => {
    closeBtn.addEventListener("click", () => {
    thankYouContainer.style.display = "none";
    mainContainer.style.display = "flex";
    });
}

userRating();
submitRating();
closeThankYouContainer();

