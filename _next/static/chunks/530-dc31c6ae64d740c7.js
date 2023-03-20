"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[530],{8530:function(e,t,o){o.d(t,{ZP:function(){return Y},EA:function(){return J},e_:function(){return V}});var r=o(5893),n=o(7291),s=o(7294),i=o(4345),a=o(3247),l=o(3977),c=o(2393),d=o(9501),u=o(7442);let m=e=>(0,u.tm)(e),h=e=>/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),p=e=>null==e,E=e=>p(e)||0==e.length,w=(e,t)=>{if(!t)return null;let o={user:t,providerId:t.providerId,operationType:e};return o},_=e=>{switch(e){case n.F7.FACEBOOK:return"Facebook";case n.F7.GOOGLE:return"Google";case n.F7.TWITTER:return"Twitter";case n.F7.GITHUB:return"Github";default:return null}},T=()=>"FIREBASE_AUTH_FLOW_CAPTCHA_".concat(Math.round(1e6*Math.random())),I=e=>{let t=document.createElement("div"),o="".concat(T());t.setAttribute("id",o);let r=document.createElement("div");return r.setAttribute("id","".concat(o,"_PARENT")),r.setAttribute("style","width: 100vw !important; height: 50vh !important"),r.appendChild(t),document.getElementsByTagName("body")[0].appendChild(r),window.recaptchaVerifier=new n.lI(o,{size:"invisible"},e),o},g=e=>{let t=document.getElementById("".concat(e,"_PARENT"));if(t){try{window.recaptchaVerifier.clear(),delete window.recaptchaVerifier}catch(e){}document.getElementsByTagName("body")[0].removeChild(t)}},A={AUTH_FLOW_EMAIL_FOR_SIGN_IN:"AUTH_FLOW_EMAIL_FOR_SIGN_IN",AUTH_FLOW_AUTH_LINK_PENDING_CREDENTIAL:"AUTH_FLOW_AUTH_LINK_PENDING_CREDENTIAL",AUTH_FLOW_REDIRECT_CALLBACK_URL:"AUTH_FLOW_REDIRECT_CALLBACK_URL",AUTH_FLOW_REDIRECT_CALLBACK_REPLACE_URL:"AUTH_FLOW_REDIRECT_CALLBACK_REPLACE_URL",AUTH_FLOW_PHONE_OTP_SUBMITTED:"AUTH_FLOW_PHONE_OTP_SUBMITTED",AUTH_FLOW_SOCIAL_CREDENTIAL:"AUTH_FLOW_SOCIAL_CREDENTIAL",AUTH_FLOW_SOCIAL_CREDENTIAL_ERROR:"AUTH_FLOW_SOCIAL_CREDENTIAL_ERROR",AUTH_FLOW_SOCIAL_CREDENTIAL_ERROR_TEMP:"AUTH_FLOW_SOCIAL_CREDENTIAL_ERROR_TEMP",AUTH_FLOW_PROMPT_PASSWORD_SUBMITTED:"AUTH_FLOW_PROMPT_PASSWORD_SUBMITTED",AUTH_FLOW_PROMPT_EMAIL_SUBMITTED:"AUTH_FLOW_PROMPT_EMAIL_SUBMITTED",AUTH_FLOW_POLLING_STOP_FLAG:"AUTH_FLOW_POLLING_STOP_FLAG"},O={otpInputTitle:"otpInputTitle",otpInputPlaceholder:"otpInputPlaceholder",otpConfirmationButtonText:"otpConfirmationButtonText",emptyOtpError:"emptyOtpError",newPasswordInputTitle:"newPasswordInputTitle",newPasswordInputPlaceholder:"newPasswordInputPlaceholder",passwordRetypeInputTitle:"passwordRetypeInputTitle",passwordRetypeInputPlaceholder:"passwordRetypeInputPlaceholder",passwordConfirmationButtonText:"passwordConfirmationButtonText",passwordMismatchError:"passwordMismatchError",emptyPasswordError:"emptyPasswordError",passwordInputTitle:"passwordInputTitle",passwordInputPlaceholder:"passwordInputPlaceholder",emailInputTitle:"emailInputTitle",emailInputPlaceholder:"emailInputPlaceholder",emailConfirmationButtonText:"emailConfirmationButtonText",emptyEmailError:"emptyEmailError",emptyEmailAndPhoneError:"emptyEmailAndPhoneError",invalidEmailOrPhoneError:"invalidEmailOrPhoneError",emptyAuthError:"emptyAuthError",emptyFirestoreError:"emptyFirestoreError",emptyCustomDataCollectionPath:"emptyCustomDataCollectionPath",phoneHasNoEmailError:"phoneHasNoEmailError",noEmailVerificationCode:"noEmailVerificationCode",noEmailVerificationMode:"noEmailVerificationMode",invalidEmailVerificationCode:"invalidEmailVerificationCode",invalidEmailVerificationMode:"invalidEmailVerificationMode",credentialCollisionResolutionRequestTitle:"Account already exist.",credentialCollisionResolutionAcceptText:"Yes, link accounts",credentialCollisionResolutionDeclineText:"Cancel"},P={otpInputTitle:"Enter the code sent to your phone.",otpInputPlaceholder:"Enter code.",otpConfirmationButtonText:"Confirm OTP.",emptyOtpError:"No OTP entered.",newPasswordInputTitle:"New password.",newPasswordInputPlaceholder:"Enter new password.",passwordRetypeInputTitle:"Re-type password.",passwordRetypeInputPlaceholder:"Type password again.",passwordConfirmationButtonText:"Update password.",passwordMismatchError:"Your password doesn't match.",emptyPasswordError:"No password provided.",passwordInputTitle:"Password.",passwordInputPlaceholder:"Enter your password.",emailInputTitle:"Enter",emailInputPlaceholder:"Enter your email address",emailConfirmationButtonText:"Sign in",emptyEmailError:"No email provided.",emptyEmailAndPhoneError:"Please provide a email address or phone number",invalidEmailOrPhoneError:"Please provide a valid email address or phone number",emptyAuthError:"Firebase Auth is empty.",emptyFirestoreError:"Firebase Firestore is empty.",emptyCustomDataCollectionPath:"customDataCollectionPath is empty.",phoneHasNoEmailError:"No email address has been linked to your phone number. Please sign up first.",noEmailVerificationCode:"No email verification code.",noEmailVerificationMode:"No email verification mode.",invalidEmailVerificationCode:"Invalid email verification code.",invalidEmailVerificationMode:"Invalid email verification mode."},R="recaptcha-container";var S=o(3100);let C={promptPollInterval:200,messages:P,recaptchaContainerId:R,customDataCollectionPath:void 0,firestore:void 0},f=(e,t)=>{let[o,u]=(0,s.useState)(),[m,h]=(0,s.useState)(!1),[p,_]=(0,s.useState)(),[T,P]=(0,s.useState)(),[R,f]=(0,s.useState)(),[L,v]=(0,s.useState)(),[y,U]=(0,s.useState)(C);(0,s.useEffect)(()=>{U({...C,...t||{}})},[t]);let x=(t,o,r,s,i,a,c,d)=>new Promise((u,m)=>{if(e){if(r){if(e.currentUser){let n=w("signIn",e.currentUser);E(e.currentUser.phoneNumber)||e.currentUser.phoneNumber!==r?u(n):E(e.currentUser.email)&&o&&t?M(n,o,t,a).then(e=>{B(e,s,i).then(e=>{u(e)}).catch(t=>{u(e)})}).catch(e=>{m(e)}):a&&j(n,a,c,d).then(e=>{B(e,s,i).then(e=>{u(e)}).catch(t=>{u(e)})}).catch(e=>{m(e)})}else{let n;L?n=L:v(n=I(e)),window.recaptchaVerifier.verify().then(()=>{F(r,window.recaptchaVerifier,o,t,a,c,d).then(e=>{B(e,s,i).then(e=>{g(n),v(void 0),u(e)}).catch(t=>{g(n),v(void 0),u(e)})}).catch(e=>{g(n),v(void 0),m(e)})}).catch(e=>{g(n),v(void 0),m(e)})}}else if(o&&t){if(e.currentUser){let t=w("signIn",e.currentUser);a?j(t,a,c,d).then(e=>{B(e,s,i).then(e=>{u(e)}).catch(t=>{u(e)})}).catch(e=>{m(e)}):B(t,s,i).then(e=>{u(e)}).catch(e=>{u(t)})}else(0,n.Xb)(e,o,t).then(e=>{(0,n.w$)(e.user),a?j(e,a,c,d).then(e=>{u(e)}).catch(e=>{m(e)}):u(e)}).catch(e=>{m(e)})}else r||o?t||m(new l.ZR(O.emptyPasswordError,y.messages[O.emptyPasswordError])):m(new l.ZR(O.emptyEmailAndPhoneError,y.messages[O.emptyEmailAndPhoneError]))}else m(new l.ZR(O.emptyAuthError,y.messages[O.emptyAuthError]))}),F=(t,o,r,s,i,a,c)=>new Promise((d,u)=>{t&&e&&o?(0,n.$g)(e,t,o).then(e=>{N(e,r,s,i,a,c).then(e=>{d(e)}).catch(e=>{u(e)})}).catch(e=>{u(e)}):e||u(new l.ZR(O.emptyAuthError,y.messages[O.emptyAuthError]))}),N=(e,t,o,r,n,s)=>new Promise(async(i,a)=>{D().then(l=>{W(),e.confirm(l).then(e=>{t&&o?M(e,t,o,r,n,s).then(e=>{u(!0),i(e)}).catch(e=>{a(e)}):r?j(e,r,n,s).then(e=>{i(e)}).catch(e=>{a(e)}):i(e)}).catch(e=>{a(e)})}).catch(e=>{W(),a(e)})}),D=()=>new Promise((e,t)=>{h(!0),H(e,t)}),H=(e,t)=>{let o=window.sessionStorage.getItem(A.AUTH_FLOW_PHONE_OTP_SUBMITTED);console.log("pollOtp:otpRequestDone.otp",o),o?E(o)?t(new l.ZR(O.emptyOtpError,y.messages[O.emptyOtpError])):e(o):setTimeout(()=>{H(e,t)},y.promptPollInterval)},W=()=>{_(void 0),h(!1),P(!1),window.sessionStorage.removeItem(A.AUTH_FLOW_PHONE_OTP_SUBMITTED)},M=(t,o,r,s,i,a)=>new Promise((l,c)=>{let d=n.w9.credential(o,r);t.user.email?l(t):(0,n.ZJ)(t.user,d).then(t=>{u(!0),s?j(t,s,i,a).then(e=>{l(e)}).catch(t=>{null==e||e.signOut(),c(t)}):l(t)}).catch(t=>{null==e||e.signOut(),c&&c(t)})}),j=(e,t,o,r)=>new Promise((n,s)=>{if((r||y.firestore)&&(o||y.customDataCollectionPath)){let i=(0,a.JU)(r||y.firestore,o||y.customDataCollectionPath,e.user.uid);(0,a.QT)(i).then(o=>{o.exists()?n(e):(0,a.pl)(i,{...t,uid:e.user.uid}).then(()=>{u(!0),n(e)}).catch(e=>{s(e)})}).catch(e=>{s(e)})}else r&&y.firestore?o&&y.customDataCollectionPath||s(new l.ZR(O.emptyCustomDataCollectionPath,y.messages[O.emptyCustomDataCollectionPath])):s(new l.ZR(O.emptyFirestoreError,y.messages[O.emptyFirestoreError]))}),b=(e,t,o,r)=>new Promise((n,s)=>{if((r||y.firestore)&&(o||y.customDataCollectionPath)){let i=(0,a.JU)(r||y.firestore,o||y.customDataCollectionPath,e.uid);(0,a.pl)(i,{...t,uid:e.uid},{merge:!0}).then(()=>{n(e)}).catch(e=>{s(e)})}else r&&y.firestore?o&&y.customDataCollectionPath||s(new l.ZR(O.emptyCustomDataCollectionPath,y.messages[O.emptyCustomDataCollectionPath])):s(new l.ZR(O.emptyFirestoreError,y.messages[O.emptyFirestoreError]))}),B=(e,t,o)=>new Promise((r,s)=>{if(E(t)&&E(o))r(e);else{let i={};t&&!E(t)&&(i.displayName=t),o&&!E(o)&&(i.photoURL=o),(0,n.ck)(e.user,i).then(()=>{r(e)}).catch(e=>{s(e)})}}),Z=()=>{f(""),p&&0!=p.length?window.sessionStorage.setItem(A.AUTH_FLOW_PHONE_OTP_SUBMITTED,p):f(y.messages[O.emptyOtpError])},k=()=>(0,r.jsx)(S.xu,{children:m?(0,r.jsxs)(i.Z,{title:y.messages[O.otpInputTitle],isOpen:!0,onClose:()=>{_(void 0),window.sessionStorage.setItem(A.AUTH_FLOW_PHONE_OTP_SUBMITTED,"")},children:[(0,r.jsx)(c.Z,{tpe:c.Z.TYPES.text,mb:4,title:y.messages[O.otpInputTitle],placeholder:y.messages[O.otpInputPlaceholder],value:p,onChange:e=>{_(e)},errorMessage:R}),(0,r.jsx)(d.Z,{onClick:Z,loading:!E(p)&&T,children:y.messages[O.otpConfirmationButtonText]})]}):null});return{signUp:x,updateCustomData:b,onSignUpPrompt:k}};var L=o(2752),v=o(1963),y=o(1948),U=o(4504),x=o(8911),F=o(4641),N=o(3793),D=o(7018),H=o(5154);let W=e=>{let{bg:t,color:o,children:n,placement:s,onClose:i,isOpen:a,isClosable:l,title:c,footer:d,hideModeSwitch:u,h:m,height:h,...p}=e;return(0,r.jsxs)(L.u_,{onClose:i||(()=>{}),isOpen:a,isCentered:!0,children:[(0,r.jsx)(v.Z,{}),(0,r.jsxs)(y.h,{bg:t,color:o,minH:m||h||"50vh",w:{base:"95%",md:"650px"},borderRadius:"16px !important",children:[(0,r.jsxs)(U.x,{borderBottomWidth:"1px",w:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",children:[(0,r.jsx)(x.x,{as:"div",fontSize:{base:"1.1rem",md:"1.3rem"},textTransform:"capitalize",children:c}),(0,r.jsx)(F.U,{children:i&&(l||void 0===l)?(0,r.jsx)(S.xu,{onClick:i,cursor:"pointer",display:"block",children:(0,r.jsx)(H.aHS,{size:"24px"})}):null})]}),(0,r.jsx)(N.f,{...p,children:n}),(0,r.jsx)(D.m,{children:d})]})]})},M={promptPollInterval:200,messages:P,recaptchaContainerId:R,actionCodeSettings:void 0,sendEmailVerificationLink:!1},j=(e,t)=>{let[o,i]=(0,s.useState)(!1),[a,u]=(0,s.useState)(),[p,w]=(0,s.useState)(),[_,T]=(0,s.useState)(),[P,R]=(0,s.useState)(),[C,f]=(0,s.useState)(M);(0,s.useEffect)(()=>{t=t||{};let e={...t};if(!t.actionCodeSettings||E(t.actionCodeSettings.url)){var o;e.actionCodeSettings={...t.actionCodeSettings||{},url:null==window?void 0:null===(o=window.location)||void 0===o?void 0:o.href}}f({...M,...e})},[t]);let L=(t,o,r)=>new Promise((s,i)=>{if(e){if(m(t)){let r;P?r=P:R(r=I(e)),window.recaptchaVerifier.verify().then(()=>{v(t,window.recaptchaVerifier,o).then(e=>{g(r),R(void 0),s(e)}).catch(e=>{g(r),R(void 0),i(e)})}).catch(e=>{g(r),R(void 0),i(e)})}else h(t)?o&&0!=o.length?N(t,o).then(e=>{let t=e.user;!t.emailVerified&&C.sendEmailVerificationLink?(0,n.w$)(t,r||C.actionCodeSettings).then(()=>{s(e)}).catch(e=>{i(e)}):s(e)}).catch(e=>{i(e)}):(0,n.oo)(e,t,r||C.actionCodeSettings).then(()=>{window.localStorage.setItem(A.AUTH_FLOW_EMAIL_FOR_SIGN_IN,t),s(null)}).catch(e=>{i(e)}):i(new l.ZR(O.invalidEmailOrPhoneError,C.messages[O.invalidEmailOrPhoneError]))}else i(new l.ZR(O.emptyAuthError,C.messages[O.emptyAuthError]))}),v=(t,o,r)=>new Promise((s,i)=>{t&&e&&o?(console.log("signIn:onRecaptchaResult.1","phone",t,"auth",e,"appVerifier",o),(0,n.$g)(e,t,o).then(n=>{console.log("signIn:onRecaptchaResult.2","phone",t,"auth",e,"appVerifier",o),y(n,r).then(r=>{console.log("signIn:onRecaptchaResult.3","phone",t,"auth",e,"appVerifier",o),s(r)}).catch(r=>{console.log("signIn:onRecaptchaResult.4","phone",t,"auth",e,"appVerifier",o,"error",r),i(r)})}).catch(r=>{console.log("signIn:onRecaptchaResult.5","phone",t,"auth",e,"appVerifier",o,"error",r),i(r)})):e?console.log("signIn:onRecaptchaResult.7","phone",t,"auth",e,"appVerifier",o):(console.log("signIn:onRecaptchaResult.6","phone",t,"auth",e,"appVerifier",o),i(new l.ZR(O.emptyAuthError,C.messages[O.emptyAuthError])))}),y=(t,o)=>new Promise(async(r,n)=>{console.log("signIn:onConfirmationResult.","result",t,"password",o),U().then(s=>{console.log("signIn:onConfirmationResult.","result",t,"password",o),F(),console.log("signIn:onConfirmationResult.","result",t,"password",o),t.confirm(s).then(t=>{console.log("signIn:onConfirmationResult.","result",t,"password",o);let s=t.user;o&&e?s.email&&h(s.email)?N(s.email,o).then(e=>{r(e)}).catch(t=>{e.signOut().then(()=>{n(t)}).catch(e=>{n(e)})}):e.signOut().then(()=>{n(new l.ZR(O.phoneHasNoEmailError,C.messages[O.phoneHasNoEmailError]))}).catch(e=>{n(e)}):r(t)}).catch(e=>{console.log("signIn:onConfirmationResult.","result",t,"password",o,"error",e),n(e)})}).catch(e=>{F(),console.log("signIn:onConfirmationResult.","result",t,"password",o,"error",e),n(e)})}),U=()=>new Promise((e,t)=>{i(!0),x(e,t)}),x=(e,t)=>{let o=window.sessionStorage.getItem(A.AUTH_FLOW_PHONE_OTP_SUBMITTED);console.log("pollOtp:otpRequestDone.otp",o,o?"true":"false"),o?E(o)?t(new l.ZR(O.emptyOtpError,C.messages[O.emptyOtpError])):e(o):setTimeout(()=>{x(e,t)},C.promptPollInterval)},F=()=>{u(void 0),i(!1),w(!1),window.sessionStorage.removeItem(A.AUTH_FLOW_PHONE_OTP_SUBMITTED)},N=(t,o)=>new Promise((r,s)=>{e?(0,n.e5)(e,t,o).then(e=>{r(e)}).catch(e=>{s(e)}):s(new l.ZR(O.emptyAuthError,C.messages[O.emptyAuthError]))}),D=()=>{T(""),a&&0!=a.length?window.sessionStorage.setItem(A.AUTH_FLOW_PHONE_OTP_SUBMITTED,a):T(C.messages[O.emptyOtpError])},H=()=>(0,r.jsx)(S.xu,{children:o?(0,r.jsxs)(W,{title:C.messages[O.otpInputTitle],isOpen:!0,onClose:()=>{u(void 0),window.sessionStorage.setItem(A.AUTH_FLOW_PHONE_OTP_SUBMITTED,"")},children:[(0,r.jsx)(c.Z,{tpe:c.Z.TYPES.text,mb:4,title:C.messages[O.otpInputTitle],placeholder:C.messages[O.otpInputPlaceholder],value:a,onChange:e=>{u(e)},errorMessage:_}),(0,r.jsx)(d.Z,{onClick:D,loading:!E(a)&&p,children:C.messages[O.otpConfirmationButtonText]})]}):null});return{signIn:L,onSignInPrompt:H}},b=e=>{var t=e||"";if(!t.includes("?"))return{};{t=t.substring(t.indexOf("?")+1);let e=JSON.parse('{"'+decodeURI(t).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}');return e}};function B(){let[e,t]=(0,s.useState)({});return(0,s.useEffect)(()=>{if(window.location.href){let e=b(window.location.href);t(e||{})}},[]),e}var Z=function(e,t){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:200,i=arguments.length>3?arguments[3]:void 0,a=arguments.length>4?arguments[4]:void 0,[u,m]=(0,s.useState)(P);(0,s.useEffect)(()=>{m({...P,...t||{}})},[t]);let h=B();(0,s.useEffect)(()=>{e&&(0,n.JB)(e,window.location.href)&&L()},[h&&e]);let[p,w]=(0,s.useState)(),[_,T]=(0,s.useState)(!1),[I,g]=(0,s.useState)(),[R,S]=(0,s.useState)(),[C,f]=(0,s.useState)(),L=()=>{e?(w("signInWithEmailLink"),v().then(t=>{U(),(0,n.P6)(e,t,window.location.href).then(e=>{w(null),i&&i(h,e)}).catch(e=>{w(null),a&&a(h,e)})}).catch(e=>{w(null),U(),a&&a(h,e)})):a&&a(h,new l.ZR(O.emptyAuthError,u[O.emptyAuthError]))},v=()=>new Promise((e,t)=>{let o=window.localStorage.getItem(A.AUTH_FLOW_EMAIL_FOR_SIGN_IN);o&&o.length>0?(window.localStorage.removeItem(A.AUTH_FLOW_EMAIL_FOR_SIGN_IN),e(o)):(T(!0),y(e,t))}),y=(e,t)=>{let r=window.sessionStorage.getItem(A.AUTH_FLOW_PROMPT_EMAIL_SUBMITTED);console.log("pollEmail:email",r),r?r&&!E(r)?e(r):t(new l.ZR(O.emptyEmailError,u[O.emptyEmailError])):setTimeout(()=>{y(e,t)},o)},U=()=>{T(!1),g(void 0),f(!1),window.sessionStorage.removeItem(A.AUTH_FLOW_PROMPT_EMAIL_SUBMITTED)},x=()=>{S(""),E(I)?S(u[O.emptyEmailError]):(window.sessionStorage.setItem(A.AUTH_FLOW_PROMPT_EMAIL_SUBMITTED,I),f(!0))},F=()=>_?(0,r.jsxs)(W,{title:u[O.emailInputTitle],isOpen:!0,onClose:()=>{g(void 0),window.sessionStorage.setItem(A.AUTH_FLOW_PROMPT_EMAIL_SUBMITTED,"")},children:[(0,r.jsx)(c.Z,{tpe:c.Z.TYPES.text,mb:4,title:u[O.emailInputTitle],placeholder:u[O.emailInputPlaceholder],value:I,onChange:e=>{g(e)},errorMessage:R}),(0,r.jsx)(d.Z,{onClick:x,loading:!E(I)&&C,children:u[O.emailConfirmationButtonText]})]}):null;return{pendingEmailSignInCallback:p,onEmailSignInCallbackPrompt:F}};let k={verifyEmail:"verifyEmail",recoverEmail:"recoverEmail",resetPassword:"resetPassword"};var V=function(e,t){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:200,i=arguments.length>3?arguments[3]:void 0,a=arguments.length>4?arguments[4]:void 0,u=arguments.length>5?arguments[5]:void 0,m=arguments.length>6?arguments[6]:void 0,{pendingEmailSignInCallback:h,onEmailSignInCallbackPrompt:p}=Z(e,t,o,i,a),[_,T]=(0,s.useState)(P);(0,s.useEffect)(()=>{T({...P,...t||{}})},[t]);let I=B();(0,s.useEffect)(()=>{e&&(I.oobCode?j(I.oobCode,I.mode):a&&a(I,new l.ZR(O.noEmailVerificationCode,_[O.noEmailVerificationCode])))},[I&&e]);let[g,R]=(0,s.useState)(),[C,f]=(0,s.useState)(!1),[L,v]=(0,s.useState)(),[y,U]=(0,s.useState)(),[x,F]=(0,s.useState)(),[N,D]=(0,s.useState)(),[H,M]=(0,s.useState)(),j=(e,t)=>{switch(t){case k.verifyEmail:b(e);break;case k.recoverEmail:V(e);break;case k.resetPassword:G(e);break;default:if(a){let e=E(t)?new l.ZR(O.noEmailVerificationMode,_[O.noEmailVerificationMode]):new l.ZR(O.invalidEmailVerificationMode,_[O.invalidEmailVerificationMode]);a(I,e)}}},b=t=>{e?(R(I.mode),(0,n.iA)(e,t).then(()=>{R(null),i&&i(I,w("link",e.currentUser))}).catch(e=>{R(null),a&&a(I,e)})):a&&a(I,new l.ZR(O.emptyAuthError,_[O.emptyAuthError]))},V=t=>{e?(R(I.mode),(0,n.bX)(e,t).then(o=>{R(null);let r=o.data.email;(0,n.iA)(e,t).then(()=>{m&&r?(0,n.LS)(e,r).then(()=>{R(null),i&&i(I,w("link",e.currentUser))}).catch(e=>{R(null),a&&a(I,e)}):(R(null),i&&i(I,w("link",e.currentUser)))}).catch(e=>{R(null),a&&a(I,e)})}).catch(e=>{R(null),a&&a(I,e)})):a&&a(I,new l.ZR(O.emptyAuthError,_[O.emptyAuthError]))},G=t=>{e?(R(I.mode),(0,n.TX)(e,t).then(o=>{J().then(r=>{Y(),(0,n.LG)(e,t,r).then(()=>{(0,n.e5)(e,o,r).then(e=>{R(null),i&&i(I,e)}).catch(e=>{R(null),a&&a(I,e)})}).catch(e=>{R(null),a&&a(I,e)})}).catch(e=>{R(null),Y(),a&&a(I,e)})}).catch(e=>{R(null),a&&a(I,e)})):a&&a(I,new l.ZR(O.emptyAuthError,_[O.emptyAuthError]))},J=()=>new Promise((e,t)=>{f(!0),K(e,t)}),K=(e,t)=>{let r=window.sessionStorage.getItem(A.AUTH_FLOW_PROMPT_PASSWORD_SUBMITTED);console.log("pollPassword:password",r),r?r&&!E(r)?e(r):t(new l.ZR(O.emptyPasswordError,_[O.emptyPasswordError])):setTimeout(()=>{K(e,t)},o)},Y=()=>{f(!1),v(void 0),M(!1),window.sessionStorage.removeItem(A.AUTH_FLOW_PROMPT_PASSWORD_SUBMITTED)},z=()=>{F(""),D("")},q=()=>{z(),E(L)?F(_[O.emptyPasswordError]):E(y)?D(_[O.emptyPasswordError]):L===y||u?(window.sessionStorage.setItem(A.AUTH_FLOW_PROMPT_PASSWORD_SUBMITTED,L),M(!0)):D(_[O.passwordMismatchError])},$=()=>C?(0,r.jsxs)(S.xu,{children:[C?(0,r.jsxs)(W,{title:_[O.newPasswordInputTitle],isOpen:!0,onClose:()=>{v(void 0),window.sessionStorage.setItem(A.AUTH_FLOW_PROMPT_PASSWORD_SUBMITTED,"")},children:[(0,r.jsx)(c.Z,{tpe:c.Z.TYPES.password,mb:4,title:_[O.newPasswordInputTitle],placeholder:_[O.newPasswordInputPlaceholder],value:L,onChange:e=>{v(e)},errorMessage:x}),u?null:(0,r.jsx)(c.Z,{tpe:c.Z.TYPES.password,mb:4,title:_[O.passwordRetypeInputTitle],placeholder:_[O.passwordRetypeInputPlaceholder],value:L,onChange:e=>{U(e)},errorMessage:N}),(0,r.jsx)(d.Z,{onClick:q,loading:!E(L)&&H,children:_[O.passwordConfirmationButtonText]})]}):null,p()]}):null;return{pendingCallback:g||h,onCallbackPrompt:$}},G=function(e,t){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:200,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:J,a=arguments.length>4?arguments[4]:void 0,u=arguments.length>5?arguments[5]:void 0,[m,h]=(0,s.useState)(P);(0,s.useEffect)(()=>{h({...P,...t||{}})},[t]);let[p,_]=(0,s.useState)(!1),[T,I]=(0,s.useState)(),[g,R]=(0,s.useState)(),[S,C]=(0,s.useState)(),[f,L]=(0,s.useState)(),[v,y]=(0,s.useState)(""),[U,N]=(0,s.useState)(""),[D,H]=(0,s.useState)();(0,s.useEffect)(()=>{if(e){let t=(0,n.Aj)(e,t=>{if(t){let e=window.sessionStorage.getItem(A.AUTH_FLOW_AUTH_LINK_PENDING_CREDENTIAL);if(e&&t.email){window.sessionStorage.removeItem(A.AUTH_FLOW_AUTH_LINK_PENDING_CREDENTIAL);try{let o=n.jh.fromJSON(e);(0,n.ZJ)(t,o).then(r=>{console.log("PendingUserCredLinked:userCredential",r,"currentUser",t,"pendingCred",o,"pendingCredJSon",JSON.parse(e)),a?(M(),a(r)):j()}).catch(r=>{console.log("PendingUserCredLinked:error1",r,"currentUser",t,"pendingCred",o,"pendingCredJSon",JSON.parse(e)),u&&u(r)})}catch(e){console.log("PendingUserCredLinked:error2",e),u&&u(e)}}else a?(M(),a(w("signIn",t))):j()}else(0,n.cx)(e).catch(e=>{Y(e).catch(e=>{u&&u(e)})})});return()=>{t()}}},[e]);let M=()=>{try{window.sessionStorage.removeItem(A.AUTH_FLOW_REDIRECT_CALLBACK_URL)}catch(e){}},j=()=>{let e=window.sessionStorage.getItem(A.AUTH_FLOW_REDIRECT_CALLBACK_URL);e&&(window.sessionStorage.removeItem(A.AUTH_FLOW_REDIRECT_CALLBACK_URL),window.location.href=e)},b=(t,o,r)=>e?o?K(e,t,r):B(e,t):new Promise((e,t)=>{t(new l.ZR(O.emptyAuthError,m[O.emptyAuthError]))}),B=(e,t)=>(Z(e,t),new Promise((e,t)=>{k().then(t=>{G(),e(t)}).catch(e=>{G(),t(e)})})),Z=(e,t)=>{(0,n.rh)(e,t).then(e=>{window.sessionStorage.setItem(A.AUTH_FLOW_SOCIAL_CREDENTIAL,JSON.stringify(e))}).catch(e=>{Y(e,!0).then(e=>{window.sessionStorage.setItem(A.AUTH_FLOW_SOCIAL_CREDENTIAL,JSON.stringify(e))}).catch(e=>{window.sessionStorage.setItem(A.AUTH_FLOW_SOCIAL_CREDENTIAL_ERROR,JSON.stringify(e))})})},k=()=>new Promise((e,t)=>{V(e,t)}),V=(e,t)=>{let r=window.sessionStorage.getItem(A.AUTH_FLOW_SOCIAL_CREDENTIAL),n=window.sessionStorage.getItem(A.AUTH_FLOW_SOCIAL_CREDENTIAL_ERROR);console.log("pollOtp:otpRequestDone.credential",r,"credentialError",n),r||n?r?e(JSON.parse(r)):n&&t(JSON.parse(n)):setTimeout(()=>{V(e,t)},o)},G=()=>{window.sessionStorage.removeItem(A.AUTH_FLOW_SOCIAL_CREDENTIAL),window.sessionStorage.removeItem(A.AUTH_FLOW_SOCIAL_CREDENTIAL_ERROR)},K=(e,t,o)=>(o&&window.sessionStorage.setItem(A.AUTH_FLOW_REDIRECT_CALLBACK_URL,o),(0,n.F6)(e,t)),Y=(t,o)=>new Promise((r,s)=>{if(e&&"auth/account-exists-with-different-credential"===t.code){var i=t.credential;let a=t.email;(0,n.Nr)(e,a).then(l=>{"password"===l[0]?$().then(t=>(Q(),(0,n.e5)(e,a,t))).then(e=>(0,n.ZJ)(e.user,i)).then(e=>{r(e)}).catch(e=>{s(e)}):(y(i.providerId),N(l[0]),q(l[0])?z(i,r,s,t,o):s(t))})}else s(t)}),z=(e,t,o,r,n)=>{window.sessionStorage.setItem(A.AUTH_FLOW_AUTH_LINK_PENDING_CREDENTIAL,JSON.stringify(e.toJSON())),window.sessionStorage.setItem(A.AUTH_FLOW_SOCIAL_CREDENTIAL_ERROR_TEMP,JSON.stringify(r)),n?(window.resolutionResolve=t,window.resolutionReject=o):H(!0),L(!0)},q=e=>{switch(e){case n.F7.FACEBOOK:return new n._O;case n.F7.GOOGLE:return new n.hJ;case n.F7.TWITTER:return new n.c4;case n.F7.GITHUB:return new n.GH;default:return null}},$=()=>new Promise((e,t)=>{_(!0),X(e,t)}),X=(e,t)=>{let r=window.sessionStorage.getItem(A.AUTH_FLOW_PROMPT_PASSWORD_SUBMITTED);console.log("pollPassword:password",r),r?E(r)?t(new l.ZR(O.emptyPasswordError,m[O.emptyPasswordError])):e(r):setTimeout(()=>{X(e,t)},o)},Q=()=>{_(!1),I(void 0),C(!1),window.sessionStorage.removeItem(A.AUTH_FLOW_PROMPT_PASSWORD_SUBMITTED)},ee=()=>{R(""),E(T)?R(m[O.emptyPasswordError]):(window.sessionStorage.setItem(A.AUTH_FLOW_PROMPT_PASSWORD_SUBMITTED,T),C(!0))},et=()=>p?(0,r.jsxs)(W,{title:m[O.passwordInputTitle],isOpen:!0,onClose:()=>{I(void 0),window.sessionStorage.setItem(A.AUTH_FLOW_PROMPT_PASSWORD_SUBMITTED,"")},children:[(0,r.jsx)(c.Z,{tpe:c.Z.TYPES.password,mb:4,title:m[O.passwordInputTitle],placeholder:m[O.passwordInputPlaceholder],value:T,onChange:e=>{I(e)},errorMessage:g}),(0,r.jsx)(d.Z,{onClick:ee,loading:!E(T)&&S,children:m[O.passwordConfirmationButtonText]})]}):null,eo=()=>{L(void 0),C(!0);let e=window.sessionStorage.getItem(A.AUTH_FLOW_SOCIAL_CREDENTIAL_ERROR_TEMP);e&&window.sessionStorage.setItem(A.AUTH_FLOW_SOCIAL_CREDENTIAL_ERROR,e)},er=()=>f?(0,r.jsxs)(W,{title:m[O.credentialCollisionResolutionRequestTitle],isOpen:!0,onClose:eo,children:[(0,r.jsx)(x.x,{as:"div",mb:4,children:i(v,U)}),(0,r.jsxs)(F.U,{justifyContent:"space-between",alignItems:"flex-start",children:[(0,r.jsx)(d.Z,{onClick:()=>{let t=q(U);e&&t&&(D?K(e,t):((0,n.rh)(e,t).then(e=>{window.sessionStorage.setItem(A.AUTH_FLOW_SOCIAL_CREDENTIAL,JSON.stringify(e))}).catch(e=>{window.sessionStorage.setItem(A.AUTH_FLOW_SOCIAL_CREDENTIAL_ERROR,JSON.stringify(e))}),L(!1)))},loading:!E(T)&&S,children:m[O.credentialCollisionResolutionAcceptText]}),(0,r.jsx)(d.Z,{onClick:eo,loading:!E(T)&&S,children:m[O.credentialCollisionResolutionDeclineText]})]})]}):null,en=()=>(0,r.jsxs)(r.Fragment,{children:[et(),er()]}),es=(e,t)=>b(new n._O,e,t),ei=(e,t)=>b(new n.hJ,e,t),ea=(e,t)=>b(new n.c4,e,t),el=(e,t)=>b(new n.GH,e,t);return{socialSignIn:b,socialSignInPopUp:B,socialSignInRedirect:K,faceBookSignIn:es,googleSignIn:ei,twitterSignIn:ea,githubSignIn:el,handleAuthErrors:Y,onSocialSignInPrompt:en}};let J=(e,t)=>{let o=_(e),n=_(t);return(0,r.jsx)(x.x,{as:"div",textAlign:"center",children:o&&n?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x.x,{children:"An error occurred because there is a ".concat(n," account with the same email address as this ").concat(o," account.")}),(0,r.jsx)(x.x,{children:"Would you like to link the two accounts to resolve the error?"})]}):o?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x.x,{children:"An error occurred because there is an account with the same email address as this ".concat(o," account.")}),(0,r.jsx)(x.x,{children:"Would you like to link the two accounts to resolve the error?"})]}):n?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x.x,{children:"An error occurred because there is a ".concat(n," account with the same email address as this account.")}),(0,r.jsx)(x.x,{children:"Would you like to link the two accounts to resolve the error?"})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x.x,{children:"An error occurred because there an account with the same email address as this account."}),(0,r.jsx)(x.x,{children:"Would you like to link the two accounts to resolve the error?"})]})})},K=(e,t)=>{let{socialSignIn:o,socialSignInPopUp:s,socialSignInRedirect:i,faceBookSignIn:a,googleSignIn:c,twitterSignIn:d,githubSignIn:u,onSocialSignInPrompt:m}=G(e,null==t?void 0:t.messages,null==t?void 0:t.promptPollInterval,null==t?void 0:t.onCredentialResolutionRequestMessage),{signUp:h,onSignUpPrompt:p}=f(e,t),{signIn:w,onSignInPrompt:_}=j(e,t),{pendingCallback:T,onCallbackPrompt:I}=V(e,null==t?void 0:t.messages,null==t?void 0:t.promptPollInterval,null==t?void 0:t.onCallbackSuccess,null==t?void 0:t.onCallbackFailure,null==t?void 0:t.skipPasswordRetype,null==t?void 0:t.sendPasswordResetEmailOnEmailRecovered),g=(o,r)=>new Promise((s,i)=>{if(e){var a,c;let l={...(null==t?void 0:t.actionCodeSettings)||{},...r||{},url:null==window?void 0:null===(a=window.location)||void 0===a?void 0:a.href};if(E(l.url))e:null==window||null===(c=window.location)||void 0===c||c.href;(0,n.LS)(e,o,l).then(()=>{s(null)}).catch(e=>{i(e)})}else i(new l.ZR(O.emptyAuthError,((null==t?void 0:t.messages)||P)[O.emptyAuthError]))}),A=()=>(0,r.jsxs)(r.Fragment,{children:[p(),_(),m(),I()]});return{signUp:h,signIn:w,resetPassword:g,socialSignIn:o,socialSignInPopUp:s,socialSignInRedirect:i,faceBookSignIn:a,googleSignIn:c,twitterSignIn:d,githubSignIn:u,onAuthPrompt:A,pendingCallback:T}};var Y=K},9501:function(e,t,o){var r=o(5893),n=o(2498),s=o(9222),i=o(4641),a=o(3100),l=o(8911),c=o(3136);let d=e=>{let{as:t,onClick:o,children:d,variant:u,bgColor:m,outlineColor:h,leftIcon:p,rightIcon:E,loading:w,disabled:_,...T}=e,I=m||(0,n.ff)("colorAccent.light","colorAccent.dark"),g=h||(0,n.ff)("colorAccentDestination.light","colorAccentDestination.dark");return(0,r.jsx)(s.z,{as:t||"button",cursor:"pointer",disabled:_||w,onClick:e=>{o&&!(_||w)&&o(e)},display:"inline-flex",justifyContent:"center",alignItems:"center",p:"0px 24px",h:"48px",letterSpacing:"0.03em",textAlign:"center",borderRadius:"16px",bg:"outline"==u?"transparent":I,border:"outline"==u?"2px solid":"none",borderColor:"outline"==u?g:"transparent",color:"outline"==u?g:"#fff",boxShadow:"ghost"==u||"outline"==u?"none":"rgb(14 14 44 / 40%) 0px -1px 0px 0px inset",opacity:"ghost"==u?"0.8":"1",transition:"background-color 0.2s ease 0s, opacity 0.2s ease 0s",_hover:{opacity:"0.65",border:"none !important"},_disabled:{opacity:"0.65",cursor:"not-allowed"},...T,children:(0,r.jsxs)(i.U,{justifyContent:"center",alignItems:"center",children:[p?(0,r.jsx)(a.xu,{mr:"7px",children:p}):null,(0,r.jsx)(l.x,{as:"div",children:d}),w?(0,r.jsx)(a.xu,{as:c.g4,display:"inline",width:"20%",height:"20%",color:"#fff"}):E?(0,r.jsx)(a.xu,{ml:"7px",children:E}):null]})})};t.Z=d}}]);