import React from "react"
import styles from "./index.module.css"

type CommitterData = {
    name: string,
    apacheId: string,
    githubId: string,
    url: string,
    timezone: string,
}

// sorted by apacheId
const committers: CommitterData[] = [
    {name: 'Jordan Zimmerman', apacheId: 'randgalt', githubId: 'Randgalt', url: 'https://people.apache.org/~randgalt', timezone: '-5'},
    {name: 'Jay Zarfoss', apacheId: 'zarfide', githubId: 'zarfide', url: 'https://www.linkedin.com/pub/jay-zarfoss/34/56/a19', timezone: '-8'},
    {name: 'Eric Tschetter', apacheId: 'cheddar', githubId: 'cheddar', url: '', timezone: '-6'},
    {name: 'Ioannis Canellos', apacheId: 'iocanel', githubId: 'iocanel', url: 'https://iocanel.blogspot.com', timezone: '+2'},
    {name: 'Cameron McKenzie', apacheId: 'cammckenzie', githubId: 'cammckenzie', url: 'https://people.apache.org/~cammckenzie', timezone: '+10'},
    {name: 'Scott Blum', apacheId: 'dragonsinth', githubId: 'dragonsinth', url: 'https://github.com/dragonsinth', timezone: '-5'},
    {name: 'Mike Drob', apacheId: 'mdrob', githubId: 'madrob', url: 'https://people.apache.org/~mdrob', timezone: '-6'},
    {name: 'Patrick Hunt', apacheId: 'phunt', githubId: 'phunt', url: 'https://www.linkedin.com/pub/patrick-hunt/2/5b2/24a', timezone: '-8'},
    {name: 'Mahadev Konar', apacheId: 'mahadev', githubId: 'mahadevkonar', url: 'https://www.linkedin.com/in/mahadevkonar', timezone: '-8'},
    {name: 'Luciano Resende', apacheId: 'lresende', githubId: 'lresende', url: 'https://people.apache.org/~lresende', timezone: '-8'},
    {name: 'Enis Söztutar', apacheId: 'enis', githubId: 'enis', url: 'https://people.apache.org/~enis', timezone: '-8'},
    {name: 'Fangmin Lyu', apacheId: 'fangmin', githubId: 'lvfangmin', url: 'https://people.apache.org/~fangmin', timezone: '-8'},
    {name: 'Shay Shimony', apacheId: 'shayshim', githubId: 'shayshim', url: 'https://people.apache.org/~shayshim', timezone: '+2'},
    {name: 'Enrico Olivelli', apacheId: 'eolivelli', githubId: 'eolivelli', url: 'https://people.apache.org/~eolivelli', timezone: '+1'},
    {name: 'Zili Chen', apacheId: 'tison', githubId: 'tisonkun', url: 'https://tisonkun.org', timezone: '+8'},
    {name: 'Kezhu Wang', apacheId: 'kezhuw', githubId: 'kezhuw', url: 'https://blog.kezhuw.name/', timezone: '+8'},
]

export default function Committers(): React.JSX.Element {
    return <>
        <table>
            <thead>
            <tr>
                <th><b>Avatar</b></th>
                <th><b>Name</b></th>
                <th><b>Apache ID</b></th>
                <th><b>GitHub ID</b></th>
                <th><b>URL</b></th>
                <th><b>Time Zone</b></th>
            </tr>
            </thead>
            <tbody>
            {committers
                .sort((c0, c1) => c0.apacheId.localeCompare(c1.apacheId))
                .map(v => (
                    <tr key={v.name}>
                        <td><img width={64} className={styles.contributorAvatar}
                                 src={`https://github.com/${v.githubId}.png`} alt={v.name}/></td>
                        <td>{v.name}</td>
                        <td>{v.apacheId}</td>
                        <td><a target={"_blank"} href={`https://github.com/${v.githubId}`}>{v.githubId}</a></td>
                        <td><a target={"_blank"} href={`${v.url}`}>{v.url}</a></td>
                        <td>{v.timezone}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
}
