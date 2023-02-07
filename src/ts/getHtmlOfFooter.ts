import rsImg from '../assets/images/icons/rs-logo.svg';
import rsCloneImg from '../assets/images/icons/rs-clone-2023.svg';

// export default function getHtmlOfFooter() {
//     return `
//       <footer class="footer">
//         <div class="container">
//           <a href="https://rs.school/" class="footer__rs-logo">
//             <img src="${rsImg}" alt="rs logo">
//           </a>
//           <div class="footer__persons">
//             <a href="https://github.com/greiner94" class="footer__person-link">@greiner</a>
//             <a href="https://github.com/svetlanahrhr" class="footer__person-link">@svetlanahrhr</a>
//             <a href="https://github.com/dairinka" class="footer__person-link">@dairinka</a>
//           </div>
//           <a href="https://github.com/rolling-scopes-school/tasks/blob/master/tasks/rsclone/rsclone.md" class="footer__rs-clone-logo">
//             <img src="${rsCloneImg}" alt="rs logo">
//           </a>
//         </div>
//       </footer>
//     `;
// }
export default function getHtmlOfFooter() {
    return `
        <div class="container">
          <a href="https://rs.school/" class="footer__rs-logo">
            <img src="${rsImg}" alt="rs logo">
          </a>
          <div class="footer__persons">
            <a href="https://github.com/greiner94" class="footer__person-link">@greiner</a>
            <a href="https://github.com/svetlanahrhr" class="footer__person-link">@svetlanahrhr</a>
            <a href="https://github.com/dairinka" class="footer__person-link">@dairinka</a>
          </div>
          <a href="https://github.com/rolling-scopes-school/tasks/blob/master/tasks/rsclone/rsclone.md" class="footer__rs-clone-logo">
            <img src="${rsCloneImg}" alt="rs logo">
          </a>
        </div>
    `;
}
