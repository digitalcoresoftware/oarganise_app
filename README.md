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
available to the client within the `/legal` side of the website & app.

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
following; primary colour, secondary colour & tertiary colour (will be used to establish depth within the app etc...), 
a font colour and sub-font colour. 

```css
@media (prefers-color-scheme: light) {
    :root {
        --primary-col: #f9faff;
        --second-col: #ffffff;
        --tertiary-col: #f4f6fc;
        --font-col: #0a0a0a;
        --sub-font-col: #c6c6c6;
    }
}

@media (prefers-color-scheme: dark) {
    :root {
        --primary-col: #18191b;
        --second-col: #212224;
        --tertiary-col: #3e3f41;
        --font-col: #d6d7d9;
        --sub-font-col: #797b7c;
    }
}
```

## Website
The website will be the entry point for **oargainse** with the URL being: www.oarganise.com. Its purpose is to give 
potential clients all the info needed about the app in order for them to sign up. The following outlines the structure 
of the website:

| Section | Page          | URL     |
|---------|---------------|---------|
| Main    | Splash Screen | `/`     |
| Main    | Landing       | `/home` |

### The Landing Page
The landing page is key for any SaaS application as it is responsible for getting the client to sign up. While 
researching how to develop a good landing page, I came across this post ["A Landing page that converts"](https://www.instagram.com/p/ClDW6mMjgSe/), 
that outlines the different elements that achieve this. Here is how they should be implemented:

- **Short and compelling text:** This will be achieved through the use of a tagline and a subtag-line that will be shown 
to the user. Some options for these are:

| Tagline                                          | Sub-tagline                                 |
|:-------------------------------------------------|:--------------------------------------------|
| Streamline your rowing club with oarganise.      | Effortlessly manage your club's operations. |
| Row to victory with oarganise.                   | Your club's success starts here.            |
| The ultimate rowing club management solution.    | Stay ahead of the game with oarganise.      |
| Take control of your rowing club with oarganise. | Effortless organization, every time.        |
| Power up your rowing club with oarganise.        | Unleash the full potential of your club.    |

- **Powerful CTAs (Call To Actions):** A powerful CTA button can convert a user from the get go and so it is important 
to have one that is useful to the user. To create a CTA like this, I will use specific text within my CTA buttons, e.g.
'Discover Benefits' and not 'Learn More'. A more tailored message will encourage a client to take action.

- **Responsive Design:** This is a must-have with modern apps, so I will ensure the tagline text, buttons etc... are a
good fit based on screen size.

- **Build Trust:** On the landing page, I want to sell my service through social proof. This will be tricky to include 
when it comes to the BETA release as there will be now previous users. However, when more users join the platform I will
get reviews from them display these on the landing page. I also aim to use Trustpilot to gain a new clients trust.

- **Showing Platform's Value:** This is an important section of a landing page as it will outline the benefits, features,
and solutions that a client may be facing. This feature portion was originally designed as a carousel but on reflection,
a more appropriate design might be a grid layout with each card having the following format: icon, title & description.

With these pointers in mind I can now define and layout what the landing page should look like and how it should act.
I am using this design [post](https://www.instagram.com/p/CoH7_oqO-8h/) for inspiration. These are as follows:

| Landing Section | Description                                                                                  |
|:----------------|----------------------------------------------------------------------------------------------|
| Navigation      | Holds all the links within the website as well as 2 CTA buttons; download & open app         |
| Tagline         | Tagline (from above), Infographic & 2 CTA buttons; demo link and Get Started                 |
| Review          | Will try to build up reviews from the first clients to populate this but will design in beta |
| Features        | Outlines benefits to clients and show what value oarganise can offer                         |
| Price           | Breakdown of different price plans and what a client can save by choosing a yearly plan      |
| Integrations    | Show the suite of tools that oarganise works with; google calendar etc...                    |
| Footer          | Breakdown of site links and links to socials; linkedIn, instagram etc...                     |

#### Navigation
The navigation element (header) will be the first element loaded on to the landing page. It should have the following
elements: A logo that links to `/home` (so the splash screen isn't shown everytime), links that are split into 2 
categories - the first will be shown in the header and when hovered over, the second category of links will be 
displayed, and they will link to the actual content. The final element will be 2 CTA buttons. The first will be a 
download button (I aim to extend this app to a downloadable desktop app in the future) and an open app button that will
direct the user to the URL: www.app.oargainse.com

## Web App
