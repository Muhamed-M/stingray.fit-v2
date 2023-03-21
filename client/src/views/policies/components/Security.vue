<script setup></script>

<template>
    <div class="docx-wrapper bg-cyan-600">
        <section class="docx sm:w-8/12 p-5 md:p-16" style="min-height: 841.9pt">
            <article>
                <p class="docx_heading1" style="margin-top: 12pt; margin-bottom: 6pt">
                    <span style="font-family: Arial; min-height: 14pt; font-size: 14pt"
                        >SECURITY CAPABILITIES AND POLICY FOR TRANSMISSION OF CREDIT CARD
                        DETAILS</span
                    >
                </p>
                <p class="docx_textbody">
                    <span style="font-family: Arial; min-height: 12pt; font-size: 12pt"></span>
                </p>
                <p class="docx_textbody" style="text-align: justify">
                    <span
                        style="
                            font-family: Arial;
                            font-weight: bold;
                            min-height: 12pt;
                            font-size: 12pt;
                        "
                        >WHAT INFORMATION DO WE COLLECT AND HOW DO WE USE IT?</span
                    >
                </p>
                <p class="docx_textbody" style="text-align: justify">
                    <span style="font-family: Arial; min-height: 12pt; font-size: 12pt"
                        >When you place an order through this website, we need to know your name,
                        e-mail, phone number, address and credit card details if paying by credit
                        card. This allows us to process and fulfill your order successfully. It also
                        helps us in maintaining your account.</span
                    >
                </p>
                <p class="docx_textbody" style="text-align: justify">
                    <span
                        style="
                            font-family: Arial;
                            font-weight: bold;
                            min-height: 12pt;
                            font-size: 12pt;
                        "
                        >HOW DO WE PROTECT CUSTOMER INFORMATION?</span
                    >
                </p>
                <p class="docx_textbody" style="text-align: justify">
                    <span style="font-family: Arial; min-height: 12pt; font-size: 12pt"
                        >When you place orders, we use a secure server. The secure server software
                        (SSL) encrypts all information you input before it is sent to us.
                        Furthermore, all of the sensitive customer data we collect is protected by
                        several layers of encryption and several layers of security to prevent
                        unauthorised access.</span
                    >
                </p>
                <p class="docx_textbody" style="text-align: justify">
                    <span
                        style="
                            font-family: Arial;
                            font-weight: bold;
                            min-height: 12pt;
                            font-size: 12pt;
                        "
                        >PAYMENT GATEWAY INFO</span
                    >
                </p>
                <p
                    class="docx_textbody"
                    style="margin-top: 0pt; margin-bottom: 7pt; text-align: justify"
                >
                    <span style="font-family: Arial; min-height: 12pt; font-size: 12pt"
                        >Our payment options are safe and secure. None of your payment details are
                        stored, this ensures you will be happy with the security of your
                        transaction.</span
                    >
                </p>
            </article>
        </section>
    </div>
</template>

<!--docxjs library predefined styles-->
<style>
.docx-wrapper {
    padding: 30px;
    padding-bottom: 0px;
    display: flex;
    flex-flow: column;
    align-items: center;
}
.docx-wrapper > section.docx {
    background: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    margin-bottom: 30px;
}
.docx {
    color: black;
}
section.docx {
    box-sizing: border-box;
    display: flex;
    flex-flow: column nowrap;
    position: relative;
    overflow: hidden;
}
section.docx > article {
    margin-bottom: auto;
}
.docx table {
    border-collapse: collapse;
}
.docx table td,
.docx table th {
    vertical-align: top;
}
.docx p {
    margin: 0pt;
    min-height: 1em;
}
.docx span {
    white-space: pre-wrap;
    overflow-wrap: break-word;
}
.docx a {
    color: inherit;
    text-decoration: inherit;
}
</style>
<!--docxjs document styles-->
<style>
.docx span {
    font-family: Liberation Serif;
    min-height: 12pt;
    font-size: 12pt;
}
p.docx_normal {
    margin-top: 0pt;
    margin-bottom: 0pt;
    text-align: left;
}
p.docx_normal span {
    font-family: Liberation Serif;
    color: black;
    min-height: 12pt;
    font-size: 12pt;
}
p.docx_heading1 {
    margin-top: 12pt;
    margin-bottom: 6pt;
}
p.docx_heading1 span {
    font-family: Liberation Serif;
    font-weight: bold;
    min-height: 24pt;
    font-size: 24pt;
}
p.docx_heading2 {
    margin-top: 10pt;
    margin-bottom: 6pt;
}
p.docx_heading2 span {
    font-family: Liberation Serif;
    font-weight: bold;
    min-height: 18pt;
    font-size: 18pt;
}
p.docx_heading4 {
    margin-top: 6pt;
    margin-bottom: 6pt;
}
p.docx_heading4 span {
    font-family: Liberation Serif;
    font-weight: bold;
    min-height: 12pt;
    font-size: 12pt;
}
span.docx_emphasis {
    font-style: italic;
}
span.docx_strongemphasis {
    font-weight: bold;
}
span.docx_internetlink {
    color: #000080;
    text-decoration: underline;
}
p.docx_heading {
    margin-top: 12pt;
    margin-bottom: 6pt;
    text-align: left;
}
p.docx_heading span {
    font-family: Liberation Sans;
    min-height: 14pt;
    font-size: 14pt;
    color: black;
}
p.docx_textbody {
    margin-top: 0pt;
    margin-bottom: 7pt;
    line-height: 1.2;
    text-align: left;
}
p.docx_textbody span {
    font-family: Liberation Serif;
    color: black;
    min-height: 12pt;
    font-size: 12pt;
}
p.docx_list {
    margin-top: 0pt;
    margin-bottom: 7pt;
    line-height: 1.2;
    text-align: left;
}
p.docx_list span {
    font-family: Liberation Serif;
    color: black;
    min-height: 12pt;
    font-size: 12pt;
}
p.docx_caption {
    margin-top: 6pt;
    margin-bottom: 6pt;
    text-align: left;
}
p.docx_caption span {
    font-style: italic;
    min-height: 12pt;
    font-size: 12pt;
    font-family: Liberation Serif;
    color: black;
}
p.docx_index {
    margin-top: 0pt;
    margin-bottom: 0pt;
    text-align: left;
}
p.docx_index span {
    font-family: Liberation Serif;
    color: black;
    min-height: 12pt;
    font-size: 12pt;
}
</style>
