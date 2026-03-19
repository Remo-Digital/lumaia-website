'use client'
import { useEffect, useState } from 'react'

declare global {
  interface Window {
    hbspt: {
      forms: {
        create: (config: { portalId: string; formId: string; region: string; target: string }) => void
      }
    }
  }
}

interface Props {
  portalId?: string
  formId?: string
  region?: string
  consentText: string
  privacyHref: string
  privacyLabel: string
}

export default function HubSpotForm({
  portalId = '5625458',
  formId = 'ad72af02-88e1-495f-a8b5-c6ae0cf1b99a',
  region = 'na1',
  consentText,
  privacyHref,
  privacyLabel,
}: Props) {
  const [consented, setConsented] = useState(false)

  useEffect(() => {
    const scriptId = 'hs-forms-script'

    function initForm() {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId,
          formId,
          region,
          target: '#hs-form-target',
        })
      }
    }

    if (document.getElementById(scriptId)) {
      initForm()
      return
    }

    const script = document.createElement('script')
    script.id = scriptId
    script.src = '//js.hsforms.net/forms/embed/v2.js'
    script.charset = 'utf-8'
    script.type = 'text/javascript'
    script.onload = initForm
    document.head.appendChild(script)
  }, [portalId, formId, region])

  // Inject consent checkbox before submit button once form renders
  useEffect(() => {
    const target = document.getElementById('hs-form-target')
    if (!target) return

    const observer = new MutationObserver(() => {
      const submitBtn = target.querySelector<HTMLElement>('.hs-button, input[type="submit"]')
      if (submitBtn && !target.querySelector('#gdpr-consent')) {
        const label = document.createElement('label')
        label.id = 'gdpr-consent'
        label.className = 'gdpr-consent-label'
        label.innerHTML = `
          <input type="checkbox" id="gdpr-consent-cb" />
          <span>${consentText} <a href="${privacyHref}" target="_blank" rel="noopener noreferrer">${privacyLabel}</a></span>
        `
        label.querySelector('input')?.addEventListener('change', e => {
          setConsented((e.target as HTMLInputElement).checked)
        })
        submitBtn.closest('.hs-submit') ? submitBtn.closest('.hs-submit')!.before(label) : submitBtn.before(label)
        observer.disconnect()
      }
    })

    observer.observe(target, { childList: true, subtree: true })
    return () => observer.disconnect()
  }, [consentText, privacyHref, privacyLabel])

  // Block form submission until consent is given
  useEffect(() => {
    const target = document.getElementById('hs-form-target')
    if (!target) return
    const handler = (e: Event) => {
      if (!consented) e.preventDefault()
    }
    target.addEventListener('submit', handler, true)
    return () => target.removeEventListener('submit', handler, true)
  }, [consented])

  return (
    <>
      <style>{`
        #hs-form-target .hs-form {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        #hs-form-target .hs-form-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        #hs-form-target label {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
        }
        #hs-form-target input[type="text"],
        #hs-form-target input[type="email"],
        #hs-form-target input[type="tel"],
        #hs-form-target textarea,
        #hs-form-target select {
          width: 100%;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          padding: 12px 16px;
          font-size: 0.875rem;
          color: #fff;
          outline: none;
          transition: border-color 0.2s;
          appearance: none;
          -webkit-appearance: none;
        }
        #hs-form-target input[type="text"]::placeholder,
        #hs-form-target input[type="email"]::placeholder,
        #hs-form-target input[type="tel"]::placeholder,
        #hs-form-target textarea::placeholder {
          color: rgba(255,255,255,0.2);
        }
        #hs-form-target input:focus,
        #hs-form-target textarea:focus,
        #hs-form-target select:focus {
          border-color: rgba(123,232,159,0.4);
        }
        #hs-form-target select option {
          background: #0d0822;
          color: #fff;
        }
        #hs-form-target textarea {
          resize: none;
          min-height: 120px;
        }
        #hs-form-target .hs-fieldtype-booleancheckbox label,
        #hs-form-target .hs-form-booleancheckbox label {
          font-size: 0.75rem;
          text-transform: none;
          letter-spacing: 0;
          color: rgba(255,255,255,0.25);
          display: flex;
          align-items: flex-start;
          gap: 8px;
          cursor: pointer;
        }
        #hs-form-target .hs-form-booleancheckbox input[type="checkbox"] {
          width: 14px;
          height: 14px;
          flex-shrink: 0;
          margin-top: 2px;
          accent-color: #7be89f;
        }
        #hs-form-target .hs-error-msgs {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        #hs-form-target .hs-error-msgs label {
          font-size: 0.7rem;
          color: rgba(255, 100, 100, 0.8);
          text-transform: none;
          letter-spacing: 0;
        }
        #hs-form-target .hs-button,
        #hs-form-target input[type="submit"] {
          background: rgba(123,232,159,0.05);
          border: 1px solid rgba(123,232,159,0.18);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          color: #7be89f;
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          padding: 12px 24px;
          border-radius: 12px;
          cursor: pointer;
          transition: background 0.2s, opacity 0.2s;
          width: auto;
          align-self: flex-start;
        }
        #hs-form-target .hs-button:hover,
        #hs-form-target input[type="submit"]:hover {
          background: rgba(123,232,159,0.1);
        }
        .hs-consent-blocked #hs-form-target .hs-button,
        .hs-consent-blocked #hs-form-target input[type="submit"] {
          opacity: 0.35;
          pointer-events: none;
          cursor: not-allowed;
        }
        #hs-form-target .submitted-message {
          color: #7be89f;
          font-size: 0.95rem;
          padding: 16px 0;
        }
        #hs-form-target .hs_recaptcha,
        #hs-form-target .hs-recaptcha {
          margin-top: 4px;
        }
        #hs-form-target .legal-consent-container {
          font-size: 0.7rem;
          color: rgba(255,255,255,0.2);
        }
        #hs-form-target fieldset {
          border: none;
          padding: 0;
          margin: 0;
          max-width: 100% !important;
        }
        #hs-form-target .form-columns-2 .hs-form-field {
          width: 100%;
        }
        #hs-form-target .form-columns-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        @media (max-width: 640px) {
          #hs-form-target .form-columns-2 {
            grid-template-columns: 1fr;
          }
        }
        .gdpr-consent-label {
          display: flex !important;
          align-items: flex-start !important;
          gap: 10px !important;
          text-transform: none !important;
          letter-spacing: 0 !important;
          font-size: 0.75rem !important;
          color: rgba(255,255,255,0.28) !important;
          cursor: pointer !important;
          font-weight: 400 !important;
          line-height: 1.5 !important;
          margin-bottom: 4px !important;
        }
        .gdpr-consent-label input[type="checkbox"] {
          width: 14px !important;
          height: 14px !important;
          flex-shrink: 0 !important;
          margin-top: 2px !important;
          accent-color: #7be89f !important;
          cursor: pointer !important;
        }
        .gdpr-consent-label a {
          color: rgba(123,232,159,0.6) !important;
          text-decoration: underline !important;
          transition: color 0.2s !important;
        }
        .gdpr-consent-label a:hover {
          color: #7be89f !important;
        }
      `}</style>

      <div className={consented ? '' : 'hs-consent-blocked'}>
        <div id="hs-form-target" />
      </div>
    </>
  )
}
