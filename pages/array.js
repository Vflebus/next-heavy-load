export default function Array() {
    const array = []
    for (let i = 0; i <= 10000; i++) {
        array.push({
            id: i,
            name: 'data ' + i
        })
    }
    return (
        <ul>
            {array.map(row => {
                return (
                    <li key={row.id}>{row.name}</li>
                )
            })}
        </ul>
    )
}