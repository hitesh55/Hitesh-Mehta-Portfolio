
import html from '../assets/svg/skills/html.svg'
import css from '../assets/svg/skills/css.svg'
import javascript from '../assets/svg/skills/javascript.svg'
import nextJS from '../assets/svg/skills/nextJS.svg'
import react from '../assets/svg/skills/react.svg'
import bootstrap from '../assets/svg/skills/bootstrap.svg'
import mongoDB from '../assets/svg/skills/mongoDB.svg'
import mysql from '../assets/svg/skills/mysql.svg'
import c from '../assets/svg/skills/c.svg'
import cplusplus from '../assets/svg/skills/cplusplus.svg'
import python from '../assets/svg/skills/python.svg'
import git from '../assets/svg/skills/git.svg'
import microsoftoffice from '../assets/svg/skills/microsoftoffice.svg'
import nodejs from '../assets/svg/skills/Node.js_logo.svg'
import ubuntu from '../assets/svg/skills/UbuntuCoF.svg'
import canva from '../assets/svg/skills/canva.svg'


export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'canva':
            return canva;
        case 'html':
            return html;
        case 'css':
            return css;
        case 'javascript':
            return javascript;
        case 'next js':
            return nextJS;
        case 'react':
            return react;
        case 'bootstrap':
            return bootstrap;
        case 'mongodb':
            return mongoDB;
        case 'mysql':
            return mysql;
        case 'c':
            return c;
        case 'c++':
            return cplusplus;
        case 'python':
            return python;
        case 'git':
            return git;
        case 'microsoftoffice':
            return microsoftoffice;
        case 'node js':  
            return nodejs;
        case 'ubuntu':
            return ubuntu;
        default:
            break;
    }
}