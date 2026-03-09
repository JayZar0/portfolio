import { Typography, Container, List, ListItemText } from "@mui/material";

export default function ExperienceComponent() {
  const experience = [
    {
      position: 'Cashier/Customer Service',
      company: 'Canadian Tire',
      years: '2022 - 2023',
      description: [
        'Worked with a team to make sure all information is relayed',
        'Controlled the flow of cashiers breaks while on customer service desk'
      ]
    },
    {
      position: 'Team Member',
      company: 'Fun Factory',
      years: '2023 - 2025',
      description: [
        'Operated web based point of sales systems',
        'Utilized card systems application which ran on oracle SQL'
      ]
    }
  ]

  return (
    <>
      <Typography variant="h6">Experience</Typography>
      <Container className='flex flex-row'>
        {experience.map((exp) => (
          <Container key={exp.company} sx={{ padding: 2 }}>
            <Typography variant="caption">{exp.position}</Typography>
            <Typography variant="subtitle1">{exp.company}</Typography>
            <Typography variant="subtitle1">{exp.years}</Typography>
            <List>
              {exp.description.map((desc) =>
                <ListItemText key={desc}>&bull; {desc}</ListItemText>
              )}
            </List>
          </Container>

        ))}
      </Container>
    </>

  )
}