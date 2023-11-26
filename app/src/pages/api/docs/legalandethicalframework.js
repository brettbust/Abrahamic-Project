import React from 'react';
import security_image from "../../../images/security_image.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";
import ReturnHome from '../../../components/Buttons/returnhome';

const LegalAndEthicalFramework = () => {

    const [showOptions, setShowOptions] = useState(false);

    const scrollToTopRef = useRef(null);

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Legal and Ethical Framework</h1>
            
            <section>
        <h2>OUR DNA VALUES: Individual and Team</h2>
        <p>
            Our talented individuals constitute our most valuable resource. Nevertheless, they can only attain the extraordinary by collaborating as a unified team. Through the cultivation of integrity, excellence, and generosity, we afford each of our individuals the chance to unleash their full potential – and to be a part of something greater. Abrahamic DNA, born from the essence of racing, epitomizes the power of a lifelong passion and the beauty of boundless human achievement, forging timeless icons for an ever-changing world. Abrahamic will always spring forth from innovation. The continuous pursuit of enduring milestones is what propels the ecosystem forward. Our capacity to merge groundbreaking technological solutions with an exceptional internal ecosystem is what empowers us to craft timeless icons in a rapidly changing world.
        </p>
        <p>
            Passion to accomplish a successful future: The Abrahamic Passion to accomplish a successful future endures emotions that transcend our technology, research, and development, evolving into a way of life. Nothing excites us more than setting ambitious targets and expectations, only to surpass them, thereby pushing every boundary. This is how the force of passion transforms into the beauty of achievement.
        </p>
    </section>

    <section>
        <h2>BUSINESS: Elevating Excellence</h2>
        <p>
            Abrahamic will represent a global standard of exclusivity, performance, and quality. Our prestige stands as a testament to decades of ecosystem success and the unmatched style of our products that will be implemented as we grow with the help of the research and development team and services, renowned for their innovation, technological ability, and foundational values. Our aspiration is to craft exclusive, authentic, and extraordinary experiences for our cherished clients, resolute traders, and valued investors in everything we undertake.
        </p>
        <p>
            In strict adherence to our Code of Conduct, our Practices occupy the zenith of our internal regulatory framework. They not only encapsulate the core values of Abrahamic but also serve as guiding principles that steer our actions. These Practices delineate the fundamental rules and principles that govern the Group's operations and the conduct expected from Abrahamic People. Furthermore, they extend their purview to encompass third parties whenever applicable, ensuring the continuity of our unwavering commitment to excellence.
        </p>
    </section>

    <section>
        <h2>GOVERNANCE: Upholding Ethical Excellence</h2>
        <h3>PRACTICES: The Pillars of Ethical Excellence</h3>
        <p>
            In strict alignment with our esteemed Code of Conduct, the Practices occupy the paramount position within our internal regulatory framework. These Practices serve as the embodiment of Abrahamic core values and wield a pivotal role in steering our operations. At their essence, the Practices establish the fundamental rules and principles that chart the course of the Group's activities. They not only govern the behavior embraced by Abrahamic People but also extend their influence, where relevant, to third-party engagements. Our commitment to ethical excellence is personified by these Practices, as they underpin the foundation of our governance, ensuring that our actions and interactions consistently adhere to the highest standards of integrity and ethics.
        </p>
    </section>

    <section>
        <h2>HUMAN RIGHTS: Fostering Dignity and Ethical Excellence</h2>
        <p>
            At Abrahamic, we believe that a business built upon unwavering ethics and integrity, rooted in the inherent dignity of every human being, is not only a fundamental value within the Abrahamic Ecosystem but also a pivotal driver for the prosperity of our enterprise. As elucidated in our Code of Conduct ("Code"), Abrahamic ardently endeavors to cultivate an environment that champions these values. We seek to establish a culture that not only upholds but also rewards ethical conduct among all members of our workforce. This, in turn, fosters a collaborative working environment where the dignity of every individual is held in the highest regard. In our unwavering commitment to safeguard the fundamental human rights enshrined within the laws and regulations of every country in which we will operate, as well as in alignment with globally recognized international standards ("Human Rights"), Abrahamic has instituted the Human Rights Practice ("Practice").
        </p>
        <p>
            Practice constitutes an integral facet of Abrahamic mission, culture, and heritage. It serves as a resounding testament to our Group's dedication to upholding, protecting, and promoting Human Rights. Our commitment extends across multiple domains: (i) within the workplace, encompassing our operations and activities; (ii) throughout our expansive supply chain; (iii) in our interactions with society and local communities; and (iv) in any other context wherein Abrahamic exercises its influence. Through the Practice, Abrahamic endeavors to furnish all members of the Abrahamic Workforce, as well as our esteemed Abrahamic Stakeholders, with a comprehensive set of principles, values, and guidelines. These must be diligently adhered to in all circumstances, ensuring the utmost protection of Human Rights for all individuals directly or indirectly affected by Abrahamic operations. Our commitment to Human Rights is not merely a promise but an integral part of our identity, reflecting our dedication to a more ethical and inclusive world.
        </p>
            </section>
            
            <section>
        <h2>ANTI-CORRUPTION: Upholding Integrity and Compliance</h2>
        <p>
            As emphatically underscored within Abrahamic internal Code of Conduct, aptly named "Our Code," our organization stands unwaveringly committed to the highest echelons of integrity, honesty, and fairness in every facet of our internal and external dealings. It is an unshakable principle that Abrahamic unequivocally denounces and forbids all forms of bribery.
        </p>
        <p>
            To fortify our commitment and ensure steadfast adherence to the array of Anti-Corruption Laws that govern our operations, Abrahamic has instituted an Anticorruption Compliance Program, hereinafter referred to as "Our Program." This program constitutes a meticulously structured system of regulations and controls, meticulously designed to thwart corruption-related transgressions. Furthermore, it diligently incorporates the requisites and guidance stipulated in the proclamation of October 23, 2023, pertaining to the "anti-bribery management system." Build by Abrahamic management team internally.
        </p>
        <p>
            The bedrock of Our Program, the Anticorruption Compliance Practice, hereinafter referred to as "Our Practice," epitomizes the principles and values enshrined within Our Code. It serves as the cornerstone of the program, delineating the overarching code of conduct that demands adherence not only from Abrahamic directors, officers, and employees but also from all individuals laboring within the expansive Abrahamic Ecosystem, both domestically and internationally, in either a direct capacity or as representatives of Abrahamic. The tenets and guidelines set forth in Our Practice are further expounded upon within each internal procedure, which provides detailed anticorruption standards and controls tailored to specific activities that may entail inherent corruption risks.
        </p>
        <p>
            At the apex of our organizational hierarchy, Abrahamic upper management exhibits an unwavering commitment to this cause. They will play a pivotal strategic role in the comprehensive implementation of Our Program, ensuring the active engagement of all employees and the unwavering alignment of their actions with the values enshrined within it, in what we term as "The Top and all." Through this resolute commitment, we fortify our stance against corruption and reiterate our dedication to upholding the highest standards of ethical conduct and compliance.
        </p>
    </section>

    <section>
        <h2>ANTITRUST COMPLIANCE: Upholding Fair Competition</h2>
        <p>
            As enshrined within the records of our Code of Conduct, aptly termed "Our Code," the Abrahamic Ecosystem wholeheartedly acknowledges the paramount significance of fostering a competitive marketplace. It is committed to unwavering compliance with all extant antitrust and pro-competition legislation within the countries wherein it conducts its operations.
        </p>
        <p>
            Competition, defined as the dynamic market milieu that drives businesses to excel in the quality and accessibility of their offerings, stands as a cornerstone of Abrahamic corporate culture. It represents an intrinsic core value that guides every operational and strategic decision within the Ecosystem.
        </p>
        <p>
            To reinforce our unwavering dedication to fostering fair and unfettered competition, Abrahamic has implemented the Antitrust Compliance Practice, hereinafter referred to as "Our Practice." This practice draws inspiration from the principles meticulously outlined in Our Code and lays down the codified rules of conduct, which must be scrupulously adhered to at the Group level, ensuring steadfast compliance with Antitrust Laws.
        </p>
        <p>
            Our Practice, particularly in reference to specific domains deemed sensitive or susceptible to antitrust implications, delineates comprehensive guidelines and foundational principles that all members of the Abrahamic Workforce are duty-bound to follow. Moreover, it prescribes the actions and potential controls that they must undertake to preempt antitrust transgressions.
        </p>
        <p>
            In fortifying our commitment to preserving fair and open competition, we reaffirm our dedication to the highest standards of ethical conduct and legal compliance within the Abrahamic Ecosystem.
        </p>
    </section>

    <section>
        <h2>THIRD-PARTIES COMPLIANCE: Upholding Legal and Ethical Standards</h2>
        <p>
            As meticulously articulated within the Abrahamic Code of Conduct, aptly named "Our Code," Abrahamic stands resolutely committed to unwavering adherence to all prevailing laws and regulations. This commitment extends beyond our organization to encompass our Third Parties, who are unequivocally expected to demonstrate compliance with these laws during their activities conducted on behalf of Abrahamic.
        </p>
        <p>
            To effectively implement and fortify the principles enshrined within Our Code, Abrahamic has instituted the Third Parties Compliance Practice, hereinafter referred to as "Our Practice." This practice meticulously delineates the overarching code of conduct that must be scrupulously adhered to when engaging with all Third Parties. This encompasses both active and passive counterparties, as well as any prospective Third Parties contemplating business dealings with Abrahamic.
        </p>
        <p>
            Abrahamic is unequivocally committed to collaborating exclusively with Third Parties that fulfill specific criteria encompassing compliance with extant laws and regulations, as well as adherence to ethical, integrous, and transparent standards. To this end, Our Practice underscores the paramount importance of conducting a comprehensive "compliance evaluation" prior to establishing any business relationships. This evaluation serves to assess and mitigate potential risks, thereby safeguarding Abrahamic assets, integrity, and reputation, within the context of an overarching and enduring perspective.
        </p>
        <p>
            Third Parties, in turn, are earnestly requested to uphold Abrahamic ethical principles and standards. This obligation is an explicit and indispensable contractual commitment inherent in all commercial relationships. In so doing, Abrahamic Third Parties become active proponents, not only within their own organizations but also among their respective Third Parties, fostering a culture of compliance, integrity, and transparency that permeates every facet of our collective business interactions.
        </p>
    </section>

    <section>
        <h2>STAKEHOLDER ENGAGEMENT: Fostering Effective Collaboration and Communication</h2>
        <p>
            In strict alignment with the tenets of effective communication elucidated within the hallowed Abrahamic Code of Conduct, herein referred to as "Our Code," the Abrahamic Ecosystem firmly acknowledges the pivotal role that clear and effective communication plays in cultivating robust internal and external relationships and achieving the highest standards of corporate excellence. Indeed, creating a climate of rapid, transparent, and bidirectional communication stands as an indispensable cornerstone of our enduring success.
        </p>
        <p>
            In staunch adherence to this fundamental principle, and in furtherance of Abrahamic strategic objectives, the organization firmly asserts that establishing and refining effective communication and collaboration channels with both internal and external stakeholders are of paramount importance. Such endeavors are deemed essential for the creation and dissemination of value, with the overarching goal of harmonizing divergent interests and expectations.
        </p>
        <p>
            Concretely, Abrahamic is resolute in its commitment to exhibit fairness and integrity in all interactions with others, actively fostering constructive relationships grounded in mutual trust with all those who either influence or are influenced by our activities. The approach of the Abrahamic Ecosystem towards stakeholder engagement, therefore, pivots on the principles of forthrightness, clarity, and efficacy in communication and consultation, underpinned by a continuous and open dialogue.
        </p>
        <p>
            Abrahamic firmly subscribes to the belief that a multi-stakeholder approach, fortified by unwavering dedication, stands as a cornerstone of sustainable and enduring growth. This approach strives to attain a just equilibrium in addressing the interests and expectations of all entities interfacing with the Ecosystem.
        </p>
        <p>
            With these principles firmly entrenched, and with the aim of fortifying our commitment to robust stakeholder engagement, Abrahamic has formally instituted the Stakeholder Engagement Practice. This practice draws inspiration from the values and principles enshrined within Our Code and endeavors to provide comprehensive guidelines on the appropriate methods and modalities of interaction with diverse stakeholders. It stands as a testament to Abrahamic dedication to fostering harmonious, constructive, and enduring relationships with all its stakeholders.
        </p>
            </section>
            
            <section>
        <h2>ABRAHAMIC ECOSYSTEM TAX STRATEGY: A Blueprint for Fiscal Responsibility</h2>
        <p>
            The cornerstone of the Abrahamic governance model resides in the meticulously crafted Code of Conduct. This Code, duly sanctioned by the esteemed Board of Directors of Abrahamic (hereinafter referred to as "Abrahamic" or the "Abrahamic Ecosystem"), serves as the guiding beacon for tax management. It encapsulates a compendium of values that command recognition, unwavering adherence, and steadfast promotion by Abrahamic, even in matters pertaining to taxation.
        </p>
        <p>
            In consequence of this steadfast commitment, the Abrahamic Tax Strategy, firmly rooted in the principles enshrined within the Code of Conduct, is subject to ratification by the Board of Directors of the Abrahamic Ecosystem. This strategy extends its purview to encompass Abrahamic and its affiliated subsidiaries, collectively defined as the "Abrahamic Ecosystem."
        </p>
        <p>
            The hallowed responsibility of ensuring alignment between the Ecosystem's compliance practices and the Tax Strategy falls squarely within the ambit of the Audit Committee of Abrahamic. This imposing body is tasked with the meticulous oversight of the Ecosystem's fiscal practices to guarantee their seamless harmony with the Tax Strategy's overarching objectives.
        </p>
    </section>

    <section>
        <h2>TAX VALUES: Upholding Fiscal Integrity</h2>
        <p>
            In resonance with the precepts delineated in the Code of Conduct, Abrahamic tax management endeavors are underpinned by a steadfast commitment to the following core tax values.
        </p>
        <p>
            <strong>Integrity:</strong> Abrahamic holds itself to the highest echelons of integrity when it comes to tax accounting and tax compliance. This unwavering commitment entails the payment of taxes in adherence to all legal obligations within any given authority, strictly following the regulatory framework established by governing authorities.
        </p>
        <p>
            For this very reason, Abrahamic ardently pledges to diligently align the locus of taxation with the locus of value creation, thereby ensuring the payment of legally mandated taxes in the precise authority and at the designated juncture.
        </p>
        <p>
            Moreover, Abrahamic has meticulously engineered internal control mechanisms that serve as bulwarks safeguarding the integrity and precision of all financial transactions. It is these transactions that form the bedrock upon which tax computations are meticulously crafted. Such internal controls are essential for maintaining a pristine record of all business transactions, which, in turn, underpin the calculation of tax liabilities.
        </p>
        <p>
            <strong>Zero Tolerance:</strong> A Pillar of Unwavering Commitment
        </p>
        <p>
            In its unwavering pursuit to uphold the global reputation of the Abrahamic Ecosystem, decisions taken by our esteemed management and board of directors resoundingly echo the principle of zero tolerance. Abrahamic stands resolute in its resolve to abjure any form of transgression and diligently adheres to the corpus of applicable tax laws and regulations that govern our multifaceted operations.
        </p>
        <p>
            This commitment is not merely lip service but is substantiated through the robust implementation of preemptive measures. Abrahamic leaves no stone unturned in assiduously fortifying its Tax Strategy, which serves as a bastion against any lapses in ethical conduct or breaches of integrity.
        </p>
        <p>
            The unequivocal objective is to foster a culture where ethics and integrity are revered virtues, sacrosanct in every facet of our tax management. Through the rigorous enforcement of our Tax Strategy, we endeavor to forge an indomitable shield that ensures these principles are held inviolable.
        </p>
    </section>

    <section>
        <h2>Sustainable and Lasting Growth through Prudent Tax Management</h2>
        <p>
            Abrahamic commitment to sustainable tax risk management is an emblem of our dedication to fostering enduring growth. We recognize that taxes play an integral role in bolstering the economies of the countries where our esteemed Group conducts its multifaceted business operations. In this regard, we firmly uphold our responsibility to make meaningful contributions while steadfastly safeguarding the illustrious reputation of the Abrahamic Ecosystem, not merely for the present but for generations to come.
        </p>
        <p>
            Simultaneously, in consonance with our overarching objective of enhancing shareholder value, Abrahamic meticulously orchestrates legitimate tax planning initiatives. These strategies meticulously adhere to both the letter and the spirit of the law, exemplifying our unwavering commitment to ethical conduct in the realm of taxation. We conscientiously harness the tax incentives proffered by relevant tax legislations, ensuring that every action taken is in harmony with the prevailing legal framework while simultaneously advancing the interests of our stakeholders.
        </p>
            </section>
            
            <section>
        <h1>Engagement with Tax Authorities</h1>
        <p>Abrahamic places great emphasis on fostering proactive and constructive relationships with the competent Tax Authorities within the areas where the Group conducts its operations. This approach is guided by principles of openness, honesty, and unwavering integrity, all of which are core values embedded in Abrahamic tax management philosophy.</p>
        <p>When engaging with Tax Authorities, the Abrahamic Ecosystem stands committed to transparency. It willingly and comprehensively provides access to all relevant information pertaining to the facts and circumstances of its tax-related matters. This unfettered access ensures that Tax Authorities have all the necessary data and documentation at their disposal for an exhaustive and judicious examination, enabling them to make informed and well-founded assessments.</p>
        <p>This commitment to transparency not only reflects Abrahamic unwavering dedication to regulatory compliance but also serves as a testament to its proactive and cooperative approach to tax-related matters. Through this open and collaborative stance, Abrahamic endeavors to build and maintain trust-based relationships with Tax Authorities, fostering an environment of mutual respect and shared objectives in the realm of taxation.</p>
    </section>

    <section>
        <h2>Comprehensive Tax Disclosure and Confidentiality</h2>
        <p>Abrahamic holds an unwavering commitment to transparency and accountability in all its financial and non-financial reporting. This commitment extends to providing the most pertinent and comprehensive tax information to effectively communicate our approach towards taxation and our own tax effectiveness.</p>
        <p>However, we acknowledge that the path to disclosure must be thoughtfully balanced. While transparency is paramount, we also recognize the imperative to safeguard certain information that, if disclosed, could potentially result in significant commercial, reputational, or legal harm to the Abrahamic Ecosystem.</p>
        <p>In alignment with our principles of integrity and adherence to tax laws, we are diligent in determining which tax-related information should be made available for public scrutiny and which information necessitates strict confidentiality. This delicate balance ensures that our commitment to transparency harmonizes with our responsibility to protect the best interests of our Ecosystem.</p>
    </section>

    <section>
        <h2>Tax Principles in Alignment with Abrahamic Values</h2>
        <p>In accordance with the principles enshrined in the Abrahamic Code of Conduct, which hold equal significance in the realm of taxation as expounded above, the Tax Strategy is designed to articulate and manifest the ensuing tax principles:</p>
        <ul>
            <li><strong>Unwavering Compliance with Tax Laws and Regulations:</strong> Abrahamic commits to full compliance with all pertinent tax laws and regulations. This entails the prompt and precise fulfillment of tax payments, submission of tax returns, and adherence to any other tax-related obligations in a just, accurate, and timely manner.</li>
            <li><strong>Sustainable Taxation:</strong> Abrahamic upholds a commitment to sustainable tax practices, characterized by ethical tax conduct that concurrently delivers superior and sustainable returns to our esteemed shareholders. We recognize that by applying the legally mandated level of taxation, we play a pivotal role in contributing to economic growth and bolstering social cohesion in the areas that we will operate. Our taxation endeavors are underpinned by the awareness that our tax payments are integral to the development and prosperity of these regions.</li>
        </ul>
        <p>Our adherence to these tax principles exemplifies our dedication to upholding the highest standards of ethical and legal tax management within the Abrahamic Ecosystem.</p>
    </section>

    <section>
        <h2>Comprehensive Tax Risk Management</h2>
        <p>Abrahamic maintains a resolute stance against engaging in tax risks, and our commitment extends to the diligent implementation of stringent compliance controls. These measures are strategically designed to effectively mitigate any potential tax risk factors that could lead to contraventions of tax regulations, or the misuse of the principles and objectives embedded within applicable tax regulations.</p>
        <p>Our approach to tax risk management encompasses the following key facets:</p>
        <ul>
            <li><strong>Compliance Oversight:</strong> Abrahamic conducts meticulous oversight of tax compliance to ensure strict adherence to tax laws and regulations. We employ internal controls and monitoring mechanisms to scrutinize all tax-related activities, identifying and addressing any areas of potential non-compliance.</li>
            <li><strong>Regulatory Adherence:</strong> Abrahamic is unwavering in its commitment to upholding the letter and spirit of tax regulations. Our tax risk management protocols are built on a foundation of scrupulous observance of all relevant tax laws, rules, and regulations.</li>
            <li><strong>Preventative Measures:</strong> Proactive measures are at the core of our tax risk management strategy. We actively work to identify and mitigate potential tax risks before they can materialize, thereby safeguarding the integrity of our tax practices.</li>
            <li><strong>Ethical Taxation:</strong> Our tax risk management practices are firmly rooted in ethical taxation principles. We aim to ensure that our tax-related decisions align with not only the legal requirements but also the highest ethical standards, preventing any potential abuse of tax regulations.</li>
            <li><strong>Continuous Improvement:</strong> Abrahamic will start to commit to any ongoing process of improvement in tax risk management. We will regularly review and enhance our controls and procedures to adapt to evolving tax landscapes and to maintain the utmost effectiveness in risk mitigation.</li>
        </ul>
        <p>By adhering to these principles and diligently executing our tax risk management strategy, Abrahamic upholds its unwavering commitment to ethical, compliant, and responsible tax practices within the Abrahamic Ecosystem.</p>
            </section>
            
            <section>
        <h1>Enhanced Tax Transparency and Collaboration with Tax Authorities</h1>
        <p>Abrahamic is steadfast in its commitment to fostering a cooperative and transparent relationship with Tax Authorities worldwide. Our approach to tax transparency is characterized by a sincere commitment to open dialogue and collaboration, grounded in the principles of good faith. Our primary objective in pursuing this approach is to attain clarity and certainty regarding the tax positions adopted by Abrahamic.</p>
        <p>Our Tax Transparency strategy encompasses the following key components:</p>
        <ul>
            <li><strong>Cooperation:</strong> Abrahamic will be placing a high premium on collaboration with Tax Authorities. We will actively engage in constructive and proactive interactions to address tax-related matters. Our cooperation extends to providing timely and accurate information, responding to inquiries, and actively participating in discussions aimed at resolving tax issues.</li>
            <li><strong>Open and Honest Communication:</strong> Transparency is a cornerstone of our approach. We will engage in and maintain a policy of open and honest communication with Tax Authorities, ensuring that all relevant information is readily available and shared in a clear and comprehensible manner. This commitment to transparency helps establish a foundation of trust.</li>
            <li><strong>Good Faith:</strong> Abrahamic will be operating in good faith when dealing with Tax Authorities. We adhere to the highest ethical standards and principles in our interactions. This good-faith approach is aimed at achieving mutually beneficial outcomes, upholding the integrity of our tax positions, and maintaining our reputation as a responsible taxpayer.</li>
            <li><strong>Certainty in Tax Positions:</strong> We will actively seek to attain certainty regarding our tax positions through collaboration and transparency. This involves working closely with Tax Authorities to clarify any ambiguities, resolve disputes, and ensure that our tax obligations are met accurately and comprehensively.</li>
            <li><strong>Compliance:</strong> Abrahamic is fully committed to complying with all applicable tax laws and regulations. Our transparent and cooperative approach with Tax Authorities is underpinned by a commitment to strict adherence to tax compliance requirements.</li>
            <li><strong>Documentation:</strong> We will maintain comprehensive and well-documented records of our tax positions, transactions, and interactions with Tax Authorities. These records serve as a testament to our commitment to transparency and cooperation.</li>
        </ul>
        <p>By embodying these principles and actively engaging in transparent, cooperative relationships with Tax Authorities, Abrahamic will be reinforcing its dedication to responsible and ethical tax practices. We believe that by working collaboratively with Tax Authorities, we can achieve greater clarity, predictability, and compliance in our tax affairs, contributing to the overall integrity of the global tax ecosystem.</p>
    </section>

    <section>
        <h2>Cultivating and Disseminating the Abrahamic Tax Culture</h2>
        <p>Abrahamic is resolute in its commitment to fostering and promoting a distinctive tax culture that aligns with the core principles, values, and guidelines enshrined in the Abrahamic Ecosystem Tax Strategy. This steadfast commitment extends to ensuring the accurate application of tax regulations and the transparent disclosure of our approach to taxation.</p>
        <p>Key Components of Our Tax Culture Promotion:</p>
        <ul>
            <li><strong>Principles and Values:</strong> Our tax culture is firmly rooted in the principles of integrity, transparency, and compliance. These principles are integral to our Tax Strategy and permeate every aspect of our tax-related activities. By adhering to these principles, we maintain the highest standards of ethical tax conduct.</li>
            <li><strong>Guidelines and Best Practices:</strong> Abrahamic provides clear and comprehensive guidelines that outline our approach to tax compliance. These guidelines serve as a reference point for all employees, reinforcing the importance of aligning with our Tax Strategy and abiding by applicable tax regulations.</li>
            <li><strong>Training and Education:</strong> We acknowledge the vital role of education in nurturing our tax culture. Consequently, we will organize training sessions for employees in the accounting department or those with roles within the organization. These training sessions aim to bolster tax awareness, guaranteeing that all employees possess comprehensive knowledge of our tax policies, procedures, and compliance obligations.</li>
            <li><strong>Inclusivity:</strong> Our commitment to cultivating a tax-conscious culture extends across and functions. We believe that tax compliance is a collective responsibility that transcends the Tax Department. Therefore, we will actively engage and educate at all levels and functions to instill a shared sense of responsibility for tax matters.</li>
            <li><strong>Proper Tax Disclosure:</strong> Abrahamic places a premium on the accurate and transparent disclosure of our tax approach. We will ensure that our tax reporting aligns with regulatory requirements, providing a true and fair representation of our tax obligations and activities.</li>
            <li><strong>Monitoring and Accountability:</strong> We will employ robust monitoring mechanisms to gauge the effectiveness of our tax culture promotion efforts. This includes assessing the extent to which employees are aligned with our tax principles and values. Accountability measures are in place to address any deviations from our tax culture standards.</li>
            <li><strong>Continuous Improvement:</strong> Abrahamic will be committed to continuously enhancing our tax culture. We will actively seek feedback from employees and external stakeholders to identify areas for improvement. This iterative approach will allow us to adapt to evolving tax regulations and best practices.</li>
        </ul>
        <p>By promoting the Abrahamic tax culture, we will be reinforcing our commitment to responsible tax practices, ethical conduct, and compliance. This culture permeates our organization, we must ensure that every involved plays a pivotal role in upholding our tax principles and values. Through education, we aim to strengthen our tax culture as an integral part of our corporate identity and ethical framework.</p>
            </section>
            
            <section>
        <h1>Foundational Principles of Abrahamic Tax Practices</h1>
        <p>Abrahamic commitment to responsible tax management is underpinned by a set of fundamental principles and practices that govern our daily tax-related actions. These principles are carefully designed to ensure that we not only adhere to the highest standards of tax compliance but also align our tax behaviors with the strategic objectives to which we are steadfastly resolute.</p>
        <ul>
            <li><strong>Compliance with Tax Laws:</strong> Abrahamic will be unwavering in its commitment to full compliance with all applicable tax laws and regulations. This will encompass the timely and accurate fulfillment of tax obligations, including tax payments, returns, and other requisite tax-related submissions. Our dedication to compliance extends to all territories where the Abrahamic Ecosystem operates, ensuring our operations are conducted within the parameters defined by governments and tax authorities.</li>
            <li><strong>Sustainable Taxation:</strong> Abrahamic recognizes that taxes constitute a vital contribution to the economies of the countries where we conduct business. We are deeply committed to a sustainable approach to taxation, characterized by ethical conduct and the responsible payment of taxes at the legally required levels. We operate with the awareness that our tax payments play a pivotal role in contributing to economic growth and fostering social cohesion in the areas we serve.</li>
            <li><strong>Ethical Tax Planning:</strong> Abrahamic will be engaging in legitimate tax planning practices that adhere not only to the letter but also the spirit of tax laws. This ethical approach ensures that our tax planning aligns with the broader ethical framework of our organization. We conscientiously leverage tax incentives provided by relevant tax legislation to optimize our tax positions while upholding the principles of fairness and integrity.</li>
            <li><strong>Risk Mitigation:</strong> The Abrahamic Ecosystem maintains a rigorous stance against taking undue tax risks. We have implemented robust compliance controls aimed at mitigating tax risk factors that could lead to violations of tax regulations or abuse of tax-related principles and aims. Our initiative-taking approach to risk management is essential to safeguarding our reputation, financial stability, and compliance with tax laws.</li>
            <li><strong>Transparency and Cooperation:</strong> We will continuously embrace these interactions with Tax Authorities, nurturing relationships based on good faith and mutual respect. We seek to achieve certainty in our tax positions by engaging openly and collaboratively with tax authorities. This cooperative approach not only demonstrates our commitment to ethical tax conduct but also fosters a climate of trust and certainty in tax matters.</li>
            <li><strong>Tax Culture Promotion:</strong> Abrahamic will be dedicated to cultivating a tax-aware culture that is inspired by the principles, values, and guidelines articulated in our Tax Strategy. This culture extends beyond the Tax Department and encompasses all employees, including those outside of traditional tax rolls. Through ongoing training sessions and educational initiatives, we ensure that every member of our workforce is well-informed about our tax policies, procedures, and compliance obligations.</li>
        </ul>
        <p>These foundational tax practices underscore Abrahamic unwavering commitment to ethical, responsible, and compliant tax management. By upholding these principles in our daily tax behaviors, we will be reaffirming our dedication to achieving our strategic objectives while maintaining the highest standards of integrity and compliance in all tax-related matters.</p>
    </section>

    <section>
        <h2>Tax Uncertainty Management</h2>
        <p>Abrahamic will maintain an unwavering commitment to the minimization of tax uncertainties in its operations. This commitment will be rooted in our dedication to ensuring clarity and compliance within the complex landscape of tax law. In situations where tax law lacks clarity or is open to multiple interpretations, Abrahamic undertakes a comprehensive and meticulous tax assessment process. This process will be designed to guide our approach, adopting a reasonable and legally sound interpretative stance. To reinforce this approach, we may seek the expertise of external advisors to provide additional insights and ensure that the position taken aligns with the principles of legality.</p>
        <h3>Key Elements of Tax Uncertainty Management:</h3>
        <ul>
            <li><strong>Legal Interpretation:</strong> Abrahamic adheres to the principle of legality when navigating uncertain tax terrain. We rigorously analyze the applicable tax laws, regulations, and any associated guidance to establish a solid legal foundation for our tax positions. This approach is essential to minimize ambiguity and promote compliance.</li>
            <li><strong>External Advisory Support:</strong> In complex tax matters where uncertainty prevails, Abrahamic may engage external tax advisors with expertise in the relevant jurisdictions. These advisors provide valuable insights and assist in formulating a reasonable interpretative approach that aligns with the legal framework and our strategic objectives.</li>
            <li><strong>Favorable Settlement:</strong> Our tax assessments aim to ensure that the positions we take would, more likely than not, be settled in favor of the Abrahamic Ecosystem. This commitment to achieving favorable outcomes reflects our dedication to responsible tax management.</li>
            <li><strong>Advance Tax Rulings:</strong> To enhance clarity and fairness in our tax matters, Abrahamic may proactively seek advance tax rulings from tax authorities. These rulings provide official guidance on specific tax issues and help us navigate complex tax scenarios with confidence and transparency.</li>
            <li><strong>Advance Pricing Agreements:</strong> In cases where transfer pricing is a key consideration, advance pricing agreements may be pursued. These agreements, negotiated with tax authorities, establish a predetermined pricing methodology for related-party transactions. This proactive approach reduces transfer pricing uncertainties and aligns our practices with regulatory expectations.</li>
        </ul>
        <p>The Abrahamic approach to managing tax uncertainty is grounded in the principles of legality, clarity, and proactive engagement with tax authorities. By adopting these practices, we aim to minimize ambiguity, maintain compliance with tax laws, and ensure that our tax positions are well-founded and consistent with the Abrahamic Ecosystem's values and strategic goals.</p>
    </section>

    <section>
        <h1>Resolution of Tax Disputes</h1>
        <p>Abrahamic recognizes the importance of effective dispute resolution in upholding its commitment to tax compliance and transparency. When faced with significant tax audits or differences in interpretation with competent Tax Authorities, our approach is grounded in thorough risk assessment and dedication to protecting the interests of our shareholders.</p>
        <h2>Key Elements of Tax Dispute Resolution:</h2>
        <ul>
            <li><strong>Risk Assessment:</strong> Each significant tax audit undergoes a comprehensive risk assessment. This evaluation aims to analyze the nature and extent of the audit, considering all relevant factors. It is imperative to assess the potential implications and consequences of the audit findings.</li>
            <li><strong>Compromise Consideration:</strong> In cases where differences in interpretation arise during the audit, Abrahamic diligently considers the option of compromise positions. These positions are carefully crafted to strike a balance between legal compliance and the efficient resolution of the dispute.</li>
            <li><strong>Litigation vs. Alternative Procedures:</strong> Abrahamic evaluates whether litigation or alternative dispute resolution procedures, such as Mutual Agreement Procedures (MAPs), are the most suitable means of addressing the tax dispute. This assessment is guided by a commitment to uphold our technical position and protect our interests.</li>
            <li><strong>Technical Expertise:</strong> In any interpretation differences, Abrahamic stands firmly by its strong and well-founded technical position. Our approach is characterized by a robust understanding of tax laws and regulations, ensuring that our position aligns with the legal framework.</li>
            <li><strong>Cooperation:</strong> Abrahamic maintains a cooperative stance throughout the dispute resolution process. We will engage constructively with Tax Authorities, seeking to achieve a fair and equitable resolution that upholds the principles of transparency and compliance.</li>
            <li><strong>Protection of Shareholder Interests:</strong> Throughout the dispute resolution process, Abrahamic remains resolute in protecting the interests of our shareholders. We are committed to pursuing resolutions that safeguard the financial well-being and reputation of the Abrahamic Ecosystem.</li>
            <li><strong>Mutual Agreement Procedures (MAPs):</strong> Abrahamic recognizes the value of MAPs in resolving international tax disputes. We are prepared to engage in these procedures when necessary to address cross-border tax issues and reach mutual agreements with tax authorities. The Abrahamic approach to tax dispute resolution emphasizes the importance of thorough risk assessment, compliance with tax laws, and the protection of shareholder interests. We are committed to pursuing resolutions that are fair, equitable, and in alignment with our technical positions, while also fostering cooperative relationships with Tax Authorities. This commitment reflects our dedication to responsible and transparent tax management.</li>
        </ul>
    </section>

    <section>
        <h1>Cooperative Engagement with Tax Authorities</h1>
        <p>Abrahamic will be placing significant emphasis on fostering a cooperative relationship with Tax Authorities to enhance transparency and ensure compliance across the Abrahamic Ecosystem Group. This commitment is underpinned by a proactive approach to tax management, aimed at achieving certainty through openness.</p>
        <h2>Key Elements of Our Cooperative Approach:</h2>
        <ul>
            <li><strong>Progressive Adherence:</strong> Abrahamic encourages the gradual integration of its most relevant Group entities into cooperative compliance regimes. This strategic alignment with evolving tax compliance frameworks underscores our commitment to transparency. By engaging constructively with Tax Authorities, we aim to facilitate a mutually beneficial exchange of information.</li>
            <li><strong>Tax Department Oversight:</strong> All Tax Authority inquiries and audits are centrally managed by our specialized Tax Department. This centralized approach ensures the efficient collection of pertinent information required for analysis by the Public Authority. It also fosters consistency and expertise in handling tax-related matters across the Abrahamic Ecosystem Group.</li>
            <li><strong>Transfer Pricing Documentation:</strong> Abrahamic diligently adheres to the provisions governing transfer pricing documentation. Our practices are fully aligned with the internationally recognized Transfer Pricing Guidelines. This commitment to robust documentation not only enhances transparency but also demonstrates our dedication to responsible tax management.</li>
            <li><strong>Information Exchange:</strong> Abrahamic will actively engage in the exchange of relevant tax-related information with Tax Authorities. This exchange includes comprehensive data that assists in audits, inquiries, and assessments, reinforcing our commitment to transparency and compliance.</li>
            <li><strong>Regulatory Compliance:</strong> Our cooperative approach fully complies with the tax laws and regulations of the countries where Abrahamic operates. We prioritize adherence to legal requirements while actively seeking to build positive and collaborative relationships with Tax Authorities.</li>
            <li><strong>Mutual Benefit:</strong> Through our cooperative stance, we aim to establish a mutual understanding with Tax Authorities. This understanding is based on the principles of transparency and fairness, benefiting both parties. It enables efficient tax assessments and contributes to the overall integrity of the tax system.</li>
            <li><strong>Continuous Improvement:</strong> Abrahamic will be committed to continually enhancing its cooperative engagement with Tax Authorities. We will regularly assess and refine our practices to align with evolving tax compliance standards and best practices.</li>
        </ul>
        <p>By engaging with Tax Authorities, centralizing tax management, adhering to transfer pricing guidelines, and ensuring regulatory compliance, Abrahamic will demonstrate a robust commitment to cooperative tax compliance. This approach fosters a productive and mutually beneficial relationship with Tax Authorities, contributing to the integrity and effectiveness of the global tax framework.</p>
            </section>
            
            <section>
        <h1>Management of Related Party Transactions in Compliance with OECD Guidelines</h1>
        <p>Cross-border transactions involving Abrahamic Ecosystem entities are meticulously managed, guided by internationally accepted principles mandating the strict adherence to arm's length terms and conditions. This essential practice, in accordance with the standards outlined in the OECD Model Tax Convention and OECD Transfer Pricing Guidelines, underscores our unwavering commitment to transparent and lawful business conduct.</p>
        <h2>Key Components of Our Approach:</h2>
        <ul>
            <li><strong>Arm's Length Principle:</strong> Abrahamic is fully committed to applying the arm's length principle in all related party transactions. This principle, as prescribed by the OECD Model Tax Convention, ensures that transactions between affiliated entities are conducted as if they were between unrelated, independent entities. This approach is fundamental to maintaining fairness, transparency, and compliance with international tax standards.</li>
            <li><strong>OECD Guidelines:</strong> Our related party transactions adhere to the guidelines outlined by the Organization for Economic Co-operation and Development (OECD). The OECD's Transfer Pricing Guidelines provide comprehensive and globally recognized guidance on determining appropriate pricing for transactions between related entities. Abrahamic ensures that all transactions comply with these guidelines to mitigate any potential tax risks.</li>
            <li><strong>Documentation and Compliance:</strong> We will maintain rigorous documentation for all related party transactions. This documentation not only serves as evidence of compliance with the arm's length principle but also demonstrates our commitment to transparency. We are proactive in ensuring that the terms and conditions of such transactions align with internationally accepted norms.</li>
            <li><strong>Independent Evaluation:</strong> Abrahamic may engage external experts or consultants to conduct independent evaluations when necessary. These evaluations are crucial in confirming the appropriateness of the pricing structure and the terms of related party transactions. They provide an additional layer of assurance in ensuring compliance with OECD guidelines.</li>
            <li><strong>Legal and Regulatory Compliance:</strong> Our approach to related party transactions is designed to fully comply with the tax laws and regulations of the countries in which Abrahamic operates. We will be diligent in meeting all legal requirements and obligations related to cross-border transactions involving affiliated entities.</li>
            <li><strong>Risk Mitigation:</strong> By adhering to the arm's length principle and the OECD Transfer Pricing Guidelines, Abrahamic effectively mitigates tax-related risks associated with related party transactions. This proactive approach safeguards the integrity of our global tax framework.</li>
            <li><strong>Ongoing Monitoring:</strong> Abrahamic remains vigilant in monitoring and adapting to changes in international tax regulations and guidelines. We continuously assess our related party transactions to ensure they remain consistent with evolving standards.</li>
        </ul>
        <p>Our commitment to managing related party transactions in strict compliance with the OECD's internationally recognized guidelines underscores our dedication to transparency, fairness, and lawful tax practices. This approach enhances our reputation for ethical conduct and bolsters our compliance with complex international tax regulations.</p>
    </section>

    <section>
        <h1>Preventing Aggressive Tax Planning and Ensuring Economic Substance</h1>
        <p>The Abrahamic Ecosystem maintains a steadfast commitment to ethical tax practices and rejects any form of artificial tax reduction through the use of countries with privileged taxation, commonly referred to as "tax havens." Our approach aligns with international tax standards and emphasizes the importance of economic substance in our global transactions.</p>
        <h2>Key Principles and Measures:</h2>
        <ul>
            <li><strong>Avoidance of Tax Havens:</strong> Abrahamic Ecosystem unequivocally refrains from engaging in aggressive tax planning strategies that involve tax havens. We do not establish artificial structures or entities in authorities solely to exploit preferential tax rates. Instead, we ensure that our business operations and transactions have genuine economic significance in the areas where they are conducted.</li>
            <li><strong>Economic Substance:</strong> Our transactions and entities are structured to reflect the economic reality of the activities they represent. This means that we conduct business and generate profits in authorities where we add tangible value. We adhere to the principle that taxation should occur where economic value is created, rather than being artificially shifted to low-tax authorities.</li>
            <li><strong>Compliance with International Standards:</strong> Abrahamic Ecosystem is fully committed to complying with international tax standards, including those set forth by the Organization for Economic Co-operation and Development (OECD) and other relevant regulatory bodies. We actively ensure that our tax practices align with global expectations for transparency and fairness.</li>
            <li><strong>Substance Over Form:</strong> In all our tax planning and structuring, we will prioritize the substance of our activities over their legal form. This approach will have a line with established legal principles that prevent the misuse of legal structures to achieve unintended tax advantages.</li>
            <li><strong>Transparency and Documentation:</strong> We will maintain detailed documentation of our business operations and transactions, demonstrating the economic substance and compliance with tax regulations. This documentation serves as a crucial tool for ensuring that our tax practices withstand scrutiny by tax authorities and regulatory bodies.</li>
            <li><strong>Compliance Oversight:</strong> Abrahamic Ecosystem's Tax Department is responsible for overseeing compliance with our stringent tax principles. This includes conducting regular assessments to confirm that our tax planning and strategies adhere to our commitment to economic substance and fairness.</li>
            <li><strong>Responsible Tax Planning:</strong> While we engage in legitimate tax planning activities to optimize our tax position, our approach is guided by ethical considerations and respect for the spirit of tax laws. We do not pursue aggressive tax avoidance strategies that could lead to disputes with tax authorities.</li>
        </ul>
        <p>By upholding these principles and measures, Abrahamic Ecosystem ensures that its global tax practices align with the highest ethical standards and international tax norms. Our commitment to economic substance, and responsible tax planning underscores our dedication to ethical conduct in the complex field of international taxation.</p>
    </section>

    <section>
        <h1>Enhancing Tax Risk Management Through Internal Controls</h1>
        <h2>Introduction:</h2>
        <p>Abrahamic Ecosystem will be committed to maintaining robust internal control systems that ensure full compliance with tax laws across its entities. Our internal control framework for tax risk management, known as the Tax Control Framework (TCF), is designed to effectively identify, measure, manage, and control tax risks in accordance with international standards, including those set by the Organization for Economic Co-operation and Development (OECD).</p>
        <h2>Key Components of the Tax Control Framework (TCF):</h2>
        <ul>
            <li><strong>Progressive Implementation:</strong> Abrahamic Ecosystem will progressively be rolling out the TCF, starting with its most significant entities and gradually extending its coverage to all parts of the organization. This step-by-step approach allows us to meticulously implement the TCF and ensure its effectiveness throughout our global operations.</li>
            <li><strong>Alignment with International Guidelines:</strong> The TCF is designed in strict alignment with international guidelines, as transposed by the relevant Tax Authorities. This alignment ensures that our control framework complies with local and international tax regulations, leaving no room for ambiguity or misinterpretation.</li>
            <li><strong>Focus on Tax Risks:</strong> The primary objective of the TCF is to focus on tax risks. This includes identifying potential risks of breaching tax rules or manipulating the tax system. By proactively addressing these risks, Abrahamic Ecosystem minimizes its exposure to tax-related issues and maintains a high standard of tax compliance.</li>
            <li><strong>Clear Roles and Responsibilities:</strong> The TCF clearly defines the roles and responsibilities of individuals involved in the tax management process. This includes the segregation of duties and the escalation of decisions, ensuring that tax-related decisions are made in a structured and accountable manner.</li>
            <li><strong>Annual Reporting:</strong> On an annual basis, a comprehensive report will be submitted to the Board of Directors, facilitated through the Audit Committee. This report provides an overview of the outcomes of the reviews conducted on the Tax Control Framework. It highlights any identified issues or weaknesses and outlines the remedial measures taken to address them.</li>
            <li><strong>Continuous Improvement:</strong> Abrahamic Ecosystem is committed to a culture of continuous improvement in tax risk management. The TCF is subject to regular evaluation and refinement to adapt to changing tax regulations and emerging risks. This ensures that our tax risk management practices remain effective and up to date.</li>
        </ul>
        <h2>Progressive Implementation of Tax Risk Control System:</h2>
        <p>Abrahamic is in the process of systematically implementing a comprehensive control system that specifically targets tax risks. This implementation is part of our overarching strategy aimed at global expansion. The objective is to enhance our overall documentation practices within the entire Abrahamic Ecosystem. This progressive rollout aligns with our guidelines for expansion on a global scale. It is anticipated that the implementation of this control system will significantly contribute to the enhancement of our documentation processes, ensuring greater organizational efficiency across the entirety of the Abrahamic Ecosystem.</p>
        <h2>Conclusion:</h2>
        <p>The implementation of the Tax Control Framework within Abrahamic Ecosystem underscores our dedication to maintaining the highest standards of tax compliance and risk management. By aligning with international guidelines, clearly defining responsibilities, and conducting annual reviews, we strengthen our commitment to ethical and responsible tax practices. This proactive approach not only mitigates tax risks but also contributes to the long-term sustainability and reputation of the Abrahamic Ecosystem.</p>
    </section>

    <section>
        <h1>Whistleblowing</h1>
        <p>Abrahamic maintains an unwavering commitment to the complete implementation and continual upkeep of a comprehensive global Whistleblowing Procedure. This procedure encompasses the establishment of anonymous channels made readily accessible by the Abrahamic Ecosystem Group. These channels are designed to facilitate the reporting of any instances of potentially illegal or suspicious tax-related conduct, as well as the communication of any concerns pertaining to tax matters.</p>
        <p>In strict adherence to the principles articulated in the Abrahamic Code of Conduct, it is imperative to underscore that there exists an absolute and unequivocal prohibition on any form of retaliation against any individual who, in good faith, reports any concern related to tax matters. This commitment to non-retaliation is central to fostering a culture of transparency and accountability within the Abrahamic Ecosystem.</p>
            </section>
            
            <section>
    <h1>Soft Controls</h1>
    <p>Within the Abrahamic Ecosystem, there will be a dedicated Head of Group Tax operations under the direct purview of the Abrahamic Chief Financial Officer (CFO). This will establish a reporting structure to ensure a streamlined and efficient flow of tax-related information and decision-making processes.</p>
    <p>The Tax Department, a vital component of the Abrahamic organization, will be furnished with a team of highly skilled and experienced professionals. This collective expertise is leveraged to manage and navigate the intricacies of taxation comprehensively.</p>
    <p>A core responsibility of the Tax Department lies in actively promoting a culture deeply ingrained with the principles and values of tax compliance. To achieve this objective, the department consistently organizes and executes extensive training initiatives. These programs are exclusive to tax personnel but can be extended to other employees with a department affiliation. The overarching aim is to cultivate an organization-wide understanding and commitment to tax compliance principles.</p>
    <p>It is imperative to underscore that no incentive or reward mechanisms are tied to the reduction of the tax burden for managerial staff within the Abrahamic Ecosystem. This ensures that tax-related decisions are made in the best interests of compliance and integrity, without undue influence from external factors.</p>
    <p>The Tax Department employs state-of-the-art technology solutions to maximize the quality and precision of data used to underpin tax management processes and subsequent tax return submissions. These technology solutions are rigorously maintained to adhere to the highest standards of accuracy and compliance, bolstering the Abrahamic Ecosystem's commitment to sound tax practices.</p>
</section>
<p>Approved by the Board of Directors on Oct 23, 2023 Rev.1</p>



            <div style={{ textAlign: 'center' }}>
                <ReturnHome/>
            </div>

        </div>
            
    )
}

const styles = {
    container: {
        backgroundColor: "#041f26",
        color: "white",
        padding: "20px",
        boxShadow: "0px 0px 10px #282c34",
        display: "flex",
        flexDirection: "column",
        textAlign: "justify",
    },
    title: {
        textAlign: "center",
        fontSize: "36px",
        margin: "0 0 20px 0"
    },

}


export default LegalAndEthicalFramework;
