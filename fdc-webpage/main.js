"use strict";
(self["webpackChunkfrontend_app"] = self["webpackChunkfrontend_app"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/authentication/auth.service */ 3271);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/menu-bar/menu-bar.component */ 7525);
/* harmony import */ var _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/toast/toast.component */ 4356);
/* harmony import */ var _components_system_health_system_health_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/system-health/system-health.component */ 2772);
/* harmony import */ var _components_maintenance_mode_maintenance_mode_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/maintenance-mode/maintenance-mode.component */ 9437);








function AppComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-maintenance-mode");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { "col-lg-6": a0, "pe-lg-2": a1 }; };
class AppComponent {
    constructor(authService) {
        this.authService = authService;
        this.title = 'frontend-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 9, vars: 5, consts: [[1, "container", "mt-5", "pt-5", "mb-5"], [1, "d-flex", "flex-column", "flex-lg-row", "mb-3"], [1, "col-12", "accordion-level-1", 3, "ngClass"], ["class", "col-12 col-lg-6 mt-3 mt-lg-0 ps-lg-2 accordion-level-1", 4, "ngIf"], ["id", "error-log", 1, "mt-3", "bg-warning"], ["aria-live", "polite", "aria-atomic", "true"], [1, "col-12", "col-lg-6", "mt-3", "mt-lg-0", "ps-lg-2", "accordion-level-1"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-menu-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "app-system-health");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, AppComponent_div_5_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "router-outlet")(7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "app-toasts", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](2, _c0, ctx.authService.isLoggedIn() && !ctx.authService.mustChangePassword(), ctx.authService.isLoggedIn() && !ctx.authService.mustChangePassword()));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.authService.isLoggedIn() && !ctx.authService.mustChangePassword());
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet, _components_menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_1__.MenuBarComponent, _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_2__.ToastComponent, _components_system_health_system_health_component__WEBPACK_IMPORTED_MODULE_3__.SystemHealthComponent, _components_maintenance_mode_maintenance_mode_component__WEBPACK_IMPORTED_MODULE_4__.MaintenanceModeComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _services_authentication_auth_interceptor_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/authentication/auth-interceptor.provider */ 4917);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _components_menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/menu-bar/menu-bar.component */ 7525);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/authentication/auth-guard.service */ 1911);
/* harmony import */ var _services_authentication_role_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/authentication/role-guard.service */ 9275);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ 7143);
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ 619);
/* harmony import */ var _components_configuration_configuration_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/configuration/configuration.component */ 8793);
/* harmony import */ var _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/toast/toast.component */ 4356);
/* harmony import */ var _components_inputs_inputs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/inputs/inputs.component */ 3460);
/* harmony import */ var _components_outputs_outputs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/outputs/outputs.component */ 5037);
/* harmony import */ var _components_mail_templates_mail_templates_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/mail-templates/mail-templates.component */ 1915);
/* harmony import */ var _components_fdas_fdas_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/fdas/fdas.component */ 6618);
/* harmony import */ var _components_damper_groups_damper_groups_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/damper-groups/damper-groups.component */ 834);
/* harmony import */ var _components_edit_damper_group_edit_damper_group_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/edit-damper-group/edit-damper-group.component */ 1528);
/* harmony import */ var _directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./directives/autofocus.directive */ 3185);
/* harmony import */ var _components_edit_input_edit_input_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/edit-input/edit-input.component */ 7419);
/* harmony import */ var _components_edit_output_edit_output_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/edit-output/edit-output.component */ 2582);
/* harmony import */ var _components_edit_mail_template_edit_mail_template_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/edit-mail-template/edit-mail-template.component */ 2232);
/* harmony import */ var _components_edit_fda_edit_fda_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/edit-fda/edit-fda.component */ 3997);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ngx-socket-io */ 4935);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @ngx-translate/http-loader */ 8319);
/* harmony import */ var _components_status_symbols_status_symbols_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/status-symbols/status-symbols.component */ 2842);
/* harmony import */ var _components_edit_damper_mode_edit_damper_mode_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/edit-damper-mode/edit-damper-mode.component */ 3025);
/* harmony import */ var _components_fda_replacement_fda_replacement_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/fda-replacement/fda-replacement.component */ 5137);
/* harmony import */ var _components_edit_fdc_time_edit_fdc_time_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/edit-fdc-time/edit-fdc-time.component */ 7209);
/* harmony import */ var _components_system_health_system_health_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/system-health/system-health.component */ 2772);
/* harmony import */ var _components_maintenance_mode_maintenance_mode_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/maintenance-mode/maintenance-mode.component */ 9437);
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ng-multiselect-dropdown */ 7490);
/* harmony import */ var _components_messagebox_messagebox_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/messagebox/messagebox.component */ 3666);
/* harmony import */ var _components_config_download_config_download_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/config-download/config-download.component */ 1914);
/* harmony import */ var _components_config_upload_config_upload_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/config-upload/config-upload.component */ 7155);
/* harmony import */ var ngx_filesaver__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ngx-filesaver */ 6318);
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ngx-dropzone */ 2522);
/* harmony import */ var _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/confirm-dialog/confirm-dialog.component */ 4949);
/* harmony import */ var _components_password_change_password_change_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/password-change/password-change.component */ 8358);
/* harmony import */ var _components_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/create-user/create-user.component */ 5439);
/* harmony import */ var _components_subcomponent_password_repeat_password_repeat_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/subcomponent/password-repeat/password-repeat.component */ 7068);
/* harmony import */ var _components_forced_password_change_forced_password_change_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/forced-password-change/forced-password-change.component */ 114);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_cookie_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./services/cookie.service */ 1383);
/* harmony import */ var _services_logout_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./services/logout.service */ 3244);
/* harmony import */ var _services_dto_services_damper_group_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./services/dto-services/damper-group.service */ 3705);
/* harmony import */ var _services_fdc_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./services/fdc.service */ 1473);
/* harmony import */ var _services_dto_services_input_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./services/dto-services/input.service */ 6441);
/* harmony import */ var _services_dto_services_output_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./services/dto-services/output.service */ 5782);
/* harmony import */ var _services_dto_services_fda_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./services/dto-services/fda.service */ 7576);
/* harmony import */ var _services_dto_services_mail_template_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./services/dto-services/mail-template.service */ 8499);
/* harmony import */ var _services_mailer_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./services/mailer.service */ 9991);
/* harmony import */ var _services_socket_connection_service__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./services/socket-connection.service */ 6465);
/* harmony import */ var _services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./services/authentication/auth.service */ 3271);
/* harmony import */ var _services_dto_services_maintenance_mode_service__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./services/dto-services/maintenance-mode.service */ 8595);
































































const routes = [
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__.DashboardComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'configuration', component: _components_configuration_configuration_component__WEBPACK_IMPORTED_MODULE_7__.ConfigurationComponent, canActivate: [_services_authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__.AuthGuardService, _services_authentication_role_guard_service__WEBPACK_IMPORTED_MODULE_4__.RoleGuardService], data: { expectedRole: ['ADMIN', 'SERVICE'] } },
    { path: 'fda-config', component: _components_fdas_fdas_component__WEBPACK_IMPORTED_MODULE_12__.FdasComponent, canActivate: [_services_authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__.AuthGuardService, _services_authentication_role_guard_service__WEBPACK_IMPORTED_MODULE_4__.RoleGuardService], data: { expectedRole: ['ADMIN'] } },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__.LoginComponent },
    { path: 'forced-password-change', component: _components_forced_password_change_forced_password_change_component__WEBPACK_IMPORTED_MODULE_33__.ForcedPasswordChangeComponent }
];
const location = window.location;
const socketIoConfig = { url: `${location.protocol}//${location.hostname}`, options: { path: '/websocket' } };
// AoT requires an exported function for factories
function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_46__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
class AppModule {
    // noinspection JSUnusedLocalSymbols
    constructor(translate, cookieService, logoutService, damperGroupService, fdcService, inputService, outputService, fdaService, mailTemplateService, mailerService, socketConnectionService, authService, maintenanceModeService, modalConfig) {
        this.translate = translate;
        this.cookieService = cookieService;
        this.logoutService = logoutService;
        this.damperGroupService = damperGroupService;
        this.fdcService = fdcService;
        this.inputService = inputService;
        this.outputService = outputService;
        this.fdaService = fdaService;
        this.mailTemplateService = mailTemplateService;
        this.mailerService = mailerService;
        this.socketConnectionService = socketConnectionService;
        this.authService = authService;
        this.maintenanceModeService = maintenanceModeService;
        this.modalConfig = modalConfig;
        this.interval = 2000;
        translate.setDefaultLang('en');
        translate.use(cookieService.getValue('language', 'en'));
        this.requestStatus();
        this.requestServicesStatus();
        modalConfig.backdrop = 'static';
    }
    requestStatus() {
        this.socketConnectionService.requestStatus();
        setTimeout(() => this.requestStatus(), this.interval);
    }
    requestServicesStatus() {
        this.socketConnectionService.requestServicesStatus();
        setTimeout(() => this.requestServicesStatus(), 1000);
    }
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_48__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵinject"](_services_cookie_service__WEBPACK_IMPORTED_MODULE_34__.CookieService), _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵinject"](_services_logout_service__WEBPACK_IMPORTED_MODULE_35__.LogoutService), _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵinject"](_services_dto_services_damper_group_service__WEBPACK_IMPORTED_MODULE_36__.DamperGroupService), _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵinject"](_services_fdc_service__WEBPACK_IMPORTED_MODULE_37__.FdcService), _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵinject"](_services_dto_services_input_service__WEBPACK_IMPORTED_MODULE_38__.InputService), _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵinject"](_services_dto_services_output_service__WEBPACK_IMPORTED_MODULE_39__.OutputService), _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵinject"](_services_dto_services_fda_service__WEBPACK_IMPORTED_MODULE_40__.FdaService), _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵinject"](_services_dto_services_mail_template_service__WEBPACK_IMPORTED_MODULE_41__.MailTemplateService), _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵinject"](_services_mailer_service__WEBPACK_IMPORTED_MODULE_42__.MailerService), _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵinject"](_services_socket_connection_service__WEBPACK_IMPORTED_MODULE_43__.SocketConnectionService), _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵinject"](_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_44__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵinject"](_services_dto_services_maintenance_mode_service__WEBPACK_IMPORTED_MODULE_45__.MaintenanceModeService), _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵinject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_49__.NgbModalConfig)); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵdefineInjector"]({ providers: [
        _services_authentication_auth_interceptor_provider__WEBPACK_IMPORTED_MODULE_0__.authInterceptor,
        _services_authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__.AuthGuardService,
        _services_authentication_role_guard_service__WEBPACK_IMPORTED_MODULE_4__.RoleGuardService
    ], imports: [ngx_filesaver__WEBPACK_IMPORTED_MODULE_50__.FileSaverModule,
        ngx_dropzone__WEBPACK_IMPORTED_MODULE_51__.NgxDropzoneModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_52__.BrowserModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_49__.NgbModule,
        ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_53__.NgMultiSelectDropDownModule.forRoot(),
        _angular_forms__WEBPACK_IMPORTED_MODULE_54__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_54__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_55__.HttpClientModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_48__.TranslateModule.forRoot({
            loader: {
                provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_48__.TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_55__.HttpClient]
            },
            defaultLanguage: 'en'
        }),
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_56__.BrowserAnimationsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_57__.RouterModule.forRoot(routes),
        ngx_socket_io__WEBPACK_IMPORTED_MODULE_58__.SocketIoModule.forRoot(socketIoConfig)] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_2__.MenuBarComponent,
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__.LoginComponent,
        _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__.DashboardComponent,
        _components_configuration_configuration_component__WEBPACK_IMPORTED_MODULE_7__.ConfigurationComponent,
        _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_8__.ToastComponent,
        _components_inputs_inputs_component__WEBPACK_IMPORTED_MODULE_9__.InputsComponent,
        _components_outputs_outputs_component__WEBPACK_IMPORTED_MODULE_10__.OutputsComponent,
        _components_mail_templates_mail_templates_component__WEBPACK_IMPORTED_MODULE_11__.MailTemplatesComponent,
        _components_fdas_fdas_component__WEBPACK_IMPORTED_MODULE_12__.FdasComponent,
        _components_damper_groups_damper_groups_component__WEBPACK_IMPORTED_MODULE_13__.DamperGroupsComponent,
        _components_edit_damper_group_edit_damper_group_component__WEBPACK_IMPORTED_MODULE_14__.EditDamperGroupComponent,
        _directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_15__.AutofocusDirective,
        _components_edit_input_edit_input_component__WEBPACK_IMPORTED_MODULE_16__.EditInputComponent,
        _components_edit_output_edit_output_component__WEBPACK_IMPORTED_MODULE_17__.EditOutputComponent,
        _components_edit_mail_template_edit_mail_template_component__WEBPACK_IMPORTED_MODULE_18__.EditMailTemplateComponent,
        _components_edit_fda_edit_fda_component__WEBPACK_IMPORTED_MODULE_19__.EditFdaComponent,
        _components_status_symbols_status_symbols_component__WEBPACK_IMPORTED_MODULE_20__.StatusSymbolsComponent,
        _components_edit_damper_mode_edit_damper_mode_component__WEBPACK_IMPORTED_MODULE_21__.EditDamperModeComponent,
        _components_fda_replacement_fda_replacement_component__WEBPACK_IMPORTED_MODULE_22__.FdaReplacementComponent,
        _components_edit_fdc_time_edit_fdc_time_component__WEBPACK_IMPORTED_MODULE_23__.EditFdcTimeComponent,
        _components_system_health_system_health_component__WEBPACK_IMPORTED_MODULE_24__.SystemHealthComponent,
        _components_maintenance_mode_maintenance_mode_component__WEBPACK_IMPORTED_MODULE_25__.MaintenanceModeComponent,
        _components_messagebox_messagebox_component__WEBPACK_IMPORTED_MODULE_26__.MessageboxComponent,
        _components_config_download_config_download_component__WEBPACK_IMPORTED_MODULE_27__.ConfigDownloadComponent,
        _components_config_upload_config_upload_component__WEBPACK_IMPORTED_MODULE_28__.ConfigUploadComponent,
        _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_29__.ConfirmDialogComponent,
        _components_password_change_password_change_component__WEBPACK_IMPORTED_MODULE_30__.PasswordChangeComponent,
        _components_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_31__.CreateUserComponent,
        _components_subcomponent_password_repeat_password_repeat_component__WEBPACK_IMPORTED_MODULE_32__.PasswordRepeatComponent,
        _components_forced_password_change_forced_password_change_component__WEBPACK_IMPORTED_MODULE_33__.ForcedPasswordChangeComponent], imports: [ngx_filesaver__WEBPACK_IMPORTED_MODULE_50__.FileSaverModule,
        ngx_dropzone__WEBPACK_IMPORTED_MODULE_51__.NgxDropzoneModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_52__.BrowserModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_49__.NgbModule, ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_53__.NgMultiSelectDropDownModule, _angular_forms__WEBPACK_IMPORTED_MODULE_54__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_54__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_55__.HttpClientModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_48__.TranslateModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_56__.BrowserAnimationsModule, _angular_router__WEBPACK_IMPORTED_MODULE_57__.RouterModule, ngx_socket_io__WEBPACK_IMPORTED_MODULE_58__.SocketIoModule] }); })();


/***/ }),

/***/ 1914:
/*!*************************************************************************!*\
  !*** ./src/app/components/config-download/config-download.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigDownloadComponent": () => (/* binding */ ConfigDownloadComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_fdc_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/fdc.service */ 1473);
/* harmony import */ var _services_dto_services_fda_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/dto-services/fda.service */ 7576);
/* harmony import */ var _services_dto_services_damper_group_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/dto-services/damper-group.service */ 3705);
/* harmony import */ var _services_mailer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/mailer.service */ 9991);
/* harmony import */ var _services_dto_services_mail_template_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/dto-services/mail-template.service */ 8499);
/* harmony import */ var ngx_filesaver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-filesaver */ 6318);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 8699);








class ConfigDownloadComponent {
    constructor(fdcService, fdaService, groupService, mailerService, mailTemplateService, fileSaverService) {
        this.fdcService = fdcService;
        this.fdaService = fdaService;
        this.groupService = groupService;
        this.mailerService = mailerService;
        this.mailTemplateService = mailTemplateService;
        this.fileSaverService = fileSaverService;
    }
    ngOnInit() {
    }
    isConfigLoaded() {
        return this.fdcService.loaded && this.fdaService.loaded && this.groupService.loaded && this.mailerService.loaded
            && this.mailTemplateService.loaded;
    }
    downloadConfig() {
        if (this.fdcService.loaded && this.fdaService.loaded && this.groupService.loaded && this.mailerService.loaded
            && this.mailTemplateService.loaded) {
            let config = {
                fdcConfig: this.fdcService.data,
                fdaConfig: this.fdaService.data,
                groupConfig: this.groupService.getData(),
                mailerConfig: this.mailerService.data,
                mailtemplateConfig: this.mailTemplateService.data
            };
            if (config.fdaConfig) {
                config.fdaConfig.forEach((fdaConfig) => {
                    delete fdaConfig.fdaConfigRef;
                });
            }
            const now = new Date();
            const fileName = 'configuration_' + now.getFullYear() + now.getMonth() + now.getDay() + '_' + now.getHours() + now.getMinutes() + '.json';
            const configFormatted = JSON.stringify(config, null, 2);
            this.fileSaverService.saveText(configFormatted, fileName);
        }
    }
}
ConfigDownloadComponent.ɵfac = function ConfigDownloadComponent_Factory(t) { return new (t || ConfigDownloadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_fdc_service__WEBPACK_IMPORTED_MODULE_0__.FdcService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_dto_services_fda_service__WEBPACK_IMPORTED_MODULE_1__.FdaService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_dto_services_damper_group_service__WEBPACK_IMPORTED_MODULE_2__.DamperGroupService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_mailer_service__WEBPACK_IMPORTED_MODULE_3__.MailerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_dto_services_mail_template_service__WEBPACK_IMPORTED_MODULE_4__.MailTemplateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_filesaver__WEBPACK_IMPORTED_MODULE_6__.FileSaverService)); };
ConfigDownloadComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ConfigDownloadComponent, selectors: [["app-config-download"]], decls: 2, vars: 1, consts: [["type", "button", "translate", "", 1, "btn", "btn-primary", 3, "disabled", "click"]], template: function ConfigDownloadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ConfigDownloadComponent_Template_button_click_0_listener() { return ctx.downloadConfig(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "SYSCONF.CONFIGFILES.DOWNLOAD");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.isConfigLoaded());
    } }, dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maWctZG93bmxvYWQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 7155:
/*!*********************************************************************!*\
  !*** ./src/app/components/config-upload/config-upload.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigUploadComponent": () => (/* binding */ ConfigUploadComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../confirm-dialog/confirm-dialog.component */ 4949);
/* harmony import */ var _messagebox_messagebox_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../messagebox/messagebox.component */ 3666);
/* harmony import */ var _services_fdc_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/fdc.service */ 1473);
/* harmony import */ var _services_dto_services_fda_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/dto-services/fda.service */ 7576);
/* harmony import */ var _services_dto_services_damper_group_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/dto-services/damper-group.service */ 3705);
/* harmony import */ var _services_mailer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/mailer.service */ 9991);
/* harmony import */ var _services_dto_services_mail_template_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/dto-services/mail-template.service */ 8499);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-dropzone */ 2522);











class ConfigUploadComponent {
    constructor(fdcService, fdaService, groupService, mailerService, mailTemplateService, modalService) {
        this.fdcService = fdcService;
        this.fdaService = fdaService;
        this.groupService = groupService;
        this.mailerService = mailerService;
        this.mailTemplateService = mailTemplateService;
        this.modalService = modalService;
        this.files = [];
    }
    ngOnInit() {
    }
    onSelect(event) {
        this.files.push(...event.addedFiles);
        const read = new FileReader();
        const okEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        okEvent.subscribe({
            next: (fileRead) => {
                let fileData = {};
                try {
                    fileData = JSON.parse(fileRead.result);
                }
                catch (err) {
                    const msgBox = this.modalService.open(_messagebox_messagebox_component__WEBPACK_IMPORTED_MODULE_1__.MessageboxComponent);
                    msgBox.componentInstance.title = 'Could not parse config file';
                    msgBox.componentInstance.message = 'File ' + fileRead.file.name + ' is not a valid json file!';
                    msgBox.componentInstance.isError = true;
                }
                const modalRef = this.modalService.open(_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmDialogComponent);
                modalRef.componentInstance.okText = 'SAVE';
                modalRef.componentInstance.title = 'SYSCONF.CONFIGFILES.CONFIRMUPLOADTITLE';
                modalRef.componentInstance.message = 'SYSCONF.CONFIGFILES.CONFIRMUPLOADMESSAGE';
                modalRef.result.then(() => {
                    this.files = [];
                    if (fileData.fdcConfig) {
                        this.fdcService.data = fileData.fdcConfig;
                        this.fdcService.update();
                    }
                    if (fileData.fdaConfig) {
                        this.fdaService.data = fileData.fdaConfig;
                        this.fdaService.update();
                    }
                    if (fileData.groupConfig) {
                        this.groupService.replace(fileData.groupConfig);
                        this.groupService.update();
                    }
                    if (fileData.mailerConfig) {
                        this.mailerService.data = fileData.mailerConfig;
                        this.mailerService.update();
                    }
                    if (fileData.mailtemplateConfig) {
                        this.mailTemplateService.data = fileData.mailtemplateConfig;
                        this.mailTemplateService.update();
                    }
                }).catch(() => {
                    this.files = [];
                });
            }
        });
        const file = this.files[0];
        read.readAsText(file, 'UTF-8');
        read.onloadend = function () {
            okEvent.emit({ result: read.result, file: file });
        };
    }
    onRemove(event) {
        this.files.splice(this.files.indexOf(event), 1);
    }
}
ConfigUploadComponent.ɵfac = function ConfigUploadComponent_Factory(t) { return new (t || ConfigUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_fdc_service__WEBPACK_IMPORTED_MODULE_2__.FdcService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_dto_services_fda_service__WEBPACK_IMPORTED_MODULE_3__.FdaService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_dto_services_damper_group_service__WEBPACK_IMPORTED_MODULE_4__.DamperGroupService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_mailer_service__WEBPACK_IMPORTED_MODULE_5__.MailerService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_dto_services_mail_template_service__WEBPACK_IMPORTED_MODULE_6__.MailTemplateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal)); };
ConfigUploadComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ConfigUploadComponent, selectors: [["app-config-upload"]], decls: 3, vars: 1, consts: [[3, "multiple", "change"]], template: function ConfigUploadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ngx-dropzone", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function ConfigUploadComponent_Template_ngx_dropzone_change_0_listener($event) { return ctx.onSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "ngx-dropzone-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Drop file here, or click to open file dialog!");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("multiple", false);
    } }, dependencies: [ngx_dropzone__WEBPACK_IMPORTED_MODULE_9__.NgxDropzoneComponent, ngx_dropzone__WEBPACK_IMPORTED_MODULE_9__.NgxDropzoneLabelDirective], styles: ["ngx-dropzone[_ngcontent-%COMP%] {\r\n  background-color: var(--accordeon-body-1);\r\n  margin-top: 1.5rem;\r\n}\r\n\r\nngx-dropzone-label[_ngcontent-%COMP%] {\r\n  max-width: unset;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy11cGxvYWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlDQUF5QztFQUN6QyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoiY29uZmlnLXVwbG9hZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmd4LWRyb3B6b25lIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NvcmRlb24tYm9keS0xKTtcclxuICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbn1cclxuXHJcbm5neC1kcm9wem9uZS1sYWJlbCB7XHJcbiAgbWF4LXdpZHRoOiB1bnNldDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 8793:
/*!*********************************************************************!*\
  !*** ./src/app/components/configuration/configuration.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigurationComponent": () => (/* binding */ ConfigurationComponent)
/* harmony export */ });
/* harmony import */ var _utils_objectUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/objectUtils */ 7564);
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-uuid */ 3105);
/* harmony import */ var _edit_fdc_time_edit_fdc_time_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../edit-fdc-time/edit-fdc-time.component */ 7209);
/* harmony import */ var _password_change_password_change_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../password-change/password-change.component */ 8358);
/* harmony import */ var _create_user_create_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../create-user/create-user.component */ 5439);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_mailer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/mailer.service */ 9991);
/* harmony import */ var _services_fdc_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/fdc.service */ 1473);
/* harmony import */ var _services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/authentication/auth.service */ 3271);
/* harmony import */ var _services_socket_connection_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/socket-connection.service */ 6465);
/* harmony import */ var _services_dto_services_mail_template_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/dto-services/mail-template.service */ 8499);
/* harmony import */ var _services_authentication_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/authentication/user.service */ 3732);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _inputs_inputs_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../inputs/inputs.component */ 3460);
/* harmony import */ var _outputs_outputs_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../outputs/outputs.component */ 5037);
/* harmony import */ var _mail_templates_mail_templates_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../mail-templates/mail-templates.component */ 1915);
/* harmony import */ var _config_download_config_download_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../config-download/config-download.component */ 1914);
/* harmony import */ var _config_upload_config_upload_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../config-upload/config-upload.component */ 7155);





















function ConfigurationComponent_ng_template_3_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 15)(1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, "SAVE");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ConfigurationComponent_ng_template_3_div_1_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r10.setFdcTime()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4, "SYSCONF.TIME.SETTIME");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
} }
function ConfigurationComponent_ng_template_3_div_3_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 18)(1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](2, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4, "SYSCONF.NETWORK.DHCP");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "div", 22)(6, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](7, "SYSCONF.NETWORK.HOSTNAME");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](8, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "div", 22)(10, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](11, "SYSCONF.NETWORK.IP");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](12, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "div", 22)(14, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](15, "SYSCONF.NETWORK.GATEWAY");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](16, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](17, "div", 22)(18, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](19, "SYSCONF.NETWORK.DNS1");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](20, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](21, "div", 22)(22, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](23, "SYSCONF.NETWORK.DNS2");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](24, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
} }
function ConfigurationComponent_ng_template_3_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 12)(1, "ngb-accordion", 13)(2, "ngb-panel", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](4, ConfigurationComponent_ng_template_3_div_3_ng_template_4_Template, 25, 0, "ng-template", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](3, 1, "SYSCONF.NETWORK.TITLE"));
} }
function ConfigurationComponent_ng_template_3_div_4_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 33)(1, "div", 34)(2, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3, "SYSCONF.NTP.SERVER1");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](4, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "div", 34)(6, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](7, "SYSCONF.NTP.SERVER2");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](8, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "div", 34)(10, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](11, "SYSCONF.NTP.TIMEZONE");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](12, "select", 40)(13, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](14, "SYSCONF.NTP.TIMEZONES.BERLIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](15, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](16, "SYSCONF.NTP.TIMEZONES.VIENNA");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](17, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](18, "SYSCONF.NTP.TIMEZONES.ZURICH");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
} }
function ConfigurationComponent_ng_template_3_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 12)(1, "ngb-accordion", 13)(2, "ngb-panel", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](4, ConfigurationComponent_ng_template_3_div_4_ng_template_4_Template, 19, 0, "ng-template", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](3, 1, "SYSCONF.NTP.TITLE"));
} }
function ConfigurationComponent_ng_template_3_ng_template_9_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ConfigurationComponent_ng_template_3_ng_template_9_button_0_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r16.createUser()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "USER.CREATE");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ConfigurationComponent_ng_template_3_ng_template_9_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "USER.SIGNEDINUSER");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "user-you": a0 }; };
function ConfigurationComponent_ng_template_3_ng_template_9_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, ConfigurationComponent_ng_template_3_ng_template_9_div_1_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "div", 49)(3, "div")(4, "div", 50)(5, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6, "SYSCONF.USER.USERNAME");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "div", 50)(10, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](11, "SYSCONF.USER.ROLE");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](14, "div", 52)(15, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ConfigurationComponent_ng_template_3_ng_template_9_div_1_Template_button_click_15_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r21); const user_r18 = restoredCtx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r20.changePassword(user_r18.username)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](16, "SYSCONF.USER.CHANGEPASSWORD");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](17, "div")(18, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ConfigurationComponent_ng_template_3_ng_template_9_div_1_Template_button_click_18_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r21); const user_r18 = restoredCtx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r22.deleteUser(user_r18.username)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](19, "SYSCONF.USER.DELETE");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const user_r18 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction1"](5, _c0, user_r18.username === ctx_r15.auth.getUser().username));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", user_r18.username === ctx_r15.auth.getUser().username);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](user_r18.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](user_r18.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", user_r18.username === ctx_r15.auth.getUser().username);
} }
function ConfigurationComponent_ng_template_3_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](0, ConfigurationComponent_ng_template_3_ng_template_9_button_0_Template, 2, 0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, ConfigurationComponent_ng_template_3_ng_template_9_div_1_Template, 20, 7, "div", 45);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r9.auth.isAdmin());
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx_r9.pwChangeService.users);
} }
function ConfigurationComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngSubmit", function ConfigurationComponent_ng_template_3_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r23.onSubmitApplication()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, ConfigurationComponent_ng_template_3_div_1_Template, 5, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](3, ConfigurationComponent_ng_template_3_div_3_Template, 5, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](4, ConfigurationComponent_ng_template_3_div_4_Template, 5, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "div", 12)(6, "ngb-accordion", 13)(7, "ngb-panel", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](9, ConfigurationComponent_ng_template_3_ng_template_9_Template, 2, 2, "ng-template", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("formGroup", ctx_r0.applicationForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r0.auth.isAdmin());
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r0.auth.isAdmin());
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r0.auth.isAdmin());
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](8, 5, "SYSCONF.USER.TITLE"));
} }
function ConfigurationComponent_ngb_panel_4_ng_template_2_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 59)(1, "div", 34)(2, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3, "MAILCONF.SMTP.SECURITY");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "select", 61)(5, "option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6, "MAILCONF.SMTP.UNSAFE");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](8, "MAILCONF.SMTP.SECURE");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "option", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](10, "MAILCONF.SMTP.FORCEDSECURE");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "div", 22)(12, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](13, "MAILCONF.SMTP.SERVER");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](14, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](15, "div", 22)(16, "label", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](17, "MAILCONF.SMTP.PORT");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](18, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](19, "div", 22)(20, "label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](21, "MAILCONF.SMTP.USER");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](22, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](23, "div", 22)(24, "label", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](25, "MAILCONF.SMTP.PASSWORD");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](26, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](27, "div", 22)(28, "label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](29, "MAILCONF.SMTP.SENDERMAIL");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](30, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](31, "div", 22)(32, "label", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](33, "MAILCONF.SMTP.SENDERNAME");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](34, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
} }
function ConfigurationComponent_ngb_panel_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngSubmit", function ConfigurationComponent_ngb_panel_4_ng_template_2_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r27.onSubmitMailer()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "div", 57)(2, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3, "SAVE");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "div", 58)(5, "ngb-accordion", 13)(6, "ngb-panel", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](8, ConfigurationComponent_ngb_panel_4_ng_template_2_ng_template_8_Template, 35, 0, "ng-template", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("formGroup", ctx_r25.mailerForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](7, 2, "MAILCONF.SMTP.TITLE"));
} }
function ConfigurationComponent_ngb_panel_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ngb-panel", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, ConfigurationComponent_ngb_panel_4_ng_template_2_Template, 9, 4, "ng-template", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](1, 2, "MAILCONF.TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", !ctx_r1.socketService.connectedToBackend || !ctx_r1.mailerService.loaded);
} }
function ConfigurationComponent_ngb_panel_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "app-inputs");
} }
function ConfigurationComponent_ngb_panel_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ngb-panel", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, ConfigurationComponent_ngb_panel_5_ng_template_2_Template, 1, 0, "ng-template", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](1, 2, "INPUTS.TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", !ctx_r2.socketService.connectedToBackend || !ctx_r2.applicationService.loaded);
} }
function ConfigurationComponent_ngb_panel_6_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "app-outputs");
} }
function ConfigurationComponent_ngb_panel_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ngb-panel", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, ConfigurationComponent_ngb_panel_6_ng_template_2_Template, 1, 0, "ng-template", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](1, 2, "OUTPUTS.TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", !ctx_r3.socketService.connectedToBackend || !ctx_r3.applicationService.loaded);
} }
function ConfigurationComponent_ngb_panel_7_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "app-mail-templates");
} }
function ConfigurationComponent_ngb_panel_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ngb-panel", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, ConfigurationComponent_ngb_panel_7_ng_template_2_Template, 1, 0, "ng-template", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](1, 2, "MAILTEMPLATES.TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", !ctx_r4.socketService.connectedToBackend || !ctx_r4.mailTemplateService.loaded);
} }
function ConfigurationComponent_ngb_panel_8_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "app-config-download")(1, "app-config-upload");
} }
function ConfigurationComponent_ngb_panel_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ngb-panel", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, ConfigurationComponent_ngb_panel_8_ng_template_2_Template, 2, 0, "ng-template", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](1, 2, "SYSCONF.CONFIGFILES.TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", !ctx_r5.socketService.connectedToBackend);
} }
class ConfigurationComponent {
    constructor(mailerService, applicationService, auth, socketService, mailTemplateService, pwChangeService, fb, modalService) {
        this.mailerService = mailerService;
        this.applicationService = applicationService;
        this.auth = auth;
        this.socketService = socketService;
        this.mailTemplateService = mailTemplateService;
        this.pwChangeService = pwChangeService;
        this.fb = fb;
        this.modalService = modalService;
        this.dataLoading = true;
        this.applicationForm = fb.group({
            maintenanceEnd: [0],
            databasePath: ['/etc/fdc'],
            network: fb.group({
                useDhcp: [0],
                ipAddress: [''],
                gatewayAddress: [''],
                dns1: [''],
                dns2: [''],
                hostname: ['']
            }),
            ntp: fb.group({
                server1: [''],
                server2: [''],
                timezone: ['']
            }),
            physicalAddress: [10000],
            position: ['']
        });
        this.mailerForm = fb.group({
            smtp: fb.group({
                type: [''],
                server: [''],
                port: [''],
                user: [''],
                password: [''],
                senderMail: [''],
                senderName: ['']
            }),
            devNullMode: [1]
        });
        this.timeForm = fb.group({});
    }
    ngOnInit() {
        this.patchapplicationForm();
        this.patchMailerForm();
    }
    patchapplicationForm() {
        if (this.applicationService.loaded) {
            this.applicationForm.patchValue(this.applicationService.data);
        }
        else {
            setTimeout(() => this.patchapplicationForm(), 500);
        }
    }
    patchMailerForm() {
        if (this.mailerService.loaded) {
            this.mailerForm.patchValue(this.mailerService.data);
        }
        else {
            setTimeout(() => this.patchMailerForm(), 500);
        }
    }
    onSubmitApplication() {
        let convertedData = _utils_objectUtils__WEBPACK_IMPORTED_MODULE_0__.ObjectUtils.convertBooleansToNumbers(this.applicationForm.value);
        Object.assign(this.applicationService.data, convertedData);
        if (!this.applicationService.data.id) {
            this.applicationService.data.id = angular2_uuid__WEBPACK_IMPORTED_MODULE_1__.UUID.UUID();
        }
        this.applicationService.update();
    }
    onSubmitMailer() {
        Object.assign(this.mailerService.data, this.mailerForm.value);
        this.mailerService.update();
    }
    setFdcTime() {
        const modalRef = this.modalService.open(_edit_fdc_time_edit_fdc_time_component__WEBPACK_IMPORTED_MODULE_2__.EditFdcTimeComponent);
        modalRef.result.then((result) => {
            let timeInfo = { seconds: (result / 1000), username: this.auth.getUser().username };
            this.socketService.setFdcTime(timeInfo);
        }).catch(() => {
            // ignore cross-click
        });
    }
    changePassword(username) {
        const modalRef = this.modalService.open(_password_change_password_change_component__WEBPACK_IMPORTED_MODULE_3__.PasswordChangeComponent);
        modalRef.componentInstance.username = username;
        modalRef.result.then(() => {
        }).catch(() => {
            // ignore cross-click
        });
    }
    createUser() {
        const modalRef = this.modalService.open(_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_4__.CreateUserComponent);
        modalRef.result.then(() => {
        }).catch(() => {
            // ignore cross-click
        });
    }
    deleteUser(username) {
        this.pwChangeService.deleteUser(username);
    }
}
ConfigurationComponent.ɵfac = function ConfigurationComponent_Factory(t) { return new (t || ConfigurationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_mailer_service__WEBPACK_IMPORTED_MODULE_5__.MailerService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_fdc_service__WEBPACK_IMPORTED_MODULE_6__.FdcService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_socket_connection_service__WEBPACK_IMPORTED_MODULE_8__.SocketConnectionService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_dto_services_mail_template_service__WEBPACK_IMPORTED_MODULE_9__.MailTemplateService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_authentication_user_service__WEBPACK_IMPORTED_MODULE_10__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_17__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbModal)); };
ConfigurationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({ type: ConfigurationComponent, selectors: [["app-configuration"]], decls: 9, vars: 9, consts: [["activeIds", ""], ["id", "application", 3, "title", "disabled"], ["ngbPanelContent", ""], ["id", "mailer", 3, "title", "disabled", 4, "ngIf"], ["id", "inputs", 3, "title", "disabled", 4, "ngIf"], ["id", "outputs", 3, "title", "disabled", 4, "ngIf"], ["id", "mailtemplates", 3, "title", "disabled", 4, "ngIf"], ["id", "config-download-upload", 3, "title", "disabled", 4, "ngIf"], [3, "formGroup", "ngSubmit"], ["class", "d-flex flex-row flex-nowrap justify-content-between  my-3", 4, "ngIf"], [1, "row", "accordion-level-1"], ["class", "col-lg-6 my-2", 4, "ngIf"], [1, "col-lg-6", "my-2"], ["activeIds", "0"], [3, "title"], [1, "d-flex", "flex-row", "flex-nowrap", "justify-content-between", "my-3"], ["type", "submit", "translate", "", 1, "btn", "btn-primary"], ["type", "button", "translate", "", 1, "btn", "btn-primary", "ms-3", 3, "click"], ["formGroupName", "network", 1, "row"], [1, "form-check", "ps-4", "col-12"], ["id", "useDhcp", "type", "checkbox", "value", "", "formControlName", "useDhcp", 1, "form-check-input"], ["for", "useDhcp", "translate", "", 1, "form-check-label"], [1, "form-group", "col-md-6", "my-1"], ["for", "hostname", "translate", "", 1, "form-label", "my-0"], ["id", "hostname", "type", "text", "formControlName", "hostname", 1, "form-control"], ["for", "ipAddress", "translate", "", 1, "form-label", "my-0"], ["id", "ipAddress", "type", "text", "formControlName", "ipAddress", 1, "form-control"], ["for", "gatewayAddress", "translate", "", 1, "form-label", "my-0"], ["id", "gatewayAddress", "type", "text", "formControlName", "gatewayAddress", 1, "form-control"], ["for", "dns1", "translate", "", 1, "form-label", "my-0"], ["id", "dns1", "type", "text", "formControlName", "dns1", 1, "form-control"], ["for", "dns2", "translate", "", 1, "form-label", "my-0"], ["id", "dns2", "type", "text", "formControlName", "dns2", 1, "form-control"], ["formGroupName", "ntp", 1, "row"], [1, "form-group", "col-md-6"], ["for", "ntpServer1", "translate", "", 1, "form-label", "my-0"], ["id", "ntpServer1", "type", "text", "formControlName", "server1", 1, "form-control"], ["for", "ntpServer2", "translate", "", 1, "form-label", "my-0"], ["id", "ntpServer2", "type", "text", "formControlName", "server2", 1, "form-control"], ["for", "ntpTimezone", "translate", "", 1, "form-label", "my-0"], ["id", "ntpTimezone", "formControlName", "timezone", 1, "form-select"], ["value", "Europe/Berlin", "translate", ""], ["value", "Europe/Vienna", "translate", ""], ["value", "Europe/Zurich", "translate", ""], ["class", "btn btn-primary mb-3", "type", "button", "translate", "", 3, "click", 4, "ngIf"], ["class", "px-2", 3, "ngClass", 4, "ngFor", "ngForOf"], ["type", "button", "translate", "", 1, "btn", "btn-primary", "mb-3", 3, "click"], [1, "px-2", 3, "ngClass"], ["class", "text-danger", "translate", "", 4, "ngIf"], [1, "d-flex", "flex-nowrap", "my-2"], [1, "d-flex", "flex-nowrap"], ["translate", "", 1, "fw-bold", "me-2"], [1, "ms-auto"], ["type", "button", "translate", "", 1, "btn", "btn-primary", 3, "click"], ["type", "button", "translate", "", 1, "btn", "btn-primary", "ms-1", 3, "disabled", "click"], ["translate", "", 1, "text-danger"], ["id", "mailer", 3, "title", "disabled"], [1, "col-md-3", "my-3"], [1, "col-lg-6", "my-2", "accordion-level-1"], ["formGroupName", "smtp", 1, "row"], ["for", "type", "translate", "", 1, "form-label", "my-0"], ["id", "type", "formControlName", "type", 1, "form-select"], ["value", "Unsafe", "translate", ""], ["value", "Secure", "translate", ""], ["value", "ForcedSecure", "translate", ""], ["for", "server", "translate", "", 1, "form-label", "my-0"], ["id", "server", "type", "text", "formControlName", "server", 1, "form-control"], ["for", "smtpPort", "translate", "", 1, "form-label", "my-0"], ["id", "smtpPort", "type", "number", "formControlName", "port", 1, "form-control"], ["for", "smtpUser", "translate", "", 1, "form-label", "my-0"], ["id", "smtpUser", "type", "text", "formControlName", "user", 1, "form-control"], ["for", "smtpPassword", "translate", "", 1, "form-label", "my-0"], ["id", "smtpPassword", "type", "password", "formControlName", "password", 1, "form-control"], ["for", "senderMail", "translate", "", 1, "form-label", "my-0"], ["id", "senderMail", "type", "text", "formControlName", "senderMail", 1, "form-control"], ["for", "senderName", "translate", "", 1, "form-label", "my-0"], ["id", "senderName", "type", "text", "formControlName", "senderName", 1, "form-control"], ["id", "inputs", 3, "title", "disabled"], ["id", "outputs", 3, "title", "disabled"], ["id", "mailtemplates", 3, "title", "disabled"], ["id", "config-download-upload", 3, "title", "disabled"]], template: function ConfigurationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ngb-accordion", 0)(1, "ngb-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](3, ConfigurationComponent_ng_template_3_Template, 10, 7, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](4, ConfigurationComponent_ngb_panel_4_Template, 3, 4, "ngb-panel", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](5, ConfigurationComponent_ngb_panel_5_Template, 3, 4, "ngb-panel", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](6, ConfigurationComponent_ngb_panel_6_Template, 3, 4, "ngb-panel", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](7, ConfigurationComponent_ngb_panel_7_Template, 3, 4, "ngb-panel", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](8, ConfigurationComponent_ngb_panel_8_Template, 3, 4, "ngb-panel", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 7, "SYSCONF.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", !ctx.socketService.connectedToBackend || !ctx.applicationService.loaded && ctx.auth.isAdmin());
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.auth.isAdmin());
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.auth.isAdmin());
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.auth.isAdmin());
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.auth.isAdmin());
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.auth.isAdmin());
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbAccordion, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbPanel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbPanelContent, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormGroupName, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslateDirective, _inputs_inputs_component__WEBPACK_IMPORTED_MODULE_11__.InputsComponent, _outputs_outputs_component__WEBPACK_IMPORTED_MODULE_12__.OutputsComponent, _mail_templates_mail_templates_component__WEBPACK_IMPORTED_MODULE_13__.MailTemplatesComponent, _config_download_config_download_component__WEBPACK_IMPORTED_MODULE_14__.ConfigDownloadComponent, _config_upload_config_upload_component__WEBPACK_IMPORTED_MODULE_15__.ConfigUploadComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslatePipe], styles: [".user-you[_ngcontent-%COMP%] {\r\n  border: #0d6efd solid 2px;\r\n  border-radius: .25rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZ3VyYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkIiLCJmaWxlIjoiY29uZmlndXJhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXIteW91IHtcclxuICBib3JkZXI6ICMwZDZlZmQgc29saWQgMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 4949:
/*!***********************************************************************!*\
  !*** ./src/app/components/confirm-dialog/confirm-dialog.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmDialogComponent": () => (/* binding */ ConfirmDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 8699);



class ConfirmDialogComponent {
    constructor(modal) {
        this.modal = modal;
        this.title = 'Missing title';
        this.message = 'Missing message';
        this.okText = 'OK';
        this.cancelText = 'CANCEL';
    }
    ngOnInit() {
    }
}
ConfirmDialogComponent.ɵfac = function ConfirmDialogComponent_Factory(t) { return new (t || ConfirmDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbActiveModal)); };
ConfirmDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmDialogComponent, selectors: [["app-confirm-dialog"]], inputs: { title: "title", message: "message", okText: "okText", cancelText: "cancelText" }, decls: 17, vars: 12, consts: [[1, "modal-header", "modal-header-background"], ["id", "modal-title", "translate", "", 1, "modal-title"], ["type", "button", "aria-label", "Close button", "aria-describedby", "modal-title", 1, "btn-close", 3, "click"], [1, "modal-body", "modal-body-background"], ["translate", ""], [1, "modal-footer", "modal-footer-background"], ["type", "button", "ngbAutofocus", "", 1, "btn", "btn-outline-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]], template: function ConfirmDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_button_click_4_listener() { return ctx.modal.dismiss("cancel"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3)(6, "p")(7, "strong", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5)(11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_button_click_11_listener() { return ctx.modal.dismiss("cancel"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_button_click_14_listener() { return ctx.modal.close("ok"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx.title));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 6, ctx.message));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 8, ctx.cancelText));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 10, ctx.okText));
    } }, dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maXJtLWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 5439:
/*!*****************************************************************!*\
  !*** ./src/app/components/create-user/create-user.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateUserComponent": () => (/* binding */ CreateUserComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _services_authentication_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/authentication/user.service */ 3732);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../directives/autofocus.directive */ 3185);
/* harmony import */ var _subcomponent_password_repeat_password_repeat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../subcomponent/password-repeat/password-repeat.component */ 7068);








class CreateUserComponent {
    constructor(activeModal, fb, userService) {
        this.activeModal = activeModal;
        this.fb = fb;
        this.userService = userService;
        this.userForm = {};
    }
    ngOnInit() {
        this.userForm = this.fb.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(6)], []],
            role: [undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required], []]
        });
    }
    get username() {
        return this.userForm.controls['username'].value;
    }
    get role() {
        return this.userForm.controls['role'].value;
    }
    validateUserData() {
        return this.userForm.valid && this.password !== undefined;
    }
    submitForm() {
        if (this.validateUserData()) {
            this.userService.createUser({
                username: this.username,
                role: this.role,
                password: this.password
            }).subscribe({
                next: () => {
                    this.activeModal.close();
                }
            });
        }
    }
}
CreateUserComponent.ɵfac = function CreateUserComponent_Factory(t) { return new (t || CreateUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_authentication_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService)); };
CreateUserComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CreateUserComponent, selectors: [["app-create-user"]], decls: 27, vars: 6, consts: [[1, "modal-header", "modal-header-background"], [1, "modal-title", "text-nowrap"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body", "modal-body-background"], [1, "container"], [3, "formGroup"], [1, "form-group"], ["for", "username", "translate", ""], [1, "input-group"], ["id", "username", "formControlName", "username", "type", "text", "appAutofocus", "", 1, "form-control", "shadow-none"], ["for", "type", "translate", "", 1, "form-label", "my-0"], ["id", "type", "formControlName", "role", 1, "form-select"], ["value", "ADMIN", "translate", ""], ["value", "SERVICE", "translate", ""], ["value", "USER", "translate", ""], [3, "password", "passwordChange"], [1, "modal-footer", "modal-footer-background"], ["type", "button", "translate", "", 1, "btn", "btn-success", 3, "disabled", "click"]], template: function CreateUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreateUserComponent_Template_button_click_4_listener() { return ctx.activeModal.dismiss("Cross click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 3)(6, "div", 4)(7, "form", 5)(8, "div", 6)(9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "USER.USERNAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 6)(14, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "USER.ROLE");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "select", 11)(17, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "USER.ROLES.ADMIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "USER.ROLES.SERVICE");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "USER.ROLES.USER");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "app-password-repeat", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("passwordChange", function CreateUserComponent_Template_app_password_repeat_passwordChange_23_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 16)(25, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreateUserComponent_Template_button_click_25_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "SAVE");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 4, "USER.CHANGEPASSWORD.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.userForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("password", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.validateUserData());
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateDirective, _directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_1__.AutofocusDirective, _subcomponent_password_repeat_password_repeat_component__WEBPACK_IMPORTED_MODULE_2__.PasswordRepeatComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtdXNlci5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 834:
/*!*********************************************************************!*\
  !*** ./src/app/components/damper-groups/damper-groups.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DamperGroupsComponent": () => (/* binding */ DamperGroupsComponent)
/* harmony export */ });
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular2-uuid */ 3105);
/* harmony import */ var _edit_damper_group_edit_damper_group_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../edit-damper-group/edit-damper-group.component */ 1528);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_dto_services_damper_group_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/dto-services/damper-group.service */ 3705);
/* harmony import */ var _services_dto_services_validity_check_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/dto-services/validity-check.service */ 6576);
/* harmony import */ var _services_dto_services_input_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/dto-services/input.service */ 6441);
/* harmony import */ var _services_dto_services_output_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/dto-services/output.service */ 5782);
/* harmony import */ var _services_dto_services_mail_template_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/dto-services/mail-template.service */ 8499);
/* harmony import */ var _services_dto_services_fda_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/dto-services/fda.service */ 7576);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 8699);












function DamperGroupsComponent_div_4_ng_template_3_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const inputId_r9 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r3.inputService.getById(inputId_r9).name);
} }
function DamperGroupsComponent_div_4_ng_template_3_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const inputId_r10 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r4.inputService.getById(inputId_r10).name);
} }
function DamperGroupsComponent_div_4_ng_template_3_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const inputId_r11 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r5.outputService.getById(inputId_r11).name);
} }
function DamperGroupsComponent_div_4_ng_template_3_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const damper_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](damper_r12.name + (damper_r12.damperType == "Main" ? " (Maindamper)" : ""));
} }
function DamperGroupsComponent_div_4_ng_template_3_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "No dampers found for group.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function DamperGroupsComponent_div_4_ng_template_3_button_37_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DamperGroupsComponent_div_4_ng_template_3_button_37_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r15); const damperGroup_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r13.remove(damperGroup_r1.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "DELETE");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx_r8.damperGroupService.loaded);
} }
function DamperGroupsComponent_div_4_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 8)(1, "table", 9)(2, "tr")(3, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "NAME");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "tr")(8, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "FDACONFIG.GROUPS.ALARMINPUT");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, DamperGroupsComponent_div_4_ng_template_3_div_11_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "tr")(13, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "FDACONFIG.GROUPS.VENTINPUT");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, DamperGroupsComponent_div_4_ng_template_3_div_16_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "tr")(18, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "FDACONFIG.GROUPS.VENTOUTPUT");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, DamperGroupsComponent_div_4_ng_template_3_div_21_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "tr")(23, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24, "FDACONFIG.GROUPS.MAIL.ALARM");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "tr")(28, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29, "FDACONFIG.GROUPS.MAIL.TIMEOUT");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33, "FDACONFIG.GROUPS.DAMPERS");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](34, DamperGroupsComponent_div_4_ng_template_3_div_34_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](35, DamperGroupsComponent_div_4_ng_template_3_div_35_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](37, DamperGroupsComponent_div_4_ng_template_3_button_37_Template, 2, 1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DamperGroupsComponent_div_4_ng_template_3_Template_button_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r18); const damperGroup_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r16.edit(damperGroup_r1.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](39, "EDIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const damperGroup_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](damperGroup_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", damperGroup_r1.bmaAlarm);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", damperGroup_r1.ventilationRequest);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", damperGroup_r1.ventilationAllowed);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r2.mailTemplateService.getById(damperGroup_r1.alarmMailTemplate).name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r2.mailTemplateService.getById(damperGroup_r1.timeoutMailTemplate).name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r2.getFilteredDampersForGroup(damperGroup_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.getFilteredDampersForGroup(damperGroup_r1.id).length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r2.validityCheckService.damperGroupUsedInFda(damperGroup_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx_r2.damperGroupService.loaded);
} }
function DamperGroupsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 4)(1, "ngb-accordion", 5)(2, "ngb-panel", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, DamperGroupsComponent_div_4_ng_template_3_Template, 40, 10, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const damperGroup_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("title", damperGroup_r1.name);
} }
class DamperGroupsComponent {
    constructor(damperGroupService, validityCheckService, inputService, outputService, mailTemplateService, fdaService, modalService) {
        this.damperGroupService = damperGroupService;
        this.validityCheckService = validityCheckService;
        this.inputService = inputService;
        this.outputService = outputService;
        this.mailTemplateService = mailTemplateService;
        this.fdaService = fdaService;
        this.modalService = modalService;
        this.id = angular2_uuid__WEBPACK_IMPORTED_MODULE_0__.UUID.UUID();
    }
    ngOnInit() {
    }
    create() {
        const modalRef = this.modalService.open(_edit_damper_group_edit_damper_group_component__WEBPACK_IMPORTED_MODULE_1__.EditDamperGroupComponent);
        modalRef.result.then((result) => {
            //result.id = UUID.UUID();
            this.damperGroupService.add(result);
        }).catch((error) => {
            console.log(error);
        });
    }
    edit(groupId) {
        let damperGroups = this.damperGroupService.getData().filter((group) => group.id === groupId);
        if (damperGroups && damperGroups.length == 1) {
            let damperGroup = damperGroups[0];
            const modalRef = this.modalService.open(_edit_damper_group_edit_damper_group_component__WEBPACK_IMPORTED_MODULE_1__.EditDamperGroupComponent);
            modalRef.componentInstance.damperGroup = damperGroup;
            modalRef.result.then((result) => {
                Object.assign(damperGroup, result);
                this.damperGroupService.update();
            }).catch(() => {
                // ignore cross-click
            });
        }
    }
    remove(groupId) {
        this.damperGroupService.remove(groupId);
    }
    getFilteredDampersForGroup(groupId) {
        let dampers = [];
        this.fdaService.data.filter(fda => {
            if (fda.damper1.groups && fda.damper1.groups.includes(groupId)) {
                dampers.push(fda.damper1);
            }
            if (fda.damper2.groups && fda.damper2.groups.includes(groupId)) {
                dampers.push(fda.damper2);
            }
        });
        return dampers;
    }
    canAddDamperGroup() {
        return this.damperGroupService.getData() && this.damperGroupService.getData().length < 8;
    }
}
DamperGroupsComponent.ɵfac = function DamperGroupsComponent_Factory(t) { return new (t || DamperGroupsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_dto_services_damper_group_service__WEBPACK_IMPORTED_MODULE_2__.DamperGroupService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_dto_services_validity_check_service__WEBPACK_IMPORTED_MODULE_3__.ValidityCheckService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_dto_services_input_service__WEBPACK_IMPORTED_MODULE_4__.InputService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_dto_services_output_service__WEBPACK_IMPORTED_MODULE_5__.OutputService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_dto_services_mail_template_service__WEBPACK_IMPORTED_MODULE_6__.MailTemplateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_dto_services_fda_service__WEBPACK_IMPORTED_MODULE_7__.FdaService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModal)); };
DamperGroupsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: DamperGroupsComponent, selectors: [["app-damper-groups"]], decls: 5, vars: 3, consts: [[1, "col-md-3", "my-3"], ["translate", "", 1, "btn", "btn-primary", "w-100", "shadow-none", 3, "disabled", "click"], [1, "row", "accordion-level-1", 3, "id"], ["class", "col-lg-6 my-2", 4, "ngFor", "ngForOf"], [1, "col-lg-6", "my-2"], ["activeIds", "0"], [3, "title"], ["ngbPanelContent", ""], [2, "display", "flex", "flex-direction", "column"], [1, "table", "table-borderless"], ["translate", "", 1, "fw-bold"], [1, "text-end"], ["translate", "", 1, "fw-bold", "align-text-top", "py-1"], [1, "text-end", "align-text-top", "py-1"], ["class", "p-0", 4, "ngFor", "ngForOf"], ["translate", "", 1, "fw-bold", "align-text-top"], [1, "text-end", "align-text-top"], ["translate", "", 1, "form-label", "fw-bold", "mt-2"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "mt-2"], ["class", "btn btn-outline-danger me-3 mt-3", "translate", "", 3, "disabled", "click", 4, "ngIf"], ["translate", "", 1, "btn", "btn-outline-primary", "mt-3", 3, "disabled", "click"], [1, "p-0"], ["translate", "", 1, "btn", "btn-outline-danger", "me-3", "mt-3", 3, "disabled", "click"]], template: function DamperGroupsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DamperGroupsComponent_Template_button_click_1_listener() { return ctx.create(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "FDACONFIG.GROUPS.NEW");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, DamperGroupsComponent_div_4_Template, 4, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx.canAddDamperGroup() || !ctx.damperGroupService.loaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("id", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.damperGroupService.getData());
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbAccordion, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbPanel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbPanelContent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYW1wZXItZ3JvdXBzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 619:
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _edit_fda_edit_fda_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../edit-fda/edit-fda.component */ 3997);
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-uuid */ 3105);
/* harmony import */ var _edit_damper_mode_edit_damper_mode_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../edit-damper-mode/edit-damper-mode.component */ 3025);
/* harmony import */ var _fda_replacement_fda_replacement_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fda-replacement/fda-replacement.component */ 5137);
/* harmony import */ var _messagebox_messagebox_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../messagebox/messagebox.component */ 3666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_dto_services_fda_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/dto-services/fda.service */ 7576);
/* harmony import */ var _services_dto_services_input_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/dto-services/input.service */ 6441);
/* harmony import */ var _services_dto_services_output_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/dto-services/output.service */ 5782);
/* harmony import */ var _services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/authentication/auth.service */ 3271);
/* harmony import */ var _services_socket_connection_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/socket-connection.service */ 6465);
/* harmony import */ var _services_system_health_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/system-health.service */ 4185);
/* harmony import */ var _services_fdc_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/fdc.service */ 1473);
/* harmony import */ var _services_dto_services_damper_group_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/dto-services/damper-group.service */ 3705);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_dto_services_dampermode_change_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/dto-services/dampermode-change.service */ 7159);
/* harmony import */ var _services_dto_services_maintenance_mode_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/dto-services/maintenance-mode.service */ 8595);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _status_symbols_status_symbols_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../status-symbols/status-symbols.component */ 2842);





















function DashboardComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "app-status-symbols", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("showOk", ctx_r0.sysHealthService.activeAlarms === 0 && ctx_r0.sysHealthService.activeTimeouts === 0 && ctx_r0.sysHealthService.status.damperGroups.length > 0 && ctx_r0.socketService.connectedToBackend)("showWarning", ctx_r0.sysHealthService.activeAlarms > 0 && ctx_r0.socketService.connectedToBackend)("showTimeglass", ctx_r0.sysHealthService.activeTimeouts > 0 && ctx_r0.socketService.connectedToBackend)("showQuestionmark", !ctx_r0.socketService.connectedToBackend || ctx_r0.sysHealthService.status.damperGroups.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](4, 5, "DASHBOARD.TITLES.GROUPS"));
} }
function DashboardComponent_ng_template_3_div_1_ng_template_3_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "MAINTENANCEMODE.MAINTENANCE");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function DashboardComponent_ng_template_3_div_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "app-status-symbols", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "div", 15)(3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](5, DashboardComponent_ng_template_3_div_1_ng_template_3_div_5_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const group_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("showOk", group_r6.currentAlarmState === 0 && group_r6.currentTimeoutState === 0 && group_r6.dampersAvailable.length > 0 && !ctx_r7.getIsHighOr(group_r6.bmaAlarm))("showWarning", group_r6.currentAlarmState === 1 || ctx_r7.getIsHighOr(group_r6.bmaAlarm))("showTimeglass", group_r6.currentAlarmState === 0 && group_r6.currentTimeoutState === 1 && !ctx_r7.getIsHighOr(group_r6.bmaAlarm))("showQuestionmark", group_r6.dampersAvailable.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](group_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r7.maintenanceModeService.isMaintenanceActive());
} }
function DashboardComponent_ng_template_3_div_1_ng_template_4_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 26)(1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](2, "app-status-symbols", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](8, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const alarmInput_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("showInput", alarmInput_r17.currentState === "High" || alarmInput_r17.currentState === "Low")("inputHigh", alarmInput_r17.currentState === "High")("inputOk", alarmInput_r17.currentState === "Low")("inputDanger", alarmInput_r17.currentState === "High")("showQuestionmark", alarmInput_r17.currentState === "Undefined");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](alarmInput_r17.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" (", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](7, 7, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](8, 9, "IO." + alarmInput_r17.currentState)), ") ");
} }
function DashboardComponent_ng_template_3_div_1_ng_template_4_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 26)(1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](2, "app-status-symbols", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](8, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ventInput_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("showInput", ventInput_r18.currentState === "High" || ventInput_r18.currentState === "Low")("inputHigh", ventInput_r18.currentState === "High")("inputOk", ventInput_r18.currentState === "High")("inputDanger", ventInput_r18.currentState === "Low")("disableIOAnimation", ventInput_r18.currentState === "High")("showQuestionmark", ventInput_r18.currentState === "Undefined");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ventInput_r18.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" (", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](7, 8, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](8, 10, "IO." + ventInput_r18.currentState)), ") ");
} }
function DashboardComponent_ng_template_3_div_1_ng_template_4_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 30)(1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](2, "app-status-symbols", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](8, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const output_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("showOutput", output_r19.currentState === "High" || output_r19.currentState === "Low")("outputHigh", output_r19.currentState === "High")("disableIOAnimation", output_r19.currentState === "High")("showQuestionmark", output_r19.currentState === "Undefined");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](output_r19.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" (", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](7, 6, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](8, 8, "IO." + output_r19.currentState)), ") ");
} }
function DashboardComponent_ng_template_3_div_1_ng_template_4_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, " DASHBOARD.NOACTIVEDAMPERSINGROUP ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function DashboardComponent_ng_template_3_div_1_ng_template_4_div_13_div_1_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "FDACONFIG.FDAS.DAMPERS.MODES.UNKNOWN"));
} }
function DashboardComponent_ng_template_3_div_1_ng_template_4_div_13_div_1_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const damper_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "FDACONFIG.FDAS.DAMPERS.MODES." + damper_r21.currentDamperMode.toUpperCase()));
} }
function DashboardComponent_ng_template_3_div_1_ng_template_4_div_13_div_1_div_23_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const statusPart_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "FDACONFIG.FDAS.DAMPERS.STATES." + statusPart_r29.toUpperCase()));
} }
const _c0 = function (a0) { return { "fw-bold": a0 }; };
function DashboardComponent_ng_template_3_div_1_ng_template_4_div_13_div_1_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, DashboardComponent_ng_template_3_div_1_ng_template_4_div_13_div_1_div_23_div_1_Template, 3, 3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const statusPart_r29 = ctx.$implicit;
    const damper_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction1"](2, _c0, damper_r21.damperType === "Main"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", statusPart_r29 !== "");
} }
function DashboardComponent_ng_template_3_div_1_ng_template_4_div_13_div_1_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "FDACONFIG.FDAS.DAMPERS.STATES.UNDEFINED");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function DashboardComponent_ng_template_3_div_1_ng_template_4_div_13_div_1_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "FDACONFIG.FDAS.DAMPERS.UNAVAILABLE");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function DashboardComponent_ng_template_3_div_1_ng_template_4_div_13_div_1_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function DashboardComponent_ng_template_3_div_1_ng_template_4_div_13_div_1_div_26_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r35); const damper_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](5); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r33.changeDamperMode(damper_r21.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "FDACONFIG.FDAS.DAMPERS.CHANGEMODE");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
const _c1 = function (a0, a1, a2, a3, a4, a5, a6) { return { "damper-opened-bg": a0, "damper-closed-bg": a1, "damper-opening-bg": a2, "damper-closing-bg": a3, "damper-timeout": a4, "damper-alarm": a5, "damper-status-unknown": a6 }; };
function DashboardComponent_ng_template_3_div_1_ng_template_4_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 35)(1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "div", 37)(4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5, "DEVICES.FDA");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "div", 37)(9, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](10, "FDACONFIG.FDAS.DAMPERS.TYPE");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](14, "div", 37)(15, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](16, "FDACONFIG.FDAS.DAMPERS.MODE");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](17, DashboardComponent_ng_template_3_div_1_ng_template_4_div_13_div_1_div_17_Template, 3, 3, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](18, DashboardComponent_ng_template_3_div_1_ng_template_4_div_13_div_1_div_18_Template, 3, 3, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](19, "div", 41)(20, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](21, "STATUS");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](22, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](23, DashboardComponent_ng_template_3_div_1_ng_template_4_div_13_div_1_div_23_Template, 2, 4, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](24, DashboardComponent_ng_template_3_div_1_ng_template_4_div_13_div_1_div_24_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](25, DashboardComponent_ng_template_3_div_1_ng_template_4_div_13_div_1_div_25_Template, 2, 0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](26, DashboardComponent_ng_template_3_div_1_ng_template_4_div_13_div_1_div_26_Template, 2, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const damper_r21 = ctx.$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction7"](13, _c1, damper_r21.currentStates.includes("Opened"), damper_r21.currentStates.includes("Closed"), damper_r21.currentStates.includes("Opening"), damper_r21.currentStates.includes("Closing"), damper_r21.currentStates.includes("Timeout"), damper_r21.currentStates.includes("Alarm"), damper_r21.currentStates.length === 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](damper_r21.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](damper_r21.physicalAddress + " - " + "D" + damper_r21.number);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction1"](21, _c0, damper_r21.damperType === "Main"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](13, 11, "FDACONFIG.FDAS.DAMPERS.TYPES." + damper_r21.damperType.toUpperCase()));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !damper_r21.currentDamperMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", damper_r21.currentDamperMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", damper_r21.currentStates);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", damper_r21.currentStates.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", damper_r21.currentStates.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r20.auth.isLoggedIn() && ctx_r20.fdaService.loaded);
} }
function DashboardComponent_ng_template_3_div_1_ng_template_4_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, DashboardComponent_ng_template_3_div_1_ng_template_4_div_13_div_1_Template, 27, 23, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", group_r6.dampersAvailable);
} }
function DashboardComponent_ng_template_3_div_1_ng_template_4_div_14_div_3_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "FDACONFIG.FDAS.DAMPERS.MODES.UNKNOWN"));
} }
function DashboardComponent_ng_template_3_div_1_ng_template_4_div_14_div_3_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const damper_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "FDACONFIG.FDAS.DAMPERS.MODES." + damper_r38.currentDamperMode.toUpperCase()));
} }
function DashboardComponent_ng_template_3_div_1_ng_template_4_div_14_div_3_div_23_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const statusPart_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("FDACONFIG.FDAS.DAMPERS.STATES.", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, statusPart_r45), "");
} }
function DashboardComponent_ng_template_3_div_1_ng_template_4_div_14_div_3_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, DashboardComponent_ng_template_3_div_1_ng_template_4_div_14_div_3_div_23_div_1_Template, 3, 3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const statusPart_r45 = ctx.$implicit;
    const damper_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction1"](2, _c0, damper_r38.damperType === "Main"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", statusPart_r45 !== "");
} }
function DashboardComponent_ng_template_3_div_1_ng_template_4_div_14_div_3_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "FDACONFIG.FDAS.DAMPERS.STATES.UNDEFINED");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function DashboardComponent_ng_template_3_div_1_ng_template_4_div_14_div_3_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function DashboardComponent_ng_template_3_div_1_ng_template_4_div_14_div_3_div_25_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r51); const damper_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit; const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](5); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r49.changeDamperMode(damper_r38.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "FDACONFIG.FDAS.DAMPERS.CHANGEMODE");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function DashboardComponent_ng_template_3_div_1_ng_template_4_div_14_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 50)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "div", 37)(4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5, "DEVICES.FDA");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "div", 37)(9, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](10, "FDACONFIG.FDAS.DAMPERS.TYPE");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](14, "div", 37)(15, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](16, "FDACONFIG.FDAS.DAMPERS.MODE");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](17, DashboardComponent_ng_template_3_div_1_ng_template_4_div_14_div_3_div_17_Template, 3, 3, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](18, DashboardComponent_ng_template_3_div_1_ng_template_4_div_14_div_3_div_18_Template, 3, 3, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](19, "div", 41)(20, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](21, "STATUS");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](22, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](23, DashboardComponent_ng_template_3_div_1_ng_template_4_div_14_div_3_div_23_Template, 2, 4, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](24, DashboardComponent_ng_template_3_div_1_ng_template_4_div_14_div_3_div_24_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](25, DashboardComponent_ng_template_3_div_1_ng_template_4_div_14_div_3_div_25_Template, 2, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const damper_r38 = ctx.$implicit;
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](damper_r38.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](damper_r38.physicalAddress + " - " + "D" + damper_r38.number);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction1"](11, _c0, damper_r38.damperType === "Main"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](13, 9, "FDACONFIG.FDAS.DAMPERS.TYPES." + damper_r38.damperType.toUpperCase()));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !damper_r38.currentDamperMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", damper_r38.currentDamperMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", damper_r38.currentStates);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", damper_r38.currentStates.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r37.auth.isLoggedIn() && ctx_r37.fdaService.loaded);
} }
function DashboardComponent_ng_template_3_div_1_ng_template_4_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div")(1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, "Disabled dampers");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](3, DashboardComponent_ng_template_3_div_1_ng_template_4_div_14_div_3_Template, 26, 13, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", group_r6.dampersDisabled);
} }
function DashboardComponent_ng_template_3_div_1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "DASHBOARD.GROUPS.ALARMINPUTS");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](3, DashboardComponent_ng_template_3_div_1_ng_template_4_div_3_Template, 9, 11, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5, "DASHBOARD.GROUPS.VENTINPUTS");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](7, DashboardComponent_ng_template_3_div_1_ng_template_4_div_7_Template, 9, 12, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](9, "DASHBOARD.GROUPS.VENTOUTPUTS");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](11, DashboardComponent_ng_template_3_div_1_ng_template_4_div_11_Template, 9, 10, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](12, DashboardComponent_ng_template_3_div_1_ng_template_4_div_12_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](13, DashboardComponent_ng_template_3_div_1_ng_template_4_div_13_Template, 2, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](14, DashboardComponent_ng_template_3_div_1_ng_template_4_div_14_Template, 4, 1, "div", 25);
} if (rf & 2) {
    const group_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", group_r6.bmaAlarm);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", group_r6.ventilationRequest);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", group_r6.ventilationAllowed);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", group_r6.dampersAvailable.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", group_r6.dampersAvailable.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", group_r6.dampersDisabled.length > 0);
} }
const _c2 = function (a0, a1) { return { "has-alarm": a0, "maintenance-active": a1 }; };
function DashboardComponent_ng_template_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 12)(1, "ngb-accordion", 13)(2, "ngb-panel", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](3, DashboardComponent_ng_template_3_div_1_ng_template_3_Template, 6, 6, "ng-template", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](4, DashboardComponent_ng_template_3_div_1_ng_template_4_Template, 15, 6, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const group_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction2"](3, _c2, group_r6.currentAlarmState === 1, ctx_r5.maintenanceModeService.isMaintenanceActive()));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("activeIds", group_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("id", group_r6.id);
} }
function DashboardComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, DashboardComponent_ng_template_3_div_1_Template, 5, 6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx_r1.sysHealthService.status.damperGroups);
} }
function DashboardComponent_ngb_panel_4_ng_template_1_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate2"]("", ctx_r56.sysHealthService.status.fdas.inStatusUnconfigured.length, "\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 2, "DASHBOARD.FDAS.UNCONFIGURED"), "");
} }
function DashboardComponent_ngb_panel_4_ng_template_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate2"]("", ctx_r57.sysHealthService.status.fdas.configuredNotInStatus.length, "\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 2, "DASHBOARD.FDAS.NOTCONNECTED"), "");
} }
function DashboardComponent_ngb_panel_4_ng_template_1_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate2"]("", ctx_r58.sysHealthService.status.fdas.inStatusConfigured.length, "\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 2, "DASHBOARD.FDAS.OPERATIONAL"), "");
} }
function DashboardComponent_ngb_panel_4_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 7)(1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](2, "app-status-symbols", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](7, DashboardComponent_ngb_panel_4_ng_template_1_div_7_Template, 3, 4, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](8, DashboardComponent_ngb_panel_4_ng_template_1_div_8_Template, 3, 4, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](9, DashboardComponent_ngb_panel_4_ng_template_1_div_9_Template, 3, 4, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("showOk", ctx_r54.sysHealthService.status.fdas.inStatusUnconfigured.length === 0 && ctx_r54.sysHealthService.status.fdas.configuredNotInStatus.length === 0 && ctx_r54.sysHealthService.status.fdas.inStatusConfigured.length > 0 && ctx_r54.socketService.connectedToBackend)("showWarning", (ctx_r54.sysHealthService.status.fdas.inStatusUnconfigured.length !== 0 || ctx_r54.sysHealthService.status.fdas.configuredNotInStatus.length !== 0) && ctx_r54.socketService.connectedToBackend)("showQuestionmark", ctx_r54.sysHealthService.status.fdas.inStatusUnconfigured.length === 0 && ctx_r54.sysHealthService.status.fdas.configuredNotInStatus.length === 0 && ctx_r54.sysHealthService.status.fdas.inStatusConfigured.length === 0 || !ctx_r54.socketService.connectedToBackend);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](5, 7, "DASHBOARD.TITLES.FDAS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r54.sysHealthService.status.fdas.inStatusUnconfigured.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r54.sysHealthService.status.fdas.configuredNotInStatus.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r54.sysHealthService.status.fdas.inStatusConfigured.length > 0);
} }
function DashboardComponent_ngb_panel_4_ng_template_2_div_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 7)(1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](2, "app-status-symbols", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "div", 64)(6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const fda_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("showWarning", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"]((fda_r62.dynamicalAddress < 32768 ? "B1" : "B2") + "/" + (fda_r62.dynamicalAddress < 32768 ? fda_r62.dynamicalAddress : fda_r62.dynamicalAddress - 32767));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](8, 4, "DASHBOARD.FDAS.UNCONFIGURED"), " ", fda_r62.physicalAddress, "");
} }
function DashboardComponent_ngb_panel_4_ng_template_2_div_1_ng_template_4_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const statusPart_r71 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("FDACONFIG.FDAS.DAMPERS.STATES.", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, statusPart_r71), " ");
} }
function DashboardComponent_ngb_panel_4_ng_template_2_div_1_ng_template_4_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const statusPart_r72 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("FDACONFIG.FDAS.DAMPERS.STATES.", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, statusPart_r72), " ");
} }
function DashboardComponent_ngb_panel_4_ng_template_2_div_1_ng_template_4_button_38_Template(rf, ctx) { if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function DashboardComponent_ngb_panel_4_ng_template_2_div_1_ng_template_4_button_38_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r75); const fda_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2).$implicit; const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r73.configureFda(fda_r62.physicalAddress)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "DASHBOARD.FDAS.CONFIGURE");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function DashboardComponent_ngb_panel_4_ng_template_2_div_1_ng_template_4_div_39_Template(rf, ctx) { if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function DashboardComponent_ngb_panel_4_ng_template_2_div_1_ng_template_4_div_39_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r78); const fda_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2).$implicit; const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r76.changeUnconfiguredDamperMode(fda_r62, fda_r62.damper1, 1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "FDACONFIG.FDAS.DAMPERS.CHANGEMODE1");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function DashboardComponent_ngb_panel_4_ng_template_2_div_1_ng_template_4_div_40_Template(rf, ctx) { if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function DashboardComponent_ngb_panel_4_ng_template_2_div_1_ng_template_4_div_40_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r81); const fda_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2).$implicit; const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r79.changeUnconfiguredDamperMode(fda_r62, fda_r62.damper2, 2)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "FDACONFIG.FDAS.DAMPERS.CHANGEMODE2");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function DashboardComponent_ngb_panel_4_ng_template_2_div_1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "table", 65)(1, "tr")(2, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3, "DASHBOARD.FDAS.DYNAMICALADDRESS");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "tr")(7, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](8, "DASHBOARD.FDAS.ONBUSBRANCH");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](12, "tr")(13, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](14, "PHYSICALADDRESS");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](15, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](17, "tr")(18, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](19, "DASHBOARD.FDAS.OPERATIONAL");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](20, "td", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](22, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](23, "FDACONFIG.FDAS.DAMPERS.FIRST");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](24, "div", 69)(25, "div", 37)(26, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](27, "STATUS");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](28, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](29, DashboardComponent_ngb_panel_4_ng_template_2_div_1_ng_template_4_div_29_Template, 3, 3, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](30, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](31, "FDACONFIG.FDAS.DAMPERS.SECOND");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](32, "div", 69)(33, "div", 37)(34, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](35, "STATUS");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](36, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](37, DashboardComponent_ngb_panel_4_ng_template_2_div_1_ng_template_4_div_37_Template, 3, 3, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](38, DashboardComponent_ngb_panel_4_ng_template_2_div_1_ng_template_4_button_38_Template, 2, 0, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](39, DashboardComponent_ngb_panel_4_ng_template_2_div_1_ng_template_4_div_39_Template, 2, 0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](40, DashboardComponent_ngb_panel_4_ng_template_2_div_1_ng_template_4_div_40_Template, 2, 0, "div", 72);
} if (rf & 2) {
    const fda_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](fda_r62.dynamicalAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](11, 11, fda_r62.dynamicalAddress < 32768 ? "B1" : "B2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](fda_r62.physicalAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](fda_r62.operational ? "YES" : "NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction7"](13, _c1, fda_r62.damper1.currentState.includes("Opened"), fda_r62.damper1.currentState.includes("Closed"), fda_r62.damper1.currentState.includes("Opening"), fda_r62.damper1.currentState.includes("Closing"), fda_r62.damper1.currentState.includes("Timeout"), fda_r62.damper1.currentState.includes("Alarm"), fda_r62.damper1.currentState === ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", fda_r62.damper1.currentState.split("|"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction7"](21, _c1, fda_r62.damper2.currentState.includes("Opened"), fda_r62.damper2.currentState.includes("Closed"), fda_r62.damper2.currentState.includes("Opening"), fda_r62.damper2.currentState.includes("Closing"), fda_r62.damper2.currentState.includes("Timeout"), fda_r62.damper2.currentState.includes("Alarm"), fda_r62.damper2.currentState === ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", fda_r62.damper2.currentState.split("|"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r64.auth.isAdmin() && ctx_r64.fdaService.loaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r64.auth.isLoggedIn() && ctx_r64.fdaService.loaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r64.auth.isLoggedIn() && ctx_r64.fdaService.loaded);
} }
function DashboardComponent_ngb_panel_4_ng_template_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 59)(1, "ngb-accordion", 60)(2, "ngb-panel", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](3, DashboardComponent_ngb_panel_4_ng_template_2_div_1_ng_template_3_Template, 9, 6, "ng-template", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](4, DashboardComponent_ngb_panel_4_ng_template_2_div_1_ng_template_4_Template, 41, 29, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
} }
function DashboardComponent_ngb_panel_4_ng_template_2_div_3_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 7)(1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](2, "app-status-symbols", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const fda_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("showWarning", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", fda_r83.position, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](7, 3, "DASHBOARD.FDAS.NOTCONNECTED"));
} }
function DashboardComponent_ngb_panel_4_ng_template_2_div_3_ng_template_4_div_40_Template(rf, ctx) { if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function DashboardComponent_ngb_panel_4_ng_template_2_div_3_ng_template_4_div_40_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r90); const fda_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2).$implicit; const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r88.replaceFda(fda_r83.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "FDACONFIG.FDAS.REPLACE");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function DashboardComponent_ngb_panel_4_ng_template_2_div_3_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "DEVICES.FDA");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "table", 65)(3, "tr")(4, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5, "PHYSICALADDRESS");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](9, "FDACONFIG.FDAS.DAMPERS.FIRST");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "table", 65)(11, "tr")(12, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](13, "NAME");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](14, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](16, "tr")(17, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](18, "FDACONFIG.POSITION");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](19, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](21, "label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](22, "FDACONFIG.FDAS.DAMPERS.SECOND");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](23, "table", 65)(24, "tr")(25, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](26, "NAME");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](27, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](29, "tr")(30, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](31, "FDACONFIG.POSITION");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](32, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](34, "tr")(35, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](36, "FDACONFIG.FDAS.DAMPERS.MODE");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](37, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](39, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](40, DashboardComponent_ngb_panel_4_ng_template_2_div_3_ng_template_4_div_40_Template, 2, 0, "div", 78);
} if (rf & 2) {
    const fda_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](fda_r83.physicalAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](fda_r83.damper1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](fda_r83.damper1.position);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](fda_r83.damper2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](fda_r83.damper2.position);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](39, 7, fda_r83.damper2.currentDamperMode));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r85.auth.isAdmin() && ctx_r85.fdaService.loaded && ctx_r85.sysHealthService.status.fdas.inStatusUnconfigured.length > 0);
} }
function DashboardComponent_ngb_panel_4_ng_template_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 59)(1, "ngb-accordion", 76)(2, "ngb-panel", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](3, DashboardComponent_ngb_panel_4_ng_template_2_div_3_ng_template_3_Template, 8, 5, "ng-template", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](4, DashboardComponent_ngb_panel_4_ng_template_2_div_3_ng_template_4_Template, 41, 9, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
} }
function DashboardComponent_ngb_panel_4_ng_template_2_div_5_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 7)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const fda_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"]((fda_r92.dynamicalAddress < 32768 ? "B1" : "B2") + "/" + (fda_r92.dynamicalAddress < 32768 ? fda_r92.dynamicalAddress : fda_r92.dynamicalAddress - 32767));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](fda_r92.fdaConfigRef.position);
} }
function DashboardComponent_ngb_panel_4_ng_template_2_div_5_ng_template_4_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "FDACONFIG.FDAS.DAMPERS.MODES.UNKNOWN"));
} }
function DashboardComponent_ngb_panel_4_ng_template_2_div_5_ng_template_4_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fda_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "FDACONFIG.FDAS.DAMPERS.MODES." + fda_r92.damper1.currentDamperMode.toUpperCase()));
} }
function DashboardComponent_ngb_panel_4_ng_template_2_div_5_ng_template_4_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const statusPart_r103 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "FDACONFIG.FDAS.DAMPERS.STATES." + statusPart_r103.toUpperCase()), " ");
} }
function DashboardComponent_ngb_panel_4_ng_template_2_div_5_ng_template_4_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "FDACONFIG.FDAS.DAMPERS.MODES.UNKNOWN"));
} }
function DashboardComponent_ngb_panel_4_ng_template_2_div_5_ng_template_4_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fda_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "FDACONFIG.FDAS.DAMPERS.MODES." + fda_r92.damper2.currentDamperMode.toUpperCase()));
} }
function DashboardComponent_ngb_panel_4_ng_template_2_div_5_ng_template_4_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const statusPart_r105 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "FDACONFIG.FDAS.DAMPERS.STATES." + statusPart_r105.toUpperCase()), " ");
} }
const _c3 = function (a0, a1, a2, a3, a4, a5) { return { "damper-opened-bg": a0, "damper-closed-bg": a1, "damper-opening-bg": a2, "damper-closing-bg": a3, "damper-timeout": a4, "damper-alarm": a5 }; };
function DashboardComponent_ngb_panel_4_ng_template_2_div_5_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "table", 65)(1, "tr")(2, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3, "DASHBOARD.FDAS.DYNAMICALADDRESS");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "tr")(7, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](8, "DASHBOARD.FDAS.ONBUSBRANCH");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](12, "tr")(13, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](14, "PHYSICALADDRESS");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](15, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](17, "tr")(18, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](19, "DASHBOARD.FDAS.OPERATIONAL");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](20, "td", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](22, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](23, "FDACONFIG.FDAS.DAMPERS.FIRST");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](24, "div", 69)(25, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](27, "div", 37)(28, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](29, "FDACONFIG.FDAS.DAMPERS.MODE");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](30, DashboardComponent_ngb_panel_4_ng_template_2_div_5_ng_template_4_div_30_Template, 3, 3, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](31, DashboardComponent_ngb_panel_4_ng_template_2_div_5_ng_template_4_div_31_Template, 3, 3, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](32, "div", 37)(33, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](34, "STATUS");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](35, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](36, DashboardComponent_ngb_panel_4_ng_template_2_div_5_ng_template_4_div_36_Template, 3, 3, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](37, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](38, "FDACONFIG.FDAS.DAMPERS.SECOND");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](39, "div", 69)(40, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](42, "div", 37)(43, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](44, "FDACONFIG.FDAS.DAMPERS.MODE");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](45, DashboardComponent_ngb_panel_4_ng_template_2_div_5_ng_template_4_div_45_Template, 3, 3, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](46, DashboardComponent_ngb_panel_4_ng_template_2_div_5_ng_template_4_div_46_Template, 3, 3, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](47, "div", 37)(48, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](49, "STATUS");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](50, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](51, DashboardComponent_ngb_panel_4_ng_template_2_div_5_ng_template_4_div_51_Template, 3, 3, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const fda_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    let tmp_5_0;
    let tmp_10_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](fda_r92.dynamicalAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](11, 14, fda_r92.dynamicalAddress < 32768 ? "B1" : "B2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](fda_r92.physicalAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](fda_r92.operational ? "YES" : "NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction6"](16, _c3, fda_r92.damper1.currentState.includes("Opened"), fda_r92.damper1.currentState.includes("Closed"), fda_r92.damper1.currentState.includes("Opening"), fda_r92.damper1.currentState.includes("Closing"), fda_r92.damper1.currentState.includes("Timeout"), fda_r92.damper1.currentState.includes("Alarm")));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"]((tmp_5_0 = ctx_r94.damperConfigByFda(fda_r92.physicalAddress, 1)) == null ? null : tmp_5_0.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !fda_r92.damper1.currentDamperMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", fda_r92.damper1.currentDamperMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", fda_r92.damper1.currentState.split("|"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction6"](23, _c3, fda_r92.damper2.currentState.includes("Opened"), fda_r92.damper2.currentState.includes("Closed"), fda_r92.damper2.currentState.includes("Opening"), fda_r92.damper2.currentState.includes("Closing"), fda_r92.damper2.currentState.includes("Timeout"), fda_r92.damper2.currentState.includes("Alarm")));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"]((tmp_10_0 = ctx_r94.damperConfigByFda(fda_r92.physicalAddress, 2)) == null ? null : tmp_10_0.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !fda_r92.damper2.currentDamperMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", fda_r92.damper2.currentDamperMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", fda_r92.damper2.currentState.split("|"));
} }
function DashboardComponent_ngb_panel_4_ng_template_2_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 59)(1, "ngb-accordion", 76)(2, "ngb-panel", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](3, DashboardComponent_ngb_panel_4_ng_template_2_div_5_ng_template_3_Template, 5, 2, "ng-template", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](4, DashboardComponent_ngb_panel_4_ng_template_2_div_5_ng_template_4_Template, 52, 30, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
} }
function DashboardComponent_ngb_panel_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, DashboardComponent_ngb_panel_4_ng_template_2_div_1_Template, 5, 0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](3, DashboardComponent_ngb_panel_4_ng_template_2_div_3_Template, 5, 0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](5, DashboardComponent_ngb_panel_4_ng_template_2_div_5_Template, 5, 0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx_r55.sysHealthService.status.fdas.inStatusUnconfigured);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx_r55.sysHealthService.status.fdas.configuredNotInStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx_r55.sysHealthService.status.fdas.inStatusConfigured);
} }
function DashboardComponent_ngb_panel_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ngb-panel", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, DashboardComponent_ngb_panel_4_ng_template_1_Template, 10, 9, "ng-template", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, DashboardComponent_ngb_panel_4_ng_template_2_Template, 6, 3, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", !ctx_r2.socketService.connectedToBackend);
} }
function DashboardComponent_ngb_panel_5_ng_template_2_div_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "app-status-symbols", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const input_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("showInput", true)("inputHigh", input_r109.status === 1)("inputDisabled", input_r109.inputConfigRef.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](input_r109.inputConfigRef.name);
} }
function DashboardComponent_ngb_panel_5_ng_template_2_div_1_ng_template_4_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "tr")(1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, "IO.DISABLED");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "td", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4, "YES");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
} }
function DashboardComponent_ngb_panel_5_ng_template_2_div_1_ng_template_4_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "tr")(1, "td", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, "DESCRIPTION");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
} }
function DashboardComponent_ngb_panel_5_ng_template_2_div_1_ng_template_4_tr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "tr")(1, "td", 89)(2, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const input_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](input_r109.inputConfigRef.description);
} }
function DashboardComponent_ngb_panel_5_ng_template_2_div_1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "table", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, DashboardComponent_ngb_panel_5_ng_template_2_div_1_ng_template_4_tr_1_Template, 5, 0, "tr", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "tr")(3, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4, "IO.STATUS");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "tr")(9, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](10, "IO.NUMBER");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "tr")(14, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](15, "IO.INVERTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](16, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](19, DashboardComponent_ngb_panel_5_ng_template_2_div_1_ng_template_4_tr_19_Template, 3, 0, "tr", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](20, DashboardComponent_ngb_panel_5_ng_template_2_div_1_ng_template_4_tr_20_Template, 4, 1, "tr", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const input_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", input_r109.inputConfigRef.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](7, 6, input_r109.status === 1 ? "IO.HIGH" : "IO.LOW"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](input_r109.number);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](18, 8, input_r109.inputConfigRef.inverted ? "YES" : "NO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", input_r109.inputConfigRef.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", input_r109.inputConfigRef.description);
} }
function DashboardComponent_ngb_panel_5_ng_template_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 85)(1, "ngb-accordion", 60)(2, "ngb-panel", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](3, DashboardComponent_ngb_panel_5_ng_template_2_div_1_ng_template_3_Template, 4, 4, "ng-template", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](4, DashboardComponent_ngb_panel_5_ng_template_2_div_1_ng_template_4_Template, 21, 10, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
} }
function DashboardComponent_ngb_panel_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, DashboardComponent_ngb_panel_5_ng_template_2_div_1_Template, 5, 0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx_r107.sysHealthService.status.inputs);
} }
function DashboardComponent_ngb_panel_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ngb-panel", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, DashboardComponent_ngb_panel_5_ng_template_2_Template, 2, 1, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](1, 2, "DASHBOARD.TITLES.INPUTS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", !ctx_r3.socketService.connectedToBackend);
} }
function DashboardComponent_ngb_panel_6_ng_template_2_div_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "app-status-symbols", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const output_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("showOutput", true)("outputHigh", output_r120.status === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](output_r120.outputConfigRef.name);
} }
function DashboardComponent_ngb_panel_6_ng_template_2_div_1_ng_template_4_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "tr")(1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, "IO.DISABLED");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "td", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4, "YES");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
} }
function DashboardComponent_ngb_panel_6_ng_template_2_div_1_ng_template_4_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "tr")(1, "td", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, "DESCRIPTION");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
} }
function DashboardComponent_ngb_panel_6_ng_template_2_div_1_ng_template_4_tr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "tr")(1, "td", 89)(2, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const output_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](output_r120.outputConfigRef.description);
} }
function DashboardComponent_ngb_panel_6_ng_template_2_div_1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "table", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, DashboardComponent_ngb_panel_6_ng_template_2_div_1_ng_template_4_tr_1_Template, 5, 0, "tr", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "tr")(3, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4, "IO.STATUS");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "tr")(9, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](10, "IO.NUMBER");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "tr")(14, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](15, "IO.INVERTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](16, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](19, DashboardComponent_ngb_panel_6_ng_template_2_div_1_ng_template_4_tr_19_Template, 3, 0, "tr", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](20, DashboardComponent_ngb_panel_6_ng_template_2_div_1_ng_template_4_tr_20_Template, 4, 1, "tr", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const output_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", output_r120.outputConfigRef.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](7, 6, output_r120.status === 1 ? "IO.HIGH" : "IO.LOW"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](output_r120.number);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](18, 8, output_r120.outputConfigRef.inverted ? "YES" : "NO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", output_r120.outputConfigRef.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", output_r120.outputConfigRef.description);
} }
function DashboardComponent_ngb_panel_6_ng_template_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 85)(1, "ngb-accordion", 60)(2, "ngb-panel", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](3, DashboardComponent_ngb_panel_6_ng_template_2_div_1_ng_template_3_Template, 4, 3, "ng-template", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](4, DashboardComponent_ngb_panel_6_ng_template_2_div_1_ng_template_4_Template, 21, 10, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
} }
function DashboardComponent_ngb_panel_6_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, DashboardComponent_ngb_panel_6_ng_template_2_div_1_Template, 5, 0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx_r118.sysHealthService.status.outputs);
} }
function DashboardComponent_ngb_panel_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ngb-panel", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, DashboardComponent_ngb_panel_6_ng_template_2_Template, 2, 1, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](1, 2, "DASHBOARD.TITLES.OUTPUTS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", !ctx_r4.socketService.connectedToBackend);
} }
class DashboardComponent {
    constructor(fdaService, inputService, outputService, auth, socketService, sysHealthService, fdcService, groupService, modalService, router, damperModeChangeService, maintenanceModeService) {
        this.fdaService = fdaService;
        this.inputService = inputService;
        this.outputService = outputService;
        this.auth = auth;
        this.socketService = socketService;
        this.sysHealthService = sysHealthService;
        this.fdcService = fdcService;
        this.groupService = groupService;
        this.modalService = modalService;
        this.router = router;
        this.damperModeChangeService = damperModeChangeService;
        this.maintenanceModeService = maintenanceModeService;
        this.activeIds = [];
        if (this.auth.getUser().forcePasswordChange) {
            this.router.navigateByUrl('forced-password-change').then(() => {
                window.location.reload();
            });
        }
    }
    ngOnInit() {
    }
    getIOStateTranslation(state) {
        if (state) {
            return 'IO.' + state.toUpperCase();
        }
        return '';
    }
    getIsHighOr(values) {
        return values.filter(value => value.currentState === 'High').length > 0;
    }
    getIsHighAnd(values) {
        const otherStatuses = values.filter(value => value.currentState !== 'HIGH' && value.currentState !== 'LOW');
        return otherStatuses.length === 0 && values.filter(value => value.currentState === 'LOW').length === 0;
    }
    configureFda(physicalAddress) {
        const modalRef = this.modalService.open(_edit_fda_edit_fda_component__WEBPACK_IMPORTED_MODULE_0__.EditFdaComponent, { size: 'lg' });
        modalRef.componentInstance.fda = { id: angular2_uuid__WEBPACK_IMPORTED_MODULE_1__.UUID.UUID(), physicalAddress: physicalAddress };
        modalRef.result.then((result) => {
            console.log(result);
            this.fdaService.add(result).subscribe({
                next: () => {
                    setTimeout(() => {
                        this.sysHealthService.status.fdas = {
                            inStatusConfigured: [],
                            inStatusUnconfigured: [],
                            configuredNotInStatus: []
                        };
                        this.sysHealthService.status.damperGroups = [];
                        this.sysHealthService.processLastDeviceStatus();
                        this.sysHealthService.processLastGroupStatus();
                    });
                }, error: () => {
                    // Error already handled in service
                }
            });
        }).catch(() => {
            // ignore cross-click
        });
    }
    damperConfigByFda(fdaPhysicalAddress, numberOfDamper) {
        let fda = this.fdaService.data.find(fda => fda.physicalAddress === fdaPhysicalAddress);
        if (fda) {
            return numberOfDamper === 1 ? fda.damper1 : fda.damper2;
        }
        return undefined;
    }
    changeDamperMode(damperId) {
        const modalRef = this.modalService.open(_edit_damper_mode_edit_damper_mode_component__WEBPACK_IMPORTED_MODULE_2__.EditDamperModeComponent);
        let fda = this.fdaService.data.find(fda => fda.damper1.id === damperId || fda.damper2.id === damperId);
        if (fda) {
            modalRef.componentInstance.origDamperMode = fda.damper1.id === damperId ? fda.damper1.damperMode : fda.damper2.damperMode;
            modalRef.componentInstance.damperConfig = fda.damper1.id === damperId ? fda.damper1 : fda.damper2;
            modalRef.componentInstance.fdaConfig = fda;
            modalRef.result.then((result) => {
                let fda = this.fdaService.data.find(fda => fda.damper1.id === damperId || fda.damper2.id === damperId);
                if (fda) {
                    this.damperModeChangeService.setDamperMode(fda.physicalAddress, damperId, result.damperMode);
                    let isItFirst = fda.damper1.id === damperId;
                    if (isItFirst) {
                        fda.damper1.damperMode = result.damperMode;
                    }
                    else {
                        fda.damper2.damperMode = result.damperMode;
                    }
                    let damperInfo = {
                        physicalAddress: fda.physicalAddress,
                        number: isItFirst ? 1 : 2,
                        mode: result.damperMode,
                        username: this.auth.getUser().username
                    };
                    this.socketService.setDamperMode(damperInfo);
                }
            }).catch(() => {
                // ignore cross-click
            });
        }
        else {
            const modalRef = this.modalService.open(_messagebox_messagebox_component__WEBPACK_IMPORTED_MODULE_4__.MessageboxComponent);
            modalRef.componentInstance.title = "Warning";
            modalRef.componentInstance.text = `No FDA found configured for this damper!`;
            modalRef.componentInstance.isWarning = true;
        }
    }
    changeUnconfiguredDamperMode(fda, damper, number) {
        damper.name = '---';
        const modalRef = this.modalService.open(_edit_damper_mode_edit_damper_mode_component__WEBPACK_IMPORTED_MODULE_2__.EditDamperModeComponent);
        modalRef.componentInstance.origDamperMode = damper.currentDamperMode;
        modalRef.componentInstance.damperConfig = damper;
        modalRef.componentInstance.fdaConfig = fda;
        modalRef.result.then((result) => {
            let damperInfo = {
                physicalAddress: fda.physicalAddress,
                number: number,
                mode: result.damperMode,
                username: this.auth.getUser().username
            };
            this.socketService.setDamperMode(damperInfo);
        }).catch(() => {
            // ignore cross-click
        });
    }
    replaceFda(id) {
        let fda = this.fdaService.data.find((fda) => fda.id === id);
        if (fda) {
            const modalRef = this.modalService.open(_fda_replacement_fda_replacement_component__WEBPACK_IMPORTED_MODULE_3__.FdaReplacementComponent);
            modalRef.componentInstance.unconfiguredFdaPhyAddrasses = this.sysHealthService.status.fdas.inStatusUnconfigured.map(fda => fda.physicalAddress);
            modalRef.result.then((result) => {
                let fda = this.fdaService.data.find((fda) => fda.id === id);
                if (fda) {
                    fda.physicalAddress = result.physicalAddress;
                    this.fdaService.update();
                }
            }).catch(() => {
                // ignore cross-click
            });
        }
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_dto_services_fda_service__WEBPACK_IMPORTED_MODULE_5__.FdaService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_dto_services_input_service__WEBPACK_IMPORTED_MODULE_6__.InputService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_dto_services_output_service__WEBPACK_IMPORTED_MODULE_7__.OutputService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_8__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_socket_connection_service__WEBPACK_IMPORTED_MODULE_9__.SocketConnectionService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_system_health_service__WEBPACK_IMPORTED_MODULE_10__.SystemHealthService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_fdc_service__WEBPACK_IMPORTED_MODULE_11__.FdcService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_dto_services_damper_group_service__WEBPACK_IMPORTED_MODULE_12__.DamperGroupService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_dto_services_dampermode_change_service__WEBPACK_IMPORTED_MODULE_13__.DampermodeChangeService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_dto_services_maintenance_mode_service__WEBPACK_IMPORTED_MODULE_14__.MaintenanceModeService)); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 7, vars: 4, consts: [["activeIds", "groups"], ["id", "groups", 2, "background-color", "ghostwhite !important", 3, "disabled"], ["ngbPanelHeader", ""], ["ngbPanelContent", ""], ["id", "fdas", 3, "disabled", 4, "ngIf"], ["id", "inputs", 3, "title", "disabled", 4, "ngIf"], ["id", "outputs", 3, "title", "disabled", 4, "ngIf"], ["ngbPanelToggle", "", 1, "accordion-button"], [3, "showOk", "showWarning", "showTimeglass", "showQuestionmark"], [1, "ms-2"], [1, "row"], ["class", "col-12 my-2 inner-card accordion-level-1", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "col-12", "my-2", "inner-card", "accordion-level-1", 3, "ngClass"], [1, "bg-warning", 3, "activeIds"], [1, "accordion-header", 3, "id"], [1, "d-flex", "ms-2", "me-2", "w-100", "justify-content-between"], ["translate", "", 4, "ngIf"], ["translate", ""], ["translate", "", 1, "fw-bold"], [1, "d-flex", "flex-wrap", "mb-3"], ["class", "d-flex justify-content-between me-2", "style", "max-width: 300px;", 4, "ngFor", "ngForOf"], [1, "d-flex", "flex-wrap", "mb-2"], ["class", "d-flex justify-content-between mt-2", "style", "max-width: 300px;", 4, "ngFor", "ngForOf"], ["class", "header-font-size text-danger mt-3", "translate", "", 4, "ngIf"], ["class", "d-flex flex-row flex-wrap justify-content-start", 4, "ngIf"], [4, "ngIf"], [1, "d-flex", "justify-content-between", "me-2", 2, "max-width", "300px"], [1, "d-flex", "flex-nowrap"], [3, "showInput", "inputHigh", "inputOk", "inputDanger", "showQuestionmark"], [3, "showInput", "inputHigh", "inputOk", "inputDanger", "disableIOAnimation", "showQuestionmark"], [1, "d-flex", "justify-content-between", "mt-2", 2, "max-width", "300px"], [3, "showOutput", "outputHigh", "disableIOAnimation", "showQuestionmark"], ["translate", "", 1, "header-font-size", "text-danger", "mt-3"], [1, "d-flex", "flex-row", "flex-wrap", "justify-content-start"], ["class", "d-flex flex-column mt-2 mb-2 p-2 radius damper-tile", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "d-flex", "flex-column", "mt-2", "mb-2", "p-2", "radius", "damper-tile", 3, "ngClass"], [1, "border-light"], [1, "d-flex", "flex-row", "flex-nowrap", "justify-content-between"], [1, "ms-3"], [1, "ms-3", 3, "ngClass"], ["class", "ms-3", 4, "ngIf"], [1, "d-flex", "flex-row", "flex-nowrap", "justify-content-between", "mb-2"], ["class", "p-0", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "text-danger bg-white p-2 mb-2 rounded", "translate", "", 4, "ngIf"], ["class", "btn btn-outline-primary mt-auto", "translate", "", 3, "click", 4, "ngIf"], [1, "p-0", 3, "ngClass"], ["translate", "", 1, "text-danger", "bg-white", "p-2", "mb-2", "rounded"], ["translate", "", 1, "btn", "btn-outline-primary", "mt-auto", 3, "click"], [1, "header-font-size", "mt-3", "justify-content-start"], ["class", "d-flex flex-column mt-2 mb-2 p-2 radius damper-disabled damper-tile", 4, "ngFor", "ngForOf"], [1, "d-flex", "flex-column", "mt-2", "mb-2", "p-2", "radius", "damper-disabled", "damper-tile"], ["id", "fdas", 3, "disabled"], [1, "me-3", "d-flex", "flex-nowrap"], [3, "showOk", "showWarning", "showQuestionmark"], [1, "me-2", "d-flex", "flex-wrap"], ["class", "me-3", 4, "ngIf"], [1, "me-3"], [1, "row", "accordion-level-1"], ["class", "my-2 fda-info", 4, "ngFor", "ngForOf"], [1, "my-2", "fda-info"], ["activeIds", "0", 1, "bg-warning"], [1, "accordion-header-danger"], [1, "me-2"], [3, "showWarning"], [1, "border-left-inno", "text-danger"], [1, "table", "table-borderless"], [1, "text-end"], ["translate", "", 1, "text-end"], ["translate", "", 1, "fw-bold", "mt-2"], [1, "d-flex", "flex-column", "mt-2", "mb-2", "p-2", "justify-content-between", "radius", 3, "ngClass"], ["class", "p-0", "translate", "", 4, "ngFor", "ngForOf"], ["class", "col-12 btn btn-primary mt-3", "translate", "", 3, "click", 4, "ngIf"], ["class", "col-12 btn btn-outline-primary mt-2", "translate", "", 3, "click", 4, "ngIf"], ["translate", "", 1, "p-0"], ["translate", "", 1, "col-12", "btn", "btn-primary", "mt-3", 3, "click"], ["translate", "", 1, "col-12", "btn", "btn-outline-primary", "mt-2", 3, "click"], ["activeIds", "0"], [1, "text-danger"], ["class", "btn btn-primary", "translate", "", 3, "click", 4, "ngIf"], ["translate", "", 1, "btn", "btn-primary", 3, "click"], [1, "border-left-inno"], ["class", "p-0", 4, "ngFor", "ngForOf"], [1, "p-0"], ["id", "inputs", 3, "title", "disabled"], ["class", "col-md-4 my-2", 4, "ngFor", "ngForOf"], [1, "col-md-4", "my-2"], [1, "accordion-header"], [3, "showInput", "inputHigh", "inputDisabled"], ["colspan", "2", "translate", "", 1, "align-top", "fw-bold"], ["colspan", "2", 1, "text-end", "text-justify"], ["id", "outputs", 3, "title", "disabled"], [3, "showOutput", "outputHigh"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ngb-accordion", 0)(1, "ngb-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, DashboardComponent_ng_template_2_Template, 5, 7, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](3, DashboardComponent_ng_template_3_Template, 2, 1, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](4, DashboardComponent_ngb_panel_4_Template, 3, 1, "ngb-panel", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](5, DashboardComponent_ngb_panel_5_Template, 3, 4, "ngb-panel", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](6, DashboardComponent_ngb_panel_6_Template, 3, 4, "ngb-panel", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", !ctx.socketService.connectedToBackend);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.auth.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.auth.isAdmin());
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.auth.isAdmin());
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbAccordion, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbPanel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbPanelContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbPanelHeader, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbPanelToggle, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslateDirective, _status_symbols_status_symbols_component__WEBPACK_IMPORTED_MODULE_15__.StatusSymbolsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_19__.UpperCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslatePipe], styles: ["table {\r\n  margin-bottom: 0 !important;\r\n}\r\n\r\n.damper-status-label {\r\n  margin-left: -5px;\r\n  padding-left: 5px;\r\n}\r\n\r\n.damper-status-value {\r\n  margin-right: -5px;\r\n  padding-right: 5px;\r\n}\r\n\r\ntr {\r\n  pointer-events: none;\r\n}\r\n\r\n.group-status-table>tr:first-of-type>td:first-of-type {\r\n  border-top-left-radius: .25rem;\r\n}\r\n\r\n.group-status-table>tr:first-of-type>td:last-of-type {\r\n  border-top-right-radius: .25rem;\r\n}\r\n\r\n.group-status-table>tr:last-of-type>td:first-of-type {\r\n  border-bottom-left-radius: .25rem;\r\n}\r\n\r\n.group-status-table>tr:last-of-type>td:last-of-type {\r\n  border-bottom-right-radius: .25rem;\r\n}\r\n\r\n.damper-tile {\r\n  width: 100%;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .damper-tile {\r\n    width: 296px;\r\n    min-width: 296px;\r\n    max-width: 296px;\r\n    margin: 5px;\r\n  }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .accordion-body {\r\n    padding: .5rem .5rem;\r\n  }\r\n  .accordion-button {\r\n    padding: 1rem .5rem;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .damper-tile {\r\n    width: 416px;\r\n    min-width: 416px;\r\n    max-width: 416px;\r\n    margin: 5px;\r\n  }\r\n\r\n  .fda-info {\r\n    width: 459px;\r\n    min-width: 459px;\r\n    max-width: 459px;\r\n    margin: 5px 0;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .damper-tile {\r\n    width: 334px;\r\n    min-width: 334px;\r\n    max-width: 334px;\r\n    margin: 5px;\r\n  }\r\n\r\n  .fda-info {\r\n    width: 365px;\r\n    min-width: 365px;\r\n    max-width: 365px;\r\n    margin: 5px 0;\r\n  }\r\n}\r\n\r\n@media (min-width: 1400px) {\r\n  .damper-tile {\r\n    width: 293px;\r\n    min-width: 293px;\r\n    max-width: 293px;\r\n    margin: 5px;\r\n  }\r\n\r\n  .fda-info {\r\n    width: 426px;\r\n    min-width: 426px;\r\n    max-width: 426px;\r\n    margin: 5px 0;\r\n  }\r\n}\r\n\r\n.inner-card>ngb-accordion>div>div>.accordion-body {\r\n  border-bottom-left-radius: .25rem;\r\n  border-bottom-right-radius: .25rem;\r\n}\r\n\r\n.inner-card>ngb-accordion>div>.accordion-header>.accordion-button:not(.collapsed):focus {\r\n  box-shadow: 0 -1px #dfdfdf inset;\r\n}\r\n\r\n.has-timeout>ngb-accordion>.accordion-item {\r\n  outline: 2px dotted #ffcc00;\r\n}\r\n\r\n.border-left-inno {\r\n  border-left-style: solid;\r\n  border-left-width: 1px;\r\n  border-left-color: #b9b9b9;\r\n  padding-left: .7rem;\r\n  margin-left: .7rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBQ0E7RUFDRSwrQkFBK0I7QUFDakM7O0FBQ0E7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBQ0E7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBR0E7RUFDRSxXQUFXO0FBQ2I7O0FBSUE7RUFDRTtJQUNFLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7RUFDYjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVztFQUNiOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGFBQWE7RUFDZjtBQUNGOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixzQkFBc0I7RUFDdEIsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGFtcGVyLXN0YXR1cy1sYWJlbCB7XHJcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5kYW1wZXItc3RhdHVzLXZhbHVlIHtcclxuICBtYXJnaW4tcmlnaHQ6IC01cHg7XHJcbiAgcGFkZGluZy1yaWdodDogNXB4O1xyXG59XHJcbnRyIHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLmdyb3VwLXN0YXR1cy10YWJsZT50cjpmaXJzdC1vZi10eXBlPnRkOmZpcnN0LW9mLXR5cGUge1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IC4yNXJlbTtcclxufVxyXG4uZ3JvdXAtc3RhdHVzLXRhYmxlPnRyOmZpcnN0LW9mLXR5cGU+dGQ6bGFzdC1vZi10eXBlIHtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogLjI1cmVtO1xyXG59XHJcbi5ncm91cC1zdGF0dXMtdGFibGU+dHI6bGFzdC1vZi10eXBlPnRkOmZpcnN0LW9mLXR5cGUge1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IC4yNXJlbTtcclxufVxyXG4uZ3JvdXAtc3RhdHVzLXRhYmxlPnRyOmxhc3Qtb2YtdHlwZT50ZDpsYXN0LW9mLXR5cGUge1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAuMjVyZW07XHJcbn1cclxuXHJcblxyXG4uZGFtcGVyLXRpbGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5kYW1wZXItdGlsZSB7XHJcbiAgICB3aWR0aDogMjk2cHg7XHJcbiAgICBtaW4td2lkdGg6IDI5NnB4O1xyXG4gICAgbWF4LXdpZHRoOiAyOTZweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmFjY29yZGlvbi1ib2R5IHtcclxuICAgIHBhZGRpbmc6IC41cmVtIC41cmVtO1xyXG4gIH1cclxuICAuYWNjb3JkaW9uLWJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiAxcmVtIC41cmVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgLmRhbXBlci10aWxlIHtcclxuICAgIHdpZHRoOiA0MTZweDtcclxuICAgIG1pbi13aWR0aDogNDE2cHg7XHJcbiAgICBtYXgtd2lkdGg6IDQxNnB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgfVxyXG5cclxuICAuZmRhLWluZm8ge1xyXG4gICAgd2lkdGg6IDQ1OXB4O1xyXG4gICAgbWluLXdpZHRoOiA0NTlweDtcclxuICAgIG1heC13aWR0aDogNDU5cHg7XHJcbiAgICBtYXJnaW46IDVweCAwO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gIC5kYW1wZXItdGlsZSB7XHJcbiAgICB3aWR0aDogMzM0cHg7XHJcbiAgICBtaW4td2lkdGg6IDMzNHB4O1xyXG4gICAgbWF4LXdpZHRoOiAzMzRweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gIH1cclxuXHJcbiAgLmZkYS1pbmZvIHtcclxuICAgIHdpZHRoOiAzNjVweDtcclxuICAgIG1pbi13aWR0aDogMzY1cHg7XHJcbiAgICBtYXgtd2lkdGg6IDM2NXB4O1xyXG4gICAgbWFyZ2luOiA1cHggMDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxNDAwcHgpIHtcclxuICAuZGFtcGVyLXRpbGUge1xyXG4gICAgd2lkdGg6IDI5M3B4O1xyXG4gICAgbWluLXdpZHRoOiAyOTNweDtcclxuICAgIG1heC13aWR0aDogMjkzcHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICB9XHJcblxyXG4gIC5mZGEtaW5mbyB7XHJcbiAgICB3aWR0aDogNDI2cHg7XHJcbiAgICBtaW4td2lkdGg6IDQyNnB4O1xyXG4gICAgbWF4LXdpZHRoOiA0MjZweDtcclxuICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgfVxyXG59XHJcblxyXG4uaW5uZXItY2FyZD5uZ2ItYWNjb3JkaW9uPmRpdj5kaXY+LmFjY29yZGlvbi1ib2R5IHtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAuMjVyZW07XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IC4yNXJlbTtcclxufVxyXG5cclxuLmlubmVyLWNhcmQ+bmdiLWFjY29yZGlvbj5kaXY+LmFjY29yZGlvbi1oZWFkZXI+LmFjY29yZGlvbi1idXR0b246bm90KC5jb2xsYXBzZWQpOmZvY3VzIHtcclxuICBib3gtc2hhZG93OiAwIC0xcHggI2RmZGZkZiBpbnNldDtcclxufVxyXG5cclxuLmhhcy10aW1lb3V0Pm5nYi1hY2NvcmRpb24+LmFjY29yZGlvbi1pdGVtIHtcclxuICBvdXRsaW5lOiAycHggZG90dGVkICNmZmNjMDA7XHJcbn1cclxuXHJcbi5ib3JkZXItbGVmdC1pbm5vIHtcclxuICBib3JkZXItbGVmdC1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDFweDtcclxuICBib3JkZXItbGVmdC1jb2xvcjogI2I5YjliOTtcclxuICBwYWRkaW5nLWxlZnQ6IC43cmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAuN3JlbTtcclxufVxyXG4iXX0= */"], encapsulation: 2 });


/***/ }),

/***/ 1528:
/*!*****************************************************************************!*\
  !*** ./src/app/components/edit-damper-group/edit-damper-group.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditDamperGroupComponent": () => (/* binding */ EditDamperGroupComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _validators_damperGroupNameValidator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../validators/damperGroupNameValidator */ 7127);
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-uuid */ 3105);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _services_dto_services_damper_group_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/dto-services/damper-group.service */ 3705);
/* harmony import */ var _services_fdc_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/fdc.service */ 1473);
/* harmony import */ var _services_dto_services_mail_template_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/dto-services/mail-template.service */ 8499);
/* harmony import */ var _services_dto_services_input_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/dto-services/input.service */ 6441);
/* harmony import */ var _services_dto_services_output_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/dto-services/output.service */ 5782);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-multiselect-dropdown */ 7490);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../directives/autofocus.directive */ 3185);
















function EditDamperGroupComponent_h4_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "h4", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "FDACONFIG.GROUPS.NEW"));
} }
function EditDamperGroupComponent_h4_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "h4", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "FDACONFIG.GROUPS.EDIT"));
} }
function EditDamperGroupComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r10 = ctx.option;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](option_r10);
} }
function EditDamperGroupComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r12 = ctx.option;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](option_r12);
} }
function EditDamperGroupComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r14 = ctx.option;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](option_r14);
} }
function EditDamperGroupComponent_option_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mailTemplate_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngValue", mailTemplate_r16.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](mailTemplate_r16.name);
} }
function EditDamperGroupComponent_option_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mailTemplate_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngValue", mailTemplate_r17.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](mailTemplate_r17.name);
} }
class EditDamperGroupComponent {
    constructor(activeModal, fb, damperGroupService, fdcService, mailTemplateService, inputService, outputService) {
        this.activeModal = activeModal;
        this.fb = fb;
        this.damperGroupService = damperGroupService;
        this.fdcService = fdcService;
        this.mailTemplateService = mailTemplateService;
        this.inputService = inputService;
        this.outputService = outputService;
        this.damperGroup = {};
        this.shadow = {};
        this.inputsList = [];
        this.outputsList = [];
        this.selectedItems = [];
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'id',
            textField: 'name',
            allowSearchFilter: false,
            enableCheckAll: false
        };
        this.form = {};
    }
    ngOnInit() {
        this.shadow = lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep(this.damperGroup);
        this.form = this.fb.group({
            id: [undefined, [], []],
            name: [undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required], [_validators_damperGroupNameValidator__WEBPACK_IMPORTED_MODULE_1__.DamperGroupNameValidator.createValidator(this.damperGroupService, this.shadow)]],
            bmaAlarm: [undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required], []],
            ventilationRequest: [undefined, [], []],
            ventilationAllowed: [undefined, [], []],
            alarmMailTemplate: [undefined],
            timeoutMailTemplate: [undefined],
            type: ['DamperGroup']
        });
        if (this.damperGroup.name) {
            const clone = lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep(this.damperGroup);
            if (clone.bmaAlarm) {
                clone.bmaAlarm = clone.bmaAlarm.map((val) => {
                    return this.inputService.getById(val);
                });
            }
            if (clone.ventilationRequest) {
                clone.ventilationRequest = clone.ventilationRequest.map((val) => {
                    return this.inputService.getById(val);
                });
            }
            if (clone.ventilationAllowed) {
                clone.ventilationAllowed = clone.ventilationAllowed.map((val) => {
                    return this.outputService.getById(val);
                });
            }
            this.form.patchValue(clone);
        }
        this.inputsList = this.getAvailableInputs();
        this.outputsList = this.getAvailableOutputs();
    }
    get id() {
        return this.form.controls['id'];
    }
    get bmaAlarm() {
        return this.form.controls['bmaAlarm'];
    }
    get ventilationRequest() {
        return this.form.controls['ventilationRequest'];
    }
    get ventilationAllowed() {
        return this.form.controls['ventilationAllowed'];
    }
    getAvailableInputs() {
        return this.fdcService.data.inputs;
    }
    getAvailableOutputs() {
        let usedOutputIds = [];
        this.damperGroupService.getData().forEach(dg => {
            if (dg.id != this.id.value && dg.ventilationAllowed && dg.ventilationAllowed.length > 0) {
                usedOutputIds.push(...dg.ventilationAllowed);
            }
        });
        return this.fdcService.data.outputs.filter(output => !usedOutputIds.includes(output.id));
    }
    getOutputById(id) {
        const output = this.fdcService.data.outputs.find(output => output.id === id);
        return output ? output : { name: 'Error!' };
    }
    checkForReturn(event) {
        if (event.keyCode == 13 && this.form.valid) {
            this.submitForm();
        }
    }
    submitForm() {
        if (this.form.valid) {
            if (this.form.controls['id'].value === null || this.form.controls['id'].value === undefined) {
                this.form.controls['id'].setValue(angular2_uuid__WEBPACK_IMPORTED_MODULE_2__.UUID.UUID());
            }
            if (this.ventilationAllowed.value) {
                this.ventilationAllowed.setValue(this.ventilationAllowed.value.map((val) => val.id));
            }
            if (this.ventilationRequest.value) {
                this.ventilationRequest.setValue(this.ventilationRequest.value.map((val) => val.id));
            }
            if (this.bmaAlarm.value) {
                this.bmaAlarm.setValue(this.bmaAlarm.value.map((val) => val.id));
            }
            this.activeModal.close(this.form.value);
        }
    }
}
EditDamperGroupComponent.ɵfac = function EditDamperGroupComponent_Factory(t) { return new (t || EditDamperGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_dto_services_damper_group_service__WEBPACK_IMPORTED_MODULE_3__.DamperGroupService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_fdc_service__WEBPACK_IMPORTED_MODULE_4__.FdcService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_dto_services_mail_template_service__WEBPACK_IMPORTED_MODULE_5__.MailTemplateService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_dto_services_input_service__WEBPACK_IMPORTED_MODULE_6__.InputService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_dto_services_output_service__WEBPACK_IMPORTED_MODULE_7__.OutputService)); };
EditDamperGroupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: EditDamperGroupComponent, selectors: [["app-new-damper-group"]], inputs: { damperGroup: "damperGroup" }, decls: 43, vars: 14, consts: [[1, "modal-header"], ["class", "modal-title", 4, "ngIf"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [3, "formGroup", "ngSubmit", "keydown"], [1, "modal-body", "modal-body-background"], [1, "container"], [1, "form-group"], ["for", "name", "translate", ""], [1, "input-group"], ["id", "name", "formControlName", "name", "type", "text", "appAutofocus", "", 1, "form-control", "shadow-none"], ["for", "bmaAlarm", "translate", "", 1, "form-label", "my-0"], ["id", "bmaAlarm", "formControlName", "bmaAlarm", 3, "settings", "data"], ["optionSelectedTemplate", ""], ["for", "ventilationRequest", "translate", "", 1, "form-label", "my-0"], ["id", "ventilationRequest", "formControlName", "ventilationRequest", 3, "placeholder", "settings", "data"], ["for", "ventilationAllowed", "translate", "", 1, "form-label", "my-0"], ["id", "ventilationAllowed", "formControlName", "ventilationAllowed", 3, "placeholder", "settings", "data"], ["for", "alarmMailTemplate", "translate", "", 1, "form-label", "my-0"], ["id", "alarmMailTemplate", "formControlName", "alarmMailTemplate", 1, "form-select"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["for", "timeoutMailTemplate", "translate", "", 1, "form-label", "my-0"], ["id", "timeoutMailTemplate", "formControlName", "timeoutMailTemplate", 1, "form-select"], [1, "modal-footer", "modal-footer-background"], ["translate", "", 1, "btn", "btn-success", 3, "disabled"], [1, "modal-title"], [1, "text-nowrap", "pe-2"], [3, "ngValue"]], template: function EditDamperGroupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, EditDamperGroupComponent_h4_1_Template, 3, 3, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, EditDamperGroupComponent_h4_2_Template, 3, 3, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function EditDamperGroupComponent_Template_button_click_3_listener() { return ctx.activeModal.dismiss("Cross click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngSubmit", function EditDamperGroupComponent_Template_form_ngSubmit_4_listener() { return ctx.submitForm(); })("keydown", function EditDamperGroupComponent_Template_form_keydown_4_listener($event) { return ctx.checkForReturn($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "NAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 6)(13, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "FDACONFIG.GROUPS.ALARMINPUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "ng-multiselect-dropdown", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](16, EditDamperGroupComponent_ng_template_16_Template, 2, 1, "ng-template", 12, 12, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "div", 6)(19, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, "FDACONFIG.GROUPS.VENTINPUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "ng-multiselect-dropdown", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](22, EditDamperGroupComponent_ng_template_22_Template, 2, 1, "ng-template", 12, 12, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "div", 6)(25, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26, "FDACONFIG.GROUPS.VENTOUTPUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "ng-multiselect-dropdown", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](28, EditDamperGroupComponent_ng_template_28_Template, 2, 1, "ng-template", 12, 12, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "div", 6)(31, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32, "FDACONFIG.GROUPS.MAIL.ALARM");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](34, EditDamperGroupComponent_option_34_Template, 2, 2, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "div", 6)(36, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](37, "FDACONFIG.GROUPS.MAIL.TIMEOUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](39, EditDamperGroupComponent_option_39_Template, 2, 2, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "div", 22)(41, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](42, "SAVE");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.shadow.id === undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.shadow.id !== undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("settings", ctx.dropdownSettings)("data", ctx.inputsList);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("placeholder", "custom placeholder")("settings", ctx.dropdownSettings)("data", ctx.inputsList);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("placeholder", "custom placeholder")("settings", ctx.dropdownSettings)("data", ctx.outputsList);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.mailTemplateService.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.mailTemplateService.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", !ctx.form.valid || !ctx.damperGroupService.loaded);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_13__.MultiSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateDirective, _directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_8__.AutofocusDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWRhbXBlci1ncm91cC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 3025:
/*!***************************************************************************!*\
  !*** ./src/app/components/edit-damper-mode/edit-damper-mode.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditDamperModeComponent": () => (/* binding */ EditDamperModeComponent)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_dto_services_damper_group_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/dto-services/damper-group.service */ 3705);
/* harmony import */ var _services_dto_services_fda_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/dto-services/fda.service */ 7576);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 8699);







class EditDamperModeComponent {
    constructor(activeModal, fb, damperGroupService, fdaService) {
        this.activeModal = activeModal;
        this.fb = fb;
        this.damperGroupService = damperGroupService;
        this.fdaService = fdaService;
        this.origDamperMode = {};
        this.shadow = {};
        this.form = {};
    }
    ngOnInit() {
        this.damperConfigClone = this.damperConfig ? lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep(this.damperConfig) : undefined;
        this.fdaConfigClone = this.fdaConfig ? lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep(this.fdaConfig) : undefined;
        this.shadow = lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep(this.origDamperMode);
        this.form = this.fb.group({
            damperMode: ['Automatic']
        });
        this.form.patchValue({ damperMode: this.origDamperMode });
    }
    submitForm() {
        this.activeModal.close(this.form.value);
    }
    getDamperFdaReference() {
        if (this.fdaConfigClone) {
            let dNum = this.fdaConfigClone.damper1.id === this.damperConfigClone?.id ? 'D1' : 'D2';
            return this.fdaConfigClone?.physicalAddress + ' - ' + dNum;
        }
        else {
            return '---';
        }
    }
}
EditDamperModeComponent.ɵfac = function EditDamperModeComponent_Factory(t) { return new (t || EditDamperModeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_dto_services_damper_group_service__WEBPACK_IMPORTED_MODULE_1__.DamperGroupService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_dto_services_fda_service__WEBPACK_IMPORTED_MODULE_2__.FdaService)); };
EditDamperModeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: EditDamperModeComponent, selectors: [["app-edit-damper-mode"]], inputs: { origDamperMode: "origDamperMode", damperConfig: "damperConfig", fdaConfig: "fdaConfig" }, decls: 27, vars: 7, consts: [[1, "modal-header", "modal-header-background"], [1, "modal-title", "text-nowrap"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [3, "formGroup", "ngSubmit"], [1, "modal-body", "modal-body-background"], [1, "container"], ["translate", "", 1, "fw-bold"], [1, "form-group", "mb-1", "mt-2"], ["for", "damperMode", "translate", "", 1, "form-label", "my-0", "fw-bold"], ["id", "damperMode", "formControlName", "damperMode", 1, "form-select"], ["value", "Disabled", "translate", ""], ["value", "Automatic", "translate", ""], ["value", "ManualOpen", "translate", ""], ["value", "ManualClose", "translate", ""], [1, "modal-footer", "modal-footer-background"], ["translate", "", 1, "btn", "btn-success", 3, "disabled"]], template: function EditDamperModeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditDamperModeComponent_Template_button_click_4_listener() { return ctx.activeModal.dismiss("Cross click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function EditDamperModeComponent_Template_form_ngSubmit_5_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4)(7, "div", 5)(8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "NAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 7)(13, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "FDACONFIG.FDAS.DAMPERS.MODE");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "select", 9)(16, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "FDACONFIG.FDAS.DAMPERS.MODES.DISABLED");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "FDACONFIG.FDAS.DAMPERS.MODES.AUTOMATIC");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "FDACONFIG.FDAS.DAMPERS.MODES.MANUALOPEN");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "FDACONFIG.FDAS.DAMPERS.MODES.MANUALCLOSE");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 14)(25, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "SAVE");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 5, "FDACONFIG.FDAS.DAMPERS.CHANGEMODE"), " - ", ctx.getDamperFdaReference(), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.damperConfigClone == null ? null : ctx.damperConfigClone.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.form.valid || !ctx.fdaService.loaded);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWRhbXBlci1tb2RlLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 3997:
/*!***********************************************************!*\
  !*** ./src/app/components/edit-fda/edit-fda.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditFdaComponent": () => (/* binding */ EditFdaComponent)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-uuid */ 3105);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_dto_services_damper_group_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/dto-services/damper-group.service */ 3705);
/* harmony import */ var _services_dto_services_fda_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/dto-services/fda.service */ 7576);
/* harmony import */ var _services_toast_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/toast-service.service */ 1618);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-multiselect-dropdown */ 7490);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 8699);











const _c0 = function (a0) { return { "text-black": a0 }; };
class EditFdaComponent {
    constructor(activeModal, fb, damperGroupService, fdaService, toast) {
        this.activeModal = activeModal;
        this.fb = fb;
        this.damperGroupService = damperGroupService;
        this.fdaService = fdaService;
        this.toast = toast;
        this.fda = {};
        this.shadow = {};
        this.canEditPhysicalAddress = false;
        this.groupsList = [];
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'id',
            textField: 'name',
            allowSearchFilter: false,
            enableCheckAll: false
        };
        this.form = {};
        this.groupsList = damperGroupService.getData();
    }
    ngOnInit() {
        this.shadow = lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep(this.fda);
        const toApply = lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep(this.fda);
        this.canEditPhysicalAddress = toApply.physicalAddress == undefined;
        this.form = this.fb.group({
            physicalAddress: ['', [], []],
            vBusRelayBoot: [0],
            vBusRelayNormal: [1],
            vBusRelayAlarm: [1],
            vBusRelayPowerLoss: [0],
            vBusRelayBusError: [0],
            position: [''],
            damper1: this.fb.group({
                name: ['', []],
                number: [1],
                damperMode: ['Automatic'],
                damperType: ['Main'],
                relayStateBoot: [0],
                relayStateNormal: [1],
                relayStateAlarm: [0],
                relayStatePowerLoss: [0],
                relayStateBusError: [0],
                position: ['', [], []],
                groups: [undefined],
                type: ['Damper'],
                id: [angular2_uuid__WEBPACK_IMPORTED_MODULE_1__.UUID.UUID()]
            }),
            damper2: this.fb.group({
                name: ['', []],
                number: [2],
                damperMode: ['Automatic'],
                damperType: ['Main'],
                relayStateBoot: [0],
                relayStateNormal: [1],
                relayStateAlarm: [0],
                relayStatePowerLoss: [0],
                relayStateBusError: [0],
                position: ['', [], []],
                groups: [undefined],
                type: ['Damper'],
                id: [angular2_uuid__WEBPACK_IMPORTED_MODULE_1__.UUID.UUID()]
            }),
            id: ['']
        });
        if (this.fda.id) {
            if (toApply.damper1 && toApply.damper1.groups && toApply.damper1.groups.length > 0) {
                toApply.damper1.groups = this.damperGroupService.groupsByIds(toApply.damper1.groups);
            }
            if (toApply.damper2 && toApply.damper2.groups && toApply.damper2.groups.length > 0) {
                toApply.damper2.groups = this.damperGroupService.groupsByIds(toApply.damper2.groups);
            }
            this.form.patchValue(toApply);
        }
    }
    get groups1() {
        return this.form.controls['damper1'].controls['groups'];
    }
    get groups2() {
        return this.form.controls['damper2'].controls['groups'];
    }
    checkForReturn(event) {
        if (event.target.tagName.toUpperCase() !== 'TEXTAREA' && event.keyCode == 13 && this.form.valid) {
            this.submitForm();
        }
    }
    submitForm() {
        if (this.form.valid && this.fdaService.checkIfPhysicalAddressUnique(this.form.value)) {
            if (this.groups1.value && this.groups1.value.length > 0) {
                this.groups1.setValue(this.groups1.value.map((val) => val.id));
            }
            if (this.groups2.value && this.groups2.value.length > 0) {
                this.groups2.setValue(this.groups2.value.map((val) => val.id));
            }
            this.activeModal.close(this.form.value);
        }
        else {
            this.toast.show("Physical ID must be unique!", { classname: 'bg-danger text-white text-bold toast-font-size' });
        }
    }
}
EditFdaComponent.ɵfac = function EditFdaComponent_Factory(t) { return new (t || EditFdaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_dto_services_damper_group_service__WEBPACK_IMPORTED_MODULE_2__.DamperGroupService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_dto_services_fda_service__WEBPACK_IMPORTED_MODULE_3__.FdaService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_toast_service_service__WEBPACK_IMPORTED_MODULE_4__.ToastService)); };
EditFdaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: EditFdaComponent, selectors: [["app-edit-fda"]], inputs: { fda: "fda" }, decls: 191, vars: 40, consts: [[1, "modal-header", "modal-header-background"], ["translate", "", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [3, "formGroup", "ngSubmit", "keydown"], [1, "modal-body", "modal-header-background"], [1, "container"], ["translate", "", 1, "fw-bold"], [1, "form-group", "my-1"], ["for", "physicalAddress", "translate", "", 1, "form-label", "my-0"], ["id", "physicalAddress", "formControlName", "physicalAddress", "type", "number", 1, "form-control", "shadow-none", 3, "ngClass", "readonly"], ["id", "position", "formControlName", "position", "type", "text", 1, "form-control", "shadow-none"], [1, "row"], ["formGroupName", "damper1", 1, "mt-4", "col-lg-6"], [1, "form-group", "mb-1"], ["for", "damper-1-name", "translate", "", 1, "form-label", "my-0"], ["id", "damper-1-name", "formControlName", "name", "type", "text", 1, "form-control", "shadow-none"], ["for", "damper-1-damperMode", "translate", "", 1, "form-label", "my-0"], ["id", "damper-1-damperMode", "formControlName", "damperMode", 1, "form-select"], ["value", "Disabled", "translate", ""], ["value", "Automatic", "translate", ""], ["value", "ManualOpen", "translate", ""], ["value", "ManualClose", "translate", ""], ["for", "damper-1-damperType", "translate", "", 1, "form-label", "my-0"], ["id", "damper-1-damperType", "formControlName", "damperType", 1, "form-select"], ["value", "Main", "translate", ""], ["value", "Auxiliary", "translate", ""], ["for", "damper-1-relayStateBoot", "translate", "", 1, "form-label", "my-0"], ["id", "damper-1-relayStateBoot", "formControlName", "relayStateBoot", 1, "form-select"], ["translate", "", 3, "ngValue"], ["for", "damper-1-relayStateNormal", "translate", "", 1, "form-label", "my-0"], ["id", "damper-1-relayStateNormal", "formControlName", "relayStateNormal", 1, "form-select"], ["for", "damper-1-relayStateAlarm", "translate", "", 1, "form-label", "my-0"], ["id", "damper-1-relayStateAlarm", "formControlName", "relayStateAlarm", 1, "form-select"], ["for", "damper-1-relayStatePowerLoss", "translate", "", 1, "form-label", "my-0"], ["id", "damper-1-relayStatePowerLoss", "formControlName", "relayStatePowerLoss", 1, "form-select"], ["for", "damper-1-relayStateBusError", "translate", "", 1, "form-label", "my-0"], ["id", "damper-1-relayStateBusError", "formControlName", "relayStateBusError", 1, "form-select"], ["for", "damper-1-position", "translate", "", 1, "form-label", "my-0"], ["id", "damper-1-position", "formControlName", "position", "type", "text", 1, "form-control", "shadow-none"], ["for", "damper-1-group", "translate", "", 1, "form-label", "my-0"], ["id", "damper-1-group", "formControlName", "groups", 3, "settings", "data"], ["formGroupName", "damper2", 1, "mt-4", "col-lg-6"], ["for", "damper-2-name", "translate", "", 1, "form-label", "my-0"], ["id", "damper-2-name", "formControlName", "name", "type", "text", 1, "form-control", "shadow-none"], ["for", "damper-2-damperMode", "translate", "", 1, "form-label", "my-0"], ["id", "damper-2-damperMode", "formControlName", "damperMode", 1, "form-select"], ["for", "damper-2-damperType", "translate", "", 1, "form-label", "my-0"], ["id", "damper-2-damperType", "formControlName", "damperType", 1, "form-select"], ["for", "damper-2-relayStateBoot", "translate", "", 1, "form-label", "my-0"], ["id", "damper-2-relayStateBoot", "formControlName", "relayStateBoot", 1, "form-select"], ["for", "damper-2-relayStateNormal", "translate", "", 1, "form-label", "my-0"], ["id", "damper-2-relayStateNormal", "formControlName", "relayStateNormal", 1, "form-select"], ["for", "damper-2-relayStateAlarm", "translate", "", 1, "form-label", "my-0"], ["id", "damper-2-relayStateAlarm", "formControlName", "relayStateAlarm", 1, "form-select"], ["for", "damper-2-relayStatePowerLoss", "translate", "", 1, "form-label", "my-0"], ["id", "damper-2-relayStatePowerLoss", "formControlName", "relayStatePowerLoss", 1, "form-select"], ["for", "damper-2-relayStateBusError", "translate", "", 1, "form-label", "my-0"], ["id", "damper-2-relayStateBusError", "formControlName", "relayStateBusError", 1, "form-select"], ["for", "damper-2-position", "translate", "", 1, "form-label", "my-0"], ["id", "damper-2-position", "formControlName", "position", "type", "text", 1, "form-control", "shadow-none"], ["for", "damper-2-group", "translate", "", 1, "form-label", "my-0"], ["id", "damper-2-group", "formControlName", "groups", 3, "settings", "data"], [1, "modal-footer", "modal-footer-background"], ["translate", "", 1, "btn", "btn-success", 3, "disabled"]], template: function EditFdaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "FDACONFIG.FDAS.NEW");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EditFdaComponent_Template_button_click_3_listener() { return ctx.activeModal.dismiss("Cross click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function EditFdaComponent_Template_form_ngSubmit_4_listener() { return ctx.submitForm(); })("keydown", function EditFdaComponent_Template_form_keydown_4_listener($event) { return ctx.checkForReturn($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "FDACONFIG.FDAS.EDIT.FDA");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 7)(10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "PHYSICALADDRESS");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 7)(14, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "FDACONFIG.POSITION");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 11)(18, "div", 12)(19, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "FDACONFIG.FDAS.DAMPERS.FIRST");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 13)(22, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "NAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 7)(26, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "FDACONFIG.FDAS.DAMPERS.MODE");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "select", 17)(29, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "FDACONFIG.FDAS.DAMPERS.MODES.DISABLED");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "FDACONFIG.FDAS.DAMPERS.MODES.AUTOMATIC");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "FDACONFIG.FDAS.DAMPERS.MODES.MANUALOPEN");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "FDACONFIG.FDAS.DAMPERS.MODES.MANUALCLOSE");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 7)(38, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "FDACONFIG.FDAS.DAMPERS.TYPE");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "select", 23)(41, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "FDACONFIG.FDAS.DAMPERS.TYPES.MAIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "FDACONFIG.FDAS.DAMPERS.TYPES.AUXILIARY");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 7)(46, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, "FDACONFIG.FDAS.DAMPERS.STATE.BOOT");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "select", 27)(49, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "FDACONFIG.FDAS.DAMPERS.STATES.CLOSED");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "FDACONFIG.FDAS.DAMPERS.STATES.OPEN");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, "FDACONFIG.FDAS.DAMPERS.STATES.NOCHANGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "div", 7)(56, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57, "FDACONFIG.FDAS.DAMPERS.STATE.NORMAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "select", 30)(59, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "FDACONFIG.FDAS.DAMPERS.STATES.CLOSED");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62, "FDACONFIG.FDAS.DAMPERS.STATES.OPEN");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64, "FDACONFIG.FDAS.DAMPERS.STATES.NOCHANGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "div", 7)(66, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](67, "FDACONFIG.FDAS.DAMPERS.STATE.ALARM");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "select", 32)(69, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70, "FDACONFIG.FDAS.DAMPERS.STATES.CLOSED");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](72, "FDACONFIG.FDAS.DAMPERS.STATES.OPEN");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74, "FDACONFIG.FDAS.DAMPERS.STATES.NOCHANGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "div", 7)(76, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](77, "FDACONFIG.FDAS.DAMPERS.STATE.POWERLOSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "select", 34)(79, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](80, "FDACONFIG.FDAS.DAMPERS.STATES.CLOSED");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](82, "FDACONFIG.FDAS.DAMPERS.STATES.OPEN");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](84, "FDACONFIG.FDAS.DAMPERS.STATES.NOCHANGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "div", 7)(86, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](87, "FDACONFIG.FDAS.DAMPERS.STATE.BUSERROR");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](88, "select", 36)(89, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](90, "FDACONFIG.FDAS.DAMPERS.STATES.CLOSED");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](92, "FDACONFIG.FDAS.DAMPERS.STATES.OPEN");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](93, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](94, "FDACONFIG.FDAS.DAMPERS.STATES.NOCHANGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](95, "div", 7)(96, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](97, "FDACONFIG.POSITION");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](98, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](99, "div", 7)(100, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](101, "FDACONFIG.FDAS.DAMPERS.GROUP");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](102, "ng-multiselect-dropdown", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](103, "div", 41)(104, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](105, "FDACONFIG.FDAS.DAMPERS.SECOND");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](106, "div", 13)(107, "label", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](108, "NAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](109, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](110, "div", 7)(111, "label", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](112, "FDACONFIG.FDAS.DAMPERS.MODE");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](113, "select", 45)(114, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](115, "FDACONFIG.FDAS.DAMPERS.MODES.DISABLED");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](116, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](117, "FDACONFIG.FDAS.DAMPERS.MODES.AUTOMATIC");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](118, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](119, "FDACONFIG.FDAS.DAMPERS.MODES.MANUALOPEN");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](120, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](121, "FDACONFIG.FDAS.DAMPERS.MODES.MANUALCLOSE");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](122, "div", 7)(123, "label", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](124, "FDACONFIG.FDAS.DAMPERS.TYPE");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](125, "select", 47)(126, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](127, "FDACONFIG.FDAS.DAMPERS.TYPES.MAIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](128, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](129, "FDACONFIG.FDAS.DAMPERS.TYPES.AUXILIARY");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](130, "div", 7)(131, "label", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](132, "FDACONFIG.FDAS.DAMPERS.STATE.BOOT");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](133, "select", 49)(134, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](135, "FDACONFIG.FDAS.DAMPERS.STATES.CLOSED");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](136, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](137, "FDACONFIG.FDAS.DAMPERS.STATES.OPEN");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](138, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](139, "FDACONFIG.FDAS.DAMPERS.STATES.NOCHANGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](140, "div", 7)(141, "label", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](142, "FDACONFIG.FDAS.DAMPERS.STATE.NORMAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](143, "select", 51)(144, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](145, "FDACONFIG.FDAS.DAMPERS.STATES.CLOSED");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](146, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](147, "FDACONFIG.FDAS.DAMPERS.STATES.OPEN");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](148, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](149, "FDACONFIG.FDAS.DAMPERS.STATES.NOCHANGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](150, "div", 7)(151, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](152, "FDACONFIG.FDAS.DAMPERS.STATE.ALARM");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](153, "select", 53)(154, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](155, "FDACONFIG.FDAS.DAMPERS.STATES.CLOSED");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](156, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](157, "FDACONFIG.FDAS.DAMPERS.STATES.OPEN");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](158, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](159, "FDACONFIG.FDAS.DAMPERS.STATES.NOCHANGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](160, "div", 7)(161, "label", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](162, "FDACONFIG.FDAS.DAMPERS.STATE.POWERLOSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](163, "select", 55)(164, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](165, "FDACONFIG.FDAS.DAMPERS.STATES.CLOSED");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](166, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](167, "FDACONFIG.FDAS.DAMPERS.STATES.OPEN");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](168, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](169, "FDACONFIG.FDAS.DAMPERS.STATES.NOCHANGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](170, "div", 7)(171, "label", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](172, "FDACONFIG.FDAS.DAMPERS.STATE.BUSERROR");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](173, "select", 57)(174, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](175, "FDACONFIG.FDAS.DAMPERS.STATES.CLOSED");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](176, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](177, "FDACONFIG.FDAS.DAMPERS.STATES.OPEN");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](178, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](179, "FDACONFIG.FDAS.DAMPERS.STATES.NOCHANGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](180, "div", 7)(181, "label", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](182, "FDACONFIG.POSITION");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](183, "input", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](184, "div", 7)(185, "label", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](186, "FDACONFIG.FDAS.DAMPERS.GROUP");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](187, "ng-multiselect-dropdown", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](188, "div", 62)(189, "button", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](190, "SAVE");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](38, _c0, !ctx.canEditPhysicalAddress))("readonly", !ctx.canEditPhysicalAddress);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngValue", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngValue", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngValue", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngValue", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngValue", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngValue", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngValue", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngValue", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngValue", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngValue", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngValue", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngValue", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngValue", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngValue", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngValue", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("settings", ctx.dropdownSettings)("data", ctx.groupsList);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngValue", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngValue", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngValue", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngValue", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngValue", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngValue", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngValue", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngValue", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngValue", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngValue", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngValue", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngValue", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngValue", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngValue", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngValue", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("settings", ctx.dropdownSettings)("data", ctx.groupsList);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.form.valid || !ctx.fdaService.loaded);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__.MultiSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupName, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateDirective], styles: [".form-check[_ngcontent-%COMP%] {\r\n  padding-left: 1.5rem !important;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\r\n}\r\n\r\ninput[type=number][_ngcontent-%COMP%] {\r\n  -moz-appearance: textfield;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtZmRhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7O0VBRUUsd0JBQXdCO0VBQ3hCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1QiIsImZpbGUiOiJlZGl0LWZkYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY2hlY2sge1xyXG4gIHBhZGRpbmctbGVmdDogMS41cmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxyXG5pbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1udW1iZXJdIHtcclxuICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 7209:
/*!*********************************************************************!*\
  !*** ./src/app/components/edit-fdc-time/edit-fdc-time.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditFdcTimeComponent": () => (/* binding */ EditFdcTimeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_fdc_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/fdc.service */ 1473);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 8699);






function EditFdcTimeComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "SYSCONF.TIME.LOADINGSYSTEMTIME");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EditFdcTimeComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "SYSCONF.TIME.LOCALTIME");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditFdcTimeComponent_div_7_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.syncToLocalTime()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "SYSCONF.TIME.SYNCLOCALANDSAVE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "SYSCONF.TIME.FDCTIME");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 12)(12, "ngb-datepicker", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditFdcTimeComponent_div_7_Template_ngb_datepicker_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.fdcDateModel = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ngb-timepicker", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditFdcTimeComponent_div_7_Template_ngb_timepicker_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.fdcTimeModel = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditFdcTimeComponent_div_7_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.submitFdcTime()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "SYSCONF.TIME.SAVEMANUAL");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.localDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.fdcDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.fdcDateModel);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.fdcTimeModel);
} }
class EditFdcTimeComponent {
    constructor(activeModal, fb, fdcService) {
        this.activeModal = activeModal;
        this.fb = fb;
        this.fdcService = fdcService;
        this.fdcTimeLoaded = false;
        this.updateTime = true;
        this.fdcDateModel = { year: 0, month: 0, day: 0 };
        this.fdcTimeModel = { hour: 0, minute: 0, second: 0 };
        this.setLocalDate();
        this.loadFdcDate();
    }
    loadFdcDate() {
        this.fdcService.getFdcTime().subscribe({
            next: (data) => {
                let fdcDateNow = new Date(data.milliseconds);
                if (!this.fdcTimeLoaded) {
                    this.fdcDateModel = {
                        year: fdcDateNow.getFullYear(),
                        month: fdcDateNow.getMonth() + 1,
                        day: fdcDateNow.getDate()
                    };
                    this.fdcTimeModel = {
                        hour: fdcDateNow.getHours(),
                        minute: fdcDateNow.getMinutes(),
                        second: 0
                    };
                }
                this.fdcDate = this.toDateTimeStr(fdcDateNow);
                this.fdcTimeLoaded = true;
                if (this.updateTime) {
                    setTimeout(() => this.loadFdcDate(), 1000);
                }
            },
            error: (err) => console.log(err)
        });
    }
    setLocalDate() {
        let dt = new Date();
        this.localDate = this.toDateTimeStr(dt);
        if (this.updateTime) {
            setTimeout(() => this.setLocalDate(), 1000);
        }
    }
    toDateTimeStr(dt) {
        return `${dt.getDate().toString().padStart(2, '0')}.${(dt.getMonth() + 1).toString().padStart(2, '0')}.${dt.getFullYear().toString().padStart(4, '0')} ${dt.getHours().toString().padStart(2, '0')}:${dt.getMinutes().toString().padStart(2, '0')}:${dt.getSeconds().toString().padStart(2, '0')}`;
    }
    ngOnInit() {
    }
    submitFdcTime() {
        this.updateTime = false;
        this.activeModal.close(new Date(this.fdcDateModel.year, this.fdcDateModel.month - 1, this.fdcDateModel.day, this.fdcTimeModel.hour, this.fdcTimeModel.minute, this.fdcTimeModel.second));
    }
    syncToLocalTime() {
        this.updateTime = false;
        this.activeModal.close(new Date().getTime());
    }
}
EditFdcTimeComponent.ɵfac = function EditFdcTimeComponent_Factory(t) { return new (t || EditFdcTimeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_fdc_service__WEBPACK_IMPORTED_MODULE_0__.FdcService)); };
EditFdcTimeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditFdcTimeComponent, selectors: [["app-edit-fdc-time"]], decls: 8, vars: 2, consts: [[1, "modal-header", "modal-header-background"], ["translate", "", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body", "modal-body-background"], [1, "container"], ["translate", "", 4, "ngIf"], [4, "ngIf"], ["translate", ""], ["translate", "", 1, "fw-bold", "mb-1"], ["translate", "", 1, "btn", "btn-success", "mt-2", 3, "click"], ["translate", "", 1, "fw-bold", "mt-3", "mb-1"], [1, "mb-2"], [1, "d-flex", "flex-wrap"], [3, "ngModel", "ngModelChange"], [1, "timepicker", 3, "ngModel", "ngModelChange"]], template: function EditFdcTimeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "SYSCONF.TIME.SETTIME");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditFdcTimeComponent_Template_button_click_3_listener() { return ctx.activeModal.dismiss("Cross click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3)(5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, EditFdcTimeComponent_div_6_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, EditFdcTimeComponent_div_7_Template, 16, 4, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.fdcTimeLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.fdcTimeLoaded);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbDatepicker, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbTimepicker, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateDirective], styles: ["@media (min-width: 460px) {\r\n  .timepicker[_ngcontent-%COMP%] {\r\n    margin-top: -2.35rem;\r\n    margin-left: 0.5rem;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtZmRjLXRpbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0Usb0JBQW9CO0lBQ3BCLG1CQUFtQjtFQUNyQjtBQUNGIiwiZmlsZSI6ImVkaXQtZmRjLXRpbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAobWluLXdpZHRoOiA0NjBweCkge1xyXG4gIC50aW1lcGlja2VyIHtcclxuICAgIG1hcmdpbi10b3A6IC0yLjM1cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 7419:
/*!***************************************************************!*\
  !*** ./src/app/components/edit-input/edit-input.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditInputComponent": () => (/* binding */ EditInputComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _validators_inputValidators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../validators/inputValidators */ 5227);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _services_dto_services_input_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/dto-services/input.service */ 6441);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../directives/autofocus.directive */ 3185);










function EditInputComponent_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngValue", ctx_r0.shadowInput.number);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.shadowInput.number);
} }
function EditInputComponent_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const number_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngValue", number_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](number_r2);
} }
class EditInputComponent {
    constructor(activeModal, fb, inputService) {
        this.activeModal = activeModal;
        this.fb = fb;
        this.inputService = inputService;
        this.input = {};
        this.shadowInput = {};
        this.form = {};
    }
    ngOnInit() {
        this.shadowInput = lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep(this.input);
        this.form = this.fb.group({
            disabled: [0],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required], [_validators_inputValidators__WEBPACK_IMPORTED_MODULE_1__.InputNameValidator.createValidator(this.inputService, this.shadowInput)]],
            number: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required], [_validators_inputValidators__WEBPACK_IMPORTED_MODULE_1__.InputNumberValidator.createValidator(this.inputService, this.shadowInput)]],
            description: [''],
            inverted: [0],
            groups: [''],
            type: ['Input']
        });
        if (this.input.number) {
            this.form.patchValue(this.input);
        }
    }
    checkForReturn(event) {
        if (event.target.tagName.toUpperCase() !== 'TEXTAREA' && event.keyCode == 13 && this.form.valid) {
            this.submitForm();
        }
    }
    submitForm() {
        if (this.form.valid) {
            this.activeModal.close(this.form.value);
        }
    }
}
EditInputComponent.ɵfac = function EditInputComponent_Factory(t) { return new (t || EditInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_dto_services_input_service__WEBPACK_IMPORTED_MODULE_2__.InputService)); };
EditInputComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: EditInputComponent, selectors: [["app-edit-input"]], inputs: { input: "input" }, decls: 32, vars: 5, consts: [[1, "modal-header", "modal-header-background"], ["translate", "", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [3, "formGroup", "ngSubmit", "keydown"], [1, "modal-body", "modal-body-background"], [1, "container"], [1, "form-check", "ps-4", "col-12"], ["id", "disabled", "type", "checkbox", "value", "", "formControlName", "disabled", 1, "form-check-input"], ["for", "disabled", "translate", "", 1, "form-check-label"], [1, "form-group", "my-1"], ["for", "name", "translate", "", 1, "form-label", "my-0"], ["id", "name", "formControlName", "name", "type", "text", "appAutofocus", "", 1, "form-control", "shadow-none"], ["for", "number", "translate", "", 1, "form-label", "my-0"], ["id", "number", "formControlName", "number", 1, "form-select", 3, "ngModel"], ["class", "bg-info", 3, "ngValue", 4, "ngIf"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "form-check", "col"], ["id", "inverted", "type", "checkbox", "value", "", "formControlName", "inverted", 1, "form-check-input"], ["for", "inverted", "translate", "", 1, "form-check-label"], ["for", "description", "translate", "", 1, "form-label", "my-0"], ["id", "description", "rows", "3", "formControlName", "description", 1, "form-control"], [1, "modal-footer", "modal-footer-background"], ["translate", "", 1, "btn", "btn-success", 3, "disabled"], [1, "bg-info", 3, "ngValue"], [3, "ngValue"]], template: function EditInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "INPUTS.NEW");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EditInputComponent_Template_button_click_3_listener() { return ctx.activeModal.dismiss("Cross click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function EditInputComponent_Template_form_ngSubmit_4_listener() { return ctx.submitForm(); })("keydown", function EditInputComponent_Template_form_keydown_4_listener($event) { return ctx.checkForReturn($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "IO.DISABLED");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 9)(12, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "NAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 9)(16, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "IO.NUMBER-TERMINAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, EditInputComponent_option_19_Template, 2, 2, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, EditInputComponent_option_20_Template, 2, 2, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "IO.INVERT");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 9)(26, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "DESCRIPTION");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "textarea", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 21)(30, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "SAVE");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.form.value.number);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.shadowInput.number);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.inputService.availableInputNumbers);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.form.valid || !ctx.inputService.service.loaded);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateDirective, _directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_3__.AutofocusDirective], styles: [".form-check[_ngcontent-%COMP%] {\r\n  padding-left: 1.5rem !important;\r\n  padding-top: .5rem !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtaW5wdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUErQjtFQUMvQiw2QkFBNkI7QUFDL0IiLCJmaWxlIjoiZWRpdC1pbnB1dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY2hlY2sge1xyXG4gIHBhZGRpbmctbGVmdDogMS41cmVtICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy10b3A6IC41cmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 2232:
/*!*******************************************************************************!*\
  !*** ./src/app/components/edit-mail-template/edit-mail-template.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditMailTemplateComponent": () => (/* binding */ EditMailTemplateComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _validators_mailTemplateValidators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../validators/mailTemplateValidators */ 5182);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _services_dto_services_mail_template_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/dto-services/mail-template.service */ 8499);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../directives/autofocus.directive */ 3185);











function EditMailTemplateComponent_input_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "input", 18);
} if (rf & 2) {
    const rec_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", rec_r1);
} }
class EditMailTemplateComponent {
    constructor(activeModal, fb, mailTemplateService) {
        this.activeModal = activeModal;
        this.fb = fb;
        this.mailTemplateService = mailTemplateService;
        this.mailTemplate = {};
        this.shadow = {};
        this.form = {};
        this.mailRecipientsValid = true;
    }
    ngOnInit() {
        this.shadow = lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep(this.mailTemplate);
        this.form = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required], [_validators_mailTemplateValidators__WEBPACK_IMPORTED_MODULE_1__.MailTemplateNameValidator.createValidator(this.mailTemplateService, this.shadow)]],
            subject: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required], []],
            body: ['', [], []],
            recipients: ['', [], []]
        });
        if (this.mailTemplate.id) {
            this.form.patchValue(this.mailTemplate);
        }
        setTimeout(() => {
            let recInputs = document.getElementsByName('recipients');
            (0,lodash__WEBPACK_IMPORTED_MODULE_0__.forEach)(recInputs, (ri) => {
                ['keyup', 'paste'].forEach(evt => ri.addEventListener(evt, (event) => {
                    this.prepareRecipentsInputs();
                    this.mailInputChange(event);
                }));
            });
        });
    }
    get recipients() {
        return this.form.controls['recipients'];
    }
    mailInputChange(event) {
        if (!event.target.checkValidity()) {
            event.target.style.outline = 'solid 1px red';
        }
        else {
            event.target.style.outline = '';
        }
    }
    prepareRecipentsInputs() {
        let recInputs = document.getElementsByName('recipients');
        for (let i = recInputs.length - 2; i >= 0; --i) {
            if (recInputs[i].value.trim() === '') {
                recInputs[i].remove();
            }
        }
        recInputs = document.getElementsByName('recipients');
        if (recInputs && recInputs[recInputs.length - 1].value.trim() !== '') {
            let parent = recInputs[recInputs.length - 1].parentNode;
            if (parent) {
                let newInput = document.createElement("input");
                newInput.name = 'recipients';
                newInput.type = 'email';
                newInput.classList.add('form-control', 'shadow-none', 'mt-1');
                ['keyup', 'paste'].forEach(evt => newInput.addEventListener(evt, (event) => {
                    this.prepareRecipentsInputs();
                    this.mailInputChange(event);
                }));
                parent.insertBefore(newInput, recInputs[recInputs.length - 1].nextSibling);
            }
        }
        let emailsOk = true;
        document.getElementsByName('recipients').forEach(rec => {
            if (rec.value && !rec.checkValidity()) {
                emailsOk = false;
            }
        });
        this.mailRecipientsValid = emailsOk;
    }
    checkForReturn(event) {
        if (event.target.tagName.toUpperCase() !== 'TEXTAREA' && event.keyCode == 13 && this.form.valid) {
            this.submitForm(event);
        }
    }
    submitForm(event) {
        if (this.form.valid) {
            let emailsOk = true;
            document.getElementsByName('recipients').forEach(rec => {
                if (rec.value && !rec.checkValidity()) {
                    emailsOk = false;
                }
            });
            if (!emailsOk) {
                event.preventDefault();
                return;
            }
            this.form.value.recipients = [];
            document.getElementsByName('recipients').forEach(rec => {
                if (rec.value) {
                    this.form.value.recipients.push(rec.value);
                }
            });
            this.activeModal.close(this.form.value);
        }
    }
}
EditMailTemplateComponent.ɵfac = function EditMailTemplateComponent_Factory(t) { return new (t || EditMailTemplateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_dto_services_mail_template_service__WEBPACK_IMPORTED_MODULE_2__.MailTemplateService)); };
EditMailTemplateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: EditMailTemplateComponent, selectors: [["app-edit-mail-template"]], inputs: { mailTemplate: "mailTemplate" }, decls: 27, vars: 3, consts: [[1, "modal-header", "modal-header-background"], ["translate", "", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [3, "formGroup", "ngSubmit", "keydown"], [1, "modal-body", "modal-body-background"], [1, "container"], [1, "form-group", "my-1"], ["for", "name", "translate", "", 1, "form-label", "my-0"], ["id", "name", "formControlName", "name", "type", "text", "appAutofocus", "", 1, "form-control", "shadow-none"], ["for", "subject", "translate", "", 1, "form-label", "my-0"], ["id", "subject", "formControlName", "subject", "type", "text", 1, "form-control", "shadow-none"], ["for", "body", "translate", "", 1, "form-label", "my-0"], ["id", "body", "rows", "3", "formControlName", "body", 1, "form-control"], ["translate", "", 1, "form-label", "my-0"], ["class", "form-control shadow-none mt-1", "name", "recipients", "type", "email", 3, "value", 4, "ngFor", "ngForOf"], ["name", "recipients", "type", "email", 1, "form-control", "shadow-none", "mt-1"], [1, "modal-footer", "modal-footer-background"], ["translate", "", 1, "btn", "btn-success", 3, "disabled"], ["name", "recipients", "type", "email", 1, "form-control", "shadow-none", "mt-1", 3, "value"]], template: function EditMailTemplateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "MAILTEMPLATES.NEW");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EditMailTemplateComponent_Template_button_click_3_listener() { return ctx.activeModal.dismiss("Cross click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function EditMailTemplateComponent_Template_form_ngSubmit_4_listener($event) { return ctx.submitForm($event); })("keydown", function EditMailTemplateComponent_Template_form_keydown_4_listener($event) { return ctx.checkForReturn($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "NAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 6)(12, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "MAILTEMPLATES.SUBJECT");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 6)(16, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "MAILTEMPLATES.BODY");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "textarea", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 6)(20, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "MAILTEMPLATES.RECIPIENTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, EditMailTemplateComponent_input_22_Template, 1, 1, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 16)(25, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "SAVE");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.recipients == null ? null : ctx.recipients.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.form.valid || !ctx.mailRecipientsValid || !ctx.mailTemplateService.loaded);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateDirective, _directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_3__.AutofocusDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LW1haWwtdGVtcGxhdGUuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 2582:
/*!*****************************************************************!*\
  !*** ./src/app/components/edit-output/edit-output.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditOutputComponent": () => (/* binding */ EditOutputComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _validators_outputValidators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../validators/outputValidators */ 3798);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _services_dto_services_output_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/dto-services/output.service */ 5782);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../directives/autofocus.directive */ 3185);










function EditOutputComponent_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngValue", ctx_r0.shadow.number);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.shadow.number);
} }
function EditOutputComponent_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const number_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngValue", number_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](number_r2);
} }
class EditOutputComponent {
    constructor(activeModal, fb, outputService) {
        this.activeModal = activeModal;
        this.fb = fb;
        this.outputService = outputService;
        this.output = {};
        this.shadow = {};
        this.form = {};
    }
    ngOnInit() {
        this.shadow = lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep(this.output);
        this.form = this.fb.group({
            disabled: [0],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required], [_validators_outputValidators__WEBPACK_IMPORTED_MODULE_1__.OutputNameValidator.createValidator(this.outputService, this.shadow)]],
            number: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required], [_validators_outputValidators__WEBPACK_IMPORTED_MODULE_1__.OutputNumberValidator.createValidator(this.outputService, this.shadow)]],
            description: [''],
            inverted: [0],
            groups: [''],
            type: ['Output']
        });
        if (this.output.number) {
            this.form.patchValue(this.output);
        }
    }
    checkForReturn(event) {
        if (event.target.tagName.toUpperCase() !== 'TEXTAREA' && event.keyCode == 13 && this.form.valid) {
            this.submitForm();
        }
    }
    submitForm() {
        if (this.form.valid) {
            this.activeModal.close(this.form.value);
        }
    }
}
EditOutputComponent.ɵfac = function EditOutputComponent_Factory(t) { return new (t || EditOutputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_dto_services_output_service__WEBPACK_IMPORTED_MODULE_2__.OutputService)); };
EditOutputComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: EditOutputComponent, selectors: [["app-edit-output"]], inputs: { output: "output" }, decls: 32, vars: 5, consts: [[1, "modal-header", "modal-header-background"], ["translate", "", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [3, "formGroup", "ngSubmit", "keydown"], [1, "modal-body", "modal-body-background"], [1, "container"], [1, "form-check", "ps-4", "col-12"], ["id", "disabled", "type", "checkbox", "value", "", "formControlName", "disabled", 1, "form-check-input"], ["for", "disabled", "translate", "", 1, "form-check-label"], [1, "form-group", "my-1"], ["for", "name", "translate", "", 1, "form-label", "my-0"], ["id", "name", "formControlName", "name", "type", "text", "appAutofocus", "", 1, "form-control", "shadow-none"], ["for", "number", "translate", "", 1, "form-label", "my-0"], ["id", "number", "formControlName", "number", 1, "form-select", 3, "ngModel"], ["class", "bg-info", 3, "ngValue", 4, "ngIf"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "form-check", "col"], ["id", "inverted", "type", "checkbox", "value", "", "formControlName", "inverted", 1, "form-check-input"], ["for", "inverted", "translate", "", 1, "form-check-label"], ["for", "description", "translate", "", 1, "form-label", "my-0"], ["id", "description", "rows", "3", "formControlName", "description", 1, "form-control"], [1, "modal-footer", "modal-footer-background"], ["translate", "", 1, "btn", "btn-success", 3, "disabled"], [1, "bg-info", 3, "ngValue"], [3, "ngValue"]], template: function EditOutputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "OUTPUTS.NEW");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EditOutputComponent_Template_button_click_3_listener() { return ctx.activeModal.dismiss("Cross click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function EditOutputComponent_Template_form_ngSubmit_4_listener() { return ctx.submitForm(); })("keydown", function EditOutputComponent_Template_form_keydown_4_listener($event) { return ctx.checkForReturn($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "IO.DISABLED");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 9)(12, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "NAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 9)(16, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "IO.NUMBER-TERMINAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, EditOutputComponent_option_19_Template, 2, 2, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, EditOutputComponent_option_20_Template, 2, 2, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "IO.INVERT");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 9)(26, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "DESCRIPTION");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "textarea", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 21)(30, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "SAVE");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.form.value.number);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.shadow.number);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.outputService.availableOutputNumbers);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.form.valid || !ctx.outputService.service.loaded);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateDirective, _directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_3__.AutofocusDirective], styles: [".form-check[_ngcontent-%COMP%] {\r\n  padding-left: 1.5rem !important;\r\n  padding-top: .5rem !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtb3V0cHV0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBK0I7RUFDL0IsNkJBQTZCO0FBQy9CIiwiZmlsZSI6ImVkaXQtb3V0cHV0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jaGVjayB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxLjVyZW0gIWltcG9ydGFudDtcclxuICBwYWRkaW5nLXRvcDogLjVyZW0gIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 5137:
/*!*************************************************************************!*\
  !*** ./src/app/components/fda-replacement/fda-replacement.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FdaReplacementComponent": () => (/* binding */ FdaReplacementComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _services_dto_services_damper_group_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/dto-services/damper-group.service */ 3705);
/* harmony import */ var _services_dto_services_fda_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/dto-services/fda.service */ 7576);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 8699);







function FdaReplacementComponent_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const physAddress_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", physAddress_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](physAddress_r1);
} }
class FdaReplacementComponent {
    constructor(activeModal, damperGroupService, fdaService, fb) {
        this.activeModal = activeModal;
        this.damperGroupService = damperGroupService;
        this.fdaService = fdaService;
        this.fb = fb;
        this.unconfiguredFdaPhyAddrasses = [];
        this.form = {};
    }
    ngOnInit() {
        this.form = this.fb.group({
            physicalAddress: ['']
        });
        this.form.patchValue(this.unconfiguredFdaPhyAddrasses);
    }
    get physicalAddress() {
        return this.form.controls['physicalAddress'];
    }
    submitForm() {
        this.activeModal.close(this.form.value);
    }
}
FdaReplacementComponent.ɵfac = function FdaReplacementComponent_Factory(t) { return new (t || FdaReplacementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_dto_services_damper_group_service__WEBPACK_IMPORTED_MODULE_0__.DamperGroupService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_dto_services_fda_service__WEBPACK_IMPORTED_MODULE_1__.FdaService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormBuilder)); };
FdaReplacementComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FdaReplacementComponent, selectors: [["app-fda-replacement"]], inputs: { unconfiguredFdaPhyAddrasses: "unconfiguredFdaPhyAddrasses" }, decls: 15, vars: 3, consts: [[1, "modal-header", "modal-header-background"], ["translate", "", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [3, "formGroup", "ngSubmit"], [1, "modal-body", "modal-body-background"], [1, "container"], [1, "form-group"], ["for", "physicalAddress", 1, "form-label", "my-0"], ["id", "physicalAddress", "formControlName", "physicalAddress", 1, "form-select"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "modal-footer", "modal-footer-background"], ["translate", "", 1, "btn", "btn-success", 3, "disabled"], [3, "ngValue"]], template: function FdaReplacementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "FDACONFIG.FDAS.REPLACE");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FdaReplacementComponent_Template_button_click_3_listener() { return ctx.activeModal.dismiss("Cross click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function FdaReplacementComponent_Template_form_ngSubmit_4_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Choose physical address");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, FdaReplacementComponent_option_11_Template, 2, 2, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 10)(13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "SAVE");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.unconfiguredFdaPhyAddrasses);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.form.valid || !ctx.fdaService.loaded);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZGEtcmVwbGFjZW1lbnQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6618:
/*!***************************************************!*\
  !*** ./src/app/components/fdas/fdas.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FdasComponent": () => (/* binding */ FdasComponent)
/* harmony export */ });
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular2-uuid */ 3105);
/* harmony import */ var _edit_fda_edit_fda_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../edit-fda/edit-fda.component */ 3997);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_dto_services_fda_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/dto-services/fda.service */ 7576);
/* harmony import */ var _services_dto_services_damper_group_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/dto-services/damper-group.service */ 3705);
/* harmony import */ var _services_socket_connection_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/socket-connection.service */ 6465);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _damper_groups_damper_groups_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../damper-groups/damper-groups.component */ 834);











function FdasComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-damper-groups");
} }
function FdasComponent_ng_template_6_div_4_ng_template_3_div_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"]("FDACONFIG.FDAS.DAMPERS.NOGROUP");
} }
function FdasComponent_ng_template_6_div_4_ng_template_3_div_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](group_r9.name);
} }
function FdasComponent_ng_template_6_div_4_ng_template_3_div_121_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"]("FDACONFIG.FDAS.DAMPERS.NOGROUP");
} }
function FdasComponent_ng_template_6_div_4_ng_template_3_div_122_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](group_r10.name);
} }
function FdasComponent_ng_template_6_div_4_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "table", 11)(1, "tr")(2, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "PHYSICALADDRESS");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "tr")(7, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "FDACONFIG.POSITION");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "tr", 16)(12, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "FDACONFIG.FDAS.DAMPERS.FIRST");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "tr")(15, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "NAME");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "tr")(20, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "FDACONFIG.FDAS.DAMPERS.MODE");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](24, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "tr")(26, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "FDACONFIG.FDAS.DAMPERS.TYPE");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](30, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "tr")(32, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "FDACONFIG.FDAS.DAMPERS.STATE.BOOT");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "tr")(37, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, "FDACONFIG.FDAS.DAMPERS.STATE.NORMAL");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "tr")(42, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43, "FDACONFIG.FDAS.DAMPERS.STATE.ALARM");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "tr")(47, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48, "FDACONFIG.FDAS.DAMPERS.STATE.POWERLOSS");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "tr")(52, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](53, "FDACONFIG.FDAS.DAMPERS.STATE.BUSERROR");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "tr")(57, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](58, "FDACONFIG.POSITION");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "tr")(62, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](63, "FDACONFIG.FDAS.DAMPERS.GROUPS");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](65, FdasComponent_ng_template_6_div_4_ng_template_3_div_65_Template, 2, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](66, FdasComponent_ng_template_6_div_4_ng_template_3_div_66_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "tr", 23)(68, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](69, "FDACONFIG.FDAS.DAMPERS.SECOND");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "tr")(71, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](72, "NAME");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](73, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](75, "tr")(76, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](77, "FDACONFIG.FDAS.DAMPERS.MODE");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](78, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](79);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](80, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](81, "tr")(82, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](83, "FDACONFIG.FDAS.DAMPERS.TYPE");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](84, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](86, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](87, "tr")(88, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](89, "FDACONFIG.FDAS.DAMPERS.STATE.BOOT");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](90, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](91);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](92, "tr")(93, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](94, "FDACONFIG.FDAS.DAMPERS.STATE.NORMAL");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](95, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](96);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](97, "tr")(98, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](99, "FDACONFIG.FDAS.DAMPERS.STATE.ALARM");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](100, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](101);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](102, "tr")(103, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](104, "FDACONFIG.FDAS.DAMPERS.STATE.POWERLOSS");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](105, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](106);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](107, "tr")(108, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](109, "FDACONFIG.FDAS.DAMPERS.STATE.BUSERROR");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](110, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](111);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](112, "tr")(113, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](114, "FDACONFIG.POSITION");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](115, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](116);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](117, "tr")(118, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](119, "FDACONFIG.FDAS.DAMPERS.GROUPS");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](120, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](121, FdasComponent_ng_template_6_div_4_ng_template_3_div_121_Template, 2, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](122, FdasComponent_ng_template_6_div_4_ng_template_3_div_122_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](123, "div", 25)(124, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function FdasComponent_ng_template_6_div_4_ng_template_3_Template_button_click_124_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13); const fda_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r11.remove(fda_r3.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](125, "DELETE");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](126, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function FdasComponent_ng_template_6_div_4_ng_template_3_Template_button_click_126_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13); const fda_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r14.edit(fda_r3.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](127, "EDIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const fda_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](fda_r3.physicalAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](fda_r3.position);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](fda_r3.damper1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("FDACONFIG.FDAS.DAMPERS.MODES.", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](24, 26, fda_r3.damper1.damperMode), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("FDACONFIG.FDAS.DAMPERS.TYPES.", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](30, 28, fda_r3.damper1.damperType), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r4.damperValue(fda_r3.damper1.relayStateBoot));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r4.damperValue(fda_r3.damper1.relayStateNormal));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r4.damperValue(fda_r3.damper1.relayStateAlarm));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r4.damperValue(fda_r3.damper1.relayStatePowerLoss));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r4.damperValue(fda_r3.damper1.relayStateBusError));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](fda_r3.damper1.position);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r4.groupService.groupsByIds(fda_r3.damper1.groups).length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r4.groupService.groupsByIds(fda_r3.damper1.groups));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](fda_r3.damper2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("FDACONFIG.FDAS.DAMPERS.MODES.", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](80, 30, fda_r3.damper2.damperMode), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("FDACONFIG.FDAS.DAMPERS.TYPES.", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](86, 32, fda_r3.damper2.damperType), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r4.damperValue(fda_r3.damper2.relayStateBoot));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r4.damperValue(fda_r3.damper2.relayStateNormal));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r4.damperValue(fda_r3.damper2.relayStateAlarm));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r4.damperValue(fda_r3.damper2.relayStatePowerLoss));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r4.damperValue(fda_r3.damper2.relayStateBusError));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](fda_r3.damper2.position);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r4.groupService.groupsByIds(fda_r3.damper2.groups).length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r4.groupService.groupsByIds(fda_r3.damper2.groups));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx_r4.fdaService.loaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx_r4.fdaService.loaded);
} }
function FdasComponent_ng_template_6_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 8)(1, "ngb-accordion", 9)(2, "ngb-panel", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, FdasComponent_ng_template_6_div_4_ng_template_3_Template, 128, 34, "ng-template", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const fda_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate2"]("title", "", fda_r3.physicalAddress, "", fda_r3.position ? " / " + fda_r3.position : "", "");
} }
function FdasComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 4)(1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function FdasComponent_ng_template_6_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r17.create()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "FDACONFIG.FDAS.NEW");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, FdasComponent_ng_template_6_div_4_Template, 4, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx_r1.fdaService.loaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("id", ctx_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.fdaService.data);
} }
class FdasComponent {
    constructor(fdaService, groupService, socketService, modalService) {
        this.fdaService = fdaService;
        this.groupService = groupService;
        this.socketService = socketService;
        this.modalService = modalService;
        this.id = angular2_uuid__WEBPACK_IMPORTED_MODULE_0__.UUID.UUID();
    }
    ngOnInit() {
    }
    create() {
        const modalRef = this.modalService.open(_edit_fda_edit_fda_component__WEBPACK_IMPORTED_MODULE_1__.EditFdaComponent, { size: 'lg' });
        modalRef.result.then((result) => {
            this.fdaService.add(result);
        }).catch(() => {
            // ignore cross-click
        });
    }
    edit(id) {
        let fdas = this.fdaService.data.filter((fda) => fda.id === id);
        if (fdas && fdas.length == 1) {
            let fda = fdas[0];
            const clone = lodash__WEBPACK_IMPORTED_MODULE_2__.cloneDeep(fda);
            const modalRef = this.modalService.open(_edit_fda_edit_fda_component__WEBPACK_IMPORTED_MODULE_1__.EditFdaComponent, { size: 'lg' });
            modalRef.componentInstance.fda = clone;
            modalRef.result.then((result) => {
                let fdas = this.fdaService.data.filter((fda) => fda.id === id);
                if (fdas && fdas.length == 1) {
                    let fda = fdas[0];
                    console.log(result);
                    Object.assign(fda, result);
                    this.fdaService.update();
                }
            }).catch(() => {
                // ignore cross-click
            });
        }
    }
    remove(id) {
        this.fdaService.remove(id);
    }
    relayValue(value) {
        switch (value) {
            case 0: return 'FDACONFIG.FDAS.VBUSSTATES.OFF';
            case 1: return 'FDACONFIG.FDAS.VBUSSTATES.ON';
            default: return 'FDACONFIG.FDAS.VBUSSTATES.NOCHANGE';
        }
    }
    damperValue(value) {
        switch (value) {
            case 0: return 'FDACONFIG.FDAS.DAMPERS.STATES.CLOSED';
            case 1: return 'FDACONFIG.FDAS.DAMPERS.STATES.OPEN';
            default: return 'FDACONFIG.FDAS.DAMPERS.STATES.NOCHANGE';
        }
    }
}
FdasComponent.ɵfac = function FdasComponent_Factory(t) { return new (t || FdasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_dto_services_fda_service__WEBPACK_IMPORTED_MODULE_3__.FdaService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_dto_services_damper_group_service__WEBPACK_IMPORTED_MODULE_4__.DamperGroupService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_socket_connection_service__WEBPACK_IMPORTED_MODULE_5__.SocketConnectionService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal)); };
FdasComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: FdasComponent, selectors: [["app-fdas"]], decls: 7, vars: 8, consts: [["activeIds", ""], ["id", "groups", 3, "title", "disabled"], ["ngbPanelContent", ""], ["id", "fdas", 3, "title", "disabled"], [1, "col-md-3", "my-3"], ["translate", "", 1, "btn", "btn-primary", "w-100", "shadow-none", 3, "disabled", "click"], [1, "row", "accordion-level-1", 3, "id"], ["class", "col-lg-6 my-2", 4, "ngFor", "ngForOf"], [1, "col-lg-6", "my-2"], ["activeIds", "0"], [3, "title"], [1, "table", "table-borderless"], ["translate", "", 1, "fw-bold", "text-nowrap"], [1, "text-end"], ["translate", "", 1, "fw-bold", "pb-2"], [1, "text-end", "pb-2"], [1, "border-top", "mt-2", "color-gray"], ["colspan", "2", "translate", "", 1, "fw-bold"], ["translate", "", 1, "fw-bold"], ["translate", "", 1, "text-end"], ["translate", "", 1, "fw-bold", "pb-2", "align-text-top"], ["class", "p-0", "translate", "", 4, "ngIf"], ["class", "p-0", 4, "ngFor", "ngForOf"], [1, "border-top", "color-gray"], ["translate", "", 1, "fw-bold", "align-text-top"], [1, "mt-2"], ["translate", "", 1, "btn", "btn-outline-danger", "me-3", 3, "disabled", "click"], ["translate", "", 1, "btn", "btn-outline-primary", 3, "disabled", "click"], ["translate", "", 1, "p-0"], [1, "p-0"]], template: function FdasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ngb-accordion", 0)(1, "ngb-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, FdasComponent_ng_template_3_Template, 1, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "ngb-panel", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, FdasComponent_ng_template_6_Template, 5, 3, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 4, "FDACONFIG.GROUPS.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.socketService.connectedToBackend || !ctx.groupService.loaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 6, "FDACONFIG.FDAS.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.socketService.connectedToBackend || !ctx.fdaService.loaded);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbAccordion, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbPanel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbPanelContent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateDirective, _damper_groups_damper_groups_component__WEBPACK_IMPORTED_MODULE_6__.DamperGroupsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.UpperCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZGFzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 114:
/*!***************************************************************************************!*\
  !*** ./src/app/components/forced-password-change/forced-password-change.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForcedPasswordChangeComponent": () => (/* binding */ ForcedPasswordChangeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_authentication_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/authentication/user.service */ 3732);
/* harmony import */ var _services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/authentication/auth.service */ 3271);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _subcomponent_password_repeat_password_repeat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../subcomponent/password-repeat/password-repeat.component */ 7068);





class ForcedPasswordChangeComponent {
    constructor(userService, auth) {
        this.userService = userService;
        this.auth = auth;
    }
    ngOnInit() {
    }
    validatePassword() {
        return this.password !== undefined;
    }
    changePassword() {
        if (this.password !== undefined) {
            this.userService.changePassword(this.auth.getUser().username, this.password);
        }
    }
}
ForcedPasswordChangeComponent.ɵfac = function ForcedPasswordChangeComponent_Factory(t) { return new (t || ForcedPasswordChangeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_authentication_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService)); };
ForcedPasswordChangeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ForcedPasswordChangeComponent, selectors: [["app-forced-password-change"]], decls: 10, vars: 2, consts: [[1, "row"], [1, "col-md-5", "mx-auto"], [1, "card", "modal-body-background"], ["translate", "", 1, "card-header", "modal-header-background"], [1, "card-body", "modal-body-background"], [3, "password", "passwordChange"], [1, "my-3", "text-center", "modal-footer-background"], ["type", "button", "translate", "", 1, "btn", "btn-primary", "px-5", 3, "disabled", "click"]], template: function ForcedPasswordChangeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "USER.FORCEDPASSWORDCHANGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4)(6, "app-password-repeat", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("passwordChange", function ForcedPasswordChangeComponent_Template_app_password_repeat_passwordChange_6_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6)(8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ForcedPasswordChangeComponent_Template_button_click_8_listener() { return ctx.changePassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "SAVE");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("password", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.validatePassword());
    } }, dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateDirective, _subcomponent_password_repeat_password_repeat_component__WEBPACK_IMPORTED_MODULE_2__.PasswordRepeatComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JjZWQtcGFzc3dvcmQtY2hhbmdlLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 3460:
/*!*******************************************************!*\
  !*** ./src/app/components/inputs/inputs.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputsComponent": () => (/* binding */ InputsComponent)
/* harmony export */ });
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular2-uuid */ 3105);
/* harmony import */ var _edit_input_edit_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../edit-input/edit-input.component */ 7419);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_dto_services_input_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/dto-services/input.service */ 6441);
/* harmony import */ var _services_dto_services_damper_group_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/dto-services/damper-group.service */ 3705);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _services_dto_services_validity_check_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/dto-services/validity-check.service */ 6576);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 8699);









function InputsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 3)(1, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function InputsComponent_div_0_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.create()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "INPUTS.NEW");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r0.inputService.service.loaded);
} }
function InputsComponent_div_2_ng_template_3_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "DESCRIPTION");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function InputsComponent_div_2_ng_template_3_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td", 16)(2, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const input_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](input_r4.description);
} }
function InputsComponent_div_2_ng_template_3_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function InputsComponent_div_2_ng_template_3_button_20_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12); const input_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r10.remove(input_r4.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "DELETE");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r8.damperGroupService.loaded || !ctx_r8.inputService.service.loaded);
} }
function InputsComponent_div_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "table", 9)(1, "tr")(2, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "IO.DISABLED");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "tr")(8, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "IO.NUMBER");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "tr")(13, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "IO.INVERTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, InputsComponent_div_2_ng_template_3_tr_18_Template, 3, 0, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, InputsComponent_div_2_ng_template_3_tr_19_Template, 4, 1, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, InputsComponent_div_2_ng_template_3_button_20_Template, 2, 1, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function InputsComponent_div_2_ng_template_3_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15); const input_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r13.edit(input_r4.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "EDIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const input_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 7, input_r4.disabled ? "YES" : "NO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](input_r4.number);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](17, 9, input_r4.inverted ? "YES" : "NO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", input_r4.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", input_r4.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r5.validityCheckService.damperGroupUsesId(input_r4.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r5.inputService.service.loaded);
} }
function InputsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 5)(1, "ngb-accordion", 6)(2, "ngb-panel", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, InputsComponent_div_2_ng_template_3_Template, 23, 11, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const input_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("title", input_r4.name);
} }
class InputsComponent {
    constructor(inputService, damperGroupService, modalService, validityCheckService) {
        this.inputService = inputService;
        this.damperGroupService = damperGroupService;
        this.modalService = modalService;
        this.validityCheckService = validityCheckService;
        this.id = angular2_uuid__WEBPACK_IMPORTED_MODULE_0__.UUID.UUID();
    }
    ngOnInit() {
    }
    create() {
        const modalRef = this.modalService.open(_edit_input_edit_input_component__WEBPACK_IMPORTED_MODULE_1__.EditInputComponent);
        modalRef.result.then((result) => {
            this.inputService.add(result);
        }).catch(() => {
            // ignore cross-click
        });
    }
    edit(id) {
        let inputs = this.inputService.service.data.inputs.filter((input) => input.id === id);
        if (inputs && inputs.length == 1) {
            let input = inputs[0];
            const modalRef = this.modalService.open(_edit_input_edit_input_component__WEBPACK_IMPORTED_MODULE_1__.EditInputComponent);
            modalRef.componentInstance.input = input;
            modalRef.result.then((result) => {
                Object.assign(input, result);
                // TODO: If number has changed, also other configurations MUST be changed - fdc e.g.
                this.inputService.service.update();
            }).catch(() => {
                // ignore cross-click
            });
        }
    }
    remove(id) {
        this.inputService.remove(id);
    }
}
InputsComponent.ɵfac = function InputsComponent_Factory(t) { return new (t || InputsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_dto_services_input_service__WEBPACK_IMPORTED_MODULE_2__.InputService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_dto_services_damper_group_service__WEBPACK_IMPORTED_MODULE_3__.DamperGroupService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_dto_services_validity_check_service__WEBPACK_IMPORTED_MODULE_4__.ValidityCheckService)); };
InputsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: InputsComponent, selectors: [["app-inputs"]], decls: 3, vars: 3, consts: [["class", "col-md-3  my-3", 4, "ngIf"], [1, "row", "accordion-level-1", 3, "id"], ["class", "col-md-4 my-2", 4, "ngFor", "ngForOf"], [1, "col-md-3", "my-3"], ["translate", "", 1, "btn", "btn-primary", "w-100", "shadow-none", 3, "disabled", "click"], [1, "col-md-4", "my-2"], ["activeIds", "0"], [3, "title"], ["ngbPanelContent", ""], [1, "table", "table-borderless"], ["translate", "", 1, "fw-bold"], [1, "text-end"], [4, "ngIf"], ["class", "btn btn-outline-danger me-3", "translate", "", 3, "disabled", "click", 4, "ngIf"], ["translate", "", 1, "btn", "btn-outline-primary", 3, "disabled", "click"], ["colspan", "2", "translate", "", 1, "align-top", "fw-bold"], ["colspan", "2", 1, "text-end", "text-justify"], ["translate", "", 1, "btn", "btn-outline-danger", "me-3", 3, "disabled", "click"]], template: function InputsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, InputsComponent_div_0_Template, 3, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, InputsComponent_div_2_Template, 4, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.inputService.availableInputNumbers.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("id", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.inputService.service.data.inputs);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbAccordion, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbPanel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbPanelContent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnB1dHMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 7143:
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_socket_connection_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/socket-connection.service */ 6465);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/authentication/auth.service */ 3271);
/* harmony import */ var _services_authentication_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authentication/token-storage.service */ 6617);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../directives/autofocus.directive */ 3185);










function LoginComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, ctx_r0.errorMessage));
} }
class LoginComponent {
    constructor(socketService, route, fb, authService, tokenStorage, router) {
        this.socketService = socketService;
        this.route = route;
        this.fb = fb;
        this.authService = authService;
        this.tokenStorage = tokenStorage;
        this.router = router;
        this.isLoggedIn = false;
        this.isLoginFailed = false;
        this.errorMessage = '';
        this.role = '';
        this.returnUrl = '';
        this.loginForm = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
        });
    }
    ngOnInit() {
        if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true;
            this.role = this.tokenStorage.getUser().role;
        }
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    login() {
        const val = this.loginForm.value;
        this.authService.login(val.username, val.password).subscribe({
            next: () => {
                this.isLoginFailed = false;
                this.isLoggedIn = true;
                this.role = this.tokenStorage.getUser().role;
                this.errorMessage = '';
                if (this.authService.getUser().forcePasswordChange) {
                    this.router.navigateByUrl('forced-password-change');
                }
                else {
                    this.router.navigateByUrl(this.returnUrl);
                }
            },
            error: (err) => {
                console.log(err);
                this.errorMessage = 'LOGINFAILED';
                this.isLoginFailed = true;
            }
        });
    }
    reloadPage() {
        window.location.reload();
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_socket_connection_service__WEBPACK_IMPORTED_MODULE_0__.SocketConnectionService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_authentication_token_storage_service__WEBPACK_IMPORTED_MODULE_2__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 19, vars: 6, consts: [[1, "row", "accordion-level-1"], [1, "col-md-5", "mx-auto"], [1, "card"], ["translate", "", 1, "card-header", "modal-header-background"], [1, "card-body", "modal-body-background", 3, "formGroup", "ngSubmit"], [1, "form-group", "col", "my-1"], ["for", "username", 1, "form-label", "my-0"], ["id", "username", "formControlName", "username", "type", "text", "placeholder", "Username", "appAutofocus", "", 1, "form-control"], ["for", "password", "translate", "", 1, "form-label", "my-0"], ["id", "password", "formControlName", "password", "type", "password", 1, "form-control", 3, "placeholder"], ["class", "text-center my-2 text-danger", 4, "ngIf"], [1, "my-3", "text-center", "modal-footer-background"], ["type", "submit", "translate", "", 1, "btn", "btn-primary", "px-5", 3, "disabled"], [1, "text-center", "my-2", "text-danger"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " USER.LOGIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_5_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5)(7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 5)(11, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "USER.PASSWORD");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, LoginComponent_div_15_Template, 3, 3, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 11)(17, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "USER.LOGIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](14, 4, "USER.PASSWORD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoginFailed);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.socketService.connectedToBackend);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateDirective, _directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_3__.AutofocusDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 1915:
/*!***********************************************************************!*\
  !*** ./src/app/components/mail-templates/mail-templates.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MailTemplatesComponent": () => (/* binding */ MailTemplatesComponent)
/* harmony export */ });
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular2-uuid */ 3105);
/* harmony import */ var _edit_mail_template_edit_mail_template_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../edit-mail-template/edit-mail-template.component */ 2232);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_dto_services_mail_template_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/dto-services/mail-template.service */ 8499);
/* harmony import */ var _services_dto_services_validity_check_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/dto-services/validity-check.service */ 6576);
/* harmony import */ var _services_dto_services_damper_group_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/dto-services/damper-group.service */ 3705);
/* harmony import */ var _services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/authentication/auth.service */ 3271);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 8699);










function MailTemplatesComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 3)(1, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MailTemplatesComponent_div_0_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.create()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "MAILTEMPLATES.NEW");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r0.mailTemplateService.loaded);
} }
function MailTemplatesComponent_div_2_ng_template_3_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rec_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](rec_r8);
} }
function MailTemplatesComponent_div_2_ng_template_3_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MailTemplatesComponent_div_2_ng_template_3_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11); const data_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r9.remove(data_r4.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "DELETE");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r7.damperGroupService.loaded || !ctx_r7.mailTemplateService.loaded);
} }
function MailTemplatesComponent_div_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "MAILTEMPLATES.SUBJECT");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "MAILTEMPLATES.BODY");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 12)(7, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "MAILTEMPLATES.RECIPIENTS");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, MailTemplatesComponent_div_2_ng_template_3_div_12_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, MailTemplatesComponent_div_2_ng_template_3_button_13_Template, 2, 1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MailTemplatesComponent_div_2_ng_template_3_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14); const data_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r12.edit(data_r4.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "EDIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](data_r4.subject);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](data_r4.body);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", data_r4.recipients);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r5.auth.isAdmin() && !ctx_r5.validityCheckService.damperGroupUsesId(data_r4.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r5.mailTemplateService.loaded);
} }
function MailTemplatesComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 5)(1, "ngb-accordion", 6)(2, "ngb-panel", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, MailTemplatesComponent_div_2_ng_template_3_Template, 16, 5, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const data_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("title", data_r4.name);
} }
class MailTemplatesComponent {
    constructor(mailTemplateService, validityCheckService, damperGroupService, auth, modalService) {
        this.mailTemplateService = mailTemplateService;
        this.validityCheckService = validityCheckService;
        this.damperGroupService = damperGroupService;
        this.auth = auth;
        this.modalService = modalService;
        this.id = angular2_uuid__WEBPACK_IMPORTED_MODULE_0__.UUID.UUID();
    }
    ngOnInit() {
    }
    create() {
        const modalRef = this.modalService.open(_edit_mail_template_edit_mail_template_component__WEBPACK_IMPORTED_MODULE_1__.EditMailTemplateComponent);
        modalRef.result.then((result) => {
            this.mailTemplateService.add(result);
        }).catch(() => {
            // ignore cross-click
        });
    }
    edit(id) {
        let mailTemplates = this.mailTemplateService.data.filter((templ) => templ.id === id);
        if (mailTemplates && mailTemplates.length == 1) {
            let templ = mailTemplates[0];
            const modalRef = this.modalService.open(_edit_mail_template_edit_mail_template_component__WEBPACK_IMPORTED_MODULE_1__.EditMailTemplateComponent);
            modalRef.componentInstance.mailTemplate = templ;
            modalRef.result.then((result) => {
                Object.assign(templ, result);
                this.mailTemplateService.update();
            }).catch(() => {
                // ignore cross-click
            });
        }
    }
    remove(id) {
        this.mailTemplateService.remove(id);
    }
}
MailTemplatesComponent.ɵfac = function MailTemplatesComponent_Factory(t) { return new (t || MailTemplatesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_dto_services_mail_template_service__WEBPACK_IMPORTED_MODULE_2__.MailTemplateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_dto_services_validity_check_service__WEBPACK_IMPORTED_MODULE_3__.ValidityCheckService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_dto_services_damper_group_service__WEBPACK_IMPORTED_MODULE_4__.DamperGroupService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModal)); };
MailTemplatesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: MailTemplatesComponent, selectors: [["app-mail-templates"]], decls: 3, vars: 3, consts: [["class", "col-md-3  my-3", 4, "ngIf"], [1, "row", "accordion-level-1", 3, "id"], ["class", "col-lg-6 my-2", 4, "ngFor", "ngForOf"], [1, "col-md-3", "my-3"], ["translate", "", 1, "btn", "btn-primary", "w-100", "shadow-none", 3, "disabled", "click"], [1, "col-lg-6", "my-2"], ["activeIds", "0"], [3, "title"], ["ngbPanelContent", ""], ["translate", "", 1, "fw-bold"], [1, ""], ["translate", "", 1, "fw-bold", "mt-1"], [1, "text-justify"], [1, "recipients"], [4, "ngFor", "ngForOf"], ["class", "btn btn-outline-danger me-3", "translate", "", 3, "disabled", "click", 4, "ngIf"], ["translate", "", 1, "btn", "btn-outline-primary", 3, "disabled", "click"], ["translate", "", 1, "btn", "btn-outline-danger", "me-3", 3, "disabled", "click"]], template: function MailTemplatesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, MailTemplatesComponent_div_0_Template, 3, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, MailTemplatesComponent_div_2_Template, 4, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.auth.isAdmin());
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("id", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.mailTemplateService.data);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbAccordion, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbPanel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbPanelContent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateDirective], styles: [".recipients[_ngcontent-%COMP%]:last-of-type {\r\n  margin-bottom: 1rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haWwtdGVtcGxhdGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoibWFpbC10ZW1wbGF0ZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWNpcGllbnRzOmxhc3Qtb2YtdHlwZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 9437:
/*!***************************************************************************!*\
  !*** ./src/app/components/maintenance-mode/maintenance-mode.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaintenanceModeComponent": () => (/* binding */ MaintenanceModeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_fdc_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/fdc.service */ 1473);
/* harmony import */ var _services_socket_connection_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/socket-connection.service */ 6465);
/* harmony import */ var _services_dto_services_maintenance_mode_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/dto-services/maintenance-mode.service */ 8595);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_toast_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/toast-service.service */ 1618);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 8699);









function MaintenanceModeComponent_ng_template_2_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.restTimeFormatted());
} }
function MaintenanceModeComponent_ng_template_2_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, "MAINTENANCEMODE.TILL"), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](3, 4, ctx_r3.maintenanceTill, "medium"), "");
} }
const _c0 = function (a0, a1) { return { "maintenance-mode-off": a0, "maintenance-mode-on": a1 }; };
function MaintenanceModeComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 4)(1, "div", 5)(2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "MAINTENANCEMODE.TITLE");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, MaintenanceModeComponent_ng_template_2_div_4_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, MaintenanceModeComponent_ng_template_2_div_5_Template, 4, 7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](3, _c0, !ctx_r0.isMaintenanceActive(), ctx_r0.isMaintenanceActive()));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.isMaintenanceActive());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.isMaintenanceActive());
} }
function MaintenanceModeComponent_ng_template_3_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MaintenanceModeComponent_ng_template_3_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.endMaintenanceMode()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "MAINTENANCEMODE.END");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r4.socketService.connectedToBackend);
} }
function MaintenanceModeComponent_ng_template_3_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MaintenanceModeComponent_ng_template_3_button_17_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.repairDevices()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "MAINTENANCEMODE.REPAIR");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r5.socketService.connectedToBackend);
} }
function MaintenanceModeComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function MaintenanceModeComponent_ng_template_3_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r10.setMaintenanceTime()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 12)(2, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "select", 14)(6, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "MAINTENANCEMODE.TIME.THIRTYMINUTES");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "MAINTENANCEMODE.TIME.ONEHOUR");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "MAINTENANCEMODE.TIME.THREEHOURS");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "MAINTENANCEMODE.TIME.FIVEHOURS");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "MAINTENANCEMODE.TIME.EIGHTHOURS");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, MaintenanceModeComponent_ng_template_3_button_16_Template, 2, 1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, MaintenanceModeComponent_ng_template_3_button_17_Template, 2, 1, "button", 21);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r1.socketService.connectedToBackend);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 5, ctx_r1.isMaintenanceActive() ? "MAINTENANCEMODE.UPDATE" : "MAINTENANCEMODE.START"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.isMaintenanceActive());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.isMaintenanceActive());
} }
class MaintenanceModeComponent {
    constructor(fdcService, socketService, modeService, fb, toast) {
        this.fdcService = fdcService;
        this.socketService = socketService;
        this.modeService = modeService;
        this.fb = fb;
        this.toast = toast;
        this.maintenanceRestTime = 0;
        this.form = {};
        this.updateValues();
        this.form = this.fb.group({
            maintenanceTimeSpan: ['1800']
        });
    }
    ngOnInit() {
    }
    updateValues() {
        this.setMaintenanceValues();
        setTimeout(() => this.updateValues(), 1000);
    }
    setMaintenanceValues() {
        if (this.isMaintenanceActive()) {
            let now = Math.trunc(new Date().getTime() / 1000 + this.fdcService.fdcTimeDiff / 1000);
            this.maintenanceRestTime = this.modeService.data.maintenanceEnd - now;
            let millis = (this.modeService.data.maintenanceEnd * 1000) - this.fdcService.fdcTimeDiff;
            this.maintenanceTill = new Date(millis);
        }
    }
    setMaintenanceTime() {
        this.modeService.data.maintenanceEnd = Math.trunc((new Date().getTime() / 1000) + this.maintenanceTimeSpan + (this.fdcService.fdcTimeDiff / 1000));
        this.saveMaintenanceModeAndNotifyApplication();
    }
    endMaintenanceMode() {
        this.modeService.data.maintenanceEnd = 0;
        this.saveMaintenanceModeAndNotifyApplication();
    }
    isMaintenanceActive() {
        return this.modeService.isMaintenanceActive();
    }
    saveMaintenanceModeAndNotifyApplication() {
        let obs = this.modeService.setMaintenance(this.modeService.data.maintenanceEnd);
        if (obs) {
            obs.subscribe({
                next: () => {
                    this.updateValues();
                    this.socketService.emitMaintenanceMode(this.modeService.data.maintenanceEnd);
                    if (this.isMaintenanceActive()) {
                        this.toast.show("Maintenance started", { classname: 'bg-success text-white toast-font-size' });
                    }
                    else {
                        this.toast.show("Maintenance ended", { classname: 'bg-success text-white toast-font-size' });
                    }
                },
                error: () => this.toast.show("ERROR! Could not set maintenance mode", { classname: 'bg-danger text-white toast-font-size' })
            });
        }
    }
    get maintenanceTimeSpan() {
        return parseInt(this.form.controls['maintenanceTimeSpan'].value);
    }
    restTimeFormatted() {
        return `${(Math.trunc(this.maintenanceRestTime / 3600)).toString().padStart(2, '0')}:${(Math.trunc((this.maintenanceRestTime % 3600) / 60)).toString().padStart(2, '0')}:${((this.maintenanceRestTime % 3600) % 60).toString().padStart(2, '0')}`;
    }
    repairDevices() {
        this.socketService.repairDevices();
    }
}
MaintenanceModeComponent.ɵfac = function MaintenanceModeComponent_Factory(t) { return new (t || MaintenanceModeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_fdc_service__WEBPACK_IMPORTED_MODULE_0__.FdcService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_socket_connection_service__WEBPACK_IMPORTED_MODULE_1__.SocketConnectionService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_dto_services_maintenance_mode_service__WEBPACK_IMPORTED_MODULE_2__.MaintenanceModeService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_toast_service_service__WEBPACK_IMPORTED_MODULE_3__.ToastService)); };
MaintenanceModeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MaintenanceModeComponent, selectors: [["app-maintenance-mode"]], decls: 4, vars: 1, consts: [["activeIds", ""], ["id", "maintenance-mode", 3, "disabled"], ["ngbPanelHeader", ""], ["ngbPanelContent", ""], ["ngbPanelToggle", "", 1, "accordion-button", 3, "ngClass"], [1, "d-flex", "flex-wrap"], ["translate", "", 1, "me-3"], ["class", "me-3 fw-bold", 4, "ngIf"], ["class", "", 4, "ngIf"], [1, "me-3", "fw-bold"], [1, ""], [1, "mb-2", 3, "formGroup", "ngSubmit"], [1, "d-flex", "flex-nowrap"], ["type", "submit", 1, "btn", "btn-outline-primary", "me-2", "col-6", 3, "disabled"], ["formControlName", "maintenanceTimeSpan", 1, "form-select", "col-6", "flex-shrink-1"], ["value", "1800", "translate", ""], ["value", "3600", "translate", ""], ["value", "10800", "translate", ""], ["value", "18000", "translate", ""], ["value", "28800", "translate", ""], ["class", "btn btn-outline-primary col-12", "type", "button", "translate", "", 3, "disabled", "click", 4, "ngIf"], ["class", "btn btn-outline-warning col-12 mt-3 text-black", "type", "button", "translate", "", 3, "disabled", "click", 4, "ngIf"], ["type", "button", "translate", "", 1, "btn", "btn-outline-primary", "col-12", 3, "disabled", "click"], ["type", "button", "translate", "", 1, "btn", "btn-outline-warning", "col-12", "mt-3", "text-black", 3, "disabled", "click"]], template: function MaintenanceModeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ngb-accordion", 0)(1, "ngb-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MaintenanceModeComponent_ng_template_2_Template, 6, 6, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, MaintenanceModeComponent_ng_template_3_Template, 18, 7, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.socketService.connectedToBackend);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbAccordion, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbPanel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbPanelContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbPanelHeader, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbPanelToggle, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe], styles: [".maintenance-mode-off[_ngcontent-%COMP%] {\r\n  background-color: #efefef;\r\n}\r\n.maintenance-mode-on[_ngcontent-%COMP%] {\r\n  background-color: #ffe64c !important;\r\n}\r\n.form-select[_ngcontent-%COMP%] {\r\n  flex: 0 0 auto;\r\n  width: 50% !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW50ZW5hbmNlLW1vZGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6Im1haW50ZW5hbmNlLW1vZGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWludGVuYW5jZS1tb2RlLW9mZiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcclxufVxyXG4ubWFpbnRlbmFuY2UtbW9kZS1vbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZTY0YyAhaW1wb3J0YW50O1xyXG59XHJcbi5mb3JtLXNlbGVjdCB7XHJcbiAgZmxleDogMCAwIGF1dG87XHJcbiAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 7525:
/*!***********************************************************!*\
  !*** ./src/app/components/menu-bar/menu-bar.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuBarComponent": () => (/* binding */ MenuBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/authentication/auth.service */ 3271);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_system_health_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/system-health.service */ 4185);
/* harmony import */ var _services_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cookie.service */ 1383);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_sync_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/sync.service */ 3395);
/* harmony import */ var _services_socket_connection_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/socket-connection.service */ 6465);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _status_symbols_status_symbols_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../status-symbols/status-symbols.component */ 2842);












function MenuBarComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MenuBarComponent_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r5.requestConfigReload()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "MENU.RELOADCONFIG"));
} }
function MenuBarComponent_li_16_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 29)(1, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MenuBarComponent_li_16_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r7.closeNavbar()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "MENU.GROUPS");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} }
function MenuBarComponent_li_17_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 31)(1, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MenuBarComponent_li_17_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r9.closeNavbar()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "MENU.SYSTEM");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} }
function MenuBarComponent_li_19_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 29)(1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MenuBarComponent_li_19_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r11.closeNavbar()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "MENU.LOGIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} }
const _c0 = function (a0) { return { username: a0 }; };
function MenuBarComponent_li_20_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 31)(1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MenuBarComponent_li_20_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r13.logout()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](4, 1, "MENU.LOGOUT", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](6, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 4, ctx_r4.auth.getUser().username))));
} }
const _c1 = function (a0, a1, a2) { return { "dashboard-icon-ok": a0, "dashboard-icon-warning": a1, "dashboard-icon-timeglass": a2 }; };
class MenuBarComponent {
    constructor(auth, translate, fb, sysHealthService, cookieService, router, syncService, socketIo) {
        this.auth = auth;
        this.translate = translate;
        this.fb = fb;
        this.sysHealthService = sysHealthService;
        this.cookieService = cookieService;
        this.router = router;
        this.syncService = syncService;
        this.socketIo = socketIo;
        this.isNavbarCollapsed = true;
        this.isNavbarDropdownCollapsed = true;
        this.settingsForm = {};
        this.configurationNeedsReload = false;
        this.topicsForReload = [];
        this.configReloadNeededObserver = undefined;
        this.settingsForm = fb.group({
            language: [translate.currentLang],
            theme: [this.cookieService.getValue('theme', 'dark')]
        });
        this.changeTheme(this.cookieService.getValue('theme', 'dark'));
        if (!this.configReloadNeededObserver) {
            this.configReloadNeededObserver = syncService.configNeedsReloadEvent.subscribe({
                next: (subTopics) => {
                    this.configurationNeedsReload = true;
                    subTopics.forEach(st => {
                        if (!this.topicsForReload.includes(st)) {
                            this.topicsForReload.push(st);
                        }
                    });
                }
            });
        }
    }
    ngOnInit() {
    }
    logout() {
        this.closeNavbar();
        this.auth.signOut();
    }
    closeNavbar() {
        if (!this.isNavbarCollapsed) {
            this.isNavbarCollapsed = true;
        }
    }
    changeLang(lang) {
        this.closeNavbar();
        this.translate.use(lang);
        this.cookieService.saveValue('language', lang);
    }
    changeTheme(theme) {
        this.closeNavbar();
        switch (theme) {
            case 'dark':
                if (document.body.parentElement) {
                    document.body.parentElement.classList.remove('light');
                    document.body.parentElement.classList.add('dark');
                    this.cookieService.saveValue('theme', 'dark');
                }
                break;
            case 'light':
                if (document.body.parentElement) {
                    document.body.parentElement.classList.add('light');
                    document.body.parentElement.classList.remove('dark');
                    this.cookieService.saveValue('theme', 'light');
                }
                break;
        }
    }
    requestConfigReload() {
        this.closeNavbar();
        this.socketIo.requestConfigReload(this.topicsForReload);
        this.configurationNeedsReload = false;
        this.topicsForReload = [];
    }
}
MenuBarComponent.ɵfac = function MenuBarComponent_Factory(t) { return new (t || MenuBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_system_health_service__WEBPACK_IMPORTED_MODULE_1__.SystemHealthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_cookie_service__WEBPACK_IMPORTED_MODULE_2__.CookieService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_sync_service__WEBPACK_IMPORTED_MODULE_3__.SyncService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_socket_connection_service__WEBPACK_IMPORTED_MODULE_4__.SocketConnectionService)); };
MenuBarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: MenuBarComponent, selectors: [["app-menu-bar"]], decls: 37, vars: 19, consts: [[1, "navbar", "fixed-top", "navbar-expand-lg", "navbar-dark", "bg-dark", "fixed-top", "navbar-background"], [1, "container"], [1, "navbar-nav", "flex-row", "flex-nowrap"], [1, "nav-item"], ["routerLink", "/dashboard", "routerLinkActive", "active", 1, "nav-link", "d-flex", "flex-nowrap", "dashboard-button", "dashboard-button-left", 3, "ngClass", "click"], [3, "showOk", "showWarning", "showTimeglass"], ["routerLink", "/dashboard", "routerLinkActive", "active", 1, "nav-link", "d-flex", "flex-nowrap", "dashboard-button", "dashboard-button-right", "me-2", 3, "click"], ["translate", "", 1, "ms-2"], ["class", "btn btn-primary reload-config-button me-2", "type", "button", 3, "click", 4, "ngIf"], ["type", "button", "data-target", "#navbarsDefault", "aria-controls", "navbarsDefault", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "hidden-md-up", 3, "click"], [1, "navbar-toggler-icon"], ["id", "navbarsDefault", 1, "collapse", "navbar-collapse", 3, "ngbCollapse"], [1, "navbar-nav", "me-auto", "mt-2", "mt-lg-0", "align-items-start"], ["class", "nav-item nav-item-collapsed", 4, "ngIf"], ["class", "nav-item nav-item-collapsed mt-2 mt-lg-0", 4, "ngIf"], [1, "navbar-nav", "ms-md-auto", "align-items-start", "align-items-lg-center"], [1, "nav-item", "nav-item-collapsed", "dropdown", "ms-lg-2", "mt-2", "mt-lg-0"], [3, "formGroup"], ["role", "group", "aria-label", "Radio Buttons with Bootstrap 5", 1, "btn-group"], ["type", "radio", "formControlName", "language", "id", "btnradio1", "autocomplete", "off", 1, "btn-check", "radio-button", 3, "value"], ["for", "btnradio1", 1, "btn", "btn-outline-primary", "radio-button", 2, "padding", "3px 8px", 3, "click"], ["type", "radio", "formControlName", "language", "id", "btnradio2", "autocomplete", "off", 1, "btn-check", "radio-button", 3, "value"], ["for", "btnradio2", 1, "btn", "btn-outline-primary", "radio-button", 2, "padding", "3px 8px", 3, "click"], ["role", "group", "aria-label", "Radio Buttons with Bootstrap 5", 1, "ms-2", "btn-group"], ["type", "radio", "formControlName", "theme", "id", "btnradio3", "autocomplete", "off", 1, "btn-check", "radio-button", 3, "value"], ["for", "btnradio3", 1, "btn", "btn-outline-primary", "radio-button", 2, "padding", "3px 8px", 3, "click"], ["type", "radio", "formControlName", "theme", "id", "btnradio4", "autocomplete", "off", 1, "btn-check", "radio-button", 3, "value"], ["for", "btnradio4", 1, "btn", "btn-outline-primary", "radio-button", 2, "padding", "3px 8px", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "reload-config-button", "me-2", 3, "click"], [1, "nav-item", "nav-item-collapsed"], ["routerLink", "/fda-config", "routerLinkActive", "active", 1, "nav-link", "d-flex", "flex-nowrap", "dashboard-button", "me-2", 3, "click"], [1, "nav-item", "nav-item-collapsed", "mt-2", "mt-lg-0"], ["routerLink", "/configuration", "routerLinkActive", "active", 1, "nav-link", "d-flex", "flex-nowrap", "dashboard-button", "me-2", 3, "click"], ["routerLink", "/login", "routerLinkActive", "active", 1, "nav-link", "d-flex", "flex-nowrap", "dashboard-button-outlined", "me-2", 3, "click"], [1, "ms-2", "text-nowrap"]], template: function MenuBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "header")(1, "nav", 0)(2, "div", 1)(3, "ul", 2)(4, "li", 3)(5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MenuBarComponent_Template_a_click_5_listener() { return ctx.closeNavbar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "app-status-symbols", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "li", 3)(8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MenuBarComponent_Template_a_click_8_listener() { return ctx.closeNavbar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "MENU.DASHBOARD");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, MenuBarComponent_button_11_Template, 3, 3, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MenuBarComponent_Template_button_click_12_listener() { return ctx.isNavbarCollapsed = !ctx.isNavbarCollapsed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 11)(15, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, MenuBarComponent_li_16_Template, 4, 0, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, MenuBarComponent_li_17_Template, 4, 0, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, MenuBarComponent_li_19_Template, 4, 0, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, MenuBarComponent_li_20_Template, 6, 8, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "li", 16)(22, "form", 17)(23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](24, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MenuBarComponent_Template_label_click_25_listener() { return ctx.changeLang("en"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "EN");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](27, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MenuBarComponent_Template_label_click_28_listener() { return ctx.changeLang("de"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "DE");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](31, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MenuBarComponent_Template_label_click_32_listener() { return ctx.changeTheme("dark"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](34, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MenuBarComponent_Template_label_click_35_listener() { return ctx.changeTheme("light"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "light");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction3"](15, _c1, ctx.sysHealthService.systemHealthStatus() === 0, ctx.sysHealthService.systemHealthStatus() === 1, ctx.sysHealthService.systemHealthStatus() === 2));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("showOk", ctx.sysHealthService.systemHealthStatus() === 0)("showWarning", ctx.sysHealthService.systemHealthStatus() === 1)("showTimeglass", ctx.sysHealthService.systemHealthStatus() === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.configurationNeedsReload);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngbCollapse", ctx.isNavbarCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.auth.isAdmin());
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.auth.isService());
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.auth.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.auth.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.settingsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", "en");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", "de");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", "dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", "light");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbCollapse, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbNavbar, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateDirective, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkActive, _status_symbols_status_symbols_component__WEBPACK_IMPORTED_MODULE_5__.StatusSymbolsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.UpperCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe], styles: [".navbar-background[_ngcontent-%COMP%] {\r\n  background-color: var(--menu-background) !important;\r\n}\r\n\r\n.dashboard-button[_ngcontent-%COMP%], .dashboard-button-outlined[_ngcontent-%COMP%]{\r\n  border-radius: 0.25rem;\r\n  padding: 0.27rem 0.5rem 0.25rem 0.1rem !important;\r\n}\r\n\r\n.reload-config-button[_ngcontent-%COMP%] {\r\n  padding: 0.27rem 0.5rem 0.25rem 0.5rem;\r\n}\r\n\r\n.dashboard-button[_ngcontent-%COMP%] {\r\n  background: var(--menu-button-inactive);\r\n  color: black !important;\r\n}\r\n\r\n.dashboard-button.active[_ngcontent-%COMP%] {\r\n  background: var(--menu-button-active);\r\n  color: whitesmoke !important;\r\n}\r\n\r\n.dashboard-button-outlined[_ngcontent-%COMP%] {\r\n  outline: var(--menu-button-inactive) 1px solid;\r\n}\r\n\r\n.dashboard-button-right[_ngcontent-%COMP%] {\r\n  border-bottom-left-radius: unset;\r\n  border-top-left-radius: unset;\r\n}\r\n\r\n.dashboard-button-left[_ngcontent-%COMP%] {\r\n  border-bottom-right-radius: unset;\r\n  border-top-right-radius: unset;\r\n  background-color: whitesmoke !important;\r\n  margin-right: 0;\r\n  max-height: 32.32px;\r\n  padding-right: 2px !important;\r\n}\r\n\r\n.dashboard-icon-ok[_ngcontent-%COMP%] {\r\n  background-color: var(--maintenance-header-ok) !important;\r\n}\r\n\r\n.dashboard-icon-warning[_ngcontent-%COMP%] {\r\n  background-color: var(--maintenance-header-nok) !important;\r\n}\r\n\r\n.dashboard-icon-timeglass[_ngcontent-%COMP%] {\r\n  background-color: var(--maintenance-header-loading) !important;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .nav-item[_ngcontent-%COMP%] {\r\n    flex: 1 1 0;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .nav-item[_ngcontent-%COMP%] {\r\n    width: unset;\r\n  }\r\n}\r\n\r\n@media (max-width: 991px) {\r\n  .nav-item-collapsed[_ngcontent-%COMP%] {\r\n    width: 185px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtREFBbUQ7QUFDckQ7O0FBRUE7O0VBRUUsc0JBQXNCO0VBQ3RCLGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLHVDQUF1QztFQUN2Qyx1QkFBdUI7QUFDekI7O0FBQ0E7RUFDRSxxQ0FBcUM7RUFDckMsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsOENBQThDO0FBQ2hEOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyw4QkFBOEI7RUFDOUIsdUNBQXVDO0VBQ3ZDLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UseURBQXlEO0FBQzNEOztBQUVBO0VBQ0UsMERBQTBEO0FBQzVEOztBQUVBO0VBQ0UsOERBQThEO0FBQ2hFOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLFlBQVk7RUFDZDtBQUNGIiwiZmlsZSI6Im1lbnUtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLWJhY2tncm91bmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lbnUtYmFja2dyb3VuZCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRhc2hib2FyZC1idXR0b24sXHJcbi5kYXNoYm9hcmQtYnV0dG9uLW91dGxpbmVke1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgcGFkZGluZzogMC4yN3JlbSAwLjVyZW0gMC4yNXJlbSAwLjFyZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJlbG9hZC1jb25maWctYnV0dG9uIHtcclxuICBwYWRkaW5nOiAwLjI3cmVtIDAuNXJlbSAwLjI1cmVtIDAuNXJlbTtcclxufVxyXG5cclxuLmRhc2hib2FyZC1idXR0b24ge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLW1lbnUtYnV0dG9uLWluYWN0aXZlKTtcclxuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxufVxyXG4uZGFzaGJvYXJkLWJ1dHRvbi5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLW1lbnUtYnV0dG9uLWFjdGl2ZSk7XHJcbiAgY29sb3I6IHdoaXRlc21va2UgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRhc2hib2FyZC1idXR0b24tb3V0bGluZWQge1xyXG4gIG91dGxpbmU6IHZhcigtLW1lbnUtYnV0dG9uLWluYWN0aXZlKSAxcHggc29saWQ7XHJcbn1cclxuXHJcbi5kYXNoYm9hcmQtYnV0dG9uLXJpZ2h0IHtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiB1bnNldDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiB1bnNldDtcclxufVxyXG5cclxuLmRhc2hib2FyZC1idXR0b24tbGVmdCB7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IHVuc2V0O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiB1bnNldDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gIG1heC1oZWlnaHQ6IDMyLjMycHg7XHJcbiAgcGFkZGluZy1yaWdodDogMnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kYXNoYm9hcmQtaWNvbi1vayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbnRlbmFuY2UtaGVhZGVyLW9rKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGFzaGJvYXJkLWljb24td2FybmluZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbnRlbmFuY2UtaGVhZGVyLW5vaykgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRhc2hib2FyZC1pY29uLXRpbWVnbGFzcyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbnRlbmFuY2UtaGVhZGVyLWxvYWRpbmcpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5uYXYtaXRlbSB7XHJcbiAgICBmbGV4OiAxIDEgMDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gIC5uYXYtaXRlbSB7XHJcbiAgICB3aWR0aDogdW5zZXQ7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gIC5uYXYtaXRlbS1jb2xsYXBzZWQge1xyXG4gICAgd2lkdGg6IDE4NXB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 3666:
/*!***************************************************************!*\
  !*** ./src/app/components/messagebox/messagebox.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageboxComponent": () => (/* binding */ MessageboxComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);



const _c0 = function (a0, a1) { return { "warning-header": a0, "error-header": a1 }; };
const _c1 = function (a0, a1) { return { "warning-body": a0, "error-body": a1 }; };
const _c2 = function (a0, a1) { return { "warning-footer": a0, "error-footer": a1 }; };
class MessageboxComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
        this.title = '';
        this.text = '';
        this.isWarning = false;
        this.isError = false;
    }
    ngOnInit() {
    }
    close() {
        this.activeModal.close();
    }
}
MessageboxComponent.ɵfac = function MessageboxComponent_Factory(t) { return new (t || MessageboxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbActiveModal)); };
MessageboxComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MessageboxComponent, selectors: [["app-messagebox"]], inputs: { title: "title", text: "text", isWarning: "isWarning", isError: "isError" }, decls: 9, vars: 14, consts: [[1, "modal-header", 3, "ngClass"], ["id", "modal-basic-title", 1, "modal-title", 3, "innerHTML"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body", 3, "ngClass"], [3, "innerHTML"], [1, "modal-footer", 3, "ngClass"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"]], template: function MessageboxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessageboxComponent_Template_button_click_3_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5)(7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessageboxComponent_Template_button_click_7_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c0, ctx.isWarning, ctx.isError));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.title, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](8, _c1, ctx.isWarning, ctx.isError));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.text, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](11, _c2, ctx.isWarning, ctx.isError));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass], styles: [".warning-header[_ngcontent-%COMP%] {\r\n  background-color: #fff6c3;\r\n}\r\n.warning-body[_ngcontent-%COMP%], .warning-footer[_ngcontent-%COMP%] {\r\n  background-color: #fffbe4;\r\n}\r\n.error-header[_ngcontent-%COMP%] {\r\n  background-color: #eeb8b8;\r\n}\r\n.error-body[_ngcontent-%COMP%], .error-footer[_ngcontent-%COMP%] {\r\n  background-color: #f5e3e3;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2Vib3guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBOztFQUVFLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7O0VBRUUseUJBQXlCO0FBQzNCIiwiZmlsZSI6Im1lc3NhZ2Vib3guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53YXJuaW5nLWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjZjMztcclxufVxyXG4ud2FybmluZy1ib2R5LFxyXG4ud2FybmluZy1mb290ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZiZTQ7XHJcbn1cclxuXHJcbi5lcnJvci1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWI4Yjg7XHJcbn1cclxuLmVycm9yLWJvZHksXHJcbi5lcnJvci1mb290ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWUzZTM7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 5037:
/*!*********************************************************!*\
  !*** ./src/app/components/outputs/outputs.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OutputsComponent": () => (/* binding */ OutputsComponent)
/* harmony export */ });
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular2-uuid */ 3105);
/* harmony import */ var _edit_output_edit_output_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../edit-output/edit-output.component */ 2582);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_dto_services_output_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/dto-services/output.service */ 5782);
/* harmony import */ var _services_dto_services_validity_check_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/dto-services/validity-check.service */ 6576);
/* harmony import */ var _services_dto_services_damper_group_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/dto-services/damper-group.service */ 3705);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 8699);









function OutputsComponent_div_4_ng_template_3_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "DESCRIPTION");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function OutputsComponent_div_4_ng_template_3_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td", 15)(2, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const output_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](output_r1.description);
} }
function OutputsComponent_div_4_ng_template_3_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function OutputsComponent_div_4_ng_template_3_button_20_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9); const output_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r7.remove(output_r1.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "DELETE");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r5.damperGroupService.loaded || !ctx_r5.outputService.service.loaded);
} }
function OutputsComponent_div_4_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "table", 8)(1, "tr")(2, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "IO.DISABLED");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "tr")(8, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "IO.NUMBER");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "tr")(13, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "IO.INVERT");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, OutputsComponent_div_4_ng_template_3_tr_18_Template, 3, 0, "tr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, OutputsComponent_div_4_ng_template_3_tr_19_Template, 4, 1, "tr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, OutputsComponent_div_4_ng_template_3_button_20_Template, 2, 1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function OutputsComponent_div_4_ng_template_3_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12); const output_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r10.edit(output_r1.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "EDIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const output_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 7, output_r1.disabled ? "YES" : "NO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](output_r1.number);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](17, 9, output_r1.inverted ? "YES" : "NO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", output_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", output_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r2.validityCheckService.damperGroupUsesId(output_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r2.outputService.service.loaded);
} }
function OutputsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 4)(1, "ngb-accordion", 5)(2, "ngb-panel", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, OutputsComponent_div_4_ng_template_3_Template, 23, 11, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const output_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("title", output_r1.name);
} }
class OutputsComponent {
    constructor(outputService, validityCheckService, damperGroupService, modalService) {
        this.outputService = outputService;
        this.validityCheckService = validityCheckService;
        this.damperGroupService = damperGroupService;
        this.modalService = modalService;
        this.id = angular2_uuid__WEBPACK_IMPORTED_MODULE_0__.UUID.UUID();
    }
    ngOnInit() {
    }
    create() {
        const modalRef = this.modalService.open(_edit_output_edit_output_component__WEBPACK_IMPORTED_MODULE_1__.EditOutputComponent);
        modalRef.result.then((result) => {
            this.outputService.add(result);
        }).catch(() => {
            // ignore cross-click
        });
    }
    edit(id) {
        let outputs = this.outputService.service.data.outputs.filter((output) => output.id === id);
        if (outputs && outputs.length == 1) {
            let output = outputs[0];
            const modalRef = this.modalService.open(_edit_output_edit_output_component__WEBPACK_IMPORTED_MODULE_1__.EditOutputComponent);
            modalRef.componentInstance.output = output;
            modalRef.result.then((result) => {
                Object.assign(output, result);
                // TODO: If number has changed, also other configurations MUST be changed - fdc e.g.
                this.outputService.service.update();
            }).catch(() => {
                // ignore cross-click
            });
        }
    }
    remove(id) {
        this.outputService.remove(id);
    }
}
OutputsComponent.ɵfac = function OutputsComponent_Factory(t) { return new (t || OutputsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_dto_services_output_service__WEBPACK_IMPORTED_MODULE_2__.OutputService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_dto_services_validity_check_service__WEBPACK_IMPORTED_MODULE_3__.ValidityCheckService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_dto_services_damper_group_service__WEBPACK_IMPORTED_MODULE_4__.DamperGroupService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModal)); };
OutputsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: OutputsComponent, selectors: [["app-outputs"]], decls: 5, vars: 2, consts: [[1, "col-md-3", "my-3"], ["translate", "", 1, "btn", "btn-primary", "w-100", "shadow-none", 3, "click"], [1, "row", "accordion-level-1", 3, "id"], ["class", "col-md-4 my-2", 4, "ngFor", "ngForOf"], [1, "col-md-4", "my-2"], ["activeIds", "0"], [3, "title"], ["ngbPanelContent", ""], [1, "table", "table-borderless"], ["translate", "", 1, "fw-bold"], [1, "text-end"], [4, "ngIf"], ["class", "btn btn-outline-danger me-3", "translate", "", 3, "disabled", "click", 4, "ngIf"], ["translate", "", 1, "btn", "btn-outline-primary", 3, "disabled", "click"], ["colspan", "2", "translate", "", 1, "align-top", "fw-bold"], ["colspan", "2", 1, "text-end", "text-justify"], ["translate", "", 1, "btn", "btn-outline-danger", "me-3", 3, "disabled", "click"]], template: function OutputsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function OutputsComponent_Template_button_click_1_listener() { return ctx.create(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "OUTPUTS.NEW");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, OutputsComponent_div_4_Template, 4, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("id", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.outputService.service.data.outputs);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbAccordion, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbPanel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbPanelContent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvdXRwdXRzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 8358:
/*!*************************************************************************!*\
  !*** ./src/app/components/password-change/password-change.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordChangeComponent": () => (/* binding */ PasswordChangeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_authentication_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/authentication/user.service */ 3732);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _subcomponent_password_repeat_password_repeat_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../subcomponent/password-repeat/password-repeat.component */ 7068);






class PasswordChangeComponent {
    constructor(activeModal, fb, userService) {
        this.activeModal = activeModal;
        this.fb = fb;
        this.userService = userService;
        this.username = '';
    }
    ngOnInit() { }
    submitForm() {
        if (this.password) {
            this.userService.changePassword(this.username, this.password).subscribe({
                next: () => {
                    this.activeModal.close();
                }
            });
        }
    }
}
PasswordChangeComponent.ɵfac = function PasswordChangeComponent_Factory(t) { return new (t || PasswordChangeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_authentication_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService)); };
PasswordChangeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PasswordChangeComponent, selectors: [["app-password-change"]], inputs: { username: "username" }, decls: 11, vars: 5, consts: [[1, "modal-header", "modal-header-background"], [1, "modal-title", "text-nowrap"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body", "modal-body-background"], [1, "container"], [3, "password", "passwordChange"], [1, "modal-footer", "modal-footer-background"], ["translate", "", 1, "btn", "btn-success", 3, "disabled", "click"]], template: function PasswordChangeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PasswordChangeComponent_Template_button_click_4_listener() { return ctx.activeModal.dismiss("Cross click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3)(6, "div", 4)(7, "app-password-repeat", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("passwordChange", function PasswordChangeComponent_Template_app_password_repeat_passwordChange_7_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6)(9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PasswordChangeComponent_Template_button_click_9_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "SAVE");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 3, "USER.CHANGEPASSWORD.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("password", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.password === undefined);
    } }, dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateDirective, _subcomponent_password_repeat_password_repeat_component__WEBPACK_IMPORTED_MODULE_1__.PasswordRepeatComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXNzd29yZC1jaGFuZ2UuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 2842:
/*!***********************************************************************!*\
  !*** ./src/app/components/status-symbols/status-symbols.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatusSymbolsComponent": () => (/* binding */ StatusSymbolsComponent)
/* harmony export */ });
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular2-uuid */ 3105);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);



const _c0 = function (a0, a1, a2) { return { "ok-arc-pos": a0, "ok-arc-neg": a1, "ok-arc-disabled": a2 }; };
const _c1 = function (a0, a1, a2) { return { "ok-check-pos": a0, "ok-check-neg": a1, "ok-check-disabled": a2 }; };
function StatusSymbolsComponent__svg_svg_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 9)(2, "path", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](2, _c0, ctx_r0.okPositive, !ctx_r0.okPositive, ctx_r0.okDisabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](6, _c1, ctx_r0.okPositive, !ctx_r0.okPositive, ctx_r0.okDisabled));
} }
const _c2 = function (a0, a1, a2, a3) { return { "input-arc-high": a0, "input-arc-low": a1, "input-arc-disabled": a2, "disable-io-animation": a3 }; };
const _c3 = function (a0, a1, a2, a3, a4, a5) { return { "input-arrow-high": a0, "input-arrow-low": a1, "input-arrow-disabled": a2, "input-arrow-danger": a3, "input-arrow-ok": a4, "disable-io-animation": a5 }; };
function StatusSymbolsComponent__svg_svg_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 12)(2, "path", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction4"](2, _c2, ctx_r1.inputHigh, !ctx_r1.inputHigh, ctx_r1.inputDisabled, ctx_r1.disableIOAnimation));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction6"](7, _c3, ctx_r1.inputHigh, !ctx_r1.inputHigh, ctx_r1.inputDisabled, ctx_r1.inputDanger, ctx_r1.inputOk, ctx_r1.disableIOAnimation));
} }
function StatusSymbolsComponent__svg_svg_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 14)(1, "style");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " #line { fill: black; stroke: black; animation-name: wobble_exclem; } #circle { fill: black; stroke: black; animation-name: wobble_exclem; } #triangle { fill: none; stroke: red; animation-name: wobble_triangle; } #triangle, #circle, #line { animation-duration: 2s; animation-timing-function: ease; animation-iteration-count: infinite; animation-direction: normal; animation-play-state: running; } @keyframes wobble_triangle { 0% {stroke: red;} 10% {stroke: black;} 20% {stroke: red;} 30% {stroke: black;} 40% {stroke: red;} 100% {stroke: red;} } @keyframes wobble_exclem { 0% {fill: black; stroke: black;} 20% {fill: red; stroke: red;} 30% {fill: black; stroke: black;} 40% {stroke: red; fill: red;} 50% {fill: black; stroke: black;} 100% {fill: black; stroke: black;} } ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "g", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "path", 16)(5, "path", 17)(6, "ellipse", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
const _c4 = function (a0, a1, a2, a3) { return { "output-arc-high": a0, "output-arc-low": a1, "output-arc-disabled": a2, "disable-io-animation": a3 }; };
const _c5 = function (a0, a1, a2, a3) { return { "output-arrow-high": a0, "output-arrow-low": a1, "output-arrow-disabled": a2, "disable-io-animation": a3 }; };
function StatusSymbolsComponent__svg_svg_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 19)(1, "g", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "path", 21)(3, "path", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction4"](2, _c4, ctx_r3.outputHigh, !ctx_r3.outputHigh, ctx_r3.outputDisabled, ctx_r3.disableIOAnimation));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction4"](7, _c5, ctx_r3.outputHigh, !ctx_r3.outputHigh, ctx_r3.outputDisabled, ctx_r3.disableIOAnimation));
} }
function StatusSymbolsComponent__svg_svg_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 23)(1, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ellipse", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "text", 25)(4, "tspan", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function StatusSymbolsComponent__svg_svg_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ellipse", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "g", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "path", 30)(4, "path", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function StatusSymbolsComponent__svg_svg_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 32)(1, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ellipse", 33)(3, "path", 34)(4, "path", 35)(5, "path", 36)(6, "path", 37)(7, "path", 38)(8, "path", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
class StatusSymbolsComponent {
    constructor() {
        this.uuid = angular2_uuid__WEBPACK_IMPORTED_MODULE_0__.UUID.UUID();
        this.showOk = false;
        this.okDisabled = false;
        this.okPositive = true;
        this.showInput = false;
        this.inputHigh = false;
        this.inputDisabled = false;
        this.inputDanger = false;
        this.inputOk = false;
        this.showOutput = false;
        this.outputHigh = false;
        this.outputDisabled = false;
        this.showWarning = false;
        this.showQuestionmark = false;
        this.showTimeglass = false;
        this.showWatch = false;
        this.disableIOAnimation = false;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        // var myPath = document.getElementById("aaaa") as any;
        // var length = myPath.getTotalLength();
        // console.log(length);
    }
}
StatusSymbolsComponent.ɵfac = function StatusSymbolsComponent_Factory(t) { return new (t || StatusSymbolsComponent)(); };
StatusSymbolsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: StatusSymbolsComponent, selectors: [["app-status-symbols"]], inputs: { showOk: "showOk", okDisabled: "okDisabled", okPositive: "okPositive", showInput: "showInput", inputHigh: "inputHigh", inputDisabled: "inputDisabled", inputDanger: "inputDanger", inputOk: "inputOk", showOutput: "showOutput", outputHigh: "outputHigh", outputDisabled: "outputDisabled", showWarning: "showWarning", showQuestionmark: "showQuestionmark", showTimeglass: "showTimeglass", showWatch: "showWatch", disableIOAnimation: "disableIOAnimation" }, decls: 8, vars: 7, consts: [[1, "symbols-container", "d-flex", 2, "height", "25px"], ["viewBox", "0 0 55 55", 4, "ngIf"], ["viewBox", "0 0 48 48", 4, "ngIf"], ["viewBox", "0 0 52 52", 4, "ngIf"], ["viewBox", "0 0 49.5 49.5", 4, "ngIf"], ["viewBox", "0 0 64 64", 4, "ngIf"], ["viewBox", "0 0 106 106", 4, "ngIf"], ["viewBox", "0 0 124 124", 4, "ngIf"], ["viewBox", "0 0 55 55"], ["d", "M 50,28 A 23,23 1 1 1 32,5", 2, "fill", "none", "stroke-width", "7", "stroke-linecap", "round", 3, "ngClass"], ["d", "m 48,10 L 26,34 19,27", 2, "fill", "none", "stroke-width", "7", "stroke-linecap", "round", "stroke-linejoin", "round", 3, "ngClass"], ["viewBox", "0 0 48 48"], ["d", "M 43,30 A 20,20 0 0 1 22,44 20,20 0 0 1 4,26 20,20 0 0 1 18,5", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "round", 3, "ngClass"], ["d", "m 44,4 -25,25 0,-11 0,11 11,0", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "round", "stroke-linejoin", "round", 3, "ngClass"], ["viewBox", "0 0 52 52"], ["id", "layer1", "transform", "translate(-65.006721,-51.682065)"], ["d", "m 91.331368,55.269697 c -6.120196,0 -24.163497,38.291854 -21.397523,42.773507 1.339548,2.170446 41.820555,1.886856 42.884205,0.04456 C 115.48064,93.47603 97.145515,55.269697 91.331368,55.269697 Z", "id", "triangle", 2, "fill", "none", "stroke", "#000000", "stroke-width", "6", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "4", "stroke-dasharray", "none", "stroke-opacity", "1"], ["d", "m 85.535156,52.710938 v 0.002 c -2.497296,4.27e-4 -4.974721,0.0083 -6.904297,0.207031 -2.023362,0.208365 -3.45302,0.624488 -4.49414,1.308594 -1.041116,0.684105 -1.696444,1.638189 -0.955078,13.396484 0.741365,11.758295 2.889907,34.431673 5.210937,45.771483 2.321027,11.33982 4.821243,11.39944 7.322266,11.45899 2.501024,-0.0596 5.001238,-0.11917 7.322265,-11.45899 C 95.358137,102.05666 97.504727,79.383294 98.246094,67.625 98.98746,55.866706 98.332134,54.912621 97.291016,54.228516 96.249898,53.54441 94.822191,53.128271 92.798828,52.919922 90.869252,52.72123 88.389875,52.713318 85.892578,52.712891 v -0.002 c -0.06039,0 -0.11735,0.002 -0.177734,0.002 -0.06105,-3e-6 -0.118631,-0.002 -0.179688,-0.002 z", "transform", "matrix(0.26458333,0,0,0.26458333,68.650128,53.931933)", "id", "line", 2, "fill", "#000000", "fill-opacity", "1", "stroke", "#000000", "stroke-width", "4", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke-opacity", "1"], ["id", "circle", "cx", "91.435387", "cy", "91.785553", "rx", "2.0209532", "ry", "1.9615135", 2, "fill", "#000000", "fill-opacity", "1", "stroke", "#000000", "stroke-width", "3", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "4", "stroke-dasharray", "none"], ["viewBox", "0 0 49.5 49.5"], ["transform", "translate(-65.650128,-50.931933)"], ["d", "M 110.5292,82.496254 A 20.045216,20.045216 0 0 1 89.519407,96.66552 20.045216,20.045216 0 0 1 71.418291,78.930548 20.045216,20.045216 0 0 1 85.155321,57.635628", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "round", "stroke-miterlimit", "4", "stroke-dasharray", "none", 3, "ngClass"], ["id", "aaaa", "d", "M 85.940585,81.634283 111.26437,56.577765 v 11.96031 -11.96031 l -11.62622,0.06681", 2, "fill", "none", "stroke-width", "6", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "4", "stroke-dasharray", "none", "stroke-opacity", "1", 3, "ngClass"], ["viewBox", "0 0 64 64"], ["id", "path61", "cx", "32", "cy", "32", "rx", "28", "ry", "28", 2, "fill", "#e7f1ff", "stroke", "#000000", "stroke-width", "7", "stroke-dasharray", "none", "stroke-opacity", "1"], [0, "xml", "space", "preserve", "transform", "matrix(4.4532315,0,0,4.2842598,-833.60991,-796.97094)", 2, "font-size", "12px", "font-family", "Verdana", ";fill", "#000000", "stroke", "#000000", "stroke-width", "0.6"], ["x", "191.3", "y", "198"], ["viewBox", "0 0 106 106"], ["id", "path1799", "cx", "52.9221", "cy", "52.994404", "rx", "47.605225", "ry", "47.532925", 2, "fill", "#fff100", "fill-opacity", "1", "stroke", "#000000", "stroke-width", "10", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-dasharray", "none"], ["transform", "translate(-5.4946446,-9.9771175)", 1, "rotate"], ["d", "M 46.3,50.3 C 37.7,45.1 36.4,33.4 36.4,33.4 l -0.1,-9.4 h 33 l 0.2,8.7 c 0,0 -0.9,12.8 -10.4,17.7", 2, "fill", "none", "stroke", "#000000", "stroke-width", "5.495", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "m 58.8,50.5 0.1,5.5 c 8.7,5.2 10.3,17.6 10.3,17.6 v 9.3 H 36.3 v -8.7 c 0,0 0.6,-12.7 10.1,-17.6 v -5.8", 2, "fill", "none", "stroke", "#000000", "stroke-width", "5.495", "stroke-linecap", "round", "stroke-linejoin", "round"], ["viewBox", "0 0 124 124"], ["id", "path850", "cx", "61", "cy", "61", "rx", "56", "ry", "56", 2, "fill", "#ffcc00", "fill-opacity", "1", "stroke", "#000000", "stroke-width", "11"], ["d", "M 61,9.5 V 20", "id", "noon", 2, "fill", "none", "fill-opacity", "1", "stroke", "black", "stroke-width", "10", "stroke-linecap", "round"], ["d", "m 61,102 v 15", "id", "six", 2, "fill", "none", "fill-opacity", "1", "stroke", "black", "stroke-width", "10", "stroke-linecap", "round"], ["d", "m 9.5,61 c 10,0 10,0 10,0", "id", "nine", 2, "fill-opacity", "1", "stroke", "black", "stroke-width", "10", "stroke-linecap", "round"], ["d", "m 102.5,61 c 10,0 10,0 10,0", "id", "three", 2, "fill", "none", "fill-opacity", "1", "stroke", "black", "stroke-width", "10", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-dasharray", "none"], ["d", "m 61,18.474502 c 0,0 0,0 0,43.636474", "id", "minutes", 1, "time-minutes", 2, "fill-opacity", "1", "stroke", "black", "stroke-width", "9", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-dasharray", "none"], ["d", "m 61,40 c 0,0 0,0 0,22", "id", "minutes", 1, "time-hours", 2, "fill-opacity", "1", "stroke", "black", "stroke-width", "9", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-dasharray", "none"]], template: function StatusSymbolsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, StatusSymbolsComponent__svg_svg_1_Template, 3, 10, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, StatusSymbolsComponent__svg_svg_2_Template, 3, 14, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, StatusSymbolsComponent__svg_svg_3_Template, 7, 0, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, StatusSymbolsComponent__svg_svg_4_Template, 4, 12, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, StatusSymbolsComponent__svg_svg_5_Template, 6, 0, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, StatusSymbolsComponent__svg_svg_6_Template, 5, 0, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, StatusSymbolsComponent__svg_svg_7_Template, 9, 0, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showOk);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showWarning);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showOutput);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showQuestionmark);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showTimeglass);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showWatch);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: ["svg[_ngcontent-%COMP%] {\r\n  vertical-align: unset;\r\n  margin: 0 3px;\r\n  width: 25px;\r\n  height: 25px;\r\n}\r\n\r\n.ok-arc-pos[_ngcontent-%COMP%], .ok-arc-neg[_ngcontent-%COMP%], .input-arc-low[_ngcontent-%COMP%], .output-arc-low[_ngcontent-%COMP%], .input-arc-high[_ngcontent-%COMP%], .output-arc-high[_ngcontent-%COMP%] {\r\n  stroke: #3b3b3b;\r\n}\r\n\r\n.ok-check-pos[_ngcontent-%COMP%] {\r\n  stroke: var(--icon-element-green);\r\n}\r\n\r\n.input-arrow-high[_ngcontent-%COMP%], .output-arrow-high[_ngcontent-%COMP%] {\r\n  stroke: dodgerblue;\r\n}\r\n\r\n.ok-check-neg[_ngcontent-%COMP%] {\r\n  stroke: red;\r\n}\r\n\r\n.input-arrow-low[_ngcontent-%COMP%], .output-arrow-low[_ngcontent-%COMP%]{\r\n  stroke: #868686;\r\n}\r\n\r\n.input-arc-high[_ngcontent-%COMP%], .output-arc-high[_ngcontent-%COMP%] {\r\n  stroke: #3b3b3b;\r\n}\r\n\r\n.input-arrow-danger[_ngcontent-%COMP%] {\r\n  stroke: red;\r\n}\r\n\r\n.input-arrow-ok[_ngcontent-%COMP%] {\r\n  stroke: var(--icon-element-green);\r\n}\r\n\r\n.ok-arc-disabled[_ngcontent-%COMP%], .ok-check-disabled[_ngcontent-%COMP%], .input-arc-disabled[_ngcontent-%COMP%], .input-arrow-disabled[_ngcontent-%COMP%], .output-arc-disabled[_ngcontent-%COMP%], .output-arrow-disabled[_ngcontent-%COMP%] {\r\n  stroke: #b6b5b5;\r\n}\r\n\r\n.input-arc-high[_ngcontent-%COMP%], .output-arc-high[_ngcontent-%COMP%] {\r\n  animation-name: gray-wobble;\r\n  animation-duration: 4s;\r\n  animation-timing-function: ease;\r\n  animation-iteration-count: infinite;\r\n  animation-direction: normal;\r\n  animation-play-state: running;\r\n}\r\n\r\n@keyframes dashdraw {to {stroke-dashoffset: 0;}}\r\n\r\n@keyframes blue-wobble {\r\n  0% {stroke: dodgerblue;}\r\n  5% {stroke: #0051a4;}\r\n  10% {stroke: #9dcdfc;}\r\n  20% {stroke: #004283;}\r\n  25% {stroke: #9dcdfc;}\r\n  80% {stroke: dodgerblue;}\r\n  100% {stroke: dodgerblue;}\r\n}\r\n\r\n@keyframes gray-wobble {\r\n  0% {stroke: #3b3b3b}\r\n  5% {stroke: white}\r\n  10% {stroke: #3b3b3b}\r\n  15% {stroke: white}\r\n  30% {stroke: #3b3b3b}\r\n  100% {stroke: #3b3b3b}\r\n}\r\n\r\n.rotate[_ngcontent-%COMP%] {\r\n  transform-origin: 50% 50%;\r\n  animation: rotation 3s infinite ease-in-out;\r\n}\r\n\r\n.time-minutes[_ngcontent-%COMP%] {\r\n  transform-origin: 50% 50%;\r\n  animation: rotation 3s infinite linear;\r\n}\r\n\r\n.time-hours[_ngcontent-%COMP%] {\r\n  transform-origin: 50% 50%;\r\n  animation: rotation 18s infinite linear;\r\n}\r\n\r\n@keyframes rotation {\r\n  from {\r\n    transform: rotate(0deg);\r\n  }\r\n  to {\r\n    transform: rotate(359deg);\r\n  }\r\n}\r\n\r\n.disable-io-animation[_ngcontent-%COMP%] {\r\n  animation: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXR1cy1zeW1ib2xzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7Ozs7OztFQU1FLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBQ0E7O0VBRUUsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUNBOztFQUVFLGVBQWU7QUFDakI7O0FBQ0E7O0VBRUUsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLFdBQVc7QUFDYjs7QUFDQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFDQTs7Ozs7O0VBTUUsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSwyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLCtCQUErQjtFQUMvQixtQ0FBbUM7RUFDbkMsMkJBQTJCO0VBQzNCLDZCQUE2QjtBQUMvQjs7QUFFQSxxQkFBcUIsSUFBSSxvQkFBb0IsQ0FBQyxDQUFDOztBQUUvQztFQUNFLElBQUksa0JBQWtCLENBQUM7RUFDdkIsSUFBSSxlQUFlLENBQUM7RUFDcEIsS0FBSyxlQUFlLENBQUM7RUFDckIsS0FBSyxlQUFlLENBQUM7RUFDckIsS0FBSyxlQUFlLENBQUM7RUFDckIsS0FBSyxrQkFBa0IsQ0FBQztFQUN4QixNQUFNLGtCQUFrQixDQUFDO0FBQzNCOztBQUVBO0VBQ0UsSUFBSSxlQUFlO0VBQ25CLElBQUksYUFBYTtFQUNqQixLQUFLLGVBQWU7RUFDcEIsS0FBSyxhQUFhO0VBQ2xCLEtBQUssZUFBZTtFQUNwQixNQUFNLGVBQWU7QUFDdkI7O0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InN0YXR1cy1zeW1ib2xzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzdmcge1xyXG4gIHZlcnRpY2FsLWFsaWduOiB1bnNldDtcclxuICBtYXJnaW46IDAgM3B4O1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGhlaWdodDogMjVweDtcclxufVxyXG5cclxuLm9rLWFyYy1wb3MsXHJcbi5vay1hcmMtbmVnLFxyXG4uaW5wdXQtYXJjLWxvdyxcclxuLm91dHB1dC1hcmMtbG93LFxyXG4uaW5wdXQtYXJjLWhpZ2gsXHJcbi5vdXRwdXQtYXJjLWhpZ2gge1xyXG4gIHN0cm9rZTogIzNiM2IzYjtcclxufVxyXG4ub2stY2hlY2stcG9zIHtcclxuICBzdHJva2U6IHZhcigtLWljb24tZWxlbWVudC1ncmVlbik7XHJcbn1cclxuLmlucHV0LWFycm93LWhpZ2gsXHJcbi5vdXRwdXQtYXJyb3ctaGlnaCB7XHJcbiAgc3Ryb2tlOiBkb2RnZXJibHVlO1xyXG59XHJcbi5vay1jaGVjay1uZWcge1xyXG4gIHN0cm9rZTogcmVkO1xyXG59XHJcbi5pbnB1dC1hcnJvdy1sb3csXHJcbi5vdXRwdXQtYXJyb3ctbG93e1xyXG4gIHN0cm9rZTogIzg2ODY4NjtcclxufVxyXG4uaW5wdXQtYXJjLWhpZ2gsXHJcbi5vdXRwdXQtYXJjLWhpZ2gge1xyXG4gIHN0cm9rZTogIzNiM2IzYjtcclxufVxyXG4uaW5wdXQtYXJyb3ctZGFuZ2VyIHtcclxuICBzdHJva2U6IHJlZDtcclxufVxyXG4uaW5wdXQtYXJyb3ctb2sge1xyXG4gIHN0cm9rZTogdmFyKC0taWNvbi1lbGVtZW50LWdyZWVuKTtcclxufVxyXG4ub2stYXJjLWRpc2FibGVkLFxyXG4ub2stY2hlY2stZGlzYWJsZWQsXHJcbi5pbnB1dC1hcmMtZGlzYWJsZWQsXHJcbi5pbnB1dC1hcnJvdy1kaXNhYmxlZCxcclxuLm91dHB1dC1hcmMtZGlzYWJsZWQsXHJcbi5vdXRwdXQtYXJyb3ctZGlzYWJsZWQge1xyXG4gIHN0cm9rZTogI2I2YjViNTtcclxufVxyXG5cclxuLmlucHV0LWFyYy1oaWdoLFxyXG4ub3V0cHV0LWFyYy1oaWdoIHtcclxuICBhbmltYXRpb24tbmFtZTogZ3JheS13b2JibGU7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA0cztcclxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xyXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IG5vcm1hbDtcclxuICBhbmltYXRpb24tcGxheS1zdGF0ZTogcnVubmluZztcclxufVxyXG5cclxuQGtleWZyYW1lcyBkYXNoZHJhdyB7dG8ge3N0cm9rZS1kYXNob2Zmc2V0OiAwO319XHJcblxyXG5Aa2V5ZnJhbWVzIGJsdWUtd29iYmxlIHtcclxuICAwJSB7c3Ryb2tlOiBkb2RnZXJibHVlO31cclxuICA1JSB7c3Ryb2tlOiAjMDA1MWE0O31cclxuICAxMCUge3N0cm9rZTogIzlkY2RmYzt9XHJcbiAgMjAlIHtzdHJva2U6ICMwMDQyODM7fVxyXG4gIDI1JSB7c3Ryb2tlOiAjOWRjZGZjO31cclxuICA4MCUge3N0cm9rZTogZG9kZ2VyYmx1ZTt9XHJcbiAgMTAwJSB7c3Ryb2tlOiBkb2RnZXJibHVlO31cclxufVxyXG5cclxuQGtleWZyYW1lcyBncmF5LXdvYmJsZSB7XHJcbiAgMCUge3N0cm9rZTogIzNiM2IzYn1cclxuICA1JSB7c3Ryb2tlOiB3aGl0ZX1cclxuICAxMCUge3N0cm9rZTogIzNiM2IzYn1cclxuICAxNSUge3N0cm9rZTogd2hpdGV9XHJcbiAgMzAlIHtzdHJva2U6ICMzYjNiM2J9XHJcbiAgMTAwJSB7c3Ryb2tlOiAjM2IzYjNifVxyXG59XHJcbi5yb3RhdGUge1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XHJcbiAgYW5pbWF0aW9uOiByb3RhdGlvbiAzcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLnRpbWUtbWludXRlcyB7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcclxuICBhbmltYXRpb246IHJvdGF0aW9uIDNzIGluZmluaXRlIGxpbmVhcjtcclxufVxyXG5cclxuLnRpbWUtaG91cnMge1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XHJcbiAgYW5pbWF0aW9uOiByb3RhdGlvbiAxOHMgaW5maW5pdGUgbGluZWFyO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHJvdGF0aW9uIHtcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuLmRpc2FibGUtaW8tYW5pbWF0aW9uIHtcclxuICBhbmltYXRpb246IG5vbmU7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 7068:
/*!**************************************************************************************!*\
  !*** ./src/app/components/subcomponent/password-repeat/password-repeat.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordRepeatComponent": () => (/* binding */ PasswordRepeatComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _status_symbols_status_symbols_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../status-symbols/status-symbols.component */ 2842);





class PasswordRepeatComponent {
    constructor(fb) {
        this.fb = fb;
        this.passwordChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.passwordRepeatForm = {};
        this.containsUppercaseLetterRegex = /[A-Z]/;
        this.containsLowercaseLetterRegex = /[a-z]/;
        this.containsNumberRegex = /[0-9]/;
        this.containsSpecialCharRegex = /[^A-Za-z0-9\s]/;
        this.checkPwRepeatOk = false;
        this.checkUppercase = false;
        this.checkLowercase = false;
        this.checkNumber = false;
        this.checkSpecial = false;
        this.checkLength = false;
        this.debouncing = false;
    }
    ngOnInit() {
        this.passwordRepeatForm = this.fb.group({
            newpassword: [],
            repeatpassword: []
        });
        this.passwordRepeatForm.controls['newpassword'].valueChanges.subscribe({
            next: () => {
                this.emitNewPassword();
            }
        });
        this.passwordRepeatForm.controls['repeatpassword'].valueChanges.subscribe({
            next: () => {
                this.emitNewPassword();
            }
        });
    }
    emitNewPassword() {
        this.passwordChange.emit(this.validatePassword() ? this.newPassword : undefined);
    }
    get newPassword() {
        return this.passwordRepeatForm.controls['newpassword'].value;
    }
    get repeatPassword() {
        return this.passwordRepeatForm.controls['repeatpassword'].value;
    }
    validatePassword() {
        const newPw = this.newPassword;
        const repPw = this.repeatPassword;
        this.checkLength = this.validateMinLength(newPw);
        this.checkLowercase = this.validateContainsLowercaseLetter(newPw);
        this.checkUppercase = this.validateContainsUppercaseLetter(newPw);
        this.checkSpecial = this.validateContainsSpecialChar(newPw);
        this.checkNumber = this.validateContainsNumber(newPw);
        this.checkPwRepeatOk = this.validatePasswordRepeatedOk(newPw, repPw);
        return this.checkLength &&
            this.checkLowercase &&
            this.checkUppercase &&
            this.checkSpecial &&
            this.checkNumber &&
            this.checkPwRepeatOk;
    }
    validateMinLength(pw) {
        return pw !== null && pw !== undefined && pw.length >= 8;
    }
    validatePasswordRepeatedOk(pw, repPw) {
        return this.validateMinLength(pw)
            && pw === repPw;
    }
    validateContainsUppercaseLetter(pw) {
        return this.validateMinLength(pw)
            && this.containsUppercaseLetterRegex.test(pw);
    }
    validateContainsLowercaseLetter(pw) {
        return this.validateMinLength(pw)
            && this.containsLowercaseLetterRegex.test(pw);
    }
    validateContainsNumber(pw) {
        return this.validateMinLength(pw)
            && this.containsNumberRegex.test(pw);
    }
    validateContainsSpecialChar(pw) {
        return this.validateMinLength(pw)
            && this.containsSpecialCharRegex.test(pw);
    }
}
PasswordRepeatComponent.ɵfac = function PasswordRepeatComponent_Factory(t) { return new (t || PasswordRepeatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormBuilder)); };
PasswordRepeatComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PasswordRepeatComponent, selectors: [["app-password-repeat"]], inputs: { password: "password" }, outputs: { passwordChange: "passwordChange" }, decls: 36, vars: 13, consts: [[3, "formGroup"], [1, "form-group"], ["for", "newpassword", "translate", ""], [1, "input-group"], ["id", "newpassword", "formControlName", "newpassword", "type", "password", 1, "form-control", "shadow-none"], ["for", "repeatpassword", "translate", ""], ["id", "repeatpassword", "formControlName", "repeatpassword", "type", "password", 1, "form-control", "shadow-none"], [1, "d-flex", "flex-wrap", "justify-content-between", "align-content-between"], [1, "d-flex", "flex-nowrap", "m-1"], [3, "showOk", "showWarning"], ["translate", "", 1, "ms-1"]], template: function PasswordRepeatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "USER.CHANGEPASSWORD.NEWPASSWORD");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 1)(7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "USER.CHANGEPASSWORD.REPEATPASSWORD");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7)(12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "app-status-symbols", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "USER.CHANGEPASSWORD.REPEATPASSWORD");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "app-status-symbols", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "USER.CHANGEPASSWORD.UPPERCASE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "app-status-symbols", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "USER.CHANGEPASSWORD.LOWERCASE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "app-status-symbols", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "USER.CHANGEPASSWORD.NUMBER");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "app-status-symbols", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "USER.CHANGEPASSWORD.SPECIAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "app-status-symbols", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "USER.CHANGEPASSWORD.MINLENGTH");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.passwordRepeatForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showOk", ctx.checkPwRepeatOk)("showWarning", !ctx.checkPwRepeatOk);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showOk", ctx.checkUppercase)("showWarning", !ctx.checkUppercase);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showOk", ctx.checkLowercase)("showWarning", !ctx.checkLowercase);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showOk", ctx.checkNumber)("showWarning", !ctx.checkNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showOk", ctx.checkSpecial)("showWarning", !ctx.checkSpecial);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showOk", ctx.checkLength)("showWarning", !ctx.checkLength);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateDirective, _status_symbols_status_symbols_component__WEBPACK_IMPORTED_MODULE_0__.StatusSymbolsComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXNzd29yZC1yZXBlYXQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 2772:
/*!*********************************************************************!*\
  !*** ./src/app/components/system-health/system-health.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SystemHealthComponent": () => (/* binding */ SystemHealthComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_socket_connection_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/socket-connection.service */ 6465);
/* harmony import */ var _services_fdc_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/fdc.service */ 1473);
/* harmony import */ var _services_system_health_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/system-health.service */ 4185);
/* harmony import */ var _services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/authentication/auth.service */ 3271);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _status_symbols_status_symbols_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../status-symbols/status-symbols.component */ 2842);









function SystemHealthComponent_ng_template_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "SYSHEALTH.OK");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function SystemHealthComponent_ng_template_2_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "SYSHEALTH.WARNING");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function SystemHealthComponent_ng_template_2_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "SYSHEALTH.LOADING");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1, a2) { return { "syshealth-ok": a0, "syshealth-nok": a1, "syshealth-undefined": a2 }; };
function SystemHealthComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "app-status-symbols", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, SystemHealthComponent_ng_template_2_div_3_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, SystemHealthComponent_ng_template_2_div_4_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, SystemHealthComponent_ng_template_2_div_5_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction3"](7, _c0, ctx_r0.systemHealthService.systemHealthStatus() === 0, ctx_r0.systemHealthService.systemHealthStatus() === 1, ctx_r0.systemHealthService.systemHealthStatus() === 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("showOk", ctx_r0.systemHealthService.systemHealthStatus() === 0)("showWarning", ctx_r0.systemHealthService.systemHealthStatus() === 1)("showTimeglass", ctx_r0.systemHealthService.systemHealthStatus() === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.systemHealthService.systemHealthStatus() === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.systemHealthService.systemHealthStatus() === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.systemHealthService.systemHealthStatus() === 2);
} }
const _c1 = function (a0) { return { "plural": a0 }; };
function SystemHealthComponent_ng_template_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-status-symbols", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("showWarning", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](4, 2, "SYSHEALTH.GROUPS.ALARM", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](7, _c1, ctx_r5.systemHealthService.groupsInAlarmState() > 1 ? _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 5, "SYSHEALTH.GROUPS.PLURAL") : "")));
} }
function SystemHealthComponent_ng_template_3_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-status-symbols", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("showWarning", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](4, 2, "SYSHEALTH.GROUPS.MISSCONFIGURATION", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](7, _c1, ctx_r6.systemHealthService.groupsConfigurationError() > 1 ? _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 5, "SYSHEALTH.GROUPS.PLURAL") : "")));
} }
function SystemHealthComponent_ng_template_3_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-status-symbols", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("showTimeglass", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r7.systemHealthService.groupsInTimeoutState() > 1 ? ctx_r7.systemHealthService.groupsInTimeoutState() : "", "", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](4, 3, "SYSHEALTH.GROUPS.TIMEOUT", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](8, _c1, ctx_r7.systemHealthService.groupsInTimeoutState() > 1 ? _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 6, "SYSHEALTH.GROUPS.PLURAL") : "")), "");
} }
function SystemHealthComponent_ng_template_3_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-status-symbols", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("showQuestionmark", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 2, "SYSHEALTH.BUSMODE.UNKNOWN"));
} }
function SystemHealthComponent_ng_template_3_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-status-symbols", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("showOk", ctx_r9.systemHealthService.status.busMode === "Ring")("showWarning", ctx_r9.systemHealthService.status.busMode === "Line");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 3, "SYSHEALTH.BUSMODE." + ctx_r9.systemHealthService.status.busMode.toUpperCase()));
} }
const _c2 = function (a0) { return { plural: a0 }; };
function SystemHealthComponent_ng_template_3_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-status-symbols", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("showOk", ctx_r10.systemHealthService.status.fdas.configuredNotInStatus.length === 0)("showWarning", ctx_r10.systemHealthService.status.fdas.configuredNotInStatus.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r10.systemHealthService.status.fdas.inStatusConfigured.length, " ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](4, 4, "SYSHEALTH.FDAS.ONLINECONFIGURED", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](7, _c2, ctx_r10.systemHealthService.status.fdas.inStatusConfigured.length === 1 ? "" : "s")), "");
} }
function SystemHealthComponent_ng_template_3_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-status-symbols", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("showWarning", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r11.systemHealthService.status.fdas.configuredNotInStatus.length, " ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](4, 3, "SYSHEALTH.FDAS.OFFLINECONFIGURED", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](6, _c2, ctx_r11.systemHealthService.status.fdas.configuredNotInStatus.length === 1 ? "" : "s")), "");
} }
function SystemHealthComponent_ng_template_3_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-status-symbols", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("showQuestionmark", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r12.systemHealthService.status.fdas.inStatusUnconfigured.length, " ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](4, 3, "SYSHEALTH.FDAS.ONLINEUNCONFIGURED", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](6, _c2, ctx_r12.systemHealthService.status.fdas.inStatusUnconfigured.length === 1 ? "" : "s")), "");
} }
function SystemHealthComponent_ng_template_3_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "SYSHEALTH.CONNECTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function SystemHealthComponent_ng_template_3_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "SYSHEALTH.DISCONNECTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function SystemHealthComponent_ng_template_3_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate3"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 3, "SYSHEALTH.TIMEDIFFOK"), " (", ctx_r15.systemHealthService.getFdcTimeDiffMinutes(), " ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 5, "SYSHEALTH.MINUTES"), ") ");
} }
function SystemHealthComponent_ng_template_3_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate3"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 3, "SYSHEALTH.TIMEDIFFTOOBIG"), " ", ctx_r16.systemHealthService.getFdcTimeDiffMinutes(), " ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 5, "SYSHEALTH.MINUTES"), "");
} }
function SystemHealthComponent_ng_template_3_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "SYSHEALTH.TIMESTATUSUNKNOWN");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function SystemHealthComponent_ng_template_3_div_18_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "SYSHEALTH.GUIBACKENDSERVICERUNNING");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function SystemHealthComponent_ng_template_3_div_18_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "SYSHEALTH.GUIBACKENDSERVICESTOPPED");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function SystemHealthComponent_ng_template_3_div_18_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "SYSHEALTH.GUIBACKENDSERVICESTATUSUNKNOWN");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function SystemHealthComponent_ng_template_3_div_18_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "SYSHEALTH.APPLICATIONSERVICERUNNING");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function SystemHealthComponent_ng_template_3_div_18_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "SYSHEALTH.APPLICATIONSERVICESTOPPED");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function SystemHealthComponent_ng_template_3_div_18_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "SYSHEALTH.APPLICATIONSERVICESTATUSUNKNOWN");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function SystemHealthComponent_ng_template_3_div_18_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "SYSHEALTH.MAILERSERVICERUNNING");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function SystemHealthComponent_ng_template_3_div_18_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "SYSHEALTH.MAILERSERVICESTOPPED");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function SystemHealthComponent_ng_template_3_div_18_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "SYSHEALTH.MAILERSERVICESTATUSUNKNOWN");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function SystemHealthComponent_ng_template_3_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "app-status-symbols", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, SystemHealthComponent_ng_template_3_div_18_div_3_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, SystemHealthComponent_ng_template_3_div_18_div_4_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, SystemHealthComponent_ng_template_3_div_18_div_5_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "app-status-symbols", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, SystemHealthComponent_ng_template_3_div_18_div_8_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, SystemHealthComponent_ng_template_3_div_18_div_9_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, SystemHealthComponent_ng_template_3_div_18_div_10_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "app-status-symbols", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, SystemHealthComponent_ng_template_3_div_18_div_13_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, SystemHealthComponent_ng_template_3_div_18_div_14_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, SystemHealthComponent_ng_template_3_div_18_div_15_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("showOk", ctx_r18.systemHealthService.guibackendServiceStatus === true)("showWarning", ctx_r18.systemHealthService.guibackendServiceStatus === false)("showTimeglass", ctx_r18.systemHealthService.guibackendServiceStatus === undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r18.systemHealthService.guibackendServiceStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r18.systemHealthService.guibackendServiceStatus === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r18.systemHealthService.guibackendServiceStatus === undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("showOk", ctx_r18.systemHealthService.applicationServiceStatus === true && ctx_r18.systemHealthService.guibackendServiceStatus === true)("showWarning", ctx_r18.systemHealthService.applicationServiceStatus === false && ctx_r18.systemHealthService.guibackendServiceStatus === true)("showQuestionmark", ctx_r18.systemHealthService.guibackendServiceStatus === false)("showTimeglass", ctx_r18.systemHealthService.guibackendServiceStatus === undefined || ctx_r18.systemHealthService.guibackendServiceStatus === true && ctx_r18.systemHealthService.applicationServiceStatus === undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r18.systemHealthService.applicationServiceStatus && ctx_r18.systemHealthService.guibackendServiceStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r18.systemHealthService.applicationServiceStatus && ctx_r18.systemHealthService.guibackendServiceStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r18.systemHealthService.guibackendServiceStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("showOk", ctx_r18.systemHealthService.mailerServiceStatus === true && ctx_r18.systemHealthService.guibackendServiceStatus === true)("showWarning", ctx_r18.systemHealthService.mailerServiceStatus === false && ctx_r18.systemHealthService.guibackendServiceStatus === true)("showQuestionmark", ctx_r18.systemHealthService.guibackendServiceStatus === false)("showTimeglass", ctx_r18.systemHealthService.guibackendServiceStatus === undefined || ctx_r18.systemHealthService.guibackendServiceStatus === true && ctx_r18.systemHealthService.mailerServiceStatus === undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r18.systemHealthService.mailerServiceStatus && ctx_r18.systemHealthService.guibackendServiceStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r18.systemHealthService.mailerServiceStatus && ctx_r18.systemHealthService.guibackendServiceStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r18.systemHealthService.guibackendServiceStatus);
} }
function SystemHealthComponent_ng_template_3_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-status-symbols", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "SYSHEALTH.ALLSERVICESRUNNING");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("showOk", true);
} }
function SystemHealthComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SystemHealthComponent_ng_template_3_div_1_Template, 6, 9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, SystemHealthComponent_ng_template_3_div_2_Template, 6, 9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, SystemHealthComponent_ng_template_3_div_3_Template, 6, 10, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, SystemHealthComponent_ng_template_3_div_4_Template, 5, 4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, SystemHealthComponent_ng_template_3_div_5_Template, 5, 5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, SystemHealthComponent_ng_template_3_div_6_Template, 5, 9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, SystemHealthComponent_ng_template_3_div_7_Template, 5, 8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, SystemHealthComponent_ng_template_3_div_8_Template, 5, 8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "app-status-symbols", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, SystemHealthComponent_ng_template_3_div_11_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, SystemHealthComponent_ng_template_3_div_12_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "app-status-symbols", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, SystemHealthComponent_ng_template_3_div_15_Template, 4, 7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, SystemHealthComponent_ng_template_3_div_16_Template, 4, 7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, SystemHealthComponent_ng_template_3_div_17_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, SystemHealthComponent_ng_template_3_div_18_Template, 16, 20, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, SystemHealthComponent_ng_template_3_div_19_Template, 4, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.systemHealthService.groupsInAlarmState() !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.systemHealthService.groupsConfigurationError());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.systemHealthService.groupsInTimeoutState());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.systemHealthService.status.busMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.systemHealthService.status.busMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.systemHealthService.status.fdas.inStatusConfigured.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.systemHealthService.status.fdas.configuredNotInStatus.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.authService.isLoggedIn() && ctx_r1.systemHealthService.status.fdas.inStatusUnconfigured.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("showOk", ctx_r1.systemHealthService.guibackendServiceStatus === true)("showWarning", ctx_r1.systemHealthService.guibackendServiceStatus === false)("showTimeglass", ctx_r1.systemHealthService.guibackendServiceStatus === undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.systemHealthService.guibackendServiceStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.systemHealthService.guibackendServiceStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("showOk", ctx_r1.systemHealthService.timeDiffOk() && ctx_r1.systemHealthService.guibackendServiceStatus == true)("showWarning", !ctx_r1.systemHealthService.timeDiffOk() && ctx_r1.systemHealthService.guibackendServiceStatus === true)("showQuestionmark", ctx_r1.systemHealthService.guibackendServiceStatus === false)("showTimeglass", ctx_r1.systemHealthService.guibackendServiceStatus === undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.systemHealthService.timeDiffOk() && ctx_r1.systemHealthService.guibackendServiceStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.systemHealthService.timeDiffOk() && ctx_r1.systemHealthService.guibackendServiceStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.systemHealthService.guibackendServiceStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.systemHealthService.allServicesRunning);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.systemHealthService.allServicesRunning);
} }
class SystemHealthComponent {
    constructor(socketIo, fdcService, systemHealthService, authService) {
        this.socketIo = socketIo;
        this.fdcService = fdcService;
        this.systemHealthService = systemHealthService;
        this.authService = authService;
    }
    ngOnInit() {
    }
}
SystemHealthComponent.ɵfac = function SystemHealthComponent_Factory(t) { return new (t || SystemHealthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_socket_connection_service__WEBPACK_IMPORTED_MODULE_0__.SocketConnectionService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_fdc_service__WEBPACK_IMPORTED_MODULE_1__.FdcService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_system_health_service__WEBPACK_IMPORTED_MODULE_2__.SystemHealthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService)); };
SystemHealthComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: SystemHealthComponent, selectors: [["app-system-health"]], decls: 4, vars: 0, consts: [["activeIds", ""], ["id", "system-health"], ["ngbPanelHeader", ""], ["ngbPanelContent", ""], ["ngbPanelToggle", "", 1, "accordion-button", 3, "ngClass"], [1, "d-flex", "flex-nowrap"], [3, "showOk", "showWarning", "showTimeglass"], ["class", "ms-2", "translate", "", 4, "ngIf"], ["class", "ms-3", "translate", "", 4, "ngIf"], ["translate", "", 1, "ms-2"], ["translate", "", 1, "ms-3"], [1, "row"], ["class", "d-flex flex-nowrap mt-2", 4, "ngIf"], [1, "d-flex", "flex-nowrap", "mt-2"], [3, "showOk", "showWarning", "showQuestionmark", "showTimeglass"], ["class", "ms-2", 4, "ngIf"], [4, "ngIf"], [3, "showWarning"], [1, "ms-2"], [3, "showTimeglass"], [3, "showQuestionmark"], [3, "showOk", "showWarning"], [3, "showOk"]], template: function SystemHealthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ngb-accordion", 0)(1, "ngb-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, SystemHealthComponent_ng_template_2_Template, 6, 11, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, SystemHealthComponent_ng_template_3_Template, 20, 22, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbAccordion, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbPanel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbPanelContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbPanelHeader, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbPanelToggle, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateDirective, _status_symbols_status_symbols_component__WEBPACK_IMPORTED_MODULE_4__.StatusSymbolsComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe], styles: [".syshealth-ok[_ngcontent-%COMP%] {\r\n  background-color: var(--maintenance-header-ok) !important;\r\n}\r\n\r\n.syshealth-nok[_ngcontent-%COMP%] {\r\n  background-color: var(--maintenance-header-nok) !important;\r\n}\r\n\r\n.syshealth-undefined[_ngcontent-%COMP%] {\r\n  background-color: var(--maintenance-header-loading) !important;\r\n}\r\n\r\n.accordion-body[_ngcontent-%COMP%] {\r\n  background-color: var(--accordeon-body-1) !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN5c3RlbS1oZWFsdGguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlEQUF5RDtBQUMzRDs7QUFFQTtFQUNFLDBEQUEwRDtBQUM1RDs7QUFFQTtFQUNFLDhEQUE4RDtBQUNoRTs7QUFFQTtFQUNFLG9EQUFvRDtBQUN0RCIsImZpbGUiOiJzeXN0ZW0taGVhbHRoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3lzaGVhbHRoLW9rIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWludGVuYW5jZS1oZWFkZXItb2spICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zeXNoZWFsdGgtbm9rIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWludGVuYW5jZS1oZWFkZXItbm9rKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3lzaGVhbHRoLXVuZGVmaW5lZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbnRlbmFuY2UtaGVhZGVyLWxvYWRpbmcpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hY2NvcmRpb24tYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjb3JkZW9uLWJvZHktMSkgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 4356:
/*!*****************************************************!*\
  !*** ./src/app/components/toast/toast.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastComponent": () => (/* binding */ ToastComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_toast_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/toast-service.service */ 1618);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);





function ToastComponent_ngb_toast_0_ng_template_1_ng_template_0_Template(rf, ctx) { }
function ToastComponent_ngb_toast_0_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ToastComponent_ngb_toast_0_ng_template_1_ng_template_0_Template, 0, 0, "ng-template", 4);
} if (rf & 2) {
    const toast_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", toast_r1.textOrTpl);
} }
function ToastComponent_ngb_toast_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
} if (rf & 2) {
    const toast_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](toast_r1.textOrTpl);
} }
function ToastComponent_ngb_toast_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngb-toast", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("hidden", function ToastComponent_ngb_toast_0_Template_ngb_toast_hidden_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const toast_r1 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.toastService.remove(toast_r1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ToastComponent_ngb_toast_0_ng_template_1_Template, 1, 1, "ng-template", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ToastComponent_ngb_toast_0_ng_template_2_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const toast_r1 = ctx.$implicit;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](toast_r1.classname);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("autohide", true)("delay", toast_r1.delay || 2500);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isTemplate(toast_r1))("ngIfElse", _r3);
} }
class ToastComponent {
    constructor(toastService) {
        this.toastService = toastService;
    }
    isTemplate(toast) {
        return toast.textOrTpl instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef;
    }
}
ToastComponent.ɵfac = function ToastComponent_Factory(t) { return new (t || ToastComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_toast_service_service__WEBPACK_IMPORTED_MODULE_0__.ToastService)); };
ToastComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ToastComponent, selectors: [["app-toasts"]], hostAttrs: [1, "toast-container", "position-fixed", "end-0", "p-3", 2, "z-index", "1200", "top", "2.3rem"], decls: 1, vars: 1, consts: [[3, "class", "autohide", "delay", "hidden", 4, "ngFor", "ngForOf"], [3, "autohide", "delay", "hidden"], [3, "ngIf", "ngIfElse"], ["text", ""], [3, "ngTemplateOutlet"]], template: function ToastComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ToastComponent_ngb_toast_0_Template, 4, 6, "ngb-toast", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.toastService.toasts);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbToast], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b2FzdC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 3185:
/*!***************************************************!*\
  !*** ./src/app/directives/autofocus.directive.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutofocusDirective": () => (/* binding */ AutofocusDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


class AutofocusDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.elementRef.nativeElement.focus();
            console.log('focus');
        }, 250);
    }
}
AutofocusDirective.ɵfac = function AutofocusDirective_Factory(t) { return new (t || AutofocusDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
AutofocusDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AutofocusDirective, selectors: [["", "appAutofocus", ""]] });


/***/ }),

/***/ 1911:
/*!***************************************************************!*\
  !*** ./src/app/services/authentication/auth-guard.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuardService": () => (/* binding */ AuthGuardService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 3271);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);




class AuthGuardService {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate(route, state) {
        if (!this.auth.isLoggedIn()) {
            this.router.navigate(['login'], { queryParams: { returnUrl: state.url } }).then(() => window.location.reload());
        }
        else if (this.auth.getUser().forcePasswordChange) {
            this.router.navigate(['forced-password-change']);
        }
        return true;
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
AuthGuardService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4917:
/*!**********************************************************************!*\
  !*** ./src/app/services/authentication/auth-interceptor.provider.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptor": () => (/* binding */ AuthInterceptor),
/* harmony export */   "authInterceptor": () => (/* binding */ authInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 2673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 9295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _token_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token-storage.service */ 6617);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 3271);







const TOKEN_HEADER_KEY = 'x-access-token';
class AuthInterceptor {
    constructor(tokenService, authService) {
        this.tokenService = tokenService;
        this.authService = authService;
        this.isRefreshing = false;
        this.refreshTokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
    }
    intercept(req, next) {
        let authReq = req;
        const token = this.tokenService.getToken();
        if (token != null) {
            authReq = AuthInterceptor.addTokenHeader(req, token);
        }
        return next.handle(authReq).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((error) => {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpErrorResponse && !authReq.url.includes('auth/signin') && error.status === 401) {
                return this.handle401Error(authReq, next);
            }
            else if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpErrorResponse && !authReq.url.includes('auth/signin') && error.status === 423) {
                this.authService.signOutAndShowLogin();
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => 'outdated sesseion id => sign out');
            }
            const err = new Error(error.message);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => err);
        }));
    }
    handle401Error(request, next) {
        if (!this.isRefreshing) {
            this.isRefreshing = true;
            this.refreshTokenSubject.next(null);
            const token = this.tokenService.getRefreshToken();
            if (token)
                return this.authService.refreshToken().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((token) => {
                    this.isRefreshing = false;
                    this.tokenService.saveToken(token.token);
                    this.tokenService.saveRefreshToken(token.refreshToken);
                    this.refreshTokenSubject.next(token.token);
                    return next.handle(AuthInterceptor.addTokenHeader(request, token.token));
                }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((err) => {
                    this.isRefreshing = false;
                    this.tokenService.signOut();
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(err);
                }));
        }
        return this.refreshTokenSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(token => token !== null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((token) => next.handle(AuthInterceptor.addTokenHeader(request, token))));
    }
    static addTokenHeader(request, token) {
        return request.clone({ headers: request.headers.set(TOKEN_HEADER_KEY, token) });
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_token_storage_service__WEBPACK_IMPORTED_MODULE_0__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService)); };
AuthInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });
const authInterceptor = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];


/***/ }),

/***/ 3271:
/*!*********************************************************!*\
  !*** ./src/app/services/authentication/auth.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9196);
/* harmony import */ var _utils_locationUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/locationUtils */ 5359);
/* harmony import */ var _token_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./token-storage.service */ 6617);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);








const AUTH_API = _utils_locationUtils__WEBPACK_IMPORTED_MODULE_0__.LocationUtils.backendHostUrl() + '/auth/';
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ 'Content-Type': 'application/json' })
};
class AuthService {
    constructor(http, tokenStorage, router) {
        this.http = http;
        this.tokenStorage = tokenStorage;
        this.router = router;
        this.authenticationChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.fdcTimeDiff = 0;
        this.loadedUsernames = [];
    }
    login(username, password) {
        let observable = this.http.post(AUTH_API + 'login', { username, password }, httpOptions)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.shareReplay)());
        observable.subscribe((data) => {
            this.tokenStorage.saveToken(data.token);
            this.tokenStorage.saveRefreshToken(data.refreshToken);
            this.tokenStorage.saveUser(JSON.parse(atob(data.token.split('.')[1])));
            this.authenticationChange.emit({ loggedIn: true });
        });
        return observable;
    }
    refreshToken() {
        return this.http.post(AUTH_API + 'refreshtoken', { refreshToken: this.tokenStorage.getRefreshToken() }, httpOptions);
    }
    isLoggedIn() {
        let token = this.tokenStorage.getRefreshToken();
        if (!token) {
            return false;
        }
        let tokenData = JSON.parse(atob(token.split('.')[1]));
        let tokenExpirationTime = tokenData.exp * 1000;
        return tokenExpirationTime > (new Date().getTime() - this.fdcTimeDiff);
    }
    isLoggedOut() {
        return this.tokenStorage.getRefreshToken() === null;
    }
    isTimedOut() {
        let token = this.tokenStorage.getRefreshToken();
        if (!token) {
            return false;
        }
        let tokenData = JSON.parse(atob(token.split('.')[1]));
        let tokenExpirationTime = tokenData.exp * 1000;
        return tokenExpirationTime <= (new Date().getTime() - this.fdcTimeDiff);
    }
    isAdmin() {
        return this.isLoggedIn() && this.hasRole('ADMIN');
    }
    isService() {
        return this.isLoggedIn() && (this.isAdmin() || this.hasRole('SERVICE'));
    }
    mustChangePassword() {
        return this.getUser().forcePasswordChange;
    }
    signOut() {
        this.loadedUsernames = [];
        this.tokenStorage.signOut();
        this.authenticationChange.emit({ loggedIn: false });
    }
    signOutAndShowLogin() {
        this.signOut();
        this.router.navigateByUrl('login');
    }
    getUser() {
        return this.tokenStorage.getUser();
    }
    hasRole(role) {
        return this.getUser().role === role;
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_token_storage_service__WEBPACK_IMPORTED_MODULE_1__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9275:
/*!***************************************************************!*\
  !*** ./src/app/services/authentication/role-guard.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleGuardService": () => (/* binding */ RoleGuardService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 3271);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);




class RoleGuardService {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate(route, state) {
        const expectedRole = route.data['expectedRole'];
        let containsOneRole = false;
        if (this.auth.isLoggedIn()) {
            for (const role of expectedRole) {
                containsOneRole = containsOneRole || this.auth.hasRole(role);
            }
        }
        if (!containsOneRole) {
            this.auth.signOut();
            return this.router.parseUrl('/login');
        }
        return true;
    }
}
RoleGuardService.ɵfac = function RoleGuardService_Factory(t) { return new (t || RoleGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
RoleGuardService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RoleGuardService, factory: RoleGuardService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6617:
/*!******************************************************************!*\
  !*** ./src/app/services/authentication/token-storage.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenStorageService": () => (/* binding */ TokenStorageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const REFRESHTOKEN_KEY = 'auth-refreshtoken';
class TokenStorageService {
    constructor() { }
    signOut() {
        window.sessionStorage.clear();
    }
    saveToken(token) {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    }
    getToken() {
        return window.sessionStorage.getItem(TOKEN_KEY);
    }
    saveRefreshToken(token) {
        window.sessionStorage.removeItem(REFRESHTOKEN_KEY);
        window.sessionStorage.setItem(REFRESHTOKEN_KEY, token);
    }
    getRefreshToken() {
        return window.sessionStorage.getItem(REFRESHTOKEN_KEY);
    }
    saveUser(data) {
        let user = {};
        user.username = data.username;
        user.role = data.role;
        user.forcePasswordChange = data.forcePasswordChange;
        window.sessionStorage.removeItem(USER_KEY);
        window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    }
    getUser() {
        const user = window.sessionStorage.getItem(USER_KEY);
        if (user) {
            return JSON.parse(user);
        }
        return {};
    }
}
TokenStorageService.ɵfac = function TokenStorageService_Factory(t) { return new (t || TokenStorageService)(); };
TokenStorageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenStorageService, factory: TokenStorageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3732:
/*!*********************************************************!*\
  !*** ./src/app/services/authentication/user.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9196);
/* harmony import */ var _utils_locationUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/locationUtils */ 5359);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 3271);
/* harmony import */ var _toast_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toast-service.service */ 1618);







const AUTH_API = _utils_locationUtils__WEBPACK_IMPORTED_MODULE_0__.LocationUtils.backendHostUrl() + '/auth/';
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application/json' })
};
class UserService {
    constructor(http, auth, toast) {
        this.http = http;
        this.auth = auth;
        this.toast = toast;
        this.loadedUsers = [];
        this.loadAllUsers();
        auth.authenticationChange.subscribe({
            next: (data) => {
                if (data.loggedIn) {
                    this.loadAllUsers();
                }
                else {
                    this.loadedUsers = [];
                }
            }
        });
    }
    get users() {
        return this.loadedUsers;
    }
    loadAllUsers() {
        if (this.auth.isService()) {
            let obs = this.http.get(AUTH_API + 'all-users').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.shareReplay)());
            obs.subscribe({
                next: (data) => {
                    this.loadedUsers = data;
                },
                error: (err) => {
                    this.loadedUsers = [];
                    console.error(err);
                }
            });
        }
    }
    changePassword(username, password) {
        let observable = this.http.put(AUTH_API + 'change-password', { username, password }, httpOptions)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.shareReplay)());
        observable.subscribe(() => {
            this.toast.show("Password changed!", { classname: 'bg-success text-white text-bold toast-font-size' });
            if (username === this.auth.getUser().username) {
                setTimeout(() => this.auth.signOut(), 100);
            }
        });
        return observable;
    }
    createUser(userData) {
        console.log(userData);
        let observable = this.http.post(AUTH_API + 'create-user', userData, httpOptions)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.shareReplay)());
        observable.subscribe({
            next: () => {
                this.toast.show("User created!", { classname: 'bg-success text-white text-bold toast-font-size' });
                this.loadAllUsers();
            }, error: (err) => {
                console.error(err);
                this.toast.show("Error creating user!", { classname: 'bg-danger text-white text-bold toast-font-size' });
            }
        });
        return observable;
    }
    deleteUser(username) {
        if (this.auth.isAdmin()) {
            let obs = this.http.delete(AUTH_API + 'delete-user?username=' + username, httpOptions)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.shareReplay)());
            obs.subscribe(() => {
                this.loadAllUsers();
                this.toast.show("User deleted!", { classname: 'bg-success text-white text-bold toast-font-size' });
            });
        }
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_toast_service_service__WEBPACK_IMPORTED_MODULE_2__.ToastService)); };
UserService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1383:
/*!********************************************!*\
  !*** ./src/app/services/cookie.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CookieService": () => (/* binding */ CookieService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class CookieService {
    constructor() {
    }
    saveValue(key, value) {
        try {
            let config = CookieService.getConfig();
            config[key] = value;
            localStorage.setItem('config', JSON.stringify(config));
        }
        catch (e) {
            CookieService.logError(e.message);
        }
    }
    getValue(key, defaultValue) {
        try {
            let config = CookieService.getConfig();
            return config[key] ? config[key] : defaultValue;
        }
        catch (e) {
            CookieService.logError(e.message);
        }
    }
    static getConfig() {
        return JSON.parse(localStorage.getItem('config') || '{}');
    }
    static logError(message) {
        let errorDiv = document.createElement('DIV');
        errorDiv.innerText = message;
        document.getElementById('error-log')?.appendChild(errorDiv);
    }
}
CookieService.ɵfac = function CookieService_Factory(t) { return new (t || CookieService)(); };
CookieService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CookieService, factory: CookieService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3705:
/*!***************************************************************!*\
  !*** ./src/app/services/dto-services/damper-group.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DamperGroupService": () => (/* binding */ DamperGroupService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 9196);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-uuid */ 3105);
/* harmony import */ var _utils_locationUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/locationUtils */ 5359);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _authentication_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authentication/auth.service */ 3271);
/* harmony import */ var _toast_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toast-service.service */ 1618);
/* harmony import */ var _sync_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sync.service */ 3395);










const AUTH_API = _utils_locationUtils__WEBPACK_IMPORTED_MODULE_2__.LocationUtils.backendHostUrl() + '/config/groups/';
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders({ 'Content-Type': 'application/json' })
};
class DamperGroupService {
    constructor(http, authService, toast, syncService) {
        this.http = http;
        this.authService = authService;
        this.toast = toast;
        this.syncService = syncService;
        this._data = [];
        this._loaded = false;
        authService.authenticationChange.subscribe({
            next: (data) => {
                if (data.loggedIn) {
                    this.load();
                }
                else {
                    this.unload();
                }
            }
        });
        if (authService.isLoggedIn()) {
            this.load();
        }
        syncService.backendIsAvailableEvent.subscribe({
            next: (backendServiceStatus) => {
                if (!backendServiceStatus.running) {
                    this.unload();
                }
                else {
                    this.load();
                }
            }
        });
    }
    getData() {
        if (!this._loaded) {
            this.load();
        }
        return this._data;
    }
    get loaded() {
        return this._loaded;
    }
    unload() {
        this._data = [];
        this._loaded = false;
    }
    load() {
        if (this.authService.isAdmin()) {
            this._loaded = true;
            let obs = this.http.get(AUTH_API);
            obs.subscribe({
                next: (data) => {
                    this._data = data;
                    this._loaded = true;
                },
                error: () => this.unload()
            });
        }
    }
    add(damperGroup) {
        damperGroup.id = angular2_uuid__WEBPACK_IMPORTED_MODULE_1__.UUID.UUID();
        this._data.push(damperGroup);
        return this.save(this._data);
    }
    update() {
        return this.save(this._data);
    }
    remove(groupId) {
        let clone = lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep(this._data);
        clone = clone.filter((group) => group.id !== groupId);
        return this.save(clone);
    }
    replace(newData) {
        this._data = newData;
    }
    checkIfNameUnique(value) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(this._data.some((a) => a.name === value.name));
    }
    groupsByIds(groupIds) {
        if (groupIds) {
            let groups = this._data.filter(g => groupIds.includes(g.id));
            return groups.length > 0 ? groups : [];
        }
        else {
            return [];
        }
    }
    save(data) {
        let toSave = lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep(data.map(d => d));
        const obs = this.http.post(AUTH_API, toSave, httpOptions)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.shareReplay)());
        obs.subscribe({
            next: (data) => {
                this._data = data;
                this._loaded = true;
                this.toast.show("Groups config saved", { classname: 'bg-success text-white text-bold toast-font-size' });
                this.syncService.emitConfigNeedsReload(['application']);
            },
            error: () => this.unload()
        });
        return obs;
    }
}
DamperGroupService.ɵfac = function DamperGroupService_Factory(t) { return new (t || DamperGroupService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_authentication_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_toast_service_service__WEBPACK_IMPORTED_MODULE_4__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_sync_service__WEBPACK_IMPORTED_MODULE_5__.SyncService)); };
DamperGroupService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: DamperGroupService, factory: DamperGroupService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7159:
/*!********************************************************************!*\
  !*** ./src/app/services/dto-services/dampermode-change.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DampermodeChangeService": () => (/* binding */ DampermodeChangeService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9196);
/* harmony import */ var _utils_locationUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/locationUtils */ 5359);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _authentication_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authentication/auth.service */ 3271);
/* harmony import */ var _toast_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toast-service.service */ 1618);
/* harmony import */ var _fda_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fda.service */ 7576);








const AUTH_API = _utils_locationUtils__WEBPACK_IMPORTED_MODULE_0__.LocationUtils.backendHostUrl() + '/config/fdas/';
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({ 'Content-Type': 'application/json' })
};
class DampermodeChangeService {
    constructor(http, authService, toast, fdaService) {
        this.http = http;
        this.authService = authService;
        this.toast = toast;
        this.fdaService = fdaService;
    }
    setDamperMode(physicalId, damperId, mode) {
        if (this.authService.isService()) {
            let obs = this.http.post(AUTH_API + 'changemode', { physicalId: physicalId, damperId: damperId, mode: mode }, httpOptions)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.shareReplay)());
            obs.subscribe({
                next: () => {
                    this.fdaService.load();
                    this.toast.show("Dampermode was set successfully.", { classname: 'bg-success text-white text-bold toast-font-size' });
                },
                error: () => {
                    this.toast.show("ERROR! Could not set dampermode!", { classname: 'bg-danger text-white text-bold toast-font-size' });
                }
            });
        }
    }
}
DampermodeChangeService.ɵfac = function DampermodeChangeService_Factory(t) { return new (t || DampermodeChangeService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_authentication_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_toast_service_service__WEBPACK_IMPORTED_MODULE_2__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_fda_service__WEBPACK_IMPORTED_MODULE_3__.FdaService)); };
DampermodeChangeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: DampermodeChangeService, factory: DampermodeChangeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7576:
/*!******************************************************!*\
  !*** ./src/app/services/dto-services/fda.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FdaService": () => (/* binding */ FdaService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 9196);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-uuid */ 3105);
/* harmony import */ var _utils_locationUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/locationUtils */ 5359);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _authentication_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authentication/auth.service */ 3271);
/* harmony import */ var _toast_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toast-service.service */ 1618);
/* harmony import */ var _sync_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sync.service */ 3395);










const AUTH_API = _utils_locationUtils__WEBPACK_IMPORTED_MODULE_2__.LocationUtils.backendHostUrl() + '/config/fdas/';
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders({ 'Content-Type': 'application/json' })
};
class FdaService {
    constructor(http, authService, toast, syncService) {
        this.http = http;
        this.authService = authService;
        this.toast = toast;
        this.syncService = syncService;
        this.data = [];
        this.loaded = false;
        authService.authenticationChange.subscribe({
            next: (data) => {
                if (data.loggedIn) {
                    this.load();
                }
                else {
                    this.unload();
                }
            }
        });
        if (authService.isLoggedIn()) {
            this.load();
        }
        syncService.backendIsAvailableEvent.subscribe({
            next: (backendServiceStatus) => {
                if (!backendServiceStatus.running) {
                    this.unload();
                }
                else {
                    this.load();
                }
            }
        });
    }
    unload() {
        this.data = [];
        this.loaded = false;
    }
    load() {
        if (this.authService.isService()) {
            let obs = this.http.get(AUTH_API);
            obs.subscribe({
                next: (data) => {
                    this.data = data;
                    this.loaded = true;
                },
                error: () => this.unload()
            });
        }
    }
    add(fda) {
        fda.id = angular2_uuid__WEBPACK_IMPORTED_MODULE_1__.UUID.UUID();
        this.data.push(fda);
        return this.save(this.data);
    }
    update() {
        return this.save(this.data);
    }
    updateWithoutServiceNotification() {
        return this._save(this.data, false);
    }
    remove(id) {
        let clone = lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep(this.data);
        clone = clone.filter((fda) => fda.id !== id);
        return this.save(clone);
    }
    checkIfPhysicalAddressUnique(value) {
        return !this.data.some((fda) => {
            return ((fda.id !== value.id) && (fda.physicalAddress === value.physicalAddress));
        });
    }
    getFdaConfigByPhysicalAddress(physicalAddress) {
        return this.data.find(f => f.physicalAddress === physicalAddress);
    }
    save(data) {
        return this._save(data, true);
    }
    _save(data, notifyServices) {
        let toSave = data.map(d => lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep(d));
        toSave.forEach((fda) => {
            fda.fdaConfigRef = undefined;
            fda.damper1.disabled = fda.damper1.damperMode === 'Disabled' ? 1 : 0;
            fda.damper2.disabled = fda.damper2.damperMode === 'Disabled' ? 1 : 0;
        });
        const obs = this.http.post(AUTH_API, toSave, httpOptions)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.shareReplay)());
        obs.subscribe({
            next: (data) => {
                this.data = data;
                this.loaded = true;
                this.toast.show("FDAs config saved", { classname: 'bg-success text-white text-bold toast-font-size' });
                if (notifyServices) {
                    this.syncService.emitConfigNeedsReload(['application']);
                }
            },
            error: () => {
                this.unload();
                this.toast.show("ERROR! Data could not be saved", { classname: 'bg-danger text-white text-bold toast-font-size' });
            }
        });
        return obs;
    }
}
FdaService.ɵfac = function FdaService_Factory(t) { return new (t || FdaService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_authentication_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_toast_service_service__WEBPACK_IMPORTED_MODULE_4__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_sync_service__WEBPACK_IMPORTED_MODULE_5__.SyncService)); };
FdaService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: FdaService, factory: FdaService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6441:
/*!********************************************************!*\
  !*** ./src/app/services/dto-services/input.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputService": () => (/* binding */ InputService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-uuid */ 3105);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _fdc_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fdc.service */ 1473);
/* harmony import */ var _authentication_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authentication/auth.service */ 3271);






class InputService {
    constructor(service, authService) {
        this.service = service;
        this.authService = authService;
        this.availableInputNumbers = [];
        authService.authenticationChange.subscribe({
            next: (data) => {
                if (data.loggedIn) {
                    this.load();
                }
            }
        });
        if (authService.isLoggedIn()) {
            this.load();
        }
    }
    get inputs() {
        return this.service.data.inputs;
    }
    load() {
        if (this.authService.isAdmin()) {
            let obs = this.service.load();
            if (obs) {
                obs.subscribe({
                    next: () => {
                        this.setAvailableNumbers();
                    }
                });
            }
        }
    }
    add(input) {
        input.id = angular2_uuid__WEBPACK_IMPORTED_MODULE_1__.UUID.UUID();
        this.service.data.inputs.push(input);
        this.service.update().subscribe(() => this.setAvailableNumbers());
    }
    remove(id) {
        this.service.data.inputs = this.service.data.inputs.filter((input) => input.id !== id);
        this.service.update().subscribe(() => this.setAvailableNumbers());
    }
    checkIfNameUnique(value) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(this.service.data.inputs.some((input) => input.name === value.name));
    }
    checkIfNumberUnique(value) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(this.service.data.inputs.some((input) => input.number === value.number));
    }
    getById(id) {
        const input = this.service.data.inputs.find(input => input.id === id);
        if (input) {
            return input;
        }
        return {};
    }
    getByNumber(number) {
        const input = this.service.data.inputs.find(input => input.number === number);
        if (input) {
            return input;
        }
        return undefined;
    }
    setAvailableNumbers() {
        let availableNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
        this.service.data.inputs.forEach((input) => {
            availableNumbers = lodash__WEBPACK_IMPORTED_MODULE_0__.remove(availableNumbers, (n) => n !== input.number);
        });
        this.availableInputNumbers = availableNumbers;
    }
}
InputService.ɵfac = function InputService_Factory(t) { return new (t || InputService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_fdc_service__WEBPACK_IMPORTED_MODULE_2__.FdcService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_authentication_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService)); };
InputService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: InputService, factory: InputService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8499:
/*!****************************************************************!*\
  !*** ./src/app/services/dto-services/mail-template.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MailTemplateService": () => (/* binding */ MailTemplateService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 9196);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-uuid */ 3105);
/* harmony import */ var _utils_locationUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/locationUtils */ 5359);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _authentication_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authentication/auth.service */ 3271);
/* harmony import */ var _toast_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toast-service.service */ 1618);
/* harmony import */ var _sync_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sync.service */ 3395);










const AUTH_API = _utils_locationUtils__WEBPACK_IMPORTED_MODULE_2__.LocationUtils.backendHostUrl() + '/config/mailtemplates/';
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders({ 'Content-Type': 'application/json' })
};
class MailTemplateService {
    constructor(http, authService, toast, syncService) {
        this.http = http;
        this.authService = authService;
        this.toast = toast;
        this.syncService = syncService;
        this.data = [];
        this.loaded = false;
        authService.authenticationChange.subscribe({
            next: (data) => {
                if (data.loggedIn) {
                    this.load();
                }
                else {
                    this.unload();
                }
            }
        });
        if (authService.isLoggedIn()) {
            this.load();
        }
        syncService.backendIsAvailableEvent.subscribe({
            next: (backendServiceStatus) => {
                if (!backendServiceStatus.running) {
                    this.unload();
                }
                else {
                    this.load();
                }
            }
        });
    }
    unload() {
        this.data = [];
        this.loaded = false;
    }
    load() {
        if (this.authService.isAdmin()) {
            let obs = this.http.get(AUTH_API);
            obs.subscribe({
                next: (data) => {
                    this.data = data;
                    this.loaded = true;
                },
                error: () => this.unload()
            });
        }
    }
    add(data) {
        data.id = angular2_uuid__WEBPACK_IMPORTED_MODULE_1__.UUID.UUID();
        this.data.push(data);
        return this.save(this.data);
    }
    update() {
        return this.save(this.data);
    }
    remove(id) {
        let clone = lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep(this.data);
        clone = clone.filter((data) => data.id !== id);
        return this.save(clone);
    }
    checkIfNameUnique(value) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(this.data.some((input) => input.name === value.name));
    }
    getById(id) {
        const mailTemplate = this.data.find(mailTemplate => mailTemplate.id === id);
        if (mailTemplate) {
            return mailTemplate;
        }
        return {};
    }
    save(data) {
        let toSave = lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep(data.map(d => d));
        const obs = this.http.post(AUTH_API, toSave, httpOptions)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.shareReplay)());
        obs.subscribe({
            next: (data) => {
                this.data = data;
                this.toast.show("Mailtemplates saved", { classname: 'bg-success text-white text-bold toast-font-size' });
                this.syncService.emitConfigNeedsReload(['application']);
            },
            error: () => this.data = []
        });
        return obs;
    }
}
MailTemplateService.ɵfac = function MailTemplateService_Factory(t) { return new (t || MailTemplateService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_authentication_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_toast_service_service__WEBPACK_IMPORTED_MODULE_4__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_sync_service__WEBPACK_IMPORTED_MODULE_5__.SyncService)); };
MailTemplateService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: MailTemplateService, factory: MailTemplateService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8595:
/*!*******************************************************************!*\
  !*** ./src/app/services/dto-services/maintenance-mode.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaintenanceModeService": () => (/* binding */ MaintenanceModeService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 9196);
/* harmony import */ var _utils_locationUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/locationUtils */ 5359);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _authentication_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authentication/auth.service */ 3271);
/* harmony import */ var _toast_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toast-service.service */ 1618);
/* harmony import */ var _sync_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sync.service */ 3395);
/* harmony import */ var _fdc_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fdc.service */ 1473);









const AUTH_API = _utils_locationUtils__WEBPACK_IMPORTED_MODULE_0__.LocationUtils.backendHostUrl() + '/config/fdc/';
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({ 'Content-Type': 'application/json' })
};
class MaintenanceModeService {
    constructor(http, authService, toast, syncService, fdcService) {
        this.http = http;
        this.authService = authService;
        this.toast = toast;
        this.syncService = syncService;
        this.fdcService = fdcService;
        this.data = { maintenanceEnd: 0 };
        this.loaded = false;
        authService.authenticationChange.subscribe({
            next: (data) => {
                if (data.loggedIn) {
                    this.load();
                }
                else {
                    this.unload();
                }
            }
        });
        syncService.backendIsAvailableEvent.subscribe({
            next: (backendServiceStatus) => {
                if (!backendServiceStatus.running) {
                    this.unload();
                }
                else {
                    this.load();
                }
            }
        });
        if (authService.isLoggedIn()) {
            this.load();
        }
    }
    unload() {
        this.data = { maintenanceEnd: 0 };
        this.loaded = false;
    }
    load() {
        if (this.authService.isService()) {
            this.loaded = false;
            let obs = this.http.get(AUTH_API + 'maintenance');
            obs.subscribe({
                next: (data) => {
                    this.data = data;
                    this.loaded = true;
                },
                error: () => this.unload()
            });
        }
    }
    isMaintenanceActive() {
        return this.data.maintenanceEnd !== undefined &&
            this.data.maintenanceEnd !== null &&
            this.data.maintenanceEnd > Math.trunc(new Date().getTime() / 1000);
    }
    setMaintenance(endTime) {
        if (this.authService.isService()) {
            let obs = this.http.post(AUTH_API + 'maintenance', { maintenanceEnd: endTime }, httpOptions)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.shareReplay)());
            obs.subscribe({
                next: () => {
                    this.fdcService.load();
                    this.data.maintenanceEnd = endTime;
                    this.toast.show("Maintenance was set successfully.", { classname: 'bg-success text-white text-bold toast-font-size' });
                },
                error: () => {
                    this.toast.show("ERROR! Could not set maintenance!", { classname: 'bg-danger text-white text-bold toast-font-size' });
                }
            });
            return obs;
        }
        return undefined;
    }
}
MaintenanceModeService.ɵfac = function MaintenanceModeService_Factory(t) { return new (t || MaintenanceModeService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_authentication_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_toast_service_service__WEBPACK_IMPORTED_MODULE_2__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_sync_service__WEBPACK_IMPORTED_MODULE_3__.SyncService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_fdc_service__WEBPACK_IMPORTED_MODULE_4__.FdcService)); };
MaintenanceModeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: MaintenanceModeService, factory: MaintenanceModeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5782:
/*!*********************************************************!*\
  !*** ./src/app/services/dto-services/output.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OutputService": () => (/* binding */ OutputService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-uuid */ 3105);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _fdc_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fdc.service */ 1473);
/* harmony import */ var _authentication_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authentication/auth.service */ 3271);






class OutputService {
    constructor(service, authService) {
        this.service = service;
        this.authService = authService;
        this.availableOutputNumbers = [];
        authService.authenticationChange.subscribe({
            next: (data) => {
                if (data.loggedIn) {
                    this.load();
                }
            }
        });
        if (authService.isLoggedIn()) {
            this.load();
        }
    }
    get outputs() {
        return this.service.data.outputs;
    }
    load() {
        if (this.authService.isAdmin()) {
            let obs = this.service.load();
            if (obs) {
                obs.subscribe({
                    next: () => {
                        this.setAvailableNumbers();
                    }
                });
            }
        }
    }
    add(output) {
        output.id = angular2_uuid__WEBPACK_IMPORTED_MODULE_1__.UUID.UUID();
        this.service.data.outputs.push(output);
        this.service.update().subscribe(() => this.setAvailableNumbers());
    }
    remove(id) {
        this.service.data.outputs = this.service.data.outputs.filter((output) => output.id !== id);
        this.service.update().subscribe(() => this.setAvailableNumbers());
    }
    checkIfNameUnique(value) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(this.service.data.outputs.some((output) => output.name === value.name));
    }
    checkIfNumberUnique(value) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(this.service.data.outputs.some((output) => output.number === value.number));
    }
    getById(id) {
        const output = this.service.data.outputs.find(output => output.id === id);
        if (output) {
            return output;
        }
        return {};
    }
    getByNumber(number) {
        const output = this.service.data.outputs.find(output => output.number === number);
        if (output) {
            return output;
        }
        return undefined;
    }
    setAvailableNumbers() {
        let availableNumbers = [1, 2, 3, 4];
        this.service.data.outputs.forEach((output) => {
            availableNumbers = lodash__WEBPACK_IMPORTED_MODULE_0__.remove(availableNumbers, (n) => n !== output.number);
        });
        this.availableOutputNumbers = availableNumbers;
    }
}
OutputService.ɵfac = function OutputService_Factory(t) { return new (t || OutputService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_fdc_service__WEBPACK_IMPORTED_MODULE_2__.FdcService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_authentication_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService)); };
OutputService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: OutputService, factory: OutputService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6576:
/*!*****************************************************************!*\
  !*** ./src/app/services/dto-services/validity-check.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValidityCheckService": () => (/* binding */ ValidityCheckService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _damper_group_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./damper-group.service */ 3705);
/* harmony import */ var _fda_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fda.service */ 7576);



class ValidityCheckService {
    constructor(damperGroupService, fdaService) {
        this.damperGroupService = damperGroupService;
        this.fdaService = fdaService;
    }
    damperGroupUsesId(id) {
        return this.damperGroupService.getData().some((group) => Object.keys(group).some((key) => group[key] === id));
    }
    damperGroupUsedInFda(id) {
        return this.fdaService.data.some((fda) => {
            return (fda.damper1.groups && fda.damper1.groups.includes(id)) || (fda.damper2.groups && fda.damper2.groups.includes(id));
        });
    }
}
ValidityCheckService.ɵfac = function ValidityCheckService_Factory(t) { return new (t || ValidityCheckService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_damper_group_service__WEBPACK_IMPORTED_MODULE_0__.DamperGroupService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_fda_service__WEBPACK_IMPORTED_MODULE_1__.FdaService)); };
ValidityCheckService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ValidityCheckService, factory: ValidityCheckService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1473:
/*!*****************************************!*\
  !*** ./src/app/services/fdc.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FdcService": () => (/* binding */ FdcService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 9196);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_objectUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/objectUtils */ 7564);
/* harmony import */ var _utils_locationUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/locationUtils */ 5359);
/* harmony import */ var _authentication_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication/auth.service */ 3271);
/* harmony import */ var _toast_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toast-service.service */ 1618);
/* harmony import */ var _sync_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sync.service */ 3395);











const AUTH_API = _utils_locationUtils__WEBPACK_IMPORTED_MODULE_2__.LocationUtils.backendHostUrl() + '/config/fdc/';
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders({ 'Content-Type': 'application/json' })
};
class FdcService {
    constructor(http, authService, toast, syncService) {
        this.http = http;
        this.authService = authService;
        this.toast = toast;
        this.syncService = syncService;
        this.data = {};
        this.loaded = false;
        this._fdcTimeDiff = 0;
        this.fdcTimeDiffChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        authService.authenticationChange.subscribe({
            next: (data) => {
                if (data.loggedIn) {
                    this.load();
                }
                else {
                    this.unload();
                }
            },
            error: (error) => {
                console.log(error);
            }
        });
        if (authService.isLoggedIn()) {
            this.load();
        }
        this.updateFdcTimeDiff();
        syncService.backendIsAvailableEvent.subscribe({
            next: (backendServiceStatus) => {
                if (!backendServiceStatus.running) {
                    this.unload();
                }
                else {
                    this.updateFdcTimeDiff();
                    this.load();
                }
            }
        });
    }
    get fdcTimeDiff() {
        return this._fdcTimeDiff;
    }
    unload() {
        this.data = {};
        this.loaded = false;
    }
    load() {
        if (this.authService.isAdmin()) {
            this.loaded = false;
            let obs = this.http.get(AUTH_API)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.shareReplay)());
            obs.subscribe({
                next: (data) => {
                    data.inputs = this.orderByNumber(data.inputs);
                    data.outputs = this.orderByNumber(data.outputs);
                    this.data = data;
                    this.loaded = true;
                },
                error: () => this.unload()
            });
            return obs;
        }
        else {
            return undefined;
        }
    }
    orderByNumber(data) {
        if (data) {
            return data.sort((a, b) => a.number - b.number);
        }
        return [];
    }
    update() {
        return this.save(this.data);
    }
    updateWithoutServiceNotification() {
        return this._save(this.data, false);
    }
    updateFdcTimeDiff() {
        this.getFdcTime();
        setTimeout(() => this.getFdcTime(), 5000);
    }
    getFdcTime() {
        let obs = this.http.get(AUTH_API + '/time')
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.shareReplay)());
        obs.subscribe({
            next: (data) => {
                let timeDiff = new Date().getTime() - data.milliseconds;
                if (timeDiff !== this._fdcTimeDiff) {
                    this._fdcTimeDiff = timeDiff;
                    this.authService.fdcTimeDiff = this._fdcTimeDiff;
                    this.fdcTimeDiffChanged.emit({ milliseconds: timeDiff });
                }
            }
        });
        return obs;
    }
    isMaintenanceActive() {
        return this.data.maintenanceEnd !== undefined &&
            this.data.maintenanceEnd !== null &&
            this.data.maintenanceEnd > Math.trunc(new Date().getTime() / 1000);
    }
    save(data) {
        return this._save(data, true);
    }
    _save(data, notifyServices) {
        this.loaded = false;
        let toSave = lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep(data);
        let converted = _utils_objectUtils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.convertBooleansToNumbers(toSave);
        const obs = this.http.post(AUTH_API, converted, httpOptions)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.shareReplay)());
        obs.subscribe({
            next: (data) => {
                this.data = data;
                this.loaded = true;
                this.toast.show("FDC config saved", { classname: 'bg-success text-white text-bold toast-font-size' });
                if (notifyServices) {
                    this.syncService.emitConfigNeedsReload(['application']);
                }
            },
            error: () => {
                this.unload();
                this.toast.show("ERROR! Data could not be saved", { classname: 'bg-danger text-white text-bold toast-font-size' });
            }
        });
        return obs;
    }
}
FdcService.ɵfac = function FdcService_Factory(t) { return new (t || FdcService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_authentication_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_toast_service_service__WEBPACK_IMPORTED_MODULE_4__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_sync_service__WEBPACK_IMPORTED_MODULE_5__.SyncService)); };
FdcService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: FdcService, factory: FdcService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3244:
/*!********************************************!*\
  !*** ./src/app/services/logout.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoutService": () => (/* binding */ LogoutService)
/* harmony export */ });
/* harmony import */ var _utils_locationUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/locationUtils */ 5359);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _authentication_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication/auth.service */ 3271);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);





const AUTH_API = _utils_locationUtils__WEBPACK_IMPORTED_MODULE_0__.LocationUtils.backendHostUrl() + '/auth/';
class LogoutService {
    constructor(authService, router, http) {
        this.authService = authService;
        this.router = router;
        this.http = http;
        this.pingOnItsWay = false;
        this.pingCounter = 0;
        this.checkForLogout();
        document.body.addEventListener('click', () => {
            if (this.authService.isLoggedIn()) {
                this.sendPing();
            }
        });
    }
    checkForLogout() {
        if (this.authService.isTimedOut() && this.router.url !== '/login') {
            this.authService.signOut();
            console.log('Automatically signed out!');
            this.router.navigateByUrl('login');
        }
        setTimeout(() => this.checkForLogout(), 1000);
    }
    sendPing() {
        if (!this.pingOnItsWay) {
            this.pingOnItsWay = true;
            console.log('Initiate ping');
            setTimeout(() => {
                this.http.get(AUTH_API + 'ping').subscribe({
                    next: () => {
                        this.pingOnItsWay = false;
                        this.pingCounter = 0;
                    },
                    error: () => {
                        this.pingOnItsWay = false;
                        ++this.pingCounter;
                        if (this.pingCounter > 2) {
                            this.authService.signOutAndShowLogin();
                        }
                    }
                });
            }, 10000);
        }
    }
}
LogoutService.ɵfac = function LogoutService_Factory(t) { return new (t || LogoutService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_authentication_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
LogoutService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: LogoutService, factory: LogoutService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9991:
/*!********************************************!*\
  !*** ./src/app/services/mailer.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MailerService": () => (/* binding */ MailerService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 9196);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_locationUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/locationUtils */ 5359);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication/auth.service */ 3271);
/* harmony import */ var _toast_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toast-service.service */ 1618);
/* harmony import */ var _sync_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sync.service */ 3395);









const AUTH_API = _utils_locationUtils__WEBPACK_IMPORTED_MODULE_1__.LocationUtils.backendHostUrl() + '/config/mailer/';
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({ 'Content-Type': 'application/json' })
};
class MailerService {
    constructor(http, authService, toast, syncService) {
        this.http = http;
        this.authService = authService;
        this.toast = toast;
        this.syncService = syncService;
        this.data = {};
        this.loaded = false;
        authService.authenticationChange.subscribe({
            next: (data) => {
                if (data.loggedIn) {
                    this.load();
                }
                else {
                    this.unload();
                }
            }
        });
        if (authService.isLoggedIn()) {
            this.load();
        }
        syncService.backendIsAvailableEvent.subscribe({
            next: (backendServiceStatus) => {
                if (!backendServiceStatus.running) {
                    this.unload();
                }
                else {
                    this.load();
                }
            }
        });
    }
    unload() {
        this.data = {};
        this.loaded = false;
    }
    load() {
        if (this.authService.isAdmin()) {
            this.loaded = false;
            let obs = this.http.get(AUTH_API);
            obs.subscribe({
                next: (data) => {
                    this.data = data;
                    this.loaded = true;
                },
                error: () => {
                    this.data = {};
                    this.loaded = false;
                }
            });
        }
    }
    update() {
        this.save(this.data);
    }
    save(data) {
        this.loaded = false;
        let toSave = lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep(data);
        const obs = this.http.post(AUTH_API, toSave, httpOptions)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.shareReplay)());
        obs.subscribe({
            next: (data) => {
                this.data = data;
                this.loaded = true;
                this.toast.show("Mailer config saved", { classname: 'bg-success text-white text-bold toast-font-size' });
                this.syncService.emitConfigNeedsReload(['mailer']);
            },
            error: () => this.unload()
        });
        return obs;
    }
}
MailerService.ɵfac = function MailerService_Factory(t) { return new (t || MailerService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_toast_service_service__WEBPACK_IMPORTED_MODULE_3__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_sync_service__WEBPACK_IMPORTED_MODULE_4__.SyncService)); };
MailerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: MailerService, factory: MailerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6465:
/*!*******************************************************!*\
  !*** ./src/app/services/socket-connection.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocketConnectionService": () => (/* binding */ SocketConnectionService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9196);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-socket-io */ 4935);
/* harmony import */ var _fdc_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fdc.service */ 1473);
/* harmony import */ var _authentication_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication/auth.service */ 3271);






class SocketConnectionService {
    constructor(socket, fdcService, auth) {
        this.socket = socket;
        this.fdcService = fdcService;
        this.auth = auth;
        this._lastReceivedDeviceStatusTime = 0;
        this._lastReceivedGroupStatusTime = 0;
        this.pingSentOn = 0;
        this.applicationPongReceivedOn = -1;
        this.mailerPongReceivedOn = -1;
        this.guibackendPongReceivedOn = -1;
        this.applicationServiceStatus = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.mailerServiceStatus = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.guibackendServiceStatus = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.connectedToNodeBackend = undefined;
        this.socketIoConnected = false;
        this.requestInterval = 1000;
        this.maxPendingTime = 20000;
        this.applicationStartupMaxTime = new Date().getTime() + 15000;
        socket.on('disconnect', (reason) => {
            console.log('Socket.IO - disconnect', reason);
        });
        socket.on('connect', () => {
            fdcService.getFdcTime();
            console.log('Socket.IO - connected');
        });
        this.checkConnection();
        this.receiveApplicationPong();
        this.receiveMailerPong();
        this.receiveGuibackendPong();
    }
    ngOnInit() {
    }
    get connectedToBackend() {
        return this.connectedToNodeBackend === true;
    }
    get lastReceivedDeviceStatus() {
        return this._lastReceivedDeviceStatus;
    }
    get lastReceivedGroupStatus() {
        return this._lastReceivedGroupStatus;
    }
    receiveDeviceStatus() {
        let obs = this.socket.fromEvent('devices/state')
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.shareReplay)());
        if (!this.deviceSubscription) {
            this.deviceSubscription = obs.subscribe({
                next: (data) => {
                    this._lastReceivedDeviceStatusTime = new Date().getTime();
                    this._lastReceivedDeviceStatus = JSON.parse(data);
                    this._deviceStatusRequestPendingSince = undefined;
                }
            });
        }
        return obs;
    }
    receiveGroupsStatus() {
        let obs = this.socket.fromEvent('groups/state')
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.shareReplay)());
        if (!this.groupSubscription) {
            this.groupSubscription = obs.subscribe({
                next: (data) => {
                    this._lastReceivedGroupStatusTime = new Date().getTime();
                    this._lastReceivedGroupStatus = JSON.parse(data);
                    this._groupStatusRequestPendingSince = undefined;
                }
            });
        }
        return obs;
    }
    requestStatus() {
        if (this.socket.ioSocket && this.socket.ioSocket.connected) {
            this.requestDeviceStatus();
            this.requestGroupStatus();
        }
        else {
            console.log('No socket.io connection...');
        }
    }
    requestServicesStatus() {
        if (this.socket.ioSocket && this.socket.ioSocket.connected) {
            this.pingSentOn = new Date().getTime();
            this.socket.emit('services/application/heartbeat/ping');
            this.socket.emit('services/mailer/heartbeat/ping');
            this.socket.emit('services/guibackend/heartbeat/ping');
            setTimeout(() => {
                const stillInAppStartupTimeslot = this.applicationStartupMaxTime > new Date().getTime();
                this.applicationServiceStatus.emit({ running: (this.applicationPongReceivedOn === -1 && stillInAppStartupTimeslot) ? undefined : ((this.applicationPongReceivedOn + 3000) > this.pingSentOn) });
                this.mailerServiceStatus.emit({ running: (this.mailerPongReceivedOn === -1 && stillInAppStartupTimeslot) ? undefined : ((this.mailerPongReceivedOn + 3000) > this.pingSentOn) });
                this.connectedToNodeBackend = (this.guibackendPongReceivedOn === -1 && stillInAppStartupTimeslot) ? undefined : ((this.guibackendPongReceivedOn + 3000) > this.pingSentOn);
                this.guibackendServiceStatus.emit({ running: this.connectedToNodeBackend });
            }, 500);
        }
        else {
            const stillInAppStartupTimeslot = this.applicationStartupMaxTime > new Date().getTime();
            this.applicationServiceStatus.emit({ running: undefined });
            this.mailerServiceStatus.emit({ running: undefined });
            this.connectedToNodeBackend = stillInAppStartupTimeslot ? undefined : false;
            this.guibackendServiceStatus.emit({ running: this.connectedToNodeBackend });
        }
    }
    requestConfigReload(subTopics) {
        subTopics.forEach((st) => this.socket.emit('services/' + st + '/config/changed', { username: this.auth.getUser().username }));
    }
    setDamperMode(damperInfo) {
        this.socket.emit('device/damper/mode/change', damperInfo);
    }
    setFdcTime(timeInfo) {
        this.socket.emit('system/time/set', timeInfo);
        setTimeout(() => {
            this.fdcService.getFdcTime();
        }, 2000);
    }
    emitMaintenanceMode(endTime) {
        this.socket.emit('services/application/maintenance/request', { end: endTime, username: this.auth.getUser().username });
    }
    repairDevices() {
        this.socket.emit('devices/repair/request', { username: this.auth.getUser().username });
    }
    checkConnection() {
        this.socketIoConnected = this.socket.ioSocket && this.socket.ioSocket.connected;
        setTimeout(() => this.checkConnection(), 250);
    }
    receiveApplicationPong() {
        let obs = this.socket.fromEvent('services/application/heartbeat/pong')
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.shareReplay)());
        if (!this.applicationPongSubscription) {
            this.applicationPongSubscription = obs.subscribe({
                next: () => this.applicationPongReceivedOn = new Date().getTime()
            });
        }
        return obs;
    }
    receiveMailerPong() {
        let obs = this.socket.fromEvent('services/mailer/heartbeat/pong')
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.shareReplay)());
        if (!this.mailerPongSubscription) {
            this.mailerPongSubscription = obs.subscribe({
                next: () => this.mailerPongReceivedOn = new Date().getTime()
            });
        }
        return obs;
    }
    receiveGuibackendPong() {
        let obs = this.socket.fromEvent('services/guibackend/heartbeat/pong')
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.shareReplay)());
        if (!this.guibackendPongSubscription) {
            this.guibackendPongSubscription = obs.subscribe({
                next: () => this.guibackendPongReceivedOn = new Date().getTime()
            });
        }
        return obs;
    }
    requestDeviceStatus() {
        let now = new Date().getTime();
        if (this._lastReceivedDeviceStatusTime < (now - this.requestInterval)) {
            if (!this._deviceStatusRequestPendingSince || this._deviceStatusRequestPendingSince < (now - this.maxPendingTime)) {
                this.socket.emit('devices/state/request');
                this._deviceStatusRequestPendingSince = new Date().getTime();
            }
            else {
                console.log('DeviceStatus request pending since' + ((now - this._deviceStatusRequestPendingSince) / 1000) + ' seconds');
            }
        }
    }
    requestGroupStatus() {
        let now = new Date().getTime();
        if (this._lastReceivedGroupStatusTime < (now - this.requestInterval)) {
            if (!this._groupStatusRequestPendingSince || this._groupStatusRequestPendingSince < (now - this.maxPendingTime)) {
                this.socket.emit('groups/state/request');
                this._groupStatusRequestPendingSince = new Date().getTime();
            }
            else {
                console.log('GroupStatus request pending since ' + ((now - this._groupStatusRequestPendingSince) / 1000) + ' seconds');
            }
        }
    }
}
SocketConnectionService.ɵfac = function SocketConnectionService_Factory(t) { return new (t || SocketConnectionService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__.Socket), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_fdc_service__WEBPACK_IMPORTED_MODULE_0__.FdcService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_authentication_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService)); };
SocketConnectionService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SocketConnectionService, factory: SocketConnectionService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3395:
/*!******************************************!*\
  !*** ./src/app/services/sync.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SyncService": () => (/* binding */ SyncService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


class SyncService {
    constructor() {
        this._configNeedsReloadEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this._applicationIsAvailableEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this._mailerIsAvailableEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this._backendIsAvailableEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    emitConfigNeedsReload(subTopic) {
        this._configNeedsReloadEvent.emit(subTopic);
    }
    emitApplicationIsAvailable(status) {
        this._applicationIsAvailableEvent.emit({ running: status });
    }
    emitMailerIsAvailable(status) {
        this._mailerIsAvailableEvent.emit({ running: status });
    }
    emitBackendIsAvailable(status) {
        this._backendIsAvailableEvent.emit({ running: status });
    }
    get configNeedsReloadEvent() {
        return this._configNeedsReloadEvent;
    }
    get applicationIsAvailableEvent() {
        return this._applicationIsAvailableEvent;
    }
    get mailerIsAvailableEvent() {
        return this._mailerIsAvailableEvent;
    }
    get backendIsAvailableEvent() {
        return this._backendIsAvailableEvent;
    }
}
SyncService.ɵfac = function SyncService_Factory(t) { return new (t || SyncService)(); };
SyncService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SyncService, factory: SyncService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4185:
/*!***************************************************!*\
  !*** ./src/app/services/system-health.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SystemHealthService": () => (/* binding */ SystemHealthService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _socket_connection_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./socket-connection.service */ 6465);
/* harmony import */ var _fdc_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fdc.service */ 1473);
/* harmony import */ var _dto_services_fda_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dto-services/fda.service */ 7576);
/* harmony import */ var _dto_services_input_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dto-services/input.service */ 6441);
/* harmony import */ var _dto_services_output_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dto-services/output.service */ 5782);
/* harmony import */ var _sync_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sync.service */ 3395);







class SystemHealthService {
    constructor(socketIo, fdcService, fdaService, socketService, inputService, outputService, syncService) {
        this.socketIo = socketIo;
        this.fdcService = fdcService;
        this.fdaService = fdaService;
        this.socketService = socketService;
        this.inputService = inputService;
        this.outputService = outputService;
        this.syncService = syncService;
        this.fdcTimeDiff = 0;
        this.applicationServiceStatus = undefined;
        this.applicationServiceStatusChanged = 0;
        this.mailerServiceStatus = undefined;
        this.mailerServiceStatusChanged = 0;
        this.guibackendServiceStatus = undefined;
        this.guibackendServiceStatusChanged = 0;
        this.allServicesRunning = false;
        this.status = {
            fdas: {
                inStatusConfigured: [],
                inStatusUnconfigured: [],
                configuredNotInStatus: []
            },
            inputs: [],
            outputs: [],
            damperGroups: [],
            busMode: undefined
        };
        this.deviceStatusSubscription = undefined;
        this.groupStatusSubscription = undefined;
        this._activeAlarms = 0;
        this._activeTimeouts = 0;
        this.processDeviceStatus(this.socketService.lastReceivedDeviceStatus);
        this.processGroupStatus(this.socketService.lastReceivedGroupStatus);
        this.onReceiveDeviceStatus();
        this.onReceiveGroupsStatus();
        syncService.backendIsAvailableEvent.subscribe({
            next: (backendStatus) => {
                if (!backendStatus.running) {
                    this.status = {
                        fdas: {
                            inStatusConfigured: [],
                            inStatusUnconfigured: [],
                            configuredNotInStatus: []
                        },
                        inputs: [],
                        outputs: [],
                        damperGroups: [],
                        busMode: undefined
                    };
                }
            }
        });
        // from component
        fdcService.fdcTimeDiffChanged.subscribe({
            next: (data) => {
                this.fdcTimeDiff = data.milliseconds;
            }
        });
        socketIo.applicationServiceStatus.subscribe({
            next: (data) => {
                let statusChanged = this.applicationServiceStatus != data.running;
                if (!data.running && statusChanged && (this.applicationServiceStatusChanged < 3)) {
                    ++this.applicationServiceStatusChanged;
                }
                else if (data.running || (statusChanged && (this.applicationServiceStatusChanged >= 3))) {
                    this.applicationServiceStatus = data.running;
                    this.applicationServiceStatusChanged = 0;
                    if (statusChanged) {
                        this.syncService.emitApplicationIsAvailable(data.running);
                    }
                }
                this.allServicesRunning = this.applicationServiceStatus === true &&
                    this.mailerServiceStatus === true && this.guibackendServiceStatus === true;
            }
        });
        socketIo.mailerServiceStatus.subscribe({
            next: (data) => {
                let statusChanged = this.mailerServiceStatus != data.running;
                if (!data.running && statusChanged && (this.mailerServiceStatusChanged < 3)) {
                    ++this.mailerServiceStatusChanged;
                }
                else if (data.running || (statusChanged && (this.mailerServiceStatusChanged >= 3))) {
                    this.mailerServiceStatus = data.running;
                    this.mailerServiceStatusChanged = 0;
                    if (statusChanged) {
                        this.syncService.emitMailerIsAvailable(data.running);
                    }
                }
                this.allServicesRunning = this.applicationServiceStatus === true &&
                    this.mailerServiceStatus === true && this.guibackendServiceStatus === true;
            }
        });
        socketIo.guibackendServiceStatus.subscribe({
            next: (data) => {
                let statusChanged = this.guibackendServiceStatus !== data.running;
                if (!data.running && statusChanged && (this.guibackendServiceStatusChanged < 3)) {
                    ++this.guibackendServiceStatusChanged;
                }
                else if (data.running || (statusChanged && (this.guibackendServiceStatusChanged >= 3))) {
                    this.guibackendServiceStatus = data.running;
                    this.guibackendServiceStatusChanged = 0;
                    if (statusChanged) {
                        this.syncService.emitBackendIsAvailable(data.running);
                    }
                }
                this.allServicesRunning = this.applicationServiceStatus === true &&
                    this.mailerServiceStatus === true && this.guibackendServiceStatus === true;
            }
        });
    }
    processLastDeviceStatus() {
        this.processDeviceStatus(this.socketService.lastReceivedDeviceStatus);
    }
    processLastGroupStatus() {
        this.processGroupStatus(this.socketService.lastReceivedGroupStatus);
    }
    get activeAlarms() {
        return this._activeAlarms;
    }
    get activeTimeouts() {
        return this._activeTimeouts;
    }
    onReceiveDeviceStatus() {
        if (!this.deviceStatusSubscription) {
            this.deviceStatusSubscription = this.socketService.receiveDeviceStatus().subscribe({
                next: (data) => {
                    this.processDeviceStatus(JSON.parse(data));
                }
            });
        }
    }
    onReceiveGroupsStatus() {
        if (!this.groupStatusSubscription) {
            this.groupStatusSubscription = this.socketService.receiveGroupsStatus().subscribe({
                next: (data) => {
                    this.processGroupStatus(JSON.parse(data));
                }
            });
        }
    }
    processDeviceStatus(data) {
        if (data) {
            this.processFdaStatus(data);
            this.processFdcStatus(data);
        }
    }
    processFdcStatus(dataArr) {
        let fdc = dataArr.find((device) => device.type === 'Fdc');
        if (fdc) {
            const configuredInputs = this.inputService.inputs;
            if (configuredInputs) {
                let inputs = configuredInputs.map((input) => {
                    return {
                        status: fdc?.inputs[input.number.toString()],
                        number: input.number,
                        inputConfigRef: this.inputService.getByNumber(input.number)
                    };
                });
                inputs = inputs.filter(i => i.inputConfigRef !== undefined);
                for (let index = this.status.inputs.length - 1; index >= 0; --index) {
                    const oldInput = this.status.inputs[index];
                    const newInput = inputs.find(input => input.number === oldInput.number);
                    if (newInput) {
                        Object.assign(oldInput, newInput);
                    }
                    else {
                        this.status.inputs.slice(index);
                    }
                }
                inputs.filter(input => this.status.inputs.find(i => i.number === input.number) === undefined).forEach(input => this.status.inputs.push(input));
                this.status.inputs.sort((a, b) => a.number - b.number);
            }
            else {
                this.status.inputs = [];
            }
            const configuredOutputs = this.outputService.outputs;
            if (configuredOutputs) {
                let outputs = configuredOutputs.map((output) => {
                    return {
                        status: fdc?.outputs[output.number.toString()],
                        number: output.number,
                        outputConfigRef: this.outputService.getByNumber(output.number)
                    };
                });
                outputs = outputs.filter(o => o.outputConfigRef !== undefined);
                for (let index = this.status.outputs.length - 1; index >= 0; --index) {
                    const oldOutput = this.status.outputs[index];
                    const newOutput = outputs.find(output => output.number === oldOutput.number);
                    if (newOutput) {
                        Object.assign(oldOutput, newOutput);
                    }
                    else {
                        this.status.outputs.slice(index);
                    }
                }
                outputs.filter(output => this.status.outputs.find(o => o.number === output.number) === undefined).forEach(output => this.status.outputs.push(output));
                this.status.outputs.sort((a, b) => a.number - b.number);
            }
            else {
                this.status.outputs = [];
            }
        }
    }
    processFdaStatus(dataArr) {
        /* get Fdas from status reply */
        let fdasCurrentStatus = dataArr.filter((device) => device.type === 'Fda2');
        fdasCurrentStatus.forEach((fda) => fda.fdaConfigRef = this.fdaService.getFdaConfigByPhysicalAddress(fda.physicalAddress));
        let foundPhysicalAdresses = fdasCurrentStatus.map(fda => fda.physicalAddress);
        let configuredAndFoundFdas = fdasCurrentStatus.filter(fda => fda.fdaConfigRef !== undefined);
        let configuredButNotFoundFdas = this.fdaService.data.filter(fda => !foundPhysicalAdresses.includes(fda.physicalAddress));
        let unconfiguredFdas = fdasCurrentStatus.filter(fda => fda.fdaConfigRef === undefined);
        let hasBusMode = dataArr.find((obj) => obj.busMode !== undefined);
        if (hasBusMode) {
            this.status.busMode = hasBusMode.busMode;
        }
        this.updateFdaStatuses(this.status.fdas.inStatusConfigured, configuredAndFoundFdas);
        this.updateFdaStatuses(this.status.fdas.inStatusUnconfigured, unconfiguredFdas);
        this.updateFdaStatuses(this.status.fdas.configuredNotInStatus, configuredButNotFoundFdas);
    }
    updateFdaStatuses(oldArr, newArr) {
        let oldPAs = oldArr.map(f => f.physicalAddress);
        let newPAs = newArr.map(f => f.physicalAddress);
        for (let index = oldArr.length - 1; index >= 0; --index) {
            if (newPAs.includes(oldArr[index].physicalAddress)) {
                this.updateFdaStatus(oldArr[index], newArr.find(newF => newF.physicalAddress === oldArr[index].physicalAddress));
            }
            else {
                oldArr.splice(index, 1);
            }
        }
        oldArr.push(...newArr.filter(newF => !oldPAs.includes(newF.physicalAddress)));
        this.status.fdas.inStatusUnconfigured.sort((a, b) => a.dynamicalAddress - b.dynamicalAddress);
        this.status.fdas.configuredNotInStatus.sort((a, b) => a.physicalAddress - b.physicalAddress);
        this.status.fdas.inStatusConfigured.sort((a, b) => a.dynamicalAddress - b.dynamicalAddress);
    }
    processGroupStatus(data) {
        try {
            if (data) {
                let dampers = this.fdaService.data.flatMap(fda => [fda.damper1, fda.damper2]);
                let damperGroupsParsed = data
                    .filter((dataGroup) => dataGroup.type === 'DamperGroup')
                    .map((dataGroup) => {
                    return {
                        id: dataGroup.id,
                        name: dataGroup.name,
                        currentAlarmState: dataGroup.currentAlarmState,
                        currentTimeoutState: dataGroup.currentTimeoutState,
                        mainDamperCount: this.fdaService.data
                            .flatMap(fda => [fda.damper1, fda.damper2])
                            .filter(damper => (damper.groups && damper.groups.includes(dataGroup.id)) && damper.damperType === 'MAIN')
                            .length,
                        auxiliaryDamperCount: this.fdaService.data
                            .flatMap(fda => [fda.damper1, fda.damper2])
                            .filter(damper => (damper.groups && damper.groups.includes(dataGroup.id)) && damper.damperType !== 'MAIN')
                            .length,
                        //dampersAvailable: dataGroup.units ? dataGroup.units.filter((d: any) => d.type === 'Damper' && d.disabled === 0).map(
                        dampersAvailable: dataGroup.units ? dataGroup.units.filter((d) => d.type === 'Damper' && d.damperMode !== 'Disabled').map((d) => {
                            d.currentStates = d.currentState.split('|').filter((st) => st !== 'Available' && st != '');
                            d.configReference = dampers.find(configuredDamper => configuredDamper.id === d.id);
                            d.stateCorrelates = SystemHealthService.damperStateCorrelatesConfig(dataGroup, d, d.configReference);
                            return d;
                        }) : [],
                        //dampersDisabled: dataGroup.units ? dataGroup.units.filter((d: any) => d.type === 'Damper' && d.disabled === 1).map(
                        dampersDisabled: dataGroup.units ? dataGroup.units.filter((d) => d.type === 'Damper' && d.damperMode === 'Disabled').map((d) => {
                            d.currentStates = d.currentState.split('|').filter((st) => st !== 'Available' && st != '');
                            d.configReference = dampers.find(configuredDamper => configuredDamper.id === d.id);
                            d.stateCorrelates = SystemHealthService.damperStateCorrelatesConfig(dataGroup, d, d.configReference);
                            return d;
                        }) : [],
                        bmaAlarm: dataGroup.bmaAlarm,
                        ventilationRequest: dataGroup.ventilationRequest,
                        ventilationAllowed: dataGroup.ventilationAllowed
                    };
                });
                // update already shown damper groups
                damperGroupsParsed.forEach(newDg => {
                    let currentDamperGroup = this.status.damperGroups.find(oldDg => oldDg.id === newDg.id);
                    if (currentDamperGroup) {
                        currentDamperGroup.currentAlarmState = newDg.currentAlarmState;
                        currentDamperGroup.currentTimeoutState = newDg.currentTimeoutState;
                        Object.assign(currentDamperGroup.bmaAlarm, newDg.bmaAlarm);
                        Object.assign(currentDamperGroup.ventilationAllowed, newDg.ventilationAllowed);
                        Object.assign(currentDamperGroup.ventilationRequest, newDg.ventilationRequest);
                        currentDamperGroup.name = newDg.name;
                        currentDamperGroup.auxiliaryDamperCount = newDg.auxiliaryDamperCount;
                        currentDamperGroup.mainDamperCount = newDg.mainDamperCount;
                        currentDamperGroup.type = newDg.type;
                        this.updateDamperList(currentDamperGroup.dampersAvailable, newDg.dampersAvailable);
                        this.updateDamperList(currentDamperGroup.dampersDisabled, newDg.dampersDisabled);
                    }
                });
                // push new damper groups
                this.status.damperGroups.push(...damperGroupsParsed.filter(newDg => !this.status.damperGroups.some(oldDg => oldDg.id === newDg.id)));
                // delete no longer present damper groups
                const newGroupIds = damperGroupsParsed.map(dg => dg.id);
                for (let i = this.status.damperGroups.length - 1; i >= 0; --i) {
                    if (!newGroupIds.includes(this.status.damperGroups[i].id)) {
                        this.status.damperGroups.splice(i, 1);
                    }
                }
                // sort dampers
                this.status.damperGroups.forEach(dg => {
                    SystemHealthService.sortDampers(dg.dampersAvailable);
                    SystemHealthService.sortDampers(dg.dampersDisabled);
                });
                let alarmCount = 0;
                let timeoutCount = 0;
                damperGroupsParsed.forEach((group) => {
                    if (this.getIsHighOr(group.bmaAlarm) || group.currentAlarmState === 1) {
                        ++alarmCount;
                    }
                    else if (group.currentTimeoutState) {
                        ++timeoutCount;
                    }
                });
                this._activeAlarms = alarmCount;
                this._activeTimeouts = timeoutCount;
            }
        }
        catch (error) {
        }
    }
    getIsHighOr(values) {
        return values.filter(value => value.currentState === 'High').length > 0;
    }
    static sortDampers(dampers) {
        dampers.sort((a, b) => {
            const sameType = a.damperType === b.damperType;
            const main = sameType ? 0 : (a.damperType === 'Main' ? -1000 : 1000);
            const physAddrNumberComparison = (a.physicalAddress + '-' + a.number).localeCompare(b.physicalAddress + '-' + b.number);
            return main + physAddrNumberComparison;
        });
    }
    updateDamperList(oldList, newList) {
        let oldIds = oldList.map(damper => damper.id);
        let newIds = newList.map(damper => damper.id);
        let deletedIds = oldIds.filter(oldId => !newIds.includes(oldId));
        let updatedIds = oldIds.filter(updatedId => newIds.includes(updatedId));
        let addedIds = newIds.filter(newId => !oldIds.includes(newId));
        // delete dampers
        for (let i = oldList.length - 1; i >= 0; --i) {
            if (deletedIds.includes(oldList[i].id)) {
                oldList.splice(i, 1);
            }
        }
        // update dampers
        for (let i = oldList.length - 1; i >= 0; --i) {
            if (updatedIds.includes(oldList[i].id)) {
                const updatedDamper = newList.find(damper => damper.id === oldList[i].id);
                if (updatedDamper) {
                    Object.assign(oldList[i], updatedDamper);
                }
            }
        }
        addedIds.forEach(id => {
            const newDamper = newList.find(damper => damper.id === id);
            if (newDamper) {
                oldList.push(newDamper);
            }
        });
    }
    static damperStateCorrelatesConfig(groupState, state, config) {
        if (!config) {
            return false;
        }
        let should;
        if (groupState.currentAlarmState === 0) {
            should = config.relayStateNormal === 0 ? 'Closed' : 'Opened';
        }
        else {
            should = config.relayStateAlarm === 0 ? 'Closed' : 'Opened';
        }
        return !state.currentState.includes('Alarm') &&
            !state.currentState.includes('Timeout') &&
            state.currentState.includes(should);
    }
    updateFdaStatus(old, newer) {
        // we do not update PhysicalAddress!
        old.status = newer.status;
        old.position = newer.position;
        old.dynamicalAddress = newer.dynamicalAddress;
        old.fdaConfigRef = this.fdaService.getFdaConfigByPhysicalAddress(old.physicalAddress);
        old.lastSeen = newer.lastSeen;
        old.discovered = newer.discovered;
        old.operational = newer.operational;
        old.nakCounter = newer.nakCounter;
        old.noFollower = newer.noFollower;
        old.triggeredRePairCount = newer.triggeredRePairCount;
        old.status = newer.status;
        old.timeoutCounter = newer.timeoutCounter;
        SystemHealthService.updateDamperStatus(old.damper1, newer.damper1);
        SystemHealthService.updateDamperStatus(old.damper2, newer.damper2);
    }
    static updateDamperStatus(oldDamper, newDamper) {
        oldDamper.currentDamperMode = newDamper.currentDamperMode;
        oldDamper.currentState = newDamper.currentState;
        oldDamper.currentStates = newDamper.currentStates;
        oldDamper.damperMode = newDamper.damperMode;
        oldDamper.damperType = newDamper.damperType;
        oldDamper.disabled = newDamper.disabled;
        oldDamper.groups = newDamper.groups;
        oldDamper.name = newDamper.name;
        oldDamper.number = newDamper.number;
        oldDamper.physicalAddress = newDamper.physicalAddress;
        oldDamper.position = newDamper.position;
        oldDamper.stateCorrelates = newDamper.stateCorrelates;
        oldDamper.type = newDamper.type;
        oldDamper.relayStateBoot = newDamper.relayStateBoot;
        oldDamper.relayStateNormal = newDamper.relayStateNormal;
        oldDamper.relayStateAlarm = newDamper.relayStateAlarm;
        oldDamper.relayStatePowerLoss = newDamper.relayStatePowerLoss;
        oldDamper.relayStateBusError = newDamper.relayStateBusError;
    }
    // from component
    get applicationServiceReachable() {
        return this.guibackendServiceStatus == true && this.applicationServiceStatus == true;
    }
    getFdcTimeDiffMinutes() {
        return Math.round(this.fdcTimeDiff / 60000);
    }
    timeDiffOk() {
        return Math.abs(this.fdcTimeDiff) <= 1800000;
    }
    groupsInAlarmState() {
        return this.status.damperGroups.filter(dg => dg.currentAlarmState > 0).length;
    }
    groupsInTimeoutState() {
        return this.status.damperGroups.filter(dg => dg.currentTimeoutState > 0 && dg.currentAlarmState === 0).length;
    }
    groupsConfigurationError() {
        return this.status.damperGroups.filter(dg => dg.bmaAlarm === undefined ||
            dg.bmaAlarm === null ||
            dg.bmaAlarm.length === 0).length;
    }
    systemHealthStatus() {
        if ((Math.abs(this.fdcService.fdcTimeDiff) <= 1800000) &&
            this.applicationServiceStatus === true &&
            this.mailerServiceStatus === true &&
            this.guibackendServiceStatus === true &&
            this.status.fdas.configuredNotInStatus.length === 0 &&
            this.status.busMode === 'Ring' &&
            this.status.damperGroups.find(dg => dg.currentAlarmState > 0) === undefined &&
            this.status.damperGroups.find(dg => dg.currentTimeoutState > 0) === undefined) {
            return SystemHealthStatus.OK;
        }
        else if (this.guibackendServiceStatus !== undefined &&
            ((Math.abs(this.fdcService.fdcTimeDiff) > 1800000) ||
                this.applicationServiceStatus === false ||
                this.mailerServiceStatus === false ||
                !this.guibackendServiceStatus) ||
            this.status.fdas.configuredNotInStatus.length > 0 ||
            this.status.busMode === 'Line' ||
            this.status.damperGroups.find(dg => dg.currentAlarmState > 0) !== undefined) {
            return SystemHealthStatus.WARNING;
        }
        else if (this.guibackendServiceStatus === undefined ||
            (this.guibackendServiceStatus && this.applicationServiceStatus === undefined) ||
            (this.guibackendServiceStatus && this.mailerServiceStatus === undefined) ||
            this.status.damperGroups.find(dg => dg.currentTimeoutState > 0 && dg.currentAlarmState === 0) !== undefined) {
            return SystemHealthStatus.LOADING;
        }
        return SystemHealthStatus.WARNING;
    }
}
SystemHealthService.ɵfac = function SystemHealthService_Factory(t) { return new (t || SystemHealthService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_socket_connection_service__WEBPACK_IMPORTED_MODULE_0__.SocketConnectionService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_fdc_service__WEBPACK_IMPORTED_MODULE_1__.FdcService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_dto_services_fda_service__WEBPACK_IMPORTED_MODULE_2__.FdaService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_socket_connection_service__WEBPACK_IMPORTED_MODULE_0__.SocketConnectionService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_dto_services_input_service__WEBPACK_IMPORTED_MODULE_3__.InputService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_dto_services_output_service__WEBPACK_IMPORTED_MODULE_4__.OutputService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_sync_service__WEBPACK_IMPORTED_MODULE_5__.SyncService)); };
SystemHealthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: SystemHealthService, factory: SystemHealthService.ɵfac, providedIn: 'root' });
var SystemHealthStatus;
(function (SystemHealthStatus) {
    SystemHealthStatus[SystemHealthStatus["OK"] = 0] = "OK";
    SystemHealthStatus[SystemHealthStatus["WARNING"] = 1] = "WARNING";
    SystemHealthStatus[SystemHealthStatus["LOADING"] = 2] = "LOADING";
})(SystemHealthStatus || (SystemHealthStatus = {}));


/***/ }),

/***/ 1618:
/*!***************************************************!*\
  !*** ./src/app/services/toast-service.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastService": () => (/* binding */ ToastService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


class ToastService {
    constructor() {
        this.toasts = [];
    }
    show(textOrTpl, options = {}) {
        this.toasts.push({ textOrTpl, ...options });
    }
    remove(toast) {
        this.toasts = this.toasts.filter(t => t !== toast);
    }
    clear() {
        this.toasts.splice(0, this.toasts.length);
    }
}
ToastService.ɵfac = function ToastService_Factory(t) { return new (t || ToastService)(); };
ToastService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ToastService, factory: ToastService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5359:
/*!****************************************!*\
  !*** ./src/app/utils/locationUtils.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationUtils": () => (/* binding */ LocationUtils)
/* harmony export */ });
class LocationUtils {
    static backendHostUrl() {
        return location.protocol + '//' + location.hostname + '/api';
    }
}


/***/ }),

/***/ 7564:
/*!**************************************!*\
  !*** ./src/app/utils/objectUtils.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObjectUtils": () => (/* binding */ ObjectUtils)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

class ObjectUtils {
    static convertBooleansToNumbers(data) {
        if (Array.isArray(data)) {
            let converted = [];
            data.forEach(value => converted.push(ObjectUtils.convertBooleansToNumbers(value)));
            return converted;
        }
        else {
            let clone = lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep(data);
            let keys = Object.keys(clone);
            keys.forEach(key => {
                if (typeof clone[key] === 'object') {
                    clone[key] = ObjectUtils.convertBooleansToNumbers(data[key]);
                }
                else if (typeof clone[key] === 'boolean') {
                    clone[key] = clone[key] ? 1 : 0; // faster than unary +
                }
            });
            return clone;
        }
    }
}


/***/ }),

/***/ 7127:
/*!********************************************************!*\
  !*** ./src/app/validators/damperGroupNameValidator.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DamperGroupNameValidator": () => (/* binding */ DamperGroupNameValidator)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 635);

class DamperGroupNameValidator {
    static createValidator(damperGroupService, shadow) {
        return (control) => {
            return damperGroupService.checkIfNameUnique({ name: control.value })
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)((result) => (shadow.name !== control.value && result) ? { usernameAlreadyExists: true } : null));
        };
    }
}


/***/ }),

/***/ 5227:
/*!***********************************************!*\
  !*** ./src/app/validators/inputValidators.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputNameValidator": () => (/* binding */ InputNameValidator),
/* harmony export */   "InputNumberValidator": () => (/* binding */ InputNumberValidator)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 635);

class InputNameValidator {
    static createValidator(inputService, shadowInput) {
        return (control) => {
            return inputService.checkIfNameUnique({ name: control.value })
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)((result) => (shadowInput.name !== control.value && result) ? { usernameAlreadyExists: true } : null));
        };
    }
}
class InputNumberValidator {
    static createValidator(inputService, shadowInput) {
        return (control) => {
            return inputService.checkIfNumberUnique({ number: control.value })
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)((result) => (shadowInput.number !== control.value && result) ? { numberAlreadyExists: true } : null));
        };
    }
}


/***/ }),

/***/ 5182:
/*!******************************************************!*\
  !*** ./src/app/validators/mailTemplateValidators.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MailTemplateEmailValidator": () => (/* binding */ MailTemplateEmailValidator),
/* harmony export */   "MailTemplateNameValidator": () => (/* binding */ MailTemplateNameValidator)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 635);


class MailTemplateNameValidator {
    static createValidator(service, shadowData) {
        return (control) => {
            return service.checkIfNameUnique({ name: control.value })
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)((result) => (shadowData.name !== control.value && result) ? { templateNameAlreadyExists: true } : null));
        };
    }
}
class MailTemplateEmailValidator {
    static createValidator() {
        return (control) => {
            let mailsValid = true;
            if (control.value.length) {
                control.value.forEach((val) => {
                    let tempInput = document.createElement('input');
                    tempInput.value = val;
                    console.log(val + ' / ' + tempInput.checkValidity());
                    tempInput.type = 'email';
                    mailsValid = mailsValid && tempInput.checkValidity();
                });
            }
            console.log(mailsValid);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(!mailsValid)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)((result) => (result) ? { templateNameAlreadyExists: true } : null));
        };
    }
}


/***/ }),

/***/ 3798:
/*!************************************************!*\
  !*** ./src/app/validators/outputValidators.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OutputNameValidator": () => (/* binding */ OutputNameValidator),
/* harmony export */   "OutputNumberValidator": () => (/* binding */ OutputNumberValidator)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 635);

class OutputNameValidator {
    static createValidator(outputService, shadow) {
        return (control) => {
            return outputService.checkIfNameUnique({ name: control.value })
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)((result) => (shadow.name !== control.value && result) ? { usernameAlreadyExists: true } : null));
        };
    }
}
class OutputNumberValidator {
    static createValidator(outputService, shadow) {
        return (control) => {
            return outputService.checkIfNumberUnique({ number: control.value })
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)((result) => (shadow.number !== control.value && result) ? { numberAlreadyExists: true } : null));
        };
    }
}


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map