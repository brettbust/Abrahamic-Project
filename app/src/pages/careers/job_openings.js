import React from "react";
import ReturnHome from "../../components/Buttons/returnhome.js";

const JobOpenings = () => {  

    return (

<div style={styles.container}>
            <h1>Careers on abrahamic, Job Openings, Internships, Volunteering and much more...</h1>
            
<h2>
Part time or fulltime
</h2>

<p>Are you passionate about Abrahamic and searching for a job within the Abrahamic Ecosystem?</p>

<p>Some positions will offer 50% remote work, allowing you to work from anywhere in the world with a flexible schedule. However, the other 50% of the work will require physical presence in various settings such as offices, labs, schools, organizations, non-profits, hospitals, blood centers, excavation/archeological sites, communities, or support causes, etc.</p>

<h3>Unpaid Internships</h3>
<p>Unpaid internships are short-term work arrangements where individuals, often students or recent graduates, gain practical experience in a specific field or industry. The duration of an unpaid internship can vary widely, depending on factors like the intern's level of education and experience, project location, research and development, training, site projects, construction projects, or assistance projects. Unpaid internships primarily provide educational or training benefits to the intern and do not replace the work of regular employees.</p>

<h3>Paid Internships</h3>
<p>Paid internships involve offering interns a regular wage or salary for their work during the internship period. Pay rates for interns can vary widely, depending on factors like the intern's level of education and experience, project location, lab, research and development center, and other specific areas of contribution. Paid internships primarily provide educational or training benefits to the intern and do not replace the work of regular employees.</p>

<p><strong>Important Note:</strong> Whether an internship is paid or unpaid, it should provide valuable learning experiences and an opportunity for interns to apply their knowledge in a real-world context. Employers should communicate clear expectations, responsibilities, and the compensation structure (if applicable) to interns before they start their internships. Additionally, interns may receive certificates, letters of recommendation, or public acknowledgments as part of their internship experience. When the interns finish the assignment, they have to fill out another internal application for our review, and we may consider you for a full-time or part-time position, depending on the effort and qualifications.</p>

<h3>Volunteering Positions</h3>
<p>Volunteering positions, or volunteer roles/opportunities, are positions in which individuals donate their time and skills to support a cause, organization, or community without expecting financial compensation. Volunteering is driven by a desire to contribute to a particular cause, help others, gain experience, or simply give back to the community.</p>

<h3>Key points about volunteering positions include:</h3>
<ul>
    <li>No Financial Compensation: Volunteers do not receive monetary payment for their work. Instead, they offer their services on a voluntary basis.</li>
    <li>Varied Roles: Volunteer opportunities can be found in various fields, including nonprofits, charities, schools, hospitals, environmental organizations, and more. Volunteers can take on roles ranging from assisting with events, providing administrative support, mentoring, teaching, or contributing their specialized skills, such as medical expertise or legal advice.</li>
    <li>Duration: Volunteering roles can be short-term or long-term, depending on the needs of the organization and the availability of the volunteer. Some volunteers commit to a few hours or days, while others dedicate more extended periods of time.</li>
    <li>Benefits: Volunteers often gain personal and professional benefits from their experiences, including skill development, networking opportunities, a sense of fulfillment, and the satisfaction of making a positive impact on others or a cause they care about.</li>
    <li>Legal and Ethical Considerations: Laws and regulations regarding volunteering can vary by country and region. It's important for both volunteers and organizations to understand any legal requirements or guidelines related to volunteering, including issues like liability and insurance.</li>
    <li>Recognition: Many organizations recognize the contributions of volunteers through certificates, letters of recommendation, or public acknowledgments.</li>
</ul>

<h3>Volunteer Opportunities</h3>
<p>In the near future, we will be offering a wide range of volunteer opportunities within a flexible and welcoming atmosphere. It's an opportunity to give back to the community on your own schedule, with no long-term commitment required. Please note that volunteers must be at least 18 years old or older, and we will provide training to ensure you're prepared for your role. The time commitment is a minimum of 2 hours per day for each sign-up.</p>

<p><strong>NOTE:</strong> We do not have openings right at this moment, but soon we will be adding jobs and projects. Keep an eye out for upcoming job openings and career opportunities.</p>

<h3>Our Mission</h3>
<p>We are unwavering in our commitment to always do what is right. We cultivate a team mentality that celebrates collective achievements. We work with a clear sense of purpose and consistently aim to exceed expectations. We extend our hands to others and nurture good citizenship. We maintain constant vigilance in our pursuit of operational enhancements. Our values are rooted in integrity, teamwork, growth, operational excellence, community care, and a relentless drive for continuous improvement.</p>

<h3>Our Purpose</h3>
<p>We firmly believe that every individual possesses untapped potential. Each of us has the capacity to grow into a better version of ourselves, which ultimately contributes to a better society. The driving force behind our actions is a commitment to continuous improvement. We extend a warm welcome to you, valuing your unique abilities and talents. We hold a profound belief in the intrinsic worth of diligent effort. Our sole and unwavering purpose is to assist others in their journey to develop careers that encompass a healthier body, a sharper mind, and a more resilient spirit.</p>

<div>
            <ReturnHome/>
        </div>
            
        </div>
        
    );
};


const styles = {
    container: {
        backgroundColor: "#041f26",
        color: "white",
        padding: "20px",
        boxShadow: "0px 0px 10px #282c34",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "justify",
    },
    title: {
        textAlign: "center",
        fontSize: "36px",
        margin: "0 0 20px 0"
    },
    p: {
        textAlign: "justify",
    }
};


export default JobOpenings;
