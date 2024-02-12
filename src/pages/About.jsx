import {skills, experiences} from '../constants'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import CTA from '../components/CTA'

const About = () => {
  return (
    <section className="max-container">
      {/* About */}
      <h1 className="head-text">Hello I&apos;m <span className="blue-gradient_text font-semibold drop-shadow">Paul</span></h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>Software Developer based in New Zealand, specializing in hand-on learning & building applications</p>
      </div>
      <a target='_blank' href="https://drive.google.com/file/d/1hFHbUSKfLLrSHzoPpPhjKim86J1IZg1E/view?usp=share_link" rel="noreferrer"><button className='btn mt-6'>Download CV</button></a>
      
      {/* Skills */}
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div key={skill.name} className='text-center'>
            <div className='block-container w-20 h-20'>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img src={skill.imageUrl} alt="skill.name" className='w-1/2 h-1/2 object-contain' />
              </div> 
            </div>
            <p className='pt-4'>{skill.name}</p>
            </div>     
            ))}
        </div>
      </div>
      {/* Experience */}
      <div className='py-16'>
        <h3 className='subhead-text'>Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>During my 15-week bootcamp at Dev Academy Aotearoa, I significantly enhanced my technical and human skills, complemented by hands-on experiences at distinguished establishments such as Distinction Hotel, Kinloch Manor & Villas, and Lakeland Queen Cruise, where I refined my culinary expertise and mastered effective time management. Here&apos;s the rundown:</p>  
        </div>
        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
              key={experience.company_name}
              company_name={experience.company_name}
              date={experience.date}
              icon={<div className='flex justify-center items-center w-full h-full'>
                <img 
                src={experience.icon} 
                alt={experience.company_name}
                className='w-[60%] h-[60%] object-contain' />
              </div>}
              iconStyle={{background: experience.iconBg}}
              contentStyle={{
                borderBottom: '8px',
                borderStyle: 'solid',
                borderBottomColor: experience.iconBg,
                boxShadow: 'none'
              }}>
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p className='text-black-500 font-medium font-base' style={{margin:0}}>
                    {experience.company_name}
                  </p>
                </div>
                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point) => (
                    <li key={`experience-point-${index}`} className='text-black-500/50 font-normal pl-1 text-sm'>
                      {point}
                    </li>
                    
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      {/* CTA */}
      <hr className='border-slate-200' />
      <CTA />
    </section>
  )
}

export default About