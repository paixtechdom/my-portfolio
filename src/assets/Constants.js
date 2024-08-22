import BlogImg from './img/blogImg.png'
import SaculietImg from './img/saculietImg.png'
import StudentVerificationImg from "./img/studentVerificationImg.png"
import ClassImg from "./img/classImg.png"
import PaixTechdomImg from "./img/paixTechdomImg.png"
import MacmayImg from "./img/macmayImg.png"
import Eduaid from "./img/eduaid.jpeg"
import Gpa from "./img/gpa.png"
import Tic from "./img/tic.png"
import Booklist from "./img/booklist.png"
import Portfolio from './img/portfolioImg.png'
import Rock from "./img/rock.png"
import Clock from "./img/clock.png"
import Calculator from "./img/calculator.png"
import albertInteriors from "./img/albert-interiors.png"
import livingWaters from "./img/livingWaters.png"
import resida from "./img/resida-housing.png"
import onidson from "./img/onidsonImg.png"

const MyProjects = [
    {
        title: 'Onidson Travels and Logistics Ltd',
        lang: ["Typescript", 'REACT', 'Tailwind'],
        link: 'https://onidsontravels.com/',
        description:  [''],
        img: onidson
    },
    {
        title: 'Resida Housing',
        lang: ["Tyoescript", 'REACT', 'Tailwind'],
        link: 'https://resida.netlify.app/',
        description:  [''],
        img: resida
    },
    {
        title: 'Saculiet NIG Enterprises',
        lang: ['REACT', 'Tailwind', 'PHP', 'SQL', 'SEO'],
        link: 'https://saculietdrivingschool.com',
        description:  ['Designed a well detailed and beautiful landing page for the driving school, highlighting the service of the organization and other important details', 'Developed a gallery which displays images and videos of the driving school and their activity', 'Implemented SEO optimization which brought a 10% increase in their lead generation'],
        img: SaculietImg
    },
    {
        title: 'Paix Techdom',
        lang: ['REACT', 'Tailwind'],
        link: 'https://paixtechdom.com',
        description:  ['Designed a landing page for a website Development Company, displaying the basic information about the services of the company.'],
        img: PaixTechdomImg
    },
    {
        title: 'Audio Downloader',
        lang: ['REACT', 'Tailwind'],
        link: 'https://livingwatersglobal.netlify.app',
        description:  ['Designed a landing page for a website Development Company, displaying the basic information about the services of the company.'],
        img: livingWaters
    },
    // {
    //     title: 'Student Verification Portal - Saculiet NIG Enterprises',
    //     lang: ['REACT', 'Tailwind', 'PHP', 'SQL'],
    //     link: 'https://saculietdrivingschool.com',
    //     description:  ['Developed a portal for the Driving School Arm of the company, for organizations to verify the certificates of the students of the driving school', 'Key features includes:', '•    A page for organizations to submit student verification requests', '•    Email verification', '•    A dashboard for the school to view and manage requests, student and organizations', '•    Emails to notify the school of a request submission, inform organizations when the requests is granted and to inform students when their certificate is verified by an organization', '•    Secure authentication for organizations to access the portal and for admin login'],
    //     img: StudentVerificationImg
    // },
    {
        title: 'Albert Interior Design Agency',
        lang: ['REACT', 'Tailwind', 'Responsive Design'],
        link: 'https://albert-interiors.vercel.app',
        description:  [''],
        img: albertInteriors
    },
    {
        title: 'Macmay Group',
        lang: ['REACT', 'BOOTSTRAP', 'CSS'],
        link: 'https://macmaygroup.vervel.app',
        description:  ['This is a website still under development for Macmay Group of Company.',' The website currently displays only information about the company and also media through which they can be contacted.'],
        img: MacmayImg
    },
    {
        title: 'Christ Liberty Assembly',
        lang: ['REACT', 'Tailwind', 'PHP', 'SQL', 'JSON'],
        link: 'https://christlibertyassembly.org.ng',
        description:  ['Developed a website for the church, Christ Liberty Assembly containing key sections such as:', '•   A page for displaying sermons and a gallery page that displays images of the church.', '•	A page to display articles and a page for each article. The link to each article can be shared on Facebook, WhatsApp or the copied to clipboard.', '•	A search functionality to filter out articles by title and sermons by title or preacher.'],
        img: ClassImg
    },
    {
        title: 'PREJUM - BLOG PROTOTYPE',
        lang: ['REACT', 'PHP', 'Tailwind', 'JSON'],
        link: 'https://prejum.netlify.app',
        description:  ['Designing personal blog a home, about and contact page and then the main blog.', 'Implenemted search algorithms to search or filter blogs'],
        img: BlogImg
    },
    // {
    //     title: 'Portfolio Website',
    //     lang: ['REACT', 'BOOTSTRAP', 'CSS'],
    //     link: 'https://johnoluwaferanmi.netlify.app',
    //     description:  ['This is a website still under development for Macmay Group of Company.',' The website currently displays only information about the company and also media through which they can be contacted.'],
    //     img: Portfolio
    // },
    // {
    //     title: 'Social Media Website',
    //     lang: ['REACT', 'CSS', 'PHP', 'SQL'],
    //     link: 'https://eduaidsocialmedia.000webhostapp.com/',
    //     description:  ['bold Username: guest','bold Password: guestguest','This is a custom social media application suitable for a university.',' It has features such as adding of posts which can be texts, a picture or both.','It also has sections to view updates added by the admin, a gallery section, and a section where the final year student can upload a copy of their projects, which can be downloaded by the other students.', 'It also has the functionality for updating of password and profile picture.'],
    //     img: Eduaid
    // },
    {
        title: 'G.P.A Calculator',
        link: 'https://paixtechdom-gpa.netlify.app',
        lang: ['HTML', 'CSS', 'JAVASCRIPT'],
        description:  ['A tool for students to calculate their Grade Point Average (GPA) by inputting course grades and units for each course, simplifying the process of tracking academic progress.'],
        img: Gpa
    },
    {
        title: 'Scientific Calculator',
        lang: ['HTML', 'CSS', 'JAVASCRIPT'],
        link: 'https://paixtechdom-calculator.netlify.app',
        description:  ['This is an advanced calculator with scientific functions, designed to handle complex mathematical operations, including tigonometric and logarithimic calculations'],
        img: Calculator
    },
    {
        title: 'Booklist App',
        link: 'https://paixtechdom-booklist.netlify.app',
        lang: ['HTML', 'CSS', 'JAVASCRIPT'],
        img: 'projectBook.png',
        description:  ['An application that allows users to catalog and organize their book collections by adding or removing books'],
        img: Booklist
    },
    {
        title: 'Stopwatch',
        link: 'https://paixtechdom-stopwatch.netlify.app',
        lang: ['HTML', 'CSS', 'JAVASCRIPT'],
        description:  ['A digital stopwatch with start, stop, reset, pause and count lap functionality', 'It can be used for timing activities, sports events or anything that requires precise timing'],
        img: Clock
        
    },
    {
        title: 'Rock Paper Scissors',           
        link: 'https://paixtechdom-rock.netlify.app',
        lang: ['HTML', 'CSS', 'JAVASCRIPT'],
        img: 'projectRock2.png',
        description:  ['A simple javascript game that lets you play the age-old hand game against the computer', 'Will you choose rock, paper or scissors to outsmart your opponent?'],
        img: Rock
    },
    {
        title: 'Tic Tac',
        lang: ['HTML', 'CSS', 'JAVASCRIPT'],
        link: 'https://paixtechdom-tictac.netlify.app',
        description:  ['A classic two-player game played on a 3x3 grid',"Each player take turns clicking on an empty square, the first player is represented by 'X' and the second 'O' ", 'The goal is to form a row, column or or diagonal with three of their symbols, while preventing the opponent from doing same.', 'The first player to achieve that wins and if the grid is filled without a winner, the game is draw'],
        img: Tic
    },
]



export { MyProjects }