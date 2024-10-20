import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { persistor } from '../../store';
import { getUser } from '../../api/auth/getUser';

export const DashboardPage=() => {
  const { user } = useSelector((state:any) => state.auth);
  
  //persistor.purge();
  useEffect(()=>{

    console.log(user)
  },[user])

  return (
    <section className="has-navbar-vertical-aside navbar-vertical-aside-show-xl   footer-offset">
      
      {/* ========== HEADER ========== */}
      <header id="header" className="navbar navbar-expand-lg navbar-fixed navbar-height navbar-container navbar-bordered bg-white">
        <div className="navbar-nav-wrap">
          {/* Logo */}
          <a className="navbar-brand" href="index.html.htm" aria-label="Front">
            <img className="navbar-brand-logo" src="assets/svg/logos/logo.svg" alt="Logo" data-hs-theme-appearance="default" />
            <img className="navbar-brand-logo" src="assets/svg/logos-light/logo.svg" alt="Logo" data-hs-theme-appearance="dark" />
            <img className="navbar-brand-logo-mini" src="assets/svg/logos/logo-short.svg" alt="Logo" data-hs-theme-appearance="default" />
            <img className="navbar-brand-logo-mini" src="assets/svg/logos-light/logo-short.svg" alt="Logo" data-hs-theme-appearance="dark" />
          </a>
          {/* End Logo */}
          <div className="navbar-nav-wrap-content-start">
            {/* Navbar Vertical Toggle */}
            <button type="button" className="js-navbar-vertical-aside-toggle-invoker navbar-aside-toggler">
              <i className="bi-arrow-bar-left navbar-toggler-short-align" data-bs-template="<div class=&quot;tooltip d-none d-md-block&quot; role=&quot;tooltip&quot;><div class=&quot;arrow&quot;></div><div class=&quot;tooltip-inner&quot;></div></div>" data-bs-toggle="tooltip" data-bs-placement="right" title="Collapse" />
              <i className="bi-arrow-bar-right navbar-toggler-full-align" data-bs-template="<div class=&quot;tooltip d-none d-md-block&quot; role=&quot;tooltip&quot;><div class=&quot;arrow&quot;></div><div class=&quot;tooltip-inner&quot;></div></div>" data-bs-toggle="tooltip" data-bs-placement="right" title="Expand" />
            </button>
            {/* End Navbar Vertical Toggle */}
            {/* Search Form */}
            <div className="dropdown ms-2">
              {/* Input Group */}
              <div className="d-none d-lg-block">
                <div className="input-group input-group-merge input-group-borderless input-group-hover-light navbar-input-group">
                  <div className="input-group-prepend input-group-text">
                    <i className="bi-search" />
                  </div>
                  <input type="search" className="js-form-search form-control" placeholder="Search in front" aria-label="Search in front" data-hs-form-search-options="{
                   &quot;clearIcon&quot;: &quot;#clearSearchResultsIcon&quot;,
                   &quot;dropMenuElement&quot;: &quot;#searchDropdownMenu&quot;,
                   &quot;dropMenuOffset&quot;: 20,
                   &quot;toggleIconOnFocus&quot;: true,
                   &quot;activeClass&quot;: &quot;focus&quot;
                 }" />
                  <a className="input-group-append input-group-text" href="javascript:;">
                    <i id="clearSearchResultsIcon" className="bi-x-lg" style={{display: 'none'}} />
                  </a>
                </div>
              </div>
              <button className="js-form-search js-form-search-mobile-toggle btn btn-ghost-secondary btn-icon rounded-circle d-lg-none" type="button" data-hs-form-search-options="{
                   &quot;clearIcon&quot;: &quot;#clearSearchResultsIcon&quot;,
                   &quot;dropMenuElement&quot;: &quot;#searchDropdownMenu&quot;,
                   &quot;dropMenuOffset&quot;: 20,
                   &quot;toggleIconOnFocus&quot;: true,
                   &quot;activeClass&quot;: &quot;focus&quot;
                 }">
                <i className="bi-search" />
              </button>
              {/* End Input Group */}
              {/* Card Search Content */}
              <div id="searchDropdownMenu" className="hs-form-search-menu-content dropdown-menu dropdown-menu-form-search navbar-dropdown-menu-borderless">
                <div className="card">
                  {/* Body */}
                  <div className="card-body-height">
                    <div className="d-lg-none">
                      <div className="input-group input-group-merge navbar-input-group mb-5">
                        <div className="input-group-prepend input-group-text">
                          <i className="bi-search" />
                        </div>
                        <input type="search" className="form-control" placeholder="Search in front" aria-label="Search in front" />
                        <a className="input-group-append input-group-text" href="javascript:;">
                          <i className="bi-x-lg" />
                        </a>
                      </div>
                    </div>
                    <span className="dropdown-header">Recent searches</span>
                    <div className="dropdown-item bg-transparent text-wrap">
                      <a className="btn btn-soft-dark btn-xs rounded-pill" href="index.html.htm">
                        Gulp <i className="bi-search ms-1" />
                      </a>
                      <a className="btn btn-soft-dark btn-xs rounded-pill" href="index.html.htm">
                        Notification panel <i className="bi-search ms-1" />
                      </a>
                    </div>
                    <div className="dropdown-divider" />
                    <span className="dropdown-header">Tutorials</span>
                    <a className="dropdown-item" href="index.html.htm">
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <span className="icon icon-soft-dark icon-xs icon-circle">
                            <i className="bi-sliders" />
                          </span>
                        </div>
                        <div className="flex-grow-1 text-truncate ms-2">
                          <span>How to set up Gulp?</span>
                        </div>
                      </div>
                    </a>
                    <a className="dropdown-item" href="index.html.htm">
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <span className="icon icon-soft-dark icon-xs icon-circle">
                            <i className="bi-paint-bucket" />
                          </span>
                        </div>
                        <div className="flex-grow-1 text-truncate ms-2">
                          <span>How to change theme color?</span>
                        </div>
                      </div>
                    </a>
                    <div className="dropdown-divider" />
                    <span className="dropdown-header">Members</span>
                    <a className="dropdown-item" href="index.html.htm">
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <img className="avatar avatar-xs avatar-circle" src="assets/img/160x160/img10.jpg" alt="Image Description" />
                        </div>
                        <div className="flex-grow-1 text-truncate ms-2">
                          <span>Amanda Harvey <i className="tio-verified text-primary" data-toggle="tooltip" data-placement="top" title="Top endorsed" /></span>
                        </div>
                      </div>
                    </a>
                    <a className="dropdown-item" href="index.html.htm">
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <img className="avatar avatar-xs avatar-circle" src="assets/img/160x160/img3.jpg" alt="Image Description" />
                        </div>
                        <div className="flex-grow-1 text-truncate ms-2">
                          <span>David Harrison</span>
                        </div>
                      </div>
                    </a>
                    <a className="dropdown-item" href="index.html.htm">
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <div className="avatar avatar-xs avatar-soft-info avatar-circle">
                            <span className="avatar-initials">A</span>
                          </div>
                        </div>
                        <div className="flex-grow-1 text-truncate ms-2">
                          <span>Anne Richard</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  {/* End Body */}
                  {/* Footer */}
                  <a className="card-footer text-center" href="index.html.htm">
                    See all results <i className="bi-chevron-right small" />
                  </a>
                  {/* End Footer */}
                </div>
              </div>
              {/* End Card Search Content */}
            </div>
            {/* End Search Form */}
          </div>
          <div className="navbar-nav-wrap-content-end">
            {/* Navbar */}
            <ul className="navbar-nav">
              <li className="nav-item d-none d-sm-inline-block">
                {/* Notification */}
                <div className="dropdown">
                  <button type="button" className="btn btn-ghost-secondary btn-icon rounded-circle" id="navbarNotificationsDropdown" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside" data-bs-dropdown-animation>
                    <i className="bi-bell" />
                    <span className="btn-status btn-sm-status btn-status-danger" />
                  </button>
                  <div className="dropdown-menu dropdown-menu-end dropdown-card navbar-dropdown-menu navbar-dropdown-menu-borderless" aria-labelledby="navbarNotificationsDropdown" style={{width: '25rem'}}>
                    <div className="card">
                      {/* Header */}
                      <div className="card-header card-header-content-between">
                        <h4 className="card-title mb-0">Notifications</h4>
                        {/* Unfold */}
                        <div className="dropdown">
                          <button type="button" className="btn btn-icon btn-sm btn-ghost-secondary rounded-circle" id="navbarNotificationsDropdownSettings" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="bi-three-dots-vertical" />
                          </button>
                          <div className="dropdown-menu dropdown-menu-end navbar-dropdown-menu navbar-dropdown-menu-borderless" aria-labelledby="navbarNotificationsDropdownSettings">
                            <span className="dropdown-header">Settings</span>
                            <a className="dropdown-item" href="#">
                              <i className="bi-archive dropdown-item-icon" /> Archive all
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="bi-check2-all dropdown-item-icon" /> Mark all as read
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="bi-toggle-off dropdown-item-icon" /> Disable notifications
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="bi-gift dropdown-item-icon" /> What's new?
                            </a>
                            <div className="dropdown-divider" />
                            <span className="dropdown-header">Feedback</span>
                            <a className="dropdown-item" href="#">
                              <i className="bi-chat-left-dots dropdown-item-icon" /> Report
                            </a>
                          </div>
                        </div>
                        {/* End Unfold */}
                      </div>
                      {/* End Header */}
                      {/* Nav */}
                      <ul className="nav nav-tabs nav-justified" id="notificationTab" role="tablist">
                        <li className="nav-item">
                          <a className="nav-link active" href="#notificationNavOne" id="notificationNavOne-tab" data-bs-toggle="tab" data-bs-target="#notificationNavOne" role="tab" aria-controls="notificationNavOne" aria-selected="true">Messages (3)</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#notificationNavTwo" id="notificationNavTwo-tab" data-bs-toggle="tab" data-bs-target="#notificationNavTwo" role="tab" aria-controls="notificationNavTwo" aria-selected="false">Archived</a>
                        </li>
                      </ul>
                      {/* End Nav */}
                      {/* Body */}
                      <div className="card-body-height">
                        {/* Tab Content */}
                        <div className="tab-content" id="notificationTabContent">
                          <div className="tab-pane fade show active" id="notificationNavOne" role="tabpanel" aria-labelledby="notificationNavOne-tab">
                            {/* List Group */}
                            <ul className="list-group list-group-flush navbar-card-list-group">
                              {/* Item */}
                              <li className="list-group-item form-check-select">
                                <div className="row">
                                  <div className="col-auto">
                                    <div className="d-flex align-items-center">
                                      <div className="form-check">
                                        <input className="form-check-input" type="checkbox"  id="notificationCheck1" defaultChecked />
                                        <label className="form-check-label" htmlFor="notificationCheck1" />
                                        <span className="form-check-stretched-bg" />
                                      </div>
                                      <img className="avatar avatar-sm avatar-circle" src="assets/img/160x160/img3.jpg" alt="Image Description" />
                                    </div>
                                  </div>
                                  {/* End Col */}
                                  <div className="col ms-n2">
                                    <h5 className="mb-1">Brian Warner</h5>
                                    <p className="text-body fs-5">changed an issue from "In Progress" to <span className="badge bg-success">Review</span></p>
                                  </div>
                                  {/* End Col */}
                                  <small className="col-auto text-muted text-cap">2hr</small>
                                  {/* End Col */}
                                </div>
                                {/* End Row */}
                                <a className="stretched-link" href="#" />
                              </li>
                              {/* End Item */}
                              {/* Item */}
                              <li className="list-group-item form-check-select">
                                <div className="row">
                                  <div className="col-auto">
                                    <div className="d-flex align-items-center">
                                      <div className="form-check">
                                        <input className="form-check-input" type="checkbox" defaultValue id="notificationCheck2" defaultChecked />
                                        <label className="form-check-label" htmlFor="notificationCheck2" />
                                        <span className="form-check-stretched-bg" />
                                      </div>
                                      <div className="avatar avatar-sm avatar-soft-dark avatar-circle">
                                        <span className="avatar-initials">K</span>
                                      </div>
                                    </div>
                                  </div>
                                  {/* End Col */}
                                  <div className="col ms-n2">
                                    <h5 className="mb-1">Klara Hampton</h5>
                                    <p className="text-body fs-5">mentioned you in a comment</p>
                                    <blockquote className="blockquote blockquote-sm">
                                      Nice work, love! You really nailed it. Keep it up!
                                    </blockquote>
                                  </div>
                                  {/* End Col */}
                                  <small className="col-auto text-muted text-cap">10hr</small>
                                  {/* End Col */}
                                </div>
                                {/* End Row */}
                                <a className="stretched-link" href="#" />
                              </li>
                              {/* End Item */}
                              {/* Item */}
                              <li className="list-group-item form-check-select">
                                <div className="row">
                                  <div className="col-auto">
                                    <div className="d-flex align-items-center">
                                      <div className="form-check">
                                        <input className="form-check-input" type="checkbox" defaultValue id="notificationCheck3" defaultChecked />
                                        <label className="form-check-label" htmlFor="notificationCheck3" />
                                        <span className="form-check-stretched-bg" />
                                      </div>
                                      <div className="avatar avatar-sm avatar-circle">
                                        <img className="avatar-img" src="assets/img/160x160/img10.jpg" alt="Image Description" />
                                      </div>
                                    </div>
                                  </div>
                                  {/* End Col */}
                                  <div className="col ms-n2">
                                    <h5 className="mb-1">Ruby Walter</h5>
                                    <p className="text-body fs-5">joined the Slack group HS Team</p>
                                  </div>
                                  {/* End Col */}
                                  <small className="col-auto text-muted text-cap">3dy</small>
                                  {/* End Col */}
                                </div>
                                {/* End Row */}
                                <a className="stretched-link" href="#" />
                              </li>
                              {/* End Item */}
                              {/* Item */}
                              <li className="list-group-item form-check-select">
                                <div className="row">
                                  <div className="col-auto">
                                    <div className="d-flex align-items-center">
                                      <div className="form-check">
                                        <input className="form-check-input" type="checkbox" defaultValue id="notificationCheck4" />
                                        <label className="form-check-label" htmlFor="notificationCheck4" />
                                        <span className="form-check-stretched-bg" />
                                      </div>
                                      <div className="avatar avatar-sm avatar-circle">
                                        <img className="avatar-img" src="assets/svg/brands/google-icon.svg" alt="Image Description" />
                                      </div>
                                    </div>
                                  </div>
                                  {/* End Col */}
                                  <div className="col ms-n2">
                                    <h5 className="mb-1">from Google</h5>
                                    <p className="text-body fs-5">Start using forms to capture the information of prospects visiting your Google website</p>
                                  </div>
                                  {/* End Col */}
                                  <small className="col-auto text-muted text-cap">17dy</small>
                                  {/* End Col */}
                                </div>
                                {/* End Row */}
                                <a className="stretched-link" href="#" />
                              </li>
                              {/* End Item */}
                              {/* Item */}
                              <li className="list-group-item form-check-select">
                                <div className="row">
                                  <div className="col-auto">
                                    <div className="d-flex align-items-center">
                                      <div className="form-check">
                                        <input className="form-check-input" type="checkbox" defaultValue id="notificationCheck5" />
                                        <label className="form-check-label" htmlFor="notificationCheck5" />
                                        <span className="form-check-stretched-bg" />
                                      </div>
                                      <div className="avatar avatar-sm avatar-circle">
                                        <img className="avatar-img" src="assets/img/160x160/img7.jpg" alt="Image Description" />
                                      </div>
                                    </div>
                                  </div>
                                  {/* End Col */}
                                  <div className="col ms-n2">
                                    <h5 className="mb-1">Sara Villar</h5>
                                    <p className="text-body fs-5">completed <i className="bi-journal-bookmark-fill text-primary" /> FD-7 task</p>
                                  </div>
                                  {/* End Col */}
                                  <small className="col-auto text-muted text-cap">2mn</small>
                                  {/* End Col */}
                                </div>
                                {/* End Row */}
                                <a className="stretched-link" href="#" />
                              </li>
                              {/* End Item */}
                            </ul>
                            {/* End List Group */}
                          </div>
                          <div className="tab-pane fade" id="notificationNavTwo" role="tabpanel" aria-labelledby="notificationNavTwo-tab">
                            {/* List Group */}
                            <ul className="list-group list-group-flush navbar-card-list-group">
                              {/* Item */}
                              <li className="list-group-item form-check-select">
                                <div className="row">
                                  <div className="col-auto">
                                    <div className="d-flex align-items-center">
                                      <div className="form-check">
                                        <input className="form-check-input" type="checkbox" defaultValue id="notificationCheck6" />
                                        <label className="form-check-label" htmlFor="notificationCheck6" />
                                        <span className="form-check-stretched-bg" />
                                      </div>
                                      <div className="avatar avatar-sm avatar-soft-dark avatar-circle">
                                        <span className="avatar-initials">A</span>
                                      </div>
                                    </div>
                                  </div>
                                  {/* End Col */}
                                  <div className="col ms-n2">
                                    <h5 className="mb-1">Anne Richard</h5>
                                    <p className="text-body fs-5">accepted your invitation to join Notion</p>
                                  </div>
                                  {/* End Col */}
                                  <small className="col-auto text-muted text-cap">1dy</small>
                                  {/* End Col */}
                                </div>
                                {/* End Row */}
                                <a className="stretched-link" href="#" />
                              </li>
                              {/* End Item */}
                              {/* Item */}
                              <li className="list-group-item form-check-select">
                                <div className="row">
                                  <div className="col-auto">
                                    <div className="d-flex align-items-center">
                                      <div className="form-check">
                                        <input className="form-check-input" type="checkbox" defaultValue id="notificationCheck7" />
                                        <label className="form-check-label" htmlFor="notificationCheck7" />
                                        <span className="form-check-stretched-bg" />
                                      </div>
                                      <div className="avatar avatar-sm avatar-circle">
                                        <img className="avatar-img" src="assets/img/160x160/img5.jpg" alt="Image Description" />
                                      </div>
                                    </div>
                                  </div>
                                  {/* End Col */}
                                  <div className="col ms-n2">
                                    <h5 className="mb-1">Finch Hoot</h5>
                                    <p className="text-body fs-5">left Slack group HS projects</p>
                                  </div>
                                  {/* End Col */}
                                  <small className="col-auto text-muted text-cap">1dy</small>
                                  {/* End Col */}
                                </div>
                                {/* End Row */}
                                <a className="stretched-link" href="#" />
                              </li>
                              {/* End Item */}
                              {/* Item */}
                              <li className="list-group-item form-check-select">
                                <div className="row">
                                  <div className="col-auto">
                                    <div className="d-flex align-items-center">
                                      <div className="form-check">
                                        <input className="form-check-input" type="checkbox" defaultValue id="notificationCheck8" />
                                        <label className="form-check-label" htmlFor="notificationCheck8" />
                                        <span className="form-check-stretched-bg" />
                                      </div>
                                      <div className="avatar avatar-sm avatar-dark avatar-circle">
                                        <span className="avatar-initials">HS</span>
                                      </div>
                                    </div>
                                  </div>
                                  {/* End Col */}
                                  <div className="col ms-n2">
                                    <h5 className="mb-1">Htmlstream</h5>
                                    <p className="text-body fs-5">you earned a "Top endorsed" <i className="bi-patch-check-fill text-primary" /> badge</p>
                                  </div>
                                  {/* End Col */}
                                  <small className="col-auto text-muted text-cap">6dy</small>
                                  {/* End Col */}
                                </div>
                                {/* End Row */}
                                <a className="stretched-link" href="#" />
                              </li>
                              {/* End Item */}
                              {/* Item */}
                              <li className="list-group-item form-check-select">
                                <div className="row">
                                  <div className="col-auto">
                                    <div className="d-flex align-items-center">
                                      <div className="form-check">
                                        <input className="form-check-input" type="checkbox" defaultValue id="notificationCheck9" />
                                        <label className="form-check-label" htmlFor="notificationCheck9" />
                                        <span className="form-check-stretched-bg" />
                                      </div>
                                      <div className="avatar avatar-sm avatar-circle">
                                        <img className="avatar-img" src="assets/img/160x160/img8.jpg" alt="Image Description" />
                                      </div>
                                    </div>
                                  </div>
                                  {/* End Col */}
                                  <div className="col ms-n2">
                                    <h5 className="mb-1">Linda Bates</h5>
                                    <p className="text-body fs-5">Accepted your connection</p>
                                  </div>
                                  {/* End Col */}
                                  <small className="col-auto text-muted text-cap">17dy</small>
                                  {/* End Col */}
                                </div>
                                {/* End Row */}
                                <a className="stretched-link" href="#" />
                              </li>
                              {/* End Item */}
                              {/* Item */}
                              <li className="list-group-item form-check-select">
                                <div className="row">
                                  <div className="col-auto">
                                    <div className="d-flex align-items-center">
                                      <div className="form-check">
                                        <input className="form-check-input" type="checkbox" defaultValue id="notificationCheck10" />
                                        <label className="form-check-label" htmlFor="notificationCheck10" />
                                        <span className="form-check-stretched-bg" />
                                      </div>
                                      <div className="avatar avatar-sm avatar-soft-dark avatar-circle">
                                        <span className="avatar-initials">L</span>
                                      </div>
                                    </div>
                                  </div>
                                  {/* End Col */}
                                  <div className="col ms-n2">
                                    <h5 className="mb-1">Lewis Clarke</h5>
                                    <p className="text-body fs-5">completed <i className="bi-journal-bookmark-fill text-primary" /> FD-134 task</p>
                                  </div>
                                  {/* End Col */}
                                  <small className="col-auto text-muted text-cap">2mts</small>
                                  {/* End Col */}
                                </div>
                                {/* End Row */}
                                <a className="stretched-link" href="#" />
                              </li>
                              {/* End Item */}
                            </ul>
                            {/* End List Group */}
                          </div>
                        </div>
                        {/* End Tab Content */}
                      </div>
                      {/* End Body */}
                      {/* Card Footer */}
                      <a className="card-footer text-center" href="#">
                        View all notifications <i className="bi-chevron-right" />
                      </a>
                      {/* End Card Footer */}
                    </div>
                  </div>
                </div>
                {/* End Notification */}
              </li>
              <li className="nav-item d-none d-sm-inline-block">
                {/* Apps */}
                <div className="dropdown">
                  <button type="button" className="btn btn-icon btn-ghost-secondary rounded-circle" id="navbarAppsDropdown" data-bs-toggle="dropdown" aria-expanded="false" data-bs-dropdown-animation>
                    <i className="bi-app-indicator" />
                  </button>
                  <div className="dropdown-menu dropdown-menu-end dropdown-card navbar-dropdown-menu navbar-dropdown-menu-borderless" aria-labelledby="navbarAppsDropdown" style={{width: '25rem'}}>
                    <div className="card">
                      {/* Header */}
                      <div className="card-header">
                        <h4 className="card-title">Web apps &amp; services</h4>
                      </div>
                      {/* End Header */}
                      {/* Body */}
                      <div className="card-body card-body-height">
                        <a className="dropdown-item" href="#">
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0">
                              <img className="avatar avatar-xs avatar-4x3" src="assets/svg/brands/atlassian-icon.svg" alt="Image Description" />
                            </div>
                            <div className="flex-grow-1 text-truncate ms-3">
                              <h5 className="mb-0">Atlassian</h5>
                              <p className="card-text text-body">Security and control across Cloud</p>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="#">
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0">
                              <img className="avatar avatar-xs avatar-4x3" src="assets/svg/brands/slack-icon.svg" alt="Image Description" />
                            </div>
                            <div className="flex-grow-1 text-truncate ms-3">
                              <h5 className="mb-0">Slack <span className="badge bg-primary rounded-pill text-uppercase ms-1">Try</span></h5>
                              <p className="card-text text-body">Email collaboration software</p>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="#">
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0">
                              <img className="avatar avatar-xs avatar-4x3" src="assets/svg/brands/google-webdev-icon.svg" alt="Image Description" />
                            </div>
                            <div className="flex-grow-1 text-truncate ms-3">
                              <h5 className="mb-0">Google webdev</h5>
                              <p className="card-text text-body">Work involved in developing a website</p>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="#">
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0">
                              <img className="avatar avatar-xs avatar-4x3" src="assets/svg/brands/frontapp-icon.svg" alt="Image Description" />
                            </div>
                            <div className="flex-grow-1 text-truncate ms-3">
                              <h5 className="mb-0">Frontapp</h5>
                              <p className="card-text text-body">The inbox for teams</p>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="#">
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0">
                              <img className="avatar avatar-xs avatar-4x3" src="assets/svg/illustrations/review-rating-shield.svg" alt="Image Description" />
                            </div>
                            <div className="flex-grow-1 text-truncate ms-3">
                              <h5 className="mb-0">HS Support</h5>
                              <p className="card-text text-body">Customer service and support</p>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="#">
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0">
                              <div className="avatar avatar-sm avatar-soft-dark">
                                <span className="avatar-initials"><i className="bi-grid" /></span>
                              </div>
                            </div>
                            <div className="flex-grow-1 text-truncate ms-3">
                              <h5 className="mb-0">More Front products</h5>
                              <p className="card-text text-body">Check out more HS products</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      {/* End Body */}
                      {/* Footer */}
                      <a className="card-footer text-center" href="#">
                        View all apps <i className="bi-chevron-right" />
                      </a>
                      {/* End Footer */}
                    </div>
                  </div>
                </div>
                {/* End Apps */}
              </li>
              <li className="nav-item d-none d-sm-inline-block">
                {/* Activity */}
                <button className="btn btn-ghost-secondary btn-icon rounded-circle" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasActivityStream" aria-controls="offcanvasActivityStream">
                  <i className="bi-x-diamond" />
                </button>
                {/* Activity */}
              </li>
              <li className="nav-item">
                {/* Account */}
                <div className="dropdown">
                  <a className="navbar-dropdown-account-wrapper" href="javascript:;" id="accountNavbarDropdown" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside" data-bs-dropdown-animation>
                    <div className="avatar avatar-sm avatar-circle">
                      <img className="avatar-img" src="assets/img/160x160/img6.jpg" alt="Image Description" />
                      <span className="avatar-status avatar-sm-status avatar-status-success" />
                    </div>
                  </a>
                  <div className="dropdown-menu dropdown-menu-end navbar-dropdown-menu navbar-dropdown-menu-borderless navbar-dropdown-account" aria-labelledby="accountNavbarDropdown" style={{width: '16rem'}}>
                    <div className="dropdown-item-text">
                      <div className="d-flex align-items-center">
                        <div className="avatar avatar-sm avatar-circle">
                          <img className="avatar-img" src="assets/img/160x160/img6.jpg" alt="Image Description" />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h5 className="mb-0">Mark Williams</h5>
                          <p className="card-text text-body">mark@site.com</p>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown-divider" />
                    {/* Dropdown */}
                    <div className="dropdown">
                      <a className="navbar-dropdown-submenu-item dropdown-item dropdown-toggle" href="javascript:;" id="navSubmenuPagesAccountDropdown1" data-bs-toggle="dropdown" aria-expanded="false">Set status</a>
                      <div className="dropdown-menu dropdown-menu-end navbar-dropdown-menu navbar-dropdown-menu-borderless navbar-dropdown-sub-menu" aria-labelledby="navSubmenuPagesAccountDropdown1">
                        <a className="dropdown-item" href="#">
                          <span className="legend-indicator bg-success me-1" /> Available
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="legend-indicator bg-danger me-1" /> Busy
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="legend-indicator bg-warning me-1" /> Away
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#"> Reset status
                        </a>
                      </div>
                    </div>
                    {/* End Dropdown */}
                    <a className="dropdown-item" href="#">Profile &amp; account</a>
                    <a className="dropdown-item" href="#">Settings</a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <div className="avatar avatar-sm avatar-dark avatar-circle">
                            <span className="avatar-initials">HS</span>
                          </div>
                        </div>
                        <div className="flex-grow-1 ms-2">
                          <h5 className="mb-0">Htmlstream <span className="badge bg-primary rounded-pill text-uppercase ms-1">PRO</span></h5>
                          <span className="card-text">hs.example.com</span>
                        </div>
                      </div>
                    </a>
                    <div className="dropdown-divider" />
                    {/* Dropdown */}
                    <div className="dropdown">
                      <a className="navbar-dropdown-submenu-item dropdown-item dropdown-toggle" href="javascript:;" id="navSubmenuPagesAccountDropdown2" data-bs-toggle="dropdown" aria-expanded="false">Customization</a>
                      <div className="dropdown-menu dropdown-menu-end navbar-dropdown-menu navbar-dropdown-menu-borderless navbar-dropdown-sub-menu" aria-labelledby="navSubmenuPagesAccountDropdown2">
                        <a className="dropdown-item" href="#">
                          Invite people
                        </a>
                        <a className="dropdown-item" href="#">
                          Analytics
                          <i className="bi-box-arrow-in-up-right" />
                        </a>
                        <a className="dropdown-item" href="#">
                          Customize Front
                          <i className="bi-box-arrow-in-up-right" />
                        </a>
                      </div>
                    </div>
                    {/* End Dropdown */}
                    <a className="dropdown-item" href="#">Manage team</a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">Sign out</a>
                  </div>
                </div>
                {/* End Account */}
              </li>
            </ul>
            {/* End Navbar */}
          </div>
        </div>
      </header>
      {/* ========== END HEADER ========== */}
      {/* ========== MAIN CONTENT ========== */}
      {/* Navbar Vertical */}
      <aside className="js-navbar-vertical-aside navbar navbar-vertical-aside navbar-vertical navbar-vertical-fixed navbar-expand-xl navbar-dark bg-dark">
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
            <div className="navbar-vertical-content">
              <div id="navbarVerticalMenu" className="nav nav-pills nav-vertical card-navbar-nav">
                {/* Collapse */}
                <div className="nav-item">
                  <a className="nav-link dropdown-toggle active" href="#navbarVerticalMenuDashboards" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuDashboards" aria-expanded="true" aria-controls="navbarVerticalMenuDashboards">
                    <i className="bi-house-door nav-icon" />
                    <span className="nav-link-title">Dashboards</span>
                  </a>
                  <div id="navbarVerticalMenuDashboards" className="nav-collapse collapse show" data-bs-parent="#navbarVerticalMenu">
                    <a className="nav-link active" href="index.html.htm">Default</a>
                    <a className="nav-link " href="dashboard-alternative.html.htm">Alternative</a>
                  </div>
                </div>
                {/* End Collapse */}
                <span className="dropdown-header mt-4">Pages</span>
                <small className="bi-three-dots nav-subtitle-replacer" />
                {/* Collapse */}
                <div className="navbar-nav nav-compact">
                </div>
                <div id="navbarVerticalMenuPagesMenu">
                  {/* Collapse */}
                  <div className="nav-item">
                    <a className="nav-link dropdown-toggle " href="#navbarVerticalMenuPagesUsersMenu" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuPagesUsersMenu" aria-expanded="false" aria-controls="navbarVerticalMenuPagesUsersMenu">
                      <i className="bi-people nav-icon" />
                      <span className="nav-link-title">Users</span>
                    </a>
                    <div id="navbarVerticalMenuPagesUsersMenu" className="nav-collapse collapse " data-bs-parent="#navbarVerticalMenuPagesMenu">
                      <a className="nav-link " href="users.html.htm">Overview</a>
                      <a className="nav-link " href="users-leaderboard.html.htm">Leaderboard</a>
                      <a className="nav-link " href="users-add-user.html.htm">Add User <span className="badge bg-info rounded-pill ms-1">Hot</span></a>
                    </div>
                  </div>
                  {/* End Collapse */}
                  {/* Collapse */}
                  <div className="nav-item">
                    <a className="nav-link dropdown-toggle " href="#navbarVerticalMenuPagesUserProfileMenu" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuPagesUserProfileMenu" aria-expanded="false" aria-controls="navbarVerticalMenuPagesUserProfileMenu">
                      <i className="bi-person nav-icon" />
                      <span className="nav-link-title">User Profile <span className="badge bg-primary rounded-pill ms-1">5</span></span>
                    </a>
                    <div id="navbarVerticalMenuPagesUserProfileMenu" className="nav-collapse collapse " data-bs-parent="#navbarVerticalMenuPagesMenu">
                      <a className="nav-link " href="user-profile.html.htm">Profile</a>
                      <a className="nav-link " href="user-profile-teams.html.htm">Teams</a>
                      <a className="nav-link " href="user-profile-projects.html.htm">Projects</a>
                      <a className="nav-link " href="user-profile-connections.html.htm">Connections</a>
                      <a className="nav-link " href="user-profile-my-profile.html.htm">My Profile</a>
                    </div>
                  </div>
                  {/* End Collapse */}
                  {/* Collapse */}
                  <div className="nav-item">
                    <a className="nav-link dropdown-toggle " href="#navbarVerticalMenuPagesAccountMenu" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuPagesAccountMenu" aria-expanded="false" aria-controls="navbarVerticalMenuPagesAccountMenu">
                      <i className="bi-person-badge nav-icon" />
                      <span className="nav-link-title">Account</span>
                    </a>
                    <div id="navbarVerticalMenuPagesAccountMenu" className="nav-collapse collapse " data-bs-parent="#navbarVerticalMenuPagesMenu">
                      <a className="nav-link " href="account-settings.html.htm">Settings</a>
                      <a className="nav-link " href="account-billing.html.htm">Billing</a>
                      <a className="nav-link " href="account-invoice.html.htm">Invoice</a>
                    </div>
                  </div>
                  {/* End Collapse */}
                  {/* Collapse */}
                  <div className="nav-item">
                    <a className="nav-link dropdown-toggle " href="#navbarVerticalMenuPagesEcommerceMenu" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuPagesEcommerceMenu" aria-expanded="false" aria-controls="navbarVerticalMenuPagesEcommerceMenu">
                      <i className="bi-basket nav-icon" />
                      <span className="nav-link-title">E-commerce</span>
                    </a>
                    <div id="navbarVerticalMenuPagesEcommerceMenu" className="nav-collapse collapse " data-bs-parent="#navbarVerticalMenuPagesMenu">
                      <a className="nav-link " href="ecommerce.html.htm">Overview</a>
                      <div id="navbarVerticalMenuPagesMenuEcommerce">
                        {/* Collapse */}
                        <div className="nav-item">
                          <a className="nav-link dropdown-toggle" href="#navbarVerticalMenuPagesEcommerceProductsMenu" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuPagesEcommerceProductsMenu" aria-expanded="false" aria-controls="navbarVerticalMenuPagesEcommerceProductsMenu">
                            Products
                          </a>
                          <div id="navbarVerticalMenuPagesEcommerceProductsMenu" className="nav-collapse collapse " data-bs-parent="#navbarVerticalMenuPagesMenuEcommerce">
                            <a className="nav-link " href="ecommerce-products.html.htm">Products</a>
                            <a className="nav-link " href="ecommerce-product-details.html.htm">Product Details</a>
                            <a className="nav-link " href="ecommerce-add-product.html.htm">Add Product</a>
                          </div>
                        </div>
                        {/* End Collapse */}
                        {/* Collapse */}
                        <div className="nav-item">
                          <a className="nav-link dropdown-toggle" href="#navbarVerticalMenuPagesEcommerceOrdersMenu" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuPagesEcommerceOrdersMenu" aria-expanded="false" aria-controls="navbarVerticalMenuPagesEcommerceOrdersMenu">
                            Orders
                          </a>
                          <div id="navbarVerticalMenuPagesEcommerceOrdersMenu" className="nav-collapse collapse " data-bs-parent="#navbarVerticalMenuPagesMenuEcommerce">
                            <a className="nav-link " href="ecommerce-orders.html.htm">Orders</a>
                            <a className="nav-link " href="ecommerce-order-details.html.htm">Order Details</a>
                          </div>
                        </div>
                        {/* End Collapse */}
                        {/* Collapse */}
                        <div className="nav-item">
                          <a className="nav-link dropdown-toggle" href="#navbarVerticalMenuPagesEcommerceCustomersMenu" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuPagesEcommerceCustomersMenu" aria-expanded="false" aria-controls="navbarVerticalMenuPagesEcommerceCustomersMenu">
                            Customers
                          </a>
                          <div id="navbarVerticalMenuPagesEcommerceCustomersMenu" className="nav-collapse collapse " data-bs-parent="#navbarVerticalMenuPagesMenuEcommerce">
                            <a className="nav-link " href="ecommerce-customers.html.htm">Customers</a>
                            <a className="nav-link " href="ecommerce-customer-details.html.htm">Customer Details</a>
                            <a className="nav-link " href="ecommerce-add-customers.html.htm">Add Customers</a>
                          </div>
                        </div>
                        {/* End Collapse */}
                      </div>
                      <a className="nav-link " href="ecommerce-referrals.html.htm">Referrals</a>
                      <a className="nav-link " href="ecommerce-manage-reviews.html.htm">Manage Reviews</a>
                      <a className="nav-link " href="ecommerce-checkout.html.htm">Checkout</a>
                    </div>
                  </div>
                  {/* End Collapse */}
                  {/* Collapse */}
                  <div className="nav-item">
                    <a className="nav-link dropdown-toggle " href="#navbarVerticalMenuPagesProjectsMenu" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuPagesProjectsMenu" aria-expanded="false" aria-controls="navbarVerticalMenuPagesProjectsMenu">
                      <i className="bi-stickies nav-icon" />
                      <span className="nav-link-title">Projects</span>
                    </a>
                    <div id="navbarVerticalMenuPagesProjectsMenu" className="nav-collapse collapse " data-bs-parent="#navbarVerticalMenuPagesMenu">
                      <a className="nav-link " href="projects.html.htm">Overview</a>
                      <a className="nav-link " href="projects-timeline.html.htm">Timeline</a>
                    </div>
                  </div>
                  {/* End Collapse */}
                  {/* Collapse */}
                  <div className="nav-item">
                    <a className="nav-link dropdown-toggle " href="#navbarVerticalMenuPagesProjectMenu" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuPagesProjectMenu" aria-expanded="false" aria-controls="navbarVerticalMenuPagesProjectMenu">
                      <i className="bi-briefcase nav-icon" />
                      <span className="nav-link-title">Project</span>
                    </a>
                    <div id="navbarVerticalMenuPagesProjectMenu" className="nav-collapse collapse " data-bs-parent="#navbarVerticalMenuPagesMenu">
                      <a className="nav-link " href="project.html.htm">Overview</a>
                      <a className="nav-link " href="project-files.html.htm">Files</a>
                      <a className="nav-link " href="project-activity.html.htm">Activity</a>
                      <a className="nav-link " href="project-teams.html.htm">Teams</a>
                      <a className="nav-link " href="project-settings.html.htm">Settings</a>
                    </div>
                  </div>
                  {/* End Collapse */}
                  {/* Collapse */}
                  <div className="nav-item">
                    <a className="nav-link dropdown-toggle  collapsed" href="#" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuAuthentication" aria-expanded="false" aria-controls="navbarVerticalMenuAuthentication">
                      <i className="bi-shield-lock nav-icon" />
                      <span className="nav-link-title">Authentication</span>
                    </a>
                    <div id="navbarVerticalMenuAuthentication" className="nav-collapse collapse " data-bs-parent="#navbarVerticalMenu">
                      <div id="navbarVerticalMenuAuthenticationMenu">
                        {/* Collapse */}
                        <div className="nav-item">
                          <a className="nav-link dropdown-toggle " href="#navbarVerticalMenuAuthenticationLoginMenu" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuAuthenticationLoginMenu" aria-expanded="false" aria-controls="navbarVerticalMenuAuthenticationLoginMenu">
                            Log In
                          </a>
                          <div id="navbarVerticalMenuAuthenticationLoginMenu" className="nav-collapse collapse " data-bs-parent="#navbarVerticalMenuAuthenticationMenu">
                            <a className="nav-link " href="authentication-login-basic.html.htm">Basic</a>
                            <a className="nav-link " href="authentication-login-cover.html.htm">Cover</a>
                          </div>
                        </div>
                        {/* End Collapse */}
                        {/* Collapse */}
                        <div className="nav-item">
                          <a className="nav-link dropdown-toggle " href="#navbarVerticalMenuAuthenticationSignupMenu" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuAuthenticationSignupMenu" aria-expanded="false" aria-controls="navbarVerticalMenuAuthenticationSignupMenu">
                            Sign Up
                          </a>
                          <div id="navbarVerticalMenuAuthenticationSignupMenu" className="nav-collapse collapse " data-bs-parent="#navbarVerticalMenuAuthenticationMenu">
                            <a className="nav-link " href="authentication-signup-basic.html.htm">Basic</a>
                            <a className="nav-link " href="authentication-signup-cover.html.htm">Cover</a>
                          </div>
                        </div>
                        {/* End Collapse */}
                        {/* Collapse */}
                        <div className="nav-item">
                          <a className="nav-link dropdown-toggle " href="#navbarVerticalMenuAuthenticationResetPasswordMenu" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuAuthenticationResetPasswordMenu" aria-expanded="false" aria-controls="navbarVerticalMenuAuthenticationResetPasswordMenu">
                            Reset Password
                          </a>
                          <div id="navbarVerticalMenuAuthenticationResetPasswordMenu" className="nav-collapse collapse " data-bs-parent="#navbarVerticalMenuAuthenticationMenu">
                            <a className="nav-link " href="authentication-reset-password-basic.html.htm">Basic</a>
                            <a className="nav-link " href="authentication-reset-password-cover.html.htm">Cover</a>
                          </div>
                        </div>
                        {/* End Collapse */}
                        {/* Collapse */}
                        <div className="nav-item">
                          <a className="nav-link dropdown-toggle " href="#navbarVerticalMenuAuthenticationEmailVerificationMenu" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuAuthenticationEmailVerificationMenu" aria-expanded="false" aria-controls="navbarVerticalMenuAuthenticationEmailVerificationMenu">
                            Email Verification
                          </a>
                          <div id="navbarVerticalMenuAuthenticationEmailVerificationMenu" className="nav-collapse collapse " data-bs-parent="#navbarVerticalMenuAuthenticationMenu">
                            <a className="nav-link " href="authentication-email-verification-basic.html.htm">Basic</a>
                            <a className="nav-link " href="authentication-email-verification-cover.html.htm">Cover</a>
                          </div>
                        </div>
                        {/* End Collapse */}
                        {/* Collapse */}
                        <div className="nav-item">
                          <a className="nav-link dropdown-toggle " href="#navbarVerticalMenuAuthentication2StepVerificationMenu" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuAuthentication2StepVerificationMenu" aria-expanded="false" aria-controls="navbarVerticalMenuAuthentication2StepVerificationMenu">
                            2-step Verification
                          </a>
                          <div id="navbarVerticalMenuAuthentication2StepVerificationMenu" className="nav-collapse collapse " data-bs-parent="#navbarVerticalMenuAuthenticationMenu">
                            <a className="nav-link " href="authentication-2-step-verification-basic.html.htm">Basic</a>
                            <a className="nav-link " href="authentication-2-step-verification-cover.html.htm">Cover</a>
                          </div>
                        </div>
                        {/* End Collapse */}
                        <a className="nav-link" href="javascript:;" data-bs-toggle="modal" data-bs-target="#welcomeMessageModal">Welcome Message</a>
                        <a className="nav-link " href="error-404.html.htm">Error 404</a>
                        <a className="nav-link " href="error-500.html.htm">Error 500</a>
                      </div>
                    </div>
                  </div>
                  {/* End Collapse */}
                  <div className="nav-item">
                    <a className="nav-link " href="api-keys.html.htm" data-placement="left">
                      <i className="bi-key nav-icon" />
                      <span className="nav-link-title">API Keys</span>
                    </a>
                  </div>
                  <div className="nav-item">
                    <a className="nav-link " href="welcome-page.html.htm" data-placement="left">
                      <i className="bi-eye nav-icon" />
                      <span className="nav-link-title">Welcome Page</span>
                    </a>
                  </div>
                  <div className="nav-item">
                    <a className="nav-link " href="landing.html.htm" data-placement="left">
                      <i className="bi-box-seam nav-icon" />
                      <span className="nav-link-title">Landing Page <span className="badge bg-info rounded-pill ms-1">New</span></span>
                    </a>
                  </div>
                </div>
                {/* End Collapse */}
                <span className="dropdown-header mt-4">Apps</span>
                <small className="bi-three-dots nav-subtitle-replacer" />
                <div className="nav-item">
                  <a className="nav-link " href="apps-kanban.html.htm" data-placement="left">
                    <i className="bi-kanban nav-icon" />
                    <span className="nav-link-title">Kanban</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a className="nav-link " href="apps-calendar.html.htm" data-placement="left">
                    <i className="bi-calendar-week nav-icon" />
                    <span className="nav-link-title">Calendar</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a className="nav-link " href="apps-invoice-generator.html.htm" data-placement="left">
                    <i className="bi-receipt nav-icon" />
                    <span className="nav-link-title">Invoice Generator</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a className="nav-link " href="apps-file-manager.html.htm" data-placement="left">
                    <i className="bi-folder2-open nav-icon" />
                    <span className="nav-link-title">File Manager</span>
                  </a>
                </div>
                <span className="dropdown-header mt-4">Layouts</span>
                <small className="bi-three-dots nav-subtitle-replacer" />
                <div className="nav-item">
                  <a className="nav-link " href="layouts/index.html.htm" data-placement="left">
                    <i className="bi-grid-1x2 nav-icon" />
                    <span className="nav-link-title">Layouts</span>
                  </a>
                </div>
                <span className="dropdown-header mt-4">Documentation</span>
                <small className="bi-three-dots nav-subtitle-replacer" />
                <div className="nav-item">
                  <a className="nav-link " href="documentation/index.html.htm" data-placement="left">
                    <i className="bi-book nav-icon" />
                    <span className="nav-link-title">Documentation <span className="badge bg-primary rounded-pill ms-1">v2.1.1</span></span>
                  </a>
                </div>
                <div className="nav-item">
                  <a className="nav-link " href="documentation/typography.html.htm" data-placement="left">
                    <i className="bi-layers nav-icon" />
                    <span className="nav-link-title">Components</span>
                  </a>
                </div>
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
      {/* End Navbar Vertical */}
      <main id="content" role="main" className="main">
        {/* Content */}
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row align-items-center">
              <div className="col-sm mb-2 mb-sm-0">
                <h1 className="page-header-title">Dashboard</h1>
              </div>
              {/* End Col */}
              <div className="col-sm-auto">
                <a className="btn btn-primary" href="javascript:;" data-bs-toggle="modal" data-bs-target="#inviteUserModal">
                  <i className="bi-person-plus-fill me-1" /> Invite users
                </a>
              </div>
              {/* End Col */}
            </div>
            {/* End Row */}
          </div>
          {/* End Page Header */}
          {/* Stats */}
          <div className="row">
            <div className="col-sm-6 col-lg-3 mb-3 mb-lg-5">
              {/* Card */}
              <a className="card card-hover-shadow h-100" href="#">
                <div className="card-body">
                  <h6 className="card-subtitle">Total Users</h6>
                  <div className="row align-items-center gx-2 mb-1">
                    <div className="col-6">
                      <h2 className="card-title text-inherit">72,540</h2>
                    </div>
                    {/* End Col */}
                    <div className="col-6">
                      {/* Chart */}
                      <div className="chartjs-custom" style={{height: '3rem'}}>
                        <canvas className="js-chart" data-hs-chartjs-options="{
                            &quot;type&quot;: &quot;line&quot;,
                            &quot;data&quot;: {
                               &quot;labels&quot;: [&quot;1 May&quot;,&quot;2 May&quot;,&quot;3 May&quot;,&quot;4 May&quot;,&quot;5 May&quot;,&quot;6 May&quot;,&quot;7 May&quot;,&quot;8 May&quot;,&quot;9 May&quot;,&quot;10 May&quot;,&quot;11 May&quot;,&quot;12 May&quot;,&quot;13 May&quot;,&quot;14 May&quot;,&quot;15 May&quot;,&quot;16 May&quot;,&quot;17 May&quot;,&quot;18 May&quot;,&quot;19 May&quot;,&quot;20 May&quot;,&quot;21 May&quot;,&quot;22 May&quot;,&quot;23 May&quot;,&quot;24 May&quot;,&quot;25 May&quot;,&quot;26 May&quot;,&quot;27 May&quot;,&quot;28 May&quot;,&quot;29 May&quot;,&quot;30 May&quot;,&quot;31 May&quot;],
                               &quot;datasets&quot;: [{
                                &quot;data&quot;: [21,20,24,20,18,17,15,17,18,30,31,30,30,35,25,35,35,40,60,90,90,90,85,70,75,70,30,30,30,50,72],
                                &quot;backgroundColor&quot;: [&quot;rgba(55, 125, 255, 0)&quot;, &quot;rgba(255, 255, 255, 0)&quot;],
                                &quot;borderColor&quot;: &quot;#377dff&quot;,
                                &quot;borderWidth&quot;: 2,
                                &quot;pointRadius&quot;: 0,
                                &quot;pointHoverRadius&quot;: 0
                              }]
                            },
                            &quot;options&quot;: {
                               &quot;scales&quot;: {
                                 &quot;yAxes&quot;: [{
                                   &quot;display&quot;: false
                                 }],
                                 &quot;xAxes&quot;: [{
                                   &quot;display&quot;: false
                                 }]
                               },
                              &quot;hover&quot;: {
                                &quot;mode&quot;: &quot;nearest&quot;,
                                &quot;intersect&quot;: false
                              },
                              &quot;tooltips&quot;: {
                                &quot;postfix&quot;: &quot;k&quot;,
                                &quot;hasIndicator&quot;: true,
                                &quot;intersect&quot;: false
                              }
                            }
                          }">
                        </canvas>
                      </div>
                      {/* End Chart */}
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                  <span className="badge bg-soft-success text-success">
                    <i className="bi-graph-up" /> 12.5%
                  </span>
                  <span className="text-body fs-6 ms-1">from 70,104</span>
                </div>
              </a>
              {/* End Card */}
            </div>
            <div className="col-sm-6 col-lg-3 mb-3 mb-lg-5">
              {/* Card */}
              <a className="card card-hover-shadow h-100" href="#">
                <div className="card-body">
                  <h6 className="card-subtitle">Sessions</h6>
                  <div className="row align-items-center gx-2 mb-1">
                    <div className="col-6">
                      <h2 className="card-title text-inherit">29.4%</h2>
                    </div>
                    {/* End Col */}
                    <div className="col-6">
                      {/* Chart */}
                      <div className="chartjs-custom" style={{height: '3rem'}}>
                        <canvas className="js-chart" data-hs-chartjs-options="{
                            &quot;type&quot;: &quot;line&quot;,
                            &quot;data&quot;: {
                               &quot;labels&quot;: [&quot;1 May&quot;,&quot;2 May&quot;,&quot;3 May&quot;,&quot;4 May&quot;,&quot;5 May&quot;,&quot;6 May&quot;,&quot;7 May&quot;,&quot;8 May&quot;,&quot;9 May&quot;,&quot;10 May&quot;,&quot;11 May&quot;,&quot;12 May&quot;,&quot;13 May&quot;,&quot;14 May&quot;,&quot;15 May&quot;,&quot;16 May&quot;,&quot;17 May&quot;,&quot;18 May&quot;,&quot;19 May&quot;,&quot;20 May&quot;,&quot;21 May&quot;,&quot;22 May&quot;,&quot;23 May&quot;,&quot;24 May&quot;,&quot;25 May&quot;,&quot;26 May&quot;,&quot;27 May&quot;,&quot;28 May&quot;,&quot;29 May&quot;,&quot;30 May&quot;,&quot;31 May&quot;],
                               &quot;datasets&quot;: [{
                                &quot;data&quot;: [21,20,24,20,18,17,15,17,30,30,35,25,18,30,31,35,35,90,90,90,85,100,120,120,120,100,90,75,75,75,90],
                                &quot;backgroundColor&quot;: [&quot;rgba(55, 125, 255, 0)&quot;, &quot;rgba(255, 255, 255, 0)&quot;],
                                &quot;borderColor&quot;: &quot;#377dff&quot;,
                                &quot;borderWidth&quot;: 2,
                                &quot;pointRadius&quot;: 0,
                                &quot;pointHoverRadius&quot;: 0
                              }]
                            },
                            &quot;options&quot;: {
                               &quot;scales&quot;: {
                                 &quot;yAxes&quot;: [{
                                   &quot;display&quot;: false
                                 }],
                                 &quot;xAxes&quot;: [{
                                   &quot;display&quot;: false
                                 }]
                               },
                              &quot;hover&quot;: {
                                &quot;mode&quot;: &quot;nearest&quot;,
                                &quot;intersect&quot;: false
                              },
                              &quot;tooltips&quot;: {
                                &quot;postfix&quot;: &quot;%&quot;,
                                &quot;hasIndicator&quot;: true,
                                &quot;intersect&quot;: false
                              }
                            }
                          }">
                        </canvas>
                      </div>
                      {/* End Chart */}
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                  <span className="badge bg-soft-success text-success">
                    <i className="bi-graph-up" /> 1.7%
                  </span>
                  <span className="text-body fs-6 ms-1">from 29.1%</span>
                </div>
              </a>
              {/* End Card */}
            </div>
            <div className="col-sm-6 col-lg-3 mb-3 mb-lg-5">
              {/* Card */}
              <a className="card card-hover-shadow h-100" href="#">
                <div className="card-body">
                  <h6 className="card-subtitle">Avg. Click Rate</h6>
                  <div className="row align-items-center gx-2 mb-1">
                    <div className="col-6">
                      <h2 className="card-title text-inherit">56.8%</h2>
                    </div>
                    {/* End Col */}
                    <div className="col-6">
                      {/* Chart */}
                      <div className="chartjs-custom" style={{height: '3rem'}}>
                        <canvas className="js-chart" data-hs-chartjs-options="{
                            &quot;type&quot;: &quot;line&quot;,
                            &quot;data&quot;: {
                               &quot;labels&quot;: [&quot;1 May&quot;,&quot;2 May&quot;,&quot;3 May&quot;,&quot;4 May&quot;,&quot;5 May&quot;,&quot;6 May&quot;,&quot;7 May&quot;,&quot;8 May&quot;,&quot;9 May&quot;,&quot;10 May&quot;,&quot;11 May&quot;,&quot;12 May&quot;,&quot;13 May&quot;,&quot;14 May&quot;,&quot;15 May&quot;,&quot;16 May&quot;,&quot;17 May&quot;,&quot;18 May&quot;,&quot;19 May&quot;,&quot;20 May&quot;,&quot;21 May&quot;,&quot;22 May&quot;,&quot;23 May&quot;,&quot;24 May&quot;,&quot;25 May&quot;,&quot;26 May&quot;,&quot;27 May&quot;,&quot;28 May&quot;,&quot;29 May&quot;,&quot;30 May&quot;,&quot;31 May&quot;],
                               &quot;datasets&quot;: [{
                                &quot;data&quot;: [25,18,30,31,35,35,60,60,60,75,21,20,24,20,18,17,15,17,30,120,120,120,100,90,75,90,90,90,75,70,60],
                                &quot;backgroundColor&quot;: [&quot;rgba(55, 125, 255, 0)&quot;, &quot;rgba(255, 255, 255, 0)&quot;],
                                &quot;borderColor&quot;: &quot;#377dff&quot;,
                                &quot;borderWidth&quot;: 2,
                                &quot;pointRadius&quot;: 0,
                                &quot;pointHoverRadius&quot;: 0
                              }]
                            },
                            &quot;options&quot;: {
                               &quot;scales&quot;: {
                                 &quot;yAxes&quot;: [{
                                   &quot;display&quot;: false
                                 }],
                                 &quot;xAxes&quot;: [{
                                   &quot;display&quot;: false
                                 }]
                               },
                              &quot;hover&quot;: {
                                &quot;mode&quot;: &quot;nearest&quot;,
                                &quot;intersect&quot;: false
                              },
                              &quot;tooltips&quot;: {
                                &quot;postfix&quot;: &quot;%&quot;,
                                &quot;hasIndicator&quot;: true,
                                &quot;intersect&quot;: false
                              }
                            }
                          }">
                        </canvas>
                      </div>
                      {/* End Chart */}
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                  <span className="badge bg-soft-danger text-danger">
                    <i className="bi-graph-down" /> 4.4%
                  </span>
                  <span className="text-body fs-6 ms-1">from 61.2%</span>
                </div>
              </a>
              {/* End Card */}
            </div>
            <div className="col-sm-6 col-lg-3 mb-3 mb-lg-5">
              {/* Card */}
              <a className="card card-hover-shadow h-100" href="#">
                <div className="card-body">
                  <h6 className="card-subtitle">Pageviews</h6>
                  <div className="row align-items-center gx-2 mb-1">
                    <div className="col-6">
                      <h2 className="card-title text-inherit">92,913</h2>
                    </div>
                    {/* End Col */}
                    <div className="col-6">
                      {/* Chart */}
                      <div className="chartjs-custom" style={{height: '3rem'}}>
                        <canvas className="js-chart" data-hs-chartjs-options="{
                            &quot;type&quot;: &quot;line&quot;,
                            &quot;data&quot;: {
                               &quot;labels&quot;: [&quot;1 May&quot;,&quot;2 May&quot;,&quot;3 May&quot;,&quot;4 May&quot;,&quot;5 May&quot;,&quot;6 May&quot;,&quot;7 May&quot;,&quot;8 May&quot;,&quot;9 May&quot;,&quot;10 May&quot;,&quot;11 May&quot;,&quot;12 May&quot;,&quot;13 May&quot;,&quot;14 May&quot;,&quot;15 May&quot;,&quot;16 May&quot;,&quot;17 May&quot;,&quot;18 May&quot;,&quot;19 May&quot;,&quot;20 May&quot;,&quot;21 May&quot;,&quot;22 May&quot;,&quot;23 May&quot;,&quot;24 May&quot;,&quot;25 May&quot;,&quot;26 May&quot;,&quot;27 May&quot;,&quot;28 May&quot;,&quot;29 May&quot;,&quot;30 May&quot;,&quot;31 May&quot;],
                               &quot;datasets&quot;: [{
                                &quot;data&quot;: [21,20,24,15,17,30,30,35,35,35,40,60,12,90,90,85,70,75,43,75,90,22,120,120,90,85,100,92,92,92,92],
                                &quot;backgroundColor&quot;: [&quot;rgba(55, 125, 255, 0)&quot;, &quot;rgba(255, 255, 255, 0)&quot;],
                                &quot;borderColor&quot;: &quot;#377dff&quot;,
                                &quot;borderWidth&quot;: 2,
                                &quot;pointRadius&quot;: 0,
                                &quot;pointHoverRadius&quot;: 0
                              }]
                            },
                            &quot;options&quot;: {
                               &quot;scales&quot;: {
                                 &quot;yAxes&quot;: [{
                                   &quot;display&quot;: false
                                 }],
                                 &quot;xAxes&quot;: [{
                                   &quot;display&quot;: false
                                 }]
                               },
                              &quot;hover&quot;: {
                                &quot;mode&quot;: &quot;nearest&quot;,
                                &quot;intersect&quot;: false
                              },
                              &quot;tooltips&quot;: {
                                &quot;postfix&quot;: &quot;k&quot;,
                                &quot;hasIndicator&quot;: true,
                                &quot;intersect&quot;: false
                              }
                            }
                          }">
                        </canvas>
                      </div>
                      {/* End Chart */}
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                  <span className="badge bg-soft-secondary text-body">0.0%</span>
                  <span className="text-body fs-6 ms-1">from 2,913</span>
                </div>
              </a>
              {/* End Card */}
            </div>
          </div>
          {/* End Stats */}
          <div className="row">
            <div className="col-lg-5 mb-3 mb-lg-5">
              {/* Card */}
              <div className="card h-100">
                {/* Header */}
                <div className="card-header card-header-content-between">
                  <h4 className="card-header-title">Import data into Front Dashboard</h4>
                  {/* Dropdown */}
                  <div className="dropdown">
                    <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle" id="reportsOverviewDropdown2" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="bi-three-dots-vertical" />
                    </button>
                    <div className="dropdown-menu dropdown-menu-end mt-1" aria-labelledby="reportsOverviewDropdown2">
                      <span className="dropdown-header">Settings</span>
                      <a className="dropdown-item" href="#">
                        <i className="bi-share-fill dropdown-item-icon" /> Share chart
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="bi-download dropdown-item-icon" /> Download
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="bi-alt dropdown-item-icon" /> Connect other apps
                      </a>
                      <div className="dropdown-divider" />
                      <span className="dropdown-header">Feedback</span>
                      <a className="dropdown-item" href="#">
                        <i className="bi-chat-left-dots dropdown-item-icon" /> Report
                      </a>
                    </div>
                  </div>
                  {/* End Dropdown */}
                </div>
                {/* End Header */}
                {/* Body */}
                <div className="card-body">
                  <p>See and talk to your users and leads immediately by importing your data into the Front Dashboard platform.</p>
                  <ul className="list-group list-group-flush list-group-no-gutters">
                    <li className="list-group-item">
                      <h5 className="card-title">Import users from:</h5>
                    </li>
                    {/* List Group Item */}
                    <li className="list-group-item">
                      <div className="d-flex">
                        <div className="flex-shrink-0">
                          <img className="avatar avatar-xs avatar-4x3" src="assets/svg/brands/capsule-icon.svg" alt="Image Description" />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <div className="row align-items-center">
                            <div className="col">
                              <h5 className="mb-0">Capsule</h5>
                              <span className="d-block fs-6 text-body">Users</span>
                            </div>
                            {/* End Col */}
                            <div className="col-auto">
                              <a className="btn btn-primary btn-sm" href="#" title="Launch importer" target="_blank">
                                Launch <span className="d-none d-sm-inline-block">importer</span>
                                <i className="bi-box-arrow-up-right ms-1" />
                              </a>
                            </div>
                            {/* End Col */}
                          </div>
                          {/* End Row */}
                        </div>
                      </div>
                    </li>
                    {/* End List Group Item */}
                    {/* List Group Item */}
                    <li className="list-group-item">
                      <div className="d-flex">
                        <div className="flex-shrink-0">
                          <img className="avatar avatar-xs avatar-4x3" src="assets/svg/brands/mailchimp-icon.svg" alt="Image Description" />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <div className="row align-items-center">
                            <div className="col">
                              <h5 className="mb-0">Mailchimp</h5>
                              <span className="d-block fs-6 text-body">Users</span>
                            </div>
                            {/* End Col */}
                            <div className="col-auto">
                              <a className="btn btn-primary btn-sm" href="#" title="Launch importer" target="_blank">
                                Launch <span className="d-none d-sm-inline-block">importer</span>
                                <i className="bi-box-arrow-up-right ms-1" />
                              </a>
                            </div>
                            {/* End Col */}
                          </div>
                          {/* End Row */}
                        </div>
                      </div>
                    </li>
                    {/* End List Group Item */}
                    {/* List Group Item */}
                    <li className="list-group-item">
                      <div className="d-flex">
                        <div className="flex-shrink-0">
                          <img className="avatar avatar-xs avatar-4x3" src="assets/svg/brands/google-webdev-icon.svg" alt="Image Description" />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <div className="row align-items-center">
                            <div className="col">
                              <h5 className="mb-0">Webdev</h5>
                              <span className="d-block fs-6 text-body">Users</span>
                            </div>
                            {/* End Col */}
                            <div className="col-auto">
                              <a className="btn btn-primary btn-sm" href="#" title="Launch importer" target="_blank">
                                Launch <span className="d-none d-sm-inline-block">importer</span>
                                <i className="bi-box-arrow-up-right ms-1" />
                              </a>
                            </div>
                            {/* End Col */}
                          </div>
                          {/* End Row */}
                        </div>
                      </div>
                    </li>
                    {/* End List Group Item */}
                    <li className="list-group-item"><span className="small text-muted">Or you can <a className="link" href="#">sync data to Front Dashboard</a> to ensure your data is always up-to-date.</span></li>
                  </ul>
                </div>
                {/* End Body */}
              </div>
              {/* End Card */}
            </div>
            {/* End Col */}
            <div className="col-lg-7 mb-3 mb-lg-5">
              {/* Card */}
              <div className="card h-100">
                {/* Header */}
                <div className="card-header card-header-content-sm-between">
                  <h4 className="card-header-title mb-2 mb-sm-0">Monthly expenses</h4>
                  {/* Nav */}
                  <ul className="nav nav-segment nav-fill" id="expensesTab" role="tablist">
                    <li className="nav-item" data-bs-toggle="chart-bar" data-datasets="thisWeek" data-trigger="click" data-action="toggle">
                      <a className="nav-link active" href="javascript:;" data-bs-toggle="tab">This week</a>
                    </li>
                    <li className="nav-item" data-bs-toggle="chart-bar" data-datasets="lastWeek" data-trigger="click" data-action="toggle">
                      <a className="nav-link" href="javascript:;" data-bs-toggle="tab">Last week</a>
                    </li>
                  </ul>
                  {/* End Nav */}
                </div>
                {/* End Header */}
                {/* Body */}
                <div className="card-body">
                  <div className="row mb-4">
                    <div className="col-sm mb-2 mb-sm-0">
                      <div className="d-flex align-items-center">
                        <span className="h1 mb-0">35%</span>
                        <span className="text-success ms-2">
                          <i className="bi-graph-up" /> 25.3%
                        </span>
                      </div>
                    </div>
                    {/* End Col */}
                    <div className="col-sm-auto align-self-sm-end">
                      <div className="row fs-6 text-body">
                        <div className="col-auto">
                          <span className="legend-indicator bg-primary" /> New
                        </div>
                        {/* End Col */}
                        <div className="col-auto">
                          <span className="legend-indicator" /> Overdue
                        </div>
                        {/* End Col */}
                      </div>
                      {/* End Row */}
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                  {/* Bar Chart */}
                  <div className="chartjs-custom">
                    <canvas id="updatingBarChart" style={{height: '20rem'}} data-hs-chartjs-options="{
                        &quot;type&quot;: &quot;bar&quot;,
                        &quot;data&quot;: {
                          &quot;labels&quot;: [&quot;May 1&quot;, &quot;May 2&quot;, &quot;May 3&quot;, &quot;May 4&quot;, &quot;May 5&quot;, &quot;May 6&quot;, &quot;May 7&quot;, &quot;May 8&quot;, &quot;May 9&quot;, &quot;May 10&quot;],
                          &quot;datasets&quot;: [{
                            &quot;data&quot;: [200, 300, 290, 350, 150, 350, 300, 100, 125, 220],
                            &quot;backgroundColor&quot;: &quot;#377dff&quot;,
                            &quot;hoverBackgroundColor&quot;: &quot;#377dff&quot;,
                            &quot;borderColor&quot;: &quot;#377dff&quot;
                          },
                          {
                            &quot;data&quot;: [150, 230, 382, 204, 169, 290, 300, 100, 300, 225, 120],
                            &quot;backgroundColor&quot;: &quot;#e7eaf3&quot;,
                            &quot;borderColor&quot;: &quot;#e7eaf3&quot;
                          }]
                        },
                        &quot;options&quot;: {
                          &quot;scales&quot;: {
                            &quot;yAxes&quot;: [{
                              &quot;gridLines&quot;: {
                                &quot;color&quot;: &quot;#e7eaf3&quot;,
                                &quot;drawBorder&quot;: false,
                                &quot;zeroLineColor&quot;: &quot;#e7eaf3&quot;
                              },
                              &quot;ticks&quot;: {
                                &quot;beginAtZero&quot;: true,
                                &quot;stepSize&quot;: 100,
                                &quot;fontSize&quot;: 12,
                                &quot;fontColor&quot;:  &quot;#97a4af&quot;,
                                &quot;fontFamily&quot;: &quot;Open Sans, sans-serif&quot;,
                                &quot;padding&quot;: 10,
                                &quot;postfix&quot;: &quot;$&quot;
                              }
                            }],
                            &quot;xAxes&quot;: [{
                              &quot;gridLines&quot;: {
                                &quot;display&quot;: false,
                                &quot;drawBorder&quot;: false
                              },
                              &quot;ticks&quot;: {
                                &quot;fontSize&quot;: 12,
                                &quot;fontColor&quot;:  &quot;#97a4af&quot;,
                                &quot;fontFamily&quot;: &quot;Open Sans, sans-serif&quot;,
                                &quot;padding&quot;: 5
                              },
                              &quot;categoryPercentage&quot;: 0.5,
                              &quot;maxBarThickness&quot;: &quot;10&quot;
                            }]
                          },
                          &quot;cornerRadius&quot;: 2,
                          &quot;tooltips&quot;: {
                            &quot;prefix&quot;: &quot;$&quot;,
                            &quot;hasIndicator&quot;: true,
                            &quot;mode&quot;: &quot;index&quot;,
                            &quot;intersect&quot;: false
                          },
                          &quot;hover&quot;: {
                            &quot;mode&quot;: &quot;nearest&quot;,
                            &quot;intersect&quot;: true
                          }
                        }
                      }" />
                  </div>
                  {/* End Bar Chart */}
                </div>
                {/* End Body */}
              </div>
              {/* End Card */}
            </div>
            {/* End Col */}
          </div>
          {/* End Row */}
          {/* Card */}
          <div className="card mb-3 mb-lg-5">
            {/* Header */}
            <div className="card-header">
              <div className="row justify-content-between align-items-center flex-grow-1">
                <div className="col-md">
                  <div className="d-flex justify-content-between align-items-center">
                    <h4 className="card-header-title">Users</h4>
                    {/* Datatable Info */}
                    <div id="datatableCounterInfo" style={{display: 'none'}}>
                      <div className="d-flex align-items-center">
                        <span className="fs-6 me-3">
                          <span id="datatableCounter">0</span>
                          Selected
                        </span>
                        <a className="btn btn-outline-danger btn-sm" href="javascript:;">
                          <i className="tio-delete-outlined" /> Delete
                        </a>
                      </div>
                    </div>
                    {/* End Datatable Info */}
                  </div>
                </div>
                {/* End Col */}
                <div className="col-auto">
                  {/* Filter */}
                  <div className="row align-items-sm-center">
                    <div className="col-sm-auto">
                      <div className="row align-items-center gx-0">
                        <div className="col">
                          <span className="text-secondary me-2">Status:</span>
                        </div>
                        {/* End Col */}
                        <div className="col-auto">
                          {/* Select */}
                          <div className="tom-select-custom tom-select-custom-end">
                            <select className="js-select js-datatable-filter form-select form-select-sm form-select-borderless" data-target-column-index={2} data-target-table="datatable" autoComplete="off" data-hs-tom-select-options="{
                                &quot;searchInDropdown&quot;: false,
                                &quot;hideSearch&quot;: true,
                                &quot;dropdownWidth&quot;: &quot;10rem&quot;
                              }">
                              <option value="null" selected>All</option>
                              <option value="successful">Successful</option>
                              <option value="overdue">Overdue</option>
                              <option value="pending">Pending</option>
                            </select>
                          </div>
                          {/* End Select */}
                        </div>
                        {/* End Col */}
                      </div>
                      {/* End Row */}
                    </div>
                    {/* End Col */}
                    <div className="col-sm-auto">
                      <div className="row align-items-center gx-0">
                        <div className="col">
                          <span className="text-secondary me-2">Signed up:</span>
                        </div>
                        {/* End Col */}
                        <div className="col-auto">
                          {/* Select */}
                          <div className="tom-select-custom tom-select-custom-end">
                            <select className="js-select js-datatable-filter form-select form-select-sm form-select-borderless" data-target-column-index={5} data-target-table="datatable" autoComplete="off" data-hs-tom-select-options="{
                                &quot;searchInDropdown&quot;: false,
                                &quot;hideSearch&quot;: true,
                                &quot;dropdownWidth&quot;: &quot;10rem&quot;
                              }">
                              <option value="null" selected>All</option>
                              <option value="1 year ago">1 year ago</option>
                              <option value="6 months ago">6 months ago</option>
                            </select>
                          </div>
                          {/* End Select */}
                        </div>
                        {/* End Col */}
                      </div>
                      {/* End Row */}
                    </div>
                    {/* End Col */}
                    <div className="col-md">
                      <form>
                        {/* Search */}
                        <div className="input-group input-group-merge input-group-flush">
                          <div className="input-group-prepend input-group-text">
                            <i className="bi-search" />
                          </div>
                          <input id="datatableSearch" type="search" className="form-control" placeholder="Search users" aria-label="Search users" />
                        </div>
                        {/* End Search */}
                      </form>
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Filter */}
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            {/* End Header */}
            {/* Table */}
            <div className="table-responsive datatable-custom">
              <table id="datatable" className="table table-borderless table-thead-bordered table-nowrap table-align-middle card-table" data-hs-datatables-options="{
                 &quot;columnDefs&quot;: [{
                    &quot;targets&quot;: [0, 1, 4],
                    &quot;orderable&quot;: false
                  }],
                 &quot;order&quot;: [],
                 &quot;info&quot;: {
                   &quot;totalQty&quot;: &quot;#datatableWithPaginationInfoTotalQty&quot;
                 },
                 &quot;search&quot;: &quot;#datatableSearch&quot;,
                 &quot;entries&quot;: &quot;#datatableEntries&quot;,
                 &quot;pageLength&quot;: 8,
                 &quot;isResponsive&quot;: false,
                 &quot;isShowPaging&quot;: false,
                 &quot;pagination&quot;: &quot;datatablePagination&quot;
               }">
                <thead className="thead-light">
                  <tr>
                    <th scope="col" className="table-column-pe-0">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="datatableCheckAll" />
                        <label className="form-check-label" htmlFor="datatableCheckAll" />
                      </div>
                    </th>
                    <th className="table-column-ps-0">Full name</th>
                    <th>Status</th>
                    <th>Type</th>
                    <th>Email</th>
                    <th>Signed up</th>
                    <th>User ID</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="table-column-pe-0">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="usersDataCheck2" />
                        <label className="form-check-label" htmlFor="usersDataCheck2" />
                      </div>
                    </td>
                    <td className="table-column-ps-0">
                      <a className="d-flex align-items-center" href="user-profile.html.htm">
                        <div className="flex-shrink-0">
                          <div className="avatar avatar-sm avatar-circle">
                            <img className="avatar-img" src="assets/img/160x160/img10.jpg" alt="Image Description" />
                          </div>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h5 className="text-inherit mb-0">Amanda Harvey <i className="bi-patch-check-fill text-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Top endorsed" /></h5>
                        </div>
                      </a>
                    </td>
                    <td>
                      <span className="legend-indicator bg-success" />Successful
                    </td>
                    <td>Unassigned</td>
                    <td>amanda@site.com</td>
                    <td>1 year ago</td>
                    <td>67989</td>
                  </tr>
                  <tr>
                    <td className="table-column-pe-0">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="usersDataCheck3" />
                        <label className="form-check-label" htmlFor="usersDataCheck3" />
                      </div>
                    </td>
                    <td className="table-column-ps-0">
                      <a className="d-flex align-items-center" href="user-profile.html.htm">
                        <div className="flex-shrink-0">
                          <div className="avatar avatar-sm avatar-soft-primary avatar-circle">
                            <span className="avatar-initials">A</span>
                          </div>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h5 className="text-inherit mb-0">Anne Richard</h5>
                        </div>
                      </a>
                    </td>
                    <td>
                      <span className="legend-indicator bg-success" />Successful
                    </td>
                    <td>Subscription</td>
                    <td>anne@site.com</td>
                    <td>6 months ago</td>
                    <td>67326</td>
                  </tr>
                  <tr>
                    <td className="table-column-pe-0">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="usersDataCheck4" />
                        <label className="form-check-label" htmlFor="usersDataCheck4" />
                      </div>
                    </td>
                    <td className="table-column-ps-0">
                      <a className="d-flex align-items-center" href="user-profile.html.htm">
                        <div className="flex-shrink-0">
                          <div className="avatar avatar-sm avatar-circle">
                            <img className="avatar-img" src="assets/img/160x160/img3.jpg" alt="Image Description" />
                          </div>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h5 className="text-inherit mb-0">David Harrison</h5>
                        </div>
                      </a>
                    </td>
                    <td>
                      <span className="legend-indicator bg-danger" />Overdue
                    </td>
                    <td>Non-subscription</td>
                    <td>david@site.com</td>
                    <td>6 months ago</td>
                    <td>55821</td>
                  </tr>
                  <tr>
                    <td className="table-column-pe-0">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="usersDataCheck5" />
                        <label className="form-check-label" htmlFor="usersDataCheck5" />
                      </div>
                    </td>
                    <td className="table-column-ps-0">
                      <a className="d-flex align-items-center" href="user-profile.html.htm">
                        <div className="flex-shrink-0">
                          <div className="avatar avatar-sm avatar-circle">
                            <img className="avatar-img" src="assets/img/160x160/img5.jpg" alt="Image Description" />
                          </div>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h5 className="text-inherit mb-0">Finch Hoot</h5>
                        </div>
                      </a>
                    </td>
                    <td>
                      <span className="legend-indicator bg-warning" />Pending
                    </td>
                    <td>Subscription</td>
                    <td>finch@site.com</td>
                    <td>1 year ago</td>
                    <td>85214</td>
                  </tr>
                  <tr>
                    <td className="table-column-pe-0">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="usersDataCheck6" />
                        <label className="form-check-label" htmlFor="usersDataCheck6" />
                      </div>
                    </td>
                    <td className="table-column-ps-0">
                      <a className="d-flex align-items-center" href="user-profile.html.htm">
                        <div className="flex-shrink-0">
                          <div className="avatar avatar-sm avatar-soft-dark avatar-circle">
                            <span className="avatar-initials">B</span>
                          </div>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h5 className="text-inherit mb-0">Bob Dean</h5>
                        </div>
                      </a>
                    </td>
                    <td>
                      <span className="legend-indicator bg-success" />Successful
                    </td>
                    <td>Subscription</td>
                    <td>bob@site.com</td>
                    <td>6 months ago</td>
                    <td>75470</td>
                  </tr>
                  <tr>
                    <td className="table-column-pe-0">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="usersDataCheck7" />
                        <label className="form-check-label" htmlFor="usersDataCheck7" />
                      </div>
                    </td>
                    <td className="table-column-ps-0">
                      <a className="d-flex align-items-center" href="user-profile.html.htm">
                        <div className="flex-shrink-0">
                          <div className="avatar avatar-sm avatar-circle">
                            <img className="avatar-img" src="assets/img/160x160/img9.jpg" alt="Image Description" />
                          </div>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h5 className="text-inherit mb-0">Ella Lauda <i className="bi-patch-check-fill text-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Top endorsed" /></h5>
                        </div>
                      </a>
                    </td>
                    <td>
                      <span className="legend-indicator bg-warning" />Pending
                    </td>
                    <td>Subscription</td>
                    <td>Ella@site.com</td>
                    <td>1 year ago</td>
                    <td>37534</td>
                  </tr>
                  <tr>
                    <td className="table-column-pe-0">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="usersDataCheck8" />
                        <label className="form-check-label" htmlFor="usersDataCheck8" />
                      </div>
                    </td>
                    <td className="table-column-ps-0">
                      <a className="d-flex align-items-center" href="user-profile.html.htm">
                        <div className="flex-shrink-0">
                          <div className="avatar avatar-sm avatar-circle">
                            <img className="avatar-img" src="assets/img/160x160/img4.jpg" alt="Image Description" />
                          </div>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h5 className="text-inherit mb-0">Sam Kart</h5>
                        </div>
                      </a>
                    </td>
                    <td>
                      <span className="legend-indicator bg-success" />Successful
                    </td>
                    <td>Non-subscription</td>
                    <td>sam@site.com</td>
                    <td>1 year ago</td>
                    <td>57300</td>
                  </tr>
                  <tr>
                    <td className="table-column-pe-0">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="usersDataCheck9" />
                        <label className="form-check-label" htmlFor="usersDataCheck9" />
                      </div>
                    </td>
                    <td className="table-column-ps-0">
                      <a className="d-flex align-items-center" href="user-profile.html.htm">
                        <div className="flex-shrink-0">
                          <div className="avatar avatar-sm avatar-circle">
                            <img className="avatar-img" src="assets/img/160x160/img6.jpg" alt="Image Description" />
                          </div>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h5 className="text-inherit mb-0">Costa Quinn</h5>
                        </div>
                      </a>
                    </td>
                    <td>
                      <span className="legend-indicator bg-danger" />Overdue
                    </td>
                    <td>Unassigned</td>
                    <td>costa@site.com</td>
                    <td>1 year ago</td>
                    <td>71288</td>
                  </tr>
                  <tr>
                    <td className="table-column-pe-0">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="usersDataCheck10" />
                        <label className="form-check-label" htmlFor="usersDataCheck10" />
                      </div>
                    </td>
                    <td className="table-column-ps-0">
                      <a className="d-flex align-items-center" href="user-profile.html.htm">
                        <div className="flex-shrink-0">
                          <div className="avatar avatar-sm avatar-soft-primary avatar-circle">
                            <span className="avatar-initials">R</span>
                          </div>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h5 className="text-inherit mb-0">Rachel Doe</h5>
                        </div>
                      </a>
                    </td>
                    <td>
                      <span className="legend-indicator bg-warning" />Pending
                    </td>
                    <td>Unassigned</td>
                    <td>rachel@site.com</td>
                    <td>6 months ago</td>
                    <td>95211</td>
                  </tr>
                  <tr>
                    <td className="table-column-pe-0">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="usersDataCheck11" />
                        <label className="form-check-label" htmlFor="usersDataCheck11" />
                      </div>
                    </td>
                    <td className="table-column-ps-0">
                      <a className="d-flex align-items-center" href="user-profile.html.htm">
                        <div className="flex-shrink-0">
                          <div className="avatar avatar-sm avatar-soft-dark avatar-circle">
                            <span className="avatar-initials">B</span>
                          </div>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h5 className="text-inherit mb-0">Brian Halligan</h5>
                        </div>
                      </a>
                    </td>
                    <td>
                      <span className="legend-indicator bg-warning" />Pending
                    </td>
                    <td>Subscription</td>
                    <td>brian@site.com</td>
                    <td>1 year ago</td>
                    <td>58643</td>
                  </tr>
                  <tr>
                    <td className="table-column-pe-0">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="usersDataCheck12" />
                        <label className="form-check-label" htmlFor="usersDataCheck12" />
                      </div>
                    </td>
                    <td className="table-column-ps-0">
                      <a className="d-flex align-items-center" href="user-profile.html.htm">
                        <div className="flex-shrink-0">
                          <div className="avatar avatar-sm avatar-circle">
                            <img className="avatar-img" src="assets/img/160x160/img8.jpg" alt="Image Description" />
                          </div>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h5 className="text-inherit mb-0">Linda Bates</h5>
                        </div>
                      </a>
                    </td>
                    <td>
                      <span className="legend-indicator bg-warning" />Pending
                    </td>
                    <td>Subscription</td>
                    <td>linda@site.com</td>
                    <td>1 year ago</td>
                    <td>44414</td>
                  </tr>
                  <tr>
                    <td className="table-column-pe-0">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="usersDataCheck13" />
                        <label className="form-check-label" htmlFor="usersDataCheck13" />
                      </div>
                    </td>
                    <td className="table-column-ps-0">
                      <a className="d-flex align-items-center" href="user-profile.html.htm">
                        <div className="flex-shrink-0">
                          <div className="avatar avatar-sm avatar-soft-info avatar-circle">
                            <span className="avatar-initials">C</span>
                          </div>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h5 className="text-inherit mb-0">Chris Mathew <i className="bi-patch-check-fill text-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Top endorsed" /></h5>
                        </div>
                      </a>
                    </td>
                    <td>
                      <span className="legend-indicator bg-success" />Successful
                    </td>
                    <td>Non-subscription</td>
                    <td>chris@site.com</td>
                    <td>1 year ago</td>
                    <td>12569</td>
                  </tr>
                  <tr>
                    <td className="table-column-pe-0">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="usersDataCheck14" />
                        <label className="form-check-label" htmlFor="usersDataCheck14" />
                      </div>
                    </td>
                    <td className="table-column-ps-0">
                      <a className="d-flex align-items-center" href="user-profile.html.htm">
                        <div className="flex-shrink-0">
                          <div className="avatar avatar-sm avatar-soft-dark avatar-circle">
                            <span className="avatar-initials">L</span>
                          </div>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h5 className="text-inherit mb-0">Lewis Clarke</h5>
                        </div>
                      </a>
                    </td>
                    <td>
                      <span className="legend-indicator bg-danger" />Overdue
                    </td>
                    <td>Non-subscription</td>
                    <td>lewis@site.com</td>
                    <td>1 year ago</td>
                    <td>54621</td>
                  </tr>
                  <tr>
                    <td className="table-column-pe-0">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="usersDataCheck15" />
                        <label className="form-check-label" htmlFor="usersDataCheck15" />
                      </div>
                    </td>
                    <td className="table-column-ps-0">
                      <a className="d-flex align-items-center" href="user-profile.html.htm">
                        <div className="flex-shrink-0">
                          <div className="avatar avatar-sm avatar-circle">
                            <img className="avatar-img" src="assets/img/160x160/img7.jpg" alt="Image Description" />
                          </div>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h5 className="text-inherit mb-0">Clarice Boone <i className="bi-patch-check-fill text-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Top endorsed" /></h5>
                        </div>
                      </a>
                    </td>
                    <td>
                      <span className="legend-indicator bg-success" />Successful
                    </td>
                    <td>Non-subscription</td>
                    <td>clarice@site.com</td>
                    <td>6 months ago</td>
                    <td>23485</td>
                  </tr>
                  <tr>
                    <td className="table-column-pe-0">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="usersDataCheck16" />
                        <label className="form-check-label" htmlFor="usersDataCheck16" />
                      </div>
                    </td>
                    <td className="table-column-ps-0">
                      <a className="d-flex align-items-center" href="user-profile.html.htm">
                        <div className="flex-shrink-0">
                          <div className="avatar avatar-sm avatar-soft-danger avatar-circle">
                            <span className="avatar-initials">M</span>
                          </div>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h5 className="text-inherit mb-0">Mark Colbert</h5>
                        </div>
                      </a>
                    </td>
                    <td>
                      <span className="legend-indicator bg-success" />Successful
                    </td>
                    <td>Subscription</td>
                    <td>mark@site.com</td>
                    <td>6 months ago</td>
                    <td>78463</td>
                  </tr>
                  <tr>
                    <td className="table-column-pe-0">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="usersDataCheck17" />
                        <label className="form-check-label" htmlFor="usersDataCheck17" />
                      </div>
                    </td>
                    <td className="table-column-ps-0">
                      <a className="d-flex align-items-center" href="user-profile.html.htm">
                        <div className="flex-shrink-0">
                          <div className="avatar avatar-sm avatar-soft-info avatar-circle">
                            <span className="avatar-initials">J</span>
                          </div>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h5 className="text-inherit mb-0">Johnny Appleseed</h5>
                        </div>
                      </a>
                    </td>
                    <td>
                      <span className="legend-indicator bg-warning" />Pending
                    </td>
                    <td>Subscription</td>
                    <td>johnny@site.com</td>
                    <td>1 year ago</td>
                    <td>23564</td>
                  </tr>
                  <tr>
                    <td className="table-column-pe-0">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="usersDataCheck18" />
                        <label className="form-check-label" htmlFor="usersDataCheck18" />
                      </div>
                    </td>
                    <td className="table-column-ps-0">
                      <a className="d-flex align-items-center" href="user-profile.html.htm">
                        <div className="flex-shrink-0">
                          <div className="avatar avatar-sm avatar-soft-primary avatar-circle">
                            <span className="avatar-initials">P</span>
                          </div>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h5 className="text-inherit mb-0">Phileas Fogg</h5>
                        </div>
                      </a>
                    </td>
                    <td>
                      <span className="legend-indicator bg-warning" />Pending
                    </td>
                    <td>Subscription</td>
                    <td>phileas@site.com</td>
                    <td>6 months ago</td>
                    <td>39199</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* End Table */}
            {/* Footer */}
            <div className="card-footer">
              {/* Pagination */}
              <div className="row justify-content-center justify-content-sm-between align-items-sm-center">
                <div className="col-sm mb-2 mb-sm-0">
                  <div className="d-flex justify-content-center justify-content-sm-start align-items-center">
                    <span className="me-2">Showing:</span>
                    {/* Select */}
                    <div className="tom-select-custom">
                      <select id="datatableEntries" className="js-select form-select form-select-borderless w-auto" autoComplete="off" data-hs-tom-select-options="{
                          &quot;searchInDropdown&quot;: false,
                          &quot;hideSearch&quot;: true
                        }">
                        <option value={4}>4</option>
                        <option value={6}>6</option>
                        <option value={8} selected>8</option>
                        <option value={12}>12</option>
                      </select>
                    </div>
                    {/* End Select */}
                    <span className="text-secondary me-2">of</span>
                    {/* Pagination Quantity */}
                    <span id="datatableWithPaginationInfoTotalQty" />
                  </div>
                </div>
                {/* End Col */}
                <div className="col-sm-auto">
                  <div className="d-flex justify-content-center justify-content-sm-end">
                    {/* Pagination */}
                    <nav id="datatablePagination" aria-label="Activity pagination" />
                  </div>
                </div>
                {/* End Col */}
              </div>
              {/* End Pagination */}
            </div>
            {/* End Footer */}
          </div>
          {/* End Card */}
          <div className="row">
            <div className="col-lg-6 mb-3 mb-lg-0">
              {/* Card */}
              <div className="card h-100">
                {/* Header */}
                <div className="card-header card-header-content-between">
                  <h4 className="card-header-title">Transactions</h4>
                  {/* Daterangepicker */}
                  <button id="js-daterangepicker-predefined" className="btn btn-ghost-secondary btn-sm dropdown-toggle">
                    <i className="bi-calendar-week" />
                    <span className="js-daterangepicker-predefined-preview ms-1" />
                  </button>
                  {/* End Daterangepicker */}
                </div>
                {/* End Header */}
                {/* Body */}
                <div className="card-body">
                  {/* Chart */}
                  <div className="chartjs-custom mx-auto" style={{height: '20rem'}}>
                    <canvas className="js-chart-datalabels" data-hs-chartjs-options="{
                            &quot;type&quot;: &quot;bubble&quot;,
                            &quot;data&quot;: {
                              &quot;datasets&quot;: [
                                {
                                  &quot;label&quot;: &quot;Label 1&quot;,
                                  &quot;data&quot;: [
                                    {&quot;x&quot;: 55, &quot;y&quot;: 65, &quot;r&quot;: 99}
                                  ],
                                  &quot;color&quot;: &quot;#fff&quot;,
                                  &quot;backgroundColor&quot;: &quot;rgba(55, 125, 255, 0.9)&quot;,
                                  &quot;borderColor&quot;: &quot;transparent&quot;
                                },
                                {
                                  &quot;label&quot;: &quot;Label 2&quot;,
                                  &quot;data&quot;: [
                                    {&quot;x&quot;: 33, &quot;y&quot;: 42, &quot;r&quot;: 65}
                                  ],
                                  &quot;color&quot;: &quot;#fff&quot;,
                                  &quot;backgroundColor&quot;: &quot;rgba(100, 0, 214, 0.8)&quot;,
                                  &quot;borderColor&quot;: &quot;transparent&quot;
                                },
                                {
                                  &quot;label&quot;: &quot;Label 3&quot;,
                                  &quot;data&quot;: [
                                    {&quot;x&quot;: 46, &quot;y&quot;: 26, &quot;r&quot;: 38}
                                  ],
                                  &quot;color&quot;: &quot;#fff&quot;,
                                  &quot;backgroundColor&quot;: &quot;#00c9db&quot;,
                                  &quot;borderColor&quot;: &quot;transparent&quot;
                                }
                              ]
                            },
                            &quot;options&quot;: {
                              &quot;scales&quot;: {
                                &quot;yAxes&quot;: [{
                                  &quot;gridLines&quot;: {
                                    &quot;display&quot;: false
                                  },
                                  &quot;ticks&quot;: {
                                    &quot;display&quot;: false,
                                    &quot;max&quot;: 100,
                                    &quot;beginAtZero&quot;: true
                                  }
                                }],
                                &quot;xAxes&quot;: [{
                                &quot;gridLines&quot;: {
                                    &quot;display&quot;: false
                                  },
                                  &quot;ticks&quot;: {
                                    &quot;display&quot;: false,
                                    &quot;max&quot;: 100,
                                    &quot;beginAtZero&quot;: true
                                  }
                                }]
                              },
                              &quot;tooltips&quot;: false
                            }
                          }" />
                  </div>
                  {/* End Chart */}
                  <div className="row justify-content-center">
                    <div className="col-auto">
                      <span className="legend-indicator bg-primary" /> New
                    </div>
                    {/* End Col */}
                    <div className="col-auto">
                      <span className="legend-indicator" style={{backgroundColor: '#7000f2'}} /> Pending
                    </div>
                    {/* End Col */}
                    <div className="col-auto">
                      <span className="legend-indicator bg-info" /> Failed
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                </div>
                {/* End Body */}
              </div>
              {/* End Card */}
            </div>
            <div className="col-lg-6">
              {/* Card */}
              <div className="card h-100">
                {/* Header */}
                <div className="card-header card-header-content-between">
                  <h4 className="card-header-title">Reports overview</h4>
                  {/* Dropdown */}
                  <div className="dropdown">
                    <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle" id="reportsOverviewDropdown1" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="bi-three-dots-vertical" />
                    </button>
                    <div className="dropdown-menu dropdown-menu-end mt-1" aria-labelledby="reportsOverviewDropdown1">
                      <span className="dropdown-header">Settings</span>
                      <a className="dropdown-item" href="#">
                        <i className="bi-share-fill dropdown-item-icon" /> Share reports
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="bi-download dropdown-item-icon" /> Download
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="bi-alt dropdown-item-icon" /> Connect other apps
                      </a>
                      <div className="dropdown-divider" />
                      <span className="dropdown-header">Feedback</span>
                      <a className="dropdown-item" href="#">
                        <i className="bi-chat-left-dots dropdown-item-icon" /> Report
                      </a>
                    </div>
                  </div>
                  {/* End Dropdown */}
                </div>
                {/* End Header */}
                {/* Body */}
                <div className="card-body">
                  <span className="h1 d-block mb-4">$7,431.14 USD</span>
                  {/* Progress */}
                  <div className="progress rounded-pill mb-2">
                    <div className="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} data-bs-toggle="tooltip" data-bs-placement="top" title="Gross value" />
                    <div className="progress-bar opacity-50" role="progressbar" style={{width: '33%'}} aria-valuenow={33} aria-valuemin={0} aria-valuemax={100} data-bs-toggle="tooltip" data-bs-placement="top" title="Net volume from sales" />
                    <div className="progress-bar opacity-25" role="progressbar" style={{width: '9%'}} aria-valuenow={9} aria-valuemin={0} aria-valuemax={100} data-bs-toggle="tooltip" data-bs-placement="top" title="New volume from sales" />
                  </div>
                  <div className="d-flex justify-content-between mb-4">
                    <span>0%</span>
                    <span>100%</span>
                  </div>
                  {/* End Progress */}
                  {/* Table */}
                  <div className="table-responsive">
                    <table className="table table-lg table-nowrap card-table mb-0">
                      <tbody><tr>
                          <th scope="row">
                            <span className="legend-indicator bg-primary" />Gross value
                          </th>
                          <td>$3,500.71</td>
                          <td>
                            <span className="badge bg-soft-success text-success">+12.1%</span>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <span className="legend-indicator bg-primary opacity-50" />Net volume from sales
                          </th>
                          <td>$2,980.45</td>
                          <td>
                            <span className="badge bg-soft-warning text-warning">+6.9%</span>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <span className="legend-indicator bg-primary opacity-25" />New volume from sales
                          </th>
                          <td>$950.00</td>
                          <td>
                            <span className="badge bg-soft-danger text-danger">-1.5%</span>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <span className="legend-indicator" />Other
                          </th>
                          <td>32</td>
                          <td>
                            <span className="badge bg-soft-success text-success">1.9%</span>
                          </td>
                        </tr>
                      </tbody></table>
                  </div>
                  {/* End Table */}
                </div>
                {/* End Body */}
              </div>
              {/* End Card */}
            </div>
          </div>
        </div>
        {/* End Content */}
        {/* Footer */}
        <div className="footer">
          <div className="row justify-content-between align-items-center">
            <div className="col">
              <p className="fs-6 mb-0">© Front. <span className="d-none d-sm-inline-block">2022 Htmlstream.</span></p>
            </div>
            {/* End Col */}
            <div className="col-auto">
              <div className="d-flex justify-content-end">
                {/* List Separator */}
                <ul className="list-inline list-separator">
                  <li className="list-inline-item">
                    <a className="list-separator-link" href="#">FAQ</a>
                  </li>
                  <li className="list-inline-item">
                    <a className="list-separator-link" href="#">License</a>
                  </li>
                  <li className="list-inline-item">
                    {/* Keyboard Shortcuts Toggle */}
                    <button className="btn btn-ghost-secondary btn btn-icon btn-ghost-secondary rounded-circle" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasKeyboardShortcuts" aria-controls="offcanvasKeyboardShortcuts">
                      <i className="bi-command" />
                    </button>
                    {/* End Keyboard Shortcuts Toggle */}
                  </li>
                </ul>
                {/* End List Separator */}
              </div>
            </div>
            {/* End Col */}
          </div>
          {/* End Row */}
        </div>
        {/* End Footer */}
      </main>
      {/* ========== END MAIN CONTENT ========== */}
      {/* ========== SECONDARY CONTENTS ========== */}
      {/* Builder */}
      <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasBuilder" aria-labelledby="offcanvasBuilderLabel">
        <div className="offcanvas-header align-items-start">
          <div>
            <h3 id="offcanvasBuilderLabel">Front Builder</h3>
            <p className="mb-0">Customize the overview page layout.</p>
          </div>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
        </div>
        <div className="offcanvas-body">
          <h4 className="mb-1">Theme Appearance Mode</h4>
          <p>Check out all <a href="./documentation/layout.html">Layout Options here</a></p>
          <div className="row gx-3">
            {/* Check */}
            <div className="col-6">
              <div className="form-check form-check-label-highlighter text-center">
                <input type="radio" className="form-check-input" name="layoutSkinsRadio" id="layoutSkinsRadio1" defaultChecked defaultValue="default" />
                <label className="form-check-label mb-2" htmlFor="layoutSkinsRadio1">
                  <img className="form-check-img" src="assets/img/415x310/img1.jpg" alt="Image Description" />
                </label>
                <span className="form-check-text">Default</span>
              </div>
            </div>
            {/* End Check */}
            {/* Check */}
            <div className="col-6">
              <div className="form-check form-check-label-highlighter text-center">
                <input type="radio" className="form-check-input" name="layoutSkinsRadio" id="layoutSkinsRadio2" defaultValue="dark" />
                <label className="form-check-label mb-2" htmlFor="layoutSkinsRadio2">
                  <img className="form-check-img" src="assets/img/415x310/img2.jpg" alt="Image Description" />
                </label>
                <span className="form-check-text">Dark Mode</span>
              </div>
            </div>
            {/* End Check */}
          </div>
          {/* End Row */}
          <hr />
          <div className="row gx-3">
            {/* Check */}
            <div className="col-6">
              <div className="form-check form-check-label-highlighter text-center">
                <input type="radio" className="form-check-input" name="layout" id="navbarLayoutSkinsRadio1" defaultChecked defaultValue="default" />
                <label className="form-check-label mb-2" htmlFor="navbarLayoutSkinsRadio1">
                  <img className="form-check-img" src="assets/svg/layouts-light/sidebar-default.svg" alt="Image Description" data-hs-theme-appearance="dark" />
                  <img className="form-check-img" src="assets/svg/layouts/sidebar-default.svg" alt="Image Description" data-hs-theme-appearance="default" />
                </label>
                <span className="form-check-text">Default</span>
              </div>
            </div>
            {/* End Check */}
            {/* Check */}
            <div className="col-6">
              <div className="form-check form-check-label-highlighter text-center">
                <input type="radio" className="form-check-input" name="layout" id="navbarLayoutSkinsRadio2" defaultValue="navbar-dark" />
                <label className="form-check-label mb-2" htmlFor="navbarLayoutSkinsRadio2">
                  <img className="form-check-img" src="assets/svg/layouts-light/sidebar-dark.svg" alt="Image Description" data-hs-theme-appearance="dark" />
                  <img className="form-check-img" src="assets/svg/layouts/sidebar-dark.svg" alt="Image Description" data-hs-theme-appearance="default" />
                </label>
                <span className="form-check-text">Dark</span>
              </div>
            </div>
            {/* End Check */}
          </div>
          {/* End Row */}
          <hr />
          <h4 className="mb-1">Sidebar Nav</h4>
          <p>Check out all <a href="./documentation/layout.html">Layout Options here</a></p>
          <div className="row gx-3">
            {/* Check */}
            <div className="col-6">
              <div className="form-check form-check-label-highlighter text-center">
                <input type="radio" className="form-check-input" name="sidebarNavOptions" id="sidebarNavOptions1" defaultValue="pills" defaultChecked />
                <label className="form-check-label mb-2" htmlFor="sidebarNavOptions1">
                  <img className="form-check-img" src="assets/svg/layouts-light/demo-layouts-default-classic.svg" alt="Image Description" data-hs-theme-appearance="dark" />
                  <img className="form-check-img" src="assets/svg/layouts/demo-layouts-default-classic.svg" alt="Image Description" data-hs-theme-appearance="default" />
                </label>
                <span className="form-check-text">Pills</span>
              </div>
            </div>
            {/* End Check */}
            {/* Check */}
            <div className="col-6">
              <div className="form-check form-check-label-highlighter text-center">
                <input type="radio" className="form-check-input" name="sidebarNavOptions" id="sidebarNavOptions2" defaultValue="tabs" />
                <label className="form-check-label mb-2" htmlFor="sidebarNavOptions2">
                  <img className="form-check-img" src="assets/svg/layouts-light/demo-layouts-nav-tabs.svg" alt="Image Description" data-hs-theme-appearance="dark" />
                  <img className="form-check-img" src="assets/svg/layouts/demo-layouts-nav-tabs.svg" alt="Image Description" data-hs-theme-appearance="default" />
                </label>
                <span className="form-check-text">Tabs</span>
              </div>
            </div>
            {/* End Check */}
          </div>
          {/* End Row */}
          <hr />
          {/* Form Switch */}
          <label className="row form-check form-switch mb-3" htmlFor="builderFluidSwitch">
            <span className="col-10 ms-0">
              <span className="d-block h4 mb-1">Header Layout Options</span>
              <span className="d-block fs-5">Toggle to container-fluid layout</span>
            </span>
            <span className="col-2 text-end">
              <input type="checkbox" className="form-check-input" id="builderFluidSwitch" />
            </span>
          </label>
          {/* End Form Switch */}
          <div className="row gx-3">
            {/* Check */}
            <div className="col-6">
              <div className="form-check form-check-label-highlighter text-center">
                <input type="radio" className="form-check-input" name="layout" id="headerLayoutOptions1" defaultValue="single-header" />
                <label className="form-check-label mb-2" htmlFor="headerLayoutOptions1">
                  <img className="form-check-img" src="assets/svg/layouts/header-default-container.svg" alt="Image Description" data-hs-theme-appearance="default" />
                  <img className="form-check-img" src="assets/svg/layouts-light/header-default-container.svg" alt="Image Description" data-hs-theme-appearance="dark" />
                </label>
                <span className="form-check-text">Default</span>
              </div>
            </div>
            {/* End Check */}
            {/* Check */}
            <div className="col-6">
              <div className="form-check form-check-label-highlighter text-center">
                <input type="radio" className="form-check-input" name="layout" id="headerLayoutOptions2" defaultValue="double-header" />
                <label className="form-check-label mb-2" htmlFor="headerLayoutOptions2">
                  <img className="form-check-img" src="assets/svg/layouts/header-double-line-container.svg" alt="Image Description" data-hs-theme-appearance="default" />
                  <img className="form-check-img" src="assets/svg/layouts-light/header-double-line-container.svg" alt="Image Description" data-hs-theme-appearance="dark" />
                </label>
                <span className="form-check-text">Double line</span>
              </div>
            </div>
            {/* End Check */}
          </div>
          {/* End Row */}
        </div>
        {/* Footer */}
        <div className="offcanvas-footer">
          <div className="row gx-3">
            <div className="col">
              <div className="d-grid">
                <button type="button" id="js-builder-reset" className="btn btn-white btn-lg">
                  <i className="bi-arrow-counterclockwise" /> Reset
                </button>
              </div>
            </div>
            {/* End Col */}
            <div className="col">
              <div className="d-grid">
                <button type="button" id="js-builder-preview" className="btn btn-primary btn-lg">
                  <i className="eye-visible" /> Preview
                </button>
              </div>
            </div>
            {/* End Col */}
          </div>
          {/* End Row */}
        </div>
        {/* End Footer */}
      </div>
      {/* End Builder */}
      {/* Builder Toggle */}
      <div id="builderOffcanvas" className="position-fixed bottom-0 end-0 me-5 mb-5" style={{zIndex: 3}} data-bs-toggle="offcanvas" data-bs-target="#offcanvasBuilder" aria-controls="offcanvasBuilder">
        <a className="btn btn-dark btn-lg" href="javascript:;">
          <i className="bi-sliders fs-6 me-2" /> Customize
        </a>
      </div>
      {/* End Builder Toggle */}
      {/* Keyboard Shortcuts */}
      <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasKeyboardShortcuts" aria-labelledby="offcanvasKeyboardShortcutsLabel">
        <div className="offcanvas-header">
          <h4 id="offcanvasKeyboardShortcutsLabel" className="mb-0">Keyboard shortcuts</h4>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
        </div>
        <div className="offcanvas-body">
          <div className="list-group list-group-sm list-group-flush list-group-no-gutters mb-5">
            <div className="list-group-item">
              <h5 className="mb-1">Formatting</h5>
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <span className="fw-semibold">Bold</span>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">b</kbd>
                </div>
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <em>italic</em>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">i</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <u>Underline</u>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">u</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <s>Strikethrough</s>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">Alt</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">s</kbd>
                  {/* End Col */}
                </div>
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <span className="small">Small text</span>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">s</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <mark>Highlight</mark>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">e</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
          </div>
          <div className="list-group list-group-sm list-group-flush list-group-no-gutters mb-5">
            <div className="list-group-item">
              <h5 className="mb-1">Insert</h5>
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <span>Mention person <a href="#">(@Brian)</a></span>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">@</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <span>Link to doc <a href="#">(+Meeting notes)</a></span>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">+</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <a href="#">#hashtag</a>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">#hashtag</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <span>Date</span>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">/date</kbd>
                  <kbd className="d-inline-block mb-1">Space</kbd>
                  <kbd className="d-inline-block mb-1">/datetime</kbd>
                  <kbd className="d-inline-block mb-1">/datetime</kbd>
                  <kbd className="d-inline-block mb-1">Space</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <span>Time</span>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">/time</kbd>
                  <kbd className="d-inline-block mb-1">Space</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <span>Note box</span>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">/note</kbd>
                  <kbd className="d-inline-block mb-1">Enter</kbd>
                  <kbd className="d-inline-block mb-1">/note red</kbd>
                  <kbd className="d-inline-block mb-1">/note red</kbd>
                  <kbd className="d-inline-block mb-1">Enter</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
          </div>
          <div className="list-group list-group-sm list-group-flush list-group-no-gutters mb-5">
            <div className="list-group-item">
              <h5 className="mb-1">Editing</h5>
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <span>Find and replace</span>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">r</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <span>Find next</span>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">n</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <span>Find previous</span>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">p</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <span>Indent</span>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">Tab</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <span>Un-indent</span>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">Shift</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">Tab</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <span>Move line up</span>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">Shift</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1"><i className="bi-arrow-up-short" /></kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <span>Move line down</span>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">Shift</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1"><i className="bi-arrow-down-short fs-5" /></kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <span>Add a comment</span>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">Alt</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">m</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <span>Undo</span>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">z</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <span>Redo</span>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">y</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
          </div>
          <div className="list-group list-group-sm list-group-flush list-group-no-gutters">
            <div className="list-group-item">
              <h5 className="mb-1">Application</h5>
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <span>Create new doc</span>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">Alt</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">n</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <span>Present</span>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">Shift</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">p</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <span>Share</span>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">Shift</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">s</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <span>Search docs</span>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">Shift</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">o</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <span>Keyboard shortcuts</span>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">Shift</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">/</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
          </div>
        </div>
      </div>
      {/* End Keyboard Shortcuts */}
      {/* Activity */}
      <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasActivityStream" aria-labelledby="offcanvasActivityStreamLabel">
        <div className="offcanvas-header">
          <h4 id="offcanvasActivityStreamLabel" className="mb-0">Activity stream</h4>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
        </div>
        <div className="offcanvas-body">
          {/* Step */}
          <ul className="step step-icon-sm step-avatar-sm">
            {/* Step Item */}
            <li className="step-item">
              <div className="step-content-wrapper">
                <div className="step-avatar">
                  <img className="step-avatar" src="assets/img/160x160/img9.jpg" alt="Image Description" />
                </div>
                <div className="step-content">
                  <h5 className="mb-1">Iana Robinson</h5>
                  <p className="fs-5 mb-1">Added 2 files to task <a className="text-uppercase" href="#"><i className="bi-journal-bookmark-fill" /> Fd-7</a></p>
                  <ul className="list-group list-group-sm">
                    {/* List Item */}
                    <li className="list-group-item list-group-item-light">
                      <div className="row gx-1">
                        <div className="col-6">
                          {/* Media */}
                          <div className="d-flex">
                            <div className="flex-shrink-0">
                              <img className="avatar avatar-xs" src="assets/svg/brands/excel-icon.svg" alt="Image Description" />
                            </div>
                            <div className="flex-grow-1 text-truncate ms-2">
                              <span className="d-block fs-6 text-dark text-truncate" title="weekly-reports.xls">weekly-reports.xls</span>
                              <span className="d-block small text-muted">12kb</span>
                            </div>
                          </div>
                          {/* End Media */}
                        </div>
                        {/* End Col */}
                        <div className="col-6">
                          {/* Media */}
                          <div className="d-flex">
                            <div className="flex-shrink-0">
                              <img className="avatar avatar-xs" src="assets/svg/brands/word-icon.svg" alt="Image Description" />
                            </div>
                            <div className="flex-grow-1 text-truncate ms-2">
                              <span className="d-block fs-6 text-dark text-truncate" title="weekly-reports.xls">weekly-reports.xls</span>
                              <span className="d-block small text-muted">4kb</span>
                            </div>
                          </div>
                          {/* End Media */}
                        </div>
                        {/* End Col */}
                      </div>
                      {/* End Row */}
                    </li>
                    {/* End List Item */}
                  </ul>
                  <span className="small text-muted text-uppercase">Now</span>
                </div>
              </div>
            </li>
            {/* End Step Item */}
            {/* Step Item */}
            <li className="step-item">
              <div className="step-content-wrapper">
                <span className="step-icon step-icon-soft-dark">B</span>
                <div className="step-content">
                  <h5 className="mb-1">Bob Dean</h5>
                  <p className="fs-5 mb-1">Marked <a className="text-uppercase" href="#"><i className="bi-journal-bookmark-fill" /> Fr-6</a> as <span className="badge bg-soft-success text-success rounded-pill"><span className="legend-indicator bg-success" />"Completed"</span></p>
                  <span className="small text-muted text-uppercase">Today</span>
                </div>
              </div>
            </li>
            {/* End Step Item */}
            {/* Step Item */}
            <li className="step-item">
              <div className="step-content-wrapper">
                <div className="step-avatar">
                  <img className="step-avatar-img" src="assets/img/160x160/img3.jpg" alt="Image Description" />
                </div>
                <div className="step-content">
                  <h5 className="h5 mb-1">Crane</h5>
                  <p className="fs-5 mb-1">Added 5 card to <a href="#">Payments</a></p>
                  <ul className="list-group list-group-sm">
                    <li className="list-group-item list-group-item-light">
                      <div className="row gx-1">
                        <div className="col">
                          <img className="img-fluid rounded" src="assets/svg/components/card-1.svg" alt="Image Description" />
                        </div>
                        <div className="col">
                          <img className="img-fluid rounded" src="assets/svg/components/card-2.svg" alt="Image Description" />
                        </div>
                        <div className="col">
                          <img className="img-fluid rounded" src="assets/svg/components/card-3.svg" alt="Image Description" />
                        </div>
                        <div className="col-auto align-self-center">
                          <div className="text-center">
                            <a href="#">+2</a>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <span className="small text-muted text-uppercase">May 12</span>
                </div>
              </div>
            </li>
            {/* End Step Item */}
            {/* Step Item */}
            <li className="step-item">
              <div className="step-content-wrapper">
                <span className="step-icon step-icon-soft-info">D</span>
                <div className="step-content">
                  <h5 className="mb-1">David Lidell</h5>
                  <p className="fs-5 mb-1">Added a new member to Front Dashboard</p>
                  <span className="small text-muted text-uppercase">May 15</span>
                </div>
              </div>
            </li>
            {/* End Step Item */}
            {/* Step Item */}
            <li className="step-item">
              <div className="step-content-wrapper">
                <div className="step-avatar">
                  <img className="step-avatar-img" src="assets/img/160x160/img7.jpg" alt="Image Description" />
                </div>
                <div className="step-content">
                  <h5 className="mb-1">Rachel King</h5>
                  <p className="fs-5 mb-1">Marked <a className="text-uppercase" href="#"><i className="bi-journal-bookmark-fill" /> Fr-3</a> as <span className="badge bg-soft-success text-success rounded-pill"><span className="legend-indicator bg-success" />"Completed"</span></p>
                  <span className="small text-muted text-uppercase">Apr 29</span>
                </div>
              </div>
            </li>
            {/* End Step Item */}
            {/* Step Item */}
            <li className="step-item">
              <div className="step-content-wrapper">
                <div className="step-avatar">
                  <img className="step-avatar-img" src="assets/img/160x160/img5.jpg" alt="Image Description" />
                </div>
                <div className="step-content">
                  <h5 className="mb-1">Finch Hoot</h5>
                  <p className="fs-5 mb-1">Earned a "Top endorsed" <i className="bi-patch-check-fill text-primary" /> badge</p>
                  <span className="small text-muted text-uppercase">Apr 06</span>
                </div>
              </div>
            </li>
            {/* End Step Item */}
            {/* Step Item */}
            <li className="step-item">
              <div className="step-content-wrapper">
                <span className="step-icon step-icon-soft-primary">
                  <i className="bi-person-fill" />
                </span>
                <div className="step-content">
                  <h5 className="mb-1">Project status updated</h5>
                  <p className="fs-5 mb-1">Marked <a className="text-uppercase" href="#"><i className="bi-journal-bookmark-fill" /> Fr-3</a> as <span className="badge bg-soft-primary text-primary rounded-pill"><span className="legend-indicator bg-primary" />"In progress"</span></p>
                  <span className="small text-muted text-uppercase">Feb 10</span>
                </div>
              </div>
            </li>
            {/* End Step Item */}
          </ul>
          {/* End Step */}
          <div className="d-grid">
            <a className="btn btn-white" href="javascript:;">View all <i className="bi-chevron-right" /></a>
          </div>
        </div>
      </div>
      {/* End Activity */}
      {/* Welcome Message Modal */}
      <div className="modal fade" id="welcomeMessageModal" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            {/* Header */}
            <div className="modal-close">
              <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm" data-bs-dismiss="modal" aria-label="Close">
                <i className="bi-x-lg" />
              </button>
            </div>
            {/* End Header */}
            {/* Body */}
            <div className="modal-body p-sm-5">
              <div className="text-center">
                <div className="w-75 w-sm-50 mx-auto mb-4">
                  <img className="img-fluid" src="assets/svg/illustrations/oc-collaboration.svg" alt="Image Description" data-hs-theme-appearance="default" />
                  <img className="img-fluid" src="assets/svg/illustrations-light/oc-collaboration.svg" alt="Image Description" data-hs-theme-appearance="dark" />
                </div>
                <h4 className="h1">Welcome to Front</h4>
                <p>We're happy to see you in our community.</p>
              </div>
            </div>
            {/* End Body */}
            {/* Footer */}
            <div className="modal-footer d-block text-center py-sm-5">
              <small className="text-cap text-muted">Trusted by the world's best teams</small>
              <div className="w-85 mx-auto">
                <div className="row justify-content-between">
                  <div className="col">
                    <img className="img-fluid" src="assets/svg/brands/gitlab-gray.svg" alt="Image Description" />
                  </div>
                  <div className="col">
                    <img className="img-fluid" src="assets/svg/brands/fitbit-gray.svg" alt="Image Description" />
                  </div>
                  <div className="col">
                    <img className="img-fluid" src="assets/svg/brands/flow-xo-gray.svg" alt="Image Description" />
                  </div>
                  <div className="col">
                    <img className="img-fluid" src="assets/svg/brands/layar-gray.svg" alt="Image Description" />
                  </div>
                </div>
              </div>
            </div>
            {/* End Footer */}
          </div>
        </div>
      </div>
      {/* End Welcome Message Modal */}
      {/* Create a new user Modal */}
      <div className="modal fade" id="inviteUserModal" tabIndex={-1} aria-labelledby="inviteUserModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="inviteUserModalLabel">Invite users</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            {/* Body */}
            <div className="modal-body">
              {/* Form */}
              <div className="mb-4">
                <div className="input-group mb-2 mb-sm-0">
                  <input type="text" className="form-control" name="fullName" placeholder="Search name or emails" aria-label="Search name or emails" />
                  <div className="input-group-append input-group-append-last-sm-down-none">
                    {/* Select */}
                    <div className="tom-select-custom tom-select-custom-end">
                      <select className="js-select form-select" autoComplete="off" data-hs-tom-select-options="{
                          &quot;searchInDropdown&quot;: false,
                          &quot;hideSearch&quot;: true,
                          &quot;dropdownWidth&quot;: &quot;11rem&quot;
                        }">
                        <option value="guest" selected>Guest</option>
                        <option value="can edit">Can edit</option>
                        <option value="can comment">Can comment</option>
                        <option value="full access">Full access</option>
                      </select>
                    </div>
                    {/* End Select */}
                    <a className="btn btn-primary d-none d-sm-inline-block" href="javascript:;">Invite</a>
                  </div>
                </div>
                <a className="btn btn-primary w-100 d-sm-none" href="javascript:;">Invite</a>
              </div>
              {/* End Form */}
              <div className="row">
                <h5 className="col modal-title">Invite users</h5>
                <div className="col-auto">
                  <a className="d-flex align-items-center small text-body" href="#">
                    <img className="avatar avatar-xss avatar-4x3 me-2" src="assets/svg/brands/gmail-icon.svg" alt="Image Description" />
                    Import contacts
                  </a>
                </div>
              </div>
              <hr className="mt-2" />
              <ul className="list-unstyled list-py-2 mb-0">
                {/* List Group Item */}
                <li>
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                      <div className="avatar avatar-sm avatar-circle">
                        <img className="avatar-img" src="assets/img/160x160/img10.jpg" alt="Image Description" />
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <div className="row align-items-center">
                        <div className="col-sm">
                          <h5 className="mb-0">Amanda Harvey <i className="bi-patch-check-fill text-primary" data-toggle="tooltip" data-placement="top" title="Top endorsed" /></h5>
                          <span className="d-block small">amanda@site.com</span>
                        </div>
                        <div className="col-sm-auto">
                          {/* Select */}
                          <div className="tom-select-custom tom-select-custom-sm-end">
                            <select className="js-select form-select form-select-borderless tom-select-custom-form-select-invite-user tom-select-form-select-ps-0" autoComplete="off" data-hs-tom-select-options="{
                                &quot;searchInDropdown&quot;: false,
                                &quot;hideSearch&quot;: true,
                                &quot;dropdownWidth&quot;: &quot;11rem&quot;
                              }">
                              <option value="guest" selected>Guest</option>
                              <option value="can edit">Can edit</option>
                              <option value="can comment">Can comment</option>
                              <option value="full access">Full access</option>
                              <option value="remove" data-option-template="<div class=&quot;text-danger&quot;>Remove</div>">Remove</option>
                            </select>
                          </div>
                          {/* End Select */}
                        </div>
                      </div>
                      {/* End Row */}
                    </div>
                  </div>
                </li>
                {/* End List Group Item */}
                {/* List Group Item */}
                <li>
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                      <div className="avatar avatar-sm avatar-circle">
                        <img className="avatar-img" src="assets/img/160x160/img3.jpg" alt="Image Description" />
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <div className="row align-items-center">
                        <div className="col-sm">
                          <h5 className="mb-0">David Harrison</h5>
                          <span className="d-block small">david@site.com</span>
                        </div>
                        <div className="col-sm-auto">
                          {/* Select */}
                          <div className="tom-select-custom tom-select-custom-sm-end">
                            <select className="js-select form-select form-select-borderless tom-select-custom-form-select-invite-user tom-select-form-select-ps-0" autoComplete="off" data-hs-tom-select-options="{
                                &quot;searchInDropdown&quot;: false,
                                &quot;hideSearch&quot;: true,
                                &quot;dropdownWidth&quot;: &quot;11rem&quot;
                              }">
                              <option value="guest" selected>Guest</option>
                              <option value="can edit">Can edit</option>
                              <option value="can comment">Can comment</option>
                              <option value="full access">Full access</option>
                              <option value="remove" data-option-template="<div class=&quot;text-danger&quot;>Remove</div>">Remove</option>
                            </select>
                          </div>
                          {/* End Select */}
                        </div>
                      </div>
                      {/* End Row */}
                    </div>
                  </div>
                </li>
                {/* End List Group Item */}
                {/* List Group Item */}
                <li>
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                      <div className="avatar avatar-sm avatar-circle">
                        <img className="avatar-img" src="assets/img/160x160/img9.jpg" alt="Image Description" />
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <div className="row align-items-center">
                        <div className="col-sm">
                          <h5 className="mb-0">Ella Lauda <i className="bi-patch-check-fill text-primary" data-toggle="tooltip" data-placement="top" title="Top endorsed" /></h5>
                          <span className="d-block small">Markvt@site.com</span>
                        </div>
                        <div className="col-sm-auto">
                          {/* Select */}
                          <div className="tom-select-custom tom-select-custom-sm-end">
                            <select className="js-select form-select form-select-borderless tom-select-custom-form-select-invite-user tom-select-form-select-ps-0" autoComplete="off" data-hs-tom-select-options="{
                                &quot;searchInDropdown&quot;: false,
                                &quot;hideSearch&quot;: true,
                                &quot;dropdownWidth&quot;: &quot;11rem&quot;
                              }">
                              <option value="guest" selected>Guest</option>
                              <option value="can edit">Can edit</option>
                              <option value="can comment">Can comment</option>
                              <option value="full access">Full access</option>
                              <option value="remove" data-option-template="<div class=&quot;text-danger&quot;>Remove</div>">Remove</option>
                            </select>
                          </div>
                          {/* End Select */}
                        </div>
                      </div>
                      {/* End Row */}
                    </div>
                  </div>
                </li>
                {/* End List Group Item */}
                {/* List Group Item */}
                <li>
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                      <div className="avatar avatar-sm avatar-soft-dark avatar-circle">
                        <span className="avatar-initials">B</span>
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <div className="row align-items-center">
                        <div className="col-sm">
                          <h5 className="mb-0">Bob Dean</h5>
                          <span className="d-block small">bob@site.com</span>
                        </div>
                        <div className="col-sm-auto">
                          {/* Select */}
                          <div className="tom-select-custom tom-select-custom-sm-end">
                            <select className="js-select form-select form-select-borderless tom-select-custom-form-select-invite-user tom-select-form-select-ps-0" autoComplete="off" data-hs-tom-select-options="{
                                &quot;searchInDropdown&quot;: false,
                                &quot;hideSearch&quot;: true,
                                &quot;dropdownWidth&quot;: &quot;11rem&quot;
                              }">
                              <option value="guest" selected>Guest</option>
                              <option value="can edit">Can edit</option>
                              <option value="can comment">Can comment</option>
                              <option value="full access">Full access</option>
                              <option value="remove" data-option-template="<div class=&quot;text-danger&quot;>Remove</div>">Remove</option>
                            </select>
                          </div>
                          {/* End Select */}
                        </div>
                      </div>
                      {/* End Row */}
                    </div>
                  </div>
                </li>
                {/* End List Group Item */}
              </ul>
            </div>
            {/* End Body */}
            {/* Footer */}
            <div className="modal-footer">
              <div className="row align-items-center flex-grow-1 mx-n2">
                <div className="col-sm-9 mb-2 mb-sm-0">
                  <input type="hidden" id="inviteUserPublicClipboard" defaultValue="" />
                  <p className="modal-footer-text">The public share <a href="#">link settings</a>
                    <i className="bi-question-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="The public share link allows people to view the project without giving access to full collaboration features." />
                  </p>
                </div>
                <div className="col-sm-3 text-sm-end">
                  <a className="js-clipboard btn btn-white btn-sm text-nowrap" href="javascript:;" data-bs-toggle="tooltip" data-bs-placement="top" title="Copy to clipboard!" data-hs-clipboard-options="{
                &quot;type&quot;: &quot;tooltip&quot;,
                &quot;successText&quot;: &quot;Copied!&quot;,
                &quot;contentTarget&quot;: &quot;#inviteUserPublicClipboard&quot;,
                &quot;container&quot;: &quot;#inviteUserModal&quot;
               }">
                    <i className="bi-link-45deg me-1" /> Copy link</a>
                </div>
              </div>
            </div>
            {/* End Footer */}
          </div>
        </div>
      </div>
      {/* End Create a new user Modal */}
      {/* ========== END SECONDARY CONTENTS ========== */}
      {/* JS Implementing Plugins */}
      {/* JS Front */}
      {/* JS Plugins Init. */}
      {/* JS Plugins Init. */}
      {/* Style Switcher JS */}
      {/* End Style Switcher JS */}
    </section>
  );
}
                        