import styles from '@/app/profile/profile.module.css'

export default function ProfilePage() {
    console.log(styles)
    const profile = {
        name: 'Subramanian Murugan',
        bio: 'Next.js Trainer | Micro services Consultant | Open Source Contributor'
    }
    return <div className={styles.profile}>
        <h1 style={{ backgroundColor: 'yellowgreen' }} className={styles.name}>{profile.name}</h1>
        <p className={styles.bio}>{profile.bio}</p>
    </div>

}