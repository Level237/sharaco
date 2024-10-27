import React from 'react'
import ListItems from './ListItems'

export default function Sidebar() {
  return (
    <>
       <aside className="js-navbar-vertical-aside bg-[#fff] dark:border-[#6b6a6a36] dark:bg-[#25282a] navbar navbar-vertical-aside navbar-vertical navbar-vertical-fixed navbar-expand-xl navbar-dark ">
        <div className="navbar-vertical-container">
          <div className="navbar-vertical-footer-offset">
            {/* Logo */}
            <a className="navbar-brand" href="index.html.htm" aria-label="Front">
              <img className="navbar-brand-logo" src="assets/svg/logos/logo-white.svg" alt="Logo" />
              <img className="navbar-brand-logo-mini" src="assets/svg/logos/logo-short-white.svg" alt="Logo" />
            </a>
            {/* End Logo */}
            {/* Navbar Vertical Toggle */}
            <button type="button" className="js-navbar-vertical-aside-toggle-invoker navbar-aside-toggler">
              <i className="bi-arrow-bar-left navbar-toggler-short-align" data-bs-template="<div class=&quot;tooltip d-none d-md-block&quot; role=&quot;tooltip&quot;><div class=&quot;arrow&quot;></div><div class=&quot;tooltip-inner&quot;></div></div>" data-bs-toggle="tooltip" data-bs-placement="right" title="Collapse" />
              <i className="bi-arrow-bar-right navbar-toggler-full-align" data-bs-template="<div class=&quot;tooltip d-none d-md-block&quot; role=&quot;tooltip&quot;><div class=&quot;arrow&quot;></div><div class=&quot;tooltip-inner&quot;></div></div>" data-bs-toggle="tooltip" data-bs-placement="right" title="Expand" />
            </button>
            {/* End Navbar Vertical Toggle */}
            {/* Content */}
            <div className="navbar-vertical-content dark:bg-[#25282a]">
              <div id="navbarVerticalMenu" className="nav nav-pills nav-vertical card-navbar-nav">
                {/* Collapse */}
            
                {/* End Collapse */}
                
                <small className="bi-three-dots nav-subtitle-replacer" />
                {/* Collapse */}
                <div className="navbar-nav nav-compact">
                </div>
                <div id="navbarVerticalMenuPagesMenu">
                  {/* Collapse */}
                 <ListItems/>
                </div>
                {/* End Collapse */}
                
              </div>
            </div>
            {/* End Content */}
            {/* Footer */}
            <div className="navbar-vertical-footer">
              <ul className="navbar-vertical-footer-list">
                <li className="navbar-vertical-footer-list-item">
                  {/* Style Switcher */}
                  <div className="dropdown dropup">
                    <button type="button" className="btn btn-ghost-secondary btn-icon rounded-circle" id="selectThemeDropdown" data-bs-toggle="dropdown" aria-expanded="false" data-bs-dropdown-animation>
                    </button>
                    <div className="dropdown-menu navbar-dropdown-menu navbar-dropdown-menu-borderless" aria-labelledby="selectThemeDropdown">
                      <a className="dropdown-item" href="#" data-icon="bi-moon-stars" data-value="auto">
                        <i className="bi-moon-stars me-2" />
                        <span className="text-truncate" title="Auto (system default)">Auto (system default)</span>
                      </a>
                      <a className="dropdown-item" href="#" data-icon="bi-brightness-high" data-value="default">
                        <i className="bi-brightness-high me-2" />
                        <span className="text-truncate" title="Default (light mode)">Default (light mode)</span>
                      </a>
                      <a className="dropdown-item active" href="#" data-icon="bi-moon" data-value="dark">
                        <i className="bi-moon me-2" />
                        <span className="text-truncate" title="Dark">Dark</span>
                      </a>
                    </div>
                  </div>
                  {/* End Style Switcher */}
                </li>
                <li className="navbar-vertical-footer-list-item">
                  {/* Other Links */}
                  <div className="dropdown dropup">
                    <button type="button" className="btn btn-ghost-secondary btn-icon rounded-circle" id="otherLinksDropdown" data-bs-toggle="dropdown" aria-expanded="false" data-bs-dropdown-animation>
                      <i className="bi-info-circle" />
                    </button>
                    <div className="dropdown-menu navbar-dropdown-menu-borderless" aria-labelledby="otherLinksDropdown">
                      <span className="dropdown-header">Help</span>
                      <a className="dropdown-item" href="#">
                        <i className="bi-journals dropdown-item-icon" />
                        <span className="text-truncate" title="Resources & tutorials">Resources &amp; tutorials</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="bi-command dropdown-item-icon" />
                        <span className="text-truncate" title="Keyboard shortcuts">Keyboard shortcuts</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="bi-alt dropdown-item-icon" />
                        <span className="text-truncate" title="Connect other apps">Connect other apps</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="bi-gift dropdown-item-icon" />
                        <span className="text-truncate" title="What's new?">What's new?</span>
                      </a>
                      <div className="dropdown-divider" />
                      <span className="dropdown-header">Contacts</span>
                      <a className="dropdown-item" href="#">
                        <i className="bi-chat-left-dots dropdown-item-icon" />
                        <span className="text-truncate" title="Contact support">Contact support</span>
                      </a>
                    </div>
                  </div>
                  {/* End Other Links */}
                </li>
                <li className="navbar-vertical-footer-list-item">
                  {/* Language */}
                  <div className="dropdown dropup">
                    <button type="button" className="btn btn-ghost-secondary btn-icon rounded-circle" id="selectLanguageDropdown" data-bs-toggle="dropdown" aria-expanded="false" data-bs-dropdown-animation>
                      <img className="avatar avatar-xss avatar-circle" src="assets/vendor/flag-icon-css/flags/1x1/us.svg" alt="United States Flag" />
                    </button>
                    <div className="dropdown-menu navbar-dropdown-menu-borderless" aria-labelledby="selectLanguageDropdown">
                      <span className="dropdown-header">Select language</span>
                      <a className="dropdown-item" href="#">
                        <img className="avatar avatar-xss avatar-circle me-2" src="assets/vendor/flag-icon-css/flags/1x1/us.svg" alt="Flag" />
                        <span className="text-truncate" title="English">English (US)</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <img className="avatar avatar-xss avatar-circle me-2" src="assets/vendor/flag-icon-css/flags/1x1/gb.svg" alt="Flag" />
                        <span className="text-truncate" title="English">English (UK)</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <img className="avatar avatar-xss avatar-circle me-2" src="assets/vendor/flag-icon-css/flags/1x1/de.svg" alt="Flag" />
                        <span className="text-truncate" title="Deutsch">Deutsch</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <img className="avatar avatar-xss avatar-circle me-2" src="assets/vendor/flag-icon-css/flags/1x1/dk.svg" alt="Flag" />
                        <span className="text-truncate" title="Dansk">Dansk</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <img className="avatar avatar-xss avatar-circle me-2" src="assets/vendor/flag-icon-css/flags/1x1/it.svg" alt="Flag" />
                        <span className="text-truncate" title="Italiano">Italiano</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <img className="avatar avatar-xss avatar-circle me-2" src="assets/vendor/flag-icon-css/flags/1x1/cn.svg" alt="Flag" />
                        <span className="text-truncate" title="中文 (繁體)">中文 (繁體)</span>
                      </a>
                    </div>
                  </div>
                  {/* End Language */}
                </li>
              </ul>
            </div>
            {/* End Footer */}
          </div>
        </div>
      </aside>
    </>
  )
}
