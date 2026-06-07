import { redirect } from 'next/navigation'

export default function AccountPage() {
  // In a real app, this would check authentication session
  // For this skeleton, we redirect to the dashboard which serves as the account view
  redirect('/dashboard')
}
