mproved your solution?Generate a new report to resolve errors and warnings.
warning
ARIA role should be appropriate for the element

<section id="newsletter__body" class="newsletter__body" role="region">

Learn more
error
Form elements should have a visible label

<input type="email" placeholder="email@company.com" name="newsletter__email" id="newsletterEmail" aria-required="true" aria-describedby="newsletter__error" autocomplete="email">

Learn more
warning
All page content should be contained by landmarks

<div class="attribution">
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>. Coded by <a href="#">Barrie Freyre</a>.
    </div>

Learn more 



HTML report

Improved your solution?Generate a new report to resolve errors and warnings.
error
A "script" element with a "defer" attribute must not have a "type" attribute with the value "module".

yle>   <script defer="" type="module" src="./main.js"></scri

info
The "region" role is unnecessary for element "section".

>  <section id="newsletter__body" class="newsletter__body" role="region">

info
Consider using the "h1" element as a top-level heading only (all "h1" elements are treated as top-level headings by many screen readers and other tools).

<h1 id="newsletter-title">Stay u

info
Article lacks heading. Consider using "h2"-"h6" elements to add identifying headings to all articles.

t">  <article class="newsletter__container" aria-labelledby="newsletter-title">

error
The value of the "for" attribute of the "label" element must be the ID of a non-hidden form control.

<label for="newsletter__email">Email