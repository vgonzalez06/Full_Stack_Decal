/* ==========================================================================
   main.js: interactive features, shared by every page
   1. Theme toggle (light/dark, remembered in localStorage)
   2. Contact form validation (index.html only)
   The <script> tag uses "defer", so this runs after the HTML has loaded.
   ========================================================================== */

const THEME_STORAGE_KEY = "theme";

// Simple "something@something.something" check, with no spaces allowed
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


/* --------------------------------------------------------------------------
   1. Theme toggle
   -------------------------------------------------------------------------- */

/**
 * Sets up the light/dark toggle button in the nav.
 * The theme is stored as data-theme="light" or "dark" on <html>,
 * and style.css swaps its color variables based on that attribute.
 */
function initThemeToggle() {
  // Start with the saved choice; if there isn't one, follow the device setting
  const savedTheme = loadSavedTheme();
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(savedTheme || (prefersDark ? "dark" : "light"));

  const button = document.querySelector(".theme-toggle");
  if (!button) return;

  button.addEventListener("click", function () {
    const currentTheme = document.documentElement.dataset.theme;
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(newTheme);
    saveTheme(newTheme);
  });
}

/** Puts the theme on <html> and updates the button text to show the other option. */
function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;

  const button = document.querySelector(".theme-toggle");
  if (!button) return;

  if (theme === "dark") {
    button.textContent = "☀ Light";
    button.setAttribute("aria-label", "Switch to light theme");
  } else {
    button.textContent = "☾ Dark";
    button.setAttribute("aria-label", "Switch to dark theme");
  }
}

/**
 * localStorage can throw an error (for example, in some private browsing
 * modes or when a browser blocks storage for local files), so both helpers
 * use try/catch. If storage fails, the toggle still works; it just won't
 * remember the choice on the next visit.
 */
function loadSavedTheme() {
  try {
    return localStorage.getItem(THEME_STORAGE_KEY);
  } catch (error) {
    return null;
  }
}

function saveTheme(theme) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch (error) {
    // Storage is blocked; nothing else to do
  }
}


/* --------------------------------------------------------------------------
   2. Contact form
   -------------------------------------------------------------------------- */

/**
 * Validates the contact form on submit and shows inline errors.
 * NOTE: this site has no backend, so messages aren't actually sent anywhere.
 * On success we only show a thank-you message and clear the form.
 */
function initContactForm() {
  const form = document.querySelector("#contact-form");
  if (!form) return; // the form only exists on index.html

  const fields = [form.elements.name, form.elements.email, form.elements.message];
  const status = document.querySelector("#form-status");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop the page from reloading

    status.textContent = "";
    let firstInvalidField = null;

    // Check every field and show (or clear) its error message
    fields.forEach(function (field) {
      const message = getFieldError(field);
      showFieldError(field, message);
      if (message && !firstInvalidField) {
        firstInvalidField = field;
      }
    });

    // If anything is wrong, move the cursor to the first problem and stop
    if (firstInvalidField) {
      firstInvalidField.focus();
      return;
    }

    const name = form.elements.name.value.trim();
    status.textContent = "Thanks, " + name + "! Your message has been received.";
    form.reset();
  });

  // Once a field has an error, re-check it as the user types so the error clears
  fields.forEach(function (field) {
    field.addEventListener("input", function () {
      if (field.getAttribute("aria-invalid") === "true") {
        showFieldError(field, getFieldError(field));
      }
    });
  });
}

/** Returns an error message for a field, or "" if the field is valid. */
function getFieldError(field) {
  const value = field.value.trim();
  const label = getFieldLabel(field);

  if (value === "") {
    return "Please enter your " + label + ".";
  }
  if (field.type === "email" && !EMAIL_PATTERN.test(value)) {
    return "Please enter a valid email address, like name@example.com.";
  }
  return "";
}

/** Gets a field's label text in lowercase, e.g. "name" or "message". */
function getFieldLabel(field) {
  return field.labels[0].textContent.trim().toLowerCase();
}

/** Writes the message into the field's error element and marks the field valid or invalid. */
function showFieldError(field, message) {
  const errorElement = document.getElementById(field.id + "-error");
  errorElement.textContent = message;
  field.setAttribute("aria-invalid", message ? "true" : "false");
}


/* --------------------------------------------------------------------------
   Start everything
   -------------------------------------------------------------------------- */

initThemeToggle();
initContactForm();
