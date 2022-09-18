import * as React from 'react';
import '../styles/menubar.css';

export default function Menubar(props) {
    return (
        <nav class="menuBar">
          <input id="check" type="checkbox" class="menuState"></input>
          <>{ /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }</>
          <label for="check" class="menuButton">
            <span class="top"></span>
            <span class="mid"></span>
            <span class="bot"></span>
          </label>
          <button class="menuButton">
            <svg width="30" height="30" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <path d="M9 22V12h6v10"></path>
            </svg>
          </button>
          <button class="menuButton"><svg width="30" height="30" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <path d="M14 2v6h6"></path>
              <path d="M16 13H8"></path>
              <path d="M16 17H8"></path>
              <path d="M10 9H8"></path>
            </svg></button>
          <button class="menuButton"><svg width="33" height="33" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 17.25 1.5 12l6-5.25"></path>
              <path d="m16.5 17.25 6-5.25-6-5.25"></path>
              <path d="m14.25 4.5-4.5 15"></path>
            </svg></button>
          <button class="menuButton"><svg width="33" height="33" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.125 6.75c-.184 2.478-2.063 4.5-4.125 4.5-2.063 0-3.945-2.021-4.125-4.5-.188-2.578 1.64-4.5 4.125-4.5 2.484 0 4.312 1.969 4.125 4.5Z"></path>
              <path d="M12 14.25c-4.078 0-8.217 2.25-8.983 6.497-.092.512.197 1.003.733 1.003h16.5c.536 0 .826-.491.734-1.003C20.217 16.5 16.078 14.25 12 14.25Z"></path>
            </svg></button>
        </nav>
    )
}