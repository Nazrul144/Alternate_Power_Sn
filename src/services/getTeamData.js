export const getTeamData = async()=>{
    const res = await fetch('http://localhost:3000/team/api')
    const teams = await res.json()
    return teams;
}