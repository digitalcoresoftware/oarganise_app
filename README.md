<img src="docs/images/oarganise-logo.png" alt="oarganise logo" style="width: 250px; margin-block: 25px 0;">

## Program Structure & App Breakdown
This `README.md` will outline the website and web app features so that everything can be tracked and to make sure 
everything is consistent. It will outline the websites features and content along with some design thoughts and tips 
that are picked up. This can be used as a guide to ensure design used is optimised for UX. The app's purpose is to aid
rowing clubs that sort their club manually by excelling these club into the future by automating the operating of their 
club.

## Legal
### GDPR
This is an area that cannot be overlooked in the modern world of SaaS, the app will be used by a large user base - club
data as well as it's member's data will be held within the app and so it is important to have the GDPR side of the app
covered. To do this, I am going to use [termly.io](https://termly.io/) to generate these documents. They will then be
available to the client within the `/legal` side of the website & app.s

## General App Design
It is important that the website and app follow a similar design, i.e. the same colour palette etc... In order to do
this I will create three different palettes; a main palette (there will be two versions of this one; normal and low
contrast), a light palette and a dark palette.

### Palettes
To create the main palette - i.e. the coloured one, I need to define the primary colour of the app. As **oarganise** is
an app aimed at helping rowing club, I have chosen a blue for this - specially: `#345ea8`. To further this colour 
palette I will use [colorkit.io's Shades & Tints](https://colorkit.io/shades-tints) - this will provide me with the best
colours that fit with my main colour. I have picked three of these to become the main palette:

```css
:root {
    /* Main Colours */
    --main-pal-1: #345EA8;
    --main-pal-2: #5679B7;
    --main-pal-3: #7894C6;

    /* Backup Colours */
    --main-pal-4: #244376;
}
```

With main palette decided, I need to address the other two palettes; the light and dark. All design pages say that it 
is better to design the light theme first, so I'll define this palette first. Each palette will have a version of the
following; primary colour, secondary colour & tertiary colour (will be used to establish depth within the app etc...), a
font colour and sub-font colour.

```css
:root {
    /* Dark Palette */
    --primary-col:  #18191b;
    --second-col:   #212224;
    --tertiary-col: #3e3f41;
    --font-col:     #d6d7d9;
    --sub-font-col: #797b7c;

    /* Light Palette */
    --primary-col:  #f9faff;
    --second-col:   #ffffff;
    --tertiary-col: #f4f6fc;
    --font-col:     #0a0a0a;
    --sub-font-col: #c6c6c6;
}
```

## Website
The website will be the entry point for **oargainse** with the URL being: www.oarganise.com. Its purpose is to give 
potential clients all the info needed about the app in order for them to sign up. The following outlines the structure 
of the website:

| Section | Page     | URL         |
|---------|----------|-------------|
| Main    | Landing  | `/`         |

### The Landing Page
The landing page is key for any SaaS application as it is responsible 

## Web App
