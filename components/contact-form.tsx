'use client'

import type { FormEvent } from 'react'
import { getAppointmentUrl } from '@/lib/site-data'

export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const date = String(data.get('date') ?? '')
    const slot = String(data.get('slot') ?? '').trim()
    const details = String(data.get('message') ?? '').trim()
    const weddingDate = date ? date.split('-').reverse().join('/') : ''
    const message = [
      'Bonjour BINTI Bride,',
      '',
      'Je souhaite prendre rendez-vous pour un essayage de robe de mariée à Lubumbashi.',
      '',
      `Nom : ${name}`,
      ...(weddingDate ? [`Date du mariage : ${weddingDate}`] : []),
      ...(slot ? [`Créneau souhaité : ${slot}`] : []),
      ...(details ? [`Précisions : ${details}`] : []),
      '',
      'Pourriez-vous me confirmer vos disponibilités ? Merci !',
    ].join('\n')
    window.location.assign(getAppointmentUrl(message))
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-fields">
        <label>Nom complet *<input name="name" autoComplete="name" required /></label>
        <label>Date du mariage<input name="date" type="date" /></label>
        <label>Créneau souhaité<input name="slot" placeholder="Ex. samedi matin" /></label>
        <label className="field-wide">Vos envies ou questions<textarea name="message" rows={4} /></label>
      </div>
      <button className="button button-dark" type="submit">Ouvrir WhatsApp <span aria-hidden="true">↗</span></button>
      <p className="form-note">Votre message sera prérempli. Envoyez-le dans WhatsApp pour demander la confirmation du créneau.</p>
    </form>
  )
}
